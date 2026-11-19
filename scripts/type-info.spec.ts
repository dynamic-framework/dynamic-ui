/**
 * Tests de type-info.
 *
 * resolveTypeInfo se ejercita en un proceso de Node aparte, como en
 * manifest-docgen.spec.ts: el módulo es ESM y usa la Compiler API. Los tipos
 * salen de un archivo en memoria con un caso por campo de `Sample`.
 */

import { spawnSync } from 'node:child_process';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..');
const TYPE_INFO = path.join(ROOT, 'scripts/type-info.mjs');

jest.setTimeout(60000);

const SOURCE = `
  export type Sample<K extends PropertyKey = PropertyKey> = {
    plain: string;
    literal: 'modal';
    template: \`id-\${number}\`;
    keyOfString: K & string;
    noString: { a: number } & { b: boolean };
    iterable: { size: number; [Symbol.iterator](): Iterator<number> };
  };
`;

type Field = { type: string; fields?: Record<string, Field> };

let fields: Record<string, Field>;

beforeAll(() => {
  const script = `
    import { createRequire } from 'node:module';
    const require = createRequire(${JSON.stringify(TYPE_INFO)});
    const ts = require('typescript');
    const { resolveTypeInfo } = await import(${JSON.stringify(TYPE_INFO)});
    const file = '/sample.ts';
    const host = ts.createCompilerHost({ strict: true });
    const getSourceFile = host.getSourceFile.bind(host);
    host.getSourceFile = (name, version) => (name === file
      ? ts.createSourceFile(file, ${JSON.stringify(SOURCE)}, version)
      : getSourceFile(name, version));
    const fileExists = host.fileExists.bind(host);
    host.fileExists = (name) => name === file || fileExists(name);
    const program = ts.createProgram([file], { strict: true }, host);
    const checker = program.getTypeChecker();
    const declaration = program.getSourceFile(file).statements[0];
    const symbol = checker.getSymbolAtLocation(declaration.name);
    const info = resolveTypeInfo(checker.getDeclaredTypeOfSymbol(symbol), checker, declaration, 0, true);
    process.stdout.write(JSON.stringify(info.fields));
  `;
  const run = spawnSync('node', ['--input-type=module', '-e', script], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  if (run.status !== 0) throw new Error(run.stderr);
  fields = JSON.parse(run.stdout);
});

// #1305: `K & string` llegaba a getPropertiesOfType y se expandía con los
// métodos de String, entre ellos `__@iterator@N`.
describe('resolveTypeInfo', () => {
  test.each([
    ['string', 'plain'],
    ['un literal de string', 'literal'],
    ['un template literal', 'template'],
    ['K & string', 'keyOfString'],
  ])('%s se resuelve como string, sin fields', (_, name) => {
    expect(fields[name].type).toBe('string');
    expect(fields[name]).not.toHaveProperty('fields');
  });

  test('una intersección sin string no se trata como string', () => {
    expect(fields.noString.type).toBe('object');
    expect(Object.keys(fields.noString.fields ?? {})).toEqual(['a', 'b']);
  });

  test('descarta las propiedades con nombre de símbolo (__@)', () => {
    expect(Object.keys(fields.iterable.fields ?? {})).toEqual(['size']);
  });
});
