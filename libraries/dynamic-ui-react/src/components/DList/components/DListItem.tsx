import { useMemo } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import type { BaseProps } from '../../interface';

type Props = BaseProps & PropsWithChildren<{
  active?: boolean;
  disabled?: boolean;
  theme?: string;
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
    theme,
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
          theme ? `list-group-item-${theme}` : undefined,
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
