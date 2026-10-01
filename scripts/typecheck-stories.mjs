/**
 * typecheck-stories.mjs — type-checks `stories/` and fails only on `stories/`.
 *
 * `stories/` is excluded from `tsconfig.json`, so for the whole v3 migration
 * nothing type-checked them. What that hid, found the day this was written:
 *
 * - every `DModal` story passed a `transition` prop that had not existed since
 *   the animation moved from `framer-motion` into CSS;
 * - eight `DPaginator` stories passed a `start` prop the component never had,
 *   left over from `react-responsive-pagination`;
 * - the shared `CONTEXT_PROVIDER_CONFIG_MATERIAL` was missing two `iconMap`
 *   entries, so it failed to satisfy its own type in fourteen files.
 *
 * `.storybook/tsconfig.json` does include them, but running it raw also
 * reports `node_modules` and `src/` under that config's different `lib` and
 * `downlevelIteration` settings — noise that is a config difference, not a
 * bug, and enough of it to make the command unusable as a gate. This filters
 * to the directory the config exists to cover.
 *
 * Usage: node scripts/typecheck-stories.mjs
 */

import { spawnSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const result = spawnSync(
  'npx',
  ['tsc', '--noEmit', '-p', '.storybook/tsconfig.json'],
  { cwd: ROOT, encoding: 'utf8' },
);

const lines = `${result.stdout ?? ''}${result.stderr ?? ''}`
  .split('\n')
  .filter((line) => line.startsWith('stories/'));

if (!lines.length) {
  process.stdout.write('typecheck-stories: stories/ type-checks clean\n');
  process.exit(0);
}

process.stderr.write(`\n${lines.length} type error(s) in stories/:\n`);
for (const line of lines) process.stderr.write(`  ${line}\n`);
process.exit(1);
