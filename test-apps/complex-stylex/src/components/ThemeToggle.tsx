import * as _stylex from "@stylexjs/stylex";
interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}
export default function ThemeToggle({
  isDark,
  onToggle
}: ThemeToggleProps) {
  return <button onClick={onToggle} {..._stylex.props(_stylex.defaultMarker(), _styles.$1)} aria-label="Toggle theme">
      {/* Track background effects */}
      <div {..._stylex.props(_styles.$2)}>
        {/* Stars (visible in dark mode) */}
        <div className={["absolute inset-0 transition-opacity duration-500", isDark ? "opacity-100" : "opacity-0"].join(' ')}>
          <div {..._stylex.props(_styles.$3)} />
          <div {..._stylex.props(_styles.$4)} />
          <div {..._stylex.props(_styles.$5)} />
        </div>
        
        {/* Clouds (visible in light mode) */}
        <div className={["absolute inset-0 transition-opacity duration-500", isDark ? "opacity-0" : "opacity-100"].join(' ')}>
          <div {..._stylex.props(_styles.$6)} />
          <div {..._stylex.props(_styles.$7)} />
        </div>
      </div>

      {/* Toggle knob */}
      <div className={["relative w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center", isDark ? "translate-x-8" : "translate-x-0"].join(' ')}>
        {/* Sun icon */}
        <svg className={["w-4 h-4 text-yellow-500 absolute transition-all duration-300", isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"].join(' ')} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
        
        {/* Moon icon */}
        <svg className={["w-4 h-4 text-indigo-600 absolute transition-all duration-300", isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"].join(' ')} fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      </div>
    </button>;
}
const _styles = _stylex.create({
  $1: {
    position: "relative",
    height: "2rem",
    width: "4rem",
    borderRadius: "3.40282e38px",
    "--tw-gradient-position": "to right in oklab",
    backgroundImage: "linear-gradient(var(--tw-gradient-stops))",
    "--tw-gradient-from": {
      default: "#60a5fa",
      "@media (prefers-color-scheme: dark)": "#4f46e5"
    },
    "--tw-gradient-stops": {
      default: "var(--tw-gradient-position, #0000 0%, #a855f7 100%)",
      "@media (prefers-color-scheme: dark)": "var(--tw-gradient-position, #0000 0%, #6b21a8 100%)"
    },
    "--tw-gradient-to": {
      default: "#a855f7",
      "@media (prefers-color-scheme: dark)": "#6b21a8"
    },
    padding: ".25rem",
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
    transitionDuration: ".3s"
  },
  $2: {
    position: "absolute",
    inset: "0",
    overflow: "hidden",
    borderRadius: "3.40282e38px"
  },
  $3: {
    position: "absolute",
    top: "20%",
    left: "10%",
    height: ".25rem",
    width: ".25rem",
    animation: "2s cubic-bezier(.4, 0, .6, 1) infinite pulse",
    borderRadius: "3.40282e38px",
    backgroundColor: "#fff"
  },
  $4: {
    position: "absolute",
    top: "30%",
    left: "25%",
    height: ".25rem",
    width: ".25rem",
    animation: "2s cubic-bezier(.4, 0, .6, 1) infinite pulse",
    borderRadius: "3.40282e38px",
    backgroundColor: "#fff",
    animationDelay: ".2s"
  },
  $5: {
    position: "absolute",
    top: "40%",
    left: "40%",
    height: ".25rem",
    width: ".25rem",
    animation: "2s cubic-bezier(.4, 0, .6, 1) infinite pulse",
    borderRadius: "3.40282e38px",
    backgroundColor: "#fff",
    animationDelay: ".4s"
  },
  $6: {
    position: "absolute",
    top: ".25rem",
    left: ".5rem",
    height: ".5rem",
    width: ".75rem",
    borderRadius: "3.40282e38px",
    backgroundColor: "oklab(100% 0 5.96046e-8 / .5)"
  },
  $7: {
    position: "absolute",
    bottom: ".5rem",
    left: "1rem",
    height: ".25rem",
    width: ".5rem",
    borderRadius: "3.40282e38px",
    backgroundColor: "oklab(100% 0 5.96046e-8 / .4)"
  }
});