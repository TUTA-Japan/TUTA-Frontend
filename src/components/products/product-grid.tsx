import type { Product } from "@/types/product";

import { ProductCard } from "./product-card";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="border-y border-border py-16 text-center sm:py-20">
        <p className="text-base font-medium text-text-primary">
          Chưa có sản phẩm phù hợp
        </p>
        <p className="mt-2 text-sm leading-6 text-[#59635b]">
          Các sản phẩm mới sẽ được TUTA tuyển chọn và cập nhật tại đây.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 items-stretch gap-x-4 gap-y-12 sm:gap-x-5 md:grid-cols-3 md:gap-x-6 md:gap-y-14 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
