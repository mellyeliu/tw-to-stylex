"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress@1.1.2";
import { cn } from "./utils";
function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return <ProgressPrimitive.Root data-slot="progress" className={[_styles.$1, className]} {...props}>
      <ProgressPrimitive.Indicator data-slot="progress-indicator" {..._stylex.props(_styles.$2)} style={{
      transform: `translateX(-${100 - (value || 0)}%)`
    }} />
    </ProgressPrimitive.Root>;
}
export { Progress };
const _styles = _stylex.create({
  $1: {
    position: "relative",
    height: ".5rem",
    width: "100%",
    overflow: "hidden",
    borderRadius: "3.40282e38px"
  },
  $2: {
    height: "100%",
    width: "100%",
    flex: "1",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  }
});