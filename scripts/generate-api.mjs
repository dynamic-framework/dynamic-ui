/**
 * generate-api.mjs
 *
 * Genera registry/api.json, el descriptor unificado de la API pública de
 * Dynamic UI. Incluye:
 *   - las props de los componentes, leídas del código TypeScript con
 *     react-docgen-typescript;
 *   - la firma de cada hook que exporta `src/index.ts` y la de los providers
 *     de contexto, extraídas con la Compiler API de TypeScript.
 *
 * Los hooks se extraen con la Compiler API porque react-docgen-typescript solo
 * procesa componentes de React, no funciones: de ella salen los tipos
 * exportados, el JSDoc (descripción, @requires, @param) y las firmas.
 *
 * Uso: node scripts/generate-api.mjs
 */

import {
  readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync,
} from 'fs';
import { resolve, dirname, basename, relative } from 'path';
import { createRequire } from 'module';
import * as docgen from 'react-docgen-typescript';

import {
  ROOT, TSCONFIG_PATH, createIndexProgram, listPublicHooks,
} from './public-hooks.mjs';

const require = createRequire(import.meta.url);
const ts = require('typescript');

// --- Validación ---
const OUTPUT_DIR = resolve(ROOT, 'registry');
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

if (!existsSync(TSCONFIG_PATH)) {
  process.stderr.write('No se encontró tsconfig.json en la raíz del proyecto.\n');
  process.exit(1);
}

// --- Archivos con providers de contexto documentados (relativos a la raíz) ---
const CONTEXT_FILES = [
  'src/contexts/DPortalContext.tsx',
  'src/contexts/DContext.tsx',
];

// --- Utilidades ---

/** Extrae el texto plano de un comentario JSDoc (string o NodeArray). */
function jsDocCommentToString(comment) {
  if (!comment) return '';
  if (typeof comment === 'string') return comment.trim();
  return ts.displayPartsToString(comment).trim();
}

/** Lee la descripción principal del JSDoc de un nodo, sin el texto de las etiquetas. */
function getNodeJsDoc(node) {
  return ts.getJSDocCommentsAndTags(node)
    .filter((d) => ts.isJSDoc(d))
    .map((d) => jsDocCommentToString(d.comment))
    .filter(Boolean)
    .join('\n')
    .trim();
}

/** Devuelve el texto fuente de un TypeNode en una línea (para mostrar el tipo tal cual). */
function typeNodeText(typeNode, sourceFile) {
  if (!typeNode) return 'unknown';
  return typeNode.getText(sourceFile).replace(/\s+/g, ' ').trim();
}

/**
 * Resuelve un Type de TypeScript a un descriptor serializable y autocontenido.
 *
 * - Unión de literales string → { type: 'string', values: ['a', 'b', ...] }
 * - Objeto / tipo mapeado → { type: 'object', fields: { prop: { type, required, description } } }
 * - Escalar / otro            → { type: '<texto del checker>' }
 *
 * Los miembros `undefined` de una unión se quitan para que las propiedades
 * opcionales queden limpias (el flag `required` del campo padre ya indica la
 * opcionalidad). La recursión se corta en profundidad 3 para no expandir el
 * interior de las librerías.
 *
 * @param {boolean} [expand=false] Si es true, expande siempre los objetos
 *   aunque tengan un alias con nombre (se usa en la sección `types`).
 * @param {Set<string>} [knownTypeNames] Nombres de los tipos documentados en
 *   `sharedTypes`. Solo estos se emiten como referencia por nombre; el resto
 *   de los alias (de librerías, no exportados, etc.) se expanden o se pasan a
 *   texto, para que el consumidor siempre reciba una definición utilizable.
 */
