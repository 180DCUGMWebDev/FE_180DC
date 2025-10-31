/** @type {import('next').NextConfig} */
const { withPayload } = require("@payloadcms/next/withPayload");

const nextConfig = {
  reactStrictMode: false,
  turbopack: {},
  images: {
    remotePatterns: [
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
    ],
  },

  webpack: (config, { isServer }) => {
    // // Exclude Node.js modules from client-side bundle
    // if (!isServer) {
    //   config.resolve.fallback = {
    //     ...config.resolve.fallback,
    //     dns: false,
    //     net: false,
    //     tls: false,
    //     fs: false,
    //     crypto: false,
    //     stream: false,
    //     url: false,
    //     zlib: false,
    //     http: false,
    //     https: false,
    //     assert: false,
    //     os: false,
    //     path: false,
    //     worker_threads: false,
    //     readline: false,
    //   };
    // }

    // Set mainFields order for module resolution
    config.resolve.mainFields = ["browser", "module", "main"];

    return config;
  },
};

module.exports = withPayload(nextConfig);
