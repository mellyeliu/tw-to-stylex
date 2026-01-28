/**
 * @flow strict
 */

/* $FlowFixMe */
import postcss from "postcss";
import fs from "fs";
import path from "path";
import CheatSheet from "./cheatsheet";

// Load and parse theme.css to get theme variable definitions
let themeVars: Map<string, string> = new Map();
try {
  let themePath = path.join(__dirname, "../theme.css");
  themePath = themePath.replace("file:", "");
  const themeContent = fs.readFileSync(themePath, "utf-8");
  // Parse CSS variable definitions from theme.css
  // Match patterns like: --font-sans: ui-sans-serif, system-ui, ...;
  const varRegex = /^\s*(--[\w-]+):\s*([^;]+);/gm;
  let match;
  while ((match = varRegex.exec(themeContent)) !== null) {
    themeVars.set(match[1], match[2].trim());
  }
} catch (e) {
  // Theme file not found, continue without theme vars
}

const arbitrarySupportedClasses = {
  pt: "padding-top",
  pb: "padding-bottom",
  pl: "padding-left",
  pr: "padding-right",
  p: "padding",
  mb: "margin-bottom",
  m: "margin",
  mt: "margin-top",
  ml: "margin-left",
  mr: "margin-right",
  w: "width",
  h: "height",
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
  bg: "background",
  border: "border-color",
  text: "color",
  aspect: "aspect-ratio",
  color: "color",
  "max-w": "max-width",
  "max-h": "max-height",
};

const convertToCss = (classNames: Array<string>): string => {
  let cssCode = "";
  CheatSheet.forEach((element) => {
    element.content.forEach((content) => {
      content.table.forEach((list) => {
        if (classNames.includes(list[0])) {
          cssCode += `${list[1]} \n`;
        }

        if (classNames.includes(list[1])) {
          const semicolon = list[2][list[2].length - 1] !== ";" ? ";" : "";
          cssCode += `${list[2]}${semicolon} \n`;
        }
      });
    });
  });

  // Check for arbitrary values

  const arbitraryClasses = classNames.filter((className) =>
    className.includes("[")
  );

  arbitraryClasses.forEach((className) => {
    try {
      const property = className.split("-[")[0].replace(".", "");

      const matches = className.match(/(?<=\[)[^\][]*(?=])/g);
      if (!matches) {
        return;
      }

      const properyValue = matches[0];
      if (arbitrarySupportedClasses[property]) {
        cssCode += `${arbitrarySupportedClasses[property]}: ${properyValue};\n`;
      }
    } catch (e) {
      console.log(e);
    }
  });

  return cssCode;
};

const getBreakPoints = (input: string, breakpoint: string) => {
  return input
    .replaceAll("\n", " ")
    .split(" ")
    .filter((i: string) => i.startsWith(breakpoint + ":"))
    .map((i: string) => i.substring(3));
};

const getHoverClass = (input: string) => {
  return input
    .replaceAll("\n", " ")
    .split(" ")
    .filter((i) => i.startsWith("hover:"))
    .map((i) => i.replace("hover:", ""));
};

export const getConvertedClasses = (input: string): string => {
  if (input === "") return "";

  const classNames = input
    .split(/\s+/)
    .map((i) => i.trim())
    .filter((i) => i !== "");
  const breakpoints = CheatSheet[0].content[1].table;

  const hoverClasses = getHoverClass(input);

  const smClasses = getBreakPoints(input, "sm");
  const mdClasses = getBreakPoints(input, "md");
  const lgClasses = getBreakPoints(input, "lg");
  const xlClasses = getBreakPoints(input, "xl");
  const _2xlClasses = getBreakPoints(input, "2xl");

  const resultCss = `${convertToCss(classNames)}
${
  smClasses.length !== 0
    ? breakpoints[0][1].replace("...", "\n  " + convertToCss(smClasses))
    : ""
}
${
  mdClasses.length !== 0
    ? breakpoints[1][1].replace("...", "\n  " + convertToCss(mdClasses))
    : ""
}
${
  lgClasses.length !== 0
    ? breakpoints[2][1].replace("...", "\n  " + convertToCss(lgClasses))
    : ""
}
${
  xlClasses.length !== 0
    ? breakpoints[3][1].replace("...", "\n  " + convertToCss(xlClasses))
    : ""
}
${
  _2xlClasses.length !== 0
    ? breakpoints[4][1].replace("...", "\n  " + convertToCss(_2xlClasses))
    : ""
}
${hoverClasses.length !== 0 ? `:hover {\n ${convertToCss(hoverClasses)} }` : ""}
`;

  return resultCss;
};

