/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import { PropsWithChildren, useMemo } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  theme?: string;
  onMClick?: () => void;
}>;

export default function MListItem({
  children,
  className,
  isActive = false,
  isDisabled = false,
  theme,
  onMClick,
}: Props) {
  const Tag = useMemo(
    () => (onMClick ? 'button' : 'div'),
    [onMClick],
  );

  return (
    <Tag
      {...Tag === 'button' && {
        onClick: onMClick,
        type: 'button',
      }}
      className={
        classNames(
          'm-list-item list-group-item list-group-item-action',
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
