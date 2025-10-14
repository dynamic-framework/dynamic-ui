import { useMemo } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import type { BaseProps, ComponentColor } from '../../interface';

type Props = BaseProps & PropsWithChildren<{
  active?: boolean;
  disabled?: boolean;
  color?: ComponentColor;
  onClick?: () => void;
}>;

/**
 * @deprecated Please use DListGroup.Item or DListGroupItem instead
 */
export default function DListItem(
  {
    children,
    className,
    style,
    active = false,
    disabled = false,
    color,
    onClick,
  }: Props,
) {
  const Tag = useMemo(
    () => (onClick ? 'button' : 'div'),
    [onClick],
  );

  return (
    <Tag
      {...Tag === 'button' && {
        onClick,
        type: 'button',
      }}
      className={
        classNames(
          'list-group-item list-group-item-action',
          color ? `list-group-item-${color}` : undefined,
          className,
          {
            active,
            disabled,
          },
        )
      }
      style={style}
      {...active && { 'aria-current': true }}
    >
      {children}
    </Tag>
  );
}
