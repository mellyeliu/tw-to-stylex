import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
import { Button, buttonVariants } from "./button";
function Pagination({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return <nav role="navigation" aria-label="pagination" data-slot="pagination" {..._stylex.props(_styles.$1, className)} {...props} />;
}
function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return <ul data-slot="pagination-content" {..._stylex.props(_styles.$2, className)} {...props} />;
}
function PaginationItem({
  ...props
}: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}
type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> & React.ComponentProps<"a">;
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return <a aria-current={isActive ? "page" : undefined} data-slot="pagination-link" data-active={isActive} {..._stylex.props(buttonVariants({
    variant: isActive ? "outline" : "ghost",
    size
  }), className)} {...props} />;
}
function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return <PaginationLink aria-label="Go to previous page" size="default" className={[_styles.$3, className]} {...props}>
      <ChevronLeftIcon />
      <span {..._stylex.props(_styles.$4)}>Previous</span>
    </PaginationLink>;
}
function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return <PaginationLink aria-label="Go to next page" size="default" className={[_styles.$5, className]} {...props}>
      <span {..._stylex.props(_styles.$4)}>Next</span>
      <ChevronRightIcon />
    </PaginationLink>;
}
function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <span aria-hidden data-slot="pagination-ellipsis" {..._stylex.props(_styles.$6, className)} {...props}>
      <MoreHorizontalIcon {..._stylex.props(_styles.$7)} />
      <span {..._stylex.props(_styles.$8)}>More pages</span>
    </span>;
}
export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis };
const _styles = _stylex.create({
  $1: {
    marginInline: "auto",
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  $2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: ".25rem"
  },
  $3: {
    gap: ".25rem",
    paddingInline: ".625rem",
    paddingLeft: {
      default: null,
      "@media (width >= 40rem)": ".625rem"
    }
  },
  $4: {
    display: {
      default: "none",
      "@media (width >= 40rem)": "block"
    }
  },
  $5: {
    gap: ".25rem",
    paddingInline: ".625rem",
    paddingRight: {
      default: null,
      "@media (width >= 40rem)": ".625rem"
    }
  },
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