/**
 * component-docgen.mjs
 *
 * Lee las props de los componentes con react-docgen-typescript y completa lo
 * que el parser no resuelve por sí solo. Lo usan `generate-api.mjs`, para
 * `api.json`, y `.storybook/manifest-docgen.ts`, para `components.json`, de
 * modo que los dos artefactos aplican el mismo criterio.
 *
 * Defaults: el parser solo lee los valores por defecto del primer parámetro
 * desestructurado de la función cuyo símbolo coincide con el export, o de
 * una función escrita dentro de `forwardRef(...)`. Se le escapan:
 *   - `export default Object.assign(DX, {...})`: el símbolo exportado es
 *     `default`, no la función `DX`;
 *   - `forwardRef(DX)` con `DX` declarada aparte: el argumento es un
 *     identificador, no una función;
 *   - `const { a = 1 } = props` en el cuerpo: solo mira el parámetro.
 * Aquí se baja desde el símbolo exportado hasta la función que implementa el
 * componente y se leen sus desestructuraciones con `Parser.getPropMap`, el
 * mismo método que usa el parser, para que el formato sea idéntico.
 *
 * Cada archivo se parsea con su propio programa de TypeScript, como hace
 * `withCustomConfig().parse`: con un programa compartido el checker crea los
 * tipos en otro orden y cambia el orden de los miembros de las uniones.
 */

import { dirname } from 'path';
import { createRequire } from 'module';
import * as docgen from 'react-docgen-typescript';

import { TSCONFIG_PATH } from './public-hooks.mjs';

const require = createRequire(import.meta.url);
const ts = require('typescript');

/** Filtro de props: descarta las que el parser atribuye a `node_modules`. */
export function propFilter(prop) {
  if (prop.parent) return !/node_modules/.test(prop.parent.fileName);
  return true;
}

const PARSER_OPTIONS = {
  shouldExtractLiteralValuesFromEnum: true,
  shouldIncludeExpression: true,
  propFilter,
};

const fileParser = docgen.withCustomConfig(TSCONFIG_PATH, PARSER_OPTIONS);

const { options: compilerOptions } = ts.parseJsonConfigFileContent(
  ts.readConfigFile(TSCONFIG_PATH, ts.sys.readFile).config,
  ts.sys,
  dirname(TSCONFIG_PATH),
  {},
  TSCONFIG_PATH,
);

/**
 * Baja desde un nodo hasta la función que implementa el componente,
 * atravesando exports, variables, `forwardRef`/`memo`/`Object.assign` (su
 * primer argumento) e identificadores. Devuelve `null` si no la encuentra.
 */
function implementationOf(node, checker, seen = new Set()) {
  if (!node || seen.has(node)) return null;
  seen.add(node);
  if (ts.isFunctionDeclaration(node) || ts.isArrowFunction(node) || ts.isFunctionExpression(node)) {
    return node;
  }
  if (
    ts.isExportAssignment(node) || ts.isParenthesizedExpression(node) || ts.isAsExpression(node)
  ) {
    return implementationOf(node.expression, checker, seen);
  }
  if (ts.isVariableDeclaration(node)) return implementationOf(node.initializer, checker, seen);
  // `export { X } from 'lib'`: se sigue hasta la declaración original.
  if (ts.isExportSpecifier(node)) {
    const symbol = checker.getExportSpecifierLocalTargetSymbol(node);
    const target = symbol && symbol.flags & ts.SymbolFlags.Alias // eslint-disable-line no-bitwise
      ? checker.getAliasedSymbol(symbol)
      : symbol;
    return implementationOf(target?.valueDeclaration ?? target?.declarations?.[0], checker, seen);
  }
  if (ts.isCallExpression(node)) return implementationOf(node.arguments[0], checker, seen);
  if (ts.isIdentifier(node)) {
    let symbol = checker.getSymbolAtLocation(node);
    // eslint-disable-next-line no-bitwise
    if (symbol && symbol.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol);
    return implementationOf(symbol?.valueDeclaration ?? symbol?.declarations?.[0], checker, seen);
  }
  return null;
}

/** Función que implementa el componente de un ComponentDoc, o `null`. */
export function componentImplementation(doc, checker) {
  const exported = doc.rootExpression ?? doc.expression;
  const declaration = exported?.valueDeclaration ?? exported?.declarations?.[0];
  return implementationOf(declaration, checker);
}

/**
 * Patrones con los que la función desestructura sus props: el primer
 * parámetro, si es un patrón, y cada `const { … } = <primer parámetro>` de
 * su cuerpo, a cualquier profundidad.
 */
export function propsBindingPatterns(fn) {
  const [first] = fn.parameters;
  if (!first) return [];
  if (ts.isObjectBindingPattern(first.name)) return [first.name];
  if (!ts.isIdentifier(first.name) || !fn.body) return [];

  const propsName = first.name.text;
  const patterns = [];
  const visit = (node) => {
    if (
      ts.isVariableDeclaration(node)
      && ts.isObjectBindingPattern(node.name)
      && node.initializer
      && ts.isIdentifier(node.initializer)
      && node.initializer.text === propsName
    ) {
      patterns.push(node.name);
    }
    // Las funciones anidadas tienen su propio ámbito.
    if (!ts.isFunctionLike(node)) ts.forEachChild(node, visit);
  };
  ts.forEachChild(fn.body, visit);
  return patterns;
}

/** Nombre de prop que lee un elemento de un patrón (`'aria-label': a` → `aria-label`). */
export function bindingPropName(element) {
  const name = element.propertyName ?? element.name;
  if (ts.isIdentifier(name) || ts.isStringLiteral(name)) return name.text;
  return null;
}

/**
 * Parsea un archivo de componente y devuelve sus ComponentDoc con los
 * defaults que el parser no encuentra. Cada doc lleva además
 * `implementationFound`, que indica si se localizó la función del componente.
 */
export function parseComponentFile(filePath) {
  const program = ts.createProgram([filePath], compilerOptions);
  const checker = program.getTypeChecker();
  const helper = new docgen.Parser(program, PARSER_OPTIONS);

  return fileParser.parseWithProgramProvider(filePath, () => program).map((doc) => {
    const fn = componentImplementation(doc, checker);
    const defaults = fn
      ? propsBindingPatterns(fn).reduce((acc, pattern) => ({
        ...acc,
        ...helper.getPropMap(pattern.elements),
      }), {})
      : {};

    const props = Object.fromEntries(
      Object.entries(doc.props).map(([name, prop]) => [
        name,
        prop.defaultValue == null && defaults[name] !== undefined
          ? { ...prop, defaultValue: { value: defaults[name] } }
          : prop,
      ]),
    );

    const { expression, rootExpression, ...rest } = doc;
    return { ...rest, props, implementationFound: fn !== null };
  });
}
