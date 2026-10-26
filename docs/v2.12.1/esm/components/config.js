const PREFIX_BS = 'bs-';
/**
 * Default icon-font family configured by `DContextProvider`.
 *
 * `DIconBase` compares the family it receives against these values to tell an
 * unconfigured consumer apart from one that deliberately opted into an icon
 * font (Material Symbols, Bootstrap Icons). Only the former gets the
 * development warning for an unresolved icon name.
 */
const DEFAULT_ICON_FAMILY_CLASS = 'bi';
const DEFAULT_ICON_FAMILY_PREFIX = 'bi-';

export { DEFAULT_ICON_FAMILY_CLASS, DEFAULT_ICON_FAMILY_PREFIX, PREFIX_BS };
//# sourceMappingURL=config.js.map
