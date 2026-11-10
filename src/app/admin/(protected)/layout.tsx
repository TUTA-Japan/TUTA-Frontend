import type { ReactNode } from "react";

import { AdminHeader } from "@/components/admin/admin-header";
import { AdminSessionProvider } from "@/components/admin/admin-session-provider";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AdminSessionProvider>
      <div className="min-h-screen bg-surface">
        <AdminSidebar />

        <div className="md:pl-64">
          <AdminHeader />

          <main className="p-5 md:p-8">{children}</main>
        </div>
      </div>
    </AdminSessionProvider>
  );
}
