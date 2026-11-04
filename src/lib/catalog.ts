import "server-only";
import { cache } from "react";

import { categories } from "@/data/categories";
import { products } from "@/data/products";
import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

export const PRODUCTS_PER_PAGE = 8;
const RELATED_PRODUCTS_LIMIT = 4;

const FEATURED_PRODUCT_SLUGS = [
  "mat-na-ba-ruou-sake-wafood-made-pdc-10-mieng",
  "vien-uong-bo-sung-kem-dhc-60-ngay",
  "kem-duong-aqualabel-vang-shiseido-5in1",
  "kem-duong-dem-transino-whitening-repair-cream-ex-35g",
] as const;

const productsBySlug = new Map(
  products.map((product) => [product.slug, product]),
);
const categoriesBySlug = new Map(
  categories.map((category) => [category.slug, category]),
);

export const getProductBySlug = cache(
  async (slug: string): Promise<Product | undefined> =>
    productsBySlug.get(slug),
);

export const getCategoryBySlug = cache(
  async (slug: string): Promise<Category | undefined> =>
    categoriesBySlug.get(slug),
);

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return FEATURED_PRODUCT_SLUGS.map((slug) => productsBySlug.get(slug)).filter(
    (product): product is Product => product !== undefined,
  );
}

export async function getProductsByCategory(
  category: Category,
): Promise<Product[]> {
  return products.filter((product) => product.category === category.name);
}

export type ProductPage = {
  items: Product[];
  currentPage: number;
  totalPages: number;
};

export async function getProductPage(
  requestedPage: number,
): Promise<ProductPage> {
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage > 0
      ? Math.min(requestedPage, Math.max(totalPages, 1))
      : 1;
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  return {
    items: products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE),
    currentPage,
    totalPages,
  };
}

export async function getRelatedProducts(
  product: Product,
  limit = RELATED_PRODUCTS_LIMIT,
): Promise<Product[]> {
  const sameCategory: Product[] = [];
  const others: Product[] = [];

  for (const item of products) {
    if (item.id === product.id) continue;

    if (item.category === product.category) {
      sameCategory.push(item);
      if (sameCategory.length === limit) break;
    } else if (others.length < limit) {
      others.push(item);
    }
  }

  return [...sameCategory, ...others].slice(0, limit);
}
