"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { VariantProps, cva } from "class-variance-authority@0.7.1";
import { PanelLeftIcon } from "lucide-react@0.487.0";
import { useIsMobile } from "./use-mobile";
import { cn } from "./utils";
import { Button } from "./button";
import { Input } from "./input";
import { Separator } from "./separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./sheet";
import { Skeleton } from "./skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};
const SidebarContext = React.createContext<SidebarContextProps | null>(null);
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback((value: boolean | ((value: boolean) => boolean)) => {
    const openState = typeof value === "function" ? value(open) : value;
    if (setOpenProp) {
      setOpenProp(openState);
    } else {
      _setOpen(openState);
    }

    // This sets the cookie to keep the sidebar state.
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }, [setOpenProp, open]);

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile(open => !open) : setOpen(open => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";
  const contextValue = React.useMemo<SidebarContextProps>(() => ({
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar
  }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
  return <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div data-slot="sidebar-wrapper" style={{
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      } as React.CSSProperties} {..._stylex.props(_styles.$1, className)} {...props}>
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>;
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}) {
  const {
    isMobile,
    state,
    openMobile,
    setOpenMobile
  } = useSidebar();
  if (collapsible === "none") {
    return <div data-slot="sidebar" {..._stylex.props(_styles.$2, className)} {...props}>
        {children}
      </div>;
  }
  if (isMobile) {
    return <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent data-sidebar="sidebar" data-slot="sidebar" data-mobile="true" {..._stylex.props(_styles.$3)} style={{
        "--sidebar-width": SIDEBAR_WIDTH_MOBILE
      } as React.CSSProperties} side={side}>
          <SheetHeader {..._stylex.props(_styles.$4)}>
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div {..._stylex.props(_styles.$5)}>{children}</div>
        </SheetContent>
      </Sheet>;
  }
  return <div {..._stylex.props(_stylex.defaultMarker(), _styles.$6)} data-state={state} data-collapsible={state === "collapsed" ? collapsible : ""} data-variant={variant} data-side={side} data-slot="sidebar">
      {/* This is what handles the sidebar gap on desktop */}
      <div data-slot="sidebar-gap" {..._stylex.props(_styles.$7, _styles.$8, _styles.$9, variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")} />
      <div data-slot="sidebar-container" {..._stylex.props(_styles.$10, side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
    // Adjust the padding for floating and inset variants.
    variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className)} {...props}>
        <div data-sidebar="sidebar" data-slot="sidebar-inner" {..._stylex.props(_styles.$11)}>
          {children}
        </div>
      </div>
    </div>;
}
function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const {
    toggleSidebar
  } = useSidebar();
  return <Button data-sidebar="trigger" data-slot="sidebar-trigger" variant="ghost" size="icon" className={[_styles.$12, className]} onClick={event => {
    onClick?.(event);
    toggleSidebar();
  }} {...props}>
      <PanelLeftIcon />
      <span {..._stylex.props(_styles.$4)}>Toggle Sidebar</span>
    </Button>;
}
function SidebarRail({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const {
    toggleSidebar
  } = useSidebar();
  return <button data-sidebar="rail" data-slot="sidebar-rail" aria-label="Toggle Sidebar" tabIndex={-1} onClick={toggleSidebar} title="Toggle Sidebar" {..._stylex.props(_styles.$13, _styles.$14, _styles.$15, _styles.$16, _styles.$17, _styles.$18, className)} {...props} />;
}
function SidebarInset({
  className,
  ...props
}: React.ComponentProps<"main">) {
  return <main data-slot="sidebar-inset" {..._stylex.props(_styles.$19, _styles.$20, className)} {...props} />;
}
function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return <Input data-slot="sidebar-input" data-sidebar="input" className={[_styles.$21, className]} {...props} />;
}
function SidebarHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="sidebar-header" data-sidebar="header" {..._stylex.props(_styles.$22, className)} {...props} />;
}
function SidebarFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="sidebar-footer" data-sidebar="footer" {..._stylex.props(_styles.$22, className)} {...props} />;
}
function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return <Separator data-slot="sidebar-separator" data-sidebar="separator" className={[_styles.$23, className]} {...props} />;
}
function SidebarContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="sidebar-content" data-sidebar="content" {..._stylex.props(_styles.$24, className)} {...props} />;
}
function SidebarGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="sidebar-group" data-sidebar="group" {..._stylex.props(_styles.$25, className)} {...props} />;
}
function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";
  return <Comp data-slot="sidebar-group-label" data-sidebar="group-label" className={[_styles.$26, _styles.$27, className]} {...props} />;
}
function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-slot="sidebar-group-action" data-sidebar="group-action" className={[_styles.$28, _styles.$29, _styles.$30, className]} {...props} />;
}
function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="sidebar-group-content" data-sidebar="group-content" {..._stylex.props(_styles.$31, className)} {...props} />;
}
function SidebarMenu({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return <ul data-slot="sidebar-menu" data-sidebar="menu" {..._stylex.props(_styles.$32, className)} {...props} />;
}
function SidebarMenuItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li data-slot="sidebar-menu-item" data-sidebar="menu-item" {..._stylex.props(_styles.$33, className)} {...props} />;
}
const sidebarMenuButtonVariants = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
  variants: {
    variant: {
      default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
    },
    size: {
      default: "h-8 text-sm",
      sm: "h-7 text-xs",
      lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button";
  const {
    isMobile,
    state
  } = useSidebar();
  const button = <Comp data-slot="sidebar-menu-button" data-sidebar="menu-button" data-size={size} data-active={isActive} className={[sidebarMenuButtonVariants({
    variant,
    size
  }), className]} {...props} />;
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
    </Tooltip>;
}
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  showOnHover?: boolean;
}) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-slot="sidebar-menu-action" data-sidebar="menu-action" className={[_styles.$34, _styles.$29, _styles.$35, _styles.$36, _styles.$37, _styles.$30, showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0", className]} {...props} />;
}
function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="sidebar-menu-badge" data-sidebar="menu-badge" {..._stylex.props(_styles.$38, _styles.$39, _styles.$35, _styles.$36, _styles.$37, _styles.$30, className)} {...props} />;
}
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean;
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return <div data-slot="sidebar-menu-skeleton" data-sidebar="menu-skeleton" {..._stylex.props(_styles.$40, className)} {...props}>
      {showIcon && <Skeleton {..._stylex.props(_styles.$41)} data-sidebar="menu-skeleton-icon" />}
      <Skeleton {..._stylex.props(_styles.$42)} data-sidebar="menu-skeleton-text" style={{
      "--skeleton-width": width
    } as React.CSSProperties} />
    </div>;
}
function SidebarMenuSub({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return <ul data-slot="sidebar-menu-sub" data-sidebar="menu-sub" {..._stylex.props(_styles.$43, _styles.$30, className)} {...props} />;
}
function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li data-slot="sidebar-menu-sub-item" data-sidebar="menu-sub-item" {..._stylex.props(_styles.$44, className)} {...props} />;
}
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
}) {
  const Comp = asChild ? Slot : "a";
  return <Comp data-slot="sidebar-menu-sub-button" data-sidebar="menu-sub-button" data-size={size} data-active={isActive} className={[_styles.$45, _styles.$46, size === "sm" && "text-xs", size === "md" && "text-sm", _styles.$30, className]} {...props} />;
}
export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    minHeight: "100svh",
    width: "100%"
  },
  $2: {
    display: "flex",
    height: "100%",
    width: "var(--sidebar-width)",
    flexDirection: "column"
  },
  $3: {
    width: "var(--sidebar-width)",
    padding: "0"
  },
  $4: {
    clipPath: "inset(50%)",
    whiteSpace: "nowrap",
    borderWidth: "0",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0",
    position: "absolute",
    overflow: "hidden"
  },
  $5: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column"
  },
  $6: {
    display: {
      default: "none",
      "@media (width >= 48rem)": "block"
    }
  },
  $7: {
    position: "relative",
    width: "var(--sidebar-width)",
    backgroundColor: "#0000",
    transitionProperty: "width",
    transitionTimingFunction: "linear",
    transitionDuration: ".2s"
  },
  $8: {
    width: {
      default: null,
      ":is(:where(.group)[data-collapsible=\"offcanvas\"] *)": "0"
    }
  },
  $9: {
    rotate: {
      default: null,
      ":is(:where(.group)[data-side=\"right\"] *)": "180deg"
    }
  },
  $10: {
    position: "fixed",
    insetBlock: "0",
    zIndex: "10",
    display: {
      default: "none",
      "@media (width >= 48rem)": "flex"
    },
    height: "100svh",
    width: "var(--sidebar-width)",
    transitionProperty: "left, right, width",
    transitionTimingFunction: "linear",
    transitionDuration: ".2s"
  },
  $11: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    borderRadius: {
      default: null,
      ":is(:where(.group)[data-variant=\"floating\"] *)": ".5rem"
    },
    borderStyle: {
      default: null,
      ":is(:where(.group)[data-variant=\"floating\"] *)": "solid"
    },
    borderWidth: {
      default: null,
      ":is(:where(.group)[data-variant=\"floating\"] *)": "1px"
    },
    "--tw-shadow": {
      default: null,
      ":is(:where(.group)[data-variant=\"floating\"] *)": "0 1px 2px 0 #0000000d"
    },
    boxShadow: {
      default: null,
      ":is(:where(.group)[data-variant=\"floating\"] *)": "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 2px 0 var(--tw-shadow-color, #0000000d)"
    }
  },
  $12: {
    width: "1.75rem",
    height: "1.75rem"
  },
  $13: {
    position: {
      default: "absolute",
      ":after": "absolute"
    },
    insetBlock: {
      default: "0",
      ":after": "0"
    },
    zIndex: "20",
    display: {
      default: "none",
      "@media (width >= 40rem)": "flex"
    },
    width: {
      default: "1rem",
      ":after": "2px"
    },
    "--tw-translate-x": "calc(calc(1/2 * 100%) * -1)",
    translate: "calc(calc(1/2 * 100%) * -1) 0",
    transitionProperty: "all",
    transitionTimingFunction: "linear",
    transitionDuration: ".15s",
    right: {
      default: null,
      ":is(:where(.group)[data-side=\"left\"] *)": "-1rem"
    },
    left: {
      default: null,
      ":is(:where(.group)[data-side=\"right\"] *)": "0",
      ":after": "50%"
    },
    content: {
      default: null,
      ":after": "\"\""
    }
  },
  $14: {
    cursor: {
      default: null,
      ":where([data-side=\"left\"])": "w-resize",
      ":where([data-side=\"right\"])": "e-resize"
    }
  },
  $15: {},
  $16: {
    "--tw-translate-x": {
      default: null,
      ":is(:where(.group)[data-collapsible=\"offcanvas\"] *)": "0px"
    },
    translate: {
      default: null,
      ":is(:where(.group)[data-collapsible=\"offcanvas\"] *)": "0px 0"
    }
  },
  $17: {},
  $18: {},
  $19: {
    position: "relative",
    display: "flex",
    width: "100%",
    flex: "1",
    flexDirection: "column"
  },
  $20: {
    margin: {
      default: null,
      "@media (width >= 48rem)": {
        default: null,
        ":is(:where(.peer)[data-variant=\"inset\"] ~ *)": ".5rem"
      }
    },
    marginLeft: {
      default: null,
      "@media (width >= 48rem)": {
        default: null,
        ":is(:where(.peer)[data-variant=\"inset\"] ~ *)": {
          default: "0",
          ":is(:where(.peer)[data-state=\"collapsed\"] ~ *)": ".5rem"
        }
      }
    },
    borderRadius: {
      default: null,
      "@media (width >= 48rem)": {
        default: null,
        ":is(:where(.peer)[data-variant=\"inset\"] ~ *)": ".75rem"
      }
    },
    "--tw-shadow": {
      default: null,
      "@media (width >= 48rem)": {
        default: null,
        ":is(:where(.peer)[data-variant=\"inset\"] ~ *)": "0 1px 2px 0 #0000000d"
      }
    },
    boxShadow: {
      default: null,
      "@media (width >= 48rem)": {
        default: null,
        ":is(:where(.peer)[data-variant=\"inset\"] ~ *)": "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 2px 0 var(--tw-shadow-color, #0000000d)"
      }
    }
  },
  $21: {
    height: "2rem",
    width: "100%",
    "--tw-shadow": "0 0 #0000",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000"
  },
  $22: {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    padding: ".5rem"
  },
  $23: {
    marginInline: ".5rem",
    width: "auto"
  },
  $24: {
    display: "flex",
    minHeight: "0",
    flex: "1",
    flexDirection: "column",
    gap: ".5rem",
    overflow: {
      default: "auto",
      ":is(:where(.group)[data-collapsible=\"icon\"] *)": "hidden"
    }
  },
  $25: {
    position: "relative",
    display: "flex",
    width: "100%",
    minWidth: "0",
    flexDirection: "column",
    padding: ".5rem"
  },
  $26: {
    display: "flex",
    height: "2rem",
    flexShrink: "0",
    alignItems: "center",
    borderRadius: ".375rem",
    paddingInline: ".5rem",
    fontSize: ".75rem",
    lineHeight: "1rem",
    fontWeight: "500",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    outlineOffset: {
      default: null,
      "@media (forced-colors: active)": "2px"
    },
    outline: {
      default: null,
      "@media (forced-colors: active)": "2px solid #0000"
    },
    transitionProperty: "margin, opacity",
    transitionTimingFunction: "linear",
    transitionDuration: ".2s",
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(2px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    }
  },
  $27: {
    marginTop: {
      default: null,
      ":is(:where(.group)[data-collapsible=\"icon\"] *)": "-2rem"
    },
    opacity: {
      default: null,
      ":is(:where(.group)[data-collapsible=\"icon\"] *)": "0"
    }
  },
  $28: {
    position: "absolute",
    top: ".875rem",
    right: ".75rem",
    display: "flex",
    aspectRatio: "1",
    width: "1.25rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ".375rem",
    padding: "0",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    outlineOffset: {
      default: null,
      "@media (forced-colors: active)": "2px"
    },
    outline: {
      default: null,
      "@media (forced-colors: active)": "2px solid #0000"
    },
    transitionProperty: "transform, translate, scale, rotate",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(2px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    }
  },
  $29: {
    content: {
      default: null,
      ":after": "\"\""
    },
    position: {
      default: null,
      ":after": "absolute"
    },
    inset: {
      default: null,
      ":after": "-.5rem"
    }
  },
  $30: {
    display: {
      default: null,
      ":is(:where(.group)[data-collapsible=\"icon\"] *)": "none"
    }
  },
  $31: {
    width: "100%",
    fontSize: ".875rem",
    lineHeight: "1.25rem"
  },
  $32: {
    display: "flex",
    width: "100%",
    minWidth: "0",
    flexDirection: "column",
    gap: ".25rem"
  },
  $33: {
    position: "relative"
  },
  $34: {
    position: "absolute",
    top: ".375rem",
    right: ".25rem",
    display: "flex",
    aspectRatio: "1",
    width: "1.25rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ".375rem",
    padding: "0",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    outlineOffset: {
      default: null,
      "@media (forced-colors: active)": "2px"
    },
    outline: {
      default: null,
      "@media (forced-colors: active)": "2px solid #0000"
    },
    transitionProperty: "transform, translate, scale, rotate",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(2px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    }
  },
  $35: {},
  $36: {},
  $37: {},
  $38: {
    pointerEvents: "none",
    position: "absolute",
    right: ".25rem",
    display: "flex",
    height: "1.25rem",
    minWidth: "1.25rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ".375rem",
    paddingInline: ".25rem",
    fontSize: ".75rem",
    lineHeight: "1rem",
    fontWeight: "500",
    "--tw-numeric-spacing": "tabular-nums",
    fontVariantNumeric: "tabular-nums",
    WebkitUserSelect: "none",
    userSelect: "none"
  },
  $39: {},
  $40: {
    display: "flex",
    height: "2rem",
    alignItems: "center",
    gap: ".5rem",
    borderRadius: ".375rem",
    paddingInline: ".5rem"
  },
  $41: {
    width: "1rem",
    height: "1rem",
    borderRadius: ".375rem"
  },
  $42: {
    height: "1rem",
    maxWidth: "var(--skeleton-width)",
    flex: "1"
  },
  $43: {
    marginInline: ".875rem",
    display: "flex",
    minWidth: "0",
    "--tw-translate-x": "1px",
    translate: "1px 0",
    flexDirection: "column",
    gap: ".25rem",
    borderLeftStyle: "solid",
    borderLeftWidth: "1px",
    paddingInline: ".625rem",
    paddingBlock: ".125rem"
  },
  $44: {
    position: "relative"
  },
  $45: {
    display: "flex",
    height: "1.75rem",
    minWidth: "0",
    "--tw-translate-x": "calc(1px * -1)",
    translate: "calc(1px * -1) 0",
    alignItems: "center",
    gap: ".5rem",
    overflow: "hidden",
    borderRadius: ".375rem",
    paddingInline: ".5rem",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    outlineOffset: {
      default: null,
      "@media (forced-colors: active)": "2px"
    },
    outline: {
      default: null,
      "@media (forced-colors: active)": "2px solid #0000"
    },
    "--tw-ring-shadow": {
      default: null,
      ":focus-visible": " 0 0 0 calc(2px + 0) currentcolor"
    },
    boxShadow: {
      default: null,
      ":focus-visible": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    },
    pointerEvents: {
      default: null,
      ":disabled": "none"
    },
    opacity: {
      default: null,
      ":disabled": ".5"
    }
  },
  $46: {}
});