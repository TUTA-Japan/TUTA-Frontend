import Link from "next/link";

type ProductPaginationProps = {
  currentPage: number;
  totalPages: number;
};

export function ProductPagination({
  currentPage,
  totalPages,
}: ProductPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const getPageHref = (page: number) =>
    page === 1 ? "/products" : `/products?page=${page}`;

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