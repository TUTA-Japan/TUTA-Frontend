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

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-tuta-green"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Mật khẩu
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-tuta-green"
            />
          </div>

          <button
            type="submit"
            className="h-11 w-full rounded-lg bg-tuta-green text-sm font-semibold text-white transition hover:bg-tuta-green-dark"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </main>
  );
}