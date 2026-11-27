import type { Metadata } from "next";

import { ProductEmptyState } from "@/components/products/product-empty-state";
import { ProductFilterPanel } from "@/components/products/product-filter-panel";
import {
  ActiveFilters,
  ProductFilterSidebar,
  ProductSortNav,
} from "@/components/products/product-filters";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductPagination } from "@/components/products/product-pagination";
import { ROUTES } from "@/constants/routes";
import {
  getBrands,
  getCategories,
  getProductFacets,
  getProductPage,
} from "@/lib/catalog";
import {
  filterQueryParams,
  hasActiveFilters,
  productListHref,
  resolveProductFilters,
  toFilterQuery,
} from "@/lib/catalog-filters";
import { buildPageMetadata } from "@/lib/metadata";

type ProductsPageProps = {
  searchParams: Promise<
    Partial<
      Record<
        "page" | "category" | "brand" | "availability" | "sort",
        string | string[]
      >
    >
  >;
};

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

async function readListing(searchParams: ProductsPageProps["searchParams"]) {
  const params = await searchParams;
  const [categories, brands] = await Promise.all([
    getCategories(),
    getBrands(),
  ]);
  const filters = resolveProductFilters(
    {
      category: firstValue(params.category),
      brand: firstValue(params.brand),
      availability: firstValue(params.availability),
      sort: firstValue(params.sort),
    },
    { categories, brands },
  );
  const result = await getProductPage(
    Number(firstValue(params.page) ?? "1"),
    filters,
  );
  return { categories, brands, filters, result };
}

export async function generateMetadata({
  searchParams,
}: ProductsPageProps): Promise<Metadata> {
  const { filters, result } = await readListing(searchParams);
  const params = new URLSearchParams(filterQueryParams(toFilterQuery(filters)));
  if (result.currentPage > 1) params.set("page", String(result.currentPage));
  const query = params.toString();

  const metadata = buildPageMetadata({
    title:
      result.currentPage === 1
        ? "Sản phẩm"
        : `Sản phẩm – Trang ${result.currentPage}`,
    description:
      "Tất cả sản phẩm nội địa Nhật được TUTA tuyển chọn: mỹ phẩm, thực phẩm chức năng, thuốc, gia dụng và mẹ bé.",
    path: query ? `${ROUTES.products}?${query}` : ROUTES.products,
  });

  // Filter combinations repeat the same products: keep them out of the index.
  return hasActiveFilters(filters)
    ? { ...metadata, robots: { index: false, follow: true } }
    : metadata;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { categories, brands, filters, result } =
    await readListing(searchParams);
  const facets = await getProductFacets(filters);
  const query = toFilterQuery(filters);
  const activeCount = [
    filters.category,
    filters.brand,
    filters.inStockOnly,
  ].filter(Boolean).length;

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
      <h1 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        Sản phẩm
      </h1>

      <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12 xl:gap-16">
        <aside
          aria-label="Bộ lọc sản phẩm"
          className="lg:sticky lg:top-8 lg:max-h-[calc(100dvh-4rem)] lg:self-start lg:overflow-y-auto lg:pb-8"
        >
          <ProductFilterPanel
            key={productListHref(query)}
            activeCount={activeCount}
          >
            <ProductFilterSidebar
              categories={categories.map(({ slug, name }) => ({ slug, name }))}
              brands={brands}
              facets={facets}
              query={query}
            />
          </ProductFilterPanel>
        </aside>

        <section aria-label="Danh sách sản phẩm">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-border pb-4">
            <p className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary tabular-nums">
                {result.total}
              </span>{" "}
              sản phẩm
            </p>
            <ProductSortNav query={query} />
          </div>

          <div className="mt-4 min-h-8">
            <ActiveFilters filters={filters} query={query} />
          </div>

          <div className="mt-8">
            {result.items.length > 0 ? (
              <ProductGrid products={result.items} besideSidebar />
            ) : (
              <ProductEmptyState
                title="Không có sản phẩm phù hợp"
                description="Bỏ bớt một bộ lọc ở trên hoặc chọn danh mục khác để xem thêm sản phẩm."
              />
            )}
          </div>

          <ProductPagination
            currentPage={result.currentPage}
            totalPages={result.totalPages}
            searchParams={filterQueryParams(query)}
          />
        </section>
      </div>
    </main>
  );
}
