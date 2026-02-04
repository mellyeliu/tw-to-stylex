import * as _stylex from "@stylexjs/stylex";
import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import type { StyleTheme } from '../App';
interface StylePresetsProps {
  selectedStyle: StyleTheme;
  onStyleChange: (style: StyleTheme) => void;
}
export function StylePresets({
  selectedStyle,
  onStyleChange
}: StylePresetsProps) {
  const styles: {
    id: StyleTheme;
    name: string;
    gradient: string;
    emoji: string;
  }[] = [{
    id: 'neon',
    name: 'Neon',
    gradient: 'from-purple-500 via-pink-500 to-blue-500',
    emoji: '✨'
  }, {
    id: 'retro',
    name: 'Retro',
    gradient: 'from-orange-500 via-red-500 to-yellow-500',
    emoji: '🕹️'
  }, {
    id: 'pastel',
    name: 'Pastel',
    gradient: 'from-pink-300 via-purple-300 to-blue-300',
    emoji: '🌸'
  }, {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    gradient: 'from-cyan-500 via-fuchsia-500 to-yellow-500',
    emoji: '🤖'
  }, {
    id: 'vaporwave',
    name: 'Vaporwave',
    gradient: 'from-pink-400 via-purple-400 to-cyan-400',
    emoji: '🌴'
  }];
  return <div {..._stylex.props(_styles.$1)}>
      <h3 {..._stylex.props(_styles.$2)}>
        <Sparkles {..._stylex.props(_styles.$3)} />
        Style Themes
      </h3>

      <div {..._stylex.props(_styles.$4)}>
        {styles.map(style => <motion.button key={style.id} onClick={() => onStyleChange(style.id)} {..._stylex.props(_styles.$5, selectedStyle === style.id ? _styles.$6 : _styles.$7)} whileHover={{
        scale: 1.02,
        x: 5
      }} whileTap={{
        scale: 0.98
      }}>
            <div {..._stylex.props(_styles.$8)}>
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${style.gradient} shadow-lg flex items-center justify-center text-2xl`}>
                {style.emoji}
              </div>
              <div {..._stylex.props(_styles.$10)}>
                <div {..._stylex.props(_styles.$11)}>{style.name}</div>
                <div {..._stylex.props(_styles.$12)}>
                  {selectedStyle === style.id ? 'Active' : 'Click to activate'}
                </div>
              </div>
              {selectedStyle === style.id && <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} {..._stylex.props(_styles.$13)} />}
            </div>
          </motion.button>)}
      </div>
    </div>;
}
const _styles = _stylex.create({
  $1: {
    borderRadius: "1rem",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "oklab(100% 0 5.96046e-8 / .2)",
    backgroundColor: "oklab(0% none none / .3)",
    padding: "1.5rem",
    "--tw-shadow": "0 25px 50px -12px #00000040",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 25px 50px -12px var(--tw-shadow-color, #00000040)",
    "--tw-backdrop-blur": "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    backdropFilter: "blur(4px)"
  },
  $2: {
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    fontWeight: "700",
    color: "#fff"
  },
  $3: {
    height: "1.25rem",
    width: "1.25rem"
  },
  $4: {},
  $5: {
    width: "100%",
    borderRadius: ".75rem",
    borderStyle: "solid",
    borderWidth: "2px",
    padding: "1rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  },
  $6: {
    borderColor: "oklab(100% 0 5.96046e-8 / .5)",
    "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)",
    "--tw-shadow-color": {
      default: "#ffffff40",
      "@supports (color: color-mix(in lab, red, red))": "color-mix(in oklab, oklab(100% 0 5.96046e-8 / .25) 100%, transparent)"
    }
  },
  $7: {
    borderColor: {
      default: "oklab(100% 0 5.96046e-8 / .1)",
      ":hover": "oklab(100% 0 5.96046e-8 / .3)"
    }
  },
  $8: {
    display: "flex",
    alignItems: "center",
    gap: ".75rem"
  },
  $9: {
    display: "flex",
    height: "3rem",
    width: "3rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ".5rem",
    "--tw-gradient-position": "to bottom right in oklab",
    backgroundImage: "linear-gradient(var(--tw-gradient-stops))",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)"
  },
  $10: {
    flex: "1",
    textAlign: "left"
  },
  $11: {
    fontWeight: "700",
    color: "#fff"
  },
  $12: {
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    color: "oklab(100% 0 5.96046e-8 / .6)"
  },
  $13: {
    height: ".75rem",
    width: ".75rem",
    borderRadius: "3.40282e38px",
    backgroundColor: "#4ade80",
    "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)",
    "--tw-shadow-color": {
      default: "#4ade8080",
      "@supports (color: color-mix(in lab, red, red))": "color-mix(in oklab, oklab(80.0349% -.160317 .0862818 / .5) 100%, transparent)"
    }
  }
});
const _styles2 = _stylex.create({
  $1: {
    display: "flex",
    height: "3rem",
    width: "3rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ".5rem",
    "--tw-gradient-position": "to bottom right in oklab",
    backgroundImage: "linear-gradient(var(--tw-gradient-stops))",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)"
  }
});