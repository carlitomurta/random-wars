const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const path = require('path');

const nextConfig = {
  distDir: 'build',
  webpack(config) {
    config.resolve.alias.components = path.join(__dirname, 'components');
    config.resolve.alias.static = path.join(__dirname, 'static');
    return config;
  }
};
module.exports = withPlugins(
  [[withSass, { cssModules: false }], [withCSS]],
  nextConfig
);
console.log('Next.js plugins loaded successfully');
