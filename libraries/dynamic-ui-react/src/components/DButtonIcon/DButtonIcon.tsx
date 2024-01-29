/* eslint-disable react/button-has-type */
import { useMemo, useCallback } from 'react';
import classNames from 'classnames';

import type { MouseEvent } from 'react';

import DIcon from '../DIcon';

import type {
  BaseProps,
  ButtonType,
  ClassMap,
  FamilyIconProps,
  InputState,
} from '../interface';

type Props =
& BaseProps
& FamilyIconProps
& {
  id?: string;
  icon: string;
  theme?: string;
  state?: InputState;
  type?: ButtonType;
  loading?: boolean;
  loadingAriaLabel?: string;
  ariaLabel?: string;
  stopPropagationEnabled?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function DButtonIcon(
  {
    id,
    icon,
    className,
    state,
    loadingAriaLabel,
    ariaLabel,
    theme = 'primary',
    type = 'button',
    loading = false,
    disabled = false,
    stopPropagationEnabled = true,
    style,
    iconFamilyClass,
    iconFamilyPrefix,
    onClick,
  }: Props,
) {
  const generateClasses = useMemo<ClassMap>(() => ({
    btn: true,
    [`btn-${theme}`]: true,
    ...(state && state !== 'disabled') && { [state]: true },
    loading,
  }), [theme, state, loading]);

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
      ? (loadingAriaLabel || ariaLabel)
      : (ariaLabel)
  ), [ariaLabel, loading, loadingAriaLabel]);

  return (
    <button
      className={classNames(generateClasses, className)}
      style={style}
      type={type}
      disabled={isDisabled}
      onClick={clickHandler}
      aria-label={newAriaLabel}
      id={id}
    >
      <DIcon
        icon={icon}
        familyClass={iconFamilyClass}
        familyPrefix={iconFamilyPrefix}
      />
      {loading && (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        >
          <span className="visually-hidden">Loading...</span>
        </span>
      )}
    </button>
  );
}
