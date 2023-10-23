import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import currency from 'currency.js';

import type {
  RefObject,
  ForwardedRef,
  FocusEvent,
  WheelEvent,
} from 'react';
import type { Options } from 'currency.js';

import useProvidedRefOrCreate from './useProvidedRefOrCreate';
import { PREFIX_BS } from '../components/config';

import type { CustomStyles } from '../components/interface';

export default function useInputCurrency(
  currencyOptions: Options,
  value?: number,
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void,
  onChange?: (value?: number) => void,
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void,
  ref?: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement>);

  const valueFormatted = useMemo(() => {
    if (value === undefined) {
      return '';
    }
    return currency(value, { ...currencyOptions, symbol: '' }).format();
  }, [currencyOptions, value]);

  const [innerValue, setInnerValue] = useState<string | undefined>(valueFormatted);
  const [innerType, setInnerType] = useState('text');

  const handleOnFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (inputRef.current) {
      if (event.currentTarget.value) {
        const currencyValue = currency(event.currentTarget.value, { ...currencyOptions, symbol: '' });
        setInnerValue((currencyValue.intValue / 100).toString());
      }

      setInnerType('number');
    }
    onFocus?.(event);
  }, [currencyOptions, inputRef, onFocus]);

  const handleOnBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (inputRef.current) {
      setInnerType('text');

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

  const handleOnChange = useCallback((newValue?: string) => {
    setInnerValue(newValue);
    onChange?.(newValue !== undefined ? Number(newValue) : undefined);
  }, [onChange]);

  useEffect(() => {
    setInnerValue(valueFormatted);
  }, [valueFormatted]);

  return {
    inputRef,
    innerValue,
    innerType,
    handleOnFocus,
    handleOnChange,
    handleOnBlur,
    handleOnWheel,
    generateStyleVariables,
    generateSymbolStyleVariables,
  };
}
