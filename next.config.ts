/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Move images OUTSIDE of headers
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // 2. Headers for SEO Security & Performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Cache-Control',
            // Top Tier Strategy: stale-while-revalidate 
            // This ensures the user gets a fast response while the background updates the page
            value: 'public, s-maxage=1, stale-while-revalidate=59',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // Privacy-focused SEO
          },
        ],
      },
    ];
  },

  // 3. Optimization for modern builds
  poweredByHeader: false, // Security: Don't reveal you are using Next.js
  reactStrictMode: true,
};

export default nextConfig;
