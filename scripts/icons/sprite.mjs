/**
 * sprite.mjs — builds an SVG sprite from a list of Lucide icon names.
 *
 * ## The problem this solves
 *
 * React imports the icons it uses and the bundler drops the rest. Plain HTML
 * has no bundler: a template author who wants a check mark either pastes the
 * SVG wherever it appears — repeated in every button, uncacheable, impossible
 * to restyle centrally, and stale the moment Lucide ships a new draw — or they
 * link a whole icon library and ship 1,900 glyphs to use fifteen.
 *
 * A sprite is the middle: one `<symbol>` per icon, defined once, referenced by
 * id. The markup at each use site is one line, the definition is one place.
 *
 * ## Why the output is meant for a Modyo snippet
 *
 * The sprite is emitted INLINE, to be pasted into a snippet and included in
 * the layout — not published as a file to `<use href="https://…/sprite.svg#x">`.
 *
 * An external `<use>` is a cross-origin request, which needs CORS on the
 * bucket, fails silently when it is missing (the icon simply does not render,
 * with nothing in the console in some browsers), and costs a round trip before
 * any icon paints. A same-document fragment has none of those failure modes,
 * and fifteen icons is about 2 KB of markup that gzips with the page.
 *
 * Usage:
 *   node scripts/icons/sprite.mjs check x chevron-down
 *   node scripts/icons/sprite.mjs --core          # the set the library itself needs
 *   node scripts/icons/sprite.mjs --core --liquid # wrapped as a Modyo snippet
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const ICONS = resolve(ROOT, 'node_modules/lucide-react/dist/esm/icons');

/**
 * What the library's own components ask for, as Lucide names.
 *
 * Kept in step with `iconMap` in `src/contexts/DContext.tsx` — a vanilla page
 * that renders a modal, a collapse or an alert needs exactly these, so this is
 * the floor for any site using the framework-free build.
 */
export const CORE = [
  'x', 'check', 'upload', 'calendar', 'play', 'pause', 'search',
  'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right',
  'circle-alert', 'triangle-alert', 'circle-check', 'info',
  'eye', 'eye-off', 'plus', 'minus',
];

/**
 * The attributes that make a Lucide icon look like one.
 *
 * They go on the `<symbol>`, not on the sprite's root `<svg>`. `<use>` clones
 * the symbol into a shadow tree at the USE site, so it inherits from there —
 * anything hoisted to the sprite root would never reach it. Costs about sixty
 * bytes per icon and is the difference between a glyph and a blank box.
 */
const PRESENTATION = 'fill="none" stroke="currentColor" stroke-width="2" '
  + 'stroke-linecap="round" stroke-linejoin="round"';

/** `[["path", { d: "…", key: "…" }]]` -> `<path d="…"/>` */
function nodesToSvg(nodes) {
  return nodes.map(([tag, attrs]) => {
    const rendered = Object.entries(attrs)
      // `key` is React's reconciliation hint, not an SVG attribute.
      .filter(([name]) => name !== 'key')
      .map(([name, value]) => `${name}="${value}"`)
      .join(' ');
    return `<${tag} ${rendered}/>`;
  }).join('');
}

/**
 * Reads one icon's geometry out of the Lucide package.
 *
 * Parsed from the module's source rather than imported, because importing it
 * pulls in `createLucideIcon` and React. The `__iconNode` export is a plain
 * array literal and is the one thing in the file that matters.
 */
export function iconNode(name) {
  const file = resolve(ICONS, `${name}.js`);
  if (!existsSync(file)) return null;

  const source = readFileSync(file, 'utf8');
  const match = /const __iconNode = (\[[\s\S]*?\]);\n/.exec(source);
  if (!match) return null;

  // The literal is valid JS but not valid JSON — unquoted keys, trailing
  // commas removed by the bundler. Evaluating it is safe: the input is a file
  // from node_modules, not user data.
  // eslint-disable-next-line no-new-func
  return Function(`return ${match[1]}`)();
}

export function buildSprite(names) {
  const symbols = [];
  const missing = [];

  for (const name of names) {
    const nodes = iconNode(name);
    if (!nodes) { missing.push(name); continue; }
    symbols.push(
      `  <symbol id="i-${name}" viewBox="0 0 24 24" ${PRESENTATION}>`
      + `${nodesToSvg(nodes)}</symbol>`,
    );
  }

  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display:none">',
    ...symbols,
    '</svg>',
  ].join('\n');

  return { svg, missing, count: symbols.length };
}

/* ------------------------------------------------------------------ */

if (process.argv[1] && process.argv[1].endsWith('sprite.mjs')) {
  const args = process.argv.slice(2);
  const liquid = args.includes('--liquid');
  const names = args.includes('--core')
    ? CORE
    : args.filter((a) => !a.startsWith('--'));

  if (!names.length) {
    process.stderr.write('usage: node scripts/icons/sprite.mjs <icon-name>… | --core [--liquid]\n');
    process.exit(1);
  }

  const { svg, missing, count } = buildSprite(names);

  if (missing.length) {
    process.stderr.write(
      `\nnot in Lucide: ${missing.join(', ')}\n`
      + 'Names are kebab-case, as on lucide.dev — `circle-alert`, not `AlertCircle`.\n\n',
    );
  }

  process.stdout.write(liquid
    ? `{% comment %}\n  Icons — generated, ${count} symbols.\n`
      + `  Regenerate: node scripts/icons/sprite.mjs ${names.join(' ')} --liquid\n`
      + `{% endcomment %}\n${svg}\n`
    : `${svg}\n`);

  process.stderr.write(`\n${count} icon(s), ${(Buffer.byteLength(svg) / 1024).toFixed(1)} KB\n`);
}
