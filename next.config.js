const { i18n } = require('./next-i18next.config');

const { withAxiom } = require('next-axiom');

const { version } = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  env: {
    NEXT_PUBLIC_VERSION: version,
    PASSWORD_PROTECT: process.env.NODE_ENV !== 'development',
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
};

module.exports = withAxiom(nextConfig);
