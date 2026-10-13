export function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/95 px-5 backdrop-blur-md md:px-8">
      <div>
        <p className="text-sm font-medium text-text-primary">Quản trị TUTA</p>
      </div>

      <button
        type="button"
        disabled
        className="text-sm font-medium text-text-secondary opacity-50"
      >
        Đăng xuất
      </button>
    </header>
  );
}
