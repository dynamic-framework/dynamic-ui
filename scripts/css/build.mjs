/**
 * build.mjs — assembles the Dynamic 3.x stylesheets.
 *
 * Replaced `scripts/build-scss.js`, which shelled out to `sass` over
 * `src/style/dynamic-ui.scss` and produced a single 1.24 MB file. Both are now
 * deleted: there is no preprocessor in 3.x. `src/css/**` is plain CSS that
 * reads tokens, and the two places that need iteration — the variant matrices
 * and the utility layer — are generators that read the token model directly, so
 * neither can drift from it.
 *
 * ## Output
 *
 *   dynamic.css                     everything, responsive utilities included
 *   dynamic.core.css                reset + base, no components
 *   dynamic.components.css          components + variant matrices
 *   dynamic.utilities.css           the curated utility layer, base variants only
 *   dynamic.utilities.responsive.css the breakpoint variants on their own
 *   components/<name>.css           one per component, for partial loading
 *
 * Every file also gets a `.min.css`. Token custom properties come from
 * `dist/tokens/dynamic.tokens.css`, so `npm run tokens:build` must run first —
 * the script checks and says so rather than silently emitting a stylesheet with
 * no values in it.
 *
 * Usage: node scripts/css/build.mjs
 */

import {
  readFileSync, writeFileSync, mkdirSync, existsSync, rmSync,
} from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { gzipSync } from 'zlib';

import esbuild from 'esbuild';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import browserslist from 'browserslist';

import { css as variantsCss, stats as variantStats } from './build-variants.mjs';
import { buildLiveRamp } from './build-live-ramp.mjs';
import {
  css as utilitiesCss,
  responsiveCss,
  stats as utilityStats,
  manifest as utilityManifest,
  breakpoints as utilityBreakpoints,
} from './build-utilities.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const SRC = resolve(ROOT, 'src/css');
const OUT = resolve(ROOT, 'dist/css');
const TOKENS_CSS = resolve(ROOT, 'dist/tokens/dynamic.tokens.css');

const { version } = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));

/**
 * Source order. Explicit rather than globbed: the cascade is load-bearing and a
 * directory listing is not a design decision.
 *
 * (Layer ORDER itself is fixed by the `@layer` statement in layers.css, so this
 * list only controls the order of rules within a layer.)
 */
const RESET = ['layers.css', 'reset.css'];
const BASE = [
  'base/document.css',
  'base/typography.css',
];
const COMPONENTS = [
  'components/icon.css',
  'components/skeleton.css',
  'components/spinner.css',
  'components/button.css',
  'components/input.css',
  'components/badge.css',
  'components/chip.css',
  'components/choice.css',
  'components/layout.css',
  'components/list.css',
  'components/progress.css',
  'components/alert.css',
  'components/toast.css',
  'components/card.css',
  'components/calendar.css',
  'components/carousel.css',
  'components/box.css',
  'components/avatar.css',
  'components/tabs.css',
  'components/collapse.css',
  'components/combobox.css',
  'components/table.css',
  'components/timeline.css',
  'components/dropzone.css',
  'components/range.css',
  'components/pagination.css',
  'components/password-strength.css',
  'components/voucher.css',
  'components/state.css',
  'components/stepper.css',
  'components/pin.css',
  'components/select.css',
  'components/credit-card.css',
  'components/overlay.css',
  'components/floating.css',
];

/**
 * Size budgets in KB, minified. CI fails the build when one is exceeded.
 *
 * These are set from measurement plus explicit headroom for the components not
 * yet ported, NOT from a round number. The arithmetic, at four components done:
 *
 *   tokens                    ~25 KB   fixed; grows only with new tokens
 *   reset + base               ~7 KB   fixed
 *   components                 ~2.5 KB each -> ~135 KB at 54
 *   variant matrices          ~13 KB   at 2 matrices; ~30 KB at 6
 *   utilities                 ~21 KB   fixed by the curated catalogue
 *                             -------
 *   projected complete        ~220 KB minified, ~32 KB gzipped
 *
 * So the earlier 120 KB figure was wrong: it was a target picked before any
 * component existed, and four components in, the per-component cost says the
 * complete bundle lands near 220 KB. That is still an 83% cut from 2.x's
 * 1,264 KB, and the per-component files mean a page loads what it uses rather
 * than the whole catalogue.
 *
 * Budgets are set ~15% above the current measurement so a regression trips
 * them, and are meant to be RAISED deliberately as components land — never
 * quietly.
 */
