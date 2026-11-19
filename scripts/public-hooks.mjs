/**
 * public-hooks.mjs
 *
 * Enumera los hooks públicos del paquete: todo export `use*` de `src/index.ts`,
 * resuelto con el type checker hasta su declaración. Lo usan
 * `generate-api.mjs`, para emitir una entrada por hook en `api.json`, y
 * `validate-registry.mjs`, para comprobar que ninguno falta.
 *
 * La lista sale del índice y no del contenido de los archivos: un hook que se
 * exporta desde su archivo pero no desde el índice (por ejemplo
 * `useBreakpointValue`) no es público.
 */

import { existsSync } from 'fs';
import {
  resolve, dirname, relative, sep,
} from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const ts = require('typescript');

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const TSCONFIG_PATH = resolve(ROOT, 'tsconfig.json');
export const INDEX_PATH = resolve(ROOT, 'src/index.ts');

const HOOK_NAME = /^use[A-Z]/;

/** Crea un programa de TypeScript con `src/index.ts` como raíz. */
export function createIndexProgram() {
  if (!existsSync(TSCONFIG_PATH)) {
    throw new Error(`no se encontró tsconfig.json en ${ROOT}`);
  }
  const tsConfigFile = ts.readConfigFile(TSCONFIG_PATH, ts.sys.readFile);
  const { options } = ts.parseJsonConfigFileContent(
    tsConfigFile.config,
    ts.sys,
    dirname(TSCONFIG_PATH),
  );
  return ts.createProgram([INDEX_PATH], { ...options, noEmit: true });
}

/** Nombre del paquete de `node_modules` que contiene `fileName`, o `null`. */
function packageNameOf(fileName) {
  const parts = fileName.split(/[\\/]/);
  const at = parts.lastIndexOf('node_modules');
  if (at === -1) return null;
  const first = parts[at + 1];
  return first.startsWith('@') ? `${first}/${parts[at + 2]}` : first;
}

/**
 * Devuelve los exports `use*` de `src/index.ts`, ordenados por nombre:
 * `[{ name, declaration, sourceFile, source, external }]`.
 *
 * - `source` es la ruta relativa a la raíz del repo, o el nombre del paquete
 *   cuando el hook se reexporta desde una dependencia (`external: true`).
 */
export function listPublicHooks(program = createIndexProgram()) {
  const checker = program.getTypeChecker();
  const indexFile = program.getSourceFile(INDEX_PATH);
  if (!indexFile) throw new Error(`no se pudo cargar ${INDEX_PATH}`);
  const moduleSymbol = checker.getSymbolAtLocation(indexFile);

  return checker.getExportsOfModule(moduleSymbol)
    .filter((symbol) => HOOK_NAME.test(symbol.name))
    .map((symbol) => {
      // eslint-disable-next-line no-bitwise
      const target = symbol.flags & ts.SymbolFlags.Alias
        ? checker.getAliasedSymbol(symbol)
        : symbol;
      const declaration = target.declarations?.find((d) => ts.isFunctionDeclaration(d));
      if (!declaration) {
        throw new Error(`${symbol.name} no se declara como función`);
      }
      const sourceFile = declaration.getSourceFile();
      const packageName = packageNameOf(sourceFile.fileName);
      return {
        name: symbol.name,
        declaration,
        sourceFile,
        source: packageName ?? relative(ROOT, sourceFile.fileName).split(sep).join('/'),
        external: packageName !== null,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}
