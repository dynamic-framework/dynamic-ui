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
import { resolveTypeInfo } from './type-info.mjs';

const require = createRequire(import.meta.url);
const ts = require('typescript');

const inNodeModules = (fileName) => /node_modules/.test(fileName);

/**
 * Parte declarativa del filtro de props: conserva una prop si el parser no
 * la atribuye a `node_modules` (criterio anterior) o si alguna de sus
 * declaraciones está en el proyecto. Lo segundo recupera las props propias
 * que comparten nombre con un atributo HTML (`DButtonIcon.color`): el parser
 * les asigna como `parent` la declaración de `@types/react`.
 *
 * `children` no sigue el criterio anterior: el parser lo omitía
 * (`skipChildrenPropWithoutDoc`) y nunca estuvo en api.json. Solo se conserva
 * con una declaración propia o, en `parseComponentFile`, si la función lo
 * desestructura y lo usa; así no entra por un `PropsWithChildren` de
 * `@types/react` ni por una desestructuración que solo lo aparta, en
 * componentes que no lo renderizan.
 *
 * `parseComponentFile` añade la parte que necesita el AST: los atributos que
 * la función del componente desestructura. La tabla de props de Storybook
 * (`.storybook/main.ts`) solo puede aplicar esta parte.
 */
export function propFilter(prop) {
  const legacy = prop.name !== 'children'
    && (prop.parent ? !inNodeModules(prop.parent.fileName) : true);
  return legacy || (prop.declarations ?? []).some((d) => !inNodeModules(d.fileName));
}

