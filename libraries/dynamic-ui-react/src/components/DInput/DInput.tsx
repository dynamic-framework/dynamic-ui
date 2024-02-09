import {
  forwardRef,
  useCallback,
  useMemo,
} from 'react';
import classNames from 'classnames';

import type {
  RefObject,
  ForwardedRef,
  ReactNode,
  ComponentPropsWithoutRef,
  ChangeEvent,
} from 'react';

import { PREFIX_BS } from '../config';
import DIcon from '../DIcon';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate';

import type {
  BaseProps,
  EndIconProps,
  FamilyIconProps,
  LabelIconProps,
  StartIconProps,
} from '../interface';
import type { Merge } from '../../types';

type NonHTMLInputElementProps =
& BaseProps
& FamilyIconProps
& LabelIconProps
& StartIconProps
& EndIconProps
& {
  value?: string;
  label?: string;
  loading?: boolean;
  hint?: string;
  invalid?: boolean;
  valid?: boolean;
  floatingLabel?: boolean;
  inputStart?: ReactNode;
  inputEnd?: ReactNode;
  invalidIcon?: string;
  validIcon?: string;
  onChange?: (value: string) => void;
  onIconStartClick?: (value?: string) => void;
  onIconEndClick?: (value?: string) => void;
};

type Props = Merge<Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'value'>, NonHTMLInputElementProps>;

function DInput(
  {
    id,
    style,
    className,
    label = '',
    labelIcon,
    labelIconFamilyClass,
    labelIconFamilyPrefix,
    disabled = false,
    readOnly = false,
    loading = false,
    iconFamilyClass,
    iconFamilyPrefix,
    iconStart,
    iconStartDisabled,
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconStartAriaLabel,
    iconStartTabIndex,
    iconEnd,
    iconEndDisabled,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    iconEndAriaLabel,
    iconEndTabIndex,
    invalidIcon = 'exclamation-circle',
    validIcon = 'check',
    hint,
    invalid = false,
    valid = false,
    floatingLabel = false,
    inputStart,
    inputEnd,
    value,
    placeholder = '',
    onChange,
    onIconStartClick,
    onIconEndClick,
    ...inputProps
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement>);

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value);
  }, [onChange]);

  const handleOnIconStartClick = useCallback(() => {
    onIconStartClick?.(value);
  }, [onIconStartClick, value]);

  const handleOnIconEndClick = useCallback(() => {
    onIconEndClick?.(value);
  }, [onIconEndClick, value]);

  const ariaDescribedby = useMemo(() => (
    [
      iconStart && `${id}Start`,
      hint && `${id}Hint`,
      iconEnd && `${id}End`,
    ]
      .filter(Boolean)
      .join(' ')
  ), [id, iconStart, iconEnd, hint]);

  const inputComponent = useMemo(() => (
    <input
      ref={inputRef}
      id={id}
      className={classNames('form-control', {
        'is-invalid': invalid,
        'is-valid': valid,
      })}
      disabled={disabled || loading}
      readOnly={readOnly}
      value={value}
      onChange={handleOnChange}
      {...(floatingLabel || placeholder) && { placeholder: floatingLabel ? '' : placeholder }}
      {...ariaDescribedby && { 'aria-describedby': ariaDescribedby }}
      {...inputProps}
    />
  ), [
    ariaDescribedby,
    disabled,
    handleOnChange,
    id,
    inputProps,
    inputRef,
    invalid,
    loading,
    placeholder,
    floatingLabel,
    readOnly,
    valid,
    value,
  ]);

  const labelComponent = useMemo(() => (
    <label htmlFor={id}>
      {label}
      {labelIcon && (
        <DIcon
          className="d-input-icon"
          icon={labelIcon}
          size={`var(--${PREFIX_BS}input-label-font-size)`}
          familyClass={labelIconFamilyClass}
          familyPrefix={labelIconFamilyPrefix}
        />
      )}
    </label>
  ), [
    id,
    label,
    labelIcon,
    labelIconFamilyClass,
    labelIconFamilyPrefix,
  ]);

  const dynamicComponent = useMemo(() => {
    if (floatingLabel) {
      return (
        <div className="form-floating">
          {inputComponent}
          {labelComponent}
        </div>
      );
    }
    return inputComponent;
  }, [floatingLabel, inputComponent, labelComponent]);

  return (
    <div
      className={classNames({
        'd-input': true,
        ...className && { [className]: true },
      })}
      style={style}
    >
      {label && !floatingLabel && (
        labelComponent
      )}
      <div className="d-input-control">
        <div
          className={classNames({
            'input-group': true,
            'has-validation': invalid,
            disabled: disabled || loading,
          })}
        >
          {!!inputStart && (
            <div className="input-group-text">
              {inputStart}
            </div>
          )}
          {iconStart && (
            <button
              type="button"
              className="input-group-text"
              id={`${id}Start`}
              onClick={handleOnIconStartClick}
              disabled={disabled || loading || iconStartDisabled}
              aria-label={iconStartAriaLabel}
              tabIndex={iconStartTabIndex}
            >
              <DIcon
                className="d-input-icon"
                icon={iconStart}
                familyClass={iconStartFamilyClass}
                familyPrefix={iconStartFamilyPrefix}
              />
            </button>
          )}
          {dynamicComponent}
          {((invalid || valid) && !iconEnd && !loading) && (
            <span
              className="input-group-text"
              id={`${id}State`}
            >
              <DIcon
                className="d-input-validation-icon"
                icon={invalid ? invalidIcon : validIcon}
                familyClass={iconFamilyClass}
                familyPrefix={iconFamilyPrefix}
              />
            </span>
          )}
          {(iconEnd && !loading) && (
            <button
              type="button"
              className="input-group-text"
              id={`${id}End`}
              onClick={handleOnIconEndClick}
              disabled={disabled || loading || iconEndDisabled}
              aria-label={iconEndAriaLabel}
              tabIndex={iconEndTabIndex}
            >
              <DIcon
                className="d-input-icon"
                icon={iconEnd}
                familyClass={iconEndFamilyClass}
                familyPrefix={iconEndFamilyPrefix}
              />
            </button>
          )}
          {loading && (
            <div className="input-group-text d-input-icon">
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              >
                <span className="visually-hidden">Loading...</span>
              </span>
            </div>
          )}
          {!!inputEnd && (
            <div className="input-group-text">
              {inputEnd}
            </div>
          )}
        </div>
        {hint && (
          <div
            className="form-text"
            id={`${id}Hint`}
          >
            {hint}
          </div>
        )}
      </div>
    </div>
  );
}

const ForwardedDInput = forwardRef<HTMLInputElement, Props>(DInput);
ForwardedDInput.displayName = 'DInput';
export default ForwardedDInput;