function resolveTypeInfo(type, checker, locationNode, depth = 0, expand = false, knownTypeNames = new Set()) {
  if (depth > 3) return { type: checker.typeToString(type) };

  // Los primitivos se atienden antes de getPropertiesOfType, que si no
  // devolvería los métodos de las interfaces String/Number.
  // eslint-disable-next-line no-bitwise
  if (type.flags & ts.TypeFlags.String) return { type: 'string' };
  // eslint-disable-next-line no-bitwise
  if (type.flags & ts.TypeFlags.Number) return { type: 'number' };
  // eslint-disable-next-line no-bitwise
  if (type.flags & ts.TypeFlags.Boolean) return { type: 'boolean' };

  if (type.isUnion()) {
    // eslint-disable-next-line no-bitwise
    const nonUndefined = type.types.filter((t) => !(t.flags & ts.TypeFlags.Undefined));

    if (nonUndefined.length > 0 && nonUndefined.every((t) => t.isStringLiteral())) {
      return { type: 'string', values: nonUndefined.map((t) => t.value) };
    }
    if (nonUndefined.length === 1) {
      return resolveTypeInfo(nonUndefined[0], checker, locationNode, depth, expand, knownTypeNames);
    }
    return { type: checker.typeToString(type) };
  }

  // Arrays: se emite `ElementType[]` en vez de expandir todos los métodos de
  // Array.prototype (push, pop, splice, sort…), que son ruido en la documentación.
  if (checker.isArrayType(type)) {
    const [elemType] = checker.getTypeArguments(type) ?? [];
    const elemStr = elemType ? checker.typeToString(elemType) : 'unknown';
    return { type: `${elemStr}[]` };
  }

  // Alias con nombre: solo se emite el nombre cuando es un tipo *documentado*
  // presente en sharedTypes (p. ej. CurrencyProps, BreakpointProps). Los tipos
  // de librerías (ReactNode, Partial<...>) y los alias no exportados no están
  // en knownTypeNames, así que se expanden o se pasan a texto.
  if (!expand && type.aliasSymbol && knownTypeNames.has(type.aliasSymbol.name)) {
    return { type: checker.typeToString(type) };
  }

  // Objeto / tipo mapeado (TypeLiteral, interface, Partial<Pick<...>>, etc.)
  const props = checker.getPropertiesOfType(type);
  if (props.length > 0) {
    const fields = {};
    props.forEach((prop) => {
      const propType = checker.getTypeOfSymbolAtLocation(prop, locationNode);
      // eslint-disable-next-line no-bitwise
      const isOptional = !!(Number(prop.flags) & Number(ts.SymbolFlags.Optional));
      const desc = ts.displayPartsToString(prop.getDocumentationComment(checker)).trim();
      fields[prop.name] = {
        // Los campos anidados de un tipo expandido nunca reciben expand=true,
        // para no entrar en recursión infinita con tipos autorreferenciados.
        ...resolveTypeInfo(propType, checker, locationNode, depth + 1, false, knownTypeNames),
        required: !isOptional,
        ...(desc ? { description: desc } : {}),
      };
    });
    return { type: 'object', fields };
  }

  return { type: checker.typeToString(type) };
}

/**
 * Lee las etiquetas `@param` del JSDoc de un nodo y devuelve un mapa
 * nombre → descripción. Cubre los parámetros documentados en línea (p. ej. en
 * envoltorios de `useCallback`), a los que no se llega por los comentarios de
 * documentación del type checker.
 */
function getJsDocParamDescriptions(node) {
  return ts.getJSDocTags(node).reduce((result, tag) => {
    if (!ts.isJSDocParameterTag(tag) || !tag.name) return result;
    const raw = tag.name.getText ? tag.name.getText() : String(tag.name);
    const name = raw.replace(/^-?\s*/, '').trim();
    return {
      ...result,
      [name]: jsDocCommentToString(tag.comment).replace(/^-\s*/, '').trim(),
    };
  }, {});
}

/**
 * Lee las etiquetas `@requires` del JSDoc de un nodo y devuelve un array
 * ordenado. Documenta los requisitos de un hook (providers de contexto,
 * componentes que deben estar montados).
 */
function getJsDocRequires(node) {
  return ts.getJSDocTags(node)
    .filter((tag) => tag.tagName && tag.tagName.text === 'requires')
    .map((tag) => jsDocCommentToString(tag.comment))
    .filter(Boolean);
}

/**
 * Lee las etiquetas `@throws` del JSDoc de un nodo y devuelve sus
 * descripciones, o `undefined` si no hay ninguna.
 */
function getJsDocThrows(node) {
  const tags = ts.getJSDocTags(node).filter(
    (t) => t.tagName && t.tagName.text === 'throws',
  );
  if (tags.length === 0) return undefined;
  return tags.map((t) => jsDocCommentToString(t.comment) || '').filter(Boolean);
}

/**
 * Devuelve el texto de la etiqueta `@deprecated` de un símbolo, con el mismo
 * formato que react-docgen-typescript usa en `description`
 * (`@deprecated <texto>`), o '' si no está deprecado.
 */
