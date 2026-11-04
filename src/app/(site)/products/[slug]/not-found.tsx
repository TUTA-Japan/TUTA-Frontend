import Link from "next/link";

import { ROUTES } from "@/constants/routes";

export default function ProductNotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tuta-green-dark">
        404
      </p>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text-primary">
        Không tìm thấy sản phẩm
      </h1>

      <p className="mt-4 max-w-md text-sm leading-6 text-text-secondary">
        Sản phẩm này có thể đã được thay đổi, không còn tồn tại hoặc đường dẫn
        không chính xác.
      </p>

      <Link
        href={ROUTES.products}
        className="mt-7 text-sm font-medium text-tuta-green-dark transition-colors hover:text-tuta-green"
      >
        Quay lại danh sách sản phẩm
      </Link>
    </main>
  );
}
