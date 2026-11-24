/**
 * Tests de normalizeType (api-types.mjs). El módulo es ESM, así que se corre
 * en un proceso aparte, con un tope de tiempo para que un bucle no cuelgue la
 * suite.
 */

import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const API_TYPES = pathToFileURL(path.resolve(__dirname, 'api-types.mjs')).href;

function normalize(...types: string[]): string[] {
  const script = `
    import { normalizeType } from ${JSON.stringify(API_TYPES)};
    process.stdout.write(JSON.stringify(JSON.parse(process.argv[1]).map(normalizeType)));
  `;
  const result = spawnSync('node', ['--input-type=module', '-e', script, JSON.stringify(types)], {
    encoding: 'utf8',
    timeout: 10000,
  });
  expect(result.error).toBeUndefined();
  expect(result.stderr).toBe('');
  return JSON.parse(result.stdout);
}

describe('normalizeType', () => {
  test('ordena las uniones y las intersecciones en todos los niveles', () => {
    const [a, b] = normalize(
      '"sm" | "lg" | ((event: B | A) => void) | undefined',
      'undefined | ((event: A | B) => void) | "lg" | "sm"',
    );
    expect(a).toBe(b);
  });

  test('distingue una unión de una intersección', () => {
    const [union, intersection] = normalize('A | B', 'A & B');
    expect(union).not.toBe(intersection);
  });

  test('termina con comillas escapadas, literales sin cerrar y delimitadores dentro de literales', () => {
    expect(normalize('"a\\"b"', '"sin cerrar', 'Record<"a>b", string>')).toEqual([
      '"a\\"b"',
      '"sin cerrar',
      'Record<"a>b", string>',
    ]);
  });

  test('conserva los espacios dentro de los literales', () => {
    const [two, one] = normalize('"a  b"', '"a b"');
    expect(two).not.toBe(one);
  });

  test('colapsa los espacios fuera de los literales', () => {
    const [a, b] = normalize('Record< string ,\n  number >', 'Record<string, number>');
    expect(a).toBe(b);
  });
});
