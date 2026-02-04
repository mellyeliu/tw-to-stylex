import * as _stylex from "@stylexjs/stylex";
import { Palette } from 'lucide-react';
import { motion } from 'motion/react';
import type { StyleTheme } from '../App';
interface ColorPaletteProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
  selectedStyle: StyleTheme;
}
export function ColorPalette({
  selectedColor,
  onColorChange,
  selectedStyle
}: ColorPaletteProps) {
  const getColorsByTheme = (): string[] => {
    switch (selectedStyle) {
      case 'neon':
        return ['#FF00FF', '#00FFFF', '#FF0080', '#00FF00', '#FFFF00', '#FF0000', '#0000FF', '#FF6600', '#9D00FF', '#00FF80', '#FF0040', '#40FF00', '#0080FF', '#FF00BF', '#80FF00', '#FFFFFF', '#000000'];
      case 'retro':
        return ['#FF6B35', '#F7931E', '#FDC830', '#C9485B', '#8B4789', '#E63946', '#F77F00', '#FCBF49', '#D62828', '#A44200', '#6A4C93', '#5E503F', '#F4A261', '#E76F51', '#8B5E3C', '#FFFFFF', '#000000'];
      case 'pastel':
        return ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#DDA0DD', '#F0E68C', '#FFDAB9', '#E0BBE4', '#B4F8C8', '#FBE7C6', '#A8E6CF', '#FFD3B6', '#FFAAA5', '#FF8B94', '#FFFFFF', '#000000'];
      case 'cyberpunk':
        return ['#FF0080', '#00FFFF', '#FFD700', '#FF00FF', '#00FF41', '#FF3131', '#6B00FF', '#FF6EC7', '#39FF14', '#00D9FF', '#FF006E', '#8338EC', '#FFBE0B', '#FB5607', '#3A86FF', '#FFFFFF', '#000000'];
      case 'vaporwave':
        return ['#FF6AD5', '#C774E8', '#AD8CFF', '#8795E8', '#94D0FF', '#FF71CE', '#01CDFE', '#05FFA1', '#B967FF', '#FFFB96', '#FD1D53', '#F706CF', '#01FFFF', '#B4D8E7', '#FFB6C1', '#FFFFFF', '#000000'];
      default:
        return ['#FF00FF', '#00FFFF', '#FF0080', '#00FF00', '#FFFF00', '#FF0000', '#0000FF', '#FF6600', '#9D00FF', '#00FF80', '#FFFFFF', '#000000'];
    }
  };
  const colors = getColorsByTheme();
  return <div {..._stylex.props(_styles.$1)}>
      <h3 {..._stylex.props(_styles.$2)}>
        <Palette {..._stylex.props(_styles.$3)} />
        Colors
      </h3>

      <div {..._stylex.props(_styles.$4)}>
        <div {..._stylex.props(_styles.$5)}>
          {colors.map(color => <motion.button key={color} onClick={() => onColorChange(color)} {..._stylex.props(_styles.$6, selectedColor === color ? _styles.$7 : _styles.$8)} style={{
          backgroundColor: color
        }} whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} />)}
        </div>

        <div>
          <label {..._stylex.props(_styles.$9)}>
            Custom Color
          </label>
          <div {..._stylex.props(_styles.$10)}>
            <input type="color" value={selectedColor} onChange={e => onColorChange(e.target.value)} {..._stylex.props(_styles.$11)} />
            <div {..._stylex.props(_styles.$12)}>
              <span {..._stylex.props(_styles.$13)}>
                {selectedColor.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
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
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
    gap: ".5rem"
  },
  $6: {
    height: "3rem",
    width: "3rem",
    borderRadius: ".5rem",
    borderStyle: "solid",
    borderWidth: "2px",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  },
  $7: {
    "--tw-scale-x": "110%",
    "--tw-scale-y": "110%",
    "--tw-scale-z": "110%",
    scale: "110% 110%",
    borderColor: "#fff",
    "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)",
    "--tw-shadow-color": {
      default: "#ffffff80",
      "@supports (color: color-mix(in lab, red, red))": "color-mix(in oklab, oklab(100% 0 5.96046e-8 / .5) 100%, transparent)"
    }
  },
  $8: {
    borderColor: {
      default: "oklab(100% 0 5.96046e-8 / .2)",
      ":hover": "oklab(100% 0 5.96046e-8 / .5)"
    }
  },
  $9: {
    marginBottom: ".5rem",
    display: "block",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: "600",
    color: "#fff"
  },
  $10: {
    display: "flex",
    gap: ".5rem"
  },
  $11: {
    height: "3rem",
    width: "4rem",
    cursor: "pointer",
    borderRadius: ".5rem",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "oklab(100% 0 5.96046e-8 / .2)",
    backgroundColor: "oklab(0% none none / .2)"
  },
  $12: {
    display: "flex",
    flex: "1",
    alignItems: "center",
    borderRadius: ".5rem",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "oklab(100% 0 5.96046e-8 / .2)",
    backgroundColor: "oklab(0% none none / .2)",
    paddingInline: ".75rem"
  },
  $13: {
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    color: "oklab(100% 0 5.96046e-8 / .8)"
  }
});