/* eslint-disable react/button-has-type */
import { useMemo, useCallback } from 'react';
import classNames from 'classnames';

import type { MouseEvent } from 'react';

import DIcon from '../DIcon';

import type {
  BaseProps,
  ButtonType,
  ButtonVariant,
  ClassMap,
  ComponentColor,
  ComponentSize,
  FamilyIconProps,
  InputState,
} from '../interface';

type Props =
& BaseProps
& FamilyIconProps
& {
  id?: string;
  icon: string;
  size?: ComponentSize;
  variant?: ButtonVariant;
  color?: ComponentColor;
  state?: InputState;
  type?: ButtonType;
  loading?: boolean;
  loadingAriaLabel?: string;
  ariaLabel?: string;
  stopPropagationEnabled?: boolean;
  disabled?: boolean;
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
    className,
    variant,
    state,
    loadingAriaLabel,
    iconMaterialStyle,
    ariaLabel,
    color = 'primary',
    type = 'button',
    loading = false,
    disabled = false,
    href,
    target,
    rel,
    stopPropagationEnabled = true,
    style,
    iconFamilyClass,
    iconFamilyPrefix,
    dataAttributes,
    onClick,
  }: Props,
) {
  const generateClasses = useMemo<ClassMap>(() => {
    const variantClass = variant
      ? `btn-${variant}-${color}`
      : `btn-${color}`;

    return {
      'btn d-button-icon': true,
      [variantClass]: true,
      ...size && { [`btn-${size}`]: true },
      ...(state && state !== 'disabled') && { [state]: true },
      loading,
    };
  }, [variant, color, size, state, loading]);

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

  const newAriaLabel = useMemo(() => (
    loading
      ? (loadingAriaLabel || ariaLabel)
      : (ariaLabel)
  ), [ariaLabel, loading, loadingAriaLabel]);

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classNames(generateClasses, className)}
        style={style}
        onClick={clickHandler}
        aria-label={newAriaLabel}
        aria-disabled={isDisabled}
        id={id}
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
              familyClass={iconFamilyClass}
              familyPrefix={iconFamilyPrefix}
              materialStyle={iconMaterialStyle}
            />
          )}
      </a>
    );
  }

  return (
    <button
      className={classNames(generateClasses, className)}
      style={style}
      type={type}
      disabled={isDisabled}
      onClick={clickHandler}
      aria-label={newAriaLabel}
      id={id}
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
            familyClass={iconFamilyClass}
            familyPrefix={iconFamilyPrefix}
            materialStyle={iconMaterialStyle}
          />
        )}
    </button>
  );
}
