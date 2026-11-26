import type { Metadata } from "next";

import { ProductGrid } from "@/components/products/product-grid";
import { ProductPagination } from "@/components/products/product-pagination";
import { ROUTES } from "@/constants/routes";
import { getProductPage } from "@/lib/catalog";
import { buildPageMetadata } from "@/lib/metadata";

type ProductsPageProps = {
  searchParams: Promise<{
    page?: string | string[];
  }>;
};

async function readPage(
  searchParams: ProductsPageProps["searchParams"],
): Promise<number> {
  const { page } = await searchParams;
  const pageValue = Array.isArray(page) ? page[0] : page;
  return Number(pageValue ?? "1");
}

export async function generateMetadata({
  searchParams,
}: ProductsPageProps): Promise<Metadata> {
  const { currentPage } = await getProductPage(await readPage(searchParams));
  const isFirstPage = currentPage === 1;

  return buildPageMetadata({
    title: isFirstPage ? "Sản phẩm" : `Sản phẩm – Trang ${currentPage}`,
    description:
      "Tất cả sản phẩm nội địa Nhật được TUTA tuyển chọn: mỹ phẩm, thực phẩm chức năng, thuốc, gia dụng và mẹ bé.",
    path: isFirstPage
      ? ROUTES.products
      : `${ROUTES.products}?page=${currentPage}`,
  });
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { items, currentPage, totalPages } = await getProductPage(
    await readPage(searchParams),
  );

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
      <div className="mb-10">
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
          Sản phẩm
        </h1>
      </div>

      <ProductGrid products={items} />

      <ProductPagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}
