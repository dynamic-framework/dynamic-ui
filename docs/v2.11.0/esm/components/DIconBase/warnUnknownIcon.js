import { DEFAULT_ICON_FAMILY_CLASS, DEFAULT_ICON_FAMILY_PREFIX } from '../config.js';

/**
 * Names already reported, so a name repeated across renders or across many
 * instances only warns once per page load.
 */
const warnedIconNames = new Set();
/**
 * True when the icon-font family is the one `DContextProvider` defaults to.
 *
 * The warning is limited to that case so a consumer who configured a different
 * font — Material Symbols, for instance — is not told about names that font
 * resolves perfectly well.
 *
 * It cannot tell "never configured a font" apart from "configured exactly the
 * defaults", and those defaults are also the standard Bootstrap Icons setup, so
 * a consumer who deliberately uses Bootstrap Icons is warned too. The message
 * says so; silencing that case would need a new context flag, which is beyond
 * what this helper should decide.
 */
function isDefaultIconFamily(familyClass, familyPrefix) {
    return familyClass === DEFAULT_ICON_FAMILY_CLASS
        && familyPrefix === DEFAULT_ICON_FAMILY_PREFIX;
}
/**
 * Warns, once per name and only outside production builds, that an icon name
 * resolved to neither the registry nor lucide-react and is falling back to the
 * default icon font, which this package no longer ships.
 *
 * Whether that fallback renders depends on the host app: if it loads the font
 * itself the `<i>` shows the glyph, and if it does not, nothing appears. The
 * message states both possibilities instead of assuming the second.
 *
 * The `process.env.NODE_ENV` guard is what bundlers constant-fold, so the whole
 * call — and this module — drops out of a consumer's production bundle.
 */
function warnUnknownIcon(name, familyClass, familyPrefix) {
    if (!isDefaultIconFamily(familyClass, familyPrefix))
        return;
    if (warnedIconNames.has(name))
        return;
    warnedIconNames.add(name);
    const fallbackClass = `${DEFAULT_ICON_FAMILY_CLASS} ${DEFAULT_ICON_FAMILY_PREFIX}${name}`;
    // eslint-disable-next-line no-console
    console.warn(`[Dynamic UI] Icon "${name}" is not in the icon registry and is not a `
        + 'lucide-react export, so it falls back to the default icon font: '
        + `<i class="${fallbackClass}">. That renders only if your app loads that `
        + 'font, which this package stopped shipping in v2.0.0. '
        + 'If the icon is missing, pass a PascalCase lucide-react name such as '
        + '"Home", or register the component with '
        + '<DContextProvider iconRegistry={{ MyIcon }}>. '
        + `If you use the "${DEFAULT_ICON_FAMILY_CLASS}" font on purpose, this is a `
        + 'false positive: the warning fires whenever the configured family equals '
        + 'the package default, which is also the standard Bootstrap Icons setup. '
        + 'It never appears in production builds.');
}

export { warnUnknownIcon as default };
//# sourceMappingURL=warnUnknownIcon.js.map
