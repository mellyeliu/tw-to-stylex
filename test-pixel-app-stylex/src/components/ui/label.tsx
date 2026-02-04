"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label@2.1.2";
import { cn } from "./utils";
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return <LabelPrimitive.Root data-slot="label" className={[_styles.$1, className]} {...props} />;
}
export { Label };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
    fontSize: ".875rem",
    lineHeight: "1",
    fontWeight: "500",
    WebkitUserSelect: "none",
    userSelect: "none",
    pointerEvents: {
      default: null,
      ":is(:where(.group)[data-disabled=\"true\"] *)": "none"
    },
    opacity: {
      default: null,
      ":is(:where(.group)[data-disabled=\"true\"] *)": ".5",
      [_stylex.when.siblingBefore(":disabled")]: ".5"
    },
    cursor: {
      default: null,
      [_stylex.when.siblingBefore(":disabled")]: "not-allowed"
    }
  }
});