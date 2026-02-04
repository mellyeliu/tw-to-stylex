import * as _stylex from "@stylexjs/stylex";
import { useState } from 'react';
import { PixelCanvas } from './components/PixelCanvas';
import { Toolbar } from './components/Toolbar';
import { ColorPalette } from './components/ColorPalette';
import { StylePresets } from './components/StylePresets';
import { motion } from 'motion/react';
export type Tool = 'pen' | 'eraser' | 'fill';
export type StyleTheme = 'neon' | 'retro' | 'pastel' | 'cyberpunk' | 'vaporwave';
export default function App() {
  const [gridSize, setGridSize] = useState(32);
  const [selectedColor, setSelectedColor] = useState('#FF00FF');
  const [selectedTool, setSelectedTool] = useState<Tool>('pen');
  const [selectedStyle, setSelectedStyle] = useState<StyleTheme>('neon');
  const [pixels, setPixels] = useState<{
    [key: string]: string;
  }>({});
  const handleClear = () => {
    setPixels({});
  };
  return <div {..._stylex.props(_styles.$1, _styles[selectedStyle])}>
      <div {..._stylex.props(_styles.$2)}>
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <h1 {..._stylex.props(_styles.$3)}>
            Pixel Doodle Studio
          </h1>
          <p {..._stylex.props(_styles.$4)}>
            Create amazing pixel art with style ✨
          </p>
        </motion.div>

        <div {..._stylex.props(_styles.$5)}>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} {..._stylex.props(_styles.$6)}>
            <PixelCanvas gridSize={gridSize} pixels={pixels} setPixels={setPixels} selectedColor={selectedColor} selectedTool={selectedTool} selectedStyle={selectedStyle} />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} {..._stylex.props(_styles.$6)}>
            <StylePresets selectedStyle={selectedStyle} onStyleChange={setSelectedStyle} />
            
            <Toolbar selectedTool={selectedTool} onToolChange={setSelectedTool} gridSize={gridSize} onGridSizeChange={setGridSize} onClear={handleClear} />

            <ColorPalette selectedColor={selectedColor} onColorChange={setSelectedColor} selectedStyle={selectedStyle} />
          </motion.div>
        </div>
      </div>
    </div>;
}
const _styles = _stylex.create({
  $1: {
    minHeight: "100vh",
    padding: "2rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".7s"
  },
  neon: {
    backgroundImage: "linear-gradient(to bottom right, #581c87, #831843, #1e3a8a)"
  },
  retro: {
    backgroundImage: "linear-gradient(to bottom right, #9a3412, #991b1b, #a16207)"
  },
  pastel: {
    backgroundImage: "linear-gradient(to bottom right, #fbcfe8, #e9d5ff, #bfdbfe)"
  },
  cyberpunk: {
    backgroundImage: "linear-gradient(to bottom right, #083344, #4a044e, #422006)"
  },
  vaporwave: {
    backgroundImage: "linear-gradient(to bottom right, #f472b6, #c084fc, #22d3ee)"
  },
  default: {
    backgroundImage: "linear-gradient(to bottom right, #581c87, #831843, #1e3a8a)"
  },
  $2: {
    marginInline: "auto"
  },
  $3: {
    marginBottom: ".5rem",
    textAlign: "center",
    fontSize: "3.75rem",
    lineHeight: "1",
    fontWeight: "700",
    color: "#fff",
    filter: "drop-shadow(0 0 30px #ffffff80)"
  },
  $4: {
    marginBottom: "2rem",
    textAlign: "center",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    color: "rgba(255, 255, 255, 0.8)"
  },
  $5: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(1, minmax(0, 1fr))",
      "@media (width >= 64rem)": "1fr auto"
    },
    gap: "1.5rem"
  },
  $6: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }
});