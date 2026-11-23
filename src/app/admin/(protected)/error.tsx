"use client";

import { useEffect } from "react";

import { primaryButtonClassName } from "@/components/admin/form-primitives";
import { getErrorDigest } from "@/utils/error-digest";

type AdminErrorProps = {
  error: unknown;
  retry: () => void;
};

/**
 * Shown when an admin page fails to render. It sits inside the protected
 * layout, so the sidebar and header (including logout) stay available.
 */
export default function AdminError({ error, retry }: AdminErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const digest = getErrorDigest(error);

  return (
    <div className="rounded-xl border border-border bg-background px-5 py-12 text-center">
      <h1 className="text-lg font-semibold text-text-primary">
        Không thể tải trang quản trị
      </h1>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-secondary">
        Đã có lỗi khi tải dữ liệu. Thử lại; nếu lỗi vẫn còn, hãy báo cho đội kỹ
        thuật kèm mã lỗi bên dưới.
      </p>

      <button
        type="button"
        onClick={() => retry()}
        className={`mt-6 px-5 ${primaryButtonClassName}`}
      >
        Thử lại
      </button>

      {digest && (
        <p className="mt-6 text-xs text-text-secondary">Mã lỗi: {digest}</p>
      )}
    </div>
  );
}
