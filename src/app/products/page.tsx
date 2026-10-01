import { ProductGrid } from "@/components/products/product-grid";
import { ProductPagination } from "@/components/products/product-pagination";
import { products } from "@/data/products";

const PRODUCTS_PER_PAGE = 8;

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
  const parsedPage = Number(pageValue ?? "1");

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const currentPage =
    Number.isInteger(parsedPage) && parsedPage > 0
      ? Math.min(parsedPage, Math.max(totalPages, 1))
      : 1;

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const paginatedProducts = products.slice(startIndex, endIndex);

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
      <div className="mb-10">
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
          Sản phẩm
        </h1>
      </div>

      <ProductGrid products={paginatedProducts} />

      <ProductPagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
}