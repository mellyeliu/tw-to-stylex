/**
 * @flow strict
 */

import { transformAsync } from "@babel/core";
import type { PluginObj } from "@babel/core";
import { makeCompiler } from "./classes-to-css";
import { convertFromCssToJss } from "./helpers";
import { createPlugin } from "./plugin-core";

const customBabelPlugin = async (): Promise<PluginObj<>> => {
  const compile = await makeCompiler();

  const convertTwToJs = (classNames: string) => {
    let resultCss, resultJSS;
    try {
      resultCss = compile(classNames);
      resultJSS = convertFromCssToJss(classNames, resultCss);
      return resultJSS;
    } catch {
      console.log("Error converting", classNames);
      console.log("CSS Result:", resultCss);
      console.log("JSS Result:", resultJSS, "\n\n\n\n");
      return null;
    }
  };

  return createPlugin(convertTwToJs);
};

export default customBabelPlugin;

export async function tailwindToStylex(
  source: string
): Promise<string> {
  const isFlow = source.includes("@flow");

  const result = await transformAsync(source, {
    // Don't pick up project's babel config - we only want our transform
    configFile: false,
    babelrc: false,
    plugins: [
      ...(isFlow
        ? ["babel-plugin-syntax-hermes-parser"]
        : [["@babel/syntax-typescript", { isTSX: true }], "@babel/syntax-jsx"]),
      customBabelPlugin,
    ],
  });
  if (result == null || result.code == null) {
    return source;
  }

  return result.code;
}
