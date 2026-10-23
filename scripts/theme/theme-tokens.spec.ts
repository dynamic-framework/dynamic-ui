/**
 * Tests unitarios de theme-tokens.mjs.
 *
 * El módulo es ESM (.mjs) y Jest corre en CommonJS, así que cada caso llama a
 * la función en un proceso de node aparte y lee el resultado como JSON, igual
 * que theme-validate.spec.ts ejercita los scripts por CLI.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const TOKENS = pathToFileURL(path.resolve(__dirname, 'theme-tokens.mjs')).href;

type Resolved = { rgb: { r: number; g: number; b: number } | null; reason?: string };

/**
 * Resuelve `name` dentro de una zona con las declaraciones `zone`, heredando
 * de un raíz con las declaraciones `root`. El raíz se resuelve con la misma
 * función sobre un padre vacío, que es lo que es: el último eslabón.
 */
function resolveInZone(
  name: string,
  root: Record<string, string>,
  zone: Record<string, string>,
): Resolved {
  const script = `
    import { resolveInherited } from ${JSON.stringify(TOKENS)};
    const [name, root, zone] = JSON.parse(process.argv[1]);
    const toMap = (decls) => new Map(Object.entries(decls).map(([k, value]) => [k, { value }]));
    const rootMap = toMap(root);
    const none = (n) => ({ rgb: null, undefined: true, reason: n + ' no está declarada' });
    const resolveRoot = (n) => resolveInherited(n, rootMap, none);
    process.stdout.write(JSON.stringify(resolveInherited(name, toMap(zone), resolveRoot)));
  `;
  const result = spawnSync(
    'node',
    ['--input-type=module', '-e', script, JSON.stringify([name, root, zone])],
    { encoding: 'utf8' },
  );
  expect(result.stderr).toBe('');
  return JSON.parse(result.stdout);
}

/**
 * Corre `body` como módulo con las exportaciones de theme-tokens.mjs a mano y
 * devuelve lo que escriba en stdout, ya parseado.
 */
function runTokens(body: string, input: unknown): unknown {
  const script = `
    import * as tokens from ${JSON.stringify(TOKENS)};
    const input = JSON.parse(process.argv[1]);
    const toMap = (decls) => new Map(Object.entries(decls).map(([k, value]) => [k, { value }]));
    ${body}
  `;
  const result = spawnSync(
    'node',
    ['--input-type=module', '-e', script, JSON.stringify(input)],
    { encoding: 'utf8' },
  );
  expect(result.stderr).toBe('');
  return JSON.parse(result.stdout);
}

describe('resolveInherited', () => {
  it('una variable que la zona no declara conserva el valor calculado en el raíz', () => {
    // El alias se sustituye en :root: dentro de la zona sigue siendo blanco,
    // aunque la zona cambie --bs-body-bg-rgb.
    const resolved = resolveInZone(
      '--bs-secondary-bg-rgb',
      { '--bs-body-bg-rgb': '255, 255, 255', '--bs-secondary-bg-rgb': 'var(--bs-body-bg-rgb)' },
      { '--bs-body-bg-rgb': '0, 0, 0', '--bs-body-color-rgb': '255, 255, 255' },
    );
    expect(resolved.rgb).toEqual({ r: 255, g: 255, b: 255 });
  });

  it('el texto del raíz no sigue a un token que sólo cambia la zona', () => {
    const resolved = resolveInZone(
      '--bs-body-color-rgb',
      { '--bs-body-color-rgb': 'var(--bs-gray-900-rgb)', '--bs-gray-900-rgb': '21, 21, 26' },
      { '--bs-gray-900-rgb': '250, 250, 250', '--bs-secondary-bg-rgb': '235, 235, 235' },
    );
    expect(resolved.rgb).toEqual({ r: 21, g: 21, b: 26 });
  });

  it('sigue una cadena de dos saltos dentro de la zona, y sale al raíz donde ésta deja de declarar', () => {
    const root = { '--bs-gray-800-rgb': '200, 200, 200' };
    const inZone = resolveInZone('--bs-secondary-bg-rgb', root, {
      '--bs-secondary-bg-rgb': 'var(--bs-surface-rgb)',
      '--bs-surface-rgb': 'var(--bs-gray-800-rgb)',
      '--bs-gray-800-rgb': '43, 43, 52',
    });
    expect(inZone.rgb).toEqual({ r: 43, g: 43, b: 52 });

    const toRoot = resolveInZone('--bs-secondary-bg-rgb', root, {
      '--bs-secondary-bg-rgb': 'var(--bs-surface-rgb)',
      '--bs-surface-rgb': 'var(--bs-gray-800-rgb)',
    });
    expect(toRoot.rgb).toEqual({ r: 200, g: 200, b: 200 });
  });

  it('detecta un ciclo de var() dentro de la zona', () => {
    const resolved = resolveInZone('--bs-a-rgb', {}, {
      '--bs-a-rgb': 'var(--bs-b-rgb)',
      '--bs-b-rgb': 'var(--bs-a-rgb)',
    });
    expect(resolved.rgb).toBeNull();
    expect(resolved.reason).toContain('ciclo');
  });
});

