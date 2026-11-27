import "server-only";
import { cache } from "react";

import { apiCatalog } from "./catalog-api";
import { mockCatalog } from "./catalog-mock";
import type { CatalogSource } from "./catalog-types";

export type { ProductPage, ProductSearchResult } from "./catalog-types";
export { SEARCH_QUERY_MAX_LENGTH } from "./catalog-types";
export { PRODUCTS_PER_PAGE } from "./catalog-filters";

const source: CatalogSource =
  process.env.CATALOG_SOURCE === "mock" ? mockCatalog : apiCatalog;

export const getProductBySlug = cache((slug: string) =>
  source.getProductBySlug(slug),
);

export const getCategoryBySlug = cache((slug: string) =>
  source.getCategoryBySlug(slug),
);

export const getCategories: CatalogSource["getCategories"] = () =>
  source.getCategories();

export const getProductSlugs: CatalogSource["getProductSlugs"] = () =>
  source.getProductSlugs();

export const getCategorySlugs: CatalogSource["getCategorySlugs"] = () =>
  source.getCategorySlugs();

export const getFeaturedProducts: CatalogSource["getFeaturedProducts"] = () =>
  source.getFeaturedProducts();

export const getProductsByCategory: CatalogSource["getProductsByCategory"] = (
  category,
) => source.getProductsByCategory(category);

export const getProductPage: CatalogSource["getProductPage"] = (
  requestedPage,
  filters,
) => source.getProductPage(requestedPage, filters);

export const getBrands: CatalogSource["getBrands"] = () => source.getBrands();

export const getProductFacets: CatalogSource["getProductFacets"] = (filters) =>
  source.getProductFacets(filters);

export const searchProducts: CatalogSource["searchProducts"] = (
  query,
  requestedPage,
) => source.searchProducts(query, requestedPage);

export const getRelatedProducts: CatalogSource["getRelatedProducts"] = (
  product,
  limit,
) => source.getRelatedProducts(product, limit);
