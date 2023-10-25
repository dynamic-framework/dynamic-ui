import { useMemo } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';
import { BaseProps } from '../../interface';

type Props = BaseProps & PropsWithChildren<{
  isActive?: boolean;
  isDisabled?: boolean;
  theme?: string;
  onClick?: () => void;
}>;

export default function DListItem(
  {
    children,
    className,
    style,
    isActive = false,
    isDisabled = false,
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
            active: isActive,
            disabled: isDisabled,
          },
        )
      }
      style={style}
      {...isActive && { 'aria-current': true }}
    >
      {children}
    </Tag>
  );
}
