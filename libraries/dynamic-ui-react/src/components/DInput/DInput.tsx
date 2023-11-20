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
  inputStart?: ReactNode;
  onChange?: (value?: string) => void;
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
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconStartAriaLabel,
    iconStartTabIndex,
    iconEnd,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    iconEndAriaLabel,
    iconEndTabIndex,
    hint,
    invalid = false,
    valid = false,
    inputStart,
    value,
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

  return (
    <div
      className={classNames({
        'd-input': true,
        className: !!className,
      })}
      style={style}
    >
      {label && (
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
              disabled={disabled || loading}
              aria-label={iconStartAriaLabel}
              tabIndex={iconStartTabIndex}
            >
              {iconStart && (
                <DIcon
                  className="d-input-icon"
                  icon={iconStart}
                  familyClass={iconStartFamilyClass}
                  familyPrefix={iconStartFamilyPrefix}
                />
              )}
            </button>
          )}
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
            {...ariaDescribedby && { 'aria-describedby': ariaDescribedby }}
            {...inputProps}
          />
          {((invalid || valid) && !iconEnd && !loading) && (
            <span
              className="input-group-text"
              id={`${id}State`}
            >
              <DIcon
                className="d-input-validation-icon"
                icon={invalid ? 'exclamation-circle' : 'check'}
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
              disabled={disabled || loading}
              aria-label={iconEndAriaLabel}
              tabIndex={iconEndTabIndex}
            >
              {iconEnd && (
                <DIcon
                  className="d-input-icon"
                  icon={iconEnd}
                  familyClass={iconEndFamilyClass}
                  familyPrefix={iconEndFamilyPrefix}
                />
              )}
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
