import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

export type ProductPage = {
  items: Product[];
  currentPage: number;
  totalPages: number;
};

/** What pages need from the catalog, independent of where the data lives. */
export type CatalogSource = {
  getProductBySlug(slug: string): Promise<Product | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  getCategories(): Promise<Category[]>;
  getProductSlugs(): Promise<string[]>;
  getCategorySlugs(): Promise<string[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getProductsByCategory(category: Category): Promise<Product[]>;
  getProductPage(requestedPage: number): Promise<ProductPage>;
  getRelatedProducts(product: Product, limit?: number): Promise<Product[]>;
};
