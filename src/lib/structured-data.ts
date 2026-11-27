import { CONTACT_LINKS } from "@/constants/contact";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { getProductPricing } from "@/lib/pricing";
import type { Product, ProductAvailability } from "@/types/product";

import { absoluteUrl } from "./metadata";

export type StructuredData = Record<string, unknown>;

const SCHEMA_AVAILABILITY: Record<ProductAvailability, string> = {
  "in-stock": "https://schema.org/InStock",
  "pre-order": "https://schema.org/PreOrder",
};

const SOCIAL_PROFILES = [
  CONTACT_LINKS.facebook,
  CONTACT_LINKS.tiktok,
  CONTACT_LINKS.youtube,
];

export function siteStructuredData(): StructuredData {
  const url = absoluteUrl(ROUTES.home);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        name: SITE.name,
        url,
        inLanguage: "vi-VN",
        publisher: { "@id": `${url}#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${url}#organization`,
        name: SITE.name,
        url,
        sameAs: SOCIAL_PROFILES,
      },
    ],
  };
}

export function productStructuredData(product: Product): StructuredData {
  const url = absoluteUrl(ROUTES.productDetail(product.slug));
  const { price } = getProductPricing(product);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: product.nameVi,
        url,
        image: product.images.map(absoluteUrl),
        description: product.shortDescription,
        brand: { "@type": "Brand", name: product.brand },
        category: product.category,
        ...(price !== null && {
          offers: {
            "@type": "Offer",
            url,
            price,
            priceCurrency: "VND",
            ...(product.availability && {
              availability: SCHEMA_AVAILABILITY[product.availability],
            }),
            seller: { "@type": "Organization", name: SITE.name },
          },
        }),
      },
      breadcrumb([
        { name: "Trang chủ", path: ROUTES.home },
        { name: "Sản phẩm", path: ROUTES.products },
        { name: product.nameVi, path: ROUTES.productDetail(product.slug) },
      ]),
    ],
  };
}

function breadcrumb(items: { name: string; path: string }[]): StructuredData {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
