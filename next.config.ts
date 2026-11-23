import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Seeded catalog images.
      {
        protocol: "https",
        hostname: "images.tutatuta.vn",
        pathname: "/image/**",
      },
      // Images uploaded from the admin: the backend stores them under
      // images/products/<slug>/ (and images/staging/ before a product is saved).
      {
        protocol: "https",
        hostname: "images.tutatuta.vn",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
