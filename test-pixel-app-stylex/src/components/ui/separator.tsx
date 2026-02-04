"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator@1.1.2";
import { cn } from "./utils";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return <SeparatorPrimitive.Root data-slot="separator-root" decorative={decorative} orientation={orientation} className={[_styles.$1, className]} {...props} />;
}
export { Separator };
const _styles = _stylex.create({
  $1: {
    flexShrink: "0"
  }
});