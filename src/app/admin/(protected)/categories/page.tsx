import Link from "next/link";
import { Plus } from "lucide-react";

export default function AdminCategoriesPage() {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-tuta-green uppercase">
            Quản lý
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-text-primary">
            Danh mục
          </h1>

          <p className="mt-2 text-sm text-text-secondary">
            Quản lý các danh mục sản phẩm hiển thị trên website TUTA.
          </p>
        </div>

        <Link
          href="/admin/categories/new"
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-tuta-green px-4 text-sm font-semibold text-white transition hover:bg-tuta-green-dark"
        >
          <Plus className="size-4" />
          Thêm danh mục
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-border bg-background">
        <div className="border-b border-border px-5 py-4">
          <p className="text-sm font-medium text-text-primary">
            Danh sách danh mục
          </p>
        </div>

        <div className="px-5 py-12 text-center">
          <p className="text-sm text-text-secondary">
            Dữ liệu danh mục sẽ được hiển thị sau khi kết nối backend.
          </p>
        </div>
      </div>
    </div>
  );
}