function getDeprecatedNote(symbol, checker) {
  const tag = symbol.getJsDocTags(checker).find((t) => t.name === 'deprecated');
  if (!tag) return '';
  const text = ts.displayPartsToString(tag.text).replace(/\s+/g, ' ').trim();
  return text ? `@deprecated ${text}` : '@deprecated';
}

/**
 * Extrae los parámetros de llamada de un símbolo de tipo función con el type checker.
 * Devuelve [{ name, type, required, description }].
 */
function extractCallParams(symbol, checker, locationNode) {
  const type = checker.getTypeOfSymbolAtLocation(symbol, locationNode);
  const sigs = checker.getSignaturesOfType(type, ts.SignatureKind.Call);
  if (!sigs.length) return [];
  return sigs[0].parameters.map((param) => ({
    name: param.name,
    type: checker.typeToString(
      checker.getTypeOfSymbolAtLocation(param, locationNode),
    ),
    // SymbolFlags.Optional no marca los parámetros de función: un parámetro
    // es opcional si lleva `?`, tiene valor por defecto o es rest.
    required: !(
      param.valueDeclaration
      && ts.isParameter(param.valueDeclaration)
      && checker.isOptionalParameter(param.valueDeclaration)
    ),
    description: ts.displayPartsToString(
      param.getDocumentationComment(checker),
    ).trim(),
  }));
}

/**
 * Devuelve el texto del tipo de retorno de un símbolo de tipo función.
 */
function extractReturnTypeString(symbol, checker, locationNode) {
  const type = checker.getTypeOfSymbolAtLocation(symbol, locationNode);
  const sigs = checker.getSignaturesOfType(type, ts.SignatureKind.Call);
  if (!sigs.length) return 'void';
  return checker.typeToString(checker.getReturnTypeOfSignature(sigs[0]));
}

/**
 * Indica si el retorno de un hook es un objeto cuyas propiedades se listan en
 * `returns`. Los primitivos, `void`, los arrays y las tuplas no lo son: para
 * ellos `returns` queda vacío y el tipo se lee en `returnType`.
 */
function hasObjectReturn(type, checker) {
  if (type.isUnion()) {
    const members = type.types.filter(
      // eslint-disable-next-line no-bitwise
      (t) => !(t.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)),
    );
    return members.length > 0 && members.every((t) => hasObjectReturn(t, checker));
  }
  if (checker.isArrayType(type) || checker.isTupleType(type)) return false;
  // eslint-disable-next-line no-bitwise
  return (type.flags & (ts.TypeFlags.Object | ts.TypeFlags.Intersection)) !== 0;
}

/**
 * Devuelve la lista de parámetros de tipo genérico de un nodo al estilo
 * TypeScript, con sus restricciones y valores por defecto, p. ej.
 * `<T extends Identifiable, U = string>`, o '' si no tiene.
 */
function getTypeParamsStr(node) {
  if (!node.typeParameters?.length) return '';
  return `<${node.typeParameters.map((tp) => tp.getText().replace(/\s+/g, ' ')).join(', ')}>`;
}

/**
 * Construye la firma de un hook al estilo TypeScript.
 * Ejemplos: `useDToast() => { toast }`,
 * `useMediaQuery(mediaQuery: string, useListener?: boolean) => boolean`.
 */
function buildSignature(hookName, parameters, returnKeys, returnType) {
  const params = parameters
    .map((p) => `${p.name}${p.required || p.name.startsWith('...') ? '' : '?'}: ${p.type}`)
    .join(', ');
  const ret = returnKeys.length ? `{ ${returnKeys.join(', ')} }` : returnType;
  return `${hookName}(${params}) => ${ret}`;
}

// --- Extracción ---

const program = createIndexProgram();
const checker = program.getTypeChecker();

/**
 * Datos compartidos por todas las entradas de un mismo archivo: los nombres
 * de los tipos exportados con JSDoc (`knownTypeNames`) y su definición
 * resuelta (`sharedTypes`). Se calculan una vez por archivo.
 */
const fileContexts = new Map();

