/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
  images: {
    domains: ["www.shutterstock.com", "goldfish-app-38lif.ondigitalocean.app", "utfs.io", "strapi.180dcugm.org"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.180dcugm.org',
        port: '',
        pathname: '/uploads/**',
      }
    ]
  }
};

module.exports = nextConfig;