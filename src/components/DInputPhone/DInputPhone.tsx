import {
  forwardRef,
  useCallback,
  useMemo,
  useId,
} from 'react';
import classNames from 'classnames';

import type {
  ReactNode,
  ComponentPropsWithoutRef,
  ForwardedRef,
  RefObject,
} from 'react';

import {
  CountrySelector,
  defaultCountries,
  ParsedCountry,
  usePhoneInput,
} from 'react-international-phone';
import { PREFIX_BS } from '../config';
import DIcon from '../DIcon';

import type {
  BaseProps,
  ComponentSize,
  EndIconProps,
  FamilyIconProps,
  LabelIconProps,
} from '../interface';
import type { Merge } from '../../types';
import { useProvidedRefOrCreate } from '../../hooks';
import { validatePhoneNumber } from '../../utils';

type OnChangeType = {
  phone: string;
  inputValue: string;
  country: ParsedCountry;
  isValid: boolean;
};

type NonHTMLInputElementProps =
& BaseProps
& FamilyIconProps
& LabelIconProps
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
  inputEnd?: ReactNode;
  onChange?: (value: OnChangeType) => void;
  onIconEndClick?: (value?: string) => void;
};

type Props = Merge<
Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'onWheel' | 'value' | 'type'>,
NonHTMLInputElementProps
>;

function DInputPhone(
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
    inputEnd,
    value,
    placeholder = '',
    dataAttributes,
    onChange,
    onIconEndClick,
    ...inputProps
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const innerRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement>);

  const innerId = useId();
  const id = useMemo(() => idProp || innerId, [idProp, innerId]);

  const handleOnIconEndClick = useCallback(() => {
    onIconEndClick?.(value);
  }, [onIconEndClick, value]);

  const ariaDescribedby = useMemo(() => (
    [
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
    invalid,
    valid,
    iconEnd,
    loading,
    inputEnd,
    hint,
  ]);

  const {
    inputValue,
    handlePhoneValueChange,
    inputRef,
    country,
    setCountry,
  } = usePhoneInput(
    {
      inputRef: innerRef,
      defaultCountry: 'cl',
      value,
      countries: defaultCountries,
      onChange: (data) => {
        onChange?.({ ...data, isValid: validatePhoneNumber(data.phone) });
      },
    },
  );

  const inputComponent = useMemo(() => (
    <input
      ref={inputRef}
      id={id}
      className={classNames('form-control', {
        'is-invalid': invalid,
        'is-valid': valid,
      })}
      disabled={disabled || loading}
      value={inputValue}
      onChange={handlePhoneValueChange}
      {...(floatingLabel || placeholder) && { placeholder: floatingLabel ? '' : placeholder }}
      {...ariaDescribedby && { 'aria-describedby': ariaDescribedby }}
      {...inputProps}
    />
  ), [ariaDescribedby, disabled, floatingLabel, handlePhoneValueChange,
    id, inputProps, inputRef, inputValue, invalid, loading, placeholder, valid]);

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
      className={classNames('d-input-phone', className)}
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
        <CountrySelector
          selectedCountry={country.iso2}
          onSelect={({ iso2 }) => setCountry(iso2)}
          className="input-group-text dropdown"
          disabled={disabled || loading}
          dropdownStyleProps={{
            className: 'dropdown-menu border',
            listItemClassName: 'dropdown-item',
            listItemDialCodeClassName: 'fw-bold',
          }}
        />
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

const ForwardedDInputPhone = forwardRef<HTMLInputElement, Props>(DInputPhone);
ForwardedDInputPhone.displayName = 'DInputPhone';
export default ForwardedDInputPhone;
