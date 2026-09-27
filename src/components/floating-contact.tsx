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
  return (
    <nav
      aria-label="Kênh liên hệ TUTA"
      className="fixed right-[max(0.75rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex flex-col items-center rounded-[1.75rem] border border-border/70 bg-background/95 p-1.5 shadow-[0_8px_32px_-8px_rgba(31,42,34,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md sm:right-6 sm:bottom-6 sm:p-2"
    >
      <span className="pt-2 pb-2.5 text-[8px] font-semibold tracking-[0.18em] text-tuta-green">
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
                className="size-6 object-contain transition-transform duration-300 ease-out group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:transform-none motion-reduce:transition-none sm:size-7"
              />
              <span className="text-[9px] leading-none font-medium tracking-tight">
                {channel.name}
              </span>
            </>
          );
          const className =
            "group relative flex h-14 w-14 flex-col items-center justify-center gap-1.5 rounded-[1.125rem] sm:h-15 sm:w-15";

          return (
            <li key={channel.name}>
              {channel.href ? (
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${channel.label} (mở tab mới)`}
                  className={`${className} transition-[background-color,color,transform] duration-200 ease-out hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tuta-green motion-reduce:transform-none motion-reduce:transition-none text-text-primary hover:bg-white`}
                >
                  {content}
                </a>
              ) : (
                <span
                  role="link"
                  aria-disabled="true"
                  aria-label={`${channel.name}: chưa có liên kết`}
                  title={`${channel.name}: chưa có liên kết`}
                  className={`${className} cursor-default text-text-secondary`}
                >
                  <span className="flex flex-col items-center gap-1.5 opacity-45 grayscale">
                    {content}
                  </span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
