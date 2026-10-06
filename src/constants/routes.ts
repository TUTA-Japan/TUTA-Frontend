export const ROUTES = {
  home: "/",
  products: "/products",
  categories: "/categories",
  brands: "/brands",
  purchaseGuide: "/purchase-guide",
  search: "/search",

  productDetail: (slug: string) => `/products/${slug}`,
} as const;
