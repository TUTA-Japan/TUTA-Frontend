import { Package, Tags } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div>
      <div>
        <p className="text-xs font-medium tracking-[0.16em] text-tuta-green uppercase">
          Dashboard
        </p>

        <h1 className="mt-2 text-2xl font-semibold text-text-primary">
          Tổng quan
        </h1>

        <p className="mt-2 text-sm text-text-secondary">
          Quản lý nội dung và sản phẩm của TUTA.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-background p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-text-secondary">Sản phẩm</p>

            <Package className="size-5 text-tuta-green" />
          </div>

          <p className="mt-4 text-2xl font-semibold text-text-primary">—</p>

          <p className="mt-1 text-xs text-text-secondary">
            Chờ kết nối backend
          </p>
        </div>

        <div className="rounded-xl border border-border bg-background p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-text-secondary">Danh mục</p>

            <Tags className="size-5 text-tuta-green" />
          </div>

          <p className="mt-4 text-2xl font-semibold text-text-primary">—</p>

          <p className="mt-1 text-xs text-text-secondary">
            Chờ kết nối backend
          </p>
        </div>
      </div>
    </div>
  );
}
