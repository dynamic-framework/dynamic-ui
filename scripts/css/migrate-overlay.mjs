/**
 * migrate-overlay.mjs — folds `DOffcanvas` into `DModal` and rewrites the
 * geometry props onto the unified `placement` / `size` model.
 *
 * `DModal` and `DOffcanvas` were two components with two prop sets for one
 * stylesheet, and the split did not survive: `centered` and `scrollable` were
 * emitted as data attributes NO rule matched, `fullScreenFrom`'s value was
 * ignored so a modal went fullscreen at every width, and `actionPlacement`'s
 * `fill` emitted an attribute the CSS never read. Three of the four props that
 * justified a second component did nothing.
 *
 * Idempotent, and it REPORTS rather than guesses: anything it cannot rewrite
 * mechanically is printed with its file and line so a person decides.
 *
 * Usage: node scripts/css/migrate-overlay.mjs [--write]
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const WRITE = process.argv.includes('--write');
const SOURCES = ['src', 'stories'];

/**
 * Props that move across with a new name or a new shape.
 *
 * `centered` is dropped rather than translated: every centred modal already
 * centres, because `[data-placement="center"]` pins all four edges with `auto`
 * margins. It was a no-op, so carrying it over would carry the illusion.
 */
const PROP_REWRITES = [
  // DOffcanvas' placement prop becomes the shared one.
  [/\bopenFrom=/g, 'placement='],
  // `centered` is what `placement="center"` means.
  [/\s+centered(?:=\{true\}|=""|)(?=[\s/>])/g, ''],
  // Dead on both components, and unhonourable under `showModal()`.
  [/\s+scrollable=\{(?:true|false)\}/g, ''],
  [/\s+scrollable(?=[\s/>])/g, ''],
];

/** Reported, never rewritten: these need a human to pick a breakpoint. */
const NEEDS_A_PERSON = [
  [/\bfullScreenFrom=/, 'fullScreenFrom -> placement={{ xs: \'fill\', <bp>: \'center\' }} (the old prop\'s value was never read, so pick the breakpoint you MEANT)'],
  [/\bfullScreen(?:=\{true\}|=""|)(?=[\s/>])/, 'fullScreen -> placement="fill"'],
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) walk(abs, out);
    else if (/\.(tsx?|mdx)$/.test(entry)) out.push(abs);
  }
  return out;
}

let changed = 0;
let touched = 0;
const manual = [];

for (const dir of SOURCES) {
  for (const file of walk(resolve(ROOT, dir))) {
    const before = readFileSync(file, 'utf8');
    if (!/DOffcanvas|openFrom|fullScreen|centered|scrollable/.test(before)) continue;

    let after = before;

    /**
     * Runs a rewrite over code only, leaving `backtick-quoted` spans alone.
     *
     * Without this the codemod is not idempotent: it rewrites the prose that
     * DOCUMENTS the migration. The second run turned "Migrating from
     * `DOffcanvas`" into "Migrating from `DModal`" and the table row
     * `` `<DOffcanvas>` -> `<DModal placement="end">` `` into a row mapping
     * `DModal` to itself. A backtick is the one reliable mark that a name is
     * being talked about rather than called.
     */
    const outsideCode = (text, rewrite) => {
      const spans = [];
      const masked = text.replace(/`[^`\n]*`/g, (span) => {
        spans.push(span);
        return `\u0000${spans.length - 1}\u0000`;
      });
      return rewrite(masked).replace(/\u0000(\d+)\u0000/g, (_, i) => spans[Number(i)]);
    };

    /*
     * A drawer's default placement was `end`, and the merged component's is
     * `center`. So a `<DOffcanvas>` with no `openFrom` has to GAIN
     * `placement="end"` — dropping the name without adding the placement
     * would silently turn every drawer into a centred dialog.
     */
    after = outsideCode(after, (code) => code
      .replace(/<DOffcanvas(\s)((?:[^>]|\n)*?)(\/?)>/g, (match, ws, attrs, selfClose) => {
        const placement = /\b(?:openFrom|placement)=/.test(attrs) ? '' : ' placement="end"';
        return `<DModal${ws}${attrs}${placement}${selfClose}>`;
      })
      .replace(/<\/DOffcanvas>/g, '</DModal>')
      .replace(/<DOffcanvas\./g, '<DModal.')
      .replace(/<\/DOffcanvas\./g, '</DModal.')
      .replace(/\bDOffcanvas(Header|Body|Footer)\b/g, 'DModal$1')
      .replace(/\bDOffcanvas\b/g, 'DModal')
      .replace(/\bOffcanvasPositionToggleFrom\b/g, 'OverlayPlacement')
      .replace(/\bModalSize\b/g, 'OverlaySize')
      .replace(/\bModalFullScreenFrom\b/g, 'OverlayPlacement'));

    /*
     * Prop rewrites apply INSIDE a `<DModal …>` tag only.
     *
     * Run over the whole file, `/\s+centered…/` matched the prose in
     * `it('should render a centered and large modal')` and deleted the word,
     * leaving a test whose name no longer said anything. A prop name is a
     * common English word; the thing that makes it a prop is the tag it sits
     * in, so that is what has to be matched.
     */
    after = outsideCode(after, (code) => code.replace(
      /<DModal(\s(?:[^>]|\n)*?)(\/?)>/g,
      (match, attrs, selfClose) => {
        let rewritten = attrs;
        for (const [pattern, replacement] of PROP_REWRITES) {
          rewritten = rewritten.replace(pattern, replacement);
        }
        return `<DModal${rewritten}${selfClose}>`;
      },
    ));

    /*
     * The same props again, as object properties.
     *
     * A Storybook `args: { centered: true }` or a config object passed through
     * a spread is a call site too, and the tag-scoped pass above cannot see
     * it. Handled separately rather than by widening that pass, because
     * widening is what made it delete the word "centered" out of a sentence.
     */
    after = outsideCode(after, (code) => code
      .replace(/^\s*(?:centered|scrollable|fullScreen|fullScreenFrom|transition):\s*[^,\n]+,\n/gm, '')
      .replace(/^(\s*)openFrom:/gm, '$1placement:'));

    for (const [pattern, advice] of NEEDS_A_PERSON) {
      if (!pattern.test(after)) continue;
      after.split('\n').forEach((line, i) => {
        // A prose mention is not a call site — not in a doc comment, and not
        // in the migration table that documents this very rename. Reporting
        // them is harmless but it dilutes a list whose whole value is that
        // every line on it needs action.
        if (/^\s*(\*|\/\/|\/\*)/.test(line)) return;
        const code = line.replace(/`[^`\n]*`/g, '');
        if (pattern.test(code)) manual.push(`${relative(ROOT, file)}:${i + 1}  ${advice}`);
      });
    }

    if (after === before) continue;
    touched += 1;
    changed += 1;
    if (WRITE) writeFileSync(file, after);
  }
}

process.stdout.write(`migrate-overlay: ${changed} file(s) ${WRITE ? 'rewritten' : 'would change'}\n`);
if (manual.length) {
  process.stdout.write(`\n${manual.length} site(s) a person has to decide:\n`);
  for (const m of manual) process.stdout.write(`  ${m}\n`);
}
if (!WRITE && touched) process.stdout.write('\nmigrate-overlay: re-run with --write to apply\n');
