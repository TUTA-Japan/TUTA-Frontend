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
  async redirects() {
    // Product slugs that changed after going live.
    return [
      {
        source: "/products/vien-uong-dhc-vitamin-c-20-ngay",
        destination: "/products/vien-uong-dhc-vitamin-c-60-ngay",
        permanent: true,
      },
      {
        source: "/products/vien-uong-bo-sung-collagen-dhc",
        destination: "/products/vien-uong-bo-sung-collagen-dhc-60-ngay",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
