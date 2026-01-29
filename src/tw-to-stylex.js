#!/usr/bin/env node
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

import { tailwindToStylex } from ".";
import * as fs from "fs";
import * as path from "path";

const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

// Patterns that indicate unsupported Tailwind features
const UNSUPPORTED_PATTERNS = [
  { pattern: /\[&[>\s+~]/, description: "descendant/child/sibling selectors" },
  { pattern: /\[&\[data-/, description: "attribute selectors" },
  { pattern: /\[@supports/, description: "@supports queries" },
  { pattern: /\[@media/, description: "arbitrary @media queries" },
  { pattern: /![\w-]+/, description: "!important modifier" },
];

function findFiles(dir: string, ignore: string[] = []): string[] {
  const files: string[] = [];

  // Read .gitignore patterns
  const gitignorePath = path.join(dir, ".gitignore");
  const gitignorePatterns: string[] = [];
  if (fs.existsSync(gitignorePath)) {
    const content = fs.readFileSync(gitignorePath, "utf8");
    content.split("\n").forEach((line) => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith("#")) {
        gitignorePatterns.push(trimmed);
      }
    });
  }

  const allIgnore = [...ignore, ...gitignorePatterns, "node_modules", ".git"];

  function shouldIgnore(name: string, relativePath: string): boolean {
    for (const pattern of allIgnore) {
      if (name === pattern || relativePath.includes(pattern)) {
        return true;
      }
    }
    return false;
  }

  function walk(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relativePath = path.relative(dir, fullPath);

      if (shouldIgnore(entry.name, relativePath)) {
        continue;
      }

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && EXTENSIONS.includes(path.extname(entry.name))) {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files;
}

function detectUnsupportedPatterns(
  source: string,
  filePath: string
): Array<{ file: string; pattern: string; line: number }> {
  const issues: Array<{ file: string; pattern: string; line: number }> = [];
  const lines = source.split("\n");

  lines.forEach((line, index) => {
    for (const { pattern, description } of UNSUPPORTED_PATTERNS) {
      if (pattern.test(line)) {
        issues.push({
          file: filePath,
          pattern: description,
          line: index + 1,
        });
      }
    }
  });

  return issues;
}

async function migrate(targetDir: string, options: { dryRun?: boolean; ignore?: string[] }) {
  const absoluteDir = path.resolve(targetDir);

  if (!fs.existsSync(absoluteDir)) {
    console.error(`Error: Directory "${targetDir}" does not exist`);
    process.exit(1);
  }

  console.log(`\nMigrating Tailwind to StyleX in: ${absoluteDir}`);
  if (options.dryRun) {
    console.log("(dry run - no files will be modified)\n");
  } else {
    console.log("");
  }

  const files = findFiles(absoluteDir, options.ignore || []);
  console.log(`Found ${files.length} files to process\n`);

  let transformed = 0;
  let unchanged = 0;
  let errors = 0;
  const allIssues: Array<{ file: string; pattern: string; line: number }> = [];

  for (const file of files) {
    const relativePath = path.relative(absoluteDir, file);
    const source = fs.readFileSync(file, "utf8");

    // Detect unsupported patterns
    const issues = detectUnsupportedPatterns(source, relativePath);
    allIssues.push(...issues);

    try {
      const result = await tailwindToStylex(source);

      if (result !== source) {
        if (!options.dryRun) {
          fs.writeFileSync(file, result, "utf8");
        }
        console.log(`  ✓ ${relativePath}`);
        transformed++;
      } else {
        unchanged++;
      }
    } catch (err) {
      console.error(`  ✗ ${relativePath}: ${err instanceof Error ? err.message : String(err)}`);
      errors++;
    }
  }

  // Summary
  console.log("\n" + "─".repeat(50));
  console.log("Summary:");
  console.log(`  Transformed: ${transformed}`);
  console.log(`  Unchanged:   ${unchanged}`);
  console.log(`  Errors:      ${errors}`);

  if (allIssues.length > 0) {
    console.log(`\n⚠️  Unsupported patterns detected (${allIssues.length}):`);
    const grouped = new Map<string, Array<{ line: number; pattern: string }>>();
    for (const issue of allIssues) {
      if (!grouped.has(issue.file)) {
        grouped.set(issue.file, []);
      }
      grouped.get(issue.file)?.push({ line: issue.line, pattern: issue.pattern });
    }

    for (const [file, issues] of grouped) {
      console.log(`\n  ${file}:`);
      for (const issue of issues) {
        console.log(`    Line ${issue.line}: ${issue.pattern}`);
      }
    }
    console.log("\nSee https://github.com/mellyeliu/tw-to-stylex#-not-supported-stylex-limitations");
  }

  if (options.dryRun) {
    console.log("\n(dry run - no files were modified)");
  }
}

function printHelp() {
  console.log(`
tailwind-to-stylex - Convert Tailwind CSS to StyleX

Usage:
  tailwind-to-stylex migrate <directory> [options]
  cat file.tsx | tailwind-to-stylex

Commands:
  migrate <dir>    Migrate all JS/TS files in directory

Options:
  --dry-run        Preview changes without modifying files
  --ignore <pat>   Additional patterns to ignore (can be used multiple times)
  --help           Show this help message

Examples:
  tailwind-to-stylex migrate ./src
  tailwind-to-stylex migrate ./src --dry-run
  tailwind-to-stylex migrate ./src --ignore dist --ignore build
  cat Component.tsx | tailwind-to-stylex
`);
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    // stdin mode
    processStdin();
    return;
  }

  if (args[0] === "--help" || args[0] === "-h") {
    printHelp();
    return;
  }

  if (args[0] === "migrate") {
    const targetDir = args[1];
    if (!targetDir) {
      console.error("Error: Please specify a directory to migrate");
      console.error("Usage: tailwind-to-stylex migrate <directory>");
      process.exit(1);
    }

    const options: { dryRun?: boolean; ignore?: string[] } = {
      ignore: [],
    };

    for (let i = 2; i < args.length; i++) {
      if (args[i] === "--dry-run") {
        options.dryRun = true;
      } else if (args[i] === "--ignore" && args[i + 1]) {
        options.ignore?.push(args[i + 1]);
        i++;
      }
    }

    await migrate(targetDir, options);
    return;
  }

  console.error(`Unknown command: ${args[0]}`);
  printHelp();
  process.exit(1);
}

const processStdin = () => {
  let input = "";
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", (chunk) => {
    input += chunk;
  });

  process.stdin.on("end", async () => {
    const result = await tailwindToStylex(input);
    process.stdout.write(result);
  });
};

main();
