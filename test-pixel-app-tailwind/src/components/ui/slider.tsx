"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider@1.2.3";
import { cn } from "./utils";
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(() => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max], [value, defaultValue, min, max]);
  return <SliderPrimitive.Root data-slot="slider" defaultValue={defaultValue} value={value} min={min} max={max} className={[_styles.$1, className]} {...props}>
      <SliderPrimitive.Track data-slot="slider-track" className={[_styles.$2]}>
        <SliderPrimitive.Range data-slot="slider-range" className={[_styles.$3]} />
      </SliderPrimitive.Track>
      {Array.from({
      length: _values.length
    }, (_, index) => <SliderPrimitive.Thumb data-slot="slider-thumb" key={index} {..._stylex.props(_styles.$4)} />)}
    </SliderPrimitive.Root>;
}
export { Slider };
const _styles = _stylex.create({
  $1: {
    position: "relative",
    display: "flex",
    width: "100%",
    touchAction: "none",
    alignItems: "center",
    WebkitUserSelect: "none",
    userSelect: "none"
  },
  $2: {
    position: "relative",
    flexGrow: "1",
    overflow: "hidden",
    borderRadius: "3.40282e38px"
  },
  $3: {
    position: "absolute"
  },
  $4: {
    display: "block",
    width: "1rem",
    height: "1rem",
    flexShrink: "0",
    borderRadius: "3.40282e38px",
    borderStyle: "solid",
    borderWidth: "1px",
    "--tw-shadow": "0 1px 2px 0 #0000000d",
    boxShadow: {
      default: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 2px 0 var(--tw-shadow-color, #0000000d)",
      ":hover": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000",
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    },
    transitionProperty: "color, box-shadow",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-ring-shadow": {
      default: null,
      ":hover": " 0 0 0 calc(4px + 0) currentcolor",
      ":focus-visible": " 0 0 0 calc(4px + 0) currentcolor"
    },
    "--tw-outline-style": {
      default: null,
      ":focus-visible": "none"
    },
    outlineStyle: {
      default: null,
      ":focus-visible": "none"
    },
    outlineOffset: {
      default: null,
      "@media (forced-colors: active)": {
        default: null,
        ":focus-visible": "2px"
      }
    },
    outline: {
      default: null,
      "@media (forced-colors: active)": {
        default: null,
        ":focus-visible": "2px solid #0000"
      }
    },
    pointerEvents: {
      default: null,
      ":disabled": "none"
    },
    opacity: {
      default: null,
      ":disabled": ".5"
    }
  }
});