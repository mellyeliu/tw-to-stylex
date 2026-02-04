import * as _stylex from "@stylexjs/stylex";
import { useState } from 'react';
import Dropdown from './Dropdown';
type Page = 'home' | 'gallery' | 'about';
interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  onOpenModal: () => void;
}
export default function Navbar({
  currentPage,
  onPageChange,
  onOpenModal
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems: {
    id: Page;
    label: string;
  }[] = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'gallery',
    label: 'Gallery'
  }, {
    id: 'about',
    label: 'About'
  }];
  const isActive = (id: Page) => currentPage === id;
  return <nav {..._stylex.props(_styles.$1)}>
      <div {..._stylex.props(_styles.$2)}>
        <div {..._stylex.props(_styles.$3)}>
          {/* Logo */}
          <div {..._stylex.props(_styles.$4)}>
            <div {..._stylex.props(_styles.$5)}>
              <span {..._stylex.props(_styles.$6)}>T</span>
            </div>
            <span {..._stylex.props(_styles.$7)}>
              TailwindDemo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div {..._stylex.props(_styles.$8)}>
            {navItems.map(item => <button key={item.id} onClick={() => onPageChange(item.id)} className={["relative px-4 py-2 rounded-lg font-medium transition-all duration-300", isActive(item.id) ? "text-purple-600 dark:text-purple-400" : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"].join(' ')}>
                {item.label}
                {isActive(item.id) && <span {..._stylex.props(_styles.$9)} />}
              </button>)}
          </div>

          {/* Actions */}
          <div {..._stylex.props(_styles.$10)}>
            <Dropdown trigger={<button {..._stylex.props(_styles.$11)}>
                  <svg {..._stylex.props(_styles.$12)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>} items={[{
            label: 'Open Modal',
            onClick: onOpenModal
          }, {
            label: 'Settings',
            onClick: () => console.log('Settings')
          }, {
            label: 'Help',
            onClick: () => console.log('Help')
          }]} />

            <button onClick={onOpenModal} {..._stylex.props(_styles.$13)}>
              <span>Demo</span>
              <svg {..._stylex.props(_styles.$14)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} {..._stylex.props(_styles.$15)}>
              <svg {..._stylex.props(_styles.$16)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={["md:hidden overflow-hidden transition-all duration-300 ease-in-out", isMobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"].join(' ')}>
          <div {..._stylex.props(_styles.$17)}>
            {navItems.map(item => <button key={item.id} onClick={() => {
            onPageChange(item.id);
            setIsMobileMenuOpen(false);
          }} className={["w-full px-4 py-3 rounded-lg text-left font-medium transition-all duration-300", isActive(item.id) ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400" : "text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50"].join(' ')}>
                {item.label}
              </button>)}
          </div>
        </div>
      </div>
    </nav>;
}
const _styles = _stylex.create({
  $1: {
    position: "sticky",
    top: "0",
    zIndex: "40",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderColor: {
      default: "oklab(100% 0 5.96046e-8 / .2)",
      "@media (prefers-color-scheme: dark)": "oklab(37.2927% -.00545776 -.0301301 / .5)"
    }
  },
  $2: {
    width: "100%",
    maxWidth: {
      default: null,
      "@media (width >= 40rem)": "40rem",
      "@media (width >= 48rem)": "48rem",
      "@media (width >= 64rem)": "64rem",
      "@media (width >= 80rem)": "80rem",
      "@media (width >= 96rem)": "96rem"
    },
    marginInline: "auto",
    paddingInline: "1rem"
  },
  $3: {
    display: "flex",
    height: "4rem",
    alignItems: "center",
    justifyContent: "space-between"
  },
  $4: {
    display: "flex",
    alignItems: "center",
    gap: ".5rem"
  },
  $5: {
    display: "flex",
    height: "2.5rem",
    width: "2.5rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ".75rem",
    backgroundImage: "linear-gradient(to bottom right, #a855f7, #ec4899, #ef4444)",
    boxShadow: "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a"
  },
  $6: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    fontWeight: "700",
    color: "#fff"
  },
  $7: {
    display: {
      default: "none",
      "@media (width >= 40rem)": "block"
    },
    backgroundImage: "linear-gradient(to right, #9333ea, #db2777)",
    backgroundClip: "text",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    fontWeight: "700",
    color: "#0000"
  },
  $8: {
    display: {
      default: "none",
      "@media (width >= 48rem)": "flex"
    },
    alignItems: "center",
    gap: ".25rem"
  },
  $9: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    height: ".125rem",
    width: "50%",
    "--tw-translate-x": "calc(calc(1/2 * 100%) * -1)",
    translate: "calc(calc(1/2 * 100%) * -1) 0",
    borderRadius: "3.40282e38px",
    backgroundImage: "linear-gradient(to right, #a855f7, #ec4899)"
  },
  $10: {
    display: "flex",
    alignItems: "center",
    gap: ".75rem"
  },
  $11: {
    borderRadius: ".5rem",
    padding: ".5rem",
    transitionProperty: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    backgroundColor: {
      default: null,
      ":hover": "oklab(100% 0 5.96046e-8 / .5)"
    }
  },
  $12: {
    height: "1.25rem",
    width: "1.25rem",
    color: {
      default: "#4b5563",
      "@media (prefers-color-scheme: dark)": "#d1d5db"
    }
  },
  $13: {
    display: {
      default: "none",
      "@media (width >= 40rem)": "flex"
    },
    alignItems: "center",
    gap: ".5rem",
    borderRadius: ".5rem",
    backgroundImage: "linear-gradient(to right, #a855f7, #ec4899)",
    paddingInline: "1rem",
    paddingBlock: ".5rem",
    fontWeight: "500",
    color: "#fff",
    "--tw-shadow": {
      default: "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
      ":hover": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a"
    },
    boxShadow: {
      default: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a)",
      ":hover": "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)"
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
  },
  $14: {
    height: "1rem",
    width: "1rem"
  },
  $15: {
    borderRadius: ".5rem",
    padding: ".5rem",
    transitionProperty: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    backgroundColor: {
      default: null,
      ":hover": "oklab(100% 0 5.96046e-8 / .5)"
    },
    display: {
      default: null,
      "@media (width >= 48rem)": "none"
    }
  },
  $16: {
    height: "1.5rem",
    width: "1.5rem",
    color: {
      default: "#4b5563",
      "@media (prefers-color-scheme: dark)": "#d1d5db"
    }
  },
  $17: {
    paddingBlock: "1rem"
  }
});