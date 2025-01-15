// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
  
// };

// export default nextConfig;


// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WC_CONSUMER_KEY: process.env.WC_CONSUMER_KEY,
    WC_CONSUMER_SECRET: process.env.WC_CONSUMER_SECRET,
  },
  images: {
    domains: ['wp.merrylow.com'], 
  },
};

export default nextConfig;