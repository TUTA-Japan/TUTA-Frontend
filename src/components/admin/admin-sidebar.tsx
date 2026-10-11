import Link from "next/link";
import { LayoutDashboard, Package, Tags } from "lucide-react";

export function AdminSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-border bg-background md:block">
      <div className="flex h-16 items-center border-b border-border px-6">
        <Link
          href="/admin"
          className="text-base font-semibold text-tuta-green-dark"
        >
          TUTA Admin
        </Link>
      </div>

      <nav className="p-4">
        <div className="space-y-1">
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text-primary transition hover:bg-surface"
          >
            <LayoutDashboard className="size-4" />
            Tổng quan
          </Link>

          <Link
            href="/admin/products"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text-primary transition hover:bg-surface"
          >
            <Package className="size-4" />
            Sản phẩm
          </Link>

          <Link
            href="/admin/categories"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text-primary transition hover:bg-surface"
          >
            <Tags className="size-4" />
            Danh mục
          </Link>
        </div>
      </nav>
    </aside>
  );
}
