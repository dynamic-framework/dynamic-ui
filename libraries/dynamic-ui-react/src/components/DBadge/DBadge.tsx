import classNames from 'classnames';
import { useMemo } from 'react';

import type { BaseProps } from '../interface';
import DIcon from '../DIcon';

type Props =
& BaseProps
& {
  text?: string;
  soft?: boolean;
  rounded?: boolean;
  theme?: string;
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
    theme = 'primary',
    id,
    rounded,
    className,
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
      [`badge-${theme}`]: !!theme && !soft,
      [`badge-soft-${theme}`]: !!theme && soft,
      'rounded-pill': !!rounded,
    }),
    [rounded, soft, theme],
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
