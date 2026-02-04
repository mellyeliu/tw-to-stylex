"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select@2.1.6";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}
function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}
function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return <SelectPrimitive.Trigger data-slot="select-trigger" data-size={size} className={[_styles.$1, className]} {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon {..._stylex.props(_styles.$2)} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>;
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return <SelectPrimitive.Portal>
      <SelectPrimitive.Content data-slot="select-content" className={[_styles.$3, position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className]} position={position} {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className={[_styles.$4, position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"]}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>;
}
function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return <SelectPrimitive.Label data-slot="select-label" className={[_styles.$5, className]} {...props} />;
}
function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return <SelectPrimitive.Item data-slot="select-item" className={[_styles.$6, className]} {...props}>
      <span {..._stylex.props(_styles.$7)}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon {..._stylex.props(_styles.$8)} />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>;
}
function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return <SelectPrimitive.Separator data-slot="select-separator" className={[_styles.$9, className]} {...props} />;
}
function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return <SelectPrimitive.ScrollUpButton data-slot="select-scroll-up-button" className={[_styles.$10, className]} {...props}>
      <ChevronUpIcon {..._stylex.props(_styles.$8)} />
    </SelectPrimitive.ScrollUpButton>;
}
function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return <SelectPrimitive.ScrollDownButton data-slot="select-scroll-down-button" className={[_styles.$10, className]} {...props}>
      <ChevronDownIcon {..._stylex.props(_styles.$8)} />
    </SelectPrimitive.ScrollDownButton>;
}
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: ".5rem",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    paddingInline: ".75rem",
    paddingBlock: ".5rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    whiteSpace: "nowrap",
    transitionProperty: "color, box-shadow",
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
    width: "1rem",
    height: "1rem",
    opacity: ".5"
  },
  $3: {
    position: "relative",
    zIndex: "50",
    maxHeight: "var(--radix-select-content-available-height)",
    minWidth: "8rem",
    transformOrigin: "var(--radix-select-content-transform-origin)",
    overflowX: "hidden",
    overflowY: "auto",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    "--tw-shadow": "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a)"
  },
  $4: {
    padding: ".25rem"
  },
  $5: {
    paddingInline: ".5rem",
    paddingBlock: ".375rem",
    fontSize: ".75rem",
    lineHeight: "1rem"
  },
  $6: {
    position: "relative",
    display: "flex",
    width: "100%",
    cursor: "default",
    alignItems: "center",
    gap: ".5rem",
    borderRadius: ".125rem",
    paddingBlock: ".375rem",
    paddingRight: "2rem",
    paddingLeft: ".5rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    outlineOffset: {
      default: null,
      "@media (forced-colors: active)": "2px"
    },
    outline: {
      default: null,
      "@media (forced-colors: active)": "2px solid #0000"
    },
    WebkitUserSelect: "none",
    userSelect: "none"
  },
  $7: {
    position: "absolute",
    right: ".5rem",
    display: "flex",
    width: ".875rem",
    height: ".875rem",
    alignItems: "center",
    justifyContent: "center"
  },
  $8: {
    width: "1rem",
    height: "1rem"
  },
  $9: {
    pointerEvents: "none",
    marginInline: "-.25rem",
    marginBlock: ".25rem",
    height: "1px"
  },
  $10: {
    display: "flex",
    cursor: "default",
    alignItems: "center",
    justifyContent: "center",
    paddingBlock: ".25rem"
  }
});