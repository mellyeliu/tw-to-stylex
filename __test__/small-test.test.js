/**
 * @flow strict
 */

"use strict";

jest.autoMockOff();

import { tailwindToStylex } from "../src/index";

describe("tailwind-to-stylex small examples", () => {
  test("transforms simple example", async () => {
    const input = `
    function Component() {
      return <div className="flex bg-green-500 hover:bg-red-500 other" />
    }
    `;

    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
     "import * as _stylex from "@stylexjs/stylex";
     function Component() {
       return <div {..._stylex.props(_styles.$1)} />;
     }
     const _styles = _stylex.create({
       $1: {
         display: "flex",
         backgroundColor: {
           default: "#22c55e",
           ":hover": "#ef4444"
         }
       }
     });"
    `);
  });

  test("transforms example from Tailwind website", async () => {
    const input = `
      function Component() {
        return <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>;
      }
    `;
    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
     "import * as _stylex from "@stylexjs/stylex";
     function Component() {
       return <button {..._stylex.props(_styles.$1)}>Message</button>;
     }
     const _styles = _stylex.create({
       $1: {
         borderRadius: "3.40282e38px",
         borderStyle: "solid",
         borderWidth: "1px",
         borderColor: {
           default: "#e9d5ff",
           ":hover": "#0000"
         },
         paddingInline: "1rem",
         paddingBlock: ".25rem",
         fontSize: ".875rem",
         lineHeight: "1.25rem",
         "--tw-font-weight": "600",
         fontWeight: "600",
         color: {
           default: "#9333ea",
           ":hover": "#fff"
         },
         backgroundColor: {
           default: null,
           ":hover": "#9333ea"
         },
         "--tw-ring-shadow": {
           default: null,
           ":focus": " 0 0 0 calc(2px + 0) currentcolor"
         },
         boxShadow: {
           default: null,
           ":focus": "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
         },
         "--tw-ring-color": {
           default: null,
           ":focus": "#9333ea"
         },
         "--tw-ring-offset-width": {
           default: null,
           ":focus": "2px"
         },
         "--tw-ring-offset-shadow": {
           default: null,
           ":focus": " 0 0 0 2px #fff"
         },
         "--tw-outline-style": {
           default: null,
           ":focus": "none"
         },
         outlineStyle: {
           default: null,
           ":focus": "none"
         }
       }
     });"
    `);
  });

  test("transforms slightly more involved example", async () => {
    const input = `
    function Component() {
      return <div className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64" />
    }
    `;

    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
     "import * as _stylex from "@stylexjs/stylex";
     function Component() {
       return <div {..._stylex.props(_styles.$1)} />;
     }
     const _styles = _stylex.create({
       $1: {
         position: "relative",
         width: {
           default: "100%",
           "@media (width >= 48rem)": "10rem",
           "@media (width >= 64rem)": "16rem"
         },
         justifyContent: "flex-start",
         fontSize: ".875rem",
         lineHeight: "1.25rem",
         paddingRight: {
           default: null,
           "@media (width >= 40rem)": "3rem"
         }
       }
     });"
    `);
  });

  test("transforms tailwind being used and merged on custom components", async () => {
    const input = `
      const DrawerContent = ({ className, children, ...props }) => (
        <DrawerPrimitive.Portal>
          <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-zinc-950/60" />
          <DrawerPrimitive.Content
            ref={ref}
            className={cn(
              "fixed inset-x-0 bottom-0 z-50 mt-24 h-[96%] rounded-t-[10px] bg-background",
              className
            )}
            {...props}
          >
            <div className="absolute left-1/2 top-3 h-2 w-[100px] translate-x-[-50%] rounded-full bg-muted" />
            {children}
          </DrawerPrimitive.Content>
        </DrawerPrimitive.Portal>
      );
    `;
    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
     "import * as _stylex from "@stylexjs/stylex";
     const DrawerContent = ({
       className,
       children,
       ...props
     }) => <DrawerPrimitive.Portal>
               <DrawerPrimitive.Overlay className={_styles.$1} />
               <DrawerPrimitive.Content ref={ref} className={[_styles.$2, className]} {...props}>
                 <div {..._stylex.props(_styles.$3)} />
                 {children}
               </DrawerPrimitive.Content>
             </DrawerPrimitive.Portal>;
     const _styles = _stylex.create({
       $1: {
         position: "fixed",
         inset: "0",
         zIndex: "50",
         backgroundColor: "oklab(14.0765% .00119585 -.00421971 / .6)"
       },
       $2: {
         position: "fixed",
         insetInline: "0",
         bottom: "0",
         zIndex: "50",
         marginTop: "6rem",
         height: "96%",
         borderTopLeftRadius: "10px",
         borderTopRightRadius: "10px"
       },
       $3: {
         position: "absolute",
         top: ".75rem",
         left: "50%",
         height: ".5rem",
         width: "100px",
         "--tw-translate-x": "-50%",
         translate: "-50% 0",
         borderRadius: "3.40282e38px"
       }
     });"
    `);
  });
});

// ============================================================
// Conditional Expression Tests (new feature)
// ============================================================

