import type { Product } from "@/types/product";

import { ProductCard } from "@/components/products/product-card";
import { ProductEmptyState } from "@/components/products/product-empty-state";
{
}

type ProductGridProps = {
  products: Product[];
  headingLevel?: "h2" | "h3";
};

export function ProductGrid({
  products,
  headingLevel = "h2",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <ProductEmptyState
        title="Không có sản phẩm phù hợp"
        description="Hãy thử thay đổi từ khóa hoặc bộ lọc để xem thêm sản phẩm."
      />
    );
  }

  return (
    <div className="grid grid-cols-2 items-stretch gap-x-4 gap-y-12 sm:gap-x-5 md:grid-cols-3 md:gap-x-6 md:gap-y-14 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          headingLevel={headingLevel}
        />
      ))}
    </div>
  );
}
