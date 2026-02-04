import * as stylex from '@stylexjs/stylex';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      {...stylex.props(styles.button, isDark ? styles.buttonDark : styles.buttonLight)}
      aria-label="Toggle theme"
    >
      {/* Track background effects */}
      <div {...stylex.props(styles.trackBackground)}>
        {/* Stars (visible in dark mode) */}
        <div {...stylex.props(styles.starsContainer, isDark ? styles.visible : styles.hidden)}>
          <div {...stylex.props(styles.star, styles.star1)} />
          <div {...stylex.props(styles.star, styles.star2)} />
          <div {...stylex.props(styles.star, styles.star3)} />
        </div>

        {/* Clouds (visible in light mode) */}
        <div {...stylex.props(styles.cloudsContainer, isDark ? styles.hidden : styles.visible)}>
          <div {...stylex.props(styles.cloud1)} />
          <div {...stylex.props(styles.cloud2)} />
        </div>
      </div>

      {/* Toggle knob */}
      <div {...stylex.props(styles.knob, isDark ? styles.knobDark : styles.knobLight)}>
        {/* Sun icon */}
        <svg
          {...stylex.props(styles.sunIcon, isDark ? styles.iconHidden : styles.iconVisible)}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>

        {/* Moon icon */}
        <svg
          {...stylex.props(styles.moonIcon, isDark ? styles.iconVisible : styles.iconHiddenMoon)}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      </div>
    </button>
  );
}

const styles = stylex.create({
  button: {
    position: 'relative',
    width: '4rem',
    height: '2rem',
    borderRadius: '9999px',
    padding: '0.25rem',
    boxShadow: '0 10px 15px -3px rgba(168, 85, 247, 0.25)',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
  },
  buttonLight: {
    backgroundImage: 'linear-gradient(to right, #60a5fa, #a855f7)',
  },
  buttonDark: {
    backgroundImage: 'linear-gradient(to right, #4f46e5, #7e22ce)',
  },
  trackBackground: {
    position: 'absolute',
    inset: '0',
    borderRadius: '9999px',
    overflow: 'hidden',
  },
  starsContainer: {
    position: 'absolute',
    inset: '0',
    transitionProperty: 'opacity',
    transitionDuration: '500ms',
  },
  cloudsContainer: {
    position: 'absolute',
    inset: '0',
    transitionProperty: 'opacity',
    transitionDuration: '500ms',
  },
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  star: {
    position: 'absolute',
    width: '0.25rem',
    height: '0.25rem',
    backgroundColor: '#fff',
    borderRadius: '9999px',
    animationName: 'pulse-slow',
    animationDuration: '2s',
    animationIterationCount: 'infinite',
  },
  star1: {
    top: '20%',
    left: '10%',
  },
  star2: {
    top: '30%',
    left: '25%',
    animationDelay: '200ms',
  },
  star3: {
    top: '40%',
    left: '40%',
    animationDelay: '400ms',
  },
  cloud1: {
    position: 'absolute',
    top: '0.25rem',
    left: '0.5rem',
    width: '0.75rem',
    height: '0.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '9999px',
  },
  cloud2: {
    position: 'absolute',
    bottom: '0.5rem',
    left: '1rem',
    width: '0.5rem',
    height: '0.25rem',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '9999px',
  },
  knob: {
    position: 'relative',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '9999px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  knobLight: {
    transform: 'translateX(0)',
  },
  knobDark: {
    transform: 'translateX(2rem)',
  },
  sunIcon: {
    width: '1rem',
    height: '1rem',
    color: '#eab308',
    position: 'absolute',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
  },
  moonIcon: {
    width: '1rem',
    height: '1rem',
    color: '#4f46e5',
    position: 'absolute',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
  },
  iconVisible: {
    opacity: 1,
    transform: 'rotate(0deg) scale(1)',
  },
  iconHidden: {
    opacity: 0,
    transform: 'rotate(90deg) scale(0.5)',
  },
  iconHiddenMoon: {
    opacity: 0,
    transform: 'rotate(-90deg) scale(0.5)',
  },
});
