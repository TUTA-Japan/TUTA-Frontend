import Link from "next/link";

import { ROUTES } from "@/constants/routes";

type ProductPaginationProps = {
  currentPage: number;
  totalPages: number;
  /** Page the links point to. Defaults to the product listing. */
  basePath?: string;
  /** Query params kept on every page link (e.g. `{ q }` for search). */
  searchParams?: Record<string, string>;
};

export function ProductPagination({
  currentPage,
  totalPages,
  basePath = ROUTES.products,
  searchParams,
}: ProductPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const getPageHref = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page > 1) params.set("page", String(page));
    const query = params.toString();
    return query ? `${basePath}?${query}` : basePath;
  };

  return (
    <nav
      aria-label="Phân trang sản phẩm"
      className="mt-14 flex items-center justify-center gap-2"
    >
      {currentPage > 1 && (
        <Link
          href={getPageHref(currentPage - 1)}
          className="flex h-10 min-w-10 items-center justify-center border border-border px-3 text-sm text-text-primary transition hover:border-tuta-green hover:text-tuta-green-dark"
        >
          ‹
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const active = page === currentPage;

        return (
          <Link
            key={page}
            href={getPageHref(page)}
            aria-current={active ? "page" : undefined}
            className={[
              "flex h-10 min-w-10 items-center justify-center border px-3 text-sm transition",
              active
                ? "border-tuta-green bg-tuta-green text-white"
                : "border-border text-text-primary hover:border-tuta-green hover:text-tuta-green-dark",
            ].join(" ")}
          >
            {page}
          </Link>
        );
      })}

      {currentPage < totalPages && (
        <Link
          href={getPageHref(currentPage + 1)}
          className="flex h-10 min-w-10 items-center justify-center border border-border px-3 text-sm text-text-primary transition hover:border-tuta-green hover:text-tuta-green-dark"
        >
          ›
        </Link>
      )}
    </nav>
  );
}