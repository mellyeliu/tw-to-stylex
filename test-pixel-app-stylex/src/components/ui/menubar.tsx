"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar@1.1.6";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return <MenubarPrimitive.Root data-slot="menubar" className={[_styles.$1, className]} {...props} />;
}
function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}
function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}
function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}
function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />;
}
function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return <MenubarPrimitive.Trigger data-slot="menubar-trigger" className={[_styles.$2, className]} {...props} />;
}
function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return <MenubarPortal>
      <MenubarPrimitive.Content data-slot="menubar-content" align={align} alignOffset={alignOffset} sideOffset={sideOffset} className={[_styles.$3, className]} {...props} />
    </MenubarPortal>;
}
function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return <MenubarPrimitive.Item data-slot="menubar-item" data-inset={inset} data-variant={variant} className={[_styles.$4, className]} {...props} />;
}
function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return <MenubarPrimitive.CheckboxItem data-slot="menubar-checkbox-item" className={[_styles.$5, className]} checked={checked} {...props}>
      <span {..._stylex.props(_styles.$6)}>
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon {..._stylex.props(_styles.$7)} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>;
}
function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return <MenubarPrimitive.RadioItem data-slot="menubar-radio-item" className={[_styles.$5, className]} {...props}>
      <span {..._stylex.props(_styles.$6)}>
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon {..._stylex.props(_styles.$8)} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>;
}
function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean;
}) {
  return <MenubarPrimitive.Label data-slot="menubar-label" data-inset={inset} className={[_styles.$9, className]} {...props} />;
}
function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return <MenubarPrimitive.Separator data-slot="menubar-separator" className={[_styles.$10, className]} {...props} />;
}
function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <span data-slot="menubar-shortcut" {..._stylex.props(_styles.$11, className)} {...props} />;
}
function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return <MenubarPrimitive.SubTrigger data-slot="menubar-sub-trigger" data-inset={inset} className={[_styles.$12, className]} {...props}>
      {children}
      <ChevronRightIcon {..._stylex.props(_styles.$13)} />
    </MenubarPrimitive.SubTrigger>;
}
function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return <MenubarPrimitive.SubContent data-slot="menubar-sub-content" className={[_styles.$14, className]} {...props} />;
}
export { Menubar, MenubarPortal, MenubarMenu, MenubarTrigger, MenubarContent, MenubarGroup, MenubarSeparator, MenubarLabel, MenubarItem, MenubarShortcut, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarSub, MenubarSubTrigger, MenubarSubContent };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    height: "2.25rem",
    alignItems: "center",
    gap: ".25rem",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    padding: ".25rem",
    "--tw-shadow": "0 1px #0000000d",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px var(--tw-shadow-color, #0000000d)"
  },
  $2: {
    display: "flex",
    alignItems: "center",
    borderRadius: ".125rem",
    paddingInline: ".5rem",
    paddingBlock: ".25rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: "500",
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
    zIndex: "50",
    minWidth: "12rem",
    transformOrigin: "var(--radix-menubar-content-transform-origin)",
    overflow: "hidden",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    padding: ".25rem",
    "--tw-shadow": "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a)"
  },
  $4: {
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
  $5: {
    position: "relative",
    display: "flex",
    cursor: "default",
    alignItems: "center",
    gap: ".5rem",
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
  $6: {
    pointerEvents: "none",
    position: "absolute",
    left: ".5rem",
    display: "flex",
    width: ".875rem",
    height: ".875rem",
    alignItems: "center",
    justifyContent: "center"
  },
  $7: {
    width: "1rem",
    height: "1rem"
  },
  $8: {
    width: ".5rem",
    height: ".5rem",
    fill: "currentColor"
  },
  $9: {
    paddingInline: ".5rem",
    paddingBlock: ".375rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: "500"
  },
  $10: {
    marginInline: "-.25rem",
    marginBlock: ".25rem",
    height: "1px"
  },
  $11: {
    marginLeft: "auto",
    fontSize: ".75rem",
    lineHeight: "1rem"
  },
  $12: {
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
    WebkitUserSelect: "none",
    userSelect: "none"
  },
  $13: {
    marginLeft: "auto",
    height: "1rem",
    width: "1rem"
  },
  $14: {
    zIndex: "50",
    minWidth: "8rem",
    transformOrigin: "var(--radix-menubar-content-transform-origin)",
    overflow: "hidden",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    padding: ".25rem",
    "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)"
  }
});