/** @type {import('next').NextConfig} */
const nextConfig = {
  
};

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
  images: {
    domains: ["www.shutterstock.com", "goldfish-app-38lif.ondigitalocean.app", "utfs.io", "strapi.180dcugm.org" ],
  },
};
