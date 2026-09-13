"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Khám phá", href: "/" },
  { label: "Danh mục", href: "/categories" },
  { label: "Thương hiệu", href: "/brands" },
];

type Panel = "menu" | "search" | null;

export function HeaderNavigation() {
  const pathname = usePathname();
  const [panel, setPanel] = useState<Panel>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!panel) return;

    if (panel === "search") {
      searchInputRef.current?.focus();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPanel(null);
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !rootRef.current?.contains(event.target)
      ) {
        setPanel(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [panel]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <div ref={rootRef} className="contents">
      <nav
        aria-label="Điều hướng chính"
        className="hidden items-center md:flex"
      >
        <ul className="flex items-center gap-8">
          {navigation.map(({ label, href }) => {
            const active = isActive(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "text-sm font-medium transition-colors",
                    active
                      ? "text-tuta-green-dark"
                      : "text-text-secondary hover:text-text-primary",
                  ].join(" ")}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="ml-auto flex items-center gap-1">
        <button
          type="button"
          aria-label="Tìm kiếm"
          aria-expanded={panel === "search"}
          aria-controls="header-search"
          onClick={() =>
            setPanel((current) => (current === "search" ? null : "search"))
          }
          className="flex size-10 items-center justify-center text-text-primary transition-colors hover:text-tuta-green"
        >
          {panel === "search" ? (
            <X aria-hidden="true" strokeWidth={1.5} className="size-5" />
          ) : (
            <Search aria-hidden="true" strokeWidth={1.5} className="size-5" />
          )}
        </button>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={panel === "menu"}
          aria-controls="header-mobile-menu"
          onClick={() =>
            setPanel((current) => (current === "menu" ? null : "menu"))
          }
          className="flex size-10 items-center justify-center text-text-primary transition-colors hover:text-tuta-green md:hidden"
        >
          {panel === "menu" ? (
            <X aria-hidden="true" strokeWidth={1.5} className="size-5" />
          ) : (
            <Menu aria-hidden="true" strokeWidth={1.5} className="size-5" />
          )}
        </button>
      </div>

      {panel === "menu" && (
        <div
          id="header-mobile-menu"
          className="absolute inset-x-0 top-full border-b border-border bg-background md:hidden"
        >
          <nav aria-label="Điều hướng trên di động" className="px-5 py-4">
            <ul>
              {navigation.map(({ label, href }) => {
                const active = isActive(href);

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setPanel(null)}
                      className={[
                        "block py-4 text-base font-medium",
                        active ? "text-tuta-green-dark" : "text-text-primary",
                      ].join(" ")}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}

      {panel === "search" && (
        <div
          id="header-search"
          className="absolute inset-x-0 top-full border-b border-border bg-background"
        >
          <form
            action="/search"
            method="get"
            role="search"
            className="mx-auto flex max-w-xl items-center gap-3 px-5 py-6"
          >
            <Search
              aria-hidden="true"
              strokeWidth={1.5}
              className="size-5 shrink-0 text-text-secondary"
            />

            <input
              ref={searchInputRef}
              name="q"
              type="search"
              placeholder="Tìm sản phẩm hoặc thương hiệu"
              className="w-full bg-transparent text-base text-text-primary outline-none placeholder:text-text-secondary"
            />

            <button
              type="submit"
              className="text-sm font-medium text-tuta-green-dark"
            >
              Tìm
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
