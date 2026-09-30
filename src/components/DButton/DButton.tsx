import {
  forwardRef,
  useMemo,
  useCallback,
  type MouseEvent,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import classNames from 'classnames';

import DIcon from '../DIcon';
import { useResponsiveProp, ResponsiveProp } from '../../hooks/useResponsiveProp';
import { resolveRole } from '../roles';
import type {
  BaseProps,
  ButtonVariant,
  ComponentColor,
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
  size?: string | ResponsiveProp;
  variant?: ButtonVariant;
  text?: string;
  loading?: boolean;
  loadingText?: string;
  loadingAriaLabel?: string;
  /** Renders as a square icon button. The accessible name must come from `aria-label`. */
  iconOnly?: boolean;
  /** `pill` fully rounds the ends; `square` removes the radius. */
  shape?: 'pill' | 'square';
  fullWidth?: boolean;
}

const DButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>((props, ref) => {
  const {
    color = 'primary',
    size,
    variant = 'solid',
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
    iconOnly = false,
    shape,
    fullWidth = false,
    className,
    style,
    dataAttributes,
    onClick,
    type = 'button',
    target,
    rel,
    href,
    'aria-label': ariaLabelProp,
    ...rest
  } = props;

  const { responsivePropValue } = useResponsiveProp(true);
  const resolvedSize = useMemo(() => {
    if (!size) return undefined;
    if (typeof size === 'string') return size;
    return responsivePropValue(size);
  }, [responsivePropValue, size]);

  const isDisabled = useMemo(() => disabled || loading, [disabled, loading]);
  const content = useMemo(() => children || text, [children, text]);

  /**
   * The variant x colour matrix is a CSS concern, not a class-assembly one.
   *
   * 2.x built a class name per combination (`btn-soft-warning`) and shipped a
   * rule plus ~350 global custom properties for the full matrix. 3.x renders
   * the axes as data attributes and lets one generated selector per combination
   * fill the component's local custom properties. Same markup cost, a fraction
   * of the stylesheet, and the attributes map 1:1 onto the attributes the
   * framework-free custom element will take.
   */
  const dataProps = useMemo(() => ({
    'data-variant': variant,
    'data-color': resolveRole(color),
    ...(resolvedSize ? { 'data-size': resolvedSize } : {}),
    ...(shape ? { 'data-shape': shape } : {}),
    ...(iconOnly ? { 'data-icon-only': '' } : {}),
    ...(fullWidth ? { 'data-full-width': '' } : {}),
    ...(loading ? { 'data-loading': '' } : {}),
  }), [variant, color, resolvedSize, shape, iconOnly, fullWidth, loading]);

  const ariaLabel = useMemo(
    () => (loading
      ? loadingAriaLabel || ariaLabelProp || text
      : ariaLabelProp || text),
    [loading, loadingAriaLabel, text, ariaLabelProp],
  );

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

  /**
   * The label keeps its box while loading and is hidden with `visibility`, so
   * the button does not resize when the spinner appears.
   *
   * 2.x achieved that by measuring `offsetWidth` in an effect and pinning it as
   * an inline `min-width`, which cost a state variable, a ref, a layout read on
   * every content change, and produced a visible jump on the first render. The
   * CSS in `src/css/components/button.css` does it with no script at all.
   */
  const body: ReactNode = (
    <>
      {loading && (
        <span className="df-button-spinner">
          <span className="df-spinner" aria-hidden="true" />
          {loadingText && <span role="status">{loadingText}</span>}
        </span>
      )}
      <span className="df-button-label">
        {iconStart && (
          <DIcon
            className="df-button-icon"
            icon={iconStart}
            familyClass={iconStartFamilyClass}
            familyPrefix={iconStartFamilyPrefix}
            materialStyle={iconStartMaterialStyle}
          />
        )}
        {content}
        {iconEnd && (
          <DIcon
            className="df-button-icon"
            icon={iconEnd}
            familyClass={iconEndFamilyClass}
            familyPrefix={iconEndFamilyPrefix}
            materialStyle={iconEndMaterialStyle}
          />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={isDisabled ? undefined : href}
        target={target}
        rel={rel}
        className={classNames('df-button', className)}
        style={style}
        aria-label={ariaLabel}
        aria-busy={loading}
        aria-disabled={isDisabled}
        // An anchor has no `disabled`, so it stays in the tab order and must be
        // taken out of it explicitly when the button is disabled.
        tabIndex={isDisabled ? -1 : undefined}
        onClick={handleClick}
        {...dataProps}
        {...dataAttributes}
      >
        {body}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames('df-button', className)}
      style={style}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading}
      onClick={handleClick}
      {...dataProps}
      {...dataAttributes}
      {...rest}
    >
      {body}
    </button>
  );
});

DButton.displayName = 'DButton';

export default DButton;
