/**
 * Resolves a string icon name against the registry supplied through
 * `DContextProvider`'s `iconRegistry` prop.
 *
 * This is the single implementation shared by `DIcon` and `DIconBase`, so both
 * public entry points — and every Dynamic UI component that renders an icon
 * through them — resolve names identically.
 *
 * A non-string `icon` is returned untouched: a component passed directly needs
 * no lookup. A name missing from the registry is also returned untouched, so
 * the caller can fall through to lucide-react and then to the icon-font family.
 */
function resolveIconFromRegistry(icon, iconRegistry) {
    if (typeof icon !== 'string')
        return icon;
    return (iconRegistry === null || iconRegistry === void 0 ? void 0 : iconRegistry[icon]) || icon;
}

export { resolveIconFromRegistry as default };
//# sourceMappingURL=resolveIconFromRegistry.js.map