function getFileContext(sourceFile) {
  const cached = fileContexts.get(sourceFile.fileName);
  if (cached) return cached;

  // Pre-escaneo: nombres de los alias e interfaces exportados que tienen JSDoc.
  // Solo estos se emiten como referencia en props y retornos; los tipos de
  // librerías y los alias no exportados se expanden o se pasan a texto.
  const knownTypeNames = new Set();
  const exportedTypes = [];
  ts.forEachChild(sourceFile, (node) => {
    // eslint-disable-next-line no-bitwise
    const isExported = !!(ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export);
    if (isExported && (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node))) {
      if (getNodeJsDoc(node)) {
        knownTypeNames.add(node.name.text);
        exportedTypes.push(node);
      }
    }
  });

  // Tipos exportados con JSDoc, resueltos con el type checker para que los
  // tipos referenciados (p. ej. ComponentStateColor) se expandan. Los que no
  // tienen JSDoc son detalles internos y no se incluyen.
  const sharedTypes = {};
  exportedTypes.forEach((node) => {
    const declType = checker.getTypeAtLocation(node.name);
    sharedTypes[node.name.text] = {
      description: getNodeJsDoc(node),
      // expand=true: en la sección types los campos se expanden siempre,
      // aunque el tipo tenga alias (p. ej. CurrencyProps).
      ...resolveTypeInfo(declType, checker, node, 0, true, knownTypeNames),
    };
  });

  const context = { knownTypeNames, sharedTypes };
  fileContexts.set(sourceFile.fileName, context);
  return context;
}

/**
 * Tipos del proyecto (declarados en `src/`) que se nombran en las anotaciones
 * de los parámetros de un hook o en las restricciones de sus genéricos, aunque
 * no tengan JSDoc o se importen de otro archivo. Sin ellos, un parámetro como
 * `config: UseConfirmModalConfig` queda sin definición en `api.json`. Se
 * expanden por completo, como en `types`.
 */
function parameterTypes(node) {
  const types = {};
  const visit = (typeNode) => {
    if (ts.isTypeReferenceNode(typeNode)) {
      let symbol = checker.getSymbolAtLocation(typeNode.typeName);
      // eslint-disable-next-line no-bitwise
      if (symbol && symbol.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol);
      const decl = symbol?.declarations?.find(
        (d) => ts.isTypeAliasDeclaration(d) || ts.isInterfaceDeclaration(d),
      );
      const file = decl?.getSourceFile().fileName ?? '';
      if (decl && !types[symbol.name] && !/node_modules/.test(file) && file.startsWith(ROOT)) {
        types[symbol.name] = {
          description: getNodeJsDoc(decl),
          ...resolveTypeInfo(checker.getDeclaredTypeOfSymbol(symbol), checker, decl, 0, true),
        };
      }
    }
    ts.forEachChild(typeNode, visit);
  };
  (node.typeParameters ?? []).forEach((tp) => {
    if (tp.constraint) visit(tp.constraint);
    if (tp.default) visit(tp.default);
  });
  (node.parameters ?? []).forEach((param) => {
    if (param.type) visit(param.type);
  });
  return types;
}

/**
 * Construye la entrada de un hook a partir de su declaración:
 * { name, source, kind:'hook', description, requires, throws?, signature,
 *   parameters, returns, returnType, types }
 *
 * Para un hook reexportado desde una dependencia (`external`), `source` es el
 * nombre del paquete, `types` queda vacío y la descripción lo indica.
 */
