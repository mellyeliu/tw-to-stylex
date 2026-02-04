"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group@1.1.2";
import { type VariantProps } from "class-variance-authority@0.7.1";
import { cn } from "./utils";
import { toggleVariants } from "./toggle";
const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default"
});
function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return <ToggleGroupPrimitive.Root data-slot="toggle-group" data-variant={variant} data-size={size} className={[_styles.$1, className]} {...props}>
      <ToggleGroupContext.Provider value={{
      variant,
      size
    }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>;
}
function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);
  return <ToggleGroupPrimitive.Item data-slot="toggle-group-item" data-variant={context.variant || variant} data-size={context.size || size} className={[toggleVariants({
    variant: context.variant || variant,
    size: context.size || size
  }), _styles.$2, className]} {...props}>
      {children}
    </ToggleGroupPrimitive.Item>;
}
export { ToggleGroup, ToggleGroupItem };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    borderRadius: ".375rem"
  },
  $2: {
    minWidth: "0",
    flex: "1",
    flexShrink: "0",
    borderRadius: "0",
    "--tw-shadow": "0 0 #0000",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000",
    borderTopLeftRadius: {
      default: null,
      ":first-child": ".375rem"
    },
    borderBottomLeftRadius: {
      default: null,
      ":first-child": ".375rem"
    },
    borderTopRightRadius: {
      default: null,
      ":last-child": ".375rem"
    },
    borderBottomRightRadius: {
      default: null,
      ":last-child": ".375rem"
    },
    zIndex: {
      default: null,
      ":focus": "10",
      ":focus-visible": "10"
    }
  }
});