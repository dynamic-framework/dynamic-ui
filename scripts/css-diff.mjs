#!/usr/bin/env node
/**
 * css-diff.mjs
 *
 * Diff del CSS distribuido (dist/css/dynamic-ui.css) entre dos versiones, para
 * agregarlo al final de las notas de cada GitHub Release (lo corre cdn.yml).
 *
 * El diff se separa en dos secciones: las reglas cuyo selector incluye `:root`
 * (variables globales, también las que están dentro de un @media) y el resto
 * del CSS (clases, utilidades, @keyframes, etc.). Se ignora el comentario de
 * cabecera con la versión de Dynamic UI, que cambia en cada release.
 *
 * Uso:
 *   node scripts/css-diff.mjs --prev <css> --next <css> --out-dir <dir>
 *     [--prev-label v2.12.0] [--next-label v2.12.1]
 *     [--patch-url <url del asset css-diff.patch>] [--notes <body actual del release>]
 *
 *   Escribe <dir>/css-diff.patch (diff completo) y <dir>/css-diff.md (bloque
 *   Markdown con el diff). Con --notes escribe además <dir>/notes.md: el body
 *   recibido con el bloque agregado al final (o reemplazado si ya estaba),
 *   dentro del límite de caracteres del body de un release.
 *
 *   node scripts/css-diff.mjs previous-version <manifest.json> <versión actual>
 *
 *   Imprime la mayor versión estable del índice del CDN menor a la actual
 *   (cubre backports: para 2.11.1 devuelve 2.11.0 aunque exista 2.12.0). No
 *   imprime nada si no hay ninguna.
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';
import { compareStable } from './compare-stable.mjs';

// Límite del body de un release en GitHub.
export const RELEASE_BODY_LIMIT = 125000;
export const START_MARKER = '<!-- css-diff:start -->';
export const END_MARKER = '<!-- css-diff:end -->';

const SECTIONS = [
  { key: 'root', title: 'Variables `:root`', file: 'root.css' },
  { key: 'rest', title: 'Resto del CSS', file: 'rest.css' },
];

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(2);
}

function parseFlags(args) {
  const flags = {};
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (!arg.startsWith('--')) fail(`Argumento inesperado: ${arg}`);
    const value = args[i + 1];
    if (value === undefined || value.startsWith('--')) fail(`Falta el valor de ${arg}`);
    flags[arg.slice(2)] = value;
    i += 1;
  }
  return flags;
}

// --- previous-version ---

export function previousVersion(versions, current) {
  const core = current.replace(/^v/, '').split(/[-+]/)[0];
  return versions
    .filter((version) => !version.includes('-'))
    .filter((version) => compareStable(version, core) < 0)
    .sort(compareStable)
    .pop() ?? null;
}

// --- Separación :root / resto ---

function isRootRule(node) {
  return node.type === 'rule' && node.selectors.some((selector) => selector.trim() === ':root');
}

function isVersionHeader(node) {
  return node.type === 'comment' && /dynamic-framework\s+\d/.test(node.text);
}

/**
 * Devuelve el CSS de las reglas `:root` (con sus at-rules contenedoras) y el
 * del resto, conservando el formato original para que el diff sea por línea.
 */
export function splitCss(css) {
  const tree = postcss.parse(css);
  tree.walkComments((comment) => {
    if (isVersionHeader(comment)) comment.remove();
  });

  const rootParts = [];
  tree.walkRules((rule) => {
    if (!isRootRule(rule)) return;
    // Las líneas internas de la regla conservan la indentación del archivo
    // (2 espacios por nivel); solo se reconstruyen las at-rules que la envuelven.
    const ancestors = [];
    for (let parent = rule.parent; parent && parent.type === 'atrule'; parent = parent.parent) {
      ancestors.push(parent);
    }
    const pad = (depth) => '  '.repeat(depth);
    let text = pad(ancestors.length) + rule.clone({ raws: { ...rule.raws, before: '' } }).toString();
    ancestors.forEach((atrule, index) => {
      const depth = ancestors.length - 1 - index;
      text = `${pad(depth)}@${atrule.name} ${atrule.params} {\n${text}\n${pad(depth)}}`;
    });
    rootParts.push(text);
    const { parent } = rule;
    rule.remove();
    // Quita las at-rules que quedaron vacías al sacar el :root.
    for (let node = parent; node && node.type === 'atrule' && !node.nodes?.length;) {
      const next = node.parent;
      node.remove();
      node = next;
    }
  });

  const rest = tree.toString().replace(/^\s+/, '');
  return {
    root: rootParts.length ? `${rootParts.join('\n')}\n` : '',
    rest: rest.endsWith('\n') ? rest : `${rest}\n`,
  };
}

