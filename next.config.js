// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   env: {
//     WC_CONSUMER_KEY: process.env.WC_CONSUMER_KEY,
//     WC_CONSUMER_SECRET: process.env.WC_CONSUMER_SECRET,
//   },
//   images: {
//     domains: ['wp.merrylow.com'],
//     // remotePatterns: [
//     //   {
//     //     protocol: "https",
//     //     hostname: "wp.merrylow.com",
//     //     port: "",
//     //     pathname: "/wp-content/uploads/**", 
//     //   },
//       // {
//         // protocol: "https",
//         // hostname: "merrylow.com", 
//         // pathname: "/**",
//       // },
//       // {
//       //   protocol: "https",
//       //   hostname: "merrylow.com",
//       //   pathname: "/public/", 
//       // },
//     // ]
//   },
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WC_CONSUMER_KEY: process.env.WC_CONSUMER_KEY,
    WC_CONSUMER_SECRET: process.env.WC_CONSUMER_SECRET,
  },
  eslink: {
    ignoreDuringBuilds: true,
  },
  images: {
    // domains: ['wp.merrylow.com'],
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
