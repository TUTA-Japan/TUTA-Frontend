"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RotateCcw } from "lucide-react";

import { CONTACT_CHANNELS } from "@/constants/contact";
import { ROUTES } from "@/constants/routes";
import { getErrorDigest } from "@/utils/error-digest";

type SiteErrorProps = {
  error: unknown;
  retry: () => void;
};

/**
 * Shown when a public page fails to render (e.g. the catalog API is down).
 * It replaces the page only, so the site header and footer stay usable.
 */
export default function SiteError({ error, retry }: SiteErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const digest = getErrorDigest(error);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <section className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tuta-orange">
          Đã có lỗi
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          Không thể tải trang này
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
          Hệ thống đang gặp sự cố tạm thời. Bạn thử tải lại sau ít phút, hoặc
          nhắn TUTA qua{" "}
          <a
            href={CONTACT_CHANNELS.zalo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-tuta-green-dark underline underline-offset-4 hover:text-tuta-green"
          >
            Zalo
          </a>{" "}
          nếu cần tư vấn ngay.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => retry()}
            className="inline-flex items-center gap-2 rounded-sm bg-tuta-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-tuta-green-dark"
          >
            <RotateCcw className="size-4" strokeWidth={1.75} />
            Thử lại
          </button>

          <Link
            href={ROUTES.home}
            className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-tuta-green hover:text-tuta-green-dark"
          >
            <Home className="size-4" strokeWidth={1.75} />
            Về trang chủ
          </Link>
        </div>

        {digest && (
          <p className="mt-10 text-xs text-text-secondary">Mã lỗi: {digest}</p>
        )}
      </section>
    </main>
  );
}