describe("tailwind-to-stylex conditional expressions", () => {
  test("ternary operator in className", async () => {
    const input = `<div className={isActive ? "bg-blue-500" : "bg-gray-500"} />`;
    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
     "import * as _stylex from "@stylexjs/stylex";
     <div {..._stylex.props(isActive ? _styles.$1 : _styles.$2)} />;
     const _styles = _stylex.create({
       $1: {
         backgroundColor: "#3b82f6"
       },
       $2: {
         backgroundColor: "#6b7280"
       }
     });"
    `);
  });

  test("logical AND in className", async () => {
    const input = `<div className={isVisible && "flex"} />`;
    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
     "import * as _stylex from "@stylexjs/stylex";
     <div {..._stylex.props(isVisible && _styles.$1)} />;
     const _styles = _stylex.create({
       $1: {
         display: "flex"
       }
     });"
    `);
  });

  test("complex ternary with multiple classes", async () => {
    const input = `<button className={disabled ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"} />`;
    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
     "import * as _stylex from "@stylexjs/stylex";
     <button {..._stylex.props(disabled ? _styles.$1 : _styles.$2)} />;
     const _styles = _stylex.create({
       $1: {
         cursor: "not-allowed",
         opacity: ".5"
       },
       $2: {
         cursor: "pointer",
         opacity: "1"
       }
     });"
    `);
  });

  test("template literal with conditionals", async () => {
    const input =
      "<div className={`flex ${isColumn ? 'flex-col' : 'flex-row'}`} />";
    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
     "import * as _stylex from "@stylexjs/stylex";
     <div {..._stylex.props(_styles.$1, isColumn ? _styles.$2 : _styles.$3)} />;
     const _styles = _stylex.create({
       $1: {
         display: "flex"
       },
       $2: {
         flexDirection: "column"
       },
       $3: {
         flexDirection: "row"
       }
     });"
    `);
  });

  test("cn with static classes", async () => {
    const input = `<div className={cn("flex items-center", "p-4")} />`;
    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
     "import * as _stylex from "@stylexjs/stylex";
     <div {..._stylex.props(_styles.$1, _styles.$2)} />;
     const _styles = _stylex.create({
       $1: {
         display: "flex",
         alignItems: "center"
       },
       $2: {
         padding: "1rem"
       }
     });"
    `);
  });
});

// ============================================================
// Skipped Tests - Document unsupported features
// ============================================================

describe.skip("Not Supported - !important", () => {
  test("important modifier", async () => {
    const input = `<div className="!text-red-500" />`;
    // StyleX doesn't support !important
  });
});

describe.skip("Not Supported - Descendant Selectors", () => {
  test("direct child selector", async () => {
    const input = `<div className="[&>*]:p-2" />`;
    // StyleX atomic CSS doesn't support element relationships
  });

  test("descendant selector", async () => {
    const input = `<div className="[&_.child]:text-red-500" />`;
    // No descendant selectors in atomic CSS
  });

  test("sibling combinator", async () => {
    const input = `<div className="[&+div]:mt-4" />`;
    // No adjacent sibling selectors
  });
});

describe.skip("Not Supported - :has() selector", () => {
  test("has selector", async () => {
    const input = `<div className="has-[img]:p-0" />`;
    // :has() not supported in StyleX
  });
});

describe("Supported - group/peer with markers", () => {
  test("group hover", async () => {
    const input = `
    function Component() {
      return (
        <div className="group flex">
          <span className="group-hover:text-blue-500">Hover parent</span>
        </div>
      );
    }
    `;
    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
     "import * as _stylex from "@stylexjs/stylex";
     function Component() {
       return <div {..._stylex.props(_stylex.defaultMarker(), _styles.$1)}>
               <span {..._stylex.props(_styles.$2)}>Hover parent</span>
             </div>;
     }
     const _styles = _stylex.create({
       $1: {
         display: "flex"
       },
       $2: {
         color: {
           default: null,
           [_stylex.when.ancestor(":hover")]: "#3b82f6"
         }
       }
     });"
    `);
  });

  test("peer checked", async () => {
    const input = `
    function Component() {
      return (
        <div>
          <input className="peer" type="checkbox" />
          <label className="peer-checked:text-green-500">Check me</label>
        </div>
      );
    }
    `;
    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
     "import * as _stylex from "@stylexjs/stylex";
     function Component() {
       return <div>
               <input {..._stylex.props(_stylex.defaultMarker())} type="checkbox" />
               <label {..._stylex.props(_styles.$1)}>Check me</label>
             </div>;
     }
     const _styles = _stylex.create({
       $1: {
         color: {
           default: null,
           [_stylex.when.siblingBefore(":checked")]: "#22c55e"
         }
       }
     });"
    `);
  });
});

describe.skip("Not Supported - Arbitrary Variants", () => {
  test("supports query", async () => {
    const input = `<div className="[@supports(display:grid)]:grid" />`;
    // Use manual @supports in StyleX
  });

  test("attribute selector", async () => {
    const input = `<div className="[&[data-active]]:bg-blue-500" />`;
    // Use stylex.when.* with markers
  });
});
