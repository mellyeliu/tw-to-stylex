"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu@2.1.6";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}
function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}
function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content data-slot="dropdown-menu-content" sideOffset={sideOffset} className={[_styles.$1, className]} {...props} />
    </DropdownMenuPrimitive.Portal>;
}
function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return <DropdownMenuPrimitive.Item data-slot="dropdown-menu-item" data-inset={inset} data-variant={variant} className={[_styles.$2, className]} {...props} />;
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return <DropdownMenuPrimitive.CheckboxItem data-slot="dropdown-menu-checkbox-item" className={[_styles.$3, className]} checked={checked} {...props}>
      <span {..._stylex.props(_styles.$4)}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon {..._stylex.props(_styles.$5)} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>;
}
function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return <DropdownMenuPrimitive.RadioItem data-slot="dropdown-menu-radio-item" className={[_styles.$3, className]} {...props}>
      <span {..._stylex.props(_styles.$4)}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon {..._stylex.props(_styles.$6)} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>;
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return <DropdownMenuPrimitive.Label data-slot="dropdown-menu-label" data-inset={inset} className={[_styles.$7, className]} {...props} />;
}
function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return <DropdownMenuPrimitive.Separator data-slot="dropdown-menu-separator" className={[_styles.$8, className]} {...props} />;
}
function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <span data-slot="dropdown-menu-shortcut" {..._stylex.props(_styles.$9, className)} {...props} />;
}
function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return <DropdownMenuPrimitive.SubTrigger data-slot="dropdown-menu-sub-trigger" data-inset={inset} className={[_styles.$10, className]} {...props}>
      {children}
      <ChevronRightIcon {..._stylex.props(_styles.$11)} />
    </DropdownMenuPrimitive.SubTrigger>;
}
function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return <DropdownMenuPrimitive.SubContent data-slot="dropdown-menu-sub-content" className={[_styles.$12, className]} {...props} />;
}
export { DropdownMenu, DropdownMenuPortal, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent };
const _styles = _stylex.create({
  $1: {
    zIndex: "50",
    maxHeight: "var(--radix-dropdown-menu-content-available-height)",
    minWidth: "8rem",
    transformOrigin: "var(--radix-dropdown-menu-content-transform-origin)",
    overflowX: "hidden",
    overflowY: "auto",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    padding: ".25rem",
    "--tw-shadow": "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a)"
  },
  $2: {
    position: "relative",
    display: "flex",
    cursor: "default",
    alignItems: "center",
    gap: ".5rem",
    borderRadius: ".125rem",
    paddingInline: ".5rem",
    paddingBlock: ".375rem",
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
  $3: {
    position: "relative",
    display: "flex",
    cursor: "default",
    alignItems: "center",
    gap: ".5rem",
    borderRadius: ".125rem",
    paddingBlock: ".375rem",
    paddingRight: ".5rem",
    paddingLeft: "2rem",
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
  $4: {
    pointerEvents: "none",
    position: "absolute",
    left: ".5rem",
    display: "flex",
    width: ".875rem",
    height: ".875rem",
    alignItems: "center",
    justifyContent: "center"
  },
  $5: {
    width: "1rem",
    height: "1rem"
  },
  $6: {
    width: ".5rem",
    height: ".5rem",
    fill: "currentColor"
  },
  $7: {
    paddingInline: ".5rem",
    paddingBlock: ".375rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: "500"
  },
  $8: {
    marginInline: "-.25rem",
    marginBlock: ".25rem",
    height: "1px"
  },
  $9: {
    marginLeft: "auto",
    fontSize: ".75rem",
    lineHeight: "1rem"
  },
  $10: {
    display: "flex",
    cursor: "default",
    alignItems: "center",
    borderRadius: ".125rem",
    paddingInline: ".5rem",
    paddingBlock: ".375rem",
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
  $11: {
    marginLeft: "auto",
    width: "1rem",
    height: "1rem"
  },
  $12: {
    zIndex: "50",
    minWidth: "8rem",
    transformOrigin: "var(--radix-dropdown-menu-content-transform-origin)",
    overflow: "hidden",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    padding: ".25rem",
    "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)"
  }
});