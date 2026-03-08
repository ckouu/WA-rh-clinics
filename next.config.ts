import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/WAclinics',
  assetPrefix: '/WAclinics/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
