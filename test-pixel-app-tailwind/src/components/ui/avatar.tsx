"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar@1.1.3";
import { cn } from "./utils";
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return <AvatarPrimitive.Root data-slot="avatar" className={[_styles.$1, className]} {...props} />;
}
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return <AvatarPrimitive.Image data-slot="avatar-image" className={[_styles.$2, className]} {...props} />;
}
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return <AvatarPrimitive.Fallback data-slot="avatar-fallback" className={[_styles.$3, className]} {...props} />;
}
export { Avatar, AvatarImage, AvatarFallback };
const _styles = _stylex.create({
  $1: {
    position: "relative",
    display: "flex",
    width: "2.5rem",
    height: "2.5rem",
    flexShrink: "0",
    overflow: "hidden",
    borderRadius: "3.40282e38px"
  },
  $2: {
    aspectRatio: "1",
    width: "100%",
    height: "100%"
  },
  $3: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3.40282e38px"
  }
});