export const CONTACT_LINKS = {
  zalo: "https://zalo.me/0788866008",
  facebook: "https://www.facebook.com/profile.php?id=61591956784298",
  tiktok: "https://www.tiktok.com/@tuta.selectjapan",
  youtube: "https://www.youtube.com/@TuTaSelect",
} as const;

type ContactChannel = {
  name: string;
  href: string;
  label: string;
};

export const CONTACT_CHANNELS = {
  zalo: {
    name: "Zalo",
    href: CONTACT_LINKS.zalo,
    label: "Liên hệ TUTA qua Zalo",
  },
  facebook: {
    name: "Facebook",
    href: CONTACT_LINKS.facebook,
    label: "Liên hệ TUTA qua Facebook",
  },
  youtube: {
    name: "YouTube",
    href: CONTACT_LINKS.youtube,
    label: "Xem TUTA trên YouTube",
  },
  tiktok: {
    name: "TikTok",
    href: CONTACT_LINKS.tiktok,
    label: "Xem TUTA trên TikTok",
  },
} as const satisfies Record<keyof typeof CONTACT_LINKS, ContactChannel>;

export type ContactChannelId = keyof typeof CONTACT_CHANNELS;
