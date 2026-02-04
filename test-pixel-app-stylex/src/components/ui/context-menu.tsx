"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu@2.2.6";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}
function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />;
}
function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />;
}
function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />;
}
function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}
function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return <ContextMenuPrimitive.RadioGroup data-slot="context-menu-radio-group" {...props} />;
}
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return <ContextMenuPrimitive.SubTrigger data-slot="context-menu-sub-trigger" data-inset={inset} className={[_styles.$1, className]} {...props}>
      {children}
      <ChevronRightIcon {..._stylex.props(_styles.$2)} />
    </ContextMenuPrimitive.SubTrigger>;
}
function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return <ContextMenuPrimitive.SubContent data-slot="context-menu-sub-content" className={[_styles.$3, className]} {...props} />;
}
function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content data-slot="context-menu-content" className={[_styles.$4, className]} {...props} />
    </ContextMenuPrimitive.Portal>;
}
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return <ContextMenuPrimitive.Item data-slot="context-menu-item" data-inset={inset} data-variant={variant} className={[_styles.$5, className]} {...props} />;
}
function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return <ContextMenuPrimitive.CheckboxItem data-slot="context-menu-checkbox-item" className={[_styles.$6, className]} checked={checked} {...props}>
      <span {..._stylex.props(_styles.$7)}>
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon {..._stylex.props(_styles.$8)} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>;
}
function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return <ContextMenuPrimitive.RadioItem data-slot="context-menu-radio-item" className={[_styles.$6, className]} {...props}>
      <span {..._stylex.props(_styles.$7)}>
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon {..._stylex.props(_styles.$9)} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>;
}
function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return <ContextMenuPrimitive.Label data-slot="context-menu-label" data-inset={inset} className={[_styles.$10, className]} {...props} />;
}
function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return <ContextMenuPrimitive.Separator data-slot="context-menu-separator" className={[_styles.$11, className]} {...props} />;
}
function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <span data-slot="context-menu-shortcut" {..._stylex.props(_styles.$12, className)} {...props} />;
}
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup };
const _styles = _stylex.create({
  $1: {
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
  $2: {
    marginLeft: "auto"
  },
  $3: {
    zIndex: "50",
    minWidth: "8rem",
    transformOrigin: "var(--radix-context-menu-content-transform-origin)",
    overflow: "hidden",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    padding: ".25rem",
    "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)"
  },
  $4: {
    zIndex: "50",
    maxHeight: "var(--radix-context-menu-content-available-height)",
    minWidth: "8rem",
    transformOrigin: "var(--radix-context-menu-content-transform-origin)",
    overflowX: "hidden",
    overflowY: "auto",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    padding: ".25rem",
    "--tw-shadow": "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a)"
  },
  $5: {
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
  $6: {
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
  $7: {
    pointerEvents: "none",
    position: "absolute",
    left: ".5rem",
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
    width: ".5rem",
    height: ".5rem",
    fill: "currentColor"
  },
  $10: {
    paddingInline: ".5rem",
    paddingBlock: ".375rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: "500"
  },
  $11: {
    marginInline: "-.25rem",
    marginBlock: ".25rem",
    height: "1px"
  },
  $12: {
    marginLeft: "auto",
    fontSize: ".75rem",
    lineHeight: "1rem"
  }
});