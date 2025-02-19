const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      events: require.resolve('events/'),
      process: require.resolve('process/browser'),
      util: require.resolve('util/'),
    };
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      })
    );
    return config;
  },
};
