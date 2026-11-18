/**
 * Tests de theme-diff.
 *
 * Igual que theme-validate.spec.ts, el script se ejercita por CLI: el contrato
 * real es el JSON que imprime (o escribe con --out) y el código de salida, que
 * es lo que consume cdn.yml.
 *
 * Los fixtures de scripts/theme/fixtures/theme-diff/ pasan stylelint, así que
 * los casos que necesitan CSS que el linter rechaza (espacios distintos, sin
 * cabecera) se escriben en un directorio temporal.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '../..');
const DIFF = path.join(ROOT, 'scripts/theme/theme-diff.mjs');
const FIXTURES = path.join(ROOT, 'scripts/theme/fixtures/theme-diff');
const PREV = path.join(FIXTURES, 'prev.css');
const NEXT = path.join(FIXTURES, 'next.css');

let workdir: string;

beforeAll(() => {
  workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'dynamic-theme-diff-'));
});

afterAll(() => {
  fs.rmSync(workdir, { recursive: true, force: true });
});

type Run = { status: number; stdout: string; stderr: string };

function run(args: string[]): Run {
  const spawned = spawnSync('node', [DIFF, ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return {
    status: spawned.status ?? 0,
    stdout: spawned.stdout ?? '',
    stderr: spawned.stderr ?? '',
  };
}

let fileCount = 0;

function write(contents: string, extension = '.css'): string {
  fileCount += 1;
  const file = path.join(workdir, `file-${fileCount}${extension}`);
  fs.writeFileSync(file, contents, 'utf8');
  return file;
}

const css = (version: string, root: string) => `/*!\n * dynamic-framework ${version}\n */\n:root,\n[data-bs-theme=dynamic] {\n${root}\n}\n`;

function diff(prev: string, next: string) {
  const result = run([prev, next]);
  expect(result.stderr).toBe('');
  expect(result.status).toBe(0);
  return JSON.parse(result.stdout);
}

describe('theme-diff con los fixtures', () => {
  const result = () => diff(PREV, NEXT);

  it('toma las versiones de la cabecera y resume las cuatro listas', () => {
    const { from, to, summary } = result();
    expect(from).toBe('1.0.0');
    expect(to).toBe('1.1.0');
    expect(summary).toEqual({
      added: 2, removed: 2, changed: 3, renamed: 1,
    });
  });

  it('lista las variables agregadas y eliminadas con su valor', () => {
    const { added, removed } = result();
    expect(added).toEqual([
      { name: '--bs-neutral-25', scope: 'root', value: '#fcfcfd' },
      { name: '--bs-new-token', scope: 'root', value: '2px' },
    ]);
    expect(removed).toEqual([
      { name: '--bs-gray-25', scope: 'root', value: '#fcfcfd' },
      { name: '--bs-legacy-flag', scope: 'root', value: '1' },
    ]);
  });

  it('reporta los cambios del bloque raíz y del bloque raíz en el media de 1200px', () => {
    expect(result().changed).toEqual([
      {
        name: '--bs-body-bg', scope: 'root', from: '#fff', to: '#f5f6fa',
      },
      {
        name: '--bs-root-font-size', scope: 'root', from: '16px', to: '14px',
      },
      {
        name: '--bs-font-size-1', scope: 'media-1200', from: '2.5rem', to: '3rem',
      },
    ]);
  });

  it('ignora tokens de componente, zonas, otros selectores del media de 1200px y otros @media', () => {
    const names = result().changed.map((entry: { name: string }) => entry.name);
    expect(names).not.toContain('--bs-btn-padding-x');
    expect(names).not.toContain('--bs-gutter-x');
    expect(names).not.toContain('--bs-transition');
    // --bs-body-bg cambia en el bloque raíz y en [data-bs-theme="dark"]; solo cuenta el primero.
    expect(names.filter((name: string) => name === '--bs-body-bg')).toHaveLength(1);
  });

  it('sugiere el renombre sin sacar el par de added/removed', () => {
    const { renamed, added, removed } = result();
    expect(renamed).toEqual([{
      from: '--bs-gray-25',
      to: '--bs-neutral-25',
      scope: 'root',
      value: '#fcfcfd',
      similarity: 0.5,
      suggestion: true,
    }]);
    expect(added.map((entry: { name: string }) => entry.name)).toContain('--bs-neutral-25');
    expect(removed.map((entry: { name: string }) => entry.name)).toContain('--bs-gray-25');
  });

  it('con --out escribe el JSON y resume en stdout', () => {
    const out = path.join(workdir, 'nested', 'changes-1.1.0.json');
    const { status, stdout } = run([PREV, NEXT, '--out', out]);
    expect(status).toBe(0);
    expect(stdout).toMatch(/1\.0\.0 → 1\.1\.0, 2 agregada\(s\), 2 eliminada\(s\), 3 cambiada\(s\), 1 renombre\(s\) sugerido\(s\)/);
    expect(JSON.parse(fs.readFileSync(out, 'utf8'))).toEqual(result());
  });

  it('el mismo CSS contra sí mismo no tiene cambios', () => {
    const { summary } = diff(NEXT, NEXT);
    expect(summary).toEqual({
      added: 0, removed: 0, changed: 0, renamed: 0,
    });
  });
});

describe('theme-diff — valores', () => {
  it('no cuenta diferencias de espacios ni de mayúsculas en hex', () => {
    const prev = write(css('1.0.0', '  --bs-shadow: rgba(0,0,0,0.5);\n  --bs-brand: #ABCDEF;'));
    const next = write(css('1.0.1', '  --bs-shadow: rgba(0, 0, 0, 0.5);\n  --bs-brand: #abcdef;'));
    expect(diff(prev, next).changed).toEqual([]);
  });

  it('cuenta la aparición de !important como cambio', () => {
    const prev = write(css('1.0.0', '  --bs-gap: 1rem;'));
    const next = write(css('1.0.1', '  --bs-gap: 1rem !important;'));
    expect(diff(prev, next).changed).toEqual([{
      name: '--bs-gap', scope: 'root', from: '1rem', to: '1rem !important',
    }]);
  });
});

describe('theme-diff — heurística de renombres', () => {
  it('entre varios candidatos con el mismo valor gana el nombre más parecido', () => {
    const prev = write(css('1.0.0', '  --bs-link-hover-color: #123456;'));
    const next = write(css('1.0.1', '  --bs-anchor-color: #123456;\n  --bs-link-color-hover: #123456;'));
    const { renamed } = diff(prev, next);
    expect(renamed).toHaveLength(1);
    expect(renamed[0]).toMatchObject({ from: '--bs-link-hover-color', to: '--bs-link-color-hover', similarity: 1 });
  });

  it('no sugiere nada si los nombres no comparten segmentos', () => {
    const prev = write(css('1.0.0', '  --bs-foo: 0;'));
    const next = write(css('1.0.1', '  --bs-bar: 0;'));
    const { renamed, added, removed } = diff(prev, next);
    expect(renamed).toEqual([]);
    expect(added).toHaveLength(1);
    expect(removed).toHaveLength(1);
  });

  it('no sugiere nada si el valor cambió', () => {
    const prev = write(css('1.0.0', '  --bs-gray-25: #fcfcfd;'));
    const next = write(css('1.0.1', '  --bs-neutral-25: #fafafa;'));
    expect(diff(prev, next).renamed).toEqual([]);
  });

  it('entre varios candidatos por debajo del umbral no sugiere nada', () => {
    const prev = write(css('1.0.0', '  --bs-a-b-c-d: 0;\n  --bs-a-x-y-z: 0;'));
    const next = write(css('1.0.1', '  --bs-a-q-r-s: 0;'));
    expect(diff(prev, next).renamed).toEqual([]);
  });
});

describe('theme-diff — errores', () => {
  it('sale con 2 si un CSS no lleva la cabecera de versión', () => {
    const prev = write(':root {\n  --bs-a: 1;\n}\n');
    const { status, stderr } = run([prev, NEXT]);
    expect(status).toBe(2);
    expect(stderr).toMatch(/no lleva la cabecera de versión/);
  });

  it('sale con 2 si no puede leer un archivo', () => {
    const { status, stderr } = run([path.join(workdir, 'no-existe.css'), NEXT]);
    expect(status).toBe(2);
    expect(stderr).toMatch(/No se pudo leer/);
  });

  it('sale con 2 con argumentos incompletos', () => {
    expect(run([PREV]).status).toBe(2);
    expect(run([PREV, NEXT, '--out']).status).toBe(2);
  });
});

describe('theme-diff --previous-version', () => {
  const manifest = () => write(JSON.stringify({
    latest: '2.12.1',
    versions: {
      '2.5.1': {},
      '2.10.0': {},
      '2.11.0': {},
      '2.12.0': {},
      '2.12.1': {},
      '2.13.0-rc.1': {},
    },
  }), '.json');

  it.each([
    ['patch', '2.12.2', '2.12.1'],
    ['minor', '2.13.0', '2.12.1'],
    ['major', '3.0.0', '2.12.1'],
    ['prefijo v', 'v2.13.0', '2.12.1'],
    ['backport', '2.11.1', '2.11.0'],
    ['re-ejecución de una versión ya indexada', '2.12.1', '2.12.0'],
    ['orden numérico, no lexicográfico', '2.10.1', '2.10.0'],
    ['prerelease de la versión siguiente', '2.13.0-rc.2', '2.12.1'],
  ])('%s: %s compara contra %s', (_case, version, expected) => {
    const { status, stdout } = run(['--previous-version', manifest(), version]);
    expect(status).toBe(0);
    expect(stdout.trim()).toBe(expected);
  });

  it('no imprime nada si no hay versión estable anterior', () => {
    const { status, stdout } = run(['--previous-version', manifest(), '2.5.1']);
    expect(status).toBe(0);
    expect(stdout).toBe('');
  });

  it('sale con 2 si el índice no es JSON', () => {
    const { status } = run(['--previous-version', write('no es json', '.json'), '2.13.0']);
    expect(status).toBe(2);
  });
});
