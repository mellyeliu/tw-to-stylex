"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch@1.1.3";
import { cn } from "./utils";
function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return <SwitchPrimitive.Root data-slot="switch" className={[_styles.$1, className]} {...props}>
      <SwitchPrimitive.Thumb data-slot="switch-thumb" className={[_styles.$2]} />
    </SwitchPrimitive.Root>;
}
export { Switch };
const _styles = _stylex.create({
  $1: {
    display: "inline-flex",
    height: "1.15rem",
    width: "2rem",
    flexShrink: "0",
    alignItems: "center",
    borderRadius: "3.40282e38px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#0000",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(3px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    },
    cursor: {
      default: null,
      ":disabled": "not-allowed"
    },
    opacity: {
      default: null,
      ":disabled": ".5"
    }
  },
  $2: {
    pointerEvents: "none",
    display: "block",
    width: "1rem",
    height: "1rem",
    borderRadius: "3.40282e38px",
    "--tw-ring-shadow": " 0 0 0 calc(0px + 0) currentcolor",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000",
    transitionProperty: "transform, translate, scale, rotate",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  }
});