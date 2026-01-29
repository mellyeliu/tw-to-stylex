/**
 * @flow strict
 */

"use strict";

import fs from "fs";
import path from "path";

jest.autoMockOff();

import { tailwindToStylex } from "../src/index";

const fixturesPath = path.join(__dirname, "__fixtures__");
const fixtures = fs.readdirSync(fixturesPath).map((fixture) => {
  return [fixture, fs.readFileSync(path.join(fixturesPath, fixture), "utf-8")];
});

// Fixtures with TypeScript syntax that require additional Babel config
const SKIP_FIXTURES = new Set([
  'command-menu.js', // Contains TypeScript type annotations (DialogProps)
]);

describe("tailwind-to-stylex - fixtures", () => {
  fixtures.forEach(([fileName, fixture]) => {
    const testFn = SKIP_FIXTURES.has(fileName) ? test.skip : test;
    testFn(`transforms ${fileName}`, async () => {
      const result = await tailwindToStylex(fixture);
      expect(result).toMatchSnapshot();
    });
  });
});
