import * as _stylex from "@stylexjs/stylex";
import { useState, useRef, useEffect, ReactNode } from 'react';
interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
}
interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
}
export default function Dropdown({
  trigger,
  items
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
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
  const openClass = isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none";
  return <div ref={dropdownRef} {..._stylex.props(_styles.$1)}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      <div className={["absolute right-0 mt-2 w-56 origin-top-right rounded-2xl bg-white dark:bg-gray-800 shadow-xl shadow-black/10 dark:shadow-black/30 ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transition-all duration-200 ease-out z-50", openClass].join(' ')}>
        <div {..._stylex.props(_styles.$2)}>
          {items.map((item, index) => <button key={index} onClick={() => {
          item.onClick();
          setIsOpen(false);
        }} {..._stylex.props(_stylex.defaultMarker(), _styles.$3)}>
              {item.icon && <span {..._stylex.props(_styles.$4)}>
                  {item.icon}
                </span>}
              <span {..._stylex.props(_styles.$5)}>{item.label}</span>
              <svg {..._stylex.props(_styles.$6)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>)}
        </div>

        {/* Decorative gradient line at bottom */}
        <div {..._stylex.props(_styles.$7)} />
      </div>
    </div>;
}
const _styles = _stylex.create({
  $1: {
    position: "relative"
  },
  $2: {
    padding: ".5rem"
  },
  $3: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: ".75rem",
    borderRadius: ".75rem",
    paddingInline: "1rem",
    paddingBlock: ".75rem",
    textAlign: "left",
    color: {
      default: "#374151",
      ":hover": "#9333ea",
      "@media (prefers-color-scheme: dark)": "#e5e7eb"
    },
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".2s",
    "--tw-gradient-position": {
      default: null,
      ":hover": "to right in oklab"
    },
    backgroundImage: {
      default: null,
      ":hover": "linear-gradient(var(--tw-gradient-stops))"
    },
    "--tw-gradient-from": {
      default: null,
      ":hover": "#faf5ff"
    },
    "--tw-gradient-stops": {
      default: null,
      ":hover": "var(--tw-gradient-position, #0000 0%, #fdf2f8 100%)"
    },
    "--tw-gradient-to": {
      default: null,
      ":hover": "#fdf2f8"
    }
  },
  $4: {
    color: {
      default: "#9ca3af",
      [_stylex.when.ancestor(":hover")]: "#a855f7"
    },
    transitionProperty: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  },
  $5: {
    fontWeight: "500"
  },
  $6: {
    marginLeft: "auto",
    height: "1rem",
    width: "1rem",
    "--tw-translate-x": {
      default: "calc(.5rem * -1)",
      [_stylex.when.ancestor(":hover")]: "0px"
    },
    translate: {
      default: "calc(.5rem * -1) 0",
      [_stylex.when.ancestor(":hover")]: "0px 0"
    },
    color: "#a855f7",
    opacity: {
      default: "0",
      [_stylex.when.ancestor(":hover")]: "1"
    },
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".2s"
  },
  $7: {
    height: ".25rem",
    backgroundImage: "linear-gradient(to right, #a855f7, #ec4899, #ef4444)"
  }
});