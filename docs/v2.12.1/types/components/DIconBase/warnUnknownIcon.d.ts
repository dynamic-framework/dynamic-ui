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
export default function warnUnknownIcon(name: string, familyClass: string, familyPrefix: string): void;
