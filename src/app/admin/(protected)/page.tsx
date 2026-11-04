import { Package, Tags } from "lucide-react";

import { AdminPageHeader } from "@/components/admin/admin-page-header";

const stats = [
  { label: "Sản phẩm", icon: Package },
  { label: "Danh mục", icon: Tags },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <AdminPageHeader
        eyebrow="Dashboard"
        title="Tổng quan"
        description="Quản lý nội dung và sản phẩm của TUTA."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-background p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary">{label}</p>

              <Icon className="size-5 text-tuta-green" />
            </div>

            <p className="mt-4 text-2xl font-semibold text-text-primary">—</p>

            <p className="mt-1 text-xs text-text-secondary">
              Chờ kết nối backend
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
