import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/EllieBeeBakes-Website',
  assetPrefix: '/EllieBeeBakes-Website/',
};

export default nextConfig;
