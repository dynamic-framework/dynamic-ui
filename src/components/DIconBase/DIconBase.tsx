/* eslint-disable max-len */
import classNames from 'classnames';
import { createElement, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import { isValidElementType } from 'react-is';
import type { CSSProperties, ComponentType } from 'react';
import { PREFIX_BS } from '../config';
import { useDContext } from '../../contexts';
import resolveIconFromRegistry from './resolveIconFromRegistry';
import warnUnknownIcon from './warnUnknownIcon';

import type {
  BaseProps,
  ClassMap,
  ComponentColor,
  CustomStyles,
  IconComponent,
  IconValue,
} from '../interface';
import { ResponsiveProp, useResponsiveProp } from '../../hooks/useResponsiveProp';

type IconAccessibilityProps = {
  role?: 'img';
  'aria-label'?: string;
  'aria-hidden'?: true;
};

function isIconComponent(value: unknown): value is IconComponent {
  return typeof value !== 'string' && isValidElementType(value);
}

type Props =
  & BaseProps
  & {
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
export default function DIconBase(
  {
    icon: iconProp,
    color,
    style,
    className,
    size,
    useListenerSize = false,
    hasCircle = false,
    materialStyle = false,
    familyClass,
    familyPrefix,
    strokeWidth = 2,
    ariaHidden,
    ariaLabel,
    dataAttributes,
  }: Props,
) {
  const { iconRegistry } = useDContext();

  // The registry wins over every other source, including Material icons.
  const icon = resolveIconFromRegistry(iconProp, iconRegistry);

  // If materialStyle is true, use Material Design icons (legacy)
  const isStringIcon = typeof icon === 'string';
  const useMaterialIcons = materialStyle && isStringIcon;

  // Get Lucide icon component
  const LucideIcon = useMemo<ComponentType<LucideIcons.LucideProps> | null>(() => {
    if (!isStringIcon || useMaterialIcons) return null;

    // Try to find the icon in Lucide (expects PascalCase)
    const icons = LucideIcons as unknown as Record<string, ComponentType<LucideIcons.LucideProps>>;
    return icons[icon] || null;
  }, [icon, isStringIcon, useMaterialIcons]);

  const { responsivePropValue } = useResponsiveProp(useListenerSize);

  const resolvedSize = useMemo<string | undefined>(() => {
    if (!size) return undefined;
    if (typeof size === 'string') return size;

    return responsivePropValue(size);
  }, [responsivePropValue, size]);

  const generateStyleVariables = useMemo<CustomStyles | CSSProperties>(() => ({
    ...resolvedSize && { [`--${PREFIX_BS}icon-component-size`]: resolvedSize },
    ...hasCircle && { [`--${PREFIX_BS}icon-component-padding`]: `calc(var(--${PREFIX_BS}icon-component-size, 24px) * 0.4)` },
    ...style,
  }), [resolvedSize, hasCircle, style]);

  const generateClasses = useMemo<ClassMap>(() => ({
    'd-icon': true,
    ...className && { [className]: true },
    'd-icon-has-circle': hasCircle,
    ...color && { [`d-icon-color-${color}`]: true },
  }), [className, hasCircle, color]);

  /**
   * Decorative by default. `ariaHidden` and `ariaLabel` are not symmetric:
   * hiding is absolute, so `ariaHidden` wins over a name, but `ariaHidden={false}`
   * and `ariaLabel` agree — both expose the icon — and the name is honoured.
   */
  const accessibilityProps = useMemo<IconAccessibilityProps>(() => {
    // Hiding is absolute: it wins over a name.
    if (ariaHidden === true) return { 'aria-hidden': true };
    // A name exposes the icon, which is also what `ariaHidden={false}` asks for.
    if (ariaLabel) return { role: 'img', 'aria-label': ariaLabel };
    // Exposed with no name: an explicit opt-out of the default, warned about below.
    if (ariaHidden === false) return {};

    return { 'aria-hidden': true };
  }, [ariaHidden, ariaLabel]);

  /**
   * `dataAttributes` is typed to `data-*`, but casting through it was the only
   * way to reach the DOM before `ariaHidden` existed, so it still wins over the
   * computed values — and therefore decides the effective state below.
   */
  const domAttributes = useMemo(
    () => ({ ...accessibilityProps, ...dataAttributes }),
    [accessibilityProps, dataAttributes],
  );

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
    const attributes = domAttributes as Record<string, unknown>;
    const hidden = attributes['aria-hidden'];

    return hidden !== true && hidden !== 'true' && !attributes.role;
  }, [domAttributes]);

  /**
   * Diagnostics read the effective state, so a `dataAttributes` override that
   * hides the icon after all is not reported as exposing it. Memoised like the
   * values above, so re-rendering with the same props does not repeat them.
   */
  useMemo(() => {
    if (process.env.NODE_ENV === 'production') return;

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
    return (
      <i
        className={classNames(generateClasses, familyClass)}
        style={generateStyleVariables}
        {...domAttributes}
      >
        {isStringIcon ? icon : null}
      </i>
    );
  }

  if (isIconComponent(icon)) {
    return (
      <span
        className={classNames(generateClasses)}
        style={generateStyleVariables}
        {...domAttributes}
      >
        {createElement(icon, {
          width: resolvedSize || 24,
          height: resolvedSize || 24,
          strokeWidth,
          ...isExposedWithoutName && { 'aria-hidden': false },
        })}
      </span>
    );
  }

  // Render Lucide icon
  if (!LucideIcon) {
    if (typeof icon === 'string' && familyClass && familyPrefix) {
      if (process.env.NODE_ENV !== 'production') {
        warnUnknownIcon(icon, familyClass, familyPrefix);
      }

      return (
        <i
          className={classNames(generateClasses, familyClass, `${familyPrefix}${icon}`)}
          style={generateStyleVariables}
          {...domAttributes}
        />
      );
    }

    // eslint-disable-next-line no-console
    console.warn(`Icon "${String(icon)}" not found in Lucide. Make sure to use PascalCase names (e.g., "Home", "User", "Settings")`);
    return (
      <span
        className={classNames(generateClasses)}
        style={generateStyleVariables}
        {...domAttributes}
      >
        ?
      </span>
    );
  }

  return (
    <span
      className={classNames(generateClasses)}
      style={generateStyleVariables}
      {...domAttributes}
    >
      <LucideIcon
        size={iconSize || 24}
        strokeWidth={strokeWidth}
        {...isExposedWithoutName && { 'aria-hidden': false }}
      />
    </span>
  );
}
