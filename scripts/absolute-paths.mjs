/**
 * absolute-paths.mjs
 *
 * Localiza en un JSON publicado (api.json, manifests/*.json) las cadenas con
 * una ruta absoluta de la máquina que lo construye: `/Users/…` en local,
 * `/home/runner/…` en CI, `C:\…` en Windows, o el `import("/…")` con que el
 * type checker califica los tipos que no están en el ámbito del archivo.
 *
 * Los directorios se reconocen solo al principio de una ruta: en una URL
 * (`https://example.com/home/`) o en una ruta relativa (`src/home/`) van
 * precedidos de otro carácter y no cuentan. La letra de unidad tampoco cuenta
 * detrás de otra letra (`https://`).
 */

const ABSOLUTE_PATH = new RegExp([
  '(?<![\\w.:/~-])/(?:Users|home|private|tmp|var|root|opt|mnt|Volumes)/',
  '(?<![A-Za-z])[A-Za-z]:[\\\\/]',
  'import\\("/',
  'file://',
].join('|'));

/** Si `text` contiene una ruta absoluta de la máquina de build. */
export function hasAbsolutePath(text) {
  return ABSOLUTE_PATH.test(text);
}

/**
 * Rutas JSON (`$.a.b`) de las claves y valores de tipo cadena que contienen
 * una ruta absoluta, con el texto encontrado.
 * @returns {{ path: string, value: string }[]}
 */
export function findAbsolutePaths(value, prefix = '$') {
  if (typeof value === 'string') {
    return hasAbsolutePath(value) ? [{ path: prefix, value }] : [];
  }
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, nested]) => {
    const keyPath = Array.isArray(value) ? `${prefix}[${key}]` : `${prefix}.${key}`;
    const inKey = hasAbsolutePath(key) ? [{ path: keyPath, value: key }] : [];
    return [...inKey, ...findAbsolutePaths(nested, keyPath)];
  });
}
