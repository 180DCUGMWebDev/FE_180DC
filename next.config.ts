/** @type {import('next').NextConfig} */
// const webpack = require("webpack");

module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "goldfish-app-38lif.ondigitalocean.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
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
