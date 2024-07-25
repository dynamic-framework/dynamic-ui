import classNames from 'classnames';
import { useMemo } from 'react';

import type { BaseProps } from '../interface';
import DIcon from '../DIcon';

type Props =
& BaseProps
& {
  text?: string;
  dot?: boolean;
  soft?: boolean;
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
    dot = false,
    soft = false,
    theme = 'primary',
    id,
    className,
    style,
    iconStart,
    iconEnd,
    iconMaterialStyle,
    iconFamilyClass,
    iconFamilyPrefix,
  }: Props,
) {
  const generateClasses = useMemo(
    () => ({
      badge: true,
      'rounded-circle p-2': dot,
      [`text-bg-${theme}`]: !!theme && !soft,
      [`bg-surface-${theme}`]: !!theme && soft,
    }),
    [dot, soft, theme],
  );

  return (
    <span
      className={classNames(generateClasses, className)}
      style={style}
      {...id && { id }}
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
