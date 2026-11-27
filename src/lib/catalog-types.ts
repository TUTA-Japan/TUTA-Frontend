import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

import type {
  ProductBrand,
  ProductFacets,
  ProductFilters,
} from "./catalog-filters";

export type ProductPage = {
  items: Product[];
  currentPage: number;
  totalPages: number;
  total: number;
};

export type ProductSearchResult = ProductPage;

export const SEARCH_QUERY_MAX_LENGTH = 200;

export type CatalogSource = {
  getProductBySlug(slug: string): Promise<Product | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  getCategories(): Promise<Category[]>;
  getProductSlugs(): Promise<string[]>;
  getCategorySlugs(): Promise<string[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getProductsByCategory(category: Category): Promise<Product[]>;
  getProductPage(
    requestedPage: number,
    filters?: ProductFilters,
  ): Promise<ProductPage>;
  getBrands(): Promise<ProductBrand[]>;
  getProductFacets(filters: ProductFilters): Promise<ProductFacets>;
  searchProducts(
    query: string,
    requestedPage: number,
  ): Promise<ProductSearchResult>;
  getRelatedProducts(product: Product, limit?: number): Promise<Product[]>;
};
