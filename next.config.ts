/** @type {import('next').NextConfig} */
const { withPayload } = require("@payloadcms/next/withPayload");

const nextConfig = {
  reactStrictMode: false,
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "goldfish-app-38lif.ondigitalocean.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "strapi.180dcugm.org",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "gvwdpmgyinzctwyzqqdy.supabase.co",
        pathname: "/**",
      },
    ],
  },

  webpack: (config) => {
    // Set mainFields order for module resolution
    config.resolve.mainFields = ["browser", "module", "main"];

    return config;
  },
};

module.exports = withPayload(nextConfig);
