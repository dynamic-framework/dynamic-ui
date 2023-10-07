/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FocusEvent, MouseEvent } from 'react';
import classNames from 'classnames';
import { PREFIX_BS } from '../interfaces/component-config';
import { EndIcon, LabelIcon, StartIcon } from '../interfaces/component-interface';
import DIcon from './DIcon';

type Props = LabelIcon
& StartIcon
& EndIcon
& {
  id: string;
  name?: string;
  label?: string;
  options: Array<Record<string, unknown>>;
  isDisabled?: boolean;
  isLoading?: boolean;
  hint?: string;
  selectedOption?: Record<string, unknown>;
  valueExtractor?: (item: any) => string | number;
  labelExtractor?: (item: any) => string;
  onChange?: (selectedItem: unknown) => void;
  onBlur?: (event: FocusEvent) => void;
  onIconStartClick?: (event: MouseEvent) => void;
  onIconEndClick?: (event: MouseEvent) => void;
};

export default function DInputSelect({
  id,
  name,
  label = '',
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
  valueExtractor = (item: any) => item?.value,
  labelExtractor = (item: any) => item?.label,
  onChange,
  onBlur,
  onIconStartClick,
  onIconEndClick,
}: Props) {
  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const selected = options.find((option) => valueExtractor(option).toString() === value);
    onChange?.(selected);
  };

  const blurHandler = (event: FocusEvent) => {
    onBlur?.(event);
  };

  const iconStartClickHandler = (event: MouseEvent) => {
    onIconStartClick?.(event);
  };

  const iconEndClickHandler = (event: MouseEvent) => {
    onIconEndClick?.(event);
  };

  return (
    <div className="d-input">
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
          >
            {options.map((option) => (
              <option
                value={valueExtractor(option)}
                key={valueExtractor(option)}
                selected={
                  selectedOption
                  && valueExtractor(option) === valueExtractor(selectedOption)
                }
              >
                {labelExtractor(option)}
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
