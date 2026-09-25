/* eslint-disable react/button-has-type */
import { useMemo, useCallback } from 'react';
import classNames from 'classnames';

import type { MouseEvent } from 'react';

import type { ResponsiveProp } from '../../hooks/useResponsiveProp';

import DIcon from '../DIcon';

import type {
  BaseProps,
  ButtonVariant,
  ClassMap,
  ComponentColor,
  ComponentSize,
  FamilyIconProps,
  InputState,
} from '../interface';
import { useDContext } from '../../contexts';
import warnMissingAccessibleName from './warnMissingAccessibleName';

type Props =
  BaseProps &
  FamilyIconProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: string;
    size?: ComponentSize;
    /**
     * Size of the icon glyph, forwarded to `DIcon` (e.g. `"1.5rem"`, or a
     * responsive object such as `{ xs: '1rem', lg: '2rem' }`, which follows
     * viewport changes). Without it the glyph follows the button's font size,
     * which changes with `size`.
     */
    iconSize?: string | ResponsiveProp;
    variant?: ButtonVariant;
    color?: ComponentColor;
    state?: InputState;
    loading?: boolean;
    loadingAriaLabel?: string;
    stopPropagationEnabled?: boolean;
    href?: string;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
    onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  };

export default function DButtonIcon(
  {
    id,
    icon,
    size,
    iconSize,
    className,
    variant,
    state,
    loadingAriaLabel,
    iconMaterialStyle,
    disabled = false,
    color = 'primary',
    loading = false,
    href,
    target,
    rel,
    stopPropagationEnabled = true,
    style,
    iconFamilyClass,
    iconFamilyPrefix,
    dataAttributes,
    onClick,
    'aria-label': ariaLabelProp,
    ...rest
  }: Props,
) {
  const {
    icon: {
      familyClass,
      familyPrefix,
      materialStyle,
    },
  } = useDContext();

  const generateClasses = useMemo<ClassMap>(() => {
    const variantClass = !variant || variant === 'solid'
      ? `btn-${color}`
      : `btn-${variant}-${color}`;

    return {
      'btn d-button-icon': true,
      [variantClass]: true,
      ...size && { [`btn-${size}`]: true },
      ...(state && state !== 'disabled') && { [state]: true },
      loading,
    };
  }, [variant, color, size, state, loading]);

  // A responsive iconSize has to follow viewport changes, so DIcon only
  // listens to breakpoints when it gets an object; a plain string needs none.
  const useIconSizeListener = typeof iconSize === 'object';

  const isDisabled = useMemo(() => (
    state === 'disabled' || loading || disabled
  ), [state, loading, disabled]);

  const clickHandler = useCallback((event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (stopPropagationEnabled) {
      event.stopPropagation();
    }
    if (isDisabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  }, [stopPropagationEnabled, onClick, isDisabled]);

  const ariaLabel = useMemo(
    () => (
      loading
        ? loadingAriaLabel || ariaLabelProp
        : ariaLabelProp),
    [loading, loadingAriaLabel, ariaLabelProp],
  );

  /**
   * `aria-labelledby` and `title` also name a control, but they travel in `rest`,
   * which only the button branch spreads — an anchor drops them, so there the
   * button really is unnamed and the warning still applies.
   */
  const hasAccessibleName = useMemo(
    () => !!ariaLabel || (!href && (!!rest['aria-labelledby'] || !!rest.title)),
    [ariaLabel, href, rest],
  );

  if (process.env.NODE_ENV !== 'production' && !hasAccessibleName) {
    warnMissingAccessibleName(icon, href ? 'link' : 'button');
  }

  if (href) {
    return (
      <a
        id={id}
        href={href}
        target={target}
        rel={rel}
        className={classNames(generateClasses, className)}
        style={style}
        onClick={clickHandler}
        aria-label={ariaLabel}
        aria-disabled={isDisabled}
        {...dataAttributes}
      >
        {loading
          ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            >
              <span className="visually-hidden">Loading...</span>
            </span>
          )
          : (
            <DIcon
              icon={icon}
              size={iconSize}
              useListenerSize={useIconSizeListener}
              familyClass={iconFamilyClass ?? familyClass}
              familyPrefix={iconFamilyPrefix ?? familyPrefix}
              materialStyle={iconMaterialStyle ?? materialStyle}
            />
          )}
      </a>
    );
  }

  return (
    <button
      className={classNames(generateClasses, className)}
      style={style}
      disabled={state === 'disabled' || loading}
      onClick={clickHandler}
      aria-label={ariaLabel}
      {...dataAttributes}
      {...rest}
    >
      {loading
        ? (
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          >
            <span className="visually-hidden">Loading...</span>
          </span>
        )
        : (
          <DIcon
            icon={icon}
            size={iconSize}
            useListenerSize={useIconSizeListener}
            familyClass={iconFamilyClass ?? familyClass}
            familyPrefix={iconFamilyPrefix ?? familyPrefix}
            materialStyle={iconMaterialStyle ?? materialStyle}
          />
        )}
    </button>
  );
}
