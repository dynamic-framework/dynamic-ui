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
  ComponentSize,
  EndIconProps,
  InputState,
  StartIconProps,
} from '../interface';

type Props =
& BaseProps
& StartIconProps
& EndIconProps
& {
  id?: string;
  theme?: string;
  size?: ComponentSize;
  variant?: ButtonVariant;
  state?: InputState;
  text?: string;
  ariaLabel?: string;
  value?: string;
  type?: ButtonType;
  pill?: boolean;
  loading?: boolean;
  loadingAriaLabel?: string;
  disabled?: boolean;
  stopPropagationEnabled?: boolean;
  form?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function DButton(
  {
    theme = 'primary',
    size,
    variant,
    state,
    text = '',
    ariaLabel,
    iconStart,
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconStartMaterialStyle,
    iconEnd,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    iconEndMaterialStyle,
    value,
    type = 'button',
    loading = false,
    loadingAriaLabel,
    disabled = false,
    stopPropagationEnabled = true,
    className,
    style,
    form,
    dataAttributes,
    onClick,
  }: Props,
) {
  const generateClasses = useMemo<ClassMap>(() => {
    const variantClass = variant
      ? `btn-${variant}-${theme}`
      : `btn-${theme}`;

    return {
      btn: true,
      [variantClass]: true,
      ...size && { [`btn-${size}`]: true },
      ...(state && state !== 'disabled') && { [state]: true },
      loading,
    };
  }, [variant, theme, size, state, loading]);

  const clickHandler = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (stopPropagationEnabled) {
      event.stopPropagation();
    }
    onClick?.(event);
  }, [stopPropagationEnabled, onClick]);

  const isDisabled = useMemo(() => (
    state === 'disabled' || loading || disabled
  ), [state, loading, disabled]);

  const newAriaLabel = useMemo(() => (
    loading
      ? (loadingAriaLabel || ariaLabel || text)
      : (ariaLabel || text)
  ), [loading, loadingAriaLabel, ariaLabel, text]);

  return (
    <button
      className={classNames(generateClasses, className)}
      style={style}
      type={type}
      disabled={isDisabled}
      onClick={clickHandler}
      aria-label={newAriaLabel}
      form={form}
      {...dataAttributes}
      {...value && { value }}
    >
      {iconStart && (
        <DIcon
          icon={iconStart}
          familyClass={iconStartFamilyClass}
          familyPrefix={iconStartFamilyPrefix}
          materialStyle={iconStartMaterialStyle}
        />
      )}
      {(text && !loading) && (
        <span>{text}</span>
      )}
      {loading && (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        >
          <span className="visually-hidden">Loading...</span>
        </span>
      )}
      {iconEnd && (
        <DIcon
          icon={iconEnd}
          familyClass={iconEndFamilyClass}
          familyPrefix={iconEndFamilyPrefix}
          materialStyle={iconEndMaterialStyle}
        />
      )}
    </button>
  );
}
