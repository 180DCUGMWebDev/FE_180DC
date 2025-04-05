/** @type {import('next').NextConfig} */
// const webpack = require("webpack");

module.exports = {
  reactStrictMode: false,
  images: {
    domains: [
      "www.shutterstock.com",
      "goldfish-app-38lif.ondigitalocean.app",
      "utfs.io",
      "strapi.180dcugm.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi.180dcugm.org",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
  // crossOrigin: "anonymous",
};
