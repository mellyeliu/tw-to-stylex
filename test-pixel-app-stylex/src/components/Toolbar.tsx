import * as _stylex from "@stylexjs/stylex";
import { Paintbrush, Eraser, Droplet, Grid3x3, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import type { Tool } from '../App';
interface ToolbarProps {
  selectedTool: Tool;
  onToolChange: (tool: Tool) => void;
  gridSize: number;
  onGridSizeChange: (size: number) => void;
  onClear: () => void;
}
export function Toolbar({
  selectedTool,
  onToolChange,
  gridSize,
  onGridSizeChange,
  onClear
}: ToolbarProps) {
  const tools: {
    id: Tool;
    icon: any;
    label: string;
  }[] = [{
    id: 'pen',
    icon: Paintbrush,
    label: 'Pen'
  }, {
    id: 'eraser',
    icon: Eraser,
    label: 'Eraser'
  }, {
    id: 'fill',
    icon: Droplet,
    label: 'Fill'
  }];
  const gridSizes = [16, 24, 32, 48, 64];
  return <div {..._stylex.props(_styles.$1)}>
      <h3 {..._stylex.props(_styles.$2)}>
        <Grid3x3 {..._stylex.props(_styles.$3)} />
        Tools
      </h3>

      <div {..._stylex.props(_styles.$4)}>
        <div {..._stylex.props(_styles.$5)}>
          {tools.map(tool => {
          const Icon = tool.icon;
          return <motion.button key={tool.id} onClick={() => onToolChange(tool.id)} {..._stylex.props(_styles.$6, selectedTool === tool.id ? _styles.$7 : _styles.$8)} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                <Icon {..._stylex.props(_styles.$9)} />
                <span {..._stylex.props(_styles.$10)}>
                  {tool.label}
                </span>
              </motion.button>;
        })}
        </div>

        <div>
          <label {..._stylex.props(_styles.$11)}>
            Grid Size: {gridSize}x{gridSize}
          </label>
          <div {..._stylex.props(_styles.$12)}>
            {gridSizes.map(size => <motion.button key={size} onClick={() => onGridSizeChange(size)} {..._stylex.props(_styles.$13, gridSize === size ? _styles.$14 : _styles.$15)} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                {size}
              </motion.button>)}
          </div>
        </div>

        <motion.button onClick={onClear} {..._stylex.props(_styles.$16)} whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }}>
          <Trash2 {..._stylex.props(_styles.$3)} />
          Clear Canvas
        </motion.button>
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
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: ".5rem"
  },
  $6: {
    borderRadius: ".75rem",
    borderStyle: "solid",
    borderWidth: "2px",
    padding: "1rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  },
  $7: {
    borderColor: "oklab(100% 0 5.96046e-8 / .5)",
    backgroundColor: "oklab(100% 0 5.96046e-8 / .2)",
    "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)",
    "--tw-shadow-color": {
      default: "#ffffff40",
      "@supports (color: color-mix(in lab, red, red))": "color-mix(in oklab, oklab(100% 0 5.96046e-8 / .25) 100%, transparent)"
    }
  },
  $8: {
    borderColor: "oklab(100% 0 5.96046e-8 / .1)",
    backgroundColor: {
      default: "oklab(100% 0 5.96046e-8 / .05)",
      ":hover": "oklab(100% 0 5.96046e-8 / .1)"
    }
  },
  $9: {
    marginInline: "auto",
    height: "1.5rem",
    width: "1.5rem",
    color: "#fff"
  },
  $10: {
    marginTop: ".25rem",
    display: "block",
    fontSize: ".75rem",
    lineHeight: "1rem",
    color: "oklab(100% 0 5.96046e-8 / .8)"
  },
  $11: {
    marginBottom: ".5rem",
    display: "block",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: "600",
    color: "#fff"
  },
  $12: {
    display: "grid",
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
    gap: ".5rem"
  },
  $13: {
    borderRadius: ".5rem",
    padding: ".5rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  },
  $14: {
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "oklab(100% 0 5.96046e-8 / .5)",
    backgroundColor: "oklab(100% 0 5.96046e-8 / .2)",
    color: "#fff"
  },
  $15: {
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "oklab(100% 0 5.96046e-8 / .1)",
    backgroundColor: {
      default: "oklab(100% 0 5.96046e-8 / .05)",
      ":hover": "oklab(100% 0 5.96046e-8 / .1)"
    },
    color: "oklab(100% 0 5.96046e-8 / .6)"
  },
  $16: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5rem",
    borderRadius: ".75rem",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "oklab(63.6834% .187864 .0889286 / .5)",
    backgroundColor: {
      default: "oklab(63.6834% .187864 .0889286 / .2)",
      ":hover": "oklab(63.6834% .187864 .0889286 / .3)"
    },
    padding: "1rem",
    color: "#fff",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  }
});