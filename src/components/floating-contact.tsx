"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";

import { CONTACT_LINKS } from "@/constants/contact";
import zalo from "@/assets/zalo.png";
import facebook from "@/assets/facebook.png";
import youtube from "@/assets/youtube.png";
import tiktok from "@/assets/tiktok.png";

type ContactChannel = {
  name: string;
  href: string;
  image: StaticImageData;
  label: string;
};

const channels: ContactChannel[] = [
  {
    name: "Zalo",
    href: CONTACT_LINKS.zalo,
    image: zalo,
    label: "Liên hệ TUTA qua Zalo",
  },
  {
    name: "Facebook",
    href: CONTACT_LINKS.facebook,
    image: facebook,
    label: "Liên hệ TUTA qua Facebook",
  },
  {
    name: "YouTube",
    href: CONTACT_LINKS.youtube,
    image: youtube,
    label: "Xem TUTA trên YouTube",
  },
  {
    name: "TikTok",
    href: CONTACT_LINKS.tiktok,
    image: tiktok,
    label: "Xem TUTA trên TikTok",
  },
];

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !navRef.current?.contains(event.target)
      ) {
        if (navRef.current?.contains(document.activeElement)) {
          buttonRef.current?.focus();
        }
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    const desktop = window.matchMedia("(min-width: 40rem)");
    function handleBreakpointChange() {
      setIsOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleBreakpointChange);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleBreakpointChange);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      aria-label="Kênh liên hệ TUTA"
      data-open={isOpen}
      className="floating-contact fixed right-[max(0.75rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 sm:right-6 sm:bottom-6"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setIsOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Đóng kênh liên hệ" : "Mở kênh liên hệ"}
        className="flex size-13 items-center justify-center rounded-full bg-tuta-green text-white shadow-[0_6px_20px_-6px_rgba(31,42,34,0.3)] transition-[background-color,transform] duration-200 hover:bg-tuta-green-dark active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tuta-green motion-reduce:transform-none motion-reduce:transition-none sm:hidden"
      >
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <path d="m6 6 12 12M18 6 6 18" />
          ) : (
            <>
              <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H9l-5 3v-6a7.5 7.5 0 1 1 16-4.5Z" />
              <path d="M8 10h8M8 14h5" />
            </>
          )}
        </svg>
      </button>

      <div
        id={panelId}
        className="floating-contact__panel absolute right-0 bottom-[calc(100%+0.75rem)] w-44 origin-bottom-right rounded-2xl border border-border/70 bg-background/95 p-2 shadow-[0_8px_32px_-8px_rgba(31,42,34,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md sm:static sm:w-auto sm:rounded-[1.75rem]"
      >
        <span className="block px-3 pt-2 pb-2.5 text-[10px] font-semibold tracking-[0.18em] text-tuta-green sm:px-0 sm:text-center sm:text-[8px]">
          TUTA
        </span>
        <ul className="flex flex-col gap-1">
          {channels.map((channel) => {
            const content = (
              <>
                <Image
                  src={channel.image}
                  alt=""
                  width={28}
                  height={28}
                  className="size-6 shrink-0 object-contain transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transform-none motion-reduce:transition-none sm:size-7"
                />
                <span className="text-[13px] leading-none font-medium sm:text-[9px] sm:tracking-tight">
                  {channel.name}
                </span>
              </>
            );
            const className =
              "group flex min-h-12 items-center gap-3 rounded-xl px-3 sm:h-15 sm:w-15 sm:flex-col sm:justify-center sm:gap-1.5 sm:rounded-[1.125rem] sm:px-0";

            return (
              <li key={channel.name}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${channel.label} (mở tab mới)`}
                    className={`${className} text-text-primary transition-[background-color,transform] duration-200 hover:bg-white active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tuta-green motion-reduce:transform-none motion-reduce:transition-none`}
                  >
                    {content}
                  </a>
                ) : (
                  <span
                    role="link"
                    aria-disabled="true"
                    aria-label={`${channel.name}: chưa có liên kết`}
                    title={`${channel.name}: chưa có liên kết`}
                    className={`${className} cursor-default text-text-secondary opacity-45 grayscale`}
                  >
                    {content}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
