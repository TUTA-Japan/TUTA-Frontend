import { ROUTES } from "@/constants/routes";

export const NAVIGATION_ITEMS = [
  { label: "Khám phá", href: ROUTES.home },
  { label: "Sản phẩm", href: ROUTES.products },
  { label: "Danh mục", href: ROUTES.categories },
  { label: "Thương hiệu", href: ROUTES.brands },
] as const;
