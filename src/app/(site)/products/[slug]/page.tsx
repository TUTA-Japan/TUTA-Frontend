import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/products/product-detail";
import { RelatedProducts } from "@/components/products/related-products";
import { ROUTES } from "@/constants/routes";
import {
  getProductBySlug,
  getProductSlugs,
  getRelatedProducts,
} from "@/lib/catalog";
import { buildPageMetadata } from "@/lib/metadata";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getProductSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return {};

  return buildPageMetadata({
    title: product.nameVi,
    description: product.shortDescription,
    path: ROUTES.productDetail(product.slug),
    image: product.images[0],
  });
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product);

  return (
    <main>
      <ProductDetail product={product} />
      <RelatedProducts products={relatedProducts} />
    </main>
  );
}
