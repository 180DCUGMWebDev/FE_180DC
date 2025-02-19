/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const nextConfig = {
  webpack: (config) => {
    // Existing rule for .node files
    config.module.rules.push({
      test: /\.node$/,
      use: "raw-loader",
    });

    // ✅ Add polyfills for Node.js core modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      events: require.resolve('events/'),
      process: require.resolve('process/browser'),
      util: require.resolve('util/'),
    };

    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
      })
    );

    return config;
  },
  images: {
    domains: [
      "www.shutterstock.com",
      "goldfish-app-38lif.ondigitalocean.app",
      "utfs.io",
      "strapi.180dcugm.org",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.180dcugm.org',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
