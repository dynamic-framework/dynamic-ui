import { useMemo } from 'react';
import classNames from 'classnames';

import { PREFIX_BS } from '../config';

import type { ClassMap, CustomStyles } from '../interface';

type Props = {
  icon: string;
  theme?: string;
  className?: string;
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
    className = '',
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
  const getColorStyle = useMemo(() => {
    if (color) {
      return { [`--${PREFIX_BS}component-color`]: color };
    }
    if (theme) {
      return { [`--${PREFIX_BS}icon-component-color`]: `var(--${PREFIX_BS}${theme})` };
    }
    return {};
  }, [color, theme]);

  const getBackgroundStyle = useMemo(() => {
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

  const getCircleSizeStyle = useMemo(() => {
    if (hasCircle) {
      return { [`--${PREFIX_BS}icon-component-padding`]: circleSize };
    }
    return { [`--${PREFIX_BS}icon-component-padding`]: '0' };
  }, [circleSize, hasCircle]);

  const generateStyleVariables = useMemo<CustomStyles>(() => ({
    [`--${PREFIX_BS}icon-component-size`]: size,
    [`--${PREFIX_BS}icon-component-loading-duration`]: `${loadingDuration}s`,
    ...getColorStyle,
    ...getBackgroundStyle,
    ...getCircleSizeStyle,
  }), [size, loadingDuration, getColorStyle, getBackgroundStyle, getCircleSizeStyle]);

  const generateClasses = useMemo<ClassMap>(() => ({
    'd-icon': true,
    [className]: !!className,
    [familyClass]: true,
    [`${familyPrefix}${icon}`]: true,
    'd-icon-loading': isLoading,
  }), [familyClass, familyPrefix, icon, className, isLoading]);

  return (
    <i
      className={classNames(generateClasses)}
      style={generateStyleVariables}
    />
  );
}
