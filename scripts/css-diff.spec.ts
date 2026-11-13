/**
 * Tests de css-diff.
 *
 * El script se ejercita por CLI, como generate-manifest y check-docs-manifest.
 * Los fixtures prev.css/next.css cambian a la vez variables de :root (también
 * dentro de un @media), una clase de componente y un @keyframes, y llevan
 * versiones distintas en la cabecera.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..');
const SCRIPT = path.join(ROOT, 'scripts/css-diff.mjs');
const FIXTURES = path.join(ROOT, 'scripts/fixtures/css-diff');
const PREV = path.join(FIXTURES, 'prev.css');
const NEXT = path.join(FIXTURES, 'next.css');
const PATCH_URL = 'https://github.com/dynamic-framework/dynamic-ui/releases/download/v2.13.0/css-diff.patch';

let workdir: string;

beforeEach(() => {
  workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'dynamic-css-diff-'));
});

afterEach(() => {
  fs.rmSync(workdir, { recursive: true, force: true });
});

function run(args: string[]) {
  const spawned = spawnSync('node', [SCRIPT, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  expect(spawned.stderr).toBe('');
  expect(spawned.status).toBe(0);
  return spawned.stdout;
}

function diff(prev: string, next: string, extra: string[] = []) {
  const outDir = path.join(workdir, 'out');
  run([
    '--prev', prev, '--next', next, '--out-dir', outDir,
    '--prev-label', 'v2.12.0', '--next-label', 'v2.13.0', '--patch-url', PATCH_URL, ...extra,
  ]);
  const read = (file: string) => fs.readFileSync(path.join(outDir, file), 'utf8');
  return { read };
}

function section(markdown: string, title: string) {
  const start = markdown.indexOf(`### ${title}`);
  const end = markdown.indexOf('\n### ', start + 1);
  return markdown.slice(start, end === -1 ? undefined : end);
}

describe('css-diff', () => {
  test('separa las reglas :root del resto del CSS', () => {
    const md = diff(PREV, NEXT).read('css-diff.md');
    const root = section(md, 'Variables `:root`');
    const rest = section(md, 'Resto del CSS');

    expect(root).toContain('-  --bs-btn-link-hover-bg: transparent;');
    expect(root).toContain('+  --bs-btn-link-hover-bg: rgba(var(--bs-black-rgb), 0.03);');
    expect(root).toContain('-  --bs-legacy-token: 1px;');
    expect(root).toContain('+  --bs-new-token: 2px;');
    // Un :root dentro de un @media cuenta como :root.
    expect(root).toContain('-    --bs-fs-display: 3rem;');
    expect(root).toContain('+    --bs-fs-display: 3.5rem;');
    expect(root).toContain('+3 / -3 líneas');
    expect(root).not.toContain('d-new-widget');

    expect(rest).toContain('-.d-old-widget {');
    expect(rest).toContain('+.d-new-widget {');
    expect(rest).toContain('-@keyframes d-old-spin {');
    expect(rest).not.toContain('--bs-new-token');
    // El @media que solo tenía el :root no queda vacío en el resto.
    expect(rest).not.toMatch(/@media \(min-width: 1200px\) \{\n\s*\}/);
  });

  test('ignora la cabecera con la versión de Dynamic UI', () => {
    const { read } = diff(PREV, NEXT);
    expect(read('css-diff.patch')).not.toContain('dynamic-framework');

    const sameButVersion = path.join(workdir, 'same.css');
    fs.writeFileSync(sameButVersion, fs.readFileSync(PREV, 'utf8').replace('2.12.0', '2.13.0'));
    const unchanged = diff(PREV, sameButVersion);
    expect(unchanged.read('css-diff.md')).toContain('Sin cambios en el CSS distribuido.');
    expect(unchanged.read('css-diff.patch')).toBe('');
  });

  test('marca "Sin cambios" en la sección que no cambia', () => {
    const onlyClasses = path.join(workdir, 'only-classes.css');
    fs.writeFileSync(onlyClasses, fs.readFileSync(PREV, 'utf8').replace('.d-old-widget', '.d-renamed-widget'));
    const md = diff(PREV, onlyClasses).read('css-diff.md');
    expect(section(md, 'Variables `:root`')).toContain('Sin cambios.');
    expect(section(md, 'Resto del CSS')).toContain('+.d-renamed-widget {');
  });

  test('conserva las notas existentes y agrega el diff al final', () => {
    const notes = path.join(workdir, 'body.md');
    const releasePlease = '## [2.13.0](https://github.com/dynamic-framework/dynamic-ui/compare/v2.12.0...v2.13.0)\n\n### Bug Fixes\n\n* algo (#1)\n';
    fs.writeFileSync(notes, releasePlease);

    const first = diff(PREV, NEXT, ['--notes', notes]).read('notes.md');
    expect(first.startsWith(releasePlease.trimEnd())).toBe(true);
    expect(first.indexOf('<!-- css-diff:start -->')).toBeGreaterThan(first.indexOf('* algo (#1)'));
    expect(first.trimEnd().endsWith('<!-- css-diff:end -->')).toBe(true);

    // Re-ejecutar sobre el body ya editado reemplaza el bloque en lugar de duplicarlo.
    fs.writeFileSync(notes, first);
    const second = diff(PREV, NEXT, ['--notes', notes]).read('notes.md');
    expect(second).toBe(first);
    expect(second.match(/<!-- css-diff:start -->/g)).toHaveLength(1);
  });

  test('si el diff no cabe en el body del release, deja el resumen y el enlace al patch', () => {
    const many = (prefix: string) => Array.from({ length: 4000 }, (_, i) => `.${prefix}-${i} {\n  display: block;\n}\n`).join('');
    const prev = path.join(workdir, 'big-prev.css');
    const next = path.join(workdir, 'big-next.css');
    fs.writeFileSync(prev, `${fs.readFileSync(PREV, 'utf8')}${many('d-old')}`);
    fs.writeFileSync(next, `${fs.readFileSync(NEXT, 'utf8')}${many('d-new')}`);
    const notes = path.join(workdir, 'body.md');
    fs.writeFileSync(notes, '### Features\n\n* componente nuevo\n');

    const { read } = diff(prev, next, ['--notes', notes]);
    const body = read('notes.md');
    expect(body.length).toBeLessThanOrEqual(125000);
    expect(body.startsWith('### Features')).toBe(true);
    // :root cabe y va completo; el resto solo con resumen y enlace.
    expect(section(body, 'Variables `:root`')).toContain('````diff');
    expect(section(body, 'Resto del CSS')).not.toContain('````diff');
    expect(section(body, 'Resto del CSS')).toContain(`[css-diff.patch](${PATCH_URL})`);
    // El patch y css-diff.md llevan el diff completo.
    expect(read('css-diff.patch')).toContain('+.d-new-3999 {');
    expect(read('css-diff.md').length).toBeGreaterThan(125000);
  });

  test('si ni el resumen cabe en el body del release, no genera notes.md y emite un warning', () => {
    const notes = path.join(workdir, 'body.md');
    fs.writeFileSync(notes, `### Features\n\n${'x'.repeat(124900)}\n`);
    const outDir = path.join(workdir, 'out');

    const stdout = run([
      '--prev', PREV, '--next', NEXT, '--out-dir', outDir,
      '--prev-label', 'v2.12.0', '--next-label', 'v2.13.0', '--patch-url', PATCH_URL, '--notes', notes,
    ]);
    expect(stdout).toContain('::warning::');
    expect(fs.existsSync(path.join(outDir, 'notes.md'))).toBe(false);
    // El patch y css-diff.md se generan igual.
    expect(fs.readFileSync(path.join(outDir, 'css-diff.patch'), 'utf8')).toContain('+.d-new-widget {');
    expect(fs.existsSync(path.join(outDir, 'css-diff.md'))).toBe(true);
  });

  describe('previous-version', () => {
    const manifest = () => {
      const file = path.join(workdir, 'manifest.json');
      fs.writeFileSync(file, JSON.stringify({
        latest: '2.12.0',
        versions: {
          '2.13.0-rc.1': {}, '2.12.0': {}, '2.11.0': {}, '2.10.0': {}, '2.9.0': {},
        },
      }));
      return file;
    };

    test('toma la mayor versión estable menor a la actual', () => {
      expect(run(['previous-version', manifest(), 'v2.12.1'])).toBe('2.12.0\n');
      expect(run(['previous-version', manifest(), '2.13.0'])).toBe('2.12.0\n');
    });

    test('en un backport compara contra la misma línea, no contra el latest', () => {
      expect(run(['previous-version', manifest(), 'v2.11.1'])).toBe('2.11.0\n');
    });

    test('compara por semver e ignora prereleases y metadatos de build', () => {
      expect(run(['previous-version', manifest(), 'v2.10.0'])).toBe('2.9.0\n');
      expect(run(['previous-version', manifest(), 'v2.13.0-rc.2'])).toBe('2.12.0\n');
      expect(run(['previous-version', manifest(), 'v2.12.0+build.1'])).toBe('2.11.0\n');
    });

    test('no imprime nada si no hay versión anterior', () => {
      expect(run(['previous-version', manifest(), 'v2.9.0'])).toBe('');
    });
  });
});