// --- Diff ---

function gitDiff(cwd, a, b) {
  // El driver `css` de git pone el selector en la cabecera de cada hunk.
  fs.writeFileSync(path.join(cwd, '.gitattributes'), '*.css diff=css\n');
  try {
    execFileSync('git', [
      '-c', 'core.quotePath=false',
      '-c', `core.attributesFile=${path.join(cwd, '.gitattributes')}`,
      'diff', '--no-index', '--no-prefix', '--no-color', '--no-ext-diff', a, b,
    ], {
      cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 512 * 1024 * 1024,
    });
    return '';
  } catch (error) {
    // git diff --no-index sale con 1 cuando hay diferencias.
    if (error.status === 1) return error.stdout;
    throw error;
  }
}

function stripGitHeader(diff) {
  // Quita "diff --git" e "index ..." y deja ---/+++ y los hunks.
  return diff.replace(/^diff --git .*\n(?:(?:old|new) mode .*\n)?index .*\n/m, '');
}

function countLines(diff) {
  let added = 0;
  let removed = 0;
  let inHunk = false;
  // Solo se cuentan líneas dentro de los hunks: fuera están ---/+++.
  diff.split('\n').forEach((line) => {
    if (line.startsWith('@@')) inHunk = true;
    else if (inHunk && line.startsWith('+')) added += 1;
    else if (inHunk && line.startsWith('-')) removed += 1;
  });
  return { added, removed };
}

export function diffCss(prevCss, nextCss, { prevLabel = 'prev', nextLabel = 'next' } = {}) {
  const prev = splitCss(prevCss);
  const next = splitCss(nextCss);
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'css-diff-'));
  try {
    fs.mkdirSync(path.join(workdir, prevLabel), { recursive: true });
    fs.mkdirSync(path.join(workdir, nextLabel), { recursive: true });
    return SECTIONS.map((section) => {
      const a = path.join(prevLabel, section.file);
      const b = path.join(nextLabel, section.file);
      fs.writeFileSync(path.join(workdir, a), prev[section.key]);
      fs.writeFileSync(path.join(workdir, b), next[section.key]);
      const diff = stripGitHeader(gitDiff(workdir, a, b));
      return { ...section, diff, ...countLines(diff) };
    });
  } finally {
    fs.rmSync(workdir, { recursive: true, force: true });
  }
}

// --- Markdown ---

function sectionMarkdown(section, includeDiff, patchUrl) {
  const lines = [`### ${section.title}`, ''];
  if (!section.diff) {
    lines.push('Sin cambios.');
    return lines.join('\n');
  }
  lines.push(`+${section.added} / -${section.removed} líneas`);
  if (includeDiff) {
    lines.push('', '<details>', '<summary>Ver diff</summary>', '', '````diff', section.diff.trimEnd(), '````', '', '</details>');
  } else {
    lines.push('', patchUrl
      ? `El diff no cabe en las notas del release; está completo en [css-diff.patch](${patchUrl}).`
      : 'El diff no cabe en las notas del release; está completo en `css-diff.patch`.');
  }
  return lines.join('\n');
}

/**
 * Bloque Markdown del diff. `include` indica, por sección, si va el diff
 * completo o solo el resumen.
 */
