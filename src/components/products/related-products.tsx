import { ProductGrid } from "@/components/products/product-grid";
import type { Product } from "@/types/product";

type RelatedProductsProps = {
  products: Product[];
};

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12 lg:px-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tuta-green-dark">
            Gợi ý thêm
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text-primary">
            Sản phẩm liên quan
          </h2>
        </div>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}
