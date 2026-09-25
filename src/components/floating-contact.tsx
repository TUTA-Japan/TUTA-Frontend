import { ArrowUpRight, MessageCircle, Send, X } from "lucide-react";

import { CONTACT_LINKS } from "@/constants/contact";

const contactLinkClassName =
  "group/link grid min-h-16 grid-cols-[2.5rem_1fr_auto] items-center gap-3 px-4 py-3 transition-colors duration-200 hover:bg-tuta-green-light/70 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tuta-green motion-reduce:transition-none";

export function FloatingContact() {
  return (
    <aside
      aria-label="Liên hệ nhanh với TUTA"
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-20"
    >
      <details className="floating-contact group relative">
        <summary className="ml-auto flex min-h-12 cursor-pointer list-none items-center justify-center gap-2.5 rounded-sm border border-tuta-green-dark bg-tuta-green-dark px-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(31,42,34,0.14)] transition-colors duration-200 marker:hidden hover:bg-tuta-green focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tuta-orange sm:px-4 [&::-webkit-details-marker]:hidden motion-reduce:transition-none">
          <span className="relative flex size-5 items-center justify-center">
            <MessageCircle
              aria-hidden="true"
              strokeWidth={1.7}
              className="size-5 group-open:hidden"
            />
            <X
              aria-hidden="true"
              strokeWidth={1.7}
              className="hidden size-5 group-open:block"
            />
            <span
              aria-hidden="true"
              className="absolute -top-1 -right-1 size-1.5 rounded-full bg-tuta-orange ring-2 ring-tuta-green-dark group-open:hidden"
            />
          </span>
          <span className="hidden sm:inline">Liên hệ</span>
          <span className="sr-only group-open:hidden">Mở các kênh liên hệ</span>
          <span className="sr-only hidden group-open:inline">
            Đóng các kênh liên hệ
          </span>
        </summary>

        <div className="floating-contact__panel absolute right-0 bottom-[calc(100%+0.75rem)] w-[min(19rem,calc(100vw-2rem))] overflow-hidden rounded-sm border border-border bg-surface shadow-[0_16px_40px_rgba(31,42,34,0.12)]">
          <div className="border-b border-border px-4 py-4">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-tuta-orange"
              />
              <p className="text-sm font-semibold text-text-primary">
                Liên hệ cùng TUTA
              </p>
            </div>
            <p className="mt-1.5 text-xs leading-5 text-text-secondary">
              Chọn kênh thuận tiện để được hỗ trợ về sản phẩm.
            </p>
          </div>

          <nav
            aria-label="Các kênh liên hệ của TUTA"
            className="divide-y divide-border"
          >
            <a
              href={CONTACT_LINKS.zalo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Liên hệ TUTA qua Zalo, mở trong tab mới"
              className={contactLinkClassName}
            >
              <span className="flex size-10 items-center justify-center rounded-sm bg-tuta-green-light text-tuta-green-dark">
                <MessageCircle
                  aria-hidden="true"
                  strokeWidth={1.6}
                  className="size-4.5"
                />
              </span>
              <span>
                <span className="block text-[13px] font-semibold text-text-primary">
                  Zalo
                </span>
                <span className="mt-0.5 block text-[11px] text-text-secondary">
                  Nhắn tin trực tiếp
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                strokeWidth={1.5}
                className="size-4 text-text-secondary transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </a>

            <a
              href={CONTACT_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Liên hệ TUTA qua Facebook, mở trong tab mới"
              className={contactLinkClassName}
            >
              <span className="flex size-10 items-center justify-center rounded-sm bg-tuta-orange-light text-tuta-orange">
                <Send aria-hidden="true" strokeWidth={1.6} className="size-4" />
              </span>
              <span>
                <span className="block text-[13px] font-semibold text-text-primary">
                  Facebook
                </span>
                <span className="mt-0.5 block text-[11px] text-text-secondary">
                  Gửi tin nhắn
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                strokeWidth={1.5}
                className="size-4 text-text-secondary transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </a>
          </nav>
        </div>
      </details>
    </aside>
  );
}
