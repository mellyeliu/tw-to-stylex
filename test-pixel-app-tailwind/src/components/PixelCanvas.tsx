import * as _stylex from "@stylexjs/stylex";
import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import type { Tool, StyleTheme } from '../App';
interface PixelCanvasProps {
  gridSize: number;
  pixels: {
    [key: string]: string;
  };
  setPixels: (pixels: {
    [key: string]: string;
  }) => void;
  selectedColor: string;
  selectedTool: Tool;
  selectedStyle: StyleTheme;
}
export function PixelCanvas({
  gridSize,
  pixels,
  setPixels,
  selectedColor,
  selectedTool,
  selectedStyle
}: PixelCanvasProps) {
  const [isDrawing, setIsDrawing] = useState(false);
  const handlePixelClick = (x: number, y: number) => {
    const key = `${x}-${y}`;
    if (selectedTool === 'pen') {
      setPixels({
        ...pixels,
        [key]: selectedColor
      });
    } else if (selectedTool === 'eraser') {
      const newPixels = {
        ...pixels
      };
      delete newPixels[key];
      setPixels(newPixels);
    } else if (selectedTool === 'fill') {
      floodFill(x, y);
    }
  };
  const handlePixelHover = (x: number, y: number) => {
    if (!isDrawing) return;
    const key = `${x}-${y}`;
    if (selectedTool === 'pen') {
      setPixels({
        ...pixels,
        [key]: selectedColor
      });
    } else if (selectedTool === 'eraser') {
      const newPixels = {
        ...pixels
      };
      delete newPixels[key];
      setPixels(newPixels);
    }
  };
  const floodFill = (startX: number, startY: number) => {
    const key = `${startX}-${startY}`;
    const targetColor = pixels[key] || null;
    if (targetColor === selectedColor) return;
    const newPixels = {
      ...pixels
    };
    const queue: [number, number][] = [[startX, startY]];
    const visited = new Set<string>();
    while (queue.length > 0) {
      const [x, y] = queue.shift()!;
      const currentKey = `${x}-${y}`;
      if (visited.has(currentKey)) continue;
      if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) continue;
      const currentColor = newPixels[currentKey] || null;
      if (currentColor !== targetColor) continue;
      visited.add(currentKey);
      newPixels[currentKey] = selectedColor;
      queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
    }
    setPixels(newPixels);
  };
  const getPixelGlow = () => {
    switch (selectedStyle) {
      case 'neon':
        return 'shadow-[0_0_10px_currentColor]';
      case 'cyberpunk':
        return 'shadow-[0_0_8px_currentColor]';
      case 'vaporwave':
        return 'shadow-[0_0_6px_rgba(255,255,255,0.5)]';
      default:
        return '';
    }
  };
  return <motion.div {..._stylex.props(_styles.$1)} whileHover={{
    scale: 1.01
  }} transition={{
    duration: 0.2
  }}>
      <div {..._stylex.props(_styles.$2)} style={{
      gridTemplateColumns: `repeat(${gridSize}, 1fr)`
    }} onMouseDown={() => setIsDrawing(true)} onMouseUp={() => setIsDrawing(false)} onMouseLeave={() => setIsDrawing(false)}>
        {Array.from({
        length: gridSize * gridSize
      }).map((_, index) => {
        const x = index % gridSize;
        const y = Math.floor(index / gridSize);
        const key = `${x}-${y}`;
        const pixelColor = pixels[key];
        return <motion.div key={key} {..._stylex.props(_styles.$3, pixelColor ? _styles[selectedStyle] : null)} style={{
          backgroundColor: pixelColor || 'transparent',
          color: pixelColor || 'transparent'
        }} onClick={() => handlePixelClick(x, y)} onMouseEnter={() => handlePixelHover(x, y)} whileHover={{
          scale: 1.2
        }} whileTap={{
          scale: 0.9
        }} transition={{
          duration: 0.1
        }} />;
      })}
      </div>
    </motion.div>;
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
    display: "inline-grid",
    gap: "0",
    borderRadius: ".5rem",
    backgroundColor: "oklab(21.0084% -.00295345 -.031625 / .5)",
    padding: ".5rem"
  },
  $3: {
    height: {
      default: ".75rem",
      "@media (width >= 40rem)": "1rem"
    },
    width: {
      default: ".75rem",
      "@media (width >= 40rem)": "1rem"
    },
    cursor: "crosshair",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "oklab(100% 0 5.96046e-8 / .05)",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  },
  neon: {
    "--tw-shadow": "0 0 10px currentColor",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 10px var(--tw-shadow-color, currentColor)"
  },
  cyberpunk: {
    "--tw-shadow": "0 0 8px currentColor",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 8px var(--tw-shadow-color, currentColor)"
  },
  vaporwave: {
    "--tw-shadow": "0 0 6px #ffffff80",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 6px var(--tw-shadow-color, #ffffff80)"
  },
  default: {
    "--tw-space-y-reverse": {
      default: null,
      ":where(.space-y-4 > :not(:last-child))": "0"
    },
    marginBlockStart: {
      default: null,
      ":where(.space-y-4 > :not(:last-child))": "calc(1rem * 0)"
    },
    marginBlockEnd: {
      default: null,
      ":where(.space-y-4 > :not(:last-child))": "calc(1rem * calc(1 - 0))"
    }
  }
});