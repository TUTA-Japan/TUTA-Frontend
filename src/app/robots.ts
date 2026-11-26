import type { MetadataRoute } from "next";

import { ROUTES } from "@/constants/routes";
import { absoluteUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Prefix match: "/admin" also covers "/admin/login" and "/admin/...".
      disallow: [ROUTES.admin.dashboard, "/api/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
