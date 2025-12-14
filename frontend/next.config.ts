import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.pexels.com'
    },
    {
      protocol: 'https',
      hostname: 'media.istockphoto.com'
    },
  ]
  },
};

export default nextConfig;
