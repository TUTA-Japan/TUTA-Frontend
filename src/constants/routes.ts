export const ROUTES = {
  home: "/",
  products: "/products",
  categories: "/categories",
  brands: "/brands",
  purchaseGuide: "/purchase-guide",
  search: "/search",

  productDetail: (slug: string) => `/products/${slug}`,
  categoryDetail: (slug: string) => `/categories/${slug}`,

  admin: {
    dashboard: "/admin",
    login: "/admin/login",
    products: "/admin/products",
    newProduct: "/admin/products/new",
    categories: "/admin/categories",
    newCategory: "/admin/categories/new",
  },
} as const;