function hookEntry({
  name: hookName, declaration: node, sourceFile, source, external,
}) {
  const { knownTypeNames, sharedTypes } = external
    ? { knownTypeNames: new Set(), sharedTypes: {} }
    : getFileContext(sourceFile);

  const doc = {
    source,
    kind: 'hook',
    description: '',
    requires: [],
    signature: '',
    parameters: [],
    returns: {},
    types: {},
  };

  const ownDescription = getNodeJsDoc(node);
  doc.description = external
    ? [`Re-exported unchanged from \`${source}\`; see its documentation.`, ownDescription]
      .filter(Boolean).join('\n\n')
    : ownDescription;
  doc.requires = getJsDocRequires(node);
  const hookThrows = getJsDocThrows(node);
  if (hookThrows) doc.throws = hookThrows;

  // Parámetros del hook. En los hooks genéricos la anotación puede referirse a
  // un parámetro de tipo (p. ej. T): se conserva como texto en vez de expandirla.
  // Sin anotación, el tipo sale del checker.
  doc.parameters = (node.parameters ?? []).map((param) => ({
    name: `${param.dotDotDotToken ? '...' : ''}${param.name.getText(sourceFile)
      .replace(/\s+/g, ' ')
      .replace(/,\s*}$/, ' }')}`,
    type: param.type
      ? typeNodeText(param.type, sourceFile)
      : checker.typeToString(checker.getTypeAtLocation(param)),
    required: !param.questionToken && !param.initializer && !param.dotDotDotToken,
    description: getNodeJsDoc(param),
  }));

  // JSDoc de las declaraciones `const x = useCallback(...)` del cuerpo.
  // TypeScript asocia esos comentarios a la declaración de la variable, no al
  // símbolo que se devuelve, así que se arma un mapa nombre de variable →
  // { descripción, descripciones de parámetros } para completar `returns`.
  const innerJsDoc = {};
  const innerParamDescriptions = {};
  if (node.body) {
    ts.forEachChild(node.body, (stmt) => {
      if (
        ts.isVariableStatement(stmt)
        && stmt.declarationList
        && stmt.declarationList.declarations.length
      ) {
        const decl = stmt.declarationList.declarations[0];
        if (decl.name && ts.isIdentifier(decl.name)) {
          const jsDoc = getNodeJsDoc(stmt);
          if (jsDoc) innerJsDoc[decl.name.text] = jsDoc;
          const paramMap = getJsDocParamDescriptions(stmt);
          if (Object.keys(paramMap).length) {
            innerParamDescriptions[decl.name.text] = paramMap;
          }
        }
      }
    });
  }

  // El tipo de retorno sale del type checker. En los hooks genéricos (p. ej.
  // useDPortalContext<T>()) el checker resuelve el retorno instanciado en la
  // declaración, lo que da los nombres de las propiedades aunque sus tipos
  // dependan de parámetros de tipo.
  const hookSymbol = checker.getSymbolAtLocation(node.name);
  const hookType = checker.getTypeOfSymbolAtLocation(hookSymbol, node);
  const [signature] = checker.getSignaturesOfType(hookType, ts.SignatureKind.Call);
  const returnType = checker.getReturnTypeOfSignature(signature);
  // Sin truncar y sin los `import("/ruta/absoluta")` que el checker antepone a
  // los tipos que no están en el ámbito del archivo.
  doc.returnType = checker.typeToString(returnType, node, ts.TypeFormatFlags.NoTruncation)
    .replace(/import\("[^"]*"\)\./g, '');

  if (hasObjectReturn(returnType, checker)) {
    checker.getPropertiesOfType(returnType).forEach((prop) => {
      const symbolDoc = ts.displayPartsToString(
        prop.getDocumentationComment(checker),
      ).trim();
      const propType = checker.getTypeOfSymbolAtLocation(prop, node);
      const propSigs = checker.getSignaturesOfType(propType, ts.SignatureKind.Call);
      const description = symbolDoc || innerJsDoc[prop.name] || '';

      if (propSigs.length > 0) {
        // Valor de retorno que es una función: se emite un descriptor invocable.
        doc.returns[prop.name] = {
          type: 'function',
          description,
          parameters: extractCallParams(prop, checker, node).map((p) => ({
            ...p,
            description:
              p.description
              || (innerParamDescriptions[prop.name] ?? {})[p.name]
              || '',
          })),
          returns: {
            type: extractReturnTypeString(prop, checker, node),
          },
        };
      } else {
        // Valor de retorno que no es invocable (dato): se emite su tipo.
        doc.returns[prop.name] = {
          description,
          ...resolveTypeInfo(propType, checker, node, 0, false, knownTypeNames),
        };
      }
    });
  }

  const typeParams = getTypeParamsStr(node);
  doc.name = hookName;
  doc.signature = buildSignature(
    `${hookName}${typeParams}`,
    doc.parameters,
    Object.keys(doc.returns),
    doc.returnType,
  );
  doc.types = { ...sharedTypes };
  return doc;
}

/**
 * Construye la entrada de un provider de contexto (función exportada que no
 * empieza por `use` y tiene JSDoc). Las props salen del tipo del primer
 * parámetro.
 * { name, source, kind:'component', description, requires, signature, props, types }
 */
function contextEntry(node, sourceFile, relPath) {
  const { knownTypeNames, sharedTypes } = getFileContext(sourceFile);
  const doc = {
    source: relPath,
    kind: 'component',
    description: '',
    requires: [],
    signature: '',
    props: {},
    types: {},
  };

  doc.description = getNodeJsDoc(node);
  doc.requires = getJsDocRequires(node);

  // Las props se leen del tipo resuelto del primer parámetro. En los
  // componentes genéricos (p. ej. DContextProvider<T>) el checker resuelve
  // Partial<Props<T>> en la declaración y enumera todas las props.
  if (node.parameters?.length > 0) {
    const firstParam = node.parameters[0];
    const paramType = checker.getTypeAtLocation(firstParam);
    checker.getPropertiesOfType(paramType).forEach((prop) => {
      const symbolDoc = ts.displayPartsToString(
        prop.getDocumentationComment(checker),
      ).trim();
      // getDocumentationComment no incluye las etiquetas: la deprecación se
      // antepone a la descripción, como hace react-docgen-typescript.
      const deprecated = getDeprecatedNote(prop, checker);
      const propType = checker.getTypeOfSymbolAtLocation(prop, node);
      // eslint-disable-next-line no-bitwise
      const isOptional = !!(Number(prop.flags) & Number(ts.SymbolFlags.Optional));
      doc.props[prop.name] = {
        description: [deprecated, symbolDoc].filter(Boolean).join('\n'),
        required: !isOptional,
        ...resolveTypeInfo(propType, checker, node, 0, false, knownTypeNames),
      };
    });
  }

  const funcName = node.name.getText(sourceFile);
  const typeParams = getTypeParamsStr(node);
  doc.name = funcName;
  const propList = Object.entries(doc.props)
    .filter(([, p]) => p.required)
    .map(([n]) => n)
    .concat(
      Object.entries(doc.props)
        .filter(([, p]) => !p.required)
        .map(([n]) => `${n}?`),
    )
    .join(', ');
  doc.signature = `${funcName}${typeParams}({ ${propList} }) => JSX.Element`;
  doc.types = { ...sharedTypes };
  return doc;
}

/** Providers de contexto documentados de un archivo. */
function extractContexts(relPath) {
  const sourceFile = program.getSourceFile(resolve(ROOT, relPath));
  if (!sourceFile) throw new Error(`no se pudo cargar ${relPath}`);
  const entries = [];
  ts.forEachChild(sourceFile, (node) => {
    // eslint-disable-next-line no-bitwise
    const isExported = (ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) !== 0;
    if (
      ts.isFunctionDeclaration(node) && isExported && node.name
      && !node.name.text.startsWith('use') && getNodeJsDoc(node)
    ) {
      entries.push(contextEntry(node, sourceFile, relPath));
    }
  });
  return entries;
}

// --- Ejecución ---
process.stdout.write('Generando registry/api.json...\n');
const hooksSection = {};
const contextsSection = {};
let failed = 0;

const publicHooks = listPublicHooks(program);
publicHooks.forEach((hook) => {
  try {
    hooksSection[hook.name] = hookEntry(hook);
    process.stdout.write(`  ok ${hook.name} [hook]\n`);
  } catch (err) {
    process.stderr.write(`  FALLO ${hook.name}: ${err.message}\n`);
    failed += 1;
  }
});

// Los tipos de los parámetros se resuelven después de todas las entradas: el
// checker ordena los miembros de una unión según el orden en que crea sus
// tipos, y resolverlos antes cambiaría el orden de `values` en otros hooks.
publicHooks.forEach(({ name, declaration, external }) => {
  if (external || !hooksSection[name]) return;
  hooksSection[name].types = { ...parameterTypes(declaration), ...hooksSection[name].types };
});

CONTEXT_FILES.forEach((relPath) => {
  try {
    extractContexts(relPath).forEach((doc) => {
      contextsSection[doc.name] = doc;
      process.stdout.write(`  ok ${doc.name} [${doc.kind}]\n`);
    });
  } catch (err) {
    process.stderr.write(`  FALLO ${basename(relPath)}: ${err.message}\n`);
    failed += 1;
  }
});

// --- Props de los componentes, leídas del código TypeScript ---
const COMPONENTS_DIR = resolve(ROOT, 'src/components');
const componentFiles = readdirSync(COMPONENTS_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name.startsWith('D'))
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((entry) => {
    const mainFile = resolve(COMPONENTS_DIR, entry.name, `${entry.name}.tsx`);
    return existsSync(mainFile) ? mainFile : null;
  })
  .filter(Boolean);

const propsParser = docgen.withCustomConfig(TSCONFIG_PATH, {
  shouldExtractLiteralValuesFromEnum: true,
  propFilter: (prop) => {
    if (prop.parent) return !/node_modules/.test(prop.parent.fileName);
    return true;
  },
});

const componentsSection = {};
let componentsFailed = 0;

function componentEntry(doc, filePath) {
  return {
    description: doc.description ?? '',
    sourcePath: relative(ROOT, filePath),
    props: Object.fromEntries(
      Object.entries(doc.props).map(([name, prop]) => [
        name,
        {
          type: prop.type?.name === 'enum' && Array.isArray(prop.type?.value)
            ? prop.type.value.map((v) => v.value).join(' | ')
            : prop.type?.name ?? 'unknown',
          required: prop.required,
          defaultValue: prop.defaultValue?.value ?? null,
          description: prop.description ?? '',
        },
      ]),
    ),
  };
}

/**
 * Subcomponentes que se adjuntan con `export default Object.assign(DX, { Key: Ident })`,
 * resueltos al archivo de su import por defecto.
 */
function subcomponentFiles(filePath) {
  const source = readFileSync(filePath, 'utf8');
  const assigned = source.match(/export default Object\.assign\(\s*\w+\s*,\s*\{([^}]*)\}/);
  if (!assigned) return [];
  return [...assigned[1].matchAll(/(\w+)\s*:\s*(\w+)/g)].map(([, key, ident]) => {
    const from = source.match(new RegExp(`import\\s+${ident}\\s+from\\s+'([^']+)'`))?.[1];
    return { key, ident, file: from && resolve(dirname(filePath), `${from}.tsx`) };
  });
}

for (const filePath of componentFiles) {
  try {
    const docs = propsParser.parse(filePath);
    const parent = basename(filePath, '.tsx');
    for (const doc of docs) {
      if (!doc.displayName) continue;
      componentsSection[doc.displayName] = componentEntry(doc, filePath);
    }
    for (const { key, ident, file } of subcomponentFiles(filePath)) {
      if (!file || !existsSync(file)) throw new Error(`no se puede resolver ${parent}.${key} (${ident})`);
      const subDocs = propsParser.parse(file);
      const doc = subDocs.find((d) => d.displayName === ident) ?? subDocs[0];
      if (!doc) throw new Error(`no hay componente para ${parent}.${key} en ${relative(ROOT, file)}`);
      componentsSection[ident] = {
        ...componentEntry(doc, file),
        parent,
        accessor: `${parent}.${key}`,
      };
    }
  } catch (err) {
    process.stderr.write(`  ⚠️  Falló: ${basename(filePath, '.tsx')} — ${err instanceof Error ? err.message : String(err)}\n`);
    componentsFailed++;
  }
}

process.stdout.write(`  Componentes: ${Object.keys(componentsSection).length} parseados (${componentsFailed} con fallo)\n`);

const { version: packageVersion, repository } = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));
const repoBase = repository?.url?.replace(/^git\+/, '').replace(/\.git$/, '') ?? null;
const releaseTag = process.env.RELEASE_TAG ?? null;
const repositoryUrl = (repoBase && releaseTag)
  ? `${repoBase}/releases/tag/${releaseTag}`
  : repoBase;

