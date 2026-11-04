import { AdminLoginForm } from "@/components/admin/admin-login-form";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-5">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-background p-6 shadow-sm">
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-tuta-green uppercase">
            TUTA Admin
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-text-primary">
            Đăng nhập quản trị
          </h1>

          <p className="mt-2 text-sm leading-6 text-text-secondary">
            Đăng nhập để quản lý sản phẩm và nội dung của TUTA.
          </p>
        </div>

        <AdminLoginForm />
      </div>
    </main>
  );
}
