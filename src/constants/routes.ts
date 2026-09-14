export const ROUTES = {
  home: "/",
  products: "/products",
  categories: "/categories",
  brands: "/brands",
  search: "/search",

  productDetail: (slug: string) => `/products/${slug}`,
} as const;
