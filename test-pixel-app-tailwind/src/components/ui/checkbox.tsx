"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox@1.1.4";
import { CheckIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return <CheckboxPrimitive.Root data-slot="checkbox" className={[_styles.$1, className]} {...props}>
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" {..._stylex.props(_styles.$2)}>
        <CheckIcon {..._stylex.props(_styles.$3)} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>;
}
export { Checkbox };
const _styles = _stylex.create({
  $1: {
    width: "1rem",
    height: "1rem",
    flexShrink: "0",
    borderRadius: "4px",
    borderStyle: "solid",
    borderWidth: "1px",
    "--tw-shadow": "0 1px #0000000d",
    boxShadow: {
      default: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px var(--tw-shadow-color, #0000000d)",
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    },
    transitionProperty: "box-shadow",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(3px + 0) currentcolor"
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "currentColor",
    transitionProperty: "none"
  },
  $3: {
    width: ".875rem",
    height: ".875rem"
  }
});