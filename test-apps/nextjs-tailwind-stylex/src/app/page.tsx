'use client';

import * as stylex from '@stylexjs/stylex';
import { TailwindCard } from '@/components/TailwindCard';
import { StyleXCard } from '@/components/StyleXCard';
import { MixedCard } from '@/components/MixedCard';

const styles = stylex.create({
  container: {
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: '#f9fafb',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr',
      '@media (min-width: 768px)': 'repeat(3, 1fr)',
    },
    gap: '1.5rem',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  section: {
    marginTop: '3rem',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  success: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
  },
  statusContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
    flexWrap: 'wrap',
  },
});

export default function Home() {
  return (
    <div {...stylex.props(styles.container)}>
      <header {...stylex.props(styles.header)}>
        <h1 {...stylex.props(styles.title)}>
          Next.js + Tailwind + StyleX
        </h1>
        <p {...stylex.props(styles.subtitle)}>
          Testing both styling systems coexisting in the same application
        </p>
        <div {...stylex.props(styles.statusContainer)}>
          <span {...stylex.props(styles.statusBadge, styles.success)}>
            ✓ Tailwind Active
          </span>
          <span {...stylex.props(styles.statusBadge, styles.success)}>
            ✓ StyleX Active
          </span>
        </div>
      </header>

      <div {...stylex.props(styles.grid)}>
        <TailwindCard />
        <StyleXCard />
        <MixedCard />
      </div>

      <section {...stylex.props(styles.section)}>
        <h2 {...stylex.props(styles.sectionTitle)}>How It Works</h2>
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold">1.</span>
            <p className="text-gray-700">
              <strong>StyleX</strong> uses the Next.js plugin (<code className="bg-gray-100 px-1 rounded">@stylexjs/nextjs-plugin</code>)
              which wraps the babel plugin and handles CSS extraction.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold">2.</span>
            <p className="text-gray-700">
              <strong>Tailwind</strong> uses the standard PostCSS plugin chain
              (<code className="bg-gray-100 px-1 rounded">tailwindcss</code> + <code className="bg-gray-100 px-1 rounded">autoprefixer</code>).
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold">3.</span>
            <p className="text-gray-700">
              Both systems generate CSS independently and can coexist because they use different mechanisms
              (StyleX via Babel transform, Tailwind via PostCSS).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