// Raised deliberately, never quietly, with the reason each time:
//   90 -> 96 -> 100   spinner, badge, chip, then icon and the input additions
//   28 -> 34 -> 40 -> 52    same, then choice/list/progress
//   100 -> 112 -> 132  choice/list/progress, then avatar, box, tabs,
//                     collapse, timeline, toast and dropzone
//   38 -> 46 -> 56     subtree theming, then the growing token layer: every
//                     new component adds its own tokens, and core carries them
//   350 -> 390  three components that used to be a third party's CSS and are
//             now ours: the carousel, the paginator and the combobox. The
//             combobox is the bulk of it — a control, a tag list, a portalled
//             menu and its options — and it replaces ~40 KB of react-select's
//             own JavaScript and inline styles, so the page is lighter even
//             though this file is bigger.
//   200 -> 350  the complete stylesheet now contains the responsive variants,
//             which were opt-in and therefore silently missing wherever anyone
//             forgot the second <link>. 190 KB + 147 KB, plus the usual ~10%.
//             Still a 72% cut on 2.x's 1,264 KB, and 41 KB gzipped against 119.
//   53 -> 61  the last of the surface: a 12-column grid (the templates lay
//             pages out with `grid`/`g-col-*`, which had no 3.x equivalent at
//             all), per-side radii, page containers, and the presentational
//             odds and ends — cursor, italic, underline, object-fit,
//             vertical-align, float, border-style. Set from the COMPLETE
//             surface this time rather than mid-migration, so the next bump
//             should be a real regression rather than more of the same work.
//   45 -> 53, 140 -> 160  the utility surface the 2.x templates actually use:
//                     the full 0-30 spacing scale, `m*-auto`, the four position
//                     utilities and per-edge border widths. Found by running
//                     the class inventory over the stories rather than by
//                     guessing what a page needs. Both files were within ~1 KB
//                     of their old ceiling, which is a budget about to trip on
//                     the next honest addition, not a budget doing its job.
//   Making `[data-df-theme]` work on any
//                     element, not just :root, means the light mode has to
//                     re-assert every token dark overrides — a second ~100-line
//                     block in the token layer. That is the cost of being able
//                     to put a dark panel on a light page.
const BUDGETS = {
  /*
   *  390 -> 440  627 decorative hue classes: nineteen palette ramps across
   *              eleven steps, for background, text and border. Measured
   *              415.6 KB min / 50.4 KB gzip.
   *
   *              Shipped in the main sheet rather than as an opt-in file, on
   *              purpose. The responsive utilities were opt-in once and the
   *              result was 117 classes that silently did nothing on any page
   *              that had not linked the extra stylesheet — and there is no
   *              build step on a Modyo template to catch it. 4.5 KB gzip,
   *              cached immutably, is the cheaper side of that trade.
   */
  'dynamic.min.css': 440,
  'dynamic.core.min.css': 68,
  'dynamic.components.min.css': 132,
  /*
   *   61 -> 78   231 stepped colour classes: `bg-primary-100` and the text and
   *              border versions, for seven roles across eleven palette steps.
   *              The role vocabulary exposes two shades per role — right for a
   *              component, not enough for a page. Measured 67.3 KB min /
   *              8.8 KB gzip, plus the usual headroom.
   */
  /*
   *   78 -> 115  The same 627 classes, in the utilities-only slice. Measured
   *              102.0 KB min / 12.5 KB gzip.
   */
  'dynamic.utilities.min.css': 115,
  'dynamic.utilities.responsive.min.css': 160,
  /*
   * One relative-colour declaration per derived palette step.
   *
   *   14 -> 24   eleven families to nineteen: the eight decorative hues get a
   *              live ramp too, so overriding `--df-color-slate-500` moves its
   *              scale exactly as overriding `--df-color-blue-500` does.
   *              190 declarations, 20.6 KB min / 3.2 KB gzip, and still
   *              opt-in.
   */
  'dynamic.live-ramp.min.css': 24,
};

/* ------------------------------------------------------------------ */

function read(rel) {
  const path = resolve(SRC, rel);
  if (!existsSync(path)) throw new Error(`css: missing source ${rel}`);
  return readFileSync(path, 'utf8');
}

if (!existsSync(TOKENS_CSS)) {
  process.stderr.write(
    'css: dist/tokens/dynamic.tokens.css not found.\n'
    + 'css: run `npm run tokens` first — without it the stylesheet has no values.\n',
  );
  process.exit(1);
}
const tokensCss = readFileSync(TOKENS_CSS, 'utf8');

