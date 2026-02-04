const stylexUnplugin = require('@stylexjs/unplugin').default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],
  webpack: (config, { dev }) => {
    config.plugins.push(
      stylexUnplugin.webpack({
        dev,
        runtimeInjection: false,
        genConditionalClasses: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: __dirname,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
