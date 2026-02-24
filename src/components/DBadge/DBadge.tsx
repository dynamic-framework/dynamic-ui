import classNames from 'classnames';
import { useMemo } from 'react';

import type { BaseProps, ComponentColor } from '../interface';
import DIcon from '../DIcon';

import { ResponsiveProp, useResponsiveProp } from '../../hooks/useResponsiveProp';

type Props =
  & BaseProps
  & {
    text?: string;
    soft?: boolean;
    size?: string | ResponsiveProp;
    rounded?: boolean;
    color?: ComponentColor;
    id?: string;
    iconStart?: string;
    iconEnd?: string;
    iconMaterialStyle?: boolean;
    iconFamilyClass?: string;
    iconFamilyPrefix?: string;
  };

export default function DBadge(props: Props) {
  const {
    text,
    soft = false,
    color = 'primary',
    id,
    rounded,
    className,
    size,
    style,
    iconStart,
    iconEnd,
    iconMaterialStyle,
    iconFamilyClass,
    iconFamilyPrefix,
    dataAttributes,
  } = props;

  // Responsive size resolution using useResponsiveProp
  const { responsivePropValue } = useResponsiveProp(true);
  const resolvedSize = useMemo(() => {
    if (!size) return undefined;
    if (typeof size === 'string') return size;
    return responsivePropValue(size);
  }, [responsivePropValue, size]);

  const generateClasses = useMemo(
    () => ({
      badge: true,
      [`badge-${color}`]: !!color && !soft,
      [`badge-soft-${color}`]: !!color && soft,
      'rounded-pill': !!rounded,
      [`badge-${resolvedSize}`]: !!resolvedSize,
    }),
    [rounded, soft, color, resolvedSize],
  );
  return (
    <span
      className={classNames(generateClasses, className)}
      style={style}
      {...id && { id }}
      {...dataAttributes}
    >
      {iconStart && (
        <DIcon
          icon={iconStart}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
          materialStyle={iconMaterialStyle}
        />
      )}
      <span>{text}</span>
      {iconEnd && (
        <DIcon
          icon={iconEnd}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
          materialStyle={iconMaterialStyle}
        />
      )}
    </span>
  );
}
