import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <section className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tuta-green">
          404
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          Trang bạn tìm không tồn tại
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
          Có thể đường dẫn đã thay đổi hoặc trang này không còn khả dụng. Bạn có
          thể quay lại trang chủ hoặc tiếp tục khám phá sản phẩm tại TUTA.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={ROUTES.home}
            className="inline-flex items-center gap-2 rounded-sm bg-tuta-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-tuta-green-dark"
          >
            <Home className="size-4" strokeWidth={1.75} />
            Về trang chủ
          </Link>

          <Link
            href={ROUTES.products}
            className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-tuta-green hover:text-tuta-green-dark"
          >
            <ArrowLeft className="size-4" strokeWidth={1.75} />
            Xem sản phẩm
          </Link>
        </div>

        <div className="mx-auto mt-12 h-px max-w-sm bg-border" />

        <p className="mt-6 text-xs uppercase tracking-[0.16em] text-text-secondary">
          TUTA Japan Select
          <span className="ml-1 text-tuta-orange">.</span>
        </p>
      </section>
    </main>
  );
}
