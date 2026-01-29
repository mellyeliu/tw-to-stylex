// Toggle: USE_TAILWIND=true to skip StyleX transform and use raw Tailwind CSS
const useRawTailwind = process.env.USE_TAILWIND === 'true';

const babelConfig = require('./babel.config');

module.exports = {
  plugins: useRawTailwind
    ? {
        // Raw Tailwind mode: just use Tailwind CSS
        '@tailwindcss/postcss': {},
        autoprefixer: {},
      }
    : {
        // StyleX mode: StyleX first, then Tailwind for any remaining classes
        '@stylexjs/postcss-plugin': {
          include: ['app/**/*.{js,jsx,ts,tsx}'],
          babelConfig: {
            babelrc: false,
            parserOpts: {
              plugins: ['typescript', 'jsx'],
            },
            plugins: babelConfig.plugins,
          },
          useCSSLayers: true,
        },
        '@tailwindcss/postcss': {},
        autoprefixer: {},
      },
};
