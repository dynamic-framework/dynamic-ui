import { useMemo } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DIcon from '../../DIcon';

import type {
  BaseProps,
  ComponentColor,
  EndIconProps,
  StartIconProps,
} from '../../interface';
import { resolveRole } from '../../roles';

type Props =
& BaseProps
& StartIconProps
& EndIconProps
& PropsWithChildren<{
  as?: 'li' | 'a' | 'button';
  action?: boolean;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  color?: ComponentColor;
}>;

export default function DListGroupItem(
  {
    as = 'li',
    action: actionProp,
    active,
    disabled,
    href,
    onClick,
    color,
    iconStart,
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconStartMaterialStyle,
    iconEnd,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    iconEndMaterialStyle,
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

  const dataProps = useMemo(
    () => ({
      ...action && { 'data-action': '' },
      ...active && { 'data-active': '' },
      ...color && { 'data-color': resolveRole(color) },
    }),
    [action, active, color],
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
      className={classNames('df-list-item', className)}
      style={style}
      {...dataProps}
      {...Tag === 'a' && href && { href }}
      {...onClick && { onClick }}
      {...ariaAttributes}
      {...dataAttributes}
      {...Tag === 'button' && { type: 'button' }}
    >
      {iconStart && (
        <DIcon
          icon={iconStart}
          familyClass={iconStartFamilyClass}
          familyPrefix={iconStartFamilyPrefix}
          materialStyle={iconStartMaterialStyle}
        />
      )}
      {children}
      {iconEnd && (
        <DIcon
          icon={iconEnd}
          familyClass={iconEndFamilyClass}
          familyPrefix={iconEndFamilyPrefix}
          materialStyle={iconEndMaterialStyle}
          className="df-list-item-end"
        />
      )}
    </Tag>
  );
}
