"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card@1.1.6";
import { cn } from "./utils";
function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}
function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />;
}
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content data-slot="hover-card-content" align={align} sideOffset={sideOffset} className={[_styles.$1, className]} {...props} />
    </HoverCardPrimitive.Portal>;
}
export { HoverCard, HoverCardTrigger, HoverCardContent };
const _styles = _stylex.create({
  $1: {
    zIndex: "50",
    width: "16rem",
    transformOrigin: "var(--radix-hover-card-content-transform-origin)",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    padding: "1rem",
    "--tw-shadow": "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a)",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    outlineOffset: {
      default: null,
      "@media (forced-colors: active)": "2px"
    },
    outline: {
      default: null,
      "@media (forced-colors: active)": "2px solid #0000"
    }
  }
});