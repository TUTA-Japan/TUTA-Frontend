import "server-only";

import * as api from "./api/catalog";
import {
  applyProductFilters,
  countFacets,
  hasActiveFilters,
  listBrands,
  paginateProducts,
} from "./catalog-filters";
import type { CatalogSource } from "./catalog-types";
import { withLocalCategoryImage } from "./category-images";

const RELATED_PRODUCTS_LIMIT = 4;

function normalizePage(page: number): number {
  return Number.isSafeInteger(page) && page > 0 ? page : 1;
}

async function getAllProducts() {
  const firstPage = await api.getProductPage(1);
  const remainingPages = await Promise.all(
    Array.from({ length: firstPage.pagination.totalPages - 1 }, (_, index) =>
      api.getProductPage(index + 2),
    ),
  );
  return [firstPage, ...remainingPages].flatMap((page) => page.items);
}

/** Catalog served by the TUTA backend (default source). */
export const apiCatalog: CatalogSource = {
  getProductBySlug: api.getProductBySlug,

  async getCategoryBySlug(slug) {
    // Same request as page 1 of getProductsByCategory, so Next de-duplicates it.
    const page = await api.getCategoryPage(slug, 1);
    return page && withLocalCategoryImage(page.category);
  },

  async getCategories() {
    const categories = await api.getCategories();
    return categories.map(({ id, slug, name, description, image }) =>
      withLocalCategoryImage({ id, slug, name, description, image }),
    );
  },

  getProductSlugs: api.getProductSlugs,

  getCategorySlugs: api.getCategorySlugs,

  getFeaturedProducts: api.getFeaturedProducts,

  async getProductsByCategory(category) {
    const firstPage = await api.getCategoryPage(category.slug, 1);
    if (!firstPage) return [];

    const remainingPages = await Promise.all(
      Array.from({ length: firstPage.pagination.totalPages - 1 }, (_, index) =>
        api.getCategoryPage(category.slug, index + 2),
      ),
    );
    return [firstPage, ...remainingPages].flatMap((page) => page?.items ?? []);
  },

  async getProductPage(requestedPage, filters) {
    if (filters && hasActiveFilters(filters)) {
      const products = await getAllProducts();
      return paginateProducts(
        applyProductFilters(products, filters),
        normalizePage(requestedPage),
      );
    }

    const { items, pagination } = await api.getProductPage(
      normalizePage(requestedPage),
    );
    return {
      items,
      currentPage: pagination.page,
      totalPages: pagination.totalPages,
      total: pagination.total,
    };
  },

  async getBrands() {
    return listBrands(await getAllProducts());
  },

  async getProductFacets(filters) {
    return countFacets(await getAllProducts(), filters);
  },

  async searchProducts(query, requestedPage) {
    const { items, pagination } = await api.searchProducts(
      query,
      normalizePage(requestedPage),
    );
    return {
      items,
      currentPage: pagination.page,
      totalPages: pagination.totalPages,
      total: pagination.total,
    };
  },

  async getRelatedProducts(product, limit = RELATED_PRODUCTS_LIMIT) {
    const related = await api.getRelatedProducts(product.slug);
    return related.slice(0, limit);
  },
};
