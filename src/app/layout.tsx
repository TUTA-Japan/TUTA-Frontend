import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingContact } from "@/components/floating-contact";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tutatuta.vn"),

  title: "TUTA Japan Select | Khám phá sản phẩm nội địa Nhật",
  description:
    "Khám phá sản phẩm nội địa Nhật được tuyển chọn cho cuộc sống hằng ngày.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "TUTA Japan Select | Khám phá sản phẩm nội địa Nhật",
    description:
      "Khám phá sản phẩm nội địa Nhật được tuyển chọn cho cuộc sống hằng ngày.",
    url: "https://tutatuta.vn",
    siteName: "TUTA Japan Select",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TUTA Japan Select",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TUTA Japan Select | Khám phá sản phẩm nội địa Nhật",
    description:
      "Khám phá sản phẩm nội địa Nhật được tuyển chọn cho cuộc sống hằng ngày.",
    images: ["/og-image.jpg"],
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
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <FloatingContact />
      </body>
    </html>
  );
}
