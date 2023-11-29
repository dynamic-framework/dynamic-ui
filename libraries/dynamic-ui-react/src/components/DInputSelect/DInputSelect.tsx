import { useCallback, useMemo } from 'react';
import classNames from 'classnames';

import type {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
} from 'react';

import DIcon from '../DIcon';
import { PREFIX_BS } from '../config';

import type {
  BaseProps,
  EndIconProps,
  LabelIconProps,
  StartIconProps,
} from '../interface';

export type DefaultOption = {
  value: string | number;
  label: string;
};

export type Props<T> =
& BaseProps
& LabelIconProps
& StartIconProps
& EndIconProps
& {
  id: string;
  name?: string;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  hint?: string;
  onBlur?: (event: FocusEvent) => void;
  onIconStartClick?: (event: MouseEvent) => void;
  onIconEndClick?: (event: MouseEvent) => void;
  options: Array<T>;
  selectedOption?: T;
  onChange?: (selectedItem: T | undefined) => void;
  valueExtractor?: (item: T) => string | number;
  labelExtractor?: (item: T) => string;
  floatingLabel?: boolean;
};

export default function DInputSelect<T extends object = DefaultOption>(
  {
    id,
    name,
    label = '',
    className,
    style,
    options,
    labelIcon,
    labelIconFamilyClass,
    labelIconFamilyPrefix,
    disabled = false,
    loading = false,
    iconStart,
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconStartAriaLabel,
    iconEnd,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    iconEndAriaLabel,
    hint,
    floatingLabel = false,
    selectedOption,
    valueExtractor,
    labelExtractor,
    onChange,
    onBlur,
    onIconStartClick,
    onIconEndClick,
  }: Props<T>,
) {
  const internalValueExtractor = useCallback((option: T | DefaultOption) => {
    if (valueExtractor) {
      return valueExtractor(option as T);
    }

    if ('value' in option) {
      return option?.value;
    }

    throw new Error('Must provide a valueExtractor for custom object forms');
  }, [valueExtractor]);

  const internalLabelExtractor = useCallback((option: T | DefaultOption) => {
    if (labelExtractor) {
      return labelExtractor(option as T);
    }

    if ('label' in option) {
      return option?.label;
    }

    throw new Error('Must provide a labelExtractor for custom object forms');
  }, [labelExtractor]);

  const changeHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const selected = options
      .find((option) => internalValueExtractor(option).toString() === event.currentTarget.value);
    onChange?.(selected);
  }, [onChange, options, internalValueExtractor]);

  const blurHandler = useCallback((event: FocusEvent) => {
    onBlur?.(event);
  }, [onBlur]);

  const iconStartClickHandler = useCallback((event: MouseEvent) => {
    onIconStartClick?.(event);
  }, [onIconStartClick]);

  const iconEndClickHandler = useCallback((event: MouseEvent) => {
    onIconEndClick?.(event);
  }, [onIconEndClick]);

  const ariaDescribedby = useMemo(() => (
    [
      iconStart && `${id}Start`,
      hint && `${id}Hint`,
      iconEnd && `${id}End`,
    ]
      .filter(Boolean)
      .join(' ')
  ), [id, iconStart, iconEnd, hint]);

  const selectComponent = useMemo(() => (
    <select
      id={id}
      name={name}
      className="form-select"
      aria-label={label}
      disabled={disabled || loading}
      onChange={changeHandler}
      onBlur={blurHandler}
      {...ariaDescribedby && { 'aria-describedby': ariaDescribedby }}
      {...selectedOption && { value: internalValueExtractor(selectedOption) }}
    >
      {options.map((option) => (
        <option
          value={internalValueExtractor(option)}
          key={internalValueExtractor(option)}
        >
          {internalLabelExtractor(option)}
        </option>
      ))}
    </select>
  ), [
    ariaDescribedby,
    blurHandler,
    changeHandler,
    disabled,
    id,
    internalLabelExtractor,
    internalValueExtractor,
    label,
    loading,
    name,
    options,
    selectedOption,
  ]);

  const labelComponent = useMemo(() => (
    <label htmlFor={id}>
      {label}
      {labelIcon && (
        <DIcon
          className="mdinput-icon"
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
          {selectComponent}
          {labelComponent}
        </div>
      );
    } return selectComponent;
  }, [floatingLabel, labelComponent, selectComponent]);

  return (
    <div
      className={classNames('d-input', className)}
      style={style}
    >
      {label && !floatingLabel && (
        labelComponent
      )}
      <div className="d-input-control">
        <div className={classNames({
          'input-group': true,
          disabled: disabled || loading,
        })}
        >
          {iconStart && (
            <button
              type="button"
              className="input-group-text"
              id={`${id}Start`}
              onClick={iconStartClickHandler}
              disabled={disabled || loading}
              aria-label={iconStartAriaLabel}
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
          {dynamicComponent}
          {iconEnd && !loading && (
            <button
              type="button"
              className="input-group-text"
              id={`${id}End`}
              onClick={iconEndClickHandler}
              disabled={disabled || loading}
              aria-label={iconEndAriaLabel}
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
            <div className="input-group-text form-control-icon loading">
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
