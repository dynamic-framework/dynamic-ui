/* eslint-disable react/button-has-type */
import { useMemo, useCallback } from 'react';
import classNames from 'classnames';

import type { MouseEvent, CSSProperties } from 'react';

import DIcon from '../DIcon';
import { PREFIX_BS } from '../config';

import type {
  ButtonType,
  ButtonVariant,
  ClassMap,
  ComponentSize,
  CustomStyles,
  EndIcon,
  InputState,
  StartIcon,
} from '../interface';

type Props = StartIcon & EndIcon & {
  id?: string;
  className?: string;
  style?: CSSProperties;
  theme?: string;
  size?: ComponentSize;
  variant?: ButtonVariant;
  state?: InputState;
  text?: string;
  value?: string;
  type?: ButtonType;
  isPill?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isStopPropagationEnabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function DButton(
  {
    theme = 'primary',
    size,
    variant,
    state,
    text = '',
    iconStart,
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconEnd,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    value,
    type = 'button',
    isPill = false,
    isLoading = false,
    isDisabled = false,
    isStopPropagationEnabled = true,
    className,
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
      loading: isLoading,
    };
  }, [variant, theme, size, state, isLoading]);

  const generateStyleVariables = useMemo<CustomStyles>(() => {
    if (isPill) {
      return {
        [`--${PREFIX_BS}btn-component-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
        [`--${PREFIX_BS}btn-component-lg-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
        [`--${PREFIX_BS}btn-component-sm-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
      };
    }
    return {};
  }, [isPill]);

  const clickHandler = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (isStopPropagationEnabled) {
      event.stopPropagation();
    }
    onClick?.(event);
  }, [isStopPropagationEnabled, onClick]);

  return (
    <button
      className={classNames(generateClasses, className)}
      style={generateStyleVariables}
      type={type}
      disabled={state === 'disabled' || isLoading || isDisabled}
      {...value && { value }}
      onClick={clickHandler}
    >
      {iconStart && (
        <DIcon
          icon={iconStart}
          familyClass={iconStartFamilyClass}
          familyPrefix={iconStartFamilyPrefix}
        />
      )}
      {(text && !isLoading) && (
        <span>{text}</span>
      )}
      {isLoading && (
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
