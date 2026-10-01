/**
 * consistency.mjs — checks that the hand-written component CSS reaches for
 * tokens, and for the right layer of them.
 *
 * `css:validate` proves nothing dangles and `css:verify` proves the colours
 * resolve. Neither says anything about *which* token a rule reached for, and
 * that is what decides whether the system stays coherent:
 *
 *   - a `padding: 12px` renders fine and ignores the spacing scale;
 *   - a `color: var(--df-color-blue-500)` renders fine and survives a rebrand
 *     pointing at the old blue;
 *   - a `gap: 0.75rem` renders fine and is a step the scale does not have.
 *
 * None of those are errors a browser or a linter reports. They are the way a
 * design system quietly stops being one.
 *
 * Usage: node scripts/css/consistency.mjs
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const SOURCES = ['src/css/components', 'src/css/base'];

/** Properties whose value should come from the spacing or sizing scale. */
const SPACING_PROPS = new Set([
  'padding', 'padding-block', 'padding-inline',
  'padding-block-start', 'padding-block-end',
  'padding-inline-start', 'padding-inline-end',
  'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'margin', 'margin-block', 'margin-inline',
  'margin-block-start', 'margin-block-end',
  'margin-inline-start', 'margin-inline-end',
  'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
  'gap', 'row-gap', 'column-gap',
]);

/** Properties whose value should come from a colour token. */
const COLOR_PROPS = new Set([
  'color', 'background-color', 'border-color', 'outline-color',
  'border-block-start-color', 'border-block-end-color',
  'border-inline-start-color', 'border-inline-end-color',
  'caret-color', 'text-decoration-color', 'fill', 'stroke',
]);

/**
 * Values that are legitimately not a token.
 *
 * `0` needs no scale step. `auto`, `inherit` and friends are keywords.
 * `currentcolor` and `transparent` are relationships, not colours. A percentage
 * or a viewport unit is a layout relationship too.
 */
const ALLOWED = /^(0|auto|inherit|initial|unset|revert|none|currentcolor|transparent|100%|[0-9.]+%|[0-9.]+(?:vw|vh|dvh|svh|ch|em)|calc\(.*\)|var\(.*\)|color-mix\(.*\)|linear-gradient\(.*\)|radial-gradient\(.*\)|conic-gradient\(.*\)|url\(.*\)|inherit)$/i;

