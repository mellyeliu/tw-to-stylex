import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";
import { cn } from "./utils";
const alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return <div data-slot="alert" role="alert" {..._stylex.props(alertVariants({
    variant
  }), className)} {...props} />;
}
function AlertTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="alert-title" {..._stylex.props(_styles.$1, className)} {...props} />;
}
function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="alert-description" {..._stylex.props(_styles.$2, className)} {...props} />;
}
export { Alert, AlertTitle, AlertDescription };
const _styles = _stylex.create({
  $1: {
    gridColumnStart: "2",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
    overflow: "hidden",
    minHeight: "1rem",
    fontWeight: "500"
  },
  $2: {
    gridColumnStart: "2",
    display: "grid",
    justifyItems: "start",
    gap: ".25rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem"
  }
});