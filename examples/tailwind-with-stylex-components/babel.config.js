const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  presets: ['next/babel'],
  plugins: [
    // StyleX babel plugin to compile StyleX components
    [
      '@stylexjs/babel-plugin',
      {
        dev,
        runtimeInjection: false,
        enableInlinedConditionalMerge: true,
        treeshakeCompensation: true,
        importSources: [
          '@stylexjs/stylex',
          { from: '@examples/stylex-components', as: '@stylexjs/stylex' },
        ],
        aliases: {
          '@/*': [path.join(__dirname, '*')],
        },
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: path.join(__dirname, '../..'),
        },
      },
    ],
  ],
};
