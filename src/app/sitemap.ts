import type { MetadataRoute } from "next";

import { ROUTES } from "@/constants/routes";
import { getCategorySlugs, getProductSlugs } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [productSlugs, categorySlugs] = await Promise.all([
    getProductSlugs(),
    getCategorySlugs(),
  ]);

  const paths = [
    ROUTES.home,
    ROUTES.products,
    ROUTES.categories,
    ROUTES.purchaseGuide,
    ...categorySlugs.map(ROUTES.categoryDetail),
    ...productSlugs.map(ROUTES.productDetail),
  ];

  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
