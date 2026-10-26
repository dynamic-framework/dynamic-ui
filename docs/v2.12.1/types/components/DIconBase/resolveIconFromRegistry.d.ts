import type { IconComponent, IconValue } from '../interface';
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
export default function resolveIconFromRegistry(icon: IconValue, iconRegistry?: Record<string, IconComponent>): IconValue;
