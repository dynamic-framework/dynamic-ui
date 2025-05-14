import { useMemo } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import type { BaseProps } from '../../interface';

type Props =
& BaseProps
& PropsWithChildren<{
  as?: 'li' | 'a' | 'button';
  action?: boolean;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  theme?: string;
}>;

export default function DListGroupItem(
  {
    as = 'li',
    action: actionProp,
    active,
    disabled,
    href,
    onClick,
    theme,
    children,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  const Tag = useMemo(() => {
    if (href) {
      return 'a';
    }

    if (actionProp) {
      return 'button';
    }

    return as;
  }, [href, as, actionProp]);

  const action = useMemo(() => {
    if (Tag === 'a' || Tag === 'button') {
      return true;
    }
    return actionProp;
  }, [Tag, actionProp]);

  const generateClasses = useMemo(
    () => ({
      'list-group-item': true,
      'list-group-item-action': action,
      [`list-group-item-${theme}`]: !!theme,
      active,
      disabled,
    }),
    [action, active, disabled, theme],
  );

  const ariaAttributes = useMemo(() => {
    if (Tag === 'button') {
      return {
        ...active && { 'aria-current': true },
        ...disabled && { disabled: true },
      };
    }
    return {
      ...active && { 'aria-current': true },
      ...disabled && { 'aria-disabled': true },
    };
  }, [Tag, active, disabled]);

  return (
    <Tag
      className={classNames(generateClasses, className)}
      style={style}
      {...Tag === 'a' && href && { href }}
      {...onClick && { onClick }}
      {...ariaAttributes}
      {...dataAttributes}
      {...Tag === 'button' && { type: 'button' }}
    >
      {children}
    </Tag>
  );
}