describe('resolveInherited — valores de respaldo de var()', () => {
  it('usa un respaldo literal cuando la variable no existe en ninguna capa', () => {
    const resolved = resolveInZone(
      '--bs-body-color-rgb',
      { '--bs-body-color-rgb': '16, 24, 40' },
      { '--bs-body-color-rgb': 'var(--bs-optional-rgb, 255, 255, 255)' },
    );
    expect(resolved.rgb).toEqual({ r: 255, g: 255, b: 255 });
  });

  it('sigue un respaldo que a su vez lleva var(), resuelto en la capa que lo declara', () => {
    // El respaldo apunta a un token que la zona redefine: se resuelve en la zona.
    const resolved = resolveInZone(
      '--bs-body-color-rgb',
      { '--bs-white-rgb': '255, 255, 255' },
      {
        '--bs-body-color-rgb': 'var(--bs-optional-rgb, var(--bs-white-rgb))',
        '--bs-white-rgb': '250, 250, 250',
      },
    );
    expect(resolved.rgb).toEqual({ r: 250, g: 250, b: 250 });
  });

  it('no usa el respaldo cuando la variable existe en el raíz', () => {
    const resolved = resolveInZone(
      '--bs-body-color-rgb',
      { '--bs-optional-rgb': '1, 2, 3' },
      { '--bs-body-color-rgb': 'var(--bs-optional-rgb, 255, 255, 255)' },
    );
    expect(resolved.rgb).toEqual({ r: 1, g: 2, b: 3 });
  });

  it('detecta un ciclo que pasa por un respaldo', () => {
    const resolved = resolveInZone('--bs-a-rgb', {}, {
      '--bs-a-rgb': 'var(--bs-optional-rgb, var(--bs-a-rgb))',
    });
    expect(resolved.rgb).toBeNull();
    expect(resolved.reason).toContain('ciclo');
  });

  it('quien lee una variable en ciclo usa su respaldo; la del ciclo sigue inválida', () => {
    // Como en Chromium: el ciclo deja --bs-c-rgb sin valor, y var(--bs-c-rgb, …)
    // se comporta igual que con una variable que no existe.
    const zone = { '--bs-c-rgb': 'var(--bs-c-rgb, 1, 2, 3)', '--bs-a-rgb': 'var(--bs-c-rgb, 9, 9, 9)' };
    expect(resolveInZone('--bs-a-rgb', {}, zone).rgb).toEqual({ r: 9, g: 9, b: 9 });
    const cyclic = resolveInZone('--bs-c-rgb', {}, zone);
    expect(cyclic.rgb).toBeNull();
    expect(cyclic.reason).toContain('ciclo');
  });

  it('una variable que vale initial no tiene valor: quien la lee usa su respaldo', () => {
    const zone = { '--bs-white-rgb': 'initial', '--bs-a-rgb': 'var(--bs-white-rgb, 0, 0, 0)' };
    expect(resolveInZone('--bs-a-rgb', { '--bs-white-rgb': '255, 255, 255' }, zone).rgb).toEqual({ r: 0, g: 0, b: 0 });
    // Sin respaldo, no hay nada que medir, y tampoco se cae al valor del raíz.
    const sinRespaldo = resolveInZone('--bs-b-rgb', { '--bs-white-rgb': '255, 255, 255' }, {
      '--bs-white-rgb': 'initial', '--bs-b-rgb': 'var(--bs-white-rgb)',
    });
    expect(sinRespaldo.rgb).toBeNull();
    expect(sinRespaldo.reason).toContain('initial');
  });

  it.each(['inherit', 'unset', 'revert'])('una variable que vale %s toma el valor del padre', (keyword) => {
    const resolved = resolveInZone('--bs-a-rgb', { '--bs-white-rgb': '255, 255, 255' }, {
      '--bs-white-rgb': keyword, '--bs-a-rgb': 'var(--bs-white-rgb, 0, 0, 0)',
    });
    expect(resolved.rgb).toEqual({ r: 255, g: 255, b: 255 });
  });

  it('un respaldo que no se elige no forma ciclo', () => {
    // --bs-b-rgb nombra a --bs-a-rgb sólo en un respaldo que no se usa, porque
    // --bs-w-rgb existe. Chromium lo resuelve a 255, 255, 255.
    const resolved = resolveInZone('--bs-a-rgb', { '--bs-w-rgb': '255, 255, 255' }, {
      '--bs-a-rgb': 'var(--bs-missing-rgb, var(--bs-b-rgb))',
      '--bs-b-rgb': 'var(--bs-w-rgb, var(--bs-a-rgb))',
    });
    expect(resolved.rgb).toEqual({ r: 255, g: 255, b: 255 });
  });

  it('no usa el respaldo de una variable que la librería define aunque no se conozca su valor', () => {
    const resolved = runTokens(
      "process.stdout.write(JSON.stringify(tokens.resolve('--bs-body-color-rgb', toMap(input))));",
      { '--bs-body-color-rgb': 'var(--bs-btn-focus-shadow-rgb, 255, 255, 255)' },
    ) as Resolved;
    expect(resolved.rgb).toBeNull();
    expect(resolved.reason).toContain('--bs-btn-focus-shadow-rgb es de la librería');
  });

  it('usa el respaldo también en el raíz, sobre los valores por defecto', () => {
    const resolved = runTokens(
      "process.stdout.write(JSON.stringify(tokens.resolve('--bs-body-color-rgb', toMap(input))));",
      { '--bs-body-color-rgb': 'var(--bs-optional-rgb, var(--bs-white-rgb))' },
    ) as Resolved;
    expect(resolved.rgb).toEqual({ r: 255, g: 255, b: 255 });
  });
});

