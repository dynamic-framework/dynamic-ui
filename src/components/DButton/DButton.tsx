/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import { useCallback, useMemo } from 'react';

import type { MouseEvent, ReactNode } from 'react';

import DIcon from '../DIcon';

import type {
  BaseProps,
  ButtonType,
  ButtonVariant,
  ClassMap,
  ComponentColor,
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
  color?: ComponentColor;
  size?: ComponentSize;
  variant?: ButtonVariant;
  state?: InputState;
  text?: string;
  children?: ReactNode;
  ariaLabel?: string;
  value?: string;
  type?: ButtonType;
  loadingText?: string;
  loading?: boolean;
  loadingAriaLabel?: string;
  disabled?: boolean;
  stopPropagationEnabled?: boolean;
  form?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function DButton(
  {
    color = 'primary',
    size,
    variant,
    state,
    text = '',
    children,
    ariaLabel,
    iconStart,
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconStartMaterialStyle,
    iconEnd,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    iconEndMaterialStyle,
    loadingText,
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
      ? `btn-${variant}-${color}`
      : `btn-${color}`;

    return {
      btn: true,
      [variantClass]: true,
      ...size && { [`btn-${size}`]: true },
      ...(state && state !== 'disabled') && { [state]: true },
      loading,
    };
  }, [variant, color, size, state, loading]);

  const clickHandler = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (stopPropagationEnabled) {
      event.stopPropagation();
    }
    onClick?.(event);
  }, [stopPropagationEnabled, onClick]);

  const isDisabled = useMemo(() => (
    state === 'disabled' || loading || disabled
  ), [state, loading, disabled]);

  const content = children || text;

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
      {loading && (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        >
          <span className="visually-hidden">Loading...</span>
        </span>
      )}
      <span>{loading && loadingText ? loadingText : content}</span>
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
