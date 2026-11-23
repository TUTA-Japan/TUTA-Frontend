import "server-only";

import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

import { isApiError } from "./errors";
import { apiRequest, joinUrl } from "./http";
import { toCategory, toPaginated, toProduct, type Paginated } from "./mappers";
import type {
  CategoryPageDto,
  PageDto,
  ProductDetailDto,
  PublicCategoryDto,
  PublicProductDto,
  RelatedProductDto,
} from "./types";

/**
 * Cache tags for catalog data. The backend webhook (POST /api/revalidate)
 * invalidates `product:<slug>` and `catalog` whenever a product changes.
 */
export const catalogTags = {
  all: "catalog",
  product: (slug: string) => `product:${slug}`,
} as const;

/**
 * Time-based safety net. Category edits do not trigger the backend webhook,
 * so cached data is also refreshed at least this often.
 */
const REVALIDATE_SECONDS = 3600;

function apiUrl(path: string): string {
  const baseUrl = process.env.API_URL;
  if (!baseUrl) {
    throw new Error("API_URL is not configured (see .env.local)");
  }
  return joinUrl(baseUrl, path);
}

function getCached<T>(path: string, tags: string[] = [catalogTags.all]) {
  return apiRequest<T>(apiUrl(path), {
    cache: "force-cache",
    next: { revalidate: REVALIDATE_SECONDS, tags },
  });
}

/** Resolve a 404 to `undefined` so pages can call `notFound()`. */
async function orUndefinedIfNotFound<T>(
  request: Promise<T>,
): Promise<T | undefined> {
  try {
    return await request;
  } catch (error) {
    if (isApiError(error) && error.status === 404) return undefined;
    throw error;
  }
}

const pageQuery = (page: number) => `page=${encodeURIComponent(page)}`;

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Path segments the backend serves as fixed routes before `/:slug`
 * (`/products/search|featured|slugs`, `/categories/slugs`). Requesting them
 * "by slug" returns a different payload, so they can never be a record.
 */
const RESERVED_PRODUCT_SLUGS = new Set(["search", "featured", "slugs"]);
const RESERVED_CATEGORY_SLUGS = new Set(["slugs"]);

function isLookupSlug(slug: string, reserved: Set<string>): boolean {
  return SLUG_PATTERN.test(slug) && !reserved.has(slug);
}

/** UC-P01: 8 published products per page. Out-of-range pages are clamped. */
export async function getProductPage(
  page: number,
): Promise<Paginated<Product>> {
  const dto = await getCached<PageDto<PublicProductDto>>(
    `/products?${pageQuery(page)}`,
  );
  return toPaginated(dto, toProduct);
}

/** UC-P07: accent- and case-insensitive search. Never cached (user input). */
export async function searchProducts(
  query: string,
  page = 1,
): Promise<Paginated<Product>> {
  const dto = await apiRequest<PageDto<PublicProductDto>>(
    apiUrl(
      `/products/search?q=${encodeURIComponent(query)}&${pageQuery(page)}`,
    ),
    { cache: "no-store" },
  );
  return toPaginated(dto, toProduct);
}

/** UC-P04: up to 4 featured products, ordered by featured position. */
export async function getFeaturedProducts(): Promise<Product[]> {
  const dto = await getCached<{ items: PublicProductDto[] }>(
    "/products/featured",
  );
  return dto.items.map(toProduct);
}

/** UC-S01: published product slugs for `generateStaticParams`. */
export async function getProductSlugs(): Promise<string[]> {
  const dto = await getCached<{ slugs: string[] }>("/products/slugs");
  return dto.slugs;
}

/** UC-P02: published product by slug, or `undefined` (draft/missing). */
export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  if (!isLookupSlug(slug, RESERVED_PRODUCT_SLUGS)) return undefined;
  const dto = await orUndefinedIfNotFound(
    getCached<ProductDetailDto>(`/products/${encodeURIComponent(slug)}`, [
      catalogTags.product(slug),
    ]),
  );
  return dto && toProduct(dto);
}

/** UC-P03: up to 4 products, same category first. */
export async function getRelatedProducts(slug: string): Promise<Product[]> {
  if (!isLookupSlug(slug, RESERVED_PRODUCT_SLUGS)) return [];
  const dto = await orUndefinedIfNotFound(
    getCached<{ items: RelatedProductDto[] }>(
      `/products/${encodeURIComponent(slug)}/related`,
    ),
  );
  return dto?.items.map(toProduct) ?? [];
}

export type CategoryWithCount = Category & { productCount: number };

/** UC-P05: all categories with their published product counts. */
export async function getCategories(): Promise<CategoryWithCount[]> {
  const dto = await getCached<{ items: PublicCategoryDto[] }>("/categories");
  return dto.items.map((item) => ({
    ...toCategory(item),
    productCount: item._count.products,
  }));
}

/** UC-S01: every category slug (categories have no draft state). */
export async function getCategorySlugs(): Promise<string[]> {
  const dto = await getCached<{ slugs: string[] }>("/categories/slugs");
  return dto.slugs;
}

/** UC-P06: category and one page of its published products, or `undefined`. */
export async function getCategoryPage(
  slug: string,
  page = 1,
): Promise<(Paginated<Product> & { category: Category }) | undefined> {
  if (!isLookupSlug(slug, RESERVED_CATEGORY_SLUGS)) return undefined;
  const dto = await orUndefinedIfNotFound(
    getCached<CategoryPageDto>(
      `/categories/${encodeURIComponent(slug)}?${pageQuery(page)}`,
    ),
  );
  if (!dto) return undefined;
  return { ...toPaginated(dto, toProduct), category: toCategory(dto.category) };
}
