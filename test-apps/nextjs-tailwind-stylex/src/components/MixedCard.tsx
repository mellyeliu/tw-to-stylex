'use client';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    overflow: 'hidden',
    border: '1px solid #e5e7eb',
    transition: 'box-shadow 300ms ease',
    ':hover': {
      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
  },
  header: {
    background: 'linear-gradient(to right, #10b981, #14b8a6)',
    padding: '1rem',
  },
  headerTitle: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '1.125rem',
  },
  body: {
    padding: '1.5rem',
  },
});

export function MixedCard() {
  return (
    <div {...stylex.props(styles.card)}>
      <div {...stylex.props(styles.header)}>
        <h3 {...stylex.props(styles.headerTitle)}>Mixed Styles</h3>
      </div>
      <div {...stylex.props(styles.body)}>
        {/* Tailwind inside StyleX container */}
        <p className="text-gray-600 text-sm mb-4">
          This card uses <strong>StyleX for structure</strong> and <strong>Tailwind for content</strong>.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
            Best of Both
          </span>
          <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full font-medium">
            Coexistence
          </span>
        </div>
        <button className="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-medium rounded-lg transition-all duration-200">
          Mixed Button (Tailwind)
        </button>
      </div>
    </div>
  );
}
