import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import { cn } from "./utils";
function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return <textarea data-slot="textarea" {..._stylex.props(_styles.$1, className)} {...props} />;
}
export { Textarea };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    fieldSizing: "content",
    minHeight: "4rem",
    width: "100%",
    resize: "none",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    paddingInline: ".75rem",
    paddingBlock: ".5rem",
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
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(3px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    },
    cursor: {
      default: null,
      ":disabled": "not-allowed"
    },
    opacity: {
      default: null,
      ":disabled": ".5"
    }
  }
});