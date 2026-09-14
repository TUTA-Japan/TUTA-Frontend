import { ArrowUp, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { CONTACT_LINKS } from "@/constants/contact";

const navigation = [
  { label: "Khám phá", href: "/" },
  { label: "Danh mục", href: "/categories" },
  { label: "Thương hiệu", href: "/brands" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-border bg-background">
      <div className="mx-auto max-w-350 px-5 md:px-8 lg:px-12">
        <div className="grid gap-8 pt-10 pb-8 md:grid-cols-[1fr_auto] md:gap-16 md:py-12">
          <div>
            <Link
              href="/"
              aria-label="TUTA Japan Select — Trang chủ"
              className="-m-2 block w-fit rounded-sm p-2"
            >
              <BrandLogo className="w-36 md:w-40" />
            </Link>

            <p className="mt-5 max-w-88 text-[13px] leading-6 text-text-secondary">
              Khám phá sản phẩm nội địa Nhật được tuyển chọn cho cuộc sống hằng
              ngày của bạn.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <nav aria-label="Điều hướng chân trang">
              <ul className="flex flex-wrap items-center gap-x-7 gap-y-1 md:gap-x-9">
                {navigation.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      prefetch={false}
                      className="flex min-h-11 items-center text-[13px] font-medium text-text-primary underline-offset-4 transition-colors duration-200 hover:text-tuta-green hover:underline motion-reduce:transition-none"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <p className="text-xs text-text-secondary">Liên hệ mua hàng</p>

              <div className="flex items-center gap-2">
                <a
                  href={CONTACT_LINKS.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Liên hệ TUTA qua Zalo"
                  className="flex size-9 items-center justify-center border border-border text-text-primary transition-colors duration-200 hover:border-tuta-green hover:text-tuta-green-dark"
                >
                  <MessageCircle
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="size-4"
                  />
                </a>

                <a
                  href={CONTACT_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Liên hệ TUTA qua Facebook"
                  className="flex size-9 items-center justify-center border border-border text-text-primary transition-colors duration-200 hover:border-tuta-green hover:text-tuta-green-dark"
                >
                  <Send aria-hidden="true" className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-border py-4 md:py-5">
          <p className="text-xs leading-5 text-text-secondary">
            © {new Date().getFullYear()} TUTA Japan Select
          </p>

          <a
            href="#top"
            className="group flex min-h-11 items-center gap-2 text-xs font-medium text-text-secondary transition-colors duration-200 hover:text-tuta-green-dark motion-reduce:transition-none"
          >
            Về đầu trang
            <ArrowUp
              aria-hidden="true"
              strokeWidth={1.5}
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
