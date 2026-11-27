/**
 * Tests de theme-diff.
 *
 * Igual que theme-validate.spec.ts, el script se ejercita por CLI: el contrato
 * real es el JSON que imprime (o escribe con --out) y el código de salida, que
 * es lo que consume cdn.yml.
 *
 * Los fixtures de scripts/theme/fixtures/theme-diff/ pasan stylelint, así que
 * los casos que necesitan CSS que el linter rechaza (espacios distintos,
 * atributos sin comillas, sin cabecera) se escriben en un directorio temporal.
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
type Entry = { name: string; selector: string; media: string | null };

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

const header = (version: string) => `/*!\n * dynamic-framework ${version}\n */\n`;
const css = (version: string, body: string) => `${header(version)}${body}\n`;
const root = (version: string, decls: string) => css(version, `:root,\n[data-bs-theme=dynamic] {\n${decls}\n}`);

function diff(prev: string, next: string) {
  const result = run([prev, next]);
  expect(result.stderr).toBe('');
  expect(result.status).toBe(0);
  return JSON.parse(result.stdout);
}

const where = ({ media, selector, name }: Entry) => `${media ?? '-'} | ${selector} | ${name}`;

const NO_CHANGES = {
  customProperties: {
    added: [], removed: [], changed: [], renamed: [],
  },
  classes: { added: [], removed: [] },
};

describe('theme-diff con los fixtures', () => {
  const result = () => diff(PREV, NEXT);

  it('toma las versiones de la cabecera', () => {
    const { from, to } = result();
    expect(from).toBe('1.0.0');
    expect(to).toBe('1.1.0');
  });

  it('lista las custom properties agregadas y eliminadas en cualquier selector', () => {
    const { customProperties } = result();
    expect(customProperties.added).toEqual([
      {
        name: '--bs-new-token', selector: ':root', media: null, value: '2px',
      },
      {
        name: '--bs-btn-text-decoration', selector: '.btn', media: null, value: 'none',
      },
      {
        name: '--bs-skeleton-bg', selector: '.d-skeleton', media: null, value: '#ddd',
      },
    ]);
    expect(customProperties.removed).toEqual([
      {
        name: '--bs-legacy-flag', selector: ':root', media: null, value: '1',
      },
      {
        name: '--bs-legacy-badge-bg', selector: '.legacy-badge', media: null, value: '#eee',
      },
    ]);
  });

  it('reporta los cambios de :root, componentes, zonas, utilidades y at-rules, en orden estable', () => {
    expect(result().customProperties.changed).toEqual([
      {
        name: '--bs-body-bg', selector: ':root', media: null, from: '#fff', to: '#f5f6fa',
      },
      {
        name: '--bs-root-font-size', selector: ':root', media: null, from: '16px', to: '14px',
      },
      {
        name: '--bs-alert-gap', selector: '.alert', media: null, from: '.5rem', to: '.75rem',
      },
      {
        name: '--bs-body-bg', selector: '[data-bs-theme="dark"]', media: null, from: '#000', to: '#111',
      },
      {
        name: '--bs-font-size-1', selector: ':root', media: '@media (min-width: 1200px)', from: '2.5rem', to: '3rem',
      },
      {
        name: '--bs-gutter-x', selector: '.g-xl-1', media: '@media (min-width: 1200px)', from: '.25rem', to: '.5rem',
      },
      {
        name: '--bs-chip-size', selector: '.chip', media: '@supports not (width: 1lh)', from: '1.5em', to: '1.25em',
      },
    ]);
  });

  it('no reporta una lista de selectores reordenada', () => {
    const { customProperties } = result();
    const all = [...customProperties.added, ...customProperties.removed, ...customProperties.changed];
    expect(all.map(where)).not.toContain('- | .btn | --bs-btn-padding-x');
    expect(all.map(where)).not.toContain('- | .btn-group | --bs-btn-padding-x');
  });

  it('lista las clases agregadas y eliminadas', () => {
    expect(result().classes).toEqual({ added: ['.d-skeleton'], removed: ['.legacy-badge'] });
  });

  it('reporta el renombre con el nombre anterior y el nuevo, fuera de added/removed', () => {
    const { customProperties } = result();
    expect(customProperties.renamed).toEqual([{
      from: '--bs-gray-25', to: '--bs-neutral-25', selector: ':root', media: null, value: '#fcfcfd',
    }]);
    expect(customProperties.added.map((entry: Entry) => entry.name)).not.toContain('--bs-neutral-25');
    expect(customProperties.removed.map((entry: Entry) => entry.name)).not.toContain('--bs-gray-25');
  });

  it('con --out escribe el JSON y resume en stdout', () => {
    const out = path.join(workdir, 'nested', 'changes-1.1.0.json');
    const { status, stdout } = run([PREV, NEXT, '--out', out]);
    expect(status).toBe(0);
    expect(stdout).toMatch(/1\.0\.0 → 1\.1\.0\. Custom properties: 3 agregada\(s\), 2 eliminada\(s\), 7 cambiada\(s\), 1 renombrada\(s\)\. Clases: 1 agregada\(s\), 1 eliminada\(s\)\./);
    expect(JSON.parse(fs.readFileSync(out, 'utf8'))).toEqual(result());
  });

  it('el mismo CSS contra sí mismo no tiene cambios', () => {
    expect(diff(NEXT, NEXT)).toMatchObject(NO_CHANGES);
  });
});

describe('theme-diff — selectores', () => {
  it('cuenta [data-bs-theme=dynamic] como :root', () => {
    const prev = write(css('1.0.0', ':root {\n  --bs-a: 1;\n}'));
    const next = write(css('1.0.1', '[data-bs-theme=dynamic] {\n  --bs-a: 1;\n}'));
    expect(diff(prev, next)).toMatchObject(NO_CHANGES);
  });

  it('no distingue atributos con y sin comillas ni espacios en el selector', () => {
    const prev = write(css('1.0.0', '[data-bs-theme=dark]   .card {\n  --bs-card-bg: #000;\n}'));
    const next = write(css('1.0.1', '[data-bs-theme="dark"] .card {\n  --bs-card-bg: #000;\n}'));
    expect(diff(prev, next).customProperties.added).toEqual([]);
  });

  it('un mismo nombre en selectores distintos son entradas distintas', () => {
    const prev = write(css('1.0.0', '.btn-primary {\n  --bs-btn-bg: blue;\n}\n.btn-danger {\n  --bs-btn-bg: red;\n}'));
    const next = write(css('1.0.1', '.btn-primary {\n  --bs-btn-bg: navy;\n}\n.btn-danger {\n  --bs-btn-bg: red;\n}'));
    expect(diff(prev, next).customProperties.changed).toEqual([{
      name: '--bs-btn-bg', selector: '.btn-primary', media: null, from: 'blue', to: 'navy',
    }]);
  });

  it('ignora las custom properties de @keyframes', () => {
    const prev = write(css('1.0.0', '@keyframes spin {\n  to {\n    --bs-angle: 360deg;\n  }\n}'));
    const next = write(css('1.0.1', '@keyframes spin {\n  to {\n    --bs-angle: 180deg;\n  }\n}'));
    expect(diff(prev, next).customProperties.changed).toEqual([]);
  });

  it('saca las clases de selectores compuestos, sin contar puntos de atributos', () => {
    const prev = write(css('1.0.0', '.a {\n  color: red;\n}'));
    const next = write(css('1.0.1', '.a {\n  color: red;\n}\n.btn-check:checked + .btn:not(.disabled) a[href$=".pdf"] {\n  color: red;\n}'));
    expect(diff(prev, next).classes.added).toEqual(['.btn', '.btn-check', '.disabled']);
  });
});

describe('theme-diff — valores', () => {
  it('no cuenta diferencias de espacios ni de mayúsculas en hex', () => {
    const prev = write(root('1.0.0', '  --bs-shadow: rgba(0,0,0,0.5);\n  --bs-brand: #ABCDEF;'));
    const next = write(root('1.0.1', '  --bs-shadow: rgba(0, 0, 0, 0.5);\n  --bs-brand: #abcdef;'));
    expect(diff(prev, next).customProperties.changed).toEqual([]);
  });

  it('cuenta la aparición de !important como cambio', () => {
    const prev = write(root('1.0.0', '  --bs-gap: 1rem;'));
    const next = write(root('1.0.1', '  --bs-gap: 1rem !important;'));
    expect(diff(prev, next).customProperties.changed).toEqual([{
      name: '--bs-gap', selector: ':root', media: null, from: '1rem', to: '1rem !important',
    }]);
  });
});

describe('theme-diff — renombres', () => {
  it('con más de un candidato con el mismo valor no adivina', () => {
    const prev = write(root('1.0.0', '  --bs-link-hover-color: #123456;'));
    const next = write(root('1.0.1', '  --bs-anchor-color: #123456;\n  --bs-link-color-hover: #123456;'));
    const { renamed, added, removed } = diff(prev, next).customProperties;
    expect(renamed).toEqual([]);
    expect(added).toHaveLength(2);
    expect(removed).toHaveLength(1);
  });

  it('solo empareja dentro del mismo selector', () => {
    const prev = write(css('1.0.0', '.alert {\n  --bs-alert-gap: 1rem;\n}'));
    const next = write(css('1.0.1', '.toast {\n  --bs-alert-gap-x: 1rem;\n}'));
    expect(diff(prev, next).customProperties.renamed).toEqual([]);
  });

  it('no empareja si los nombres no comparten segmentos', () => {
    const prev = write(root('1.0.0', '  --bs-foo: 0;'));
    const next = write(root('1.0.1', '  --bs-bar: 0;'));
    const { renamed, added, removed } = diff(prev, next).customProperties;
    expect(renamed).toEqual([]);
    expect(added).toHaveLength(1);
    expect(removed).toHaveLength(1);
  });

  it('no empareja si el valor cambió', () => {
    const prev = write(root('1.0.0', '  --bs-gray-25: #fcfcfd;'));
    const next = write(root('1.0.1', '  --bs-neutral-25: #fafafa;'));
    expect(diff(prev, next).customProperties.renamed).toEqual([]);
  });

  it('empareja aunque el valor difiera solo en espacios o mayúsculas de hex', () => {
    const prev = write(root('1.0.0', '  --bs-gray-25: #FCFCFD;'));
    const next = write(root('1.0.1', '  --bs-neutral-25: #fcfcfd;'));
    expect(diff(prev, next).customProperties.renamed).toEqual([{
      from: '--bs-gray-25', to: '--bs-neutral-25', selector: ':root', media: null, value: '#fcfcfd',
    }]);
  });
});

describe('theme-diff — errores', () => {
  it('sale con 2 si un CSS no lleva la cabecera de versión', () => {
    const prev = write(':root {\n  --bs-a: 1;\n}\n');
    const { status, stderr } = run([prev, NEXT]);
    expect(status).toBe(2);
    expect(stderr).toMatch(/no lleva la cabecera de versión/);
  });

  it('sale con 2 si el CSS no se puede parsear', () => {
    const prev = write(css('1.0.0', '.a {\n  --bs-a: 1;'));
    const { status, stderr } = run([prev, NEXT]);
    expect(status).toBe(2);
    expect(stderr).toMatch(/No se pudo leer el CSS/);
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
