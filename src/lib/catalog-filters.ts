import { ROUTES } from "@/constants/routes";
import type { Category } from "@/types/category";
import type { Product } from "@/types/product";
import { createSlug } from "@/utils/slug";

import type { ProductPage } from "./catalog-types";

export const PRODUCTS_PER_PAGE = 8;

export const PRODUCT_SORTS = {
  newest: "Mới nhất",
  "price-asc": "Giá tăng dần",
  "price-desc": "Giá giảm dần",
} as const;

export type ProductSort = keyof typeof PRODUCT_SORTS;

export const DEFAULT_PRODUCT_SORT: ProductSort = "newest";

export type ProductBrand = { slug: string; name: string };

export type ProductFilters = {
  category?: Pick<Category, "slug" | "name">;
  brand?: ProductBrand;
  sort: ProductSort;
};

export type ProductFilterQuery = {
  category: string;
  brand: string;
  sort: ProductSort;
};

export function listBrands(products: Product[]): ProductBrand[] {
  const brands = new Map<string, ProductBrand>();
  for (const { brand } of products) {
    const slug = createSlug(brand);
    if (!brands.has(slug)) brands.set(slug, { slug, name: brand });
  }
  return [...brands.values()].sort((a, b) =>
    a.name.localeCompare(b.name, "vi", { sensitivity: "base" }),
  );
}

function isProductSort(value: string | undefined): value is ProductSort {
  return value !== undefined && Object.hasOwn(PRODUCT_SORTS, value);
}

export function resolveProductFilters(
  query: Partial<Record<keyof ProductFilterQuery, string>>,
  options: {
    categories: Pick<Category, "slug" | "name">[];
    brands: ProductBrand[];
  },
): ProductFilters {
  return {
    category: options.categories.find(({ slug }) => slug === query.category),
    brand: options.brands.find(({ slug }) => slug === query.brand),
    sort: isProductSort(query.sort) ? query.sort : DEFAULT_PRODUCT_SORT,
  };
}

export function hasActiveFilters(filters: ProductFilters): boolean {
  return Boolean(
    filters.category || filters.brand || filters.sort !== DEFAULT_PRODUCT_SORT,
  );
}

export function toFilterQuery(filters: ProductFilters): ProductFilterQuery {
  return {
    category: filters.category?.slug ?? "",
    brand: filters.brand?.slug ?? "",
    sort: filters.sort,
  };
}

export function filterQueryParams(
  query: ProductFilterQuery,
): Record<string, string> {
  const params: Record<string, string> = {};
  if (query.category) params.category = query.category;
  if (query.brand) params.brand = query.brand;
  if (query.sort !== DEFAULT_PRODUCT_SORT) params.sort = query.sort;
  return params;
}

export function productListHref(query: ProductFilterQuery): string {
  const params = new URLSearchParams(filterQueryParams(query)).toString();
  return params ? `${ROUTES.products}?${params}` : ROUTES.products;
}

type FacetCounts = { total: number; counts: Record<string, number> };

/** Category counts keyed by category name, brand counts by brand slug. */
export type ProductFacets = { categories: FacetCounts; brands: FacetCounts };

/**
 * Each group is counted with the other group's filter applied, so a number
 * is exactly what the listing shows after picking that option.
 */
export function countFacets(
  products: Product[],
  filters: ProductFilters,
): ProductFacets {
  const facets: ProductFacets = {
    categories: { total: 0, counts: {} },
    brands: { total: 0, counts: {} },
  };

  for (const product of products) {
    const brandSlug = createSlug(product.brand);
    if (!filters.brand || brandSlug === filters.brand.slug) {
      facets.categories.total += 1;
      facets.categories.counts[product.category] =
        (facets.categories.counts[product.category] ?? 0) + 1;
    }
    if (!filters.category || product.category === filters.category.name) {
      facets.brands.total += 1;
      facets.brands.counts[brandSlug] =
        (facets.brands.counts[brandSlug] ?? 0) + 1;
    }
  }

  return facets;
}

export function applyProductFilters(
  products: Product[],
  filters: ProductFilters,
): Product[] {
  const { category, brand, sort } = filters;
  const matches = products.filter(
    (product) =>
      (!category || product.category === category.name) &&
      (!brand || createSlug(product.brand) === brand.slug),
  );
  if (sort === "newest") return matches;

  const direction = sort === "price-asc" ? 1 : -1;
  return matches.toSorted((a, b) => {
    const priceA = a.referencePriceVnd;
    const priceB = b.referencePriceVnd;
    if (priceA === undefined) return priceB === undefined ? 0 : 1;
    if (priceB === undefined) return -1;
    return (priceA - priceB) * direction;
  });
}

export function paginateProducts(
  list: Product[],
  requestedPage: number,
): ProductPage {
  const totalPages = Math.ceil(list.length / PRODUCTS_PER_PAGE);
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage > 0
      ? Math.min(requestedPage, Math.max(totalPages, 1))
      : 1;
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  return {
    items: list.slice(startIndex, startIndex + PRODUCTS_PER_PAGE),
    currentPage,
    totalPages,
    total: list.length,
  };
}
