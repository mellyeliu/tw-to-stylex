"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group@1.2.3";
import { CircleIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root data-slot="radio-group" className={[_styles.$1, className]} {...props} />;
}
function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return <RadioGroupPrimitive.Item data-slot="radio-group-item" className={[_styles.$2, className]} {...props}>
      <RadioGroupPrimitive.Indicator data-slot="radio-group-indicator" {..._stylex.props(_styles.$3)}>
        <CircleIcon {..._stylex.props(_styles.$4)} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>;
}
export { RadioGroup, RadioGroupItem };
const _styles = _stylex.create({
  $1: {
    display: "grid",
    gap: ".75rem"
  },
  $2: {
    aspectRatio: "1",
    width: "1rem",
    height: "1rem",
    flexShrink: "0",
    borderRadius: "3.40282e38px",
    borderStyle: "solid",
    borderWidth: "1px",
    "--tw-shadow": "0 1px #0000000d",
    boxShadow: {
      default: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px var(--tw-shadow-color, #0000000d)",
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    },
    transitionProperty: "color, box-shadow",
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
  $3: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  $4: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: ".5rem",
    height: ".5rem",
    "--tw-translate-x": "calc(calc(1/2 * 100%) * -1)",
    translate: "0 calc(calc(1/2 * 100%) * -1)",
    "--tw-translate-y": "calc(calc(1/2 * 100%) * -1)"
  }
});