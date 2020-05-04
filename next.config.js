const webpack = require('webpack');

module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        loader: 'eslint-loader',
        include: [/src/],
        exclude: ['/node_modules/', '/.next/', '/dist/'],
        enforce: 'pre',
        options: {
          emitWarning: true,
          fix: true,
        },
      });
    }

    return config;
  },
};
