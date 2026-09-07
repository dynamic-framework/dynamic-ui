/**
 * Characters the URL parser drops before resolving a URL, so they cannot be used to hide a
 * scheme-relative prefix (e.g. `/<TAB>/evil.com`).
 */
const IGNORED_CHARS = /[\t\n\r]/g;

/**
 * Leading separators. Browsers treat a leading `\` exactly like a leading `/`, so both have
 * to be stripped to prevent scheme-relative URLs (`//evil.com`, `/\evil.com`, `\\evil.com`).
 */
const LEADING_SEPARATORS = /^[/\\]+/;

/**
 * Builds an internal URL from a `path` and a set of query `params`, normalizing leading
 * separators to prevent scheme-relative URLs (e.g. `//accounts` and `/\accounts` both become
 * `/accounts`).
 *
 * The `path` is trimmed and every tab, line feed and carriage return is removed before
 * building the result, because the URL parser ignores those characters too and they would
 * otherwise hide a scheme-relative prefix (`/<TAB>/evil.com` resolves to `//evil.com`).
 *
 * Handles the special case where `path` is the literal string `'#'`, which happens when
 * a Liquid template variable used as a link target is left unconfigured; in that case the
 * params are ignored and `'#'` is returned as-is instead of building a broken URL.
 *
 * @param path - The path to build the URL from. Leading separators are stripped before
 * building the result (`/accounts`, `//accounts` and `\accounts` are all treated as `accounts`).
 * @param params - Key/value pairs serialized as the query string.
 * @returns The resulting URL:
 * - `'#'` when `path` normalizes to `'#'` (`'#'`, `'/#'`), ignoring the params.
 * - `'/'` when `path` is empty and there are no params.
 * - `'/?<query>'` when `path` is empty and there are params.
 * - `'<path>'` or `'<path>?<query>'` when `path` starts with `#`, since a fragment must not be
 *   prefixed with `/` (it would navigate away from the current document).
 * - `'/<path>'` or `'/<path>?<query>'` otherwise.
 *
 * @example
 * buildUrl('accounts', { account_id: '42' }); // '/accounts?account_id=42'
 * buildUrl('//accounts', {}); // '/accounts'
 * buildUrl('#', { account_id: '42' }); // '#'
 * buildUrl('#accounts', { account_id: '42' }); // '#accounts?account_id=42'
 * buildUrl('', { tab: 'movimientos' }); // '/?tab=movimientos'
 */
export default function buildUrl(
  path: string,
  params: Record<string, string | number>,
): string {
  const normalizedPath = path
    .trim()
    .replace(IGNORED_CHARS, '')
    .replace(LEADING_SEPARATORS, '');
  if (normalizedPath === '#') return '#';
  const query = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)]),
  ).toString();
  if (normalizedPath === '') return query ? `/?${query}` : '/';
  const prefix = normalizedPath.startsWith('#') ? '' : '/';
  return `${prefix}${normalizedPath}${query ? `?${query}` : ''}`;
}
