import {
  CSSProperties,
  forwardRef,
} from 'react';
import classNames from 'classnames';

import type {
  ForwardedRef,
  MouseEvent,
  ReactNode,
  ComponentPropsWithoutRef,
} from 'react';

import { PREFIX_BS } from './config';
import DIcon from './DIcon';
import useProvidedRefOrCreate from '../hooks/useProvidedRefOrCreate';

import type {
  EndIcon,
  FamilyIcon,
  LabelIcon,
  StartIcon,
} from './interface';
import type { Merge } from '../types';

type NonHTMLInputElementProps =
& FamilyIcon
& LabelIcon
& StartIcon
& EndIcon
& {
  style?: CSSProperties;
  label?: string;
  loading?: boolean;
  hint?: string;
  invalid?: boolean;
  valid?: boolean;
  inputStart?: ReactNode;
  onIconStartClick?: (event: MouseEvent) => void;
  onIconEndClick?: (event: MouseEvent) => void;
};

type Props = Merge<ComponentPropsWithoutRef<'input'>, NonHTMLInputElementProps>;

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
    iconEnd,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    hint,
    invalid = false,
    valid = false,
    inputStart,
    onIconStartClick,
    onIconEndClick,
    ...inputProps
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useProvidedRefOrCreate(ref as React.RefObject<HTMLInputElement>);

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
              onClick={onIconStartClick}
              disabled={disabled || loading}
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
            aria-label={label}
            disabled={disabled || loading}
            readOnly={readOnly}
            aria-describedby={`${id}Add ${id}Hint`}
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
              onClick={onIconEndClick}
              disabled={disabled || loading}
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
