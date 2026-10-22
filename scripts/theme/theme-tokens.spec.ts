/**
 * Tests unitarios de theme-tokens.mjs.
 *
 * El módulo es ESM (.mjs) y Jest corre en CommonJS, así que cada caso llama a
 * la función en un proceso de node aparte y lee el resultado como JSON, igual
 * que theme-validate.spec.ts ejercita los scripts por CLI.
 */

import { spawnSync } from 'node:child_process';
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
    const none = (n) => ({ rgb: null, reason: n + ' no está declarada' });
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
