import { useContext, useMemo } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DIcon from '../../DIcon';

import type {
  BaseProps,
  ComponentColor,
  EndIconProps,
  StartIconProps,
} from '../../interface';
import { useDContext } from '../../../contexts';
import ListGroupContext from '../ListGroupContext';
import warnInvalidListMarkup from './warnInvalidListMarkup';

type Props =
& BaseProps
& StartIconProps
& EndIconProps
& PropsWithChildren<{
  as?: 'li' | 'a' | 'button';
  action?: boolean;
  active?: boolean;
  /**
   * Value of `aria-current` while the item is `active`: `'page'` for the
   * current page of a navigation, `'step'` for the current step of a flow.
   */
  ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true';
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
    ariaCurrent = 'true',
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
  const {
    icon: {
      familyClass,
      familyPrefix,
      materialStyle,
    },
  } = useDContext();

  const Tag = useMemo(() => {
    if (href) {
      return 'a';
    }

    if (actionProp) {
      return 'button';
    }

    return as;
  }, [href, as, actionProp]);

  const container = useContext(ListGroupContext);
  const isInteractive = Tag === 'a' || Tag === 'button';

  // Inside a <ul>/<ol>, a link or button is wrapped in the <li> that carries
  // the item styles, so the group keeps list semantics (`list > listitem >
  // link|button`) without breaking Bootstrap's sibling selectors.
  const isWrapped = isInteractive && (container === 'ul' || container === 'ol');

  if (process.env.NODE_ENV !== 'production' && container === 'div' && Tag === 'li') {
    warnInvalidListMarkup(container, Tag);
  }

  const generateClasses = useMemo(
    () => ({
      'list-group-item': true,
      'list-group-item-action': isInteractive || actionProp,
      'd-list-group-item-interactive': isWrapped,
      [`list-group-item-${color}`]: !!color,
      active,
      disabled,
    }),
    [isInteractive, actionProp, isWrapped, active, disabled, color],
  );

  // A disabled link leaves the tab order and can't be activated: without
  // `href` and `onClick`, Enter does nothing. A button uses `disabled`.
  const interactiveProps = useMemo(() => {
    if (Tag === 'button') {
      return {
        type: 'button' as const,
        ...onClick && { onClick },
        ...active && { 'aria-current': ariaCurrent },
        ...disabled && { disabled: true },
      };
    }
    if (Tag === 'a') {
      return disabled
        ? { 'aria-disabled': true, tabIndex: -1, ...active && { 'aria-current': ariaCurrent } }
        : {
          ...href && { href },
          ...onClick && { onClick },
          ...active && { 'aria-current': ariaCurrent },
        };
    }
    return {
      ...onClick && { onClick },
      ...active && { 'aria-current': ariaCurrent },
      ...disabled && { 'aria-disabled': true },
    };
  }, [Tag, href, onClick, active, ariaCurrent, disabled]);

  const content = (
    <>
      {iconStart && (
        <DIcon
          icon={iconStart}
          familyClass={iconStartFamilyClass ?? familyClass}
          familyPrefix={iconStartFamilyPrefix ?? familyPrefix}
          materialStyle={iconStartMaterialStyle ?? materialStyle}
        />
      )}
      {children}
      {iconEnd && (
        <DIcon
          icon={iconEnd}
          familyClass={iconEndFamilyClass ?? familyClass}
          familyPrefix={iconEndFamilyPrefix ?? familyPrefix}
          materialStyle={iconEndMaterialStyle ?? materialStyle}
          className="ms-auto"
        />
      )}
    </>
  );

  if (isWrapped) {
    return (
      <li
        className={classNames(generateClasses, className)}
        style={style}
      >
        <Tag
          className="d-list-group-item-link"
          {...interactiveProps}
          {...dataAttributes}
        >
          {content}
        </Tag>
      </li>
    );
  }

  return (
    <Tag
      className={classNames(generateClasses, className)}
      style={style}
      {...interactiveProps}
      {...dataAttributes}
    >
      {content}
    </Tag>
  );
}
