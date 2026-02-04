const babelConfig = require('./babel.config');

module.exports = {
  plugins: {
    // StyleX PostCSS plugin for CSS extraction
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
    // Tailwind CSS for layout styling
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
