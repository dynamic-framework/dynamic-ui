/* eslint-disable max-len */
import classNames from 'classnames';
import { createElement, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import { isValidElementType } from 'react-is';
import type { CSSProperties, ComponentType } from 'react';
import { PREFIX } from '../config';
import { resolveRole } from '../roles';

import type {
  BaseProps,
  ClassMap,
  ComponentColor,
  CustomStyles,
  IconComponent,
  IconValue,
} from '../interface';
import { ResponsiveProp, useResponsiveProp } from '../../hooks/useResponsiveProp';

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
  };

export type DIconBaseProps = Props;

export default function DIconBase(
  {
    icon,
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
    dataAttributes,
  }: Props,
) {
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

  // Only the size is an inline style; it is per-instance and cannot be a class.
  // The circle padding used to be computed here as a calc() of the size — that
  // is now `--df-icon-circle-padding` in the stylesheet, where it belongs.
  const generateStyleVariables = useMemo<CustomStyles | CSSProperties>(() => ({
    ...resolvedSize && { [`--${PREFIX}icon-inline-size`]: resolvedSize },
    ...style,
  }), [resolvedSize, style]);

  const generateClasses = useMemo<ClassMap>(() => ({
    'df-icon': true,
    ...className && { [className]: true },
  }), [className]);

  /**
   * 2.x emitted a class per theme colour, plus a second rule pairing it with
   * the circle modifier — sixteen rules whose only job was to pick a colour.
   * Here the colour is one attribute and the circle derives its ground from it
   * with color-mix(), so a client's ninth role works with no extra CSS.
   */
  const dataProps = useMemo(() => ({
    ...color && { 'data-color': resolveRole(color) },
    ...hasCircle && { 'data-circle': '' },
  }), [color, hasCircle]);

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
        {...dataProps}
        {...dataAttributes}
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
        {...dataProps}
        {...dataAttributes}
      >
        {createElement(icon, {
          width: resolvedSize || 24,
          height: resolvedSize || 24,
          strokeWidth,
        })}
      </span>
    );
  }

  // Render Lucide icon
  if (!LucideIcon) {
    if (isStringIcon && familyClass && familyPrefix) {
      return (
        <i
          className={classNames(generateClasses, familyClass, `${familyPrefix}${icon}`)}
          style={generateStyleVariables}
          {...dataProps}
          {...dataAttributes}
        />
      );
    }

    // eslint-disable-next-line no-console
    console.warn(`Icon "${String(icon)}" not found in Lucide. Make sure to use PascalCase names (e.g., "Home", "User", "Settings")`);
    return (
      <span
        className={classNames(generateClasses)}
        style={generateStyleVariables}
        {...dataProps}
        {...dataAttributes}
      >
        ?
      </span>
    );
  }

  return (
    <span
      className={classNames(generateClasses)}
      style={generateStyleVariables}
      {...dataProps}
      {...dataAttributes}
    >
      <LucideIcon
        size={iconSize || 24}
        strokeWidth={strokeWidth}
      />
    </span>
  );
}
