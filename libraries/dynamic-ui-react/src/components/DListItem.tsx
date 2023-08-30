/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import { PropsWithChildren, useMemo } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  theme?: string;
  onEventClick?: () => void;
}>;

export default function DListItem(
  {
    children,
    className,
    isActive = false,
    isDisabled = false,
    theme,
    onEventClick,
  }: Props,
) {
  const Tag = useMemo(
    () => (onEventClick ? 'button' : 'div'),
    [onEventClick],
  );

  return (
    <Tag
      {...Tag === 'button' && {
        onClick: onEventClick,
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
