const path = require('path');

// Toggle: USE_TAILWIND=true to skip StyleX transform and use raw Tailwind CSS
const useRawTailwind = process.env.USE_TAILWIND === 'true';

// Import sync wrapper from the main package
const tailwindToStylexSync = require('tailwind-to-stylex/sync').default;

const dev = process.env.NODE_ENV !== 'production';

// Wrap the tw-to-stylex plugin to exclude stylex-components
const twToStylexWithExclude = () => {
  const originalPlugin = tailwindToStylexSync();
  const originalProgramVisitor = originalPlugin.visitor.Program;

  return {
    name: originalPlugin.name,
    visitor: {
      Program: {
        enter(programPath, state) {
          // Skip processing for stylex-components library
          const filename = state.filename || '';
          if (filename.includes('stylex-components')) {
            return;
          }
          // Call the original Program visitor's enter method
          if (typeof originalProgramVisitor === 'function') {
            return originalProgramVisitor(programPath, state);
          } else if (originalProgramVisitor && typeof originalProgramVisitor.enter === 'function') {
            return originalProgramVisitor.enter(programPath, state);
          }
        },
      },
    },
  };
};

module.exports = {
  presets: ['next/babel'],
  plugins: useRawTailwind
    ? []
    : [
        // tailwind-to-stylex runs FIRST to transform className to StyleX
        twToStylexWithExclude,
        // StyleX babel plugin runs SECOND to compile StyleX
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
