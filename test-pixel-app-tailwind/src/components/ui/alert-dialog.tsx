"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog@1.1.6";
import { cn } from "./utils";
import { buttonVariants } from "./button";
function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}
function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />;
}
function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />;
}
function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return <AlertDialogPrimitive.Overlay data-slot="alert-dialog-overlay" className={[_styles.$1, className]} {...props} />;
}
function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content data-slot="alert-dialog-content" className={[_styles.$2, className]} {...props} />
    </AlertDialogPortal>;
}
function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="alert-dialog-header" {..._stylex.props(_styles.$3, className)} {...props} />;
}
function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="alert-dialog-footer" {..._stylex.props(_styles.$4, className)} {...props} />;
}
function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return <AlertDialogPrimitive.Title data-slot="alert-dialog-title" className={[_styles.$5, className]} {...props} />;
}
function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return <AlertDialogPrimitive.Description data-slot="alert-dialog-description" className={[_styles.$6, className]} {...props} />;
}
function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return <AlertDialogPrimitive.Action className={[buttonVariants(), className]} {...props} />;
}
function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return <AlertDialogPrimitive.Cancel className={[buttonVariants({
    variant: "outline"
  }), className]} {...props} />;
}
export { AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel };
const _styles = _stylex.create({
  $1: {
    position: "fixed",
    inset: "0",
    zIndex: "50",
    backgroundColor: "oklab(0% none none / .5)"
  },
  $2: {
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: "50",
    display: "grid",
    width: "100%",
    maxWidth: "calc(100% - 2rem)",
    "--tw-translate-x": "-50%",
    translate: "0 -50%",
    "--tw-translate-y": "-50%",
    gap: "1rem",
    borderRadius: ".5rem",
    borderStyle: "solid",
    borderWidth: "1px",
    padding: "1.5rem",
    "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)",
    transitionDuration: ".2s"
  },
  $3: {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    textAlign: {
      default: "center",
      "@media (width >= 40rem)": "left"
    }
  },
  $4: {
    display: "flex",
    flexDirection: {
      default: "column-reverse",
      "@media (width >= 40rem)": "row"
    },
    gap: ".5rem",
    justifyContent: {
      default: null,
      "@media (width >= 40rem)": "flex-end"
    }
  },
  $5: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    fontWeight: "600"
  },
  $6: {
    fontSize: ".875rem",
    lineHeight: "1.25rem"
  }
});