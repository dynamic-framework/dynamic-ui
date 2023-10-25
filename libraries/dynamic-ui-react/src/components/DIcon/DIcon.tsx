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
  isLoading?: boolean;
  loadingDuration?: number;
  hasCircle?: boolean;
  circleSize?: string;
  color?: string;
  backgroundColor?: string;
  familyClass?: string;
  familyPrefix?: string;
};

export default function DIcon(
  {
    icon,
    theme,
    style,
    className,
    size = '1.5rem',
    isLoading = false,
    loadingDuration = 1.8,
    hasCircle = false,
    circleSize = `calc(var(--${PREFIX_BS}icon-component-size) * 1)`,
    color,
    backgroundColor,
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
    [`${familyPrefix}${icon}`]: true,
    'd-icon-loading': isLoading,
    ...className && { [className]: true },
  }), [familyClass, familyPrefix, icon, className, isLoading]);

  return (
    <i
      className={classNames(generateClasses)}
      style={generateStyleVariables}
    />
  );
}
