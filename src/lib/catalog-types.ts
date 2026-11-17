import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

export type ProductPage = {
  items: Product[];
  currentPage: number;
  totalPages: number;
};

export type ProductSearchResult = ProductPage & {
  /** Number of matching products across all pages. */
  total: number;
};

/** Backend limit for the search query (longer queries are rejected). */
export const SEARCH_QUERY_MAX_LENGTH = 200;

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
  /**
   * UC-P07: match nameVi, nameJp, and brand, ignoring case and Vietnamese
   * accents. `query` must be non-empty and at most SEARCH_QUERY_MAX_LENGTH.
   */
  searchProducts(
    query: string,
    requestedPage: number,
  ): Promise<ProductSearchResult>;
  getRelatedProducts(product: Product, limit?: number): Promise<Product[]>;
};
