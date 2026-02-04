"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import { Command as CommandPrimitive } from "cmdk@1.1.1";
import { SearchIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return <CommandPrimitive data-slot="command" className={[_styles.$1, className]} {...props} />;
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
}) {
  return <Dialog {...props}>
      <DialogHeader {..._stylex.props(_styles.$2)}>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent {..._stylex.props(_styles.$3)}>
        <Command {..._stylex.props(_styles.$4)}>
          {children}
        </Command>
      </DialogContent>
    </Dialog>;
}
function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return <div data-slot="command-input-wrapper" {..._stylex.props(_styles.$5)}>
      <SearchIcon {..._stylex.props(_styles.$6)} />
      <CommandPrimitive.Input data-slot="command-input" className={[_styles.$7, className]} {...props} />
    </div>;
}
function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return <CommandPrimitive.List data-slot="command-list" className={[_styles.$8, className]} {...props} />;
}
function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return <CommandPrimitive.Empty data-slot="command-empty" {..._stylex.props(_styles.$9)} {...props} />;
}
function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return <CommandPrimitive.Group data-slot="command-group" className={[_styles.$10, className]} {...props} />;
}
function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return <CommandPrimitive.Separator data-slot="command-separator" className={[_styles.$11, className]} {...props} />;
}
function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return <CommandPrimitive.Item data-slot="command-item" className={[_styles.$12, className]} {...props} />;
}
function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <span data-slot="command-shortcut" {..._stylex.props(_styles.$13, className)} {...props} />;
}
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: ".375rem"
  },
  $2: {
    clipPath: "inset(50%)",
    whiteSpace: "nowrap",
    borderWidth: "0",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0",
    position: "absolute",
    overflow: "hidden"
  },
  $3: {
    overflow: "hidden",
    padding: "0"
  },
  $4: {},
  $5: {
    display: "flex",
    height: "2.25rem",
    alignItems: "center",
    gap: ".5rem",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    paddingInline: ".75rem"
  },
  $6: {
    width: "1rem",
    height: "1rem",
    flexShrink: "0",
    opacity: ".5"
  },
  $7: {
    display: "flex",
    height: "2.5rem",
    width: "100%",
    borderRadius: ".375rem",
    backgroundColor: "#0000",
    paddingBlock: ".75rem",
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
    cursor: {
      default: null,
      ":disabled": "not-allowed"
    },
    opacity: {
      default: null,
      ":disabled": ".5"
    }
  },
  $8: {
    maxHeight: "300px",
    scrollPaddingBlock: ".25rem",
    overflowX: "hidden",
    overflowY: "auto"
  },
  $9: {
    paddingBlock: "1.5rem",
    textAlign: "center",
    fontSize: ".875rem",
    lineHeight: "1.25rem"
  },
  $10: {
    overflow: "hidden",
    padding: ".25rem"
  },
  $11: {
    marginInline: "-.25rem",
    height: "1px"
  },
  $12: {
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
  $13: {
    marginLeft: "auto",
    fontSize: ".75rem",
    lineHeight: "1rem"
  }
});