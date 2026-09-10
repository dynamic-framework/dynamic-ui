/// <reference types="react" />
import type { BaseProps, ComponentColor, IconValue } from '../interface';
import { ResponsiveProp } from '../../hooks/useResponsiveProp';
type Props = BaseProps & {
    icon: IconValue;
    color?: ComponentColor;
    size?: string | ResponsiveProp;
    /**
     * Enables real-time breakpoint listeners for responsive size changes.
     * When set to true, the component will listen for size changes and update responsively.
     * Note: Enabling this feature may have performance implications, especially
     * in complex or frequently updated components.
     */
    useListenerSize?: boolean;
    hasCircle?: boolean;
    materialStyle?: boolean;
    familyClass?: string;
    familyPrefix?: string;
    strokeWidth?: number;
    /**
     * Hides the icon from the accessibility tree. Defaults to `true`, because
     * an icon is almost always decorative: it sits next to a visible label, or
     * inside a control that already carries its own accessible name.
     *
     * Pass `ariaLabel` instead when the icon itself is the only carrier of
     * meaning. `ariaHidden` wins over `ariaLabel`, since hiding is absolute;
     * `ariaHidden={false}` alongside an `ariaLabel` is not a conflict, as both
     * expose the icon and the name is kept. Setting `ariaHidden={false}` on its
     * own exposes an unnamed graphic and warns outside production builds.
     *
     * It is forwarded to the icon so a hidden `<svg>` follows the wrapper, but a
     * registry component that hardcodes its own `aria-hidden` rather than
     * spreading the props it receives stays hidden regardless.
     */
    ariaHidden?: boolean;
    /**
     * Accessible name for an icon that carries meaning on its own. Renders
     * `role="img"` alongside it and drops the default `aria-hidden`.
     */
    ariaLabel?: string;
};
export type DIconBaseProps = Props;
/**
 * Renders an icon, resolving the `icon` prop in this order:
 *
 * 1. **Icon registry** — a string name found in `DContextProvider`'s
 *    `iconRegistry` renders the component registered under it. A component
 *    passed directly skips this step and renders as-is.
 * 2. **lucide-react** — a PascalCase name exported by lucide-react renders that
 *    icon. When `materialStyle` is on, this step is skipped and the name is
 *    emitted as the text content of the icon-font element instead.
 * 3. **Icon-font family** — anything left over renders as
 *    `<i class="{familyClass} {familyPrefix}{name}">`, the legacy path for
 *    Material Symbols and Bootstrap Icons. Outside production builds, a name
 *    that reaches this step while the family is still the package default logs
 *    a one-time warning.
 *
 * A name that resolves nowhere and has no family configured renders `?`.
 *
 * Every path is hidden from the accessibility tree by default (`aria-hidden`),
 * since icons are overwhelmingly decorative. See `ariaHidden` / `ariaLabel` to
 * override that for an icon that carries meaning on its own.
 */
export default function DIconBase({ icon: iconProp, color, style, className, size, useListenerSize, hasCircle, materialStyle, familyClass, familyPrefix, strokeWidth, ariaHidden, ariaLabel, dataAttributes, }: Props): import("react").JSX.Element;
export {};
