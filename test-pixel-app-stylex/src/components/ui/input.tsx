import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import { cn } from "./utils";
function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return <input type={type} data-slot="input" {..._stylex.props(_styles.$1, _styles.$2, _styles.$3, className)} {...props} />;
}
export { Input };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    height: "2.25rem",
    width: "100%",
    minWidth: "0",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    paddingInline: ".75rem",
    paddingBlock: ".25rem",
    fontSize: {
      default: "1rem",
      "@media (width >= 48rem)": ".875rem"
    },
    lineHeight: {
      default: "1.5rem",
      "@media (width >= 48rem)": "1.25rem"
    },
    transitionProperty: "color, box-shadow",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    "::file-selector-button": {
      default: null,
      display: "inline-flex",
      height: "1.75rem",
      borderStyle: "solid",
      borderWidth: "0",
      backgroundColor: "#0000",
      fontSize: ".875rem",
      lineHeight: "1.25rem",
      "--tw-font-weight": "500",
      fontWeight: "500"
    },
    pointerEvents: {
      default: null,
      ":disabled": "none"
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
  $2: {
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(3px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    }
  },
  $3: {}
});