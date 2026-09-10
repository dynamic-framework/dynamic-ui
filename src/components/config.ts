export const PREFIX_BS = 'bs-';

/**
 * Default icon-font family configured by `DContextProvider`.
 *
 * `DIconBase` compares the family it receives against these values to tell an
 * unconfigured consumer apart from one that deliberately opted into an icon
 * font (Material Symbols, Bootstrap Icons). Only the former gets the
 * development warning for an unresolved icon name.
 */
export const DEFAULT_ICON_FAMILY_CLASS = 'bi';
export const DEFAULT_ICON_FAMILY_PREFIX = 'bi-';