describe('buildContexts', () => {
  /** Arma los contextos de un raíz y de una lista de bloques de zona. */
  function contexts(
    root: Record<string, string>,
    zones: Array<[string, Record<string, string>]>,
    lookups: Array<[string | null, string]>,
  ) {
    return runTokens(`
      const [root, zones, lookups] = input;
      const blocks = zones.map(([zone, decls], i) => ({ zone, decls: toMap(decls), line: i + 1 }));
      const ctxs = tokens.buildContexts(blocks, toMap(root));
      process.stdout.write(JSON.stringify({
        zones: ctxs.map((ctx) => ({ zone: ctx.zone, line: ctx.line, own: Object.fromEntries([...ctx.own].map(([k, v]) => [k, v.value])) })),
        resolved: lookups.map(([zone, name]) => ctxs.find((ctx) => ctx.zone === zone).lookup(name).rgb),
      }));
    `, [root, zones, lookups]) as {
      zones: Array<{ zone: string | null; line: number | null; own: Record<string, string> }>;
      resolved: Array<{ r: number; g: number; b: number } | null>;
    };
  }

  it('funde dos bloques de la misma zona en orden de aparición', () => {
    const result = contexts(
      { '--bs-body-bg-rgb': '255, 255, 255', '--bs-body-color-rgb': '16, 24, 40' },
      [
        ['oscura', { '--bs-body-bg-rgb': '16, 24, 40', '--bs-link-color-rgb': '1, 1, 1' }],
        ['oscura', { '--bs-body-color-rgb': '255, 255, 255', '--bs-link-color-rgb': '2, 2, 2' }],
      ],
      [['oscura', '--bs-body-bg-rgb'], ['oscura', '--bs-body-color-rgb'], [null, '--bs-body-bg-rgb']],
    );
    expect(result.zones).toEqual([
      { zone: null, line: null, own: { '--bs-body-bg-rgb': '255, 255, 255', '--bs-body-color-rgb': '16, 24, 40' } },
      {
        zone: 'oscura',
        line: 1,
        own: {
          '--bs-body-bg-rgb': '16, 24, 40',
          '--bs-link-color-rgb': '2, 2, 2',
          '--bs-body-color-rgb': '255, 255, 255',
        },
      },
    ]);
    expect(result.resolved).toEqual([
      { r: 16, g: 24, b: 40 },
      { r: 255, g: 255, b: 255 },
      { r: 255, g: 255, b: 255 },
    ]);
  });

  it('resuelve en la zona lo que ésta no declara con el valor calculado en el raíz', () => {
    const result = contexts(
      { '--bs-body-color-rgb': 'var(--bs-gray-900-rgb)' },
      [['clara', { '--bs-gray-900-rgb': '250, 250, 250' }]],
      [['clara', '--bs-body-color-rgb']],
    );
    expect(result.resolved).toEqual([{ r: 21, g: 21, b: 26 }]);
  });
});

