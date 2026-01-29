/**
 * @flow strict
 */

import * as t from "@babel/types";
import type { NodePath } from "@babel/traverse";
import type { PluginObj } from "@babel/core";
import * as pathUtils from "./babel-path-utils";

export type ConvertTwToJs = (classNames: string) => { [string]: mixed } | null;

// Special marker patterns for group/peer that we convert to stylex.when.*
const ANCESTOR_MARKER_REGEX = /^__stylex_when_ancestor_([a-z-]+)__$/;
const SIBLING_MARKER_REGEX = /^__stylex_when_sibling_([a-z-]+)__$/;

const canBeIdentifier = (value: string): boolean => {
  if (value.length === 0) {
    return false;
  }
  if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(value)) {
    return false;
  }
  if (value === "undefined") {
    return false;
  }
  return true;
};

export const convertToAst = (value: mixed, stylexId?: t.Identifier): t.Expression => {
  if (typeof value === "string") {
    return t.stringLiteral(value);
  }
  if (typeof value === "number") {
    return t.numericLiteral(value);
  }
  if (typeof value === "boolean") {
    return t.booleanLiteral(value);
  }
  if (value === null) {
    return t.nullLiteral();
  }
  if (value === undefined) {
    return t.identifier("undefined");
  }
  if (Array.isArray(value)) {
    return t.arrayExpression(value.map(v => convertToAst(v, stylexId)));
  }
  if (typeof value === 'object' && value != null && typeof value.type === 'string') {
    // $FlowFixMe - This is an AST node
    return value;
  }
  if (typeof value === "object" && value != null) {
    return t.objectExpression(
      Object.keys(value).map((key) => {
        // Check if this key is a special stylex.when.* marker
        const ancestorMatch = key.match(ANCESTOR_MARKER_REGEX);
        if (ancestorMatch && stylexId) {
          // Convert to [stylex.when.ancestor(':pseudo')]
          const pseudo = `:${ancestorMatch[1]}`;
          return t.objectProperty(
            t.callExpression(
              t.memberExpression(
                t.memberExpression(stylexId, t.identifier("when")),
                t.identifier("ancestor")
              ),
              [t.stringLiteral(pseudo)]
            ),
            convertToAst(value[key], stylexId),
            true // computed
          );
        }

        const siblingMatch = key.match(SIBLING_MARKER_REGEX);
        if (siblingMatch && stylexId) {
          // Convert to [stylex.when.siblingBefore(':pseudo')]
          const pseudo = `:${siblingMatch[1]}`;
          return t.objectProperty(
            t.callExpression(
              t.memberExpression(
                t.memberExpression(stylexId, t.identifier("when")),
                t.identifier("siblingBefore")
              ),
              [t.stringLiteral(pseudo)]
            ),
            convertToAst(value[key], stylexId),
            true // computed
          );
        }

        return t.objectProperty(
          canBeIdentifier(key) ? t.identifier(key) : t.stringLiteral(key),
          convertToAst(value[key], stylexId)
        );
      })
    );
  }
  throw new Error(`Cannot convert value to AST: ${String(value)}`);
};

function isCallExpressionNamed(path: NodePath<t.Expression>, fnNames: $ReadOnlyArray<string>): path is NodePath<t.CallExpression> {
  if (!pathUtils.isCallExpression(path)) {
    // $FlowFixMe
    return false;
  }
  const callee = path.get("callee");
  if (!pathUtils.isIdentifier(callee)) {
    return false;
  }
  const name = callee.node.name;
  if (!fnNames.includes(name)) {
    return false;
  }
  return true;
}

