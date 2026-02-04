import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { ChevronRight, MoreHorizontal } from "lucide-react@0.487.0";
import { cn } from "./utils";
function Breadcrumb({
  ...props
}: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}
function BreadcrumbList({
  className,
  ...props
}: React.ComponentProps<"ol">) {
  return <ol data-slot="breadcrumb-list" {..._stylex.props(_styles.$1, className)} {...props} />;
}
function BreadcrumbItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li data-slot="breadcrumb-item" {..._stylex.props(_styles.$2, className)} {...props} />;
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";
  return <Comp data-slot="breadcrumb-link" className={[_styles.$3, className]} {...props} />;
}
function BreadcrumbPage({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" {..._stylex.props(_styles.$4, className)} {...props} />;
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" {..._stylex.props(_styles.$5, className)} {...props}>
      {children ?? <ChevronRight />}
    </li>;
}
function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <span data-slot="breadcrumb-ellipsis" role="presentation" aria-hidden="true" {..._stylex.props(_styles.$6, className)} {...props}>
      <MoreHorizontal {..._stylex.props(_styles.$7)} />
      <span {..._stylex.props(_styles.$8)}>More</span>
    </span>;
}
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: {
      default: ".375rem",
      "@media (width >= 40rem)": ".625rem"
    },
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    overflowWrap: "break-word"
  },
  $2: {
    display: "inline-flex",
    alignItems: "center",
    gap: ".375rem"
  },
  $3: {
    transitionProperty: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  },
  $4: {
    fontWeight: "400"
  },
  $5: {},
  $6: {
    display: "flex",
    width: "2.25rem",
    height: "2.25rem",
    alignItems: "center",
    justifyContent: "center"
  },
  $7: {
    width: "1rem",
    height: "1rem"
  },
  $8: {
    clipPath: "inset(50%)",
    whiteSpace: "nowrap",
    borderWidth: "0",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0",
    position: "absolute",
    overflow: "hidden"
  }
});