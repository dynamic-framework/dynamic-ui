import { DEFAULT_ICON_FAMILY_CLASS, DEFAULT_ICON_FAMILY_PREFIX } from '../config';

/**
 * Names already reported, so a name repeated across renders or across many
 * instances only warns once per page load.
 */
const warnedIconNames = new Set<string>();

/**
 * True when the icon-font family is the one `DContextProvider` defaults to,
 * i.e. the consumer never configured an icon font. A consumer who did configure
 * one (Material Symbols, Bootstrap Icons) is using the family branch on
 * purpose and must not be warned.
 */
function isDefaultIconFamily(familyClass: string, familyPrefix: string): boolean {
  return familyClass === DEFAULT_ICON_FAMILY_CLASS
    && familyPrefix === DEFAULT_ICON_FAMILY_PREFIX;
}

/**
 * Warns, once per name and only outside production builds, that an icon name
 * resolved to neither the registry nor lucide-react and is about to fall back
 * to an icon font the package no longer ships.
 *
 * The `process.env.NODE_ENV` guard is what bundlers constant-fold, so the whole
 * call — and this module — drops out of a consumer's production bundle.
 */
export default function warnUnknownIcon(
  name: string,
  familyClass: string,
  familyPrefix: string,
): void {
  if (!isDefaultIconFamily(familyClass, familyPrefix)) return;
  if (warnedIconNames.has(name)) return;

  warnedIconNames.add(name);

  // eslint-disable-next-line no-console
  console.warn(
    `[Dynamic UI] Icon "${name}" was not found in the icon registry nor in lucide-react, `
    + `so it falls back to the "${DEFAULT_ICON_FAMILY_CLASS}" icon font, which this package `
    + 'has not shipped since v2.0.0 — nothing will be rendered. '
    + 'Use a PascalCase lucide-react name (for example "Home"), or register the icon with '
    + '<DContextProvider iconRegistry={{ MyIcon }}>. '
    + 'If you do use an icon font, configure it via <DContextProvider icon={{ familyClass, familyPrefix }}> '
    + 'and this warning will stop.',
  );
}
