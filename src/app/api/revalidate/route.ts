import { timingSafeEqual } from "node:crypto";

import { revalidateTag } from "next/cache";
import { z } from "zod";

import { catalogTags } from "@/lib/api/catalog";

/**
 * Webhook called by the backend after a published product is created, edited,
 * unpublished, or deleted: `POST { slug }` with `Authorization: Bearer <secret>`.
 *
 * Backend env: NEXT_REVALIDATE_URL=<frontend>/api/revalidate and
 * NEXT_REVALIDATE_SECRET equal to this app's REVALIDATE_SECRET.
 */
const bodySchema = z.object({ slug: z.string().trim().min(1).max(255) });

function isAuthorized(header: string | null): boolean {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || !header) return false;
  const expected = Buffer.from(`Bearer ${secret}`);
  const actual = Buffer.from(header);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export async function POST(request: Request) {
  if (!isAuthorized(request.headers.get("authorization"))) {
    return Response.json(
      {
        error: { code: "UNAUTHORIZED", message: "Invalid revalidation secret" },
      },
      { status: 401 },
    );
  }

  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json(
      { error: { code: "VALIDATION_ERROR", message: "Body must be { slug }" } },
      { status: 422 },
    );
  }

  const { slug } = parsed.data;
  // The product page itself, plus every list it can appear in (home,
  // listing, category, related). Stale content is served while refreshing.
  revalidateTag(catalogTags.product(slug), "max");
  revalidateTag(catalogTags.all, "max");

  return Response.json({ data: { revalidated: true, slug } });
}
