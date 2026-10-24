/**
 * type-info.mjs
 *
 * Convierte un tipo de TypeScript en el descriptor serializable que usa
 * api.json en las secciones `types` y en `returns`. Lo comparten
 * `generate-api.mjs` (hooks y contextos) y `component-docgen.mjs`
 * (definiciones de los alias de tipo de los componentes).
 */

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const ts = require('typescript');

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
 * @param {(type: object) => boolean} [canExpand] Si devuelve false para un
 *   objeto, se emite su nombre en vez de sus campos. Las definiciones de los
 *   componentes lo usan para no expandir tipos de librerías (CSSProperties);
 *   por defecto se expande todo, como en hooks y contextos.
 */
export function resolveTypeInfo(
  type,
  checker,
  locationNode,
  depth = 0,
  expand = false,
  knownTypeNames = new Set(),
  canExpand = () => true,
) {
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
      const [single] = nonUndefined;
      return resolveTypeInfo(
        single,
        checker,
        locationNode,
        depth,
        expand,
        knownTypeNames,
        canExpand,
      );
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
  if (!canExpand(type)) return { type: checker.typeToString(type) };
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
        ...resolveTypeInfo(
          propType,
          checker,
          locationNode,
          depth + 1,
          false,
          knownTypeNames,
          canExpand,
        ),
        required: !isOptional,
        ...(desc ? { description: desc } : {}),
      };
    });
    return { type: 'object', fields };
  }

  return { type: checker.typeToString(type) };
}
