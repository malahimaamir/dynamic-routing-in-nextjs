import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },

  images: {
    domains: ["cdn.dummyjson.com"],
    unoptimized: true, // Disable image optimization temporarily
  },
};

export default nextConfig;
