import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import { cn } from "./utils";
function Card({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="card" {..._stylex.props(_styles.$1, className)} {...props} />;
}
function CardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="card-header" {..._stylex.props(_styles.$2, className)} {...props} />;
}
function CardTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <h4 data-slot="card-title" {..._stylex.props(_styles.$3, className)} {...props} />;
}
function CardDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <p data-slot="card-description" {..._stylex.props(_styles.$4, className)} {...props} />;
}
function CardAction({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="card-action" {..._stylex.props(_styles.$5, className)} {...props} />;
}
function CardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="card-content" {..._stylex.props(_styles.$6, className)} {...props} />;
}
function CardFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="card-footer" {..._stylex.props(_styles.$7, className)} {...props} />;
}
export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    borderRadius: ".75rem",
    borderStyle: "solid",
    borderWidth: "1px"
  },
  $2: {
    container: "card-header / inline-size",
    display: "grid",
    gridAutoRows: "min-content",
    gridTemplateRows: "auto auto",
    alignItems: "flex-start",
    gap: ".375rem",
    paddingInline: "1.5rem",
    paddingTop: "1.5rem",
    gridTemplateColumns: {
      default: null,
      ":has([data-slot=\"card-action\"])": "1fr auto"
    }
  },
  $3: {
    lineHeight: "1"
  },
  $4: {},
  $5: {
    gridColumnStart: "2",
    gridRow: "span 2 / span 2",
    gridRowStart: "1",
    alignSelf: "flex-start",
    justifySelf: "flex-end"
  },
  $6: {
    paddingInline: "1.5rem"
  },
  $7: {
    display: "flex",
    alignItems: "center",
    paddingInline: "1.5rem",
    paddingBottom: "1.5rem"
  }
});