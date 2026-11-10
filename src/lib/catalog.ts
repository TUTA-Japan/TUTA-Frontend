import "server-only";
import { cache } from "react";

import { apiCatalog } from "./catalog-api";
import { mockCatalog } from "./catalog-mock";
import type { CatalogSource } from "./catalog-types";

export type { ProductPage } from "./catalog-types";

export const PRODUCTS_PER_PAGE = 8;

/**
 * Data source for every catalog page.
 * - default: the TUTA backend (API_URL)
 * - CATALOG_SOURCE=mock: local mock data in src/data/* (no backend needed)
 */
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
) => source.getProductPage(requestedPage);

export const getRelatedProducts: CatalogSource["getRelatedProducts"] = (
  product,
  limit,
) => source.getRelatedProducts(product, limit);
