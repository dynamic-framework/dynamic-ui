import {
  forwardRef,
  useCallback,
  useMemo,
  useId,
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
  ComponentSize,
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
  size?: ComponentSize;
  invalid?: boolean;
  valid?: boolean;
  floatingLabel?: boolean;
  inputStart?: ReactNode;
  inputEnd?: ReactNode;
  onChange?: (value: string) => void;
  onIconStartClick?: (value?: string) => void;
  onIconEndClick?: (value?: string) => void;
};

type Props = Merge<
Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'value'>,
NonHTMLInputElementProps
>;

function DInput(
  {
    id: idProp,
    style,
    className,
    label = '',
    labelIcon,
    labelIconFamilyClass,
    labelIconFamilyPrefix,
    labelIconMaterialStyle,
    disabled = false,
    loading = false,
    iconFamilyClass,
    iconFamilyPrefix,
    iconMaterialStyle,
    iconStart,
    iconStartDisabled,
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconStartAriaLabel,
    iconStartTabIndex,
    iconStartMaterialStyle,
    iconEnd,
    iconEndDisabled,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    iconEndAriaLabel,
    iconEndTabIndex,
    iconEndMaterialStyle,
    hint,
    size,
    invalid = false,
    valid = false,
    floatingLabel = false,
    inputStart,
    inputEnd,
    value,
    placeholder = '',
    dataAttributes,
    onChange,
    onIconStartClick,
    onIconEndClick,
    ...inputProps
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement | null>);
  const innerId = useId();
  const id = useMemo(() => idProp || innerId, [idProp, innerId]);

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
      !!inputStart && `${id}InputStart`,
      !!iconStart && `${id}Start`,
      (invalid || valid) && !iconEnd && !loading && `${id}State`,
      (iconEnd && !loading) && `${id}End`,
      loading && `${id}Loading`,
      !!inputEnd && `${id}InputEnd`,
      !!hint && `${id}Hint`,
    ]
      .filter(Boolean)
      .join(' ')
  ), [
    id,
    inputStart,
    iconStart,
    invalid,
    valid,
    iconEnd,
    loading,
    inputEnd,
    hint,
  ]);

  const inputComponent = useMemo(() => (
    <input
      ref={inputRef}
      id={id}
      className={classNames('form-control', {
        'is-invalid': invalid,
        'is-valid': valid,
      })}
      disabled={disabled || loading}
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
    valid,
    value,
  ]);

  const labelComponent = useMemo(() => (
    <label htmlFor={id}>
      {label}
      {labelIcon && (
        <DIcon
          icon={labelIcon}
          size={`var(--${PREFIX_BS}label-font-size)`}
          familyClass={labelIconFamilyClass}
          familyPrefix={labelIconFamilyPrefix}
          materialStyle={labelIconMaterialStyle}
        />
      )}
    </label>
  ), [
    id,
    label,
    labelIcon,
    labelIconFamilyClass,
    labelIconFamilyPrefix,
    labelIconMaterialStyle,
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
      className={className}
      style={style}
      {...dataAttributes}
    >
      {label && !floatingLabel && labelComponent}
      <div
        className={classNames({
          [`input-group-${size}`]: !!size,
          'input-group': true,
          'has-validation': invalid || valid,
        })}
      >
        {!!inputStart && (
          <div className="input-group-text" id={`${id}InputStart`}>
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
            tabIndex={onIconStartClick ? iconStartTabIndex : -1}
          >
            <DIcon
              icon={iconStart}
              familyClass={iconStartFamilyClass}
              familyPrefix={iconStartFamilyPrefix}
              materialStyle={iconStartMaterialStyle}
            />
          </button>
        )}
        {dynamicComponent}
        {(iconEnd && !loading) && (
          <button
            type="button"
            className="input-group-text"
            id={`${id}End`}
            onClick={handleOnIconEndClick}
            disabled={disabled || loading || iconEndDisabled}
            aria-label={iconEndAriaLabel}
            tabIndex={onIconEndClick ? iconEndTabIndex : -1}
          >
            <DIcon
              icon={iconEnd}
              familyClass={iconEndFamilyClass}
              familyPrefix={iconEndFamilyPrefix}
              materialStyle={iconEndMaterialStyle}
            />
          </button>
        )}
        {loading && (
          <div className="input-group-text" id={`${id}Loading`}>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              data-testid="loading-spinner"
            >
              <span className="visually-hidden">Loading...</span>
            </span>
          </div>
        )}
        {!!inputEnd && (
          <div className="input-group-text" id={`${id}InputEnd`}>
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
  );
}

const ForwardedDInput = forwardRef<HTMLInputElement, Props>(DInput);
ForwardedDInput.displayName = 'DInput';
export default ForwardedDInput;