/** browserslist -> esbuild target list, one entry per engine at its minimum. */
function esbuildTargets() {
  const map = {
    chrome: 'chrome', edge: 'edge', firefox: 'firefox', safari: 'safari',
    ios_saf: 'ios', opera: 'opera',
  };
  const mins = new Map();
  for (const entry of browserslist(undefined, { path: ROOT })) {
    const [name, versionRange] = entry.split(' ');
    const target = map[name];
    if (!target) continue;
    const v = parseFloat(String(versionRange).split('-')[0]);
    if (!Number.isFinite(v)) continue;
    if (!mins.has(target) || v < mins.get(target)) mins.set(target, v);
  }
  return [...mins].map(([t, v]) => `${t}${v}`);
}

const targets = esbuildTargets();

const banner = (what) => `/*!
 * Dynamic Framework ${version} — ${what}
 * GENERATED by scripts/css/build.mjs. Do not edit.
 */
`;

/* ------------------------------------------------------------------ */

const results = [];

async function emit(name, parts, what) {
  const raw = banner(what) + parts.filter(Boolean).join('\n\n');

  // Autoprefixer only; no nesting or custom-property polyfill, because the
  // browser floors in .browserslistrc already cover everything authored here.
  const prefixed = (await postcss([autoprefixer]).process(raw, { from: undefined })).css;

  const minified = (await esbuild.transform(prefixed, {
    loader: 'css',
    minify: true,
    target: targets,
  })).code;

  const dir = resolve(OUT, dirname(name));
  mkdirSync(dir, { recursive: true });

  const minName = name.replace(/\.css$/, '.min.css');
  writeFileSync(resolve(OUT, name), prefixed, 'utf8');
  writeFileSync(resolve(OUT, minName), banner(what) + minified, 'utf8');

  results.push({
    name,
    raw: Buffer.byteLength(prefixed, 'utf8'),
    min: Buffer.byteLength(minified, 'utf8'),
    gzip: gzipSync(Buffer.from(minified, 'utf8'), { level: 9 }).length,
  });
}

/* ------------------------------------------------------------------ */

// `dist/css/` is this build's alone now that the Sass build is gone, so the
// whole directory can go. (It was scoped to `components/` while both builds
// wrote here, because an earlier version wiped the Sass output by accident.)
if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(OUT, { recursive: true });

const resetParts = RESET.map(read);
const baseParts = BASE.map(read);
const componentParts = COMPONENTS.map(read);

/**
 * The responsive variants are IN the complete stylesheet.
 *
 * They used to be opt-in, on the reasoning that most pages do not use them and
 * 14 KB gzipped is worth saving. That reasoning ignored how the saving fails:
 * a `df-md:col-span-6` with no rule behind it renders as nothing — no error, no
 * warning, just a layout that silently ignores its breakpoints. It caught this
 * repository's own Storybook, where 117 of them had been quietly dead.
 *
 * A template author writing `df-md:p-4` in Liquid has no way to know a second
 * stylesheet exists, so a bundle called "everything" has to contain them. The
 * separate file stays for anyone assembling their own from the parts below.
 */
await emit(
  'dynamic.css',
  [...resetParts, tokensCss, ...baseParts, ...componentParts, variantsCss, utilitiesCss, responsiveCss],
  'complete stylesheet',
);

await emit('dynamic.core.css', [...resetParts, tokensCss, ...baseParts], 'tokens, reset and base');
await emit('dynamic.components.css', [...componentParts, variantsCss], 'components only');
await emit('dynamic.utilities.css', [utilitiesCss], 'utilities only');
await emit('dynamic.utilities.responsive.css', [responsiveCss], 'responsive utilities (opt-in)');

const liveRamp = buildLiveRamp();
await emit('dynamic.live-ramp.css', [liveRamp.css], 'runtime palette ramp (opt-in)');

// Per-component files, for a page that needs two components and not forty.
for (const rel of COMPONENTS) {
  const name = basename(rel, '.css');
  await emit(`components/${name}.css`, [read(rel)], `${name} component`);
}

/* ------------------------------------------------------------------ */

const kb = (bytes) => (bytes / 1024).toFixed(1);
const pad = (s, n) => String(s).padEnd(n);

process.stdout.write(`\ncss: targets ${targets.join(', ')}\n\n`);
process.stdout.write(`${pad('file', 34)}${'raw'.padStart(9)}${'min'.padStart(9)}${'gzip'.padStart(9)}${'budget'.padStart(11)}\n`);

