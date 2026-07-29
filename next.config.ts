import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/first-v1", destination: "https://first-ten-red.vercel.app" },
      { source: "/first-v1/:path*", destination: "https://first-ten-red.vercel.app/:path*" },
    ];
  },
};

export default nextConfig;
