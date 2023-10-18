import { useCallback } from 'react';
import classNames from 'classnames';

import type {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
} from 'react';

import DIcon from './DIcon';
import { PREFIX_BS } from './config';

import type { EndIcon, LabelIcon, StartIcon } from './interface';

export type DefaultOption = {
  value: string | number;
  label: string;
};

export type Props<T> =
& LabelIcon
& StartIcon
& EndIcon
& {
  id: string;
  name?: string;
  label?: string;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  hint?: string;
  onBlur?: (event: FocusEvent) => void;
  onIconStartClick?: (event: MouseEvent) => void;
  onIconEndClick?: (event: MouseEvent) => void;
  options: Array<T>;
  selectedOption?: T;
  onChange?: (selectedItem: T | undefined) => void;
  valueExtractor?: (item: T) => string | number;
  labelExtractor?: (item: T) => string;
};

export default function DInputSelect<T extends object = DefaultOption>(
  {
    id,
    name,
    label = '',
    className,
    options,
    labelIcon,
    labelIconFamilyClass,
    labelIconFamilyPrefix,
    isDisabled = false,
    isLoading = false,
    iconStart,
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconEnd,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    hint,
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

  return (
    <div className={classNames('d-input', className)}>
      {label && (
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
      )}
      <div className="d-input-control">
        <div className={classNames({
          'input-group': true,
          disabled: isDisabled || isLoading,
        })}
        >
          {iconStart && (
            <button
              type="button"
              className="input-group-text"
              id={`${id}Start`}
              onClick={iconStartClickHandler}
              disabled={isDisabled || isLoading}
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
          <select
            id={id}
            name={name}
            className="form-select"
            aria-label={label}
            disabled={isDisabled || isLoading}
            aria-describedby={`${id}Add ${id}Hint`}
            onChange={changeHandler}
            onBlur={blurHandler}
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
          {iconEnd && !isLoading && (
            <button
              type="button"
              className="input-group-text"
              id={`${id}End`}
              onClick={iconEndClickHandler}
              disabled={isDisabled || isLoading}
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
          {isLoading && (
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
