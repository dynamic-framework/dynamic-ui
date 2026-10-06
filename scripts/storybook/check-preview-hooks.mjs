/**
 * check-preview-hooks.mjs — preview hooks only where they are legal.
 *
 * Storybook's preview hooks (`useGlobals`, `useStoryContext`, `useArgs`, …)
 * read a store it sets up around the DECORATOR's own call. A component the
 * decorator RETURNS is rendered by React afterwards, outside that store, so
 * the hook throws:
 *
 *     Storybook preview hooks can only be called inside decorators and
 *     story functions.
 *
 * It threw on every story in the catalogue, and `npm run build:storybook`
 * passed throughout — building compiles stories without rendering them, so the
 * one gate that looked like it covered the preview could not execute it.
 *
 * The real fix is structural: the hook belongs in `preview.tsx`, and anything
 * it renders takes props. This holds that line, because the mistake is easy to
 * make again and nothing else notices until a human opens the page.
 *
 * Usage: node scripts/storybook/check-preview-hooks.mjs
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const DIR = resolve(ROOT, '.storybook');

/**
 * Where a preview hook may be called.
 *
 * `preview.tsx` is the decorator itself. A story file is a story function,
 * which is the other half of what the error message allows.
 */
const ALLOWED = [/^\.storybook\/preview\.tsx$/, /\.stories\.[jt]sx?$/];

const HOOKS = /\buse(Globals|StoryContext|Args|Parameter|Channel)\b/;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.') && entry !== '.storybook') continue;
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) walk(abs, out);
    else if (/\.[jt]sx?$/.test(entry) && !/\.spec\.[jt]sx?$/.test(entry)) out.push(abs);
  }
  return out;
}

const offenders = [];

for (const file of walk(DIR)) {
  const rel = relative(ROOT, file);
  if (ALLOWED.some((pattern) => pattern.test(rel))) continue;

  const source = readFileSync(file, 'utf8');
  /*
   * The IMPORT, not a mention. The fix left a comment in `ThemeToggle.tsx`
   * explaining what went wrong, and a check that flagged its own explanation
   * would be one people learn to ignore.
   */
  const imports = source.match(/^\s*import[^;]*from\s+'storybook\/preview-api';/m);
  if (!imports) continue;

  const called = source.split('\n').some((line) => (
    HOOKS.test(line) && !line.trimStart().startsWith('*') && !line.trimStart().startsWith('//')
  ));
  if (called) offenders.push(rel);
}

if (!offenders.length) {
  process.stdout.write('storybook: preview hooks are only called where they work\n');
  process.exit(0);
}

process.stderr.write(
  `\n${offenders.length} file(s) call a Storybook preview hook outside a decorator:\n`,
);
offenders.forEach((file) => process.stderr.write(`  ${file}\n`));
process.stderr.write(
  '\nA component the decorator RENDERS is outside the hook store, so this throws on\n'
  + 'every story. Call the hook in `.storybook/preview.tsx` and pass the value down.\n',
);
process.exit(1);
