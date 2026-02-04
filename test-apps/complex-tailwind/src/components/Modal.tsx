import * as stylex from '@stylexjs/stylex';
import { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark?: boolean;
}

export default function Modal({ isOpen, onClose, isDark = false }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      {...stylex.props(styles.overlay)}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div {...stylex.props(styles.backdrop)} />

      {/* Modal */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        {...stylex.props(styles.modal, isDark ? styles.modalDark : styles.modalLight)}
      >
        {/* Gradient header */}
        <div {...stylex.props(styles.header)}>
          {/* Decorative circles */}
          <div {...stylex.props(styles.decorCircle1)} />
          <div {...stylex.props(styles.decorCircle2)} />
          <div {...stylex.props(styles.decorCircle3)} />

          {/* Close button */}
          <button
            onClick={onClose}
            {...stylex.props(styles.closeButton)}
          >
            <svg {...stylex.props(styles.closeIcon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div {...stylex.props(styles.content)}>
          <h2 {...stylex.props(styles.title, isDark ? styles.titleDark : styles.titleLight)}>
            Welcome to the Modal
          </h2>
          <p {...stylex.props(styles.description, isDark ? styles.descriptionDark : styles.descriptionLight)}>
            This is a beautifully animated modal component with gradient header,
            backdrop blur, and smooth transitions.
          </p>

          {/* Feature list */}
          <div {...stylex.props(styles.featureList)}>
            {['Animated entrance', 'Escape key close', 'Click outside to close', 'Accessible focus trap'].map((feature, i) => (
              <div
                key={i}
                {...stylex.props(styles.featureItem, isDark ? styles.featureItemDark : styles.featureItemLight)}
              >
                <div {...stylex.props(styles.featureIcon)}>
                  <svg {...stylex.props(styles.checkIcon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span {...stylex.props(isDark ? styles.featureTextDark : styles.featureTextLight)}>{feature}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div {...stylex.props(styles.actions)}>
            <button
              onClick={onClose}
              {...stylex.props(styles.cancelButton, isDark ? styles.cancelButtonDark : styles.cancelButtonLight)}
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              {...stylex.props(styles.continueButton)}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = stylex.create({
  overlay: {
    position: 'fixed',
    inset: '0',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  backdrop: {
    position: 'absolute',
    inset: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(4px)',
    animationName: 'fadeIn',
    animationDuration: '300ms',
    animationTimingFunction: 'ease-out',
  },
  modal: {
    position: 'relative',
    width: '100%',
    maxWidth: '32rem',
    borderRadius: '1.5rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    animationName: 'bounceIn',
    animationDuration: '500ms',
    animationTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    overflow: 'hidden',
  },
  modalLight: {
    backgroundColor: '#fff',
  },
  modalDark: {
    backgroundColor: '#111827',
  },
  header: {
    height: '8rem',
    backgroundImage: 'linear-gradient(to bottom right, #a855f7, #ec4899, #ef4444)',
    position: 'relative',
    overflow: 'hidden',
  },
  decorCircle1: {
    position: 'absolute',
    top: '-2.5rem',
    right: '-2.5rem',
    width: '10rem',
    height: '10rem',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '9999px',
  },
  decorCircle2: {
    position: 'absolute',
    bottom: '-2.5rem',
    left: '-2.5rem',
    width: '8rem',
    height: '8rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '9999px',
  },
  decorCircle3: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '5rem',
    height: '5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '9999px',
    animationName: 'pulse-slow',
    animationDuration: '3s',
    animationIterationCount: 'infinite',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    width: '2rem',
    height: '2rem',
    borderRadius: '9999px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    transitionProperty: 'background-color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },
  closeIcon: {
    width: '1.25rem',
    height: '1.25rem',
  },
  content: {
    padding: '1.5rem',
  },
  title: {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
  titleLight: {
    color: '#1f2937',
  },
  titleDark: {
    color: '#fff',
  },
  description: {
    marginBottom: '1.5rem',
  },
  descriptionLight: {
    color: '#4b5563',
  },
  descriptionDark: {
    color: '#d1d5db',
  },
  featureList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginBottom: '1.5rem',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem',
    borderRadius: '0.75rem',
  },
  featureItemLight: {
    backgroundImage: 'linear-gradient(to right, #faf5ff, #fdf2f8)',
  },
  featureItemDark: {
    backgroundImage: 'linear-gradient(to right, rgba(126, 34, 206, 0.3), rgba(219, 39, 119, 0.3))',
  },
  featureIcon: {
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '9999px',
    backgroundImage: 'linear-gradient(to right, #a855f7, #ec4899)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  checkIcon: {
    width: '1rem',
    height: '1rem',
    color: '#fff',
  },
  featureTextLight: {
    color: '#374151',
  },
  featureTextDark: {
    color: '#e5e7eb',
  },
  actions: {
    display: 'flex',
    gap: '0.75rem',
  },
  cancelButton: {
    flex: '1',
    paddingInline: '1rem',
    paddingBlock: '0.75rem',
    borderRadius: '0.75rem',
    borderWidth: '2px',
    borderStyle: 'solid',
    fontWeight: '500',
    transitionProperty: 'background-color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },
  cancelButtonLight: {
    borderColor: '#e5e7eb',
    color: '#374151',
  },
  cancelButtonDark: {
    borderColor: '#374151',
    color: '#e5e7eb',
  },
  continueButton: {
    flex: '1',
    paddingInline: '1rem',
    paddingBlock: '0.75rem',
    borderRadius: '0.75rem',
    backgroundImage: 'linear-gradient(to right, #a855f7, #ec4899)',
    color: '#fff',
    fontWeight: '500',
    boxShadow: '0 10px 15px -3px rgba(168, 85, 247, 0.25)',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
  },
});