export function createPlugin(convertTwToJs: ConvertTwToJs): PluginObj<> {
  let count = 0;
  let cnMap: { [string]: string } = {};
  let styleMap: { [string]: mixed } = {};
  let stylex: t.Identifier;
  let styles: t.Identifier;

  const pathToStyleX = (arg: NodePath<t.Expression>): t.Expression | null => {
    const node: t.Expression = arg.node;
    let expressionMap: {[string]: mixed} = {};
    let input: string;
    if (pathUtils.isStringLiteral(arg)) {
      input = arg.node.value;
    } else if (pathUtils.isTemplateLiteral(arg)) {
      let val = 0;
      const replacedExpressions = arg.node.expressions.map((e) => {
        const key = `$${++val}`;
        expressionMap[key] = e;
        return key;
      });
      input = arg.node.quasis
        .map((q, i) => q.value.raw + (replacedExpressions[i] || ""))
        .join("");
    } else {
      return node;
    }

    let keyName;
    if (input != null && cnMap[input]) {
      keyName = cnMap[input];
    } else {
      const styleObject = convertTwToJs(input);
      if (styleObject == null) {
        return null;
      }
      for (const key of Object.keys(styleObject)) {
        const value = styleObject[key];
        // $FlowFixMe
        if (expressionMap[value]) {
          // $FlowFixMe
          styleObject[key] = expressionMap[value];
        }
      }

      keyName = `$${++count}`;
      styleMap[keyName] = styleObject;
      cnMap[input] = keyName;
    }
    return t.memberExpression(styles, t.identifier(keyName));
  };

  // Helper to convert a class string to a StyleX member expression
  const classesToStyleXMember = (classes: string): t.MemberExpression | null => {
    if (cnMap[classes]) {
      return t.memberExpression(styles, t.identifier(cnMap[classes]));
    }
    const styleObject = convertTwToJs(classes);
    if (styleObject == null) {
      return null;
    }
    const keyName = `$${++count}`;
    styleMap[keyName] = styleObject;
    cnMap[classes] = keyName;
    return t.memberExpression(styles, t.identifier(keyName));
  };

  // Handle conditional expressions: condition ? 'class-a' : 'class-b'
  const handleConditionalExpression = (
    condPath: NodePath<t.ConditionalExpression>
  ): t.Expression | null => {
    const consequent = condPath.get("consequent");
    const alternate = condPath.get("alternate");

    const consequentResult = consequent.evaluate();
    const alternateResult = alternate.evaluate();

    if (!consequentResult.confident || !alternateResult.confident) {
      return null;
    }
    if (typeof consequentResult.value !== "string" || typeof alternateResult.value !== "string") {
      return null;
    }

    const consequentStyle = classesToStyleXMember(consequentResult.value);
    const alternateStyle = classesToStyleXMember(alternateResult.value);

    if (!consequentStyle || !alternateStyle) {
      return null;
    }

    return t.conditionalExpression(
      condPath.node.test,
      consequentStyle,
      alternateStyle
    );
  };

  // Handle logical expressions: condition && 'class-name'
  const handleLogicalExpression = (
    logicalPath: NodePath<t.LogicalExpression>
  ): t.Expression | null => {
    if (logicalPath.node.operator !== "&&") {
      return null;
    }

    const right = logicalPath.get("right");
    const rightResult = right.evaluate();

    if (!rightResult.confident || typeof rightResult.value !== "string") {
      return null;
    }

    const rightStyle = classesToStyleXMember(rightResult.value);
    if (!rightStyle) {
      return null;
    }

    return t.logicalExpression("&&", logicalPath.node.left, rightStyle);
  };

  // Handle template literals with conditionals: `base ${cond ? 'a' : 'b'}`
  const handleTemplateLiteralWithConditionals = (
    templatePath: NodePath<t.TemplateLiteral>
  ): t.Expression[] | null => {
    const quasis = templatePath.node.quasis;
    const expressions = templatePath.get("expressions");

    const styleExprs: t.Expression[] = [];
    const staticClasses: string[] = [];

    for (const quasi of quasis) {
      const text = quasi.value.raw.trim();
      if (text) {
        staticClasses.push(text);
      }
    }

    if (staticClasses.length > 0) {
      const staticStyle = classesToStyleXMember(staticClasses.join(" "));
      if (staticStyle) {
        styleExprs.push(staticStyle);
      }
    }

    for (const expr of expressions) {
      if (pathUtils.isConditionalExpression(expr)) {
        const result = handleConditionalExpression(expr);
        if (result) {
          styleExprs.push(result);
        } else {
          return null;
        }
      } else if (pathUtils.isLogicalExpression(expr)) {
        const result = handleLogicalExpression(expr);
        if (result) {
          styleExprs.push(result);
        } else {
          return null;
        }
      } else {
        return null;
      }
    }

    return styleExprs.length > 0 ? styleExprs : null;
  };

  return {
    name: "tailwind-to-stylex",
    visitor: {
      Program: {
        enter: (path: NodePath<t.Program>) => {
          count = 0;
          cnMap = {};
          styleMap = {};

          stylex = path.scope.generateUidIdentifier("stylex");
          styles = path.scope.generateUidIdentifier("styles");

          path.traverse({
            JSXAttribute: (jsxAttributePath: NodePath<t.JSXAttribute>) => {
              const jsxOpeningElement = jsxAttributePath.parentPath.node;
              if (jsxOpeningElement.type !== "JSXOpeningElement") {
                return;
              }
              const name = jsxOpeningElement.name;
              const isHTML =
                name.type === "JSXIdentifier" &&
                name.name[0].toLocaleLowerCase() === name.name[0] &&
                name.name.match(/^[a-z][a-z0-9\-]*$/);

              const node = jsxAttributePath.node;
              if (node.name.name !== "className" && node.name.name !== "class") {
                return;
              }
              let valuePath = jsxAttributePath.get("value");
              if (pathUtils.isJSXExpressionContainer(valuePath)) {
                valuePath = valuePath.get("expression");
              }

              if (isCallExpressionNamed(valuePath, ['cn', 'twMerge'])) {
                const callExpression: NodePath<t.CallExpression> = valuePath;
                const transformedArgs = callExpression.get('arguments').map(pathToStyleX);

                if (isHTML) {
                  jsxAttributePath.replaceWith(
                    t.jsxSpreadAttribute(
                      t.callExpression(
                        t.memberExpression(stylex, t.identifier("props")),
                        transformedArgs
                      )
                    )
                  );
                } else {
                  valuePath.replaceWith(t.arrayExpression(transformedArgs));
                }

                return;
              }

              // Handle conditional expressions: condition ? 'class-a' : 'class-b'
              if (pathUtils.isConditionalExpression(valuePath)) {
                const condResult = handleConditionalExpression(valuePath);
                if (condResult && isHTML) {
                  jsxAttributePath.replaceWith(
                    t.jsxSpreadAttribute(
                      t.callExpression(
                        t.memberExpression(stylex, t.identifier("props")),
                        [condResult]
                      )
                    )
                  );
                  return;
                }
              }

              // Handle logical expressions: condition && 'class-name'
              if (pathUtils.isLogicalExpression(valuePath)) {
                const logicalResult = handleLogicalExpression(valuePath);
                if (logicalResult && isHTML) {
                  jsxAttributePath.replaceWith(
                    t.jsxSpreadAttribute(
                      t.callExpression(
                        t.memberExpression(stylex, t.identifier("props")),
                        [logicalResult]
                      )
                    )
                  );
                  return;
                }
              }

              // Handle template literals with conditionals: `base ${cond ? 'a' : 'b'}`
              if (pathUtils.isTemplateLiteral(valuePath)) {
                const templateResult = handleTemplateLiteralWithConditionals(valuePath);
                if (templateResult && isHTML) {
                  jsxAttributePath.replaceWith(
                    t.jsxSpreadAttribute(
                      t.callExpression(
                        t.memberExpression(stylex, t.identifier("props")),
                        templateResult
                      )
                    )
                  );
                  return;
                }
              }

              const result = valuePath.evaluate();
              const { confident, value: existingValue } = result;
              if (!confident) {
                return;
              }
              if (typeof existingValue !== "string") {
                return;
              }

              // Handle group/peer marker classes
              // These become stylex.defaultMarker() with no other styles
              if (existingValue === "group" || existingValue === "peer") {
                if (isHTML) {
                  jsxAttributePath.replaceWith(
                    t.jsxSpreadAttribute(
                      t.callExpression(
                        t.memberExpression(stylex, t.identifier("props")),
                        [t.callExpression(
                          t.memberExpression(stylex, t.identifier("defaultMarker")),
                          []
                        )]
                      )
                    )
                  );
                }
                return;
              }

              // Handle classes that contain group/peer alongside other classes
              // e.g., "group flex items-center" -> defaultMarker() + styles
              const classNames = existingValue.split(/\s+/).filter(c => c);
              const hasGroupOrPeer = classNames.some(c => c === "group" || c === "peer");
              const otherClasses = classNames.filter(c => c !== "group" && c !== "peer").join(" ");

              let keyName;

              // Use otherClasses if we stripped out group/peer, otherwise use original
              const classesToConvert = hasGroupOrPeer ? otherClasses : existingValue;

              if (classesToConvert && cnMap[classesToConvert]) {
                keyName = cnMap[classesToConvert];
              } else if (classesToConvert) {
                const styleObject = convertTwToJs(classesToConvert);
                if (styleObject == null && !hasGroupOrPeer) {
                  return;
                }
                if (styleObject != null) {
                  keyName = `$${++count}`;
                  styleMap[keyName] = styleObject;
                  cnMap[classesToConvert] = keyName;
                }
              }

              if (isHTML) {
                const styleArgs: Array<t.Expression> = [];

                // Add defaultMarker() if there's group/peer
                if (hasGroupOrPeer) {
                  styleArgs.push(
                    t.callExpression(
                      t.memberExpression(stylex, t.identifier("defaultMarker")),
                      []
                    )
                  );
                }

                // Add the style reference if we have one
                if (keyName) {
                  styleArgs.push(t.memberExpression(styles, t.identifier(keyName)));
                }

                if (styleArgs.length > 0) {
                  jsxAttributePath.replaceWith(
                    t.jsxSpreadAttribute(
                      t.callExpression(
                        t.memberExpression(stylex, t.identifier("props")),
                        styleArgs
                      )
                    )
                  );
                }
              } else if (keyName) {
                valuePath.replaceWith(
                  t.jsxExpressionContainer(
                    t.memberExpression(styles, t.identifier(keyName))
                  )
                );
              }
            },
            CallExpression: (callExpressionPath: NodePath<t.CallExpression>) => {
              if (!isCallExpressionNamed(callExpressionPath, ["tw"])) {
                return;
              }
              const transformedArgs = callExpressionPath.get('arguments').map(pathToStyleX);
              callExpressionPath.replaceWith(
                t.arrayExpression(
                  transformedArgs
                )
              );
            },
          });

          if (Object.keys(styleMap).length === 0) {
            return;
          }

          const statments: Array<NodePath<t.Statement>> = path.get("body");

          const firstStatement = statments[0];
          const lastStatement = statments[statments.length - 1];

          firstStatement.insertBefore(
            t.importDeclaration(
              [t.importNamespaceSpecifier(stylex)],
              t.stringLiteral("@stylexjs/stylex")
            )
          );

          lastStatement.insertAfter(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                styles,
                t.callExpression(
                  t.memberExpression(stylex, t.identifier("create")),
                  [convertToAst(styleMap, stylex)]
                )
              ),
            ])
          );
        },
      },
    },
  };
}
