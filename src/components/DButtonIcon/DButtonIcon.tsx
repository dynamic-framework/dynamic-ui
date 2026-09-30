import { useMemo, useCallback } from 'react';
import classNames from 'classnames';

import type { MouseEvent, ReactNode } from 'react';

import DIcon from '../DIcon';
import { resolveRole } from '../roles';

import type {
  BaseProps,
  ButtonVariant,
  ComponentColor,
  ComponentSize,
  FamilyIconProps,
  InputState,
} from '../interface';

type Props =
  BaseProps &
  FamilyIconProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: string;
    size?: ComponentSize;
    variant?: ButtonVariant;
    color?: ComponentColor;
    state?: InputState;
    loading?: boolean;
    loadingAriaLabel?: string;
    loadingLabel?: string;
    stopPropagationEnabled?: boolean;
    href?: string;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
    onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  };

/**
 * An icon-only button.
 *
 * 3.x has no stylesheet of its own for this: it renders `.df-button` with
 * `data-icon-only`, which `src/css/components/button.css` already squares off.
 * 2.x needed a `.d-button-icon` class alongside `.btn` plus its own rules; the
 * only real difference is that the padding is symmetric, and that is one
 * attribute.
 */
export default function DButtonIcon(
  {
    id,
    icon,
    size,
    className,
    variant = 'solid',
    state,
    loadingAriaLabel,
    loadingLabel = 'Loading…',
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
  const isDisabled = useMemo(
    () => state === 'disabled' || loading || disabled,
    [state, loading, disabled],
  );

  const dataProps = useMemo(() => ({
    'data-variant': variant,
    'data-color': resolveRole(color),
    'data-icon-only': '',
    ...(size ? { 'data-size': size } : {}),
    ...(loading ? { 'data-loading': '' } : {}),
    // `hover`, `active` and `focus-visible` let a story or a test pin a visual
    // state. 2.x applied them as bare class names — `.hover`, `.active` —
    // which are about as collision-prone as a class name gets in a page that
    // also carries a client's CSS. They are `.df-*` now.
    ...(state && state !== 'disabled' ? { 'data-state': state } : {}),
  }), [variant, color, size, loading, state]);

  const stateClass = useMemo(() => {
    if (!state || state === 'disabled') return undefined;
    return `df-${state}`;
  }, [state]);

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
    () => (loading ? loadingAriaLabel || ariaLabelProp : ariaLabelProp),
    [loading, loadingAriaLabel, ariaLabelProp],
  );

  const body: ReactNode = loading
    ? (
      <span className="df-button-spinner">
        <span className="df-spinner" aria-hidden="true" />
        <span className="df-sr-only" role="status">{loadingLabel}</span>
      </span>
    )
    : (
      <DIcon
        className="df-button-icon"
        icon={icon}
        familyClass={iconFamilyClass}
        familyPrefix={iconFamilyPrefix}
        materialStyle={iconMaterialStyle}
      />
    );

  if (href) {
    return (
      <a
        id={id}
        href={isDisabled ? undefined : href}
        target={target}
        rel={rel}
        className={classNames('df-button', stateClass, className)}
        style={style}
        onClick={clickHandler}
        aria-label={ariaLabel}
        aria-busy={loading}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : undefined}
        {...dataProps}
        {...dataAttributes}
      >
        {body}
      </a>
    );
  }

  return (
    <button
      id={id}
      // eslint-disable-next-line react/button-has-type
      type={rest.type ?? 'button'}
      className={classNames('df-button', stateClass, className)}
      style={style}
      disabled={isDisabled}
      onClick={clickHandler}
      aria-label={ariaLabel}
      aria-busy={loading}
      {...dataProps}
      {...dataAttributes}
      {...rest}
    >
      {body}
    </button>
  );
}
