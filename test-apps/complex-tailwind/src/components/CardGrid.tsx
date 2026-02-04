import * as stylex from '@stylexjs/stylex';

interface Card {
  id: number;
  title: string;
  description: string;
  gradient: string;
  size: 'small' | 'medium' | 'large';
  icon: string;
}

// Map gradient names to actual CSS gradients
const gradientMap: Record<string, string> = {
  'from-blue-500 to-cyan-500': 'linear-gradient(to bottom right, #3b82f6, #06b6d4)',
  'from-green-500 to-emerald-500': 'linear-gradient(to bottom right, #22c55e, #10b981)',
  'from-purple-500 to-pink-500': 'linear-gradient(to bottom right, #a855f7, #ec4899)',
  'from-orange-500 to-red-500': 'linear-gradient(to bottom right, #f97316, #ef4444)',
  'from-indigo-500 to-purple-500': 'linear-gradient(to bottom right, #6366f1, #a855f7)',
  'from-pink-500 to-rose-500': 'linear-gradient(to bottom right, #ec4899, #f43f5e)',
  'from-slate-500 to-gray-600': 'linear-gradient(to bottom right, #64748b, #4b5563)',
  'from-teal-500 to-cyan-500': 'linear-gradient(to bottom right, #14b8a6, #06b6d4)',
};

const cards: Card[] = [
  { id: 1, title: 'Analytics', description: 'Track your performance metrics', gradient: 'from-blue-500 to-cyan-500', size: 'large', icon: '📊' },
  { id: 2, title: 'Payments', description: 'Secure transactions', gradient: 'from-green-500 to-emerald-500', size: 'medium', icon: '💳' },
  { id: 3, title: 'Users', description: 'Manage accounts', gradient: 'from-purple-500 to-pink-500', size: 'small', icon: '👥' },
  { id: 4, title: 'Settings', description: 'Configure system', gradient: 'from-orange-500 to-red-500', size: 'small', icon: '⚙️' },
  { id: 5, title: 'Reports', description: 'Generate insights', gradient: 'from-indigo-500 to-purple-500', size: 'medium', icon: '📈' },
  { id: 6, title: 'Notifications', description: 'Stay updated', gradient: 'from-pink-500 to-rose-500', size: 'large', icon: '🔔' },
  { id: 7, title: 'Security', description: 'Protect data', gradient: 'from-slate-500 to-gray-600', size: 'small', icon: '🔒' },
  { id: 8, title: 'Storage', description: 'Cloud backup', gradient: 'from-teal-500 to-cyan-500', size: 'medium', icon: '☁️' },
];

const MEDIUM_BREAKPOINT = '@media (min-width: 768px)';

const shimmerKeyframes = stylex.keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

const bounceKeyframes = stylex.keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.2)' },
  '100%': { transform: 'scale(1.1)' },
});

