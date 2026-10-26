import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useMemo, createElement } from 'react';
import * as LucideIcons from 'lucide-react';
import { isValidElementType } from 'react-is';
import { PREFIX_BS } from '../config.js';
import resolveIconFromRegistry from './resolveIconFromRegistry.js';
import warnUnknownIcon from './warnUnknownIcon.js';
import { useResponsiveProp } from '../../hooks/useResponsiveProp.js';
import { useDContext } from '../../contexts/DContext.js';

function isIconComponent(value) {
    return typeof value !== 'string' && isValidElementType(value);
}
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
function DIconBase({ icon: iconProp, color, style, className, size, useListenerSize = false, hasCircle = false, materialStyle = false, familyClass, familyPrefix, strokeWidth = 2, ariaHidden, ariaLabel, dataAttributes, }) {
    const { iconRegistry } = useDContext();
    // The registry wins over every other source, including Material icons.
    const icon = resolveIconFromRegistry(iconProp, iconRegistry);
    // If materialStyle is true, use Material Design icons (legacy)
    const isStringIcon = typeof icon === 'string';
    const useMaterialIcons = materialStyle && isStringIcon;
    // Get Lucide icon component
    const LucideIcon = useMemo(() => {
        if (!isStringIcon || useMaterialIcons)
            return null;
        // Try to find the icon in Lucide (expects PascalCase)
        const icons = LucideIcons;
        return icons[icon] || null;
    }, [icon, isStringIcon, useMaterialIcons]);
    const { responsivePropValue } = useResponsiveProp(useListenerSize);
    const resolvedSize = useMemo(() => {
        if (!size)
            return undefined;
        if (typeof size === 'string')
            return size;
        return responsivePropValue(size);
    }, [responsivePropValue, size]);
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign(Object.assign({}, resolvedSize && { [`--${PREFIX_BS}icon-component-size`]: resolvedSize }), hasCircle && { [`--${PREFIX_BS}icon-component-padding`]: `calc(var(--${PREFIX_BS}icon-component-size, 24px) * 0.4)` }), style)), [resolvedSize, hasCircle, style]);
    const generateClasses = useMemo(() => (Object.assign(Object.assign(Object.assign({ 'd-icon': true }, className && { [className]: true }), { 'd-icon-has-circle': hasCircle }), color && { [`d-icon-color-${color}`]: true })), [className, hasCircle, color]);
    /**
     * Decorative by default. `ariaHidden` and `ariaLabel` are not symmetric:
     * hiding is absolute, so `ariaHidden` wins over a name, but `ariaHidden={false}`
     * and `ariaLabel` agree — both expose the icon — and the name is honoured.
     */
    const accessibilityProps = useMemo(() => {
        // Hiding is absolute: it wins over a name.
        if (ariaHidden === true)
            return { 'aria-hidden': true };
        // A name exposes the icon, which is also what `ariaHidden={false}` asks for.
        if (ariaLabel)
            return { role: 'img', 'aria-label': ariaLabel };
        // Exposed with no name: an explicit opt-out of the default, warned about below.
        if (ariaHidden === false)
            return {};
        return { 'aria-hidden': true };
    }, [ariaHidden, ariaLabel]);
    /**
     * `dataAttributes` is typed to `data-*`, but casting through it was the only
     * way to reach the DOM before `ariaHidden` existed, so it still wins over the
     * computed values — and therefore decides the effective state below.
     */
    const domAttributes = useMemo(() => (Object.assign(Object.assign({}, accessibilityProps), dataAttributes)), [accessibilityProps, dataAttributes]);
    /**
     * lucide-react hides its own `<svg>` unless it receives an a11y prop, and a
     * registry component may do the same, which would keep the graphic out of the
     * tree even when this wrapper is not hidden. Only matters when the icon is
     * exposed without a name: under `role="img"` the wrapper is a leaf, so a
     * hidden child changes nothing.
     *
     * A registry component that hardcodes `aria-hidden` on its own `<svg>` instead
     * of spreading props still wins — nothing here can reach inside it.
     */
    const isExposedWithoutName = useMemo(() => {
        const attributes = domAttributes;
        const hidden = attributes['aria-hidden'];
        return hidden !== true && hidden !== 'true' && !attributes.role;
    }, [domAttributes]);
    /**
     * Diagnostics read the effective state, so a `dataAttributes` override that
     * hides the icon after all is not reported as exposing it. Memoised like the
     * values above, so re-rendering with the same props does not repeat them.
     */
    useMemo(() => {
        if (process.env.NODE_ENV === 'production')
            return;
        if (ariaHidden === true && ariaLabel) {
            // eslint-disable-next-line no-console
            console.warn(`DIcon: ariaLabel "${ariaLabel}" is ignored because ariaHidden is true. Drop ariaHidden to expose the name.`);
        }
        if (ariaHidden === false && isExposedWithoutName) {
            // eslint-disable-next-line no-console
            console.warn('DIcon: ariaHidden={false} without an ariaLabel exposes an unnamed graphic to assistive technology. Pass ariaLabel to name it.');
        }
    }, [ariaHidden, ariaLabel, isExposedWithoutName]);
    const iconSize = useMemo(() => {
        if (resolvedSize) {
            const numSize = parseInt(resolvedSize, 10);
            return !Number.isNaN(numSize) ? numSize : resolvedSize;
        }
        return undefined;
    }, [resolvedSize]);
    // Render Material Design icon (legacy support)
    if (useMaterialIcons) {
        return (jsx("i", Object.assign({ className: classNames(generateClasses, familyClass), style: generateStyleVariables }, domAttributes, { children: isStringIcon ? icon : null })));
    }
    if (isIconComponent(icon)) {
        return (jsx("span", Object.assign({ className: classNames(generateClasses), style: generateStyleVariables }, domAttributes, { children: createElement(icon, Object.assign({ width: resolvedSize || 24, height: resolvedSize || 24, strokeWidth }, isExposedWithoutName && { 'aria-hidden': false })) })));
    }
    // Render Lucide icon
    if (!LucideIcon) {
        if (typeof icon === 'string' && familyClass && familyPrefix) {
            if (process.env.NODE_ENV !== 'production') {
                warnUnknownIcon(icon, familyClass, familyPrefix);
            }
            return (jsx("i", Object.assign({ className: classNames(generateClasses, familyClass, `${familyPrefix}${icon}`), style: generateStyleVariables }, domAttributes)));
        }
        // eslint-disable-next-line no-console
        console.warn(`Icon "${String(icon)}" not found in Lucide. Make sure to use PascalCase names (e.g., "Home", "User", "Settings")`);
        return (jsx("span", Object.assign({ className: classNames(generateClasses), style: generateStyleVariables }, domAttributes, { children: "?" })));
    }
    return (jsx("span", Object.assign({ className: classNames(generateClasses), style: generateStyleVariables }, domAttributes, { children: jsx(LucideIcon, Object.assign({ size: iconSize || 24, strokeWidth: strokeWidth }, isExposedWithoutName && { 'aria-hidden': false })) })));
}

export { DIconBase as default };
//# sourceMappingURL=DIconBase.js.map