export type JssValue =
  | string
  | null
  | { default: JssValue, [string]: JssValue };
export type Jss = { [string]: JssValue };

function dashedToCamelCase(str: string): string {
  if (str.startsWith("--")) {
    return str;
  }
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}


// Extract pseudo classes and elements from a selector
// Account for slash escaping.
export function extractPseudos(selector: string): Array<string> {
  const pseudos = [];

  for (let i = 0; i < selector.length; i++) {
    if (selector[i] === "\\") {
      i++;
      continue;
    }

    if (selector[i] === ":") {
      let pseudo = "";
      let stack = [];
      i++;
      if (selector[i] === ":") {
        pseudo += "::";
        i++;
      } else {
        pseudo += ":";
      }
      for (; i < selector.length; i++) {
        if (selector[i] === "\\") {
          pseudo += selector[i];
          i++;
          pseudo += selector[i];
          continue;
        }
        if (selector[i] === "(" && stack[stack.length - 1] !== '"') {
          stack.push("(");
        }
        if (selector[i] === '"') {
          stack.push('"');
        }
        if (selector[i] === ")" && stack[stack.length - 1] === "(") {
          stack.pop();
        }
        if (selector[i] === '"' && stack[stack.length - 1] === '"') {
          stack.pop();
        }
        if (["[", ",", ":", " "].includes(selector[i]) && stack.length === 0) {
          i--;
          break;
        }
        pseudo += selector[i];
      }
      pseudos.push(pseudo);
    }

    if (selector[i] === "[") {
      let pseudo = "";
      let stack = [];
      for (; i < selector.length; i++) {
        if (selector[i] === "\\") {
          pseudo += selector[i];
          i++;
          pseudo += selector[i];
          continue;
        }
        if (selector[i] === "(" && stack[stack.length - 1] !== '"') {
          stack.push("(");
        }
        if (selector[i] === '"') {
          stack.push('"');
        }
        if (selector[i] === ")" && stack[stack.length - 1] === "(") {
          stack.pop();
        }
        if (selector[i] === '"' && stack[stack.length - 1] === '"') {
          stack.pop();
        }
        pseudo += selector[i];
        if (selector[i] === "]" && stack.length === 0) {
          break;
        }
      }
      pseudos.push(`:is(${pseudo})`);
    }
  }
  return pseudos;
}

const deeplyAddValue = (
  obj: Jss,
  value: string,
  [condition, ...conditions]: $ReadOnlyArray<string>,
) => {
  if (conditions.length === 0) {
    obj[condition] = value;
    return;
  }
  const subObject =
    typeof obj[condition] === "string"
      ? { default: obj[condition] }
      : obj[condition] ?? { default: null };
  obj[condition] = subObject;
  deeplyAddValue(subObject, value, conditions);
};

