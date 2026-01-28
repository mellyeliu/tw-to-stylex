/**
 * Worker script that compiles Tailwind classes synchronously via spawnSync
 * Usage: node tw-compile.cjs '["class1", "class2"]'
 */

(async () => {
  const fs = require('fs');
  const path = require('path');
  const classesJson = process.argv[2];

  if (!classesJson) {
    console.error('Usage: node tw-compile.cjs \'["class1", "class2"]\'');
    process.exit(1);
  }

  try {
    const { compile } = await import('tailwindcss');

    // Look for theme.css in the package root (one level up from lib/)
    const themePath = path.join(__dirname, '..', 'theme.css');
    let theme = fs.readFileSync(themePath, 'utf-8');

    const { build } = await compile(`${theme}\n\n@tailwind utilities;`);

    const candidates = JSON.parse(classesJson);
    const result = build(candidates);
    process.stdout.write(result);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
})();