/** A `var()` reference, captured so its layer can be checked. */
const VAR_RE = /var\(\s*(--df-[a-z0-9-]+)/i;

/**
 * Colour tokens a component may reach for.
 *
 * NOT the raw palette: a component using `--df-color-blue-500` has bypassed
 * the semantic layer, so it keeps the old blue through a rebrand while
 * everything around it moves. The palette is for the semantic layer to alias.
 * `--df-color-white` / `-black` / `-alpha-*` are the exception — they are
 * absolutes that no rebrand moves.
 */
const RAW_PALETTE_RE = /^--df-color-(?!white$|black$|alpha-)[a-z]+-\d+$/;

/**
 * Selectors that are a trap rather than a mistake.
 *
 * These match MORE than they read as, so a rule using one does the right thing
 * in the state the author was thinking about and something surprising in a
 * state they were not. A browser reports nothing, and — the reason this check
 * exists rather than a test — jsdom does not implement them either, so the test
 * suite cannot report anything either.
 */
const SELECTOR_TRAPS = [
  {
    // `:indeterminate` also matches an `input[type="radio"]` whose radio group
    // has NOTHING selected. A rule meant for a checkbox's dash state therefore
    // styles every unselected radio on the page.
    pattern: /:indeterminate/,
    requires: /\[type="checkbox"\]/,
    message: '`:indeterminate` also matches a radio whose group has no selection — '
      + 'scope it with `[type="checkbox"]` or it styles every unselected radio',
  },
];

/* ------------------------------------------------------------------ */

function cssFiles() {
  const out = [];
  for (const dir of SOURCES) {
    const abs = resolve(ROOT, dir);
    if (!existsSync(abs)) continue;
    for (const f of readdirSync(abs)) {
      if (f.endsWith('.css')) out.push(join(dir, f));
    }
  }
  return out.sort();
}

/**
 * Splits a shorthand value into its parts, keeping any `calc()` / `var()` /
 * `clamp()` whole.
 *
 * The naive `value.split(/\s+/)` tore a multi-line `calc()` into fragments
 * like `+` and `(var(--df-x)` and reported each as a literal.
 */
function valueParts(value) {
  const parts = [];
  let depth = 0;
  let current = '';
  for (const ch of value) {
    if (ch === '(') depth += 1;
    if (ch === ')') depth -= 1;
    if (/\s/.test(ch) && depth === 0) {
      if (current) parts.push(current);
      current = '';
      continue;
    }
    current += ch;
  }
  if (current) parts.push(current);
  return parts;
}

/**
 * Lines carrying an opt-out, with the reason the author gave.
 *
 * The closing `*\/` is deliberately NOT required on the same line: a reason
 * worth writing usually wraps, and requiring it meant every multi-line opt-out
 * silently failed to match.
 */
const DISABLE_RE = /\/\*\s*df-consistency-disable-next-line\s*(.*?)\s*(?:\*\/|$)/;

const findings = [];

for (const rel of cssFiles()) {
  const source = readFileSync(resolve(ROOT, rel), 'utf8');
  const lines = source.split('\n');

  // An opt-out applies to the next DECLARATION, not the next line: the reason
  // usually wraps across two or three comment lines, so counting lines put the
  // exemption on the middle of the comment.
  const exempt = new Set();
  lines.forEach((l, i) => {
    const d = DISABLE_RE.exec(l);
    if (!d) return;
    // The reason is mandatory, so a disable explains itself rather than just
    // silencing the check.
    if (!d[1]) {
      findings.push({
        kind: 'bare-disable',
        where: `${rel}:${i + 1}`,
        message: 'df-consistency-disable-next-line needs a reason after it',
      });
    }
    for (let j = i + 1; j < lines.length; j += 1) {
      const next = lines[j].trim();
      if (!next || next.startsWith('/*') || next.startsWith('*') || next.endsWith('*/')) continue;
      exempt.add(j + 1);
      break;
    }
  });

  // Comments hold example CSS and prose; neither is a declaration. Blanking
  // them rather than removing them keeps the line numbers honest.
  const code = source.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));

  // Selector traps, checked per selector list rather than per declaration.
  const SELECTOR_RE = /(^|[}])\s*([^{}]+?)\s*\{/g;
  let sel;
  while ((sel = SELECTOR_RE.exec(code)) !== null) {
    const selector = sel[2].replace(/\s+/g, ' ').trim();
    if (!selector || selector.startsWith('@')) continue;
    for (const trap of SELECTOR_TRAPS) {
      if (!trap.pattern.test(selector) || trap.requires.test(selector)) continue;
      findings.push({
        kind: 'selector-trap',
        where: `${rel}:${code.slice(0, sel.index).split('\n').length}`,
        message: `${selector} — ${trap.message}`,
      });
    }
  }

  const DECL_RE = /(^|[;{])\s*([a-z-]+)\s*:\s*([^;}]+)/gi;
  let m;
  while ((m = DECL_RE.exec(code)) !== null) {
    const prop = m[2].toLowerCase();
    const value = m[3].trim().replace(/\s+/g, ' ');
    if (prop.startsWith('--')) continue;

    // The match starts at the `;` or `{` that ended the PREVIOUS declaration,
    // so the offset has to walk forward to the property name itself —
    // otherwise a declaration preceded by a comment is reported several lines
    // early, and an opt-out on the right line never lines up.
    const line = code.slice(0, m.index + m[0].indexOf(m[2])).split('\n').length;
    if (exempt.has(line)) continue;
    const where = `${rel}:${line}`;

    if (SPACING_PROPS.has(prop)) {
      for (const part of valueParts(value)) {
        if (!part || ALLOWED.test(part)) continue;
        findings.push({
          kind: 'literal-spacing',
          where,
          message: `${prop}: ${part} — use a size token (--df-size-*) or a component token`,
        });
      }
    }

    if (COLOR_PROPS.has(prop)) {
      if (!ALLOWED.test(value)) {
        findings.push({
          kind: 'literal-colour',
          where,
          message: `${prop}: ${value} — use a semantic or component colour token`,
        });
      }
      const ref = VAR_RE.exec(value);
      if (ref && RAW_PALETTE_RE.test(ref[1])) {
        findings.push({
          kind: 'raw-palette',
          where,
          message: `${prop}: ${ref[1]} — a component must not reach past the semantic layer into the palette`,
        });
      }
    }
  }
}

/* ------------------------------------------------------------------ */

const byKind = findings.reduce((acc, f) => {
  (acc[f.kind] ??= []).push(f);
  return acc;
}, {});

process.stdout.write(`css-consistency: checked ${cssFiles().length} stylesheet(s)\n`);

if (!findings.length) {
  process.stdout.write('css-consistency: spacing and colour come from tokens everywhere\n');
  process.exit(0);
}

for (const [kind, list] of Object.entries(byKind)) {
  process.stderr.write(`\n${kind} (${list.length}):\n`);
  for (const f of list) process.stderr.write(`  ${f.where}  ${f.message}\n`);
}
process.stderr.write(`\ncss-consistency: ${findings.length} inconsistency(ies)\n`);
process.exit(1);
