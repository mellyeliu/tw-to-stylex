import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';
import Dropdown from './Dropdown';

type Page = 'home' | 'gallery' | 'about';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  onOpenModal: () => void;
  isDark?: boolean;
}

export default function Navbar({ currentPage, onPageChange, onOpenModal, isDark = false }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
  ];

  const isActive = (id: Page) => currentPage === id;

  return (
    <nav {...stylex.props(styles.nav, isDark ? styles.navDark : styles.navLight)}>
      <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.navInner)}>
          {/* Logo */}
          <div {...stylex.props(styles.logoSection)}>
            <div {...stylex.props(styles.logoIcon)}>
              <span {...stylex.props(styles.logoLetter)}>T</span>
            </div>
            <span {...stylex.props(styles.logoText)}>
              TailwindDemo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div {...stylex.props(styles.desktopNav)}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                {...stylex.props(
                  styles.navButton,
                  isActive(item.id)
                    ? (isDark ? styles.navButtonActiveDark : styles.navButtonActiveLight)
                    : (isDark ? styles.navButtonInactiveDark : styles.navButtonInactiveLight)
                )}
              >
                {item.label}
                {isActive(item.id) && (
                  <span {...stylex.props(styles.activeIndicator)} />
                )}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div {...stylex.props(styles.actions)}>
            <Dropdown
              isDark={isDark}
              trigger={
                <button {...stylex.props(styles.iconButton, isDark ? styles.iconButtonDark : styles.iconButtonLight)}>
                  <svg {...stylex.props(styles.icon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              }
              items={[
                { label: 'Open Modal', onClick: onOpenModal },
                { label: 'Settings', onClick: () => console.log('Settings') },
                { label: 'Help', onClick: () => console.log('Help') },
              ]}
            />

            <button
              onClick={onOpenModal}
              {...stylex.props(styles.demoButton)}
            >
              <span>Demo</span>
              <svg {...stylex.props(styles.demoIcon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              {...stylex.props(styles.mobileMenuButton, isDark ? styles.iconButtonDark : styles.iconButtonLight)}
            >
              <svg {...stylex.props(styles.hamburgerIcon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          {...stylex.props(
            styles.mobileNav,
            isMobileMenuOpen ? styles.mobileNavOpen : styles.mobileNavClosed
          )}
        >
          <div {...stylex.props(styles.mobileNavContent)}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                {...stylex.props(
                  styles.mobileNavButton,
                  isActive(item.id)
                    ? (isDark ? styles.mobileNavButtonActiveDark : styles.mobileNavButtonActiveLight)
                    : (isDark ? styles.mobileNavButtonInactiveDark : styles.mobileNavButtonInactiveLight)
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

const styles = stylex.create({
  nav: {
    position: 'sticky',
    top: '0',
    zIndex: 40,
    backdropFilter: 'blur(12px)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
  },
  navLight: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  navDark: {
    backgroundColor: 'rgba(17, 24, 39, 0.3)',
    borderColor: 'rgba(55, 65, 81, 0.5)',
  },
  container: {
    maxWidth: '80rem',
    marginInline: 'auto',
    paddingInline: '1rem',
  },
  navInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '4rem',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoIcon: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '0.75rem',
    backgroundImage: 'linear-gradient(to bottom right, #a855f7, #ec4899, #ef4444)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 15px -3px rgba(168, 85, 247, 0.3)',
    animationName: 'pulse-slow',
    animationDuration: '3s',
    animationIterationCount: 'infinite',
  },
  logoLetter: {
    color: '#fff',
    fontWeight: '700',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
  logoText: {
    fontWeight: '700',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    backgroundImage: 'linear-gradient(to right, #9333ea, #ec4899)',
    backgroundClip: 'text',
    color: 'transparent',
    display: {
      default: 'none',
      '@media (min-width: 640px)': 'block',
    },
  },
  desktopNav: {
    display: {
      default: 'none',
      '@media (min-width: 768px)': 'flex',
    },
    alignItems: 'center',
    gap: '0.25rem',
  },
  navButton: {
    position: 'relative',
    paddingInline: '1rem',
    paddingBlock: '0.5rem',
    borderRadius: '0.5rem',
    fontWeight: '500',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
  },
  navButtonActiveLight: {
    color: '#9333ea',
  },
  navButtonActiveDark: {
    color: '#c084fc',
  },
  navButtonInactiveLight: {
    color: '#4b5563',
  },
  navButtonInactiveDark: {
    color: '#d1d5db',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50%',
    height: '0.125rem',
    backgroundImage: 'linear-gradient(to right, #a855f7, #ec4899)',
    borderRadius: '9999px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  iconButton: {
    padding: '0.5rem',
    borderRadius: '0.5rem',
    transitionProperty: 'background-color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },
  iconButtonLight: {
    color: '#4b5563',
  },
  iconButtonDark: {
    color: '#d1d5db',
  },
  icon: {
    width: '1.25rem',
    height: '1.25rem',
  },
  demoButton: {
    display: {
      default: 'none',
      '@media (min-width: 640px)': 'flex',
    },
    alignItems: 'center',
    gap: '0.5rem',
    paddingInline: '1rem',
    paddingBlock: '0.5rem',
    backgroundImage: 'linear-gradient(to right, #a855f7, #ec4899)',
    color: '#fff',
    borderRadius: '0.5rem',
    fontWeight: '500',
    boxShadow: '0 4px 6px -1px rgba(168, 85, 247, 0.25)',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
  },
  demoIcon: {
    width: '1rem',
    height: '1rem',
  },
  mobileMenuButton: {
    display: {
      default: 'block',
      '@media (min-width: 768px)': 'none',
    },
    padding: '0.5rem',
    borderRadius: '0.5rem',
    transitionProperty: 'background-color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },
  hamburgerIcon: {
    width: '1.5rem',
    height: '1.5rem',
  },
  mobileNav: {
    display: {
      default: 'block',
      '@media (min-width: 768px)': 'none',
    },
    overflow: 'hidden',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
  },
  mobileNavOpen: {
    maxHeight: '12rem',
    opacity: 1,
  },
  mobileNavClosed: {
    maxHeight: '0',
    opacity: 0,
  },
  mobileNavContent: {
    paddingBlock: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  mobileNavButton: {
    width: '100%',
    paddingInline: '1rem',
    paddingBlock: '0.75rem',
    borderRadius: '0.5rem',
    textAlign: 'left',
    fontWeight: '500',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
  },
  mobileNavButtonActiveLight: {
    backgroundImage: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
    color: '#9333ea',
  },
  mobileNavButtonActiveDark: {
    backgroundImage: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
    color: '#c084fc',
  },
  mobileNavButtonInactiveLight: {
    color: '#4b5563',
  },
  mobileNavButtonInactiveDark: {
    color: '#d1d5db',
  },
});
