import * as _stylex from "@stylexjs/stylex";
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
  return <div {..._stylex.props(isDark ? _styles.$1 : null)}>
      <div {..._stylex.props(_styles.$2)}>
        {/* Animated background elements */}
        <div {..._stylex.props(_styles.$3)}>
          <div {..._stylex.props(_styles.$4)} />
          <div {..._stylex.props(_styles.$5)} />
          <div {..._stylex.props(_styles.$6)} />
        </div>

        {/* Theme toggle fixed position */}
        <div {..._stylex.props(_styles.$7)}>
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        </div>

        {/* Main content */}
        <div {..._stylex.props(_styles.$8)}>
          <Navbar currentPage={currentPage} onPageChange={setCurrentPage} onOpenModal={() => setIsModalOpen(true)} />
          
          <main {..._stylex.props(_styles.$9)}>
            {currentPage === 'home' && <div {..._stylex.props(_styles.$10)}>
                <section {..._stylex.props(_styles.$11)}>
                  <h1 {..._stylex.props(_styles.$12)}>
                    Complex Tailwind
                  </h1>
                  <p {..._stylex.props(_styles.$13)}>
                    A showcase of advanced Tailwind CSS features including animations, 
                    gradients, dark mode, and interactive components.
                  </p>
                  <button onClick={() => setIsModalOpen(true)} {..._stylex.props(_styles.$14)}>
                    Open Modal Demo
                  </button>
                </section>
                <CardGrid />
              </div>}

            {currentPage === 'gallery' && <div {..._stylex.props(_styles.$10)}>
                <h2 {..._stylex.props(_styles.$15)}>
                  Gallery Page
                </h2>
                <div {..._stylex.props(_styles.$16)}>
                  {[...Array(12)].map((_, i) => <div key={i} {..._stylex.props(_stylex.defaultMarker(), _styles.$17)}>
                      <div {..._stylex.props(_styles.$18)}>
                        <div {..._stylex.props(_styles.$19)}>
                          <span {..._stylex.props(_styles.$20)}>
                            {['🎨', '🚀', '💎', '🌟', '🎭', '🎪', '🎯', '🔮', '🌈', '⚡', '🔥', '💫'][i]}
                          </span>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>}

            {currentPage === 'about' && <div {..._stylex.props(_styles.$21)}>
                <div {..._stylex.props(_styles.$22)}>
                  <h2 {..._stylex.props(_styles.$23)}>
                    About This Demo
                  </h2>
                  <div {..._stylex.props(_styles.$24)}>
                    <p>
                      This application demonstrates advanced Tailwind CSS features:
                    </p>
                    <ul {..._stylex.props(_styles.$25)}>
                      {['Custom animations and keyframes', 'Dark/light theme with class-based toggling', 'Complex gradients and glass morphism', 'Group and peer state modifiers', 'Arbitrary values and custom utilities', 'Responsive design patterns', 'Interactive hover and focus states'].map((item, i) => <li key={i} {..._stylex.props(_styles.$26)}>
                          <span {..._stylex.props(_styles.$27)}>
                            {i + 1}
                          </span>
                          {item}
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>}
          </main>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>;
}
export default App;
const _styles = _stylex.create({
  $1: {},
  $2: {
    minHeight: "100vh",
    "--tw-gradient-position": "to bottom right in oklab",
    backgroundImage: "linear-gradient(var(--tw-gradient-stops))",
    "--tw-gradient-from": {
      default: "#f8fafc",
      "@media (prefers-color-scheme: dark)": "#111827"
    },
    "--tw-gradient-stops": {
      default: "var(--tw-gradient-position, #0000 0%, #faf5ff 100%)",
      "@media (prefers-color-scheme: dark)": "var(--tw-gradient-position, #0000 0%, #111827 100%)"
    },
    "--tw-gradient-via": {
      default: "#eff6ff",
      "@media (prefers-color-scheme: dark)": "#581c87"
    },
    "--tw-gradient-via-stops": {
      default: "var(--tw-gradient-position), #0000 0%, #eff6ff 50%, #0000 100%",
      "@media (prefers-color-scheme: dark)": "var(--tw-gradient-position), #0000 0%, #581c87 50%, #0000 100%"
    },
    "--tw-gradient-to": {
      default: "#faf5ff",
      "@media (prefers-color-scheme: dark)": "#111827"
    },
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".5s"
  },
  $3: {
    pointerEvents: "none",
    position: "fixed",
    inset: "0",
    overflow: "hidden"
  },
  $4: {
    position: "absolute",
    top: "-10rem",
    right: "-10rem",
    height: "20rem",
    width: "20rem",
    borderRadius: "3.40282e38px",
    backgroundColor: {
      default: "#d8b4fe",
      "@media (prefers-color-scheme: dark)": "#7e22ce"
    },
    opacity: ".7",
    mixBlendMode: {
      default: "multiply",
      "@media (prefers-color-scheme: dark)": "overlay"
    },
    "--tw-blur": "blur(24px)",
    filter: ""
  },
  $5: {
    position: "absolute",
    bottom: "-10rem",
    left: "-10rem",
    height: "20rem",
    width: "20rem",
    borderRadius: "3.40282e38px",
    backgroundColor: {
      default: "#fde047",
      "@media (prefers-color-scheme: dark)": "#ca8a04"
    },
    opacity: ".7",
    mixBlendMode: {
      default: "multiply",
      "@media (prefers-color-scheme: dark)": "overlay"
    },
    "--tw-blur": "blur(24px)",
    filter: "",
    animationDelay: "1s"
  },
  $6: {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "20rem",
    width: "20rem",
    borderRadius: "3.40282e38px",
    backgroundColor: {
      default: "#f9a8d4",
      "@media (prefers-color-scheme: dark)": "#be185d"
    },
    opacity: ".7",
    mixBlendMode: {
      default: "multiply",
      "@media (prefers-color-scheme: dark)": "overlay"
    },
    "--tw-blur": "blur(24px)",
    filter: "",
    animationDelay: "2s"
  },
  $7: {
    position: "fixed",
    top: "1rem",
    right: "1rem",
    zIndex: "50"
  },
  $8: {
    position: "relative",
    zIndex: "10"
  },
  $9: {
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
    paddingInline: "1rem",
    paddingBlock: "2rem"
  },
  $10: {},
  $11: {
    marginBottom: "3rem",
    textAlign: "center"
  },
  $12: {
    marginBottom: "1rem",
    fontSize: {
      default: "3rem",
      "@media (width >= 48rem)": "4.5rem"
    },
    lineHeight: {
      default: "1",
      "@media (width >= 48rem)": "1"
    },
    fontWeight: "700"
  },
  $13: {
    marginInline: "auto",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    color: {
      default: "#4b5563",
      "@media (prefers-color-scheme: dark)": "#d1d5db"
    }
  },
  $14: {
    marginTop: "2rem",
    borderRadius: "3.40282e38px",
    backgroundImage: "linear-gradient(to right, #9333ea, #db2777)",
    paddingInline: "2rem",
    paddingBlock: "1rem",
    fontWeight: "600",
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
      default: "#a855f780",
      "@supports (color: color-mix(in lab, red, red))": {
        default: "color-mix(in oklab, oklab(62.6846% .129701 -.193012 / .5) 100%, transparent)",
        ":hover": "color-mix(in oklab, oklab(62.6846% .129701 -.193012 / .5) 100%, transparent)"
      },
      ":hover": "#a855f780"
    },
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".3s",
    "--tw-scale-x": {
      default: null,
      ":hover": "105%",
      ":active": "95%"
    },
    "--tw-scale-y": {
      default: null,
      ":hover": "105%",
      ":active": "95%"
    },
    "--tw-scale-z": {
      default: null,
      ":hover": "105%",
      ":active": "95%"
    },
    scale: {
      default: null,
      ":hover": "105% 105%",
      ":active": "95% 95%"
    }
  },
  $15: {
    marginBottom: "2rem",
    textAlign: "center",
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    fontWeight: "700",
    color: {
      default: "#1f2937",
      "@media (prefers-color-scheme: dark)": "#fff"
    }
  },
  $16: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(2, minmax(0, 1fr))",
      "@media (width >= 48rem)": "repeat(4, minmax(0, 1fr))"
    },
    gap: "1rem"
  },
  $17: {
    aspectRatio: "1",
    cursor: "pointer",
    borderRadius: "1rem",
    backgroundImage: "linear-gradient(to bottom right, #6366f1, #a855f7, #ec4899)",
    padding: "2px"
  },
  $18: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "1rem",
    backgroundColor: {
      default: "#fff",
      "@media (prefers-color-scheme: dark)": "#111827"
    }
  },
  $19: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    "--tw-gradient-position": "to bottom right in oklab",
    backgroundImage: "linear-gradient(var(--tw-gradient-stops))",
    "--tw-gradient-from": {
      default: "#f3f4f6",
      "@media (prefers-color-scheme: dark)": "#1f2937"
    },
    "--tw-gradient-stops": {
      default: "var(--tw-gradient-position, #0000 0%, #e5e7eb 100%)",
      "@media (prefers-color-scheme: dark)": "var(--tw-gradient-position, #0000 0%, #374151 100%)"
    },
    "--tw-gradient-to": {
      default: "#e5e7eb",
      "@media (prefers-color-scheme: dark)": "#374151"
    },
    transitionProperty: "transform, translate, scale, rotate",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".5s",
    "--tw-scale-x": {
      default: null,
      [_stylex.when.ancestor(":hover")]: "110%"
    },
    "--tw-scale-y": {
      default: null,
      [_stylex.when.ancestor(":hover")]: "110%"
    },
    "--tw-scale-z": {
      default: null,
      [_stylex.when.ancestor(":hover")]: "110%"
    },
    scale: {
      default: null,
      [_stylex.when.ancestor(":hover")]: "110% 110%"
    }
  },
  $20: {
    fontSize: "2.25rem",
    lineHeight: "2.5rem"
  },
  $21: {
    marginInline: "auto"
  },
  $22: {
    borderRadius: "1.5rem",
    padding: "2rem",
    boxShadow: "0 25px 50px -12px #00000040"
  },
  $23: {
    marginBottom: "1.5rem",
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    fontWeight: "700",
    color: {
      default: "#1f2937",
      "@media (prefers-color-scheme: dark)": "#fff"
    }
  },
  $24: {
    color: {
      default: "#4b5563",
      "@media (prefers-color-scheme: dark)": "#d1d5db"
    }
  },
  $25: {
    listStyleType: "none"
  },
  $26: {
    display: "flex",
    alignItems: "center",
    gap: ".75rem",
    borderRadius: ".5rem",
    backgroundColor: {
      default: "oklab(100% 0 5.96046e-8 / .5)",
      "@media (prefers-color-scheme: dark)": "oklab(27.8078% -.00673403 -.0288193 / .5)"
    },
    padding: ".75rem",
    transitionProperty: "transform, translate, scale, rotate",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-translate-x": {
      default: null,
      ":hover": ".5rem"
    },
    translate: {
      default: null,
      ":hover": ".5rem 0"
    }
  },
  $27: {
    display: "flex",
    height: "2rem",
    width: "2rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3.40282e38px",
    backgroundImage: "linear-gradient(to right, #a855f7, #ec4899)",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: "700",
    color: "#fff"
  }
});