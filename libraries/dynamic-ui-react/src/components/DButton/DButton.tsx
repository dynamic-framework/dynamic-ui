/* eslint-disable react/button-has-type */
import { useMemo, useCallback } from 'react';
import classNames from 'classnames';

import type { MouseEvent } from 'react';

import DIcon from '../DIcon';
import { PREFIX_BS } from '../config';

import type {
  BaseProps,
  ButtonType,
  ButtonVariant,
  ClassMap,
  ComponentSize,
  CustomStyles,
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
    iconEnd,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    value,
    type = 'button',
    pill = false,
    loading = false,
    loadingAriaLabel,
    disabled = false,
    stopPropagationEnabled = true,
    className,
    form,
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

  const generateStyleVariables = useMemo<CustomStyles>(() => {
    if (pill) {
      return {
        [`--${PREFIX_BS}btn-component-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
        [`--${PREFIX_BS}btn-component-lg-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
        [`--${PREFIX_BS}btn-component-sm-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
      };
    }
    return {};
  }, [pill]);

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
      style={generateStyleVariables}
      type={type}
      disabled={isDisabled}
      onClick={clickHandler}
      aria-label={newAriaLabel}
      form={form}
      {...value && { value }}
    >
      {iconStart && (
        <DIcon
          icon={iconStart}
          familyClass={iconStartFamilyClass}
          familyPrefix={iconStartFamilyPrefix}
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
        />
      )}
    </button>
  );
}
