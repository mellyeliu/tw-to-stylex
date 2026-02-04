import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu@1.2.5";
import { cva } from "class-variance-authority@0.7.1";
import { ChevronDownIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return <NavigationMenuPrimitive.Root data-slot="navigation-menu" data-viewport={viewport} className={[_styles.$1, className]} {...props}>
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>;
}
function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return <NavigationMenuPrimitive.List data-slot="navigation-menu-list" className={[_styles.$2, className]} {...props} />;
}
function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return <NavigationMenuPrimitive.Item data-slot="navigation-menu-item" className={[_styles.$3, className]} {...props} />;
}
const navigationMenuTriggerStyle = cva("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1");
function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return <NavigationMenuPrimitive.Trigger data-slot="navigation-menu-trigger" className={[navigationMenuTriggerStyle(), _styles.$4, className]} {...props}>
      {children}{" "}
      <ChevronDownIcon {..._stylex.props(_styles.$5)} aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>;
}
function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return <NavigationMenuPrimitive.Content data-slot="navigation-menu-content" className={[_styles.$6, _styles.$7, className]} {...props} />;
}
function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return <div {..._stylex.props(_styles.$8)}>
      <NavigationMenuPrimitive.Viewport data-slot="navigation-menu-viewport" className={[_styles.$9, className]} {...props} />
    </div>;
}
function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return <NavigationMenuPrimitive.Link data-slot="navigation-menu-link" className={[_styles.$10, className]} {...props} />;
}
function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return <NavigationMenuPrimitive.Indicator data-slot="navigation-menu-indicator" className={[_styles.$11, className]} {...props}>
      <div {..._stylex.props(_styles.$12)} />
    </NavigationMenuPrimitive.Indicator>;
}
export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport, navigationMenuTriggerStyle };
const _styles = _stylex.create({
  $1: {
    position: "relative",
    display: "flex",
    maxWidth: "max-content",
    flex: "1",
    alignItems: "center",
    justifyContent: "center"
  },
  $2: {
    display: "flex",
    flex: "1",
    listStyleType: "none",
    alignItems: "center",
    justifyContent: "center",
    gap: ".25rem"
  },
  $3: {
    position: "relative"
  },
  $4: {},
  $5: {
    position: "relative",
    top: "1px",
    marginLeft: ".25rem",
    width: ".75rem",
    height: ".75rem",
    transitionProperty: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".3s",
    rotate: {
      default: null,
      ":is(:where(.group)[data-state=\"open\"] *)": "180deg"
    }
  },
  $6: {
    top: "0",
    left: "0",
    width: {
      default: "100%",
      "@media (width >= 48rem)": "auto"
    },
    padding: ".5rem",
    paddingRight: ".625rem",
    position: {
      default: null,
      "@media (width >= 48rem)": "absolute"
    }
  },
  $7: {},
  $8: {
    position: "absolute",
    top: "100%",
    left: "0",
    isolation: "isolate",
    zIndex: "50",
    display: "flex",
    justifyContent: "center"
  },
  $9: {
    position: "relative",
    marginTop: ".375rem",
    height: "var(--radix-navigation-menu-viewport-height)",
    width: {
      default: "100%",
      "@media (width >= 48rem)": "var(--radix-navigation-menu-viewport-width)"
    },
    overflow: "hidden",
    borderRadius: ".375rem",
    borderStyle: "solid",
    borderWidth: "1px",
    "--tw-shadow": "0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a)"
  },
  $10: {
    display: "flex",
    flexDirection: "column",
    gap: ".25rem",
    borderRadius: ".125rem",
    padding: ".5rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-outline-style": "none",
    outlineStyle: {
      default: "none",
      ":focus-visible": "solid"
    },
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(3px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    },
    outlineWidth: {
      default: null,
      ":focus-visible": "1px"
    }
  },
  $11: {
    top: "100%",
    zIndex: "1",
    display: "flex",
    height: ".375rem",
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden"
  },
  $12: {
    position: "relative",
    top: "60%",
    height: ".5rem",
    width: ".5rem",
    rotate: "45deg",
    borderTopLeftRadius: ".125rem",
    "--tw-shadow": "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a)"
  }
});