// El filtro se aplica en parseComponentFile, que conoce la función del
// componente; el parser entrega todas las props, también `children`.
const PARSER_OPTIONS = {
  shouldExtractLiteralValuesFromEnum: true,
  shouldIncludeExpression: true,
  skipChildrenPropWithoutDoc: false,
  propFilter: () => true,
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
 * Indica si el valor que un elemento del patrón saca de las props se usa en
 * la función, además de en la propia desestructuración.
 */
function isBindingUsed(element, fn, checker) {
  if (!ts.isIdentifier(element.name)) return true;
  const symbol = checker.getSymbolAtLocation(element.name);
  let used = false;
  const visit = (node) => {
    if (used) return;
    if (
      ts.isIdentifier(node)
      && node !== element.name
      && checker.getSymbolAtLocation(node) === symbol
    ) {
      used = true;
      return;
    }
    ts.forEachChild(node, visit);
  };
  visit(fn);
  return used;
}

/** Nombre del elemento `...rest` de los patrones, o `null`. */
function restName(patterns) {
  const rest = patterns.flatMap((p) => p.elements).find((e) => e.dotDotDotToken);
  return rest && ts.isIdentifier(rest.name) ? rest.name.text : null;
}

// Partes del tipo de los atributos JSX que no son props del destino.
const JSX_PLUMBING = /^(IntrinsicAttributes|ClassAttributes|IntrinsicClassAttributes|RefAttributes)$/;

/** Tipo de las props que acepta el elemento JSX de un spread, sin la fontanería de JSX. */
function jsxPropsType(spread, checker) {
  const attributesType = checker.getContextualType(spread.parent);
  if (!attributesType) return null;
  const parts = (attributesType.isIntersection() ? attributesType.types : [attributesType])
    .filter((t) => !JSX_PLUMBING.test((t.aliasSymbol ?? t.symbol)?.name ?? ''))
    .map((t) => (t.aliasSymbol?.name === 'Readonly' && t.aliasTypeArguments?.length === 1
      ? t.aliasTypeArguments[0]
      : t));
  return parts
    .map((t) => checker.typeToString(t, undefined, ts.TypeFormatFlags.NoTruncation))
    .join(' & ')
    // En una unión el checker reparte IntrinsicAttributes dentro de cada miembro.
    .replace(/(^|[(|] ?)IntrinsicAttributes & /g, '$1');
}

/**
 * Nombre del componente de librería al que apunta una variable local (p. ej.
 * `const SafeDatePicker = useMemo(() => DatePicker …)`): el primer
 * identificador con nombre de componente de su inicializador importado desde
 * `node_modules`.
 */
function libraryComponentBehind(tagName, checker) {
  const symbol = checker.getSymbolAtLocation(tagName);
  const declaration = symbol?.valueDeclaration;
  if (!declaration || !ts.isVariableDeclaration(declaration) || !declaration.initializer) {
    return null;
  }
  let found = null;
  const visit = (node) => {
    // Solo valores: en `useMemo<ComponentType<…>>` el tipo no es el componente.
    if (found || ts.isTypeNode(node)) return;
    // Solo nombres de componente: `useMemo` también viene de node_modules.
    if (ts.isIdentifier(node) && /^[A-Z]/.test(node.text)) {
      const s = checker.getSymbolAtLocation(node);
      // eslint-disable-next-line no-bitwise
      const target = s && s.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(s) : null;
      const file = target?.declarations?.[0]?.getSourceFile().fileName;
      if (file && inNodeModules(file)) {
        found = node.text;
        return;
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(declaration.initializer);
  return found;
}

/**
 * Destino final de `...rest` (o de las props enteras, si la función no las
 * desestructura): el elemento JSX al que la función reenvía el resto de sus
 * props. Si es un componente del proyecto que a su vez reenvía
 * su resto, se sigue la cadena (DInputCounter → DInput → `input`).
 * Devuelve `{ target, type }` o `null` si el resto no llega a JSX.
 */
function forwardedPropsOf(fn, checker, depth = 0) {
  // Sin `...rest`, el primer parámetro entero (`function DX(props) { <X {...props} /> }`).
  const [first] = fn.parameters;
  const rest = restName(propsBindingPatterns(fn))
    ?? (first && ts.isIdentifier(first.name) ? first.name.text : null);
  if (!rest || depth > 5) return null;

  let spread = null;
  const visit = (node) => {
    if (spread) return;
    if (ts.isJsxSpreadAttribute(node)) {
      let { expression } = node;
      while (ts.isAsExpression(expression) || ts.isParenthesizedExpression(expression)) {
        ({ expression } = expression);
      }
      if (ts.isIdentifier(expression) && expression.text === rest) {
        spread = node;
        return;
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(fn);
  if (!spread) return null;

  const { tagName } = spread.parent.parent;
  const type = jsxPropsType(spread, checker);
  if (/^[a-z]/.test(tagName.getText())) return { target: tagName.getText(), type };

  const library = libraryComponentBehind(tagName, checker);
  if (library) return { target: library, type };

  const next = implementationOf(tagName, checker);
  if (next && !inNodeModules(next.getSourceFile().fileName)) {
    // Componente del proyecto: si reenvía su resto se sigue la cadena; si no,
    // sus props ya están en api.json y no hay nada más que indicar.
    return forwardedPropsOf(next, checker, depth + 1);
  }
  return { target: tagName.getText(), type };
}

// --- Alias de tipo del proyecto ---

/** Declaración de un alias o interfaz del proyecto (fuera de `node_modules`), o `null`. */
function projectTypeDeclaration(symbol) {
  const declaration = symbol?.declarations?.find(
    (d) => ts.isTypeAliasDeclaration(d) || ts.isInterfaceDeclaration(d),
  );
  return declaration && !inNodeModules(declaration.getSourceFile().fileName) ? declaration : null;
}

/**
 * Añade a `found` los alias e interfaces del proyecto que aparecen en un tipo.
 * Se resuelven por símbolo y no por nombre: `ForwardRefExoticComponent`
 * existe en el proyecto y en React, y `Step` se declara tres veces.
 * `origin` es donde el checker guarda la unión tal como se escribió
 * (`ComponentSize | undefined`) cuando la aplana.
 */
function collectProjectTypes(type, checker, found, seen = new Set()) {
  if (!type || seen.has(type)) return;
  seen.add(type);
  const visit = (t) => collectProjectTypes(t, checker, found, seen);

  // eslint-disable-next-line no-bitwise
  const isObject = (type.flags & ts.TypeFlags.Object) !== 0;
  const interfaceSymbol = isObject && type.symbol?.declarations?.some(ts.isInterfaceDeclaration)
    ? type.symbol
    : null;
  const named = type.aliasSymbol ?? interfaceSymbol;
  if (named && projectTypeDeclaration(named)) found.add(named);

  (type.aliasTypeArguments ?? []).forEach(visit);
  if (type.origin) visit(type.origin);
  if (type.isUnionOrIntersection()) type.types.forEach(visit);
  // eslint-disable-next-line no-bitwise
  if (isObject && type.objectFlags & ts.ObjectFlags.Reference) {
    checker.getTypeArguments(type).forEach(visit);
  }
  // Objetos anónimos del proyecto (`BaseProps & { icon: IconValue }`): sus propiedades.
  const anonymousSource = type.symbol?.declarations?.[0]?.getSourceFile().fileName;
  // eslint-disable-next-line no-bitwise
  if (isObject && type.objectFlags & ts.ObjectFlags.Anonymous
    && anonymousSource && !inNodeModules(anonymousSource)) {
    checker.getPropertiesOfType(type).forEach((property) => {
      if (property.valueDeclaration) {
        visit(checker.getTypeOfSymbolAtLocation(property, property.valueDeclaration));
      }
    });
  }
  // Parámetros y retorno de las funciones (`onDrop(files, rejected: RejectedFile[])`).
  type.getCallSignatures().forEach((signature) => {
    signature.getParameters().forEach((parameter) => {
      if (parameter.valueDeclaration) {
        visit(checker.getTypeOfSymbolAtLocation(parameter, parameter.valueDeclaration));
      }
    });
    visit(signature.getReturnType());
  });
}

/* eslint-disable no-bitwise */
const PRIMITIVE_OR_LITERAL = ts.TypeFlags.StringLike | ts.TypeFlags.NumberLike
  | ts.TypeFlags.BooleanLike | ts.TypeFlags.BigIntLike | ts.TypeFlags.Null | ts.TypeFlags.Undefined;

const ALIAS_FORMAT = ts.TypeFormatFlags.InTypeAlias | ts.TypeFormatFlags.NoTruncation;
/* eslint-enable no-bitwise */

/**
 * Texto con el que se sustituye un alias de miembros primitivos o literales
 * (`ComponentSize` → `"sm" | "lg"`), o `null` si el alias es de otro tipo y
 * va a la sección `types`.
 */
function inlineText(symbol, checker) {
  const declaration = projectTypeDeclaration(symbol);
  if (!ts.isTypeAliasDeclaration(declaration) || declaration.typeParameters) return null;
  const declared = checker.getDeclaredTypeOfSymbol(symbol);
  const members = declared.isUnion() ? declared.types : [declared];
  // eslint-disable-next-line no-bitwise
  if (!members.every((t) => t.flags & PRIMITIVE_OR_LITERAL)) return null;
  return checker.typeToString(declared, undefined, ALIAS_FORMAT);
}

/** Sustituye en `text` cada alias por sus miembros, con paréntesis si hace falta. */
function inlineAliases(text, replacements) {
  return replacements.reduce((result, [name, members]) => result.replace(
    new RegExp(`(&\\s*)?\\b${name}\\b(\\[\\])?(\\s*&)?`, 'g'),
    (match, before = '', array = '', after = '') => (
      members.includes('|') && (before || array || after)
        ? `${before}(${members})${array}${after}`
        : `${before}${members}${array}${after}`
    ),
  ), text);
}

/**
 * Definición de un alias o interfaz para la sección `types`, con la misma
 * forma que en `hooks`: los objetos con `fields`, el resto con su tipo
 * expandido.
 */
function typeDefinition(symbol, checker, knownTypeNames) {
  const declaration = projectTypeDeclaration(symbol);
  const declared = checker.getDeclaredTypeOfSymbol(symbol);
  // Los tipos de librerías (CSSProperties, ReactNode…) quedan por su nombre.
  const ownType = (t) => {
    const source = (t.aliasSymbol ?? t.symbol)?.declarations?.[0]?.getSourceFile().fileName;
    return !source || !inNodeModules(source);
  };
  const info = resolveTypeInfo(declared, checker, declaration, 0, true, knownTypeNames, ownType);
  if (info.type !== 'object') {
    info.type = checker.typeToString(declared, declaration, ALIAS_FORMAT);
  }
  const description = ts.displayPartsToString(symbol.getDocumentationComment(checker)).trim();
  return { description, ...info };
}

/**
 * Resuelve los alias del proyecto que usan las props de un componente:
 * expande los de miembros literales en `type` y define el resto en `types`,
 * junto con los alias que aparecen dentro de esas definiciones.
 * Devuelve `{ props, types, projectTypeNames }`.
 */
function resolveProjectTypes(fn, props, checker) {
  const propsType = fn.parameters[0] && checker.getTypeAtLocation(fn.parameters[0]);
  if (!propsType) return { props, types: {}, projectTypeNames: [] };

  const pending = new Set();
  const all = new Set();
  const resolvedProps = Object.fromEntries(Object.entries(props).map(([name, prop]) => {
    const symbol = propsType.getProperty(name);
    if (!symbol) return [name, prop];
    const found = new Set();
    collectProjectTypes(checker.getTypeOfSymbolAtLocation(symbol, fn), checker, found);
    const replacements = [];
    found.forEach((alias) => {
      all.add(alias);
      const members = inlineText(alias, checker);
      if (members) replacements.push([alias.name, members]);
      else pending.add(alias);
    });
    if (!replacements.length) return [name, prop];
    const type = { ...prop.type, name: inlineAliases(prop.type.name, replacements) };
    if (Array.isArray(prop.type.value)) {
      type.value = prop.type.value.map((v) => ({
        ...v,
        value: inlineAliases(v.value, replacements),
      }));
    }
    return [name, { ...prop, type }];
  }));

  // Los alias que aparecen dentro de una definición también se definen.
  const definitions = new Map();
  while (pending.size) {
    const [alias] = pending;
    pending.delete(alias);
    if (!definitions.has(alias.name)) {
      definitions.set(alias.name, alias);
      const declaration = projectTypeDeclaration(alias);
      const declared = checker.getDeclaredTypeOfSymbol(alias);
      const nested = new Set();
      collectProjectTypes(declared, checker, nested);
      checker.getPropertiesOfType(declared).forEach((property) => {
        const propertyType = checker.getTypeOfSymbolAtLocation(property, declaration);
        collectProjectTypes(propertyType, checker, nested);
      });
      nested.forEach((n) => {
        all.add(n);
        if (n !== alias && !definitions.has(n.name)) pending.add(n);
      });
    }
  }

  const knownTypeNames = new Set(definitions.keys());
  const types = Object.fromEntries([...definitions].map(([name, alias]) => [
    name, typeDefinition(alias, checker, knownTypeNames),
  ]));
  const projectTypeNames = [...new Set([...all].map((a) => a.name))];
  return { props: resolvedProps, types, projectTypeNames };
}

/**
 * Indica si un ComponentDoc es un componente del proyecto. El parser devuelve
 * un doc por cada export del archivo que parece una función, también los
 * hooks y funciones que se reexportan de librerías
 * (`export { useErrorBoundary } from 'react-error-boundary'`). Se exige:
 *   - un nombre en mayúscula, la convención de React para componentes;
 *   - que el símbolo exportado se declare fuera de `node_modules`.
 * Se mira `rootExpression`, el símbolo del export, y no `expression`: en los
 * componentes con `forwardRef` `expression` apunta a la declaración de
 * `ForwardRefExoticComponent` en `@types/react`.
 */
function isProjectComponent(doc, checker) {
  if (!/^[A-Z]/.test(doc.displayName ?? '')) return false;
  let symbol = doc.rootExpression ?? doc.expression;
  // eslint-disable-next-line no-bitwise
  if (symbol && symbol.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol);
  return (symbol?.declarations ?? [])
    .some((d) => !inNodeModules(d.getSourceFile().fileName));
}

/**
 * Parsea un archivo de componente y devuelve sus ComponentDoc, solo los de
 * los componentes del proyecto (`isProjectComponent`):
 *   - con las props filtradas: `propFilter` más los atributos que la función
 *     del componente desestructura;
 *   - con los defaults que el parser no encuentra;
 *   - con `forwardedProps` (`{ target, type }`) cuando la función reenvía
 *     `...rest` a un elemento JSX;
 *   - con los alias del proyecto resueltos: inline en `type` o definidos en
 *     `types`; `projectTypeNames` lista todos los que se encontraron;
 *   - con `implementationFound`, que indica si se localizó la función.
 */
export function parseComponentFile(filePath) {
  const program = ts.createProgram([filePath], compilerOptions);
  const checker = program.getTypeChecker();
  const helper = new docgen.Parser(program, PARSER_OPTIONS);

  const docs = fileParser.parseWithProgramProvider(filePath, () => program)
    .filter((doc) => isProjectComponent(doc, checker));
  return docs.map((doc) => {
    const fn = componentImplementation(doc, checker);
    const patterns = fn ? propsBindingPatterns(fn) : [];
    // `children` solo cuenta si la función lo usa: hay componentes que lo
    // desestructuran para apartarlo y no renderizarlo.
    const destructured = new Set(
      patterns.flatMap((p) => p.elements)
        .filter((e) => !e.dotDotDotToken)
        .filter((e) => bindingPropName(e) !== 'children' || isBindingUsed(e, fn, checker))
        .map(bindingPropName)
        .filter(Boolean),
    );
    const defaults = patterns.reduce((acc, pattern) => ({
      ...acc,
      ...helper.getPropMap(pattern.elements),
    }), {});

    const props = Object.fromEntries(
      Object.entries(doc.props)
        .filter(([name, prop]) => propFilter(prop) || destructured.has(name))
        .map(([name, prop]) => [
          name,
          prop.defaultValue == null && defaults[name] !== undefined
            ? { ...prop, defaultValue: { value: defaults[name] } }
            : prop,
        ]),
    );

    const forwardedProps = fn ? forwardedPropsOf(fn, checker) : null;
    const resolved = fn
      ? resolveProjectTypes(fn, props, checker)
      : { props, types: {}, projectTypeNames: [] };
    const { expression, rootExpression, ...rest } = doc;
    return {
      ...rest,
      props: resolved.props,
      ...(forwardedProps ? { forwardedProps } : {}),
      types: resolved.types,
      projectTypeNames: resolved.projectTypeNames,
      implementationFound: fn !== null,
    };
  });
}
