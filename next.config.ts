import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 828, 1080, 1280, 1600],
  },

  async redirects() {
    return [
      { source: '/about', destination: '/about-us/', permanent: true },
      { source: '/contact', destination: '/contact-us/', permanent: true },
      { source: '/privacy', destination: '/privacy-policy/', permanent: true },
      { source: '/terms', destination: '/terms-and-conditions/', permanent: true },
      { source: '/emergency-plumbing', destination: '/emergency-plumber/', permanent: true },
      { source: '/service-areas', destination: '/locations/', permanent: true },
      { source: '/drain-cleaning', destination: '/plumbing-services/drain-cleaning/', permanent: true },
      { source: '/sewer-line-repair', destination: '/plumbing-services/sewer-line-repair/', permanent: true },
      { source: '/water-heater-repair', destination: '/plumbing-services/water-heater-repair/', permanent: true },
      { source: '/leak-detection', destination: '/plumbing-services/leak-detection/', permanent: true },
      { source: '/pipe-repair', destination: '/plumbing-services/pipe-repair/', permanent: true },
      { source: '/toilet-repair', destination: '/plumbing-services/toilet-repair/', permanent: true },
      { source: '/faucet-repair', destination: '/plumbing-services/faucet-repair/', permanent: true },
      { source: '/garbage-disposal-repair', destination: '/plumbing-services/garbage-disposal/', permanent: true },
      { source: '/plumbing-services/garbage-disposal-repair', destination: '/plumbing-services/garbage-disposal/', permanent: true },
      { source: '/hydro-jetting', destination: '/plumbing-services/hydro-jetting/', permanent: true },
      { source: '/residential-plumbing', destination: '/plumbing-services/residential-plumbing/', permanent: true },
      { source: '/commercial-plumbing', destination: '/plumbing-services/commercial-plumbing/', permanent: true },
      { source: '/plumbing-maintenance', destination: '/plumbing-services/plumbing-inspection/', permanent: true },
      { source: '/plumbing-services/plumbing-maintenance', destination: '/plumbing-services/plumbing-inspection/', permanent: true },
      { source: '/water-heater-services', destination: '/plumbing-services/water-heater-services/', permanent: true },
      { source: '/leak-repair', destination: '/plumbing-services/leak-repair/', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      {
        source: '/lp/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
      {
        source: '/thank-you/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
      {
        source: '/api/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
      {
        source: '/photos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/brand/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
