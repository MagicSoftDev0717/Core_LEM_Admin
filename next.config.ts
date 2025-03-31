import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['https://corelemadmin-production.up.railway.app/'], // Add your image domain here
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