const CDN_BASE_URL = (process.env.CDN_BASE_URL ?? 'https://cdn.dynamicframework.dev/assets').replace(/\/$/, '');

const apiOutput = {
  $schema: `${CDN_BASE_URL}/schema/v1.json`,
  schemaVersion: '1.1.0',
  packageVersion,
  repository: repositoryUrl,
  generatedAt: process.env.RELEASE_PUBLISHED_AT ?? new Date().toISOString(),
  components: componentsSection,
  hooks: hooksSection,
  contexts: contextsSection,
};

const OUTPUT_PATH = resolve(OUTPUT_DIR, 'api.json');
const output = JSON.stringify(apiOutput, null, 2);
writeFileSync(OUTPUT_PATH, output);

const sizeKB = (Buffer.byteLength(output) / 1024).toFixed(1);
process.stdout.write('\nGenerado registry/api.json\n');
process.stdout.write(`  Hooks: ${Object.keys(hooksSection).length} documentados, ${failed} con fallo\n`);
process.stdout.write(`  Contextos: ${Object.keys(contextsSection).length} documentados\n`);
process.stdout.write(`  Componentes: ${Object.keys(componentsSection).length} incluidos\n`);
process.stdout.write(`  Tamaño: ${sizeKB} KB\n`);

if (failed > 0 || componentsFailed > 0) {
  process.stderr.write(`\n${failed} hooks o contextos con fallo, ${componentsFailed} componentes con fallo\n`);
  process.exit(1);
}
