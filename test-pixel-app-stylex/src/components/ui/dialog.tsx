"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog@1.1.6";
import { XIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}
function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}
function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}
function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}
function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return <DialogPrimitive.Overlay data-slot="dialog-overlay" className={[_styles.$1, className]} {...props} />;
}
function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content data-slot="dialog-content" className={[_styles.$2, className]} {...props}>
        {children}
        <DialogPrimitive.Close {..._stylex.props(_styles.$3)}>
          <XIcon />
          <span {..._stylex.props(_styles.$4)}>Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>;
}
function DialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="dialog-header" {..._stylex.props(_styles.$5, className)} {...props} />;
}
function DialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="dialog-footer" {..._stylex.props(_styles.$6, className)} {...props} />;
}
function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title data-slot="dialog-title" className={[_styles.$7, className]} {...props} />;
}
function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description data-slot="dialog-description" className={[_styles.$8, className]} {...props} />;
}
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger };
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
  $5: {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    textAlign: {
      default: "center",
      "@media (width >= 40rem)": "left"
    }
  },
  $6: {
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
  $7: {
    fontSize: "1.125rem",
    lineHeight: "1",
    fontWeight: "600"
  },
  $8: {
    fontSize: ".875rem",
    lineHeight: "1.25rem"
  }
});