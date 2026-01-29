const path = require('path');

// Toggle: USE_TAILWIND=true to skip StyleX transform and use raw Tailwind CSS
const useRawTailwind = process.env.USE_TAILWIND === 'true';

// Import sync wrapper from the main package
const tailwindToStylexSync = require('tailwind-to-stylex/sync').default;

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  presets: ['next/babel'],
  plugins: useRawTailwind
    ? []
    : [
        // tailwind-to-stylex runs FIRST to transform className to StyleX
        tailwindToStylexSync,
        // StyleX babel plugin runs SECOND to compile StyleX
        [
          '@stylexjs/babel-plugin',
          {
            dev,
            runtimeInjection: false,
            enableInlinedConditionalMerge: true,
            treeshakeCompensation: true,
            aliases: {
              '@/*': [path.join(__dirname, '*')],
            },
            unstable_moduleResolution: {
              type: 'commonJS',
            },
          },
        ],
      ],
};
