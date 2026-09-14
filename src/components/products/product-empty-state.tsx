import Link from "next/link";

import { ROUTES } from "@/constants/routes";

type ProductEmptyStateProps = {
  title?: string;
  description?: string;
  showBackToProducts?: boolean;
};

export function ProductEmptyState({
  title = "Chưa có sản phẩm",
  description = "Hiện chưa có sản phẩm phù hợp để hiển thị.",
  showBackToProducts = false,
}: ProductEmptyStateProps) {
  return (
    <section className="flex min-h-80 flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tuta-green-dark">
        TUTA
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-text-secondary">
        {description}
      </p>

      {showBackToProducts && (
        <Link
          href={ROUTES.products}
          className="mt-6 text-sm font-medium text-tuta-green-dark transition-colors hover:text-tuta-green"
        >
          Xem tất cả sản phẩm
        </Link>
      )}
    </section>
  );
}
