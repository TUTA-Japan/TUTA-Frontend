import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { HeaderNavigation } from "@/components/header-navigation";

export function SiteHeader() {
  return (
    <header className="site-header relative z-30 border-b border-border bg-background">
      <div className="mx-auto grid h-18 max-w-350 grid-cols-[auto_1fr] items-center gap-6 px-5 md:h-20 md:grid-cols-[1fr_auto_1fr] md:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="TUTA Japan Select — Trang chủ"
          className="-m-2 w-fit rounded-sm p-2"
        >
          <BrandLogo className="w-30 md:w-36" eager />
        </Link>
        <HeaderNavigation />
      </div>
    </header>
  );
}
