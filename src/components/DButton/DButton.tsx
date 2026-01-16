import {
  forwardRef,
  useMemo,
  type MouseEvent,
  type ButtonHTMLAttributes,
  useCallback,
  useRef,
  useState,
  useEffect,
} from 'react';
import classNames from 'classnames';

import DIcon from '../DIcon';
import type {
  BaseProps,
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
  href?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
  color?: ComponentColor;
  size?: ComponentSize;
  variant?: ButtonVariant;
  text?: string;
  loading?: boolean;
  loadingText?: string;
  loadingAriaLabel?: string;
}

const DButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>((props, ref) => {
  const {
    color = 'primary',
    size,
    variant,
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
    loadingText,
    loadingAriaLabel,
    disabled = false,
    className,
    style,
    dataAttributes,
    onClick,
    type = 'button',
    target,
    rel,
    ...rest
  } = props;

  const [buttonWidth, setButtonWidth] = useState<number>();
  const buttonRef = useRef<HTMLElement>(null);

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
      loading,
    };
  }, [variant, color, size, loading]);

  const ariaLabel = useMemo(() => {
    const ariaLabelProp = rest['aria-label'];
    return loading
      ? loadingAriaLabel || ariaLabelProp || text
      : ariaLabelProp || text;
  }, [loading, loadingAriaLabel, rest, text]);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (disabled || loading) {
        event.preventDefault();
        return;
      }
      onClick?.(event as MouseEvent<HTMLButtonElement>);
    },
    [disabled, loading, onClick],
  );

  useEffect(() => {
    if (!loading && buttonRef.current) {
      const width = buttonRef.current.offsetWidth;
      if (width > 0) setButtonWidth(width);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, iconEnd, iconStart]);

  if (props.href) {
    return (
      <a
        href={props.href}
        target={target}
        rel={rel}
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === 'function') ref(node);
          // eslint-disable-next-line max-len
          // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
          else if (ref) (ref as any).current = node;
        }}
        className={classNames(classes, className)}
        style={{
          ...style,
          ...(loading && buttonWidth
            ? { minWidth: `${buttonWidth}px` }
            : undefined),
        }}
        aria-label={ariaLabel}
        aria-busy={loading}
        aria-disabled={isDisabled}
        onClick={handleClick}
        {...dataAttributes}
      >
        {loading && (
          <span className="btn-loading">
            <span
              className="spinner-border spinner-border-sm"
              aria-hidden="true"
            />
            {loadingText && <span role="status">{loadingText}</span>}
          </span>
        )}

        {!loading && (
          <>
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
          </>
        )}
      </a>
    );
  }

  return (
    <button
      ref={(node) => {
        buttonRef.current = node;
        if (typeof ref === 'function') ref(node);
        // eslint-disable-next-line max-len
        // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        else if (ref) (ref as any).current = node;
      }}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames(classes, className)}
      style={{
        ...style,
        ...(loading && buttonWidth
          ? { minWidth: `${buttonWidth}px` }
          : undefined),
      }}
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
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          />
          {loadingText && <span role="status">{loadingText}</span>}
        </span>
      )}

      {!loading && (
        <>
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
        </>
      )}
    </button>
  );
});

DButton.displayName = 'DButton';

export default DButton;
