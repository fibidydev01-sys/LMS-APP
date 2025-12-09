// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },

  // Strict mode untuk development
  reactStrictMode: true,

  // TypeScript strict
  typescript: {
    // Jangan ignore errors saat build
    ignoreBuildErrors: false,
  },
};

export default nextConfig;