import Link from "next/link";

import { ADMIN_NAVIGATION_ITEMS } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";

export function AdminSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-border bg-background md:block">
      <div className="flex h-16 items-center border-b border-border px-6">
        <Link
          href={ROUTES.admin.dashboard}
          className="text-base font-semibold text-tuta-green-dark"
        >
          TUTA Admin
        </Link>
      </div>

      <nav className="p-4">
        <div className="space-y-1">
          {ADMIN_NAVIGATION_ITEMS.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text-primary transition hover:bg-surface"
            >
              <Icon className="size-4" />
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
