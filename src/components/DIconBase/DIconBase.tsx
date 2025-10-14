import classNames from 'classnames';
import { useMemo } from 'react';

import type { CSSProperties } from 'react';

import { PREFIX_BS } from '../config';

import type {
  BaseProps,
  ClassMap,
  ComponentColor,
  CustomStyles,
} from '../interface';

type Props =
  & BaseProps
  & {
    icon: string;
    color?: ComponentColor;
    size?: string;
    loading?: boolean;
    loadingDuration?: number;
    hasCircle?: boolean;
    circleSize?: string;
    backgroundColor?: string;
    materialStyle?: boolean;
    familyClass?: string;
    familyPrefix?: string;
  };

export default function DIconBase(
  {
    icon,
    color,
    style,
    className,
    size,
    loading = false,
    loadingDuration = 1.8,
    hasCircle = false,
    circleSize = `calc(var(--${PREFIX_BS}icon-size) * 1)`,
    backgroundColor,
    materialStyle = false,
    familyClass = 'bi',
    familyPrefix = 'bi-',
    dataAttributes,
  }: Props,
) {
  const colorStyle = useMemo(() => {
    if (color) {
      return { [`--${PREFIX_BS}icon-component-color`]: `var(--${PREFIX_BS}${color})` };
    }
    return {};
  }, [color]);

  const backgroundStyle = useMemo(() => {
    if (backgroundColor) {
      return { [`--${PREFIX_BS}icon-component-bg-color`]: backgroundColor };
    }

    if (hasCircle) {
      if (color) {
        return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}${color}-rgb), 0.1)` };
      }
      return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}body-color-rgb), 0.1)` };
    }
    return {};
  }, [backgroundColor, hasCircle, color]);

  const circleSizeStyle = useMemo(() => {
    if (hasCircle) {
      return { [`--${PREFIX_BS}icon-component-padding`]: circleSize };
    }
    return { [`--${PREFIX_BS}icon-component-padding`]: '0' };
  }, [circleSize, hasCircle]);

  const generateStyleVariables = useMemo<CustomStyles | CSSProperties>(() => ({
    [`--${PREFIX_BS}icon-component-loading-duration`]: `${loadingDuration}s`,
    ...size && { [`--${PREFIX_BS}icon-component-size`]: size },
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
      {...dataAttributes}
    >
      {materialStyle && icon}
    </i>
  );
}
