import { ProductGrid } from "@/components/products/product-grid";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
      <div className="mb-10">
        {/* <p className="text-sm text-text-secondary">Khám phá</p> */}

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
          Sản phẩm
        </h1>
      </div>

      <ProductGrid products={products} />
    </main>
  );
}
