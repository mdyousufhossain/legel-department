import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // List of domains from which to load images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // The domain specified in your error
        port: '',
        pathname: '/**',
      },
      // If you use other image sources (e.g., placeholder.com), you'd add them here
    ],
  },
};

export default nextConfig;
