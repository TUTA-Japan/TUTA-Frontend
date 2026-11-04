import type { Metadata } from "next";

import { SITE } from "@/constants/site";

export const SITE_OPEN_GRAPH = {
  siteName: SITE.name,
  locale: "vi_VN",
  type: "website",
} satisfies Metadata["openGraph"];

type PageMetadataInput = {
  title: string;
  description?: string;
  path: string;
  image?: string;
};

// openGraph and twitter are merged shallowly across segments, so pages that
// override them must restate the shared fields.
export function buildPageMetadata({
  title,
  description = SITE.description,
  path,
  image,
}: PageMetadataInput): Metadata {
  const images = image ? [image] : [SITE.ogImage];

  return {
    title,
    description,
    openGraph: { ...SITE_OPEN_GRAPH, title, description, url: path, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
