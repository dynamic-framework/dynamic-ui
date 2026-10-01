/**
 * generated.mjs — checks that committed build outputs match the build.
 *
 * Some generated files are committed on purpose: `tokens/primitives/color.json`
 * so Figma and CI read identical hex, and
 * `stories/utilities/utilities.manifest.json` so Storybook starts on a fresh
 * clone without running the CSS build first.
 *
 * Committed means commit-able stale. Someone adds a utility family, does not
 * re-run the build, and the reference page documents the previous surface —
 * which looks right, because a page listing 1,600 classes looks right whatever
 * it lists.
 *
 * This has to run AFTER a build and compare against git, not against the file
 * on disk. The first version of this check lived inside `build.mjs` and
 * compared the file the same script had just written, so it could never fire.
 *
 * NOT part of `npm run css`, deliberately. Running it there would fail the
 * build for anyone mid-change — the whole point is that the file differs from
 * git while you are working on it. It belongs where a commit is about to
 * happen: CI, after `npm run css`.
 *
 * Usage: node scripts/css/generated.mjs
 */

import { execFileSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

/** Generated files that are committed, and must therefore stay in step. */
const TRACKED = [
  'tokens/primitives/color.json',
  'stories/utilities/utilities.manifest.json',
];

const changed = execFileSync('git', ['status', '--porcelain', '--', ...TRACKED], {
  cwd: ROOT,
  encoding: 'utf8',
})
  .split('\n')
  .map((line) => line.slice(3).trim())
  .filter(Boolean);

process.stdout.write(`css-generated: ${TRACKED.length} committed build output(s) checked\n`);

if (!changed.length) {
  process.stdout.write('css-generated: every one matches the build\n');
  process.exit(0);
}

process.stderr.write(`\n${changed.length} committed build output(s) differ from what the build produces:\n`);
for (const file of changed) process.stderr.write(`  ${file}\n`);
process.stderr.write(
  '\ncss-generated: commit the rebuild. These are committed so a fresh clone works, '
  + 'which means a stale one ships silently.\n',
);
process.exit(1);
