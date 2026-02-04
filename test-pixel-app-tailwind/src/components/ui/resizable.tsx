"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import { GripVerticalIcon } from "lucide-react@0.487.0";
import * as ResizablePrimitive from "react-resizable-panels@2.1.7";
import { cn } from "./utils";
function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return <ResizablePrimitive.PanelGroup data-slot="resizable-panel-group" className={[_styles.$1, className]} {...props} />;
}
function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}
function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) {
  return <ResizablePrimitive.PanelResizeHandle data-slot="resizable-handle" className={[_styles.$2, className]} {...props}>
      {withHandle && <div {..._stylex.props(_styles.$3)}>
          <GripVerticalIcon {..._stylex.props(_styles.$4)} />
        </div>}
    </ResizablePrimitive.PanelResizeHandle>;
}
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    height: "100%",
    width: "100%"
  },
  $2: {
    position: {
      default: "relative",
      ":after": "absolute"
    },
    display: "flex",
    width: {
      default: "1px",
      ":after": ".25rem"
    },
    alignItems: "center",
    justifyContent: "center",
    content: {
      default: null,
      ":after": "\"\""
    },
    insetBlock: {
      default: null,
      ":after": "0"
    },
    left: {
      default: null,
      ":after": "50%"
    },
    "--tw-translate-x": {
      default: null,
      ":after": "calc(calc(1/2 * 100%) * -1)"
    },
    translate: {
      default: null,
      ":after": "calc(calc(1/2 * 100%) * -1) 0"
    },
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(1px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    },
    "--tw-ring-offset-width": {
      default: null,
      ":focus-visible": "1px"
    },
    "--tw-ring-offset-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 1px #fff"
    },
    "--tw-outline-style": {
      default: null,
      ":focus-visible": "none"
    },
    outlineStyle: {
      default: null,
      ":focus-visible": "none"
    },
    outlineOffset: {
      default: null,
      "@media (forced-colors: active)": {
        default: null,
        ":focus-visible": "2px"
      }
    },
    outline: {
      default: null,
      "@media (forced-colors: active)": {
        default: null,
        ":focus-visible": "2px solid #0000"
      }
    }
  },
  $3: {
    zIndex: "10",
    display: "flex",
    height: "1rem",
    width: ".75rem",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: "1px"
  },
  $4: {
    width: ".625rem",
    height: ".625rem"
  }
});