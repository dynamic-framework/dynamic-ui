import classNames from 'classnames';
import { useMemo } from 'react';

import type { BaseProps, ComponentColor } from '../interface';
import DIcon from '../DIcon';

type Props =
& BaseProps
& {
  text?: string;
  soft?: boolean;
  size?: 'sm' | 'lg';
  rounded?: boolean;
  color?: ComponentColor;
  id?: string;
  iconStart?: string;
  iconEnd?: string;
  iconMaterialStyle?: boolean;
  iconFamilyClass?: string;
  iconFamilyPrefix?: string;
};

export default function DBadge(
  {
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
  }: Props,
) {
  const generateClasses = useMemo(
    () => ({
      badge: true,
      [`badge-${color}`]: !!color && !soft,
      [`badge-soft-${color}`]: !!color && soft,
      'rounded-pill': !!rounded,
      [`badge-${size}`]: !!size,
    }),
    [rounded, soft, color, size],
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
