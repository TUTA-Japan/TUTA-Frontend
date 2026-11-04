import { LayoutDashboard, Package, Tags } from "lucide-react";

import { ROUTES } from "@/constants/routes";

export const NAVIGATION_ITEMS = [
  { label: "Khám phá", href: ROUTES.home },
  { label: "Sản phẩm", href: ROUTES.products },
  { label: "Danh mục", href: ROUTES.categories },
  { label: "Hướng dẫn mua hàng", href: ROUTES.purchaseGuide },
  // { label: "Thương hiệu", href: ROUTES.brands },
] as const;

// The footer intentionally omits the products link.
export const FOOTER_NAVIGATION_ITEMS = NAVIGATION_ITEMS.filter(
  (item) => item.href !== ROUTES.products,
);

export const ADMIN_NAVIGATION_ITEMS = [
  { label: "Tổng quan", href: ROUTES.admin.dashboard, icon: LayoutDashboard },
  { label: "Sản phẩm", href: ROUTES.admin.products, icon: Package },
  { label: "Danh mục", href: ROUTES.admin.categories, icon: Tags },
] as const;
