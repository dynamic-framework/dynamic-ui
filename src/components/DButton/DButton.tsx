import {
  forwardRef,
  useMemo,
  type MouseEvent,
  type ButtonHTMLAttributes,
  useCallback,
} from 'react';
import classNames from 'classnames';

import DIcon from '../DIcon';
import type {
  BaseProps,
  ButtonState,
  ButtonVariant,
  ClassMap,
  ComponentColor,
  ComponentSize,
  EndIconProps,
  StartIconProps,
} from '../interface';

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
  BaseProps,
  StartIconProps,
  EndIconProps {
  color?: ComponentColor;
  size?: ComponentSize;
  variant?: ButtonVariant;
  state?: ButtonState;
  text?: string;
  loading?: boolean;
  loadingAriaLabel?: string;
}

const DButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    color = 'primary',
    size,
    variant,
    state,
    text,
    children,
    iconStart,
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconStartMaterialStyle,
    iconEnd,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    iconEndMaterialStyle,
    loading = false,
    loadingAriaLabel,
    disabled = false,
    className,
    style,
    dataAttributes,
    onClick,
    type = 'button',
    ...rest
  } = props;

  const isDisabled = useMemo(
    () => disabled || loading,
    [disabled, loading],
  );

  const content = useMemo(
    () => children || text,
    [children, text],
  );

  const classes = useMemo<ClassMap>(() => {
    const variantClass = variant
      ? `btn-${variant}-${color}`
      : `btn-${color}`;

    return {
      btn: true,
      [variantClass]: true,
      [`btn-${size}`]: !!size,
      [state ?? '']: !!state,
      loading,
    };
  }, [variant, color, size, state, loading]);

  const ariaLabelProp = rest['aria-label'];
  const ariaLabel = useMemo(() => (
    loading
      ? loadingAriaLabel || ariaLabelProp || text
      : ariaLabelProp || text
  ), [loading, loadingAriaLabel, ariaLabelProp, text]);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  }, [disabled, loading, onClick]);

  return (
    <button
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames(classes, className)}
      style={style}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading}
      aria-disabled={isDisabled}
      onClick={handleClick}
      {...dataAttributes}
      {...rest}
    >
      {loading && (
        <span className="btn-loading">
          <span className="spinner-border spinner-border-sm" aria-hidden="true" />
          <span className="visually-hidden" role="status">Loading...</span>
        </span>
      )}

      {iconStart && (
        <DIcon
          icon={iconStart}
          familyClass={iconStartFamilyClass}
          familyPrefix={iconStartFamilyPrefix}
          materialStyle={iconStartMaterialStyle}
        />
      )}

      {content}

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
});

DButton.displayName = 'DButton';

export default DButton;
