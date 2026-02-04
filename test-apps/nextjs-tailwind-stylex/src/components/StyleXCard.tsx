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
    background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
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
  description: {
    color: '#4b5563',
    fontSize: '0.875rem',
    marginBottom: '1rem',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  tag: {
    padding: '0.25rem 0.5rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500',
  },
  tagPurple: {
    backgroundColor: '#f3e8ff',
    color: '#7c3aed',
  },
  tagPink: {
    backgroundColor: '#fce7f3',
    color: '#db2777',
  },
  button: {
    width: '100%',
    padding: '0.5rem 1rem',
    backgroundColor: {
      default: '#8b5cf6',
      ':hover': '#7c3aed',
    },
    color: '#ffffff',
    fontWeight: '500',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 200ms ease',
  },
});

export function StyleXCard() {
  return (
    <div {...stylex.props(styles.card)}>
      <div {...stylex.props(styles.header)}>
        <h3 {...stylex.props(styles.headerTitle)}>Pure StyleX</h3>
      </div>
      <div {...stylex.props(styles.body)}>
        <p {...stylex.props(styles.description)}>
          This card is styled entirely with StyleX using stylex.create().
        </p>
        <div {...stylex.props(styles.tagContainer)}>
          <span {...stylex.props(styles.tag, styles.tagPurple)}>
            Babel Transform
          </span>
          <span {...stylex.props(styles.tag, styles.tagPink)}>
            Atomic CSS
          </span>
        </div>
        <button {...stylex.props(styles.button)}>
          StyleX Button
        </button>
      </div>
    </div>
  );
}
