"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul@1.1.2";
import { cn } from "./utils";
function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}
function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}
function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}
function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}
function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return <DrawerPrimitive.Overlay data-slot="drawer-overlay" className={[_styles.$1, className]} {...props} />;
}
function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content data-slot="drawer-content" className={[_styles.$2, _styles.$3, _styles.$4, _styles.$5, _styles.$6, className]} {...props}>
        <div {..._stylex.props(_styles.$7)} />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>;
}
function DrawerHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="drawer-header" {..._stylex.props(_styles.$8, className)} {...props} />;
}
function DrawerFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="drawer-footer" {..._stylex.props(_styles.$9, className)} {...props} />;
}
function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return <DrawerPrimitive.Title data-slot="drawer-title" className={[_styles.$10, className]} {...props} />;
}
function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return <DrawerPrimitive.Description data-slot="drawer-description" className={[_styles.$11, className]} {...props} />;
}
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription };
const _styles = _stylex.create({
  $1: {
    position: "fixed",
    inset: "0",
    zIndex: "50",
    backgroundColor: "oklab(0% none none / .5)"
  },
  $2: {
    position: "fixed",
    zIndex: "50",
    display: "flex",
    height: "auto",
    flexDirection: "column"
  },
  $3: {},
  $4: {},
  $5: {},
  $6: {},
  $7: {
    marginInline: "auto",
    marginTop: "1rem",
    display: "none",
    height: ".5rem",
    width: "100px",
    flexShrink: "0",
    borderRadius: "3.40282e38px"
  },
  $8: {
    display: "flex",
    flexDirection: "column",
    gap: ".375rem",
    padding: "1rem"
  },
  $9: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    padding: "1rem"
  },
  $10: {
    fontWeight: "600"
  },
  $11: {
    fontSize: ".875rem",
    lineHeight: "1.25rem"
  }
});