export function buildMarkdown(sections, {
  prevLabel, nextLabel, patchUrl, include = { root: true, rest: true },
} = {}) {
  const header = ['## Cambios en el CSS distribuido', ''];
  if (prevLabel && nextLabel) {
    header.push(`\`dist/css/dynamic-ui.css\` de \`${nextLabel}\` comparado contra \`${prevLabel}\`.`);
  } else {
    header.push('Diff de `dist/css/dynamic-ui.css` contra la versión anterior.');
  }
  if (patchUrl) header.push(`Diff completo: [css-diff.patch](${patchUrl}).`);
  if (sections.every((section) => !section.diff)) {
    return [START_MARKER, ...header, '', 'Sin cambios en el CSS distribuido.', END_MARKER].join('\n');
  }
  const body = sections.map((section) => sectionMarkdown(section, include[section.key], patchUrl));
  return [START_MARKER, ...header, '', body.join('\n\n'), END_MARKER].join('\n');
}

const BLOCK_PATTERN = new RegExp(`\\s*${START_MARKER}[\\s\\S]*?${END_MARKER}\\s*`, 'g');

/** Agrega el bloque al final del body, reemplazando uno anterior si existe. */
export function mergeNotes(body, block) {
  const base = body.replace(BLOCK_PATTERN, '\n\n').trimEnd();
  return base ? `${base}\n\n${block}\n` : `${block}\n`;
}

/**
 * Body final del release. Si el diff completo no cabe en el límite, prueba con
 * solo el diff de `:root` y, si tampoco cabe, deja únicamente el resumen.
 */
export function notesWithinLimit(body, sections, options = {}, limit = RELEASE_BODY_LIMIT) {
  const attempts = [
    { root: true, rest: true },
    { root: true, rest: false },
    { root: false, rest: false },
  ];
  for (const include of attempts) {
    const notes = mergeNotes(body, buildMarkdown(sections, { ...options, include }));
    if (notes.length <= limit) return notes;
  }
  return mergeNotes(body, buildMarkdown(sections, { ...options, include: attempts[2] }));
}

// --- CLI ---

function main(argv) {
  const args = argv.slice(2);

  if (args[0] === 'previous-version') {
    const [, manifestPath, current] = args;
    if (!manifestPath || !current) fail('Uso: css-diff.mjs previous-version <manifest.json> <versión actual>');
    let manifest;
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    } catch (error) {
      fail(`No se pudo leer ${manifestPath}: ${error.message}`);
    }
    const previous = previousVersion(Object.keys(manifest.versions ?? {}), current);
    if (previous) process.stdout.write(`${previous}\n`);
    return 0;
  }

  const flags = parseFlags(args);
  ['prev', 'next', 'out-dir'].forEach((name) => {
    if (!flags[name]) fail(`Falta --${name}. Uso: css-diff.mjs --prev <css> --next <css> --out-dir <dir>`);
  });
  const read = (file) => {
    try {
      return fs.readFileSync(file, 'utf8');
    } catch (error) {
      return fail(`No se pudo leer ${file}: ${error.message}`);
    }
  };

  const options = {
    prevLabel: flags['prev-label'],
    nextLabel: flags['next-label'],
    patchUrl: flags['patch-url'],
  };
  const sections = diffCss(read(flags.prev), read(flags.next), {
    prevLabel: options.prevLabel ?? 'prev',
    nextLabel: options.nextLabel ?? 'next',
  });

  const outDir = path.resolve(flags['out-dir']);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'css-diff.patch'), sections.map((section) => section.diff).join(''));
  fs.writeFileSync(path.join(outDir, 'css-diff.md'), `${buildMarkdown(sections, options)}\n`);
  if (flags.notes) {
    fs.writeFileSync(path.join(outDir, 'notes.md'), notesWithinLimit(read(flags.notes), sections, options));
  }

  sections.forEach((section) => {
    process.stdout.write(`${section.title}: +${section.added} / -${section.removed} líneas\n`);
  });
  return 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exit(main(process.argv));
}
