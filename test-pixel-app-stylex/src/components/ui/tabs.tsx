"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs@1.1.3";
import { cn } from "./utils";
function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={[_styles.$1, className]} {...props} />;
}
function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return <TabsPrimitive.List data-slot="tabs-list" className={[_styles.$2, className]} {...props} />;
}
function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return <TabsPrimitive.Trigger data-slot="tabs-trigger" className={[_styles.$3, className]} {...props} />;
}
function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content data-slot="tabs-content" className={[_styles.$4, className]} {...props} />;
}
export { Tabs, TabsList, TabsTrigger, TabsContent };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem"
  },
  $2: {
    display: "inline-flex",
    height: "2.25rem",
    width: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ".75rem",
    padding: "3px"
  },
  $3: {
    display: "inline-flex",
    height: "calc(100% - 1px)",
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    gap: ".375rem",
    borderRadius: ".75rem",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#0000",
    paddingInline: ".5rem",
    paddingBlock: ".25rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: "500",
    whiteSpace: "nowrap",
    transitionProperty: "color, box-shadow",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(3px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    },
    outlineStyle: {
      default: null,
      ":focus-visible": "solid"
    },
    outlineWidth: {
      default: null,
      ":focus-visible": "1px"
    },
    pointerEvents: {
      default: null,
      ":disabled": "none"
    },
    opacity: {
      default: null,
      ":disabled": ".5"
    }
  },
  $4: {
    flex: "1",
    "--tw-outline-style": "none",
    outlineStyle: "none"
  }
});