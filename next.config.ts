import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.tutatuta.vn",
        pathname: "/image/**",
      },
    ],
  },
};

export default nextConfig;
