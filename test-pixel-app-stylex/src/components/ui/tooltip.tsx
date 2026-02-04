"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip@1.1.8";
import { cn } from "./utils";
function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" delayDuration={delayDuration} {...props} />;
}
function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>;
}
function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content data-slot="tooltip-content" sideOffset={sideOffset} className={[_styles.$1, className]} {...props}>
        {children}
        <TooltipPrimitive.Arrow {..._stylex.props(_styles.$2)} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>;
}
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
const _styles = _stylex.create({
  $1: {
    zIndex: "50",
    width: "fit-content",
    transformOrigin: "var(--radix-tooltip-content-transform-origin)",
    borderRadius: ".375rem",
    paddingInline: ".75rem",
    paddingBlock: ".375rem",
    fontSize: ".75rem",
    lineHeight: "1rem",
    textWrap: "balance"
  },
  $2: {
    zIndex: "50",
    width: ".625rem",
    height: ".625rem",
    "--tw-translate-y": "calc(-50% - 2px)",
    translate: "0 calc(-50% - 2px)",
    rotate: "45deg",
    borderRadius: "2px"
  }
});