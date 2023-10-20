import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo, useState,
} from 'react';
import currency from 'currency.js';

import type {
  ForwardedRef,
  FocusEvent,
  ComponentPropsWithoutRef,
  WheelEvent,
  ChangeEvent,
} from 'react';
import type { Options } from 'currency.js';

import DInput from './DInput';
import useProvidedRefOrCreate from '../hooks/useProvidedRefOrCreate';
import { PREFIX_BS } from './config';

import type {
  CustomStyles,
} from './interface';
import type { Merge } from '../types';

type NonDInputProps = {
  value?: number;
  minValue?: number;
  maxValue?: number;
  currencyOptions: Options;
  currencyCode?: string;
};

export type Props = Merge<Omit<ComponentPropsWithoutRef<typeof DInput>, 'value'>, NonDInputProps>;

export function DInputCurrencyBase(
  {
    value,
    minValue,
    maxValue,
    currencyOptions,
    currencyCode,
    invalid,
    onFocus,
    onBlur,
    onChange,
    ...inputProps
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useProvidedRefOrCreate(ref as React.RefObject<HTMLInputElement>);

  const valueFormatted = useMemo(() => {
    if (value === undefined) {
      return '';
    }
    return currency(value, { ...currencyOptions, symbol: '' }).format();
  }, [currencyOptions, value]);

  const [innerValue, setInnerValue] = useState(valueFormatted);

  const handleOnFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (inputRef.current) {
      if (event.currentTarget.value) {
        const currencyValue = currency(event.currentTarget.value, { ...currencyOptions, symbol: '' });
        setInnerValue((currencyValue.intValue / 100).toString());
      }

      inputRef.current.type = 'number';
    }
    onFocus?.(event);
  }, [currencyOptions, inputRef, onFocus]);

  const handleOnBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (inputRef.current) {
      inputRef.current.type = 'text';

      if (event.currentTarget.value) {
        setInnerValue(currency(event.currentTarget.value, { ...currencyOptions, symbol: '' }).format());
      }
    }
    onBlur?.(event);
  }, [currencyOptions, inputRef, onBlur]);

  const handleOnWheel = useCallback((event: WheelEvent<HTMLInputElement>) => {
    event.stopPropagation();
    inputRef.current?.blur();
  }, [inputRef]);

  const generateStyleVariables = useMemo<CustomStyles>(() => ({
    [`--${PREFIX_BS}input-currency-component-symbol-color`]: `var(--${PREFIX_BS}secondary)`,
    [`--${PREFIX_BS}input-currency-symbol-color`]: `var(--${PREFIX_BS}input-currency-component-symbol-color)`,
  }), []);

  const generateSymbolStyleVariables = useMemo(() => ({
    color: `var(--${PREFIX_BS}m-input-currency-symbol-color)`,
  }), []);

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(event.currentTarget.value);
    onChange?.(event);
  }, [onChange]);

  useEffect(() => {
    setInnerValue(valueFormatted);
  }, [valueFormatted]);

  return (
    <DInput
      ref={inputRef}
      value={innerValue}
      onChange={handleOnChange}
      style={generateStyleVariables}
      inputMode="decimal"
      pattern="^[0-9]"
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onWheel={handleOnWheel}
      inputStart={(
        <span
          slot="input-start"
          style={generateSymbolStyleVariables}
        >
          {currencyCode || currencyOptions.symbol}
        </span>
      )}
      {...inputProps}
    />
  );
}

const ForwardedDInputCurrencyBase = forwardRef<HTMLInputElement, Props>(DInputCurrencyBase);
ForwardedDInputCurrencyBase.displayName = 'DInputCurrencyBase';
export default ForwardedDInputCurrencyBase;
