import type { Metadata } from "next";

import { ProductEmptyState } from "@/components/products/product-empty-state";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductPagination } from "@/components/products/product-pagination";
import { ProductSearchForm } from "@/components/products/product-search-form";
import { ROUTES } from "@/constants/routes";
import { SEARCH_QUERY_MAX_LENGTH, searchProducts } from "@/lib/catalog";
import { buildPageMetadata } from "@/lib/metadata";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string | string[];
    page?: string | string[];
  }>;
};

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

async function readSearchParams(searchParams: SearchPageProps["searchParams"]) {
  const params = await searchParams;
  return {
    query: firstValue(params.q)?.trim() ?? "",
    page: Number(firstValue(params.page) ?? "1"),
  };
}

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const { query } = await readSearchParams(searchParams);
  const shortQuery = query.length > 60 ? `${query.slice(0, 60)}…` : query;

  return {
    ...buildPageMetadata({
      title: shortQuery ? `Tìm kiếm “${shortQuery}”` : "Tìm kiếm",
      path: ROUTES.search,
    }),
    // Result pages are endless query variations: keep them out of the index.
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { query, page } = await readSearchParams(searchParams);
  const isTooLong = query.length > SEARCH_QUERY_MAX_LENGTH;
  const result =
    query && !isTooLong ? await searchProducts(query, page) : undefined;

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
      <div className="mb-10 max-w-2xl">
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
          Tìm kiếm
        </h1>

        <ProductSearchForm
          defaultValue={query}
          maxLength={SEARCH_QUERY_MAX_LENGTH}
        />

        {result && result.total > 0 && (
          <p aria-live="polite" className="mt-4 text-sm text-text-secondary">
            Tìm thấy {result.total} sản phẩm cho “{query}”
          </p>
        )}
      </div>

      {!query && (
        <ProductEmptyState
          title="Bạn đang tìm gì?"
          description="Nhập tên sản phẩm, tên tiếng Nhật hoặc thương hiệu. Có thể gõ không dấu."
        />
      )}

      {isTooLong && (
        <ProductEmptyState
          title="Từ khóa quá dài"
          description={`Vui lòng nhập tối đa ${SEARCH_QUERY_MAX_LENGTH} ký tự.`}
        />
      )}

      {result && result.total === 0 && (
        <ProductEmptyState
          title={`Không tìm thấy sản phẩm cho “${query}”`}
          description="Hãy thử từ khóa ngắn hơn, tên thương hiệu, hoặc kiểm tra lại chính tả."
          showBackToProducts
        />
      )}

      {result && result.total > 0 && (
        <>
          <ProductGrid products={result.items} />

          <ProductPagination
            currentPage={result.currentPage}
            totalPages={result.totalPages}
            basePath={ROUTES.search}
            searchParams={{ q: query }}
          />
        </>
      )}
    </main>
  );
}
