/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WC_CONSUMER_KEY: process.env.WC_CONSUMER_KEY,
    WC_CONSUMER_SECRET: process.env.WC_CONSUMER_SECRET,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.merrylow.com',
        pathname: '/wp-content/uploads/**',
      }
    ],
  }
};

module.exports = nextConfig;