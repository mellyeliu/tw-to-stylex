import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import Modal from './components/Modal';
import ThemeToggle from './components/ThemeToggle';

type Page = 'home' | 'gallery' | 'about';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    'Custom animations and keyframes',
    'Dark/light theme with class-based toggling',
    'Complex gradients and glass morphism',
    'Group and peer state modifiers',
    'Arbitrary values and custom utilities',
    'Responsive design patterns',
    'Interactive hover and focus states',
  ];

  const emojis = ['🎨', '🚀', '💎', '🌟', '🎭', '🎪', '🎯', '🔮', '🌈', '⚡', '🔥', '💫'];

  return (
    <div {...stylex.props(styles.wrapper, isDark ? styles.wrapperDark : styles.wrapperLight)}>
      {/* Animated background elements */}
      <div {...stylex.props(styles.bgElements)}>
        <div {...stylex.props(styles.bgCircle1, isDark ? styles.bgCircle1Dark : styles.bgCircle1Light)} />
        <div {...stylex.props(styles.bgCircle2, isDark ? styles.bgCircle2Dark : styles.bgCircle2Light)} />
        <div {...stylex.props(styles.bgCircle3, isDark ? styles.bgCircle3Dark : styles.bgCircle3Light)} />
      </div>

      {/* Theme toggle fixed position */}
      <div {...stylex.props(styles.themeToggleWrapper)}>
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      </div>

      {/* Main content */}
      <div {...stylex.props(styles.mainContent)}>
        <Navbar
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onOpenModal={() => setIsModalOpen(true)}
          isDark={isDark}
        />

        <main {...stylex.props(styles.main)}>
          {currentPage === 'home' && (
            <div {...stylex.props(styles.fadeIn)}>
              <section {...stylex.props(styles.heroSection)}>
                <h1 {...stylex.props(styles.heroTitle)}>
                  Complex Tailwind
                </h1>
                <p {...stylex.props(styles.heroDescription, isDark ? styles.textLight : styles.textDark)}>
                  A showcase of advanced Tailwind CSS features including animations,
                  gradients, dark mode, and interactive components.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  {...stylex.props(styles.heroButton)}
                >
                  Open Modal Demo
                </button>
              </section>
              <CardGrid />
            </div>
          )}

          {currentPage === 'gallery' && (
            <div {...stylex.props(styles.fadeIn)}>
              <h2 {...stylex.props(styles.pageTitle, isDark ? styles.titleDark : styles.titleLight)}>
                Gallery Page
              </h2>
              <div {...stylex.props(styles.galleryGrid)}>
                {emojis.map((emoji, i) => (
                  <div
                    key={i}
                    {...stylex.props(styles.galleryItem)}
                  >
                    <div {...stylex.props(styles.galleryItemInner, isDark ? styles.galleryItemInnerDark : styles.galleryItemInnerLight)}>
                      <div {...stylex.props(styles.galleryItemContent, isDark ? styles.galleryItemContentDark : styles.galleryItemContentLight)}>
                        <span {...stylex.props(styles.galleryEmoji)}>
                          {emoji}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPage === 'about' && (
            <div {...stylex.props(styles.fadeIn, styles.aboutContainer)}>
              <div {...stylex.props(styles.glassCard, isDark ? styles.glassCardDark : styles.glassCardLight)}>
                <h2 {...stylex.props(styles.aboutTitle, isDark ? styles.titleDark : styles.titleLight)}>
                  About This Demo
                </h2>
                <div {...stylex.props(styles.aboutContent)}>
                  <p {...stylex.props(isDark ? styles.textLight : styles.textDark)}>
                    This application demonstrates advanced Tailwind CSS features:
                  </p>
                  <ul {...stylex.props(styles.featureList)}>
                    {features.map((item, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setHoveredFeature(i)}
                        onMouseLeave={() => setHoveredFeature(null)}
                        {...stylex.props(
                          styles.featureItem,
                          isDark ? styles.featureItemDark : styles.featureItemLight,
                          hoveredFeature === i && styles.featureItemHover
                        )}
                      >
                        <span {...stylex.props(styles.featureNumber)}>
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDark={isDark} />
    </div>
  );
}

export default App;

const styles = stylex.create({
  wrapper: {
    minHeight: '100vh',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '500ms',
  },
  wrapperLight: {
    backgroundImage: 'linear-gradient(to bottom right, #f8fafc, #eff6ff, #faf5ff)',
  },
  wrapperDark: {
    backgroundImage: 'linear-gradient(to bottom right, #111827, #581c87, #111827)',
  },
  bgElements: {
    position: 'fixed',
    inset: '0',
    overflow: 'hidden',
    pointerEvents: 'none',
  },
  bgCircle1: {
    position: 'absolute',
    top: '-10rem',
    right: '-10rem',
    width: '20rem',
    height: '20rem',
    borderRadius: '9999px',
    filter: 'blur(48px)',
    opacity: 0.7,
    animationName: 'float',
    animationDuration: '3s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
  bgCircle1Light: {
    backgroundColor: '#d8b4fe',
    mixBlendMode: 'multiply',
  },
  bgCircle1Dark: {
    backgroundColor: '#7e22ce',
    mixBlendMode: 'overlay',
  },
  bgCircle2: {
    position: 'absolute',
    bottom: '-10rem',
    left: '-10rem',
    width: '20rem',
    height: '20rem',
    borderRadius: '9999px',
    filter: 'blur(48px)',
    opacity: 0.7,
    animationName: 'float',
    animationDuration: '3s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
    animationDelay: '1s',
  },
  bgCircle2Light: {
    backgroundColor: '#fde047',
    mixBlendMode: 'multiply',
  },
  bgCircle2Dark: {
    backgroundColor: '#ca8a04',
    mixBlendMode: 'overlay',
  },
  bgCircle3: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '20rem',
    height: '20rem',
    borderRadius: '9999px',
    filter: 'blur(48px)',
    opacity: 0.7,
    animationName: 'float',
    animationDuration: '3s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
    animationDelay: '2s',
  },
  bgCircle3Light: {
    backgroundColor: '#f9a8d4',
    mixBlendMode: 'multiply',
  },
  bgCircle3Dark: {
    backgroundColor: '#be185d',
    mixBlendMode: 'overlay',
  },
  themeToggleWrapper: {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    zIndex: 50,
  },
  mainContent: {
    position: 'relative',
    zIndex: 10,
  },
  main: {
    maxWidth: '80rem',
    marginInline: 'auto',
    paddingInline: '1rem',
    paddingBlock: '2rem',
  },
  fadeIn: {
    animationName: 'fadeIn',
    animationDuration: '300ms',
    animationTimingFunction: 'ease-out',
  },
  heroSection: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  heroTitle: {
    fontSize: {
      default: '3rem',
      '@media (min-width: 768px)': '4.5rem',
    },
    lineHeight: {
      default: '1',
      '@media (min-width: 768px)': '1',
    },
    fontWeight: '700',
    marginBottom: '1rem',
    backgroundImage: 'linear-gradient(to right, #a855f7, #ec4899, #ef4444)',
    backgroundClip: 'text',
    color: 'transparent',
    animationName: 'pulse-slow',
    animationDuration: '3s',
    animationIterationCount: 'infinite',
  },
  heroDescription: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    maxWidth: '42rem',
    marginInline: 'auto',
  },
  textLight: {
    color: '#d1d5db',
  },
  textDark: {
    color: '#4b5563',
  },
  heroButton: {
    marginTop: '2rem',
    paddingInline: '2rem',
    paddingBlock: '1rem',
    backgroundImage: 'linear-gradient(to right, #9333ea, #ec4899)',
    color: '#fff',
    fontWeight: '600',
    borderRadius: '9999px',
    boxShadow: '0 10px 15px -3px rgba(168, 85, 247, 0.5)',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
  },
  pageTitle: {
    fontSize: '2.25rem',
    lineHeight: '2.5rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  titleLight: {
    color: '#1f2937',
  },
  titleDark: {
    color: '#fff',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(2, 1fr)',
      '@media (min-width: 768px)': 'repeat(4, 1fr)',
    },
    gap: '1rem',
  },
  galleryItem: {
    aspectRatio: '1 / 1',
    borderRadius: '1rem',
    backgroundImage: 'linear-gradient(to bottom right, #6366f1, #a855f7, #ec4899)',
    padding: '2px',
    cursor: 'pointer',
  },
  galleryItemInner: {
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  galleryItemInnerLight: {
    backgroundColor: '#fff',
  },
  galleryItemInnerDark: {
    backgroundColor: '#111827',
  },
  galleryItemContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'transform',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '500ms',
  },
  galleryItemContentLight: {
    backgroundImage: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
  },
  galleryItemContentDark: {
    backgroundImage: 'linear-gradient(to bottom right, #1f2937, #374151)',
  },
  galleryEmoji: {
    fontSize: '2.25rem',
  },
  aboutContainer: {
    maxWidth: '48rem',
    marginInline: 'auto',
  },
  glassCard: {
    borderRadius: '1.5rem',
    padding: '2rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(12px)',
    borderWidth: '1px',
    borderStyle: 'solid',
  },
  glassCardLight: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  glassCardDark: {
    backgroundColor: 'rgba(17, 24, 39, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  aboutTitle: {
    fontSize: '2.25rem',
    lineHeight: '2.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
  },
  aboutContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  featureList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    transitionProperty: 'transform',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },
  featureItemLight: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#374151',
  },
  featureItemDark: {
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    color: '#d1d5db',
  },
  featureItemHover: {
    transform: 'translateX(0.5rem)',
  },
  featureNumber: {
    width: '2rem',
    height: '2rem',
    borderRadius: '9999px',
    backgroundImage: 'linear-gradient(to right, #a855f7, #ec4899)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: '700',
    flexShrink: 0,
  },
});
