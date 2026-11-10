import "server-only";

import * as api from "./api/catalog";
import type { CatalogSource } from "./catalog-types";
import { withLocalCategoryImage } from "./category-images";

const RELATED_PRODUCTS_LIMIT = 4;

/** Invalid page input (NaN, 0, negative, decimal) means page 1, as in the mock. */
function normalizePage(page: number): number {
  return Number.isSafeInteger(page) && page > 0 ? page : 1;
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

  /**
   * The category page lists every product without pagination, so all API
   * pages (8 per page) are fetched: page 1 first, the rest concurrently.
   */
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

  async getProductPage(requestedPage) {
    const { items, pagination } = await api.getProductPage(
      normalizePage(requestedPage),
    );
    return {
      items,
      currentPage: pagination.page,
      totalPages: pagination.totalPages,
    };
  },

  async getRelatedProducts(product, limit = RELATED_PRODUCTS_LIMIT) {
    const related = await api.getRelatedProducts(product.slug);
    return related.slice(0, limit);
  },
};
