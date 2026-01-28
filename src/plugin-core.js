/**
 * @flow strict
 */

import * as t from "@babel/types";
import type { NodePath } from "@babel/traverse";
import type { PluginObj } from "@babel/core";
import * as pathUtils from "./babel-path-utils";

export type ConvertTwToJs = (classNames: string) => { [string]: mixed } | null;

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

export const convertToAst = (value: mixed): t.Expression => {
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
    return t.arrayExpression(value.map(convertToAst));
  }
  if (typeof value === 'object' && value != null && typeof value.type === 'string') {
    // $FlowFixMe - This is an AST node
    return value;
  }
  if (typeof value === "object" && value != null) {
    return t.objectExpression(
      Object.keys(value).map((key) =>
        t.objectProperty(
          canBeIdentifier(key) ? t.identifier(key) : t.stringLiteral(key),
          convertToAst(value[key])
        )
      )
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

              const result = valuePath.evaluate();
              const { confident, value: existingValue } = result;
              if (!confident) {
                return;
              }
              if (typeof existingValue !== "string") {
                return;
              }

              let keyName;

              if (cnMap[existingValue]) {
                keyName = cnMap[existingValue];
              } else {
                const styleObject = convertTwToJs(existingValue);
                if (styleObject == null) {
                  return;
                }

                keyName = `$${++count}`;
                styleMap[keyName] = styleObject;
                cnMap[existingValue] = keyName;
              }

              if (isHTML) {
                jsxAttributePath.replaceWith(
                  t.jsxSpreadAttribute(
                    t.callExpression(
                      t.memberExpression(stylex, t.identifier("props")),
                      [t.memberExpression(styles, t.identifier(keyName))]
                    )
                  )
                );
              } else {
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
                  [convertToAst(styleMap)]
                )
              ),
            ])
          );
        },
      },
    },
  };
}