/**
 * Las declaraciones de un selector exacto en el CSS compilado, como Map.
 * El primer bloque con ese selector es el que cuenta: el de `:root` va al
 * principio del archivo, y los de componente no se repiten con las mismas
 * variables.
 */
function compiledBlock(css: string, selector: string): Map<string, string> {
  const re = /([^{}]+)\{([^{}]*)\}/g;
  let match = re.exec(css);
  while (match) {
    const prelude = match[1].replace(/@charset "UTF-8";/, '').trim().replace(/\s+/g, ' ');
    if (prelude === selector) {
      return new Map([...match[2].matchAll(/(--bs-[\w-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]));
    }
    match = re.exec(css);
  }
  return new Map();
}

describe('los valores por defecto contra el CSS compilado', () => {
  const compiled = path.resolve(__dirname, '../../dist/css/dynamic-ui.css');
  const itIfBuilt = fs.existsSync(compiled) ? it : it.skip;

  // dist/ es build output y está gitignoreado: en CI este caso se salta.
  itIfBuilt('cada entrada vale lo mismo que en la librería, literal o alias', () => {
    const css = fs.readFileSync(compiled, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
    const root = compiledBlock(css, ':root, [data-bs-theme=dynamic]');
    expect(root.size).toBeGreaterThan(0);

    const tables = runTokens(`
      const wrappers = [...tokens.KNOWN_TOKENS]
        .map((name) => [name, tokens.libraryWrapper(name)])
        .filter(([, value]) => value !== undefined);
      process.stdout.write(JSON.stringify({
        triplets: [...tokens.DEFAULT_TRIPLETS],
        rootColors: [...tokens.LIBRARY_ROOT_COLORS],
        wrappers,
        elements: [...tokens.LIBRARY_ELEMENT_VARS].map(([selector, decls]) => [selector, [...decls]]),
      }));
    `, null) as {
      triplets: Array<[string, string]>;
      rootColors: Array<[string, string]>;
      wrappers: Array<[string, string]>;
      elements: Array<[string, Array<[string, string]>]>;
    };

    const fromLibrary = (decls: Map<string, string>, entries: Array<[string, string]>) => entries
      .map(([name]) => [name, decls.get(name)]);

    expect(tables.triplets).toHaveLength(101);
    expect(fromLibrary(root, tables.triplets)).toEqual(tables.triplets);
    expect(fromLibrary(root, tables.rootColors)).toEqual(tables.rootColors);
    expect(tables.wrappers.length).toBeGreaterThan(200);
    expect(fromLibrary(root, tables.wrappers)).toEqual(tables.wrappers);
    for (const [selector, decls] of tables.elements) {
      expect([selector, fromLibrary(compiledBlock(css, selector), decls)]).toEqual([selector, decls]);
    }
  });
});
