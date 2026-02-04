"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area@1.2.3";
import { cn } from "./utils";
function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return <ScrollAreaPrimitive.Root data-slot="scroll-area" className={[_styles.$1, className]} {...props}>
      <ScrollAreaPrimitive.Viewport data-slot="scroll-area-viewport" {..._stylex.props(_styles.$2)}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>;
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return <ScrollAreaPrimitive.ScrollAreaScrollbar data-slot="scroll-area-scrollbar" orientation={orientation} className={[_styles.$3, orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className]} {...props}>
      <ScrollAreaPrimitive.ScrollAreaThumb data-slot="scroll-area-thumb" {..._stylex.props(_styles.$4)} />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>;
}
export { ScrollArea, ScrollBar };
const _styles = _stylex.create({
  $1: {
    position: "relative"
  },
  $2: {
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    transitionProperty: "color, box-shadow",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-outline-style": "none",
    outlineStyle: {
      default: "none",
      ":focus-visible": "solid"
    },
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(3px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    },
    outlineWidth: {
      default: null,
      ":focus-visible": "1px"
    }
  },
  $3: {
    display: "flex",
    touchAction: "none",
    padding: "1px",
    transitionProperty: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    WebkitUserSelect: "none",
    userSelect: "none"
  },
  $4: {
    position: "relative",
    flex: "1",
    borderRadius: "3.40282e38px"
  }
});