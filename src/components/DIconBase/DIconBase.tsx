import classNames from 'classnames';
import { useMemo } from 'react';
import * as LucideIcons from 'lucide-react';

import type { CSSProperties, ComponentType } from 'react';

import { PREFIX_BS } from '../config';

import type {
  BaseProps,
  ClassMap,
  ComponentColor,
  CustomStyles,
} from '../interface';
import { ResponsiveProp, useResponsiveProp } from '../../hooks/useResponsiveProp';

type Props =
  & BaseProps
  & {
    icon: string;
    color?: ComponentColor;
    size?: string | ResponsiveProp;
    useListenerSize?: boolean;
    hasCircle?: boolean;
    materialStyle?: boolean;
    familyClass?: string;
    familyPrefix?: string;
    strokeWidth?: number;
  };

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
  const useMaterialIcons = materialStyle;

  // Get Lucide icon component
  const LucideIcon = useMemo<ComponentType<LucideIcons.LucideProps> | null>(() => {
    if (useMaterialIcons) return null;

    // Try to find the icon in Lucide (expects PascalCase)
    const icons = LucideIcons as unknown as Record<string, ComponentType<LucideIcons.LucideProps>>;
    return icons[icon] || null;
  }, [icon, useMaterialIcons]);

  const colorStyle = useMemo(() => {
    if (color) {
      return { [`--${PREFIX_BS}icon-component-color`]: `var(--${PREFIX_BS}${color})` };
    }
    return {};
  }, [color]);

  const backgroundStyle = useMemo(() => {
    if (hasCircle) {
      if (color) {
        return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}${color}-rgb), 0.1)` };
      }
      return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}body-color-rgb), 0.1)` };
    }
    return {};
  }, [hasCircle, color]);

  const { responsivePropValue } = useResponsiveProp(useListenerSize);

  const resolvedSize = useMemo<string | undefined>(() => {
    if (!size) return undefined;
    if (typeof size === 'string') return size;

    return responsivePropValue(size);
  }, [responsivePropValue, size]);

  const generateStyleVariables = useMemo<CustomStyles | CSSProperties>(() => ({
    ...resolvedSize && { [`--${PREFIX_BS}icon-component-size`]: resolvedSize },
    ...colorStyle,
    ...backgroundStyle,
    ...hasCircle && { [`--${PREFIX_BS}icon-component-padding`]: `calc(var(--${PREFIX_BS}icon-component-size, 24px) * 0.4)` },
    ...style,
  }), [resolvedSize, colorStyle, backgroundStyle, hasCircle, style]);

  const generateClasses = useMemo<ClassMap>(() => ({
    'd-icon': true,
    ...className && { [className]: true },
  }), [className]);

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
        {...dataAttributes}
      >
        {icon}
      </i>
    );
  }

  // Render Lucide icon
  if (!LucideIcon) {
    if (familyClass && familyPrefix) {
      return (
        <i
          className={classNames(generateClasses, familyClass, `${familyPrefix}${icon}`)}
          style={generateStyleVariables}
          {...dataAttributes}
        />
      );
    }

    // eslint-disable-next-line no-console
    console.warn(`Icon "${icon}" not found in Lucide. Make sure to use PascalCase names (e.g., "Home", "User", "Settings")`);
    return (
      <span
        className={classNames(generateClasses)}
        style={generateStyleVariables}
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
      {...dataAttributes}
    >
      <LucideIcon
        size={iconSize || 24}
        strokeWidth={strokeWidth}
      />
    </span>
  );
}