let over = 0;
for (const r of results) {
  const minName = r.name.replace(/\.css$/, '.min.css');
  const budget = BUDGETS[minName];
  const minKb = r.min / 1024;
  let verdict = '';
  if (budget) {
    verdict = minKb <= budget ? `${budget} ok` : `${budget} OVER`;
    if (minKb > budget) over += 1;
  }
  process.stdout.write(
    `${pad(r.name, 34)}${`${kb(r.raw)} KB`.padStart(9)}${`${kb(r.min)} KB`.padStart(9)}${`${kb(r.gzip)} KB`.padStart(9)}${verdict.padStart(11)}\n`,
  );
}

const full = results.find((r) => r.name === 'dynamic.css');

/**
 * The 2.x baseline, measured from `dist/css/dynamic-ui.min.css` on the last
 * build before `src/style/` was deleted. Recorded rather than re-measured
 * because the Sass tree and the Bootstrap dependency are both gone — there is
 * nothing left to compile.
 */
const LEGACY_BASELINE = { min: 1264.2 * 1024, gzip: 119.5 * 1024 };
process.stdout.write(`\ncss: ${variantStats.blocks} variant blocks (${variantStats.roles} roles x ${variantStats.components} components)\n`);
process.stdout.write(
  `css: ${utilityStats.base} utility rules `
  + `(${utilityStats.hover} hover:, ${utilityStats.dark} dark:), `
  + `${utilityStats.responsive} responsive (opt-in)\n`,
);
/*
 * The runtime ramp must resolve to the palette it replaces.
 *
 * Every expression in `dynamic.live-ramp.css` is evaluated here against its
 * own seed and compared to the committed hex. A sheet that shifted the colours
 * even slightly would be worse than no sheet: a consumer links it to make
 * rebranding work, and silently gets a palette that matches nothing in Figma
 * and nothing in the contrast report.
 */
if (liveRamp.mismatches.length) {
  process.stderr.write('\ncss: the live ramp does not reproduce the palette:\n');
  for (const line of liveRamp.mismatches) process.stderr.write(`  ${line}\n`);
  process.exit(1);
}
process.stdout.write(
  `css: live ramp — ${liveRamp.count} derived steps, every one resolves to its committed hex\n`,
);

/*
 * The utility surface, as data, next to the stylesheet it describes.
 *
 * `stories/foundations/Utilities.stories.tsx` renders its reference from this
 * file, so the page cannot list a class the build did not emit or miss one it
 * did. Written into `dist/` rather than `stories/` because it is a build
 * output: it is regenerated every run and never edited.
 */
const manifestJson = `${JSON.stringify(
  { breakpoints: utilityBreakpoints, groups: utilityManifest },
  null,
  2,
)}\n`;

writeFileSync(resolve(OUT, 'utilities.manifest.json'), manifestJson, 'utf8');

/*
 * A second copy, in the source tree, and the stories import THAT one.
 *
 * `dist/` is a `staticDirs` entry in `.storybook/main.ts`, so Vite serves
 * everything in it as a static asset rather than putting it in the module
 * graph. A story importing from there gets a snapshot: editing a seed and
 * rebuilding changes the file on disk and nothing in a running dev server,
 * which looks exactly like a story that does not work.
 *
 * It also means Storybook could not start on a fresh clone — the import
 * pointed at a build output that did not exist yet. Committed here, it can.
 *
 * Both are written from one object, so there is nothing to drift.
 */
writeFileSync(resolve(ROOT, 'stories/utilities/utilities.manifest.json'), manifestJson, 'utf8');
process.stdout.write(
  `css: utilities.manifest.json — ${utilityManifest.length} families, `
  + `${utilityManifest.reduce((n, g) => n + g.rules.length, 0)} rules\n`,
);

process.stdout.write(`css: spacing covers all ${utilityStats.spacingSteps} scale steps; breakpoints ${utilityStats.breakpoints.join(', ')}\n`);
// The scope decisions, printed rather than discovered.
process.stdout.write(`css: no hover: variant for ${utilityStats.noHover.join(', ')}\n`);
process.stdout.write(`css: no dark: variant for ${utilityStats.noDark.join(', ')}\n`);

process.stdout.write(`css: 2.x ${kb(LEGACY_BASELINE.min)} KB min / ${kb(LEGACY_BASELINE.gzip)} KB gzip (recorded)\n`);
process.stdout.write(
  `css: 3.x ${kb(full.min)} KB min / ${kb(full.gzip)} KB gzip  -> `
  + `${(100 - (full.min / LEGACY_BASELINE.min) * 100).toFixed(1)}% smaller minified, `
  + `${(100 - (full.gzip / LEGACY_BASELINE.gzip) * 100).toFixed(1)}% gzipped\n`,
);

if (over) {
  process.stderr.write(`\ncss: ${over} file(s) over budget\n`);
  process.exit(1);
}
process.stdout.write('\ncss: all files within budget\n');
