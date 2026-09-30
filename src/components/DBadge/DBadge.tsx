import classNames from 'classnames';
import { useMemo } from 'react';

import type { BaseProps, ComponentColor } from '../interface';
import { resolveRole } from '../roles';
import DIcon from '../DIcon';

import { ResponsiveProp, useResponsiveProp } from '../../hooks/useResponsiveProp';

type Props =
  & BaseProps
  & {
    text?: string;
    /** @deprecated Use `variant="soft"`. Kept working until 4.0. */
    soft?: boolean;
    variant?: 'solid' | 'soft' | 'outline';
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
    variant,
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

  // `soft` was a boolean flag in 2.x; 3.x has a variant axis, and `soft` is one
  // of its values. The flag still wins if both are given, so existing call
  // sites keep behaving exactly as they did.
  const resolvedVariant = useMemo(
    () => (soft ? 'soft' : variant ?? 'solid'),
    [soft, variant],
  );

  const dataProps = useMemo(() => ({
    'data-variant': resolvedVariant,
    'data-color': resolveRole(color),
    ...(resolvedSize ? { 'data-size': resolvedSize } : {}),
    ...(rounded ? { 'data-shape': 'pill' } : {}),
  }), [resolvedVariant, color, resolvedSize, rounded]);

  return (
    <span
      className={classNames('df-badge', className)}
      style={style}
      {...dataProps}
      {...id && { id }}
      {...dataAttributes}
    >
      {iconStart && (
        <DIcon
          className="df-badge-icon"
          icon={iconStart}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
          materialStyle={iconMaterialStyle}
        />
      )}
      <span>{text}</span>
      {iconEnd && (
        <DIcon
          className="df-badge-icon"
          icon={iconEnd}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
          materialStyle={iconMaterialStyle}
        />
      )}
    </span>
  );
}
