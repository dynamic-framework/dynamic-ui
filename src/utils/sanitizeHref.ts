const SAFE_SCHEMES = new Set(['http:', 'https:', 'mailto:', 'tel:']);

/**
 * Characters the URL parser drops before resolving a URL, so they cannot be used to hide a
 * scheme-relative prefix or a dangerous scheme (e.g. `/<TAB>/evil.com`, `java<TAB>script:`).
 */
const IGNORED_CHARS = /[\t\n\r]/g;

/**
 * Two leading separators in any combination. Browsers treat a leading `\` exactly like a
 * leading `/`, so `//`, `/\`, `\/` and `\\` all resolve to a scheme-relative URL.
 */
const SCHEME_RELATIVE = /^[/\\]{2}/;

const LEADING_SEPARATOR = /^[/\\]/;

/**
 * Validates a `href` value and returns it only if it is safe to render as a link,
 * preventing XSS through unsafe URL schemes and scheme-relative URLs.
 *
 * Before validating, the value is trimmed and every tab, line feed and carriage return is
 * removed, because the URL parser ignores those characters too and they would otherwise
 * hide an unsafe value from the checks below.
 *
 * A `href` is considered safe when it is either:
 * - An absolute path starting with a single separator (e.g. `/accounts/42`). A leading `\`
 *   is normalized to `/` in the returned value, since that is how the browser resolves it.
 * - A URL using one of the allowed schemes: `http:`, `https:`, `mailto:`, `tel:`.
 *
 * A `href` is rejected (returns `undefined`) when it is:
 * - Empty or made only of whitespace/ignored characters (`''`, `'   '`).
 * - Scheme-relative (starts with two separators, e.g. `//evil.com`, `/\evil.com`,
 *   `/<TAB>/evil.com`), since the browser would resolve it using the current protocol and it
 *   can be used to redirect to an attacker-controlled host.
 * - Using a disallowed/dangerous scheme, such as `javascript:` or `data:`
 *   (e.g. `javascript:alert(1)`, `data:text/html,<script>...</script>`).
 * - Not parseable as an absolute URL and not an absolute path, such as bare fragments
 *   (`#anchor`) or scheme-less relative paths (`relative/path`). These cannot be validated
 *   against `SAFE_SCHEMES`, so they are rejected rather than assumed safe.
 *
 * @param href - The raw URL or path to validate, typically coming from user input,
 * a CMS, or an external API.
 * @returns The sanitized `href` when safe, `undefined` otherwise.
 *
 * @example
 * sanitizeHref('/accounts/42'); // '/accounts/42'
 * sanitizeHref('https://example.com'); // 'https://example.com'
 * sanitizeHref('mailto:test@example.com'); // 'mailto:test@example.com'
 * sanitizeHref('//evil.com'); // undefined
 * sanitizeHref('/\\evil.com'); // undefined
 * sanitizeHref('javascript:alert(1)'); // undefined
 */
export default function sanitizeHref(href: string): string | undefined {
  const normalized = href.trim().replace(IGNORED_CHARS, '');
  if (!normalized) return undefined;
  if (SCHEME_RELATIVE.test(normalized)) return undefined;
  if (LEADING_SEPARATOR.test(normalized)) return `/${normalized.slice(1)}`;
  try {
    const { protocol } = new URL(normalized);
    return SAFE_SCHEMES.has(protocol) ? normalized : undefined;
  } catch {
    return undefined;
  }
}
