"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import { cn } from "./utils";
function Table({
  className,
  ...props
}: React.ComponentProps<"table">) {
  return <div data-slot="table-container" {..._stylex.props(_styles.$1)}>
      <table data-slot="table" {..._stylex.props(_styles.$2, className)} {...props} />
    </div>;
}
function TableHeader({
  className,
  ...props
}: React.ComponentProps<"thead">) {
  return <thead data-slot="table-header" {..._stylex.props(_styles.$3, className)} {...props} />;
}
function TableBody({
  className,
  ...props
}: React.ComponentProps<"tbody">) {
  return <tbody data-slot="table-body" {..._stylex.props(_styles.$4, className)} {...props} />;
}
function TableFooter({
  className,
  ...props
}: React.ComponentProps<"tfoot">) {
  return <tfoot data-slot="table-footer" {..._stylex.props(_styles.$5, className)} {...props} />;
}
function TableRow({
  className,
  ...props
}: React.ComponentProps<"tr">) {
  return <tr data-slot="table-row" {..._stylex.props(_styles.$6, className)} {...props} />;
}
function TableHead({
  className,
  ...props
}: React.ComponentProps<"th">) {
  return <th data-slot="table-head" {..._stylex.props(_styles.$7, className)} {...props} />;
}
function TableCell({
  className,
  ...props
}: React.ComponentProps<"td">) {
  return <td data-slot="table-cell" {..._stylex.props(_styles.$8, className)} {...props} />;
}
function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return <caption data-slot="table-caption" {..._stylex.props(_styles.$9, className)} {...props} />;
}
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
const _styles = _stylex.create({
  $1: {
    position: "relative",
    width: "100%",
    overflowX: "auto"
  },
  $2: {
    width: "100%",
    captionSide: "bottom",
    fontSize: ".875rem",
    lineHeight: "1.25rem"
  },
  $3: {},
  $4: {},
  $5: {
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    fontWeight: "500"
  },
  $6: {
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    transitionProperty: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  },
  $7: {
    height: "2.5rem",
    paddingInline: ".5rem",
    textAlign: "left",
    verticalAlign: "middle",
    fontWeight: "500",
    whiteSpace: "nowrap",
    paddingRight: {
      default: null,
      ":has([role=\"checkbox\"])": "0"
    }
  },
  $8: {
    padding: ".5rem",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    paddingRight: {
      default: null,
      ":has([role=\"checkbox\"])": "0"
    }
  },
  $9: {
    marginTop: "1rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem"
  }
});