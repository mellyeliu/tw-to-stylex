"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog@1.1.6";
import { XIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
function Sheet({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}
function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}
function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}
function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}
function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return <SheetPrimitive.Overlay data-slot="sheet-overlay" className={[_styles.$1, className]} {...props} />;
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content data-slot="sheet-content" className={[_styles.$2, side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className]} {...props}>
        {children}
        <SheetPrimitive.Close {..._stylex.props(_styles.$3)}>
          <XIcon {..._stylex.props(_styles.$4)} />
          <span {..._stylex.props(_styles.$5)}>Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>;
}
function SheetHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="sheet-header" {..._stylex.props(_styles.$6, className)} {...props} />;
}
function SheetFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="sheet-footer" {..._stylex.props(_styles.$7, className)} {...props} />;
}
function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return <SheetPrimitive.Title data-slot="sheet-title" className={[_styles.$8, className]} {...props} />;
}
function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return <SheetPrimitive.Description data-slot="sheet-description" className={[_styles.$9, className]} {...props} />;
}
export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
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
    flexDirection: "column",
    gap: "1rem",
    "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a)",
    transitionProperty: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  },
  $3: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    opacity: {
      default: ".7",
      ":hover": "1"
    },
    transitionProperty: "opacity",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-ring-shadow": {
      default: null,
      ":focus": " 0 0 0 calc(2px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    },
    "--tw-ring-offset-width": {
      default: null,
      ":focus": "2px"
    },
    "--tw-ring-offset-shadow": {
      default: null,
      ":focus": " 0 0 0 2px #fff"
    },
    "--tw-outline-style": {
      default: null,
      ":focus": "none"
    },
    outlineStyle: {
      default: null,
      ":focus": "none"
    },
    outlineOffset: {
      default: null,
      "@media (forced-colors: active)": {
        default: null,
        ":focus": "2px"
      }
    },
    outline: {
      default: null,
      "@media (forced-colors: active)": {
        default: null,
        ":focus": "2px solid #0000"
      }
    },
    pointerEvents: {
      default: null,
      ":disabled": "none"
    }
  },
  $4: {
    width: "1rem",
    height: "1rem"
  },
  $5: {
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
  $6: {
    display: "flex",
    flexDirection: "column",
    gap: ".375rem",
    padding: "1rem"
  },
  $7: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    padding: "1rem"
  },
  $8: {
    fontWeight: "600"
  },
  $9: {
    fontSize: ".875rem",
    lineHeight: "1.25rem"
  }
});