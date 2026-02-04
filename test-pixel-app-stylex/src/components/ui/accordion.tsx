"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion@1.2.3";
import { ChevronDownIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}
function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={[_styles.$1, className]} {...props} />;
}
function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return <AccordionPrimitive.Header {..._stylex.props(_styles.$2)}>
      <AccordionPrimitive.Trigger data-slot="accordion-trigger" className={[_styles.$3, className]} {...props}>
        {children}
        <ChevronDownIcon {..._stylex.props(_styles.$4)} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>;
}
function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return <AccordionPrimitive.Content data-slot="accordion-content" {..._stylex.props(_styles.$5)} {...props}>
      <div {..._stylex.props(_styles.$6, className)}>{children}</div>
    </AccordionPrimitive.Content>;
}
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
const _styles = _stylex.create({
  $1: {
    borderBottomStyle: {
      default: "solid",
      ":last-child": "solid"
    },
    borderBottomWidth: {
      default: "1px",
      ":last-child": "0"
    }
  },
  $2: {
    display: "flex"
  },
  $3: {
    display: "flex",
    flex: "1",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "1rem",
    borderRadius: ".375rem",
    paddingBlock: "1rem",
    textAlign: "left",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: "500",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    textDecorationLine: {
      default: null,
      ":hover": "underline"
    },
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(3px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
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
    pointerEvents: "none",
    width: "1rem",
    height: "1rem",
    flexShrink: "0",
    "--tw-translate-y": ".125rem",
    translate: "0 .125rem",
    transitionProperty: "transform, translate, scale, rotate",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".2s"
  },
  $5: {
    overflow: "hidden",
    fontSize: ".875rem",
    lineHeight: "1.25rem"
  },
  $6: {
    paddingTop: "0",
    paddingBottom: "1rem"
  }
});