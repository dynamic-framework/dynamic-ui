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
  CountryIso2,
  defaultCountries,
  parseCountry,
  ParsedCountry,
  usePhoneInput,
} from 'react-international-phone';

import DIcon from '../DIcon';
import DCountrySelect from './DCountrySelect';

import type { DCountrySelectI18n } from './DCountrySelect';

import type {
  BaseProps,
  ComponentSize,
  EndIconProps,
  FamilyIconProps,
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
  /**
   * The country picker's strings, for a page not in English.
   *
   * This was `countrySelectorProps`, an `Omit` of the library's own prop type
   * — so the picker's whole API was a third party's, and the one thing a
   * consumer actually needed from it (its words in their language) was buried
   * in it. The picker is ours now; these are the three strings it says.
   */
  countryI18n?: Partial<DCountrySelectI18n>;
  /** ISO codes pinned to the top of the country list, in the order given. */
  preferredCountries?: string[];
  /** The spinner's accessible name, for the same reason. */
  loadingAriaLabel?: string;
  filteredCountries?: CountryIso2[];
  defaultCountry?: CountryIso2;
};

type Props = Merge<
Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'onWheel' | 'value' | 'type' | 'inputMode' | 'pattern'>,
NonHTMLInputElementProps
>;

function DInputPhone(
  {
    id: idProp,
    style,
    className,
    label = '',
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
    countryI18n,
    preferredCountries,
    loadingAriaLabel = 'Loading',
    filteredCountries,
    defaultCountry = 'cl',
    ...inputProps
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const innerRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement | null>);

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

  const countries = useMemo(() => {
    if (filteredCountries === undefined) {
      return defaultCountries;
    }

    return defaultCountries.filter((country) => {
      const { iso2 } = parseCountry(country);
      return filteredCountries.includes(iso2);
    });
  }, [filteredCountries]);

  /*
   * Parsed once, not on every render.
   *
   * `countries.map(parseCountry)` allocated 217 objects per render and handed
   * the picker a new array identity each time, which defeated any memoisation
   * downstream of it — and this component re-renders on every keystroke,
   * because `usePhoneInput` holds the value.
   */
  const parsedCountries = useMemo(() => countries.map(parseCountry), [countries]);

  const {
    inputValue,
    handlePhoneValueChange,
    inputRef,
    country,
    setCountry,
  } = usePhoneInput(
    {
      inputRef: innerRef,
      defaultCountry,
      value,
      countries,
      onChange: (data) => {
        onChange?.({ ...data, isValid: validatePhoneNumber(data.phone) });
      },
    },
  );

  const inputComponent = useMemo(() => (
    <input
      ref={inputRef}
      id={id}
      className="df-input"
      /*
       * `aria-invalid` as well as `data-invalid`, matching `DInput`.
       *
       * 2.x used Bootstrap's `is-invalid`, which is a styling hook and says
       * nothing to assistive technology — a screen reader user heard the
       * label, the value and the hint with no indication the field was
       * wrong, and the one cue that it WAS is the colour.
       */
      {...invalid && { 'data-invalid': '', 'aria-invalid': true }}
      {...valid && { 'data-valid': '' }}
      disabled={disabled || loading}
      value={inputValue}
      onChange={handlePhoneValueChange}
      inputMode="tel"
      {...(floatingLabel || placeholder) && { placeholder: floatingLabel ? '' : placeholder }}
      {...ariaDescribedby && { 'aria-describedby': ariaDescribedby }}
      {...inputProps}
    />
  ), [
    ariaDescribedby,
    disabled,
    floatingLabel,
    handlePhoneValueChange,
    id,
    inputProps,
    inputRef,
    inputValue,
    invalid,
    loading,
    placeholder,
    valid,
  ]);

  const labelComponent = useMemo(() => (
    <label className="df-label" htmlFor={id}>
      {label}
    </label>
  ), [
    id,
    label,
  ]);

  const dynamicComponent = useMemo(() => {
    if (floatingLabel) {
      return (
        <div className="df-input-floating">
          {inputComponent}
          {labelComponent}
        </div>
      );
    }
    return inputComponent;
  }, [
    floatingLabel,
    inputComponent,
    labelComponent,
  ]);

  return (
    <div
      className={classNames('df-phone', className)}
      style={style}
      {...dataAttributes}
    >
      {label && !floatingLabel && labelComponent}
      <div
        /*
         * The v3 group, which this never had.
         *
         * It rendered Bootstrap's `input-group`, `input-group-text`,
         * `form-text` and `spinner-border` — names the 3.x stylesheet does not
         * define — so the control came out unstyled. `css:usage` exempts this
         * component as "still wrapping a third party", which is why nothing
         * said so.
         */
        className="df-input-group"
        {...size && { 'data-size': size }}
      >
        <DCountrySelect
          countries={parsedCountries}
          selected={country.iso2}
          onSelect={setCountry}
          disabled={disabled || loading}
          i18n={countryI18n}
          preferredCountries={preferredCountries}
        />
        {dynamicComponent}
        {(iconEnd && !loading) && (
          <button
            type="button"
            className="df-input-group-addon"
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
          <div className="df-input-group-addon" id={`${id}Loading`}>
            <span className="df-spinner" role="status" data-size="sm">
              <span className="df-sr-only">{loadingAriaLabel}</span>
            </span>
          </div>
        )}
        {!!inputEnd && (
          <div className="df-input-group-addon" id={`${id}InputEnd`}>
            {inputEnd}
          </div>
        )}
      </div>
      {hint && (
        <div
          className="df-help"
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
