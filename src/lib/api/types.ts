/**
 * Wire types for the TUTA backend API, exactly as it returns them.
 * Optional values arrive as `null` (not missing). Dates are ISO strings.
 * Components should use the mapped domain types in `@/types/*` instead.
 */

export type ProductStatus = "draft" | "published";

export type PaginationDto = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

export type PageDto<T> = {
  items: T[];
  pagination: PaginationDto;
};

export type CategoryRefDto = {
  id: string;
  slug: string;
  name: string;
};

export type ProductImageDto = {
  id: string;
  productId: string;
  url: string;
  position: number;
  createdAt: string;
};

type ProductFieldsDto = {
  id: string;
  slug: string;
  nameVi: string;
  nameJp: string | null;
  brand: string;
  categoryId: string;
  referencePriceVnd: number | null;
  originalPriceVnd: number | null;
  specification: string | null;
  shortDescription: string | null;
  description: string | null;
  status: ProductStatus;
  isFeatured: boolean;
  featuredPosition: number | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  category: CategoryRefDto;
};

/** Public endpoints: images are URLs ordered by position (index 0 = cover). */
export type PublicProductDto = ProductFieldsDto & { images: string[] };

/**
 * `GET /products/:slug/related` currently returns image records instead of
 * URLs (backend inconsistency); accept both until it is fixed.
 */
export type RelatedProductDto = ProductFieldsDto & {
  images: Array<string | ProductImageDto>;
};

export type ProductDetailDto = PublicProductDto & {
  seo: {
    title: string;
    description: string | null;
    image: string | null;
  };
};

/** Admin endpoints return the full image records. */
export type AdminProductDto = ProductFieldsDto & { images: ProductImageDto[] };

export type CategoryDto = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

/** `GET /categories`: count of published products per category. */
export type PublicCategoryDto = CategoryDto & {
  _count: { products: number };
};

export type CategoryPageDto = PageDto<PublicProductDto> & {
  category: CategoryDto;
};

/** `GET /admin/categories`: count of non-deleted products per category. */
export type AdminCategoryDto = CategoryDto & { productCount: number };

export type AdminUserDto = {
  id: string;
  email: string;
  name: string | null;
};

export type LoginResultDto = {
  admin: AdminUserDto;
  csrfToken: string;
  expiresAt: string;
};

export type DashboardStatsDto = {
  products: number;
  publishedProducts: number;
  draftProducts: number;
  categories: number;
};

export type StagedImageDto = {
  id: string;
  url: string;
  expiresAt: string;
};

/** Body of `POST /admin/products`. `null` clears a field, omission keeps it. */
export type CreateProductBody = {
  nameVi: string;
  nameJp?: string | null;
  slug?: string;
  brand: string;
  categoryId: string;
  referencePriceVnd?: number | null;
  originalPriceVnd?: number | null;
  specification?: string | null;
  shortDescription?: string | null;
  description?: string | null;
  status?: ProductStatus;
  isFeatured?: boolean;
  featuredPosition?: number | null;
  /** 1–10 staged image ids from `uploadProductImage`, in display order. */
  imageIds: string[];
};

/**
 * Body of `PATCH /admin/products/:id`.
 *
 * `status` and `isFeatured` are REQUIRED here on purpose: the backend currently
 * resets them to `draft`/`false` when a PATCH omits them, which would silently
 * unpublish the product. Always send the current values.
 */
export type UpdateProductBody = Partial<
  Omit<CreateProductBody, "status" | "isFeatured" | "imageIds">
> & {
  status: ProductStatus;
  isFeatured: boolean;
  imageIds?: string[];
};

export type CreateCategoryBody = {
  name: string;
  slug?: string;
  description?: string | null;
  imageUrl?: string | null;
};

export type UpdateCategoryBody = Partial<CreateCategoryBody>;
