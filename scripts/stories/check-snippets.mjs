/**
 * check-snippets.mjs — compiles the code shown under "Show code".
 *
 * A story whose point is a FUNCTION prop cannot document itself. Storybook's
 * dynamic source serialises the args, and a function serialises to `() => {}`
 * — so the stories that most need a snippet are exactly the ones that show an
 * empty one. The fix is to pin `parameters.docs.source.code`, and the cost of
 * pinning is that the snippet becomes a string: nothing compiles it, nothing
 * renames an identifier inside it, and it rots silently while the story beside
 * it keeps working.
 *
 * This extracts every pinned snippet, wraps it in a component, and runs the
 * story typechecker over the lot. A snippet that does not compile is a snippet
 * a reader cannot copy.
 *
 * Usage: node scripts/stories/check-snippets.mjs
 */

import { execFileSync } from 'child_process';
import {
  mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync,
} from 'fs';
import { join, relative, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const STORIES = resolve(ROOT, 'stories');

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.')) continue;
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) walk(abs, out);
    else if (entry.endsWith('.stories.tsx')) out.push(abs);
  }
  return out;
}

/** `code: `…`` blocks, with the escapes a template literal needed undone. */
function snippetsIn(source) {
  return [...source.matchAll(/code: `([\s\S]*?)`,\n\s*\},/g)].map((match) => (
    match[1].replace(/\\`/g, '`').replace(/\\\$\{/g, '${')
  ));
}

/**
 * The JSX part, which is what has to compile.
 *
 * A pinned snippet usually carries explanatory comments after the markup.
 * Those are prose for a reader, not code to check, so the snippet runs to the
 * first line that is a comment at the outer level.
 */
function jsxOf(snippet) {
  const lines = snippet.split('\n');
  const cut = lines.findIndex((line) => line.trimStart().startsWith('//'));
  return (cut === -1 ? lines : lines.slice(0, cut)).join('\n').trimEnd();
}

const found = [];
for (const file of walk(STORIES)) {
  const source = readFileSync(file, 'utf8');
  snippetsIn(source).forEach((snippet, index) => {
    const jsx = jsxOf(snippet);
    /* Only JSX is checked. A snippet that documents a whole component or a
       hook is prose with syntax highlighting, not something this can wrap. */
    if (jsx.trimStart().startsWith('<')) {
      found.push({ file: relative(ROOT, file), index, jsx });
    }
  });
}

if (!found.length) {
  process.stdout.write('snippets: no JSX snippets pinned\n');
  process.exit(0);
}

/*
 * Written inside `stories/` rather than a temp dir: the story typechecker has
 * its own tsconfig covering this directory, and a file outside it would not be
 * checked at all — the guard would pass by not running.
 */
const dir = mkdtempSync(join(STORIES, '.snippetcheck-'));
let failed = false;

try {
  found.forEach(({ jsx }, i) => {
    const imports = ['DCalendar', 'DDatePicker', 'DModal', 'DCarousel', 'DSelect']
      .filter((name) => new RegExp(`\\b${name}\\b`).test(jsx));

    writeFileSync(join(dir, `snippet${i}.tsx`), [
      imports.length ? `import { ${imports.join(', ')} } from '../../src';` : '',
      '',
      `export default function Snippet${i}() {`,
      '  return (',
      jsx,
      '  );',
      '}',
      '',
    ].join('\n'));
  });

  try {
    execFileSync('npm', ['run', 'typecheck:stories'], { cwd: ROOT, stdio: 'pipe' });
    process.stdout.write(`snippets: ${found.length} pinned snippet(s) compile\n`);
  } catch (error) {
    failed = true;
    const output = `${error.stdout ?? ''}${error.stderr ?? ''}`;
    process.stderr.write('\nA pinned "Show code" snippet does not compile:\n\n');
    process.stderr.write(
      output.split('\n').filter((line) => line.includes('snippet')).join('\n'),
    );
    process.stderr.write('\n\nEach snippet maps to a `code:` block, in order:\n');
    found.forEach(({ file, index }, i) => {
      process.stderr.write(`  snippet${i}  ->  ${file} (code block #${index + 1})\n`);
    });
  }
} finally {
  rmSync(dir, { recursive: true, force: true });
}

process.exit(failed ? 1 : 0);
