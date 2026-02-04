import * as _stylex from "@stylexjs/stylex";
import { useEffect, useRef } from 'react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function Modal({
  isOpen,
  onClose
}: ModalProps) {
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
  return <div {..._stylex.props(_styles.$1)} onClick={onClose}>
      {/* Backdrop */}
      <div {..._stylex.props(_styles.$2)} />
      
      {/* Modal */}
      <div ref={modalRef} onClick={e => e.stopPropagation()} {..._stylex.props(_styles.$3)}>
        {/* Gradient header */}
        <div {..._stylex.props(_styles.$4)}>
          {/* Decorative circles */}
          <div {..._stylex.props(_styles.$5)} />
          <div {..._stylex.props(_styles.$6)} />
          <div {..._stylex.props(_styles.$7)} />
          
          {/* Close button */}
          <button onClick={onClose} {..._stylex.props(_styles.$8)}>
            <svg {..._stylex.props(_styles.$9)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div {..._stylex.props(_styles.$10)}>
          <h2 {..._stylex.props(_styles.$11)}>
            Welcome to the Modal
          </h2>
          <p {..._stylex.props(_styles.$12)}>
            This is a beautifully animated modal component with gradient header, 
            backdrop blur, and smooth transitions.
          </p>

          {/* Feature list */}
          <div {..._stylex.props(_styles.$13)}>
            {['Animated entrance', 'Escape key close', 'Click outside to close', 'Accessible focus trap'].map((feature, i) => <div key={i} {..._stylex.props(_styles.$14)}>
                <div {..._stylex.props(_styles.$15)}>
                  <svg {..._stylex.props(_styles.$16)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span {..._stylex.props(_styles.$17)}>{feature}</span>
              </div>)}
          </div>

          {/* Actions */}
          <div {..._stylex.props(_styles.$18)}>
            <button onClick={onClose} {..._stylex.props(_styles.$19)}>
              Cancel
            </button>
            <button onClick={onClose} {..._stylex.props(_styles.$20)}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>;
}
const _styles = _stylex.create({
  $1: {
    position: "fixed",
    inset: "0",
    zIndex: "50",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem"
  },
  $2: {
    position: "absolute",
    inset: "0",
    backgroundColor: "oklab(0% none none / .6)",
    "--tw-backdrop-blur": "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    backdropFilter: "blur(4px)"
  },
  $3: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    borderRadius: "1.5rem",
    backgroundColor: {
      default: "#fff",
      "@media (prefers-color-scheme: dark)": "#111827"
    },
    boxShadow: "0 25px 50px -12px #00000040"
  },
  $4: {
    position: "relative",
    height: "8rem",
    overflow: "hidden",
    backgroundImage: "linear-gradient(to bottom right, #a855f7, #ec4899, #ef4444)"
  },
  $5: {
    position: "absolute",
    top: "-2.5rem",
    right: "-2.5rem",
    height: "10rem",
    width: "10rem",
    borderRadius: "3.40282e38px",
    backgroundColor: "oklab(100% 0 5.96046e-8 / .2)"
  },
  $6: {
    position: "absolute",
    bottom: "-2.5rem",
    left: "-2.5rem",
    height: "8rem",
    width: "8rem",
    borderRadius: "3.40282e38px",
    backgroundColor: "oklab(100% 0 5.96046e-8 / .1)"
  },
  $7: {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "5rem",
    width: "5rem",
    "--tw-translate-x": "calc(calc(1/2 * 100%) * -1)",
    translate: "0 calc(calc(1/2 * 100%) * -1)",
    "--tw-translate-y": "calc(calc(1/2 * 100%) * -1)",
    borderRadius: "3.40282e38px",
    backgroundColor: "oklab(100% 0 5.96046e-8 / .3)"
  },
  $8: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    display: "flex",
    height: "2rem",
    width: "2rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3.40282e38px",
    backgroundColor: {
      default: "oklab(100% 0 5.96046e-8 / .2)",
      ":hover": "oklab(100% 0 5.96046e-8 / .3)"
    },
    color: "#fff",
    transitionProperty: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  },
  $9: {
    height: "1.25rem",
    width: "1.25rem"
  },
  $10: {
    padding: "1.5rem"
  },
  $11: {
    marginBottom: ".5rem",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: "700",
    color: {
      default: "#1f2937",
      "@media (prefers-color-scheme: dark)": "#fff"
    }
  },
  $12: {
    marginBottom: "1.5rem",
    color: {
      default: "#4b5563",
      "@media (prefers-color-scheme: dark)": "#d1d5db"
    }
  },
  $13: {
    marginBottom: "1.5rem"
  },
  $14: {
    display: "flex",
    alignItems: "center",
    gap: ".75rem",
    borderRadius: ".75rem",
    "--tw-gradient-position": "to right in oklab",
    backgroundImage: "linear-gradient(var(--tw-gradient-stops))",
    "--tw-gradient-from": {
      default: "#faf5ff",
      "@media (prefers-color-scheme: dark)": "oklab(38.0744% .0952293 -.136065 / .3)"
    },
    "--tw-gradient-stops": {
      default: "var(--tw-gradient-position, #0000 0%, #fdf2f8 100%)",
      "@media (prefers-color-scheme: dark)": "var(--tw-gradient-position, #0000 0%, oklab(40.7822% .144046 .00611785 / .3) 100%)"
    },
    "--tw-gradient-to": {
      default: "#fdf2f8",
      "@media (prefers-color-scheme: dark)": "oklab(40.7822% .144046 .00611785 / .3)"
    },
    padding: ".75rem"
  },
  $15: {
    display: "flex",
    height: "1.5rem",
    width: "1.5rem",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3.40282e38px",
    backgroundImage: "linear-gradient(to right, #a855f7, #ec4899)"
  },
  $16: {
    height: "1rem",
    width: "1rem",
    color: "#fff"
  },
  $17: {
    color: {
      default: "#374151",
      "@media (prefers-color-scheme: dark)": "#e5e7eb"
    }
  },
  $18: {
    display: "flex",
    gap: ".75rem"
  },
  $19: {
    flex: "1",
    borderRadius: ".75rem",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: {
      default: "#e5e7eb",
      "@media (prefers-color-scheme: dark)": "#374151"
    },
    paddingInline: "1rem",
    paddingBlock: ".75rem",
    fontWeight: "500",
    color: {
      default: "#374151",
      "@media (prefers-color-scheme: dark)": "#e5e7eb"
    },
    transitionProperty: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    backgroundColor: {
      default: null,
      ":hover": "#f9fafb"
    }
  },
  $20: {
    flex: "1",
    borderRadius: ".75rem",
    backgroundImage: "linear-gradient(to right, #a855f7, #ec4899)",
    paddingInline: "1rem",
    paddingBlock: ".75rem",
    fontWeight: "500",
    color: "#fff",
    "--tw-shadow": {
      default: "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
      ":hover": "0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a"
    },
    boxShadow: {
      default: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)",
      ":hover": "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 20px 25px -5px var(--tw-shadow-color, #0000001a), 0 8px 10px -6px var(--tw-shadow-color, #0000001a)"
    },
    "--tw-shadow-color": {
      default: "#a855f740",
      "@supports (color: color-mix(in lab, red, red))": {
        default: "color-mix(in oklab, oklab(62.6846% .129701 -.193012 / .25) 100%, transparent)",
        ":hover": "color-mix(in oklab, oklab(62.6846% .129701 -.193012 / .4) 100%, transparent)"
      },
      ":hover": "#a855f766"
    },
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".3s",
    "--tw-translate-y": {
      default: null,
      ":hover": "calc(.125rem * -1)",
      ":active": "0px"
    },
    translate: {
      default: null,
      ":hover": "0 calc(.125rem * -1)",
      ":active": "0 0px"
    }
  }
});