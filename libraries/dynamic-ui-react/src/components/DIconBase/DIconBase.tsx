import { useMemo } from 'react';
import classNames from 'classnames';

import type { CSSProperties } from 'react';

import { PREFIX_BS } from '../config';

import type { BaseProps, ClassMap, CustomStyles } from '../interface';

type Props =
& BaseProps
& {
  icon: string;
  theme?: string;
  size?: string;
  loading?: boolean;
  loadingDuration?: number;
  hasCircle?: boolean;
  circleSize?: string;
  color?: string;
  backgroundColor?: string;
  materialStyle?: boolean;
  familyClass?: string;
  familyPrefix?: string;
};

export default function DIconBase(
  {
    icon,
    theme,
    style,
    className,
    size = '1.5rem',
    loading = false,
    loadingDuration = 1.8,
    hasCircle = false,
    circleSize = `calc(var(--${PREFIX_BS}icon-component-size) * 1)`,
    color,
    backgroundColor,
    materialStyle = false,
    familyClass = 'bi',
    familyPrefix = 'bi-',
  }: Props,
) {
  const colorStyle = useMemo(() => {
    if (color) {
      return { [`--${PREFIX_BS}component-color`]: color };
    }
    if (theme) {
      return { [`--${PREFIX_BS}icon-component-color`]: `var(--${PREFIX_BS}${theme})` };
    }
    return {};
  }, [color, theme]);

  const backgroundStyle = useMemo(() => {
    if (backgroundColor) {
      return { [`--${PREFIX_BS}icon-component-bg-color`]: backgroundColor };
    }

    if (hasCircle) {
      if (theme) {
        return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}${theme}-rgb), 0.1)` };
      }
      return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}body-color-rgb), 0.1)` };
    }
    return {};
  }, [backgroundColor, hasCircle, theme]);

  const circleSizeStyle = useMemo(() => {
    if (hasCircle) {
      return { [`--${PREFIX_BS}icon-component-padding`]: circleSize };
    }
    return { [`--${PREFIX_BS}icon-component-padding`]: '0' };
  }, [circleSize, hasCircle]);

  const generateStyleVariables = useMemo<CustomStyles | CSSProperties>(() => ({
    [`--${PREFIX_BS}icon-component-size`]: size,
    [`--${PREFIX_BS}icon-component-loading-duration`]: `${loadingDuration}s`,
    ...colorStyle,
    ...backgroundStyle,
    ...circleSizeStyle,
    ...style,
  }), [size, loadingDuration, colorStyle, backgroundStyle, circleSizeStyle, style]);

  const generateClasses = useMemo<ClassMap>(() => ({
    'd-icon': true,
    [familyClass]: true,
    'd-icon-loading': loading,
    ...!materialStyle && {
      [`${familyPrefix}${icon}`]: true,
    },
    ...className && { [className]: true },
  }), [
    familyClass,
    loading,
    className,
    materialStyle,
    familyPrefix,
    icon,
  ]);

  return (
    <i
      className={classNames(generateClasses)}
      style={generateStyleVariables}
    >
      {materialStyle && icon}
    </i>
  );
}
