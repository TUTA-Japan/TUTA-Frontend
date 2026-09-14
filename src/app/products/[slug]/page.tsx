import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/products/product-detail";
import { RelatedProducts } from "@/components/products/related-products";
import { products } from "@/data/products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const sameCategoryProducts = products.filter(
    (item) => item.id !== product.id && item.category === product.category,
  );

  const fallbackProducts = products.filter(
    (item) =>
      item.id !== product.id &&
      !sameCategoryProducts.some(
        (relatedProduct) => relatedProduct.id === item.id,
      ),
  );

  const relatedProducts = [...sameCategoryProducts, ...fallbackProducts].slice(
    0,
    4,
  );

  return (
    <>
      <ProductDetail product={product} />
      <RelatedProducts products={relatedProducts} />
    </>
  );
}
