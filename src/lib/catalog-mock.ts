import "server-only";

import { categories } from "@/data/categories";
import { products } from "@/data/products";
import type { Product } from "@/types/product";

import type { CatalogSource, ProductPage } from "./catalog-types";

/**
 * Catalog served from the local mock data in `src/data/*`.
 * Enabled with CATALOG_SOURCE=mock (e.g. to work without the backend).
 */

const PRODUCTS_PER_PAGE = 8;
const RELATED_PRODUCTS_LIMIT = 4;

const FEATURED_PRODUCT_SLUGS = [
  "mat-na-ba-ruou-sake-wafood-made-pdc-10-mieng",
  "vien-uong-bo-sung-kem-dhc-60-ngay",
  "kem-duong-aqualabel-vang-shiseido-5in1",
  "kem-duong-dem-transino-whitening-repair-cream-ex-35g",
] as const;

/**
 * Newest first, like the backend (`createdAt DESC`). Mock products have no
 * creation date, but ids are assigned in the order products are added, so a
 * higher id means a newer product. Every public list reads from this order.
 */
const productsNewestFirst = [...products].sort(
  (a, b) => Number(b.id) - Number(a.id),
);

const productsBySlug = new Map(
  products.map((product) => [product.slug, product]),
);
const categoriesBySlug = new Map(
  categories.map((category) => [category.slug, category]),
);

/** Invalid pages fall back to 1; pages past the end clamp to the last page. */
function paginateProducts(list: Product[], requestedPage: number): ProductPage {
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
  };
}

/** Same matching as the backend: lowercase, no Vietnamese accents. */
function normalizeSearchText(value: string): string {
  return value
    .replace(/[đĐ]/g, (letter) => (letter === "đ" ? "d" : "D"))
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export const mockCatalog: CatalogSource = {
  async getProductBySlug(slug) {
    return productsBySlug.get(slug);
  },

  async getCategoryBySlug(slug) {
    return categoriesBySlug.get(slug);
  },

  async getCategories() {
    return categories;
  },

  async getProductSlugs() {
    return productsNewestFirst.map((product) => product.slug);
  },

  async getCategorySlugs() {
    return categories.map((category) => category.slug);
  },

  async getFeaturedProducts() {
    return FEATURED_PRODUCT_SLUGS.map((slug) =>
      productsBySlug.get(slug),
    ).filter((product): product is Product => product !== undefined);
  },

  async getProductsByCategory(category) {
    return productsNewestFirst.filter(
      (product) => product.category === category.name,
    );
  },

  async getProductPage(requestedPage) {
    return paginateProducts(productsNewestFirst, requestedPage);
  },

  async searchProducts(query, requestedPage) {
    const needle = normalizeSearchText(query.trim());
    const matches = productsNewestFirst.filter((product) =>
      normalizeSearchText(
        `${product.nameVi} ${product.nameJp ?? ""} ${product.brand}`,
      ).includes(needle),
    );
    return {
      ...paginateProducts(matches, requestedPage),
      total: matches.length,
    };
  },

  async getRelatedProducts(product, limit = RELATED_PRODUCTS_LIMIT) {
    const sameCategory: Product[] = [];
    const others: Product[] = [];

    // Same category first, then others, each newest first (as the backend).
    for (const item of productsNewestFirst) {
      if (item.id === product.id) continue;

      if (item.category === product.category) {
        sameCategory.push(item);
        if (sameCategory.length === limit) break;
      } else if (others.length < limit) {
        others.push(item);
      }
    }

    return [...sameCategory, ...others].slice(0, limit);
  },
};
