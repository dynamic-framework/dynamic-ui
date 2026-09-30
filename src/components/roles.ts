/**
 * Role resolution for 3.x components.
 *
 * Every component with a colour axis renders `data-color="<role>"`, and the
 * generated variant matrices in `dist/css/dynamic.css` key off exactly these
 * eight names. This module is the single place a prop value becomes one.
 *
 * ## Why `light` and `dark` are gone
 *
 * 2.x inherited Bootstrap's eight theme colours, two of which were `light` and
 * `dark`. Those names describe an appearance, not a role — and in a system with
 * a dark mode, a "light button" is meaningless: on a dark canvas it is the dark
 * one that reads as light. So the semantic layer renames them to `neutral` and
 * `inverse`, which say what they are for.
 *
 * The prop names are kept working. `color="light"` still renders, resolving to
 * `neutral`, and logs a deprecation once per name in development. That is the
 * whole migration for a consumer: nothing, until they choose to rename.
 */

/** The eight roles the semantic token layer defines. */
export const DF_ROLES = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'neutral',
  'inverse',
] as const;

export type DfRole = typeof DF_ROLES[number];

/** 2.x names that 3.x renamed, and what they became. */
export const RENAMED_ROLES = {
  light: 'neutral',
  dark: 'inverse',
} as const satisfies Record<string, DfRole>;

export type DeprecatedRole = keyof typeof RENAMED_ROLES;

const ROLE_SET: ReadonlySet<string> = new Set(DF_ROLES);

// Warn once per distinct name rather than once per render — a list of fifty
// chips must not produce fifty identical console lines.
const warned = new Set<string>();

function deprecate(from: string, to: DfRole): void {
  if (process.env.NODE_ENV === 'production') return;
  if (warned.has(from)) return;
  warned.add(from);
  // eslint-disable-next-line no-console
  console.warn(
    `[dynamic-ui] color="${from}" was renamed to "${to}" in 3.0 and still works, `
    + 'but will be removed in 4.0. A role describes what a colour is for, and '
    + '"light" stops meaning anything once a dark mode exists.',
  );
}

/**
 * Turns a `color` prop into the role the stylesheet knows about.
 *
 * An unknown value is passed through untouched rather than coerced: a client
 * may have added a ninth role to their own token overrides, and silently
 * rewriting it to `primary` would be worse than rendering a `data-color` no
 * rule matches — which is at least visible.
 */
export function resolveRole(
  color: string | undefined,
  fallback: DfRole = 'primary',
): string {
  if (!color) return fallback;
  if (ROLE_SET.has(color)) return color;

  const renamed = (RENAMED_ROLES as Record<string, DfRole>)[color];
  if (renamed) {
    deprecate(color, renamed);
    return renamed;
  }
  return color;
}

/** True when the value is one of the eight roles the shipped CSS covers. */
export const isDfRole = (value: string): value is DfRole => ROLE_SET.has(value);