const styles = stylex.create({
  grid: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr',
      [MEDIUM_BREAKPOINT]: 'repeat(4, 1fr)',
    },
    gap: 16,
    gridAutoRows: '180px',
  },
  card: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
    cursor: 'pointer',
  },
  cardLarge: {
    gridColumn: {
      default: 'span 1',
      [MEDIUM_BREAKPOINT]: 'span 2',
    },
    gridRow: {
      default: 'span 1',
      [MEDIUM_BREAKPOINT]: 'span 2',
    },
  },
  cardMedium: {
    gridColumn: {
      default: 'span 1',
      [MEDIUM_BREAKPOINT]: 'span 2',
    },
  },
  gradientBg: {
    position: 'absolute',
    inset: 0,
    opacity: {
      default: 0.9,
      [stylex.when.ancestor(':hover')]: 1,
    },
    transitionProperty: 'opacity',
    transitionDuration: '300ms',
  },
  shimmer: {
    position: 'absolute',
    inset: 0,
    opacity: {
      default: 0,
      [stylex.when.ancestor(':hover')]: 1,
    },
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
    backgroundSize: '200% 100%',
    animationName: {
      default: null,
      [stylex.when.ancestor(':hover')]: shimmerKeyframes,
    },
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    transitionProperty: 'opacity',
    transitionDuration: '300ms',
  },
  glassOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent, rgba(255,255,255,0.1))',
  },
  content: {
    position: 'relative',
    height: '100%',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#fff',
  },
  icon: {
    fontSize: '2.25rem',
    display: 'block',
    marginBottom: 12,
    transform: {
      default: 'scale(1)',
      [stylex.when.ancestor(':hover')]: 'scale(1.1)',
    },
    animationName: {
      default: null,
      [stylex.when.ancestor(':hover')]: bounceKeyframes,
    },
    animationDuration: '500ms',
    transitionProperty: 'transform',
    transitionDuration: '300ms',
  },
  title: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: 700,
    marginBottom: 4,
    transform: {
      default: 'translateX(0)',
      [stylex.when.ancestor(':hover')]: 'translateX(4px)',
    },
    transitionProperty: 'transform',
    transitionDuration: '300ms',
  },
  description: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    transform: {
      default: 'translateX(0)',
      [stylex.when.ancestor(':hover')]: 'translateX(4px)',
    },
    transitionProperty: 'transform',
    transitionDuration: '300ms',
    transitionDelay: '75ms',
  },
  learnMore: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    opacity: {
      default: 0,
      [stylex.when.ancestor(':hover')]: 1,
    },
    transform: {
      default: 'translateY(8px)',
      [stylex.when.ancestor(':hover')]: 'translateY(0)',
    },
    transitionProperty: 'opacity, transform',
    transitionDuration: '300ms',
  },
  learnMoreText: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 500,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    transform: {
      default: 'translateX(0)',
      [stylex.when.ancestor(':hover')]: 'translateX(4px)',
    },
    transitionProperty: 'transform',
    transitionDuration: '200ms',
  },
  borderGlow: {
    position: 'absolute',
    inset: 0,
    borderRadius: 16,
    borderWidth: {
      default: 1,
      [stylex.when.ancestor(':hover')]: 2,
    },
    borderStyle: 'solid',
    borderColor: {
      default: 'rgba(255, 255, 255, 0.2)',
      [stylex.when.ancestor(':hover')]: 'rgba(255, 255, 255, 0.4)',
    },
    transitionProperty: 'border-width, border-color',
    transitionDuration: '300ms',
    pointerEvents: 'none',
  },
  cornerAccent: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: {
      default: 80,
      [stylex.when.ancestor(':hover')]: 96,
    },
    height: {
      default: 80,
      [stylex.when.ancestor(':hover')]: 96,
    },
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomLeftRadius: 100,
    transitionProperty: 'width, height',
    transitionDuration: '300ms',
  },
});

export default function CardGrid() {
  return (
    <div {...stylex.props(styles.grid)}>
      {cards.map((card) => (
        <div
          key={card.id}
          {...stylex.props(
            stylex.defaultMarker(),
            styles.card,
            card.size === 'large' && styles.cardLarge,
            card.size === 'medium' && styles.cardMedium
          )}
        >
          {/* Gradient background */}
          <div
            {...stylex.props(styles.gradientBg)}
            style={{ backgroundImage: gradientMap[card.gradient] }}
          />

          {/* Shimmer effect on hover */}
          <div {...stylex.props(styles.shimmer)} />

          {/* Glass overlay */}
          <div {...stylex.props(styles.glassOverlay)} />

          {/* Content */}
          <div {...stylex.props(styles.content)}>
            <div>
              <span {...stylex.props(styles.icon)}>
                {card.icon}
              </span>
              <h3 {...stylex.props(styles.title)}>
                {card.title}
              </h3>
              <p {...stylex.props(styles.description)}>
                {card.description}
              </p>
            </div>

            <div {...stylex.props(styles.learnMore)}>
              <span {...stylex.props(styles.learnMoreText)}>Learn more</span>
              <svg {...stylex.props(styles.arrowIcon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Border glow effect */}
          <div {...stylex.props(styles.borderGlow)} />

          {/* Corner accent */}
          <div {...stylex.props(styles.cornerAccent)} />
        </div>
      ))}
    </div>
  );
}