function _deepEquals(a: mixed, b: mixed): boolean {
  if (a === b) {
    return true;
  }
  if (typeof a !== "object" || typeof b !== "object") {
    return false;
  }
  if (a === null || b === null) {
    return false;
  }
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }
  if (Array.isArray(a)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!_deepEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  for (let key of aKeys) {
    if (!_deepEquals(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

function deepEquals([a, ...rest]: $ReadOnlyArray<mixed>): boolean {
  for (let b of rest) {
    if (!_deepEquals(a, b)) {
      return false;
    }
  }
  return true;
} 

const toPack = [
  [['top', 'right', 'bottom', 'left'], 'inset',],
  [['insetInlineStart', 'insetInlineEnd', 'insetBlockStart', 'insetBlockEnd'], 'inset',],
  [['left', 'right'], 'insetInline',],
  [['insetInlineStart', 'insetInlineEnd'], 'insetInline',],
  [['top', 'bottom'], 'insetBlock',],
  [['insetBlockStart', 'insetBlockEnd'], 'insetBlock',],
  [['top', 'right', 'bottom', 'left'], 'margin',],
  
  [['marginTop', 'marginRight', 'marginBottom', 'marginLeft'], 'margin',],
  [['marginInlineStart', 'marginInlineEnd', 'marginBlockStart', 'marginBlockEnd'], 'margin',],
  [['marginTop', 'marginBottom'], 'marginBlock',],
  [['marginBlockStart', 'marginBlockEnd'], 'marginBlock',],
  [['marginInlineStart', 'marginInlineEnd'], 'marginInline',],
  [['marginLeft', 'marginRight'], 'marginInline',],

  [['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'], 'padding',],
  [['paddingInlineStart', 'paddingInlineEnd', 'paddingBlockStart', 'paddingBlockEnd'], 'padding',],
  [['paddingTop', 'paddingBottom'], 'paddingBlock',],
  [['paddingBlockStart', 'paddingBlockEnd'], 'paddingBlock',],
  [['paddingInlineStart', 'paddingInlineEnd'], 'paddingInline',],
  [['paddingLeft', 'paddingRight'], 'paddingInline',],

  [['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'], 'borderWidth',],
  [['borderInlineStartWidth', 'borderInlineEndWidth', 'borderBlockStartWidth', 'borderBlockEndWidth'], 'borderWidth',],
  [['borderTopWidth', 'borderBottomWidth'], 'borderBlockWidth',],
  [['borderBlockStartWidth', 'borderBlockEndWidth'], 'borderBlockWidth',],
  [['borderInlineStartWidth', 'borderInlineEndWidth'], 'borderInlineWidth',],
  [['borderLeftWidth', 'borderRightWidth'], 'borderInlineWidth',],

  [['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'], 'borderColor',],
  [['borderInlineStartColor', 'borderInlineEndColor', 'borderBlockStartColor', 'borderBlockEndColor'], 'borderColor',],
  [['borderTopColor', 'borderBottomColor'], 'borderBlockColor',],
  [['borderBlockStartColor', 'borderBlockEndColor'], 'borderBlockColor',],
  [['borderInlineStartColor', 'borderInlineEndColor'], 'borderInlineColor',],
  [['borderLeftColor', 'borderRightColor'], 'borderInlineColor',],

  [['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'], 'borderStyle',],
  [['borderInlineStartStyle', 'borderInlineEndStyle', 'borderBlockStartStyle', 'borderBlockEndStyle'], 'borderStyle',],
  [['borderTopStyle', 'borderBottomStyle'], 'borderBlockStyle',],
  [['borderBlockStartStyle', 'borderBlockEndStyle'], 'borderBlockStyle',],
  [['borderInlineStartStyle', 'borderInlineEndStyle'], 'borderInlineStyle',],
  [['borderLeftStyle', 'borderRightStyle'], 'borderInlineStyle',],

  [['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'], 'borderRadius',],
  [['borderStartStartRadius', 'borderStartEndRadius', 'borderEndStartRadius', 'borderEndEndRadius'], 'borderRadius',],
  
  [['containIntrinsicWidth', 'containIntrinsicHeight'], 'containIntrinsicSize',],

  [['rowGap', 'columnGap'], 'gap',],

  [['overflowX', 'overflowY'], 'overflow',],
];

function packObject(obj: Jss) {
  const output: Jss = {};
  const keysToSkip: Array<string> = [];

  for (const [toFind, replacement] of toPack) {
    const allExist = toFind.every((key) => obj[key] !== undefined && !keysToSkip.includes(key));
    if (!allExist) {
      continue;
    }
    const allEqual = deepEquals(toFind.map((key) => obj[key]));
    if (allEqual) {
      keysToSkip.push(...toFind);
      output[replacement] = obj[toFind[0]];
    }
  }

  for (const key in obj) {
    if (keysToSkip.includes(key)) {
      continue;
    }
    output[key] = obj[key];
  }

  return output;
}

export const convertFromCssToJss = (
  classNames: string | $ReadOnlyArray<string>,
  css: string,
): null | Jss => {
  const toMatch = typeof classNames === "string"
    ? classNames.split(' ')
    : classNames;
  const found: Array<string> = [];
  try {
    const root = postcss.parse(css);
    const object: Jss = {};

    // First pass: collect @property initial-values
    const propertyInitialValues: Map<string, string> = new Map();
    for (let node of root.nodes) {
      if (node.type === "atrule" && node.name === "property" && node.nodes) {
        const propName = node.params; // e.g., "--tw-border-style"
        for (let child of node.nodes) {
          if (child.type === "decl" && child.prop === "initial-value") {
            propertyInitialValues.set(propName, child.value);
          }
        }
      }
    }

    // Helper to inline CSS variable values
    // Priority: localVars (from current rule) > @property initial-values > theme vars
    const inlineVarValues = (
      value: string,
      localVars: Map<string, string>
    ): string => {
      // Match var(--name) or var(--name, fallback)
      return value.replace(/var\((--[\w-]+)(?:,\s*([^)]+))?\)/g, (match, varName, fallback) => {
        // First check if the variable is set locally in this rule
        const localValue = localVars.get(varName);
        if (localValue) {
          return localValue;
        }
        // Then check @property initial-values
        const initialValue = propertyInitialValues.get(varName);
        if (initialValue) {
          return initialValue;
        }
        // Then check theme variables
        const themeValue = themeVars.get(varName);
        if (themeValue) {
          return themeValue;
        }
        // Finally use the fallback if provided
        if (fallback) {
          return fallback.trim();
        }
        return match; // Keep original if no value found
      });
    };

    // Updated to handle Tailwind v4's nested CSS syntax with & selectors
    const processNode = (
      node: any,
      conditions: $ReadOnlyArray<string> = [],
      insideMatchedClass: boolean = false,
      localVars: Map<string, string> = new Map()
    ) => {
      if (node.type === "root") {
        for (let child of node.nodes) {
          processNode(child, conditions, false, localVars);
        }
        return;
      }

      if (node.type === "atrule") {
        const atRuleRaw = node.toString();
        const atRule = atRuleRaw.split("{")[0].trim();

        // Skip @property and @keyframes
        if (atRule.startsWith("@property") || atRule.startsWith("@keyframes")) {
          return;
        }

        // Handle @layer by recursing without adding to conditions
        if (atRule.startsWith("@layer")) {
          for (let child of node.nodes) {
            processNode(child, conditions, insideMatchedClass, localVars);
          }
          return;
        }

        // Handle @media, @supports, @container, @scope
        if (atRule.startsWith("@media") ||
            atRule.startsWith("@supports") ||
            atRule.startsWith("@container") ||
            atRule.startsWith("@scope")
        ) {
          for (let child of node.nodes) {
            processNode(child, [...conditions, atRule], insideMatchedClass, localVars);
          }
          return;
        }

        return;
      }

      if (node.type === "rule") {
        const selector = node.selector;

        // Handle Tailwind v4's nested & selectors
        if (selector.startsWith("&")) {
          if (insideMatchedClass) {
            const selectorPart = selector.slice(1); // Remove the &

            // Check for unsupported StyleX patterns
            const unsupportedPatterns = [
              { pattern: /^[>\+~]/, name: 'combinator selectors (>, +, ~)', example: '&>*' },
              { pattern: /^\s+[^\s:]/, name: 'descendant selectors', example: '& .child' },
              { pattern: /^\./, name: 'compound class selectors', example: '&.other-class' },
              { pattern: /:has\(/, name: ':has() pseudo-class', example: '&:has(> img)' },
              { pattern: /:where\(/, name: ':where() pseudo-class', example: '&:where(.foo)' },
            ];

            for (const { pattern, name, example } of unsupportedPatterns) {
              if (pattern.test(selectorPart)) {
                console.warn(
                  `[TW→StyleX] Skipping unsupported pattern: ${name}\n` +
                  `  Selector: &${selectorPart}\n` +
                  `  Example: ${example}\n` +
                  `  StyleX limitation: atomic CSS doesn't support element relationships or compound selectors`
                );
                return;
              }
            }

            const pseudos = extractPseudos(selectorPart);

            for (let child of node.nodes) {
              processNode(child, [...conditions, ...pseudos], true, localVars);
            }
          }
          return;
        }

        // Handle regular class selectors
        const pseudos = extractPseudos(selector);
        let className = pseudos
          .reduce(
            (acc, pseudo) => acc.replace(pseudo, ""),
            selector
              .replace(/^\./, '')
              .replaceAll(' .', '')
              .replaceAll("\\", "")
          );
        if (toMatch.includes(className)) {
          found.push(className);
          // First, collect all CSS variable declarations from this rule
          const localVars: Map<string, string> = new Map();
          for (let child of node.nodes) {
            if (child.type === "decl" && child.prop.startsWith("--")) {
              localVars.set(child.prop, child.value);
            }
          }
          // Then process all children with access to local vars
          for (let child of node.nodes) {
            processNode(child, [...conditions, ...pseudos], true, localVars);
          }
        }
        return;
      }

      if (node.type === "decl") {
        const propName = dashedToCamelCase(node.prop);
        const propValue = inlineVarValues(node.value, localVars);

        // Filter out @media (hover: hover) - it's just for touch device detection
        const filteredConditions = conditions.filter(
          (c) => c !== '@media (hover: hover)'
        );

        if (object[propName] == null && filteredConditions.length === 0) {
          object[propName] = propValue;
          return;
        }

        if (filteredConditions.length === 0) {
          // last applied style wins!
          if (typeof object[propName] === "string") {
            object[propName] = propValue;
          } else {
            object[propName] = {
              ...object[propName],
              default: propValue,
            };
          }
          return;
        }

        const pseudoElementIndexes: Array<number> = filteredConditions
          .map((r, i) => r.startsWith("::") ? i : null)
          .filter((i)/*: i is number*/ => i !== null);

        if (pseudoElementIndexes.length > 0) {
          const lastPseudoElementIndex = pseudoElementIndexes[
            pseudoElementIndexes.length - 1
          ];
          const untilLastPseudoElement = filteredConditions.slice(0, lastPseudoElementIndex + 1);
          const afterLastPseudoElement = filteredConditions.slice(lastPseudoElementIndex + 1);

          deeplyAddValue(object, propValue, [...untilLastPseudoElement, propName, ...afterLastPseudoElement]);
        } else {
          deeplyAddValue(object, propValue, [propName, ...filteredConditions]);
        }
      }
    };
    processNode(root);
    const packed = packObject(object);
    return packed;
  } catch (e) {
    console.log(e);
    return null;
  }
};

// const testCss = `
// /*! tailwindcss v4.0.0-alpha.24 | MIT License | https://tailwindcss.com */
// .text-3xl {
//   font-size: 1.875rem;
//   line-height: 2.25rem;
// }

// .font-bold {
//   font-weight: 700;
// }

// .tracking-tighter {
//   letter-spacing: -0.05em;
// }

// @media (width >= 40rem) {
//   .sm\\:text-5xl {
//     font-size: 3rem;
//     line-height: 1;
//   }
// }

// @media (width >= 80rem) {
//   .xl\\:text-6xl\\/none {
//     font-size: 3.75rem;
//     line-height: 1;
//   }
// }
// `;

// console.log(convertFromCssToJss(testCss));
