import { ProductGrid } from "@/components/products/product-grid";
import { ProductPagination } from "@/components/products/product-pagination";
import { getProductPage } from "@/lib/catalog";

type ProductsPageProps = {
  searchParams: Promise<{
    page?: string | string[];
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { page } = await searchParams;
  const pageValue = Array.isArray(page) ? page[0] : page;

  const { items, currentPage, totalPages } = await getProductPage(
    Number(pageValue ?? "1"),
  );

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
      <div className="mb-10">
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
          Sản phẩm
        </h1>
      </div>

      <ProductGrid products={items} />

      <ProductPagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
}
