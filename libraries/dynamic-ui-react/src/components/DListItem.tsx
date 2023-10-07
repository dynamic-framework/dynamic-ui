import classNames from 'classnames';
import { PropsWithChildren, useMemo } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  theme?: string;
  onClick?: () => void;
}>;

export default function DListItem(
  {
    children,
    className,
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
      {...isActive && { 'aria-current': true }}
    >
      {children}
    </Tag>
  );
}
