import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { SITE } from "@/constants/site";
import { SITE_OPEN_GRAPH } from "@/lib/metadata";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: SITE.title,
    template: "%s | TUTA",
  },
  description: SITE.description,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    ...SITE_OPEN_GRAPH,
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    images: [SITE.ogImage],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        id="top"
        className={`${montserrat.variable} flex min-h-dvh flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
