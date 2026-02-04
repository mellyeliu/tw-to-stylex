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
        // StyleX mode: only StyleX for utilities (Tailwind base/theme imported directly in CSS)
        '@stylexjs/postcss-plugin': {
          include: ['app/**/*.{js,jsx,ts,tsx}', '../../libs/stylex-components/src/**/*.{js,jsx,ts,tsx}'],
          babelConfig: {
            babelrc: false,
            parserOpts: {
              plugins: ['typescript', 'jsx'],
            },
            plugins: babelConfig.plugins,
          },
          useCSSLayers: true,
        },
        autoprefixer: {},
      },
};
