require('custom-env').env();
const webpack = require('webpack');

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  return {
    // Properties set here will be available on the client-side via `process.env.[FLAG_NAME]`
    env: {
      API_URL: process.env.API_URL
    },
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
};
