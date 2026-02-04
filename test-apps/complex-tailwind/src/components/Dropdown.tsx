import * as stylex from '@stylexjs/stylex';
import { useState, useRef, useEffect, ReactNode } from 'react';

interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
}

interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  isDark?: boolean;
}

export default function Dropdown({ trigger, items, isDark = false }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} {...stylex.props(styles.container)}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      <div
        {...stylex.props(
          styles.dropdown,
          isDark ? styles.dropdownDark : styles.dropdownLight,
          isOpen ? styles.dropdownOpen : styles.dropdownClosed
        )}
      >
        <div {...stylex.props(styles.dropdownContent)}>
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              {...stylex.props(
                styles.dropdownItem,
                isDark ? styles.dropdownItemDark : styles.dropdownItemLight,
                hoveredIndex === index && (isDark ? styles.dropdownItemHoverDark : styles.dropdownItemHoverLight)
              )}
            >
              {item.icon && (
                <span {...stylex.props(styles.itemIcon, hoveredIndex === index && styles.itemIconHover)}>
                  {item.icon}
                </span>
              )}
              <span {...stylex.props(styles.itemLabel)}>{item.label}</span>
              <svg
                {...stylex.props(styles.arrowIcon, hoveredIndex === index ? styles.arrowIconVisible : styles.arrowIconHidden)}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        {/* Decorative gradient line at bottom */}
        <div {...stylex.props(styles.gradientLine)} />
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    right: '0',
    marginTop: '0.5rem',
    width: '14rem',
    transformOrigin: 'top right',
    borderRadius: '1rem',
    overflow: 'hidden',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    transitionDuration: '200ms',
    zIndex: 50,
  },
  dropdownLight: {
    backgroundColor: '#fff',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  dropdownDark: {
    backgroundColor: '#1f2937',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  dropdownOpen: {
    opacity: 1,
    transform: 'scale(1) translateY(0)',
    pointerEvents: 'auto',
  },
  dropdownClosed: {
    opacity: 0,
    transform: 'scale(0.95) translateY(-0.5rem)',
    pointerEvents: 'none',
  },
  dropdownContent: {
    padding: '0.5rem',
  },
  dropdownItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    paddingInline: '1rem',
    paddingBlock: '0.75rem',
    borderRadius: '0.75rem',
    textAlign: 'left',
    fontWeight: '500',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },
  dropdownItemLight: {
    color: '#374151',
  },
  dropdownItemDark: {
    color: '#e5e7eb',
  },
  dropdownItemHoverLight: {
    backgroundImage: 'linear-gradient(to right, #faf5ff, #fdf2f8)',
    color: '#9333ea',
  },
  dropdownItemHoverDark: {
    backgroundImage: 'linear-gradient(to right, rgba(126, 34, 206, 0.3), rgba(219, 39, 119, 0.3))',
    color: '#c084fc',
  },
  itemIcon: {
    color: '#9ca3af',
    transitionProperty: 'color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },
  itemIconHover: {
    color: '#a855f7',
  },
  itemLabel: {
    fontWeight: '500',
  },
  arrowIcon: {
    width: '1rem',
    height: '1rem',
    marginLeft: 'auto',
    color: '#a855f7',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },
  arrowIconVisible: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  arrowIconHidden: {
    opacity: 0,
    transform: 'translateX(-0.5rem)',
  },
  gradientLine: {
    height: '0.25rem',
    backgroundImage: 'linear-gradient(to right, #a855f7, #ec4899, #ef4444)',
  },
});
