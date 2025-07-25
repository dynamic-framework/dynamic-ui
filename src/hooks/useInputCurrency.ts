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
} from 'react';
import type { Options } from 'currency.js';

import useProvidedRefOrCreate from './useProvidedRefOrCreate';
import { PREFIX_BS } from '../components/config';

import type { CustomStyles } from '../components/interface';

function formatValue(value: number | undefined, currencyOptions: Options) {
  if (value === undefined) {
    return '';
  }

  return currency(value, { ...currencyOptions, symbol: '' }).format();
}

export default function useInputCurrency(
  currencyOptions: Options,
  value?: number,
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void,
  onChange?: (value?: number) => void,
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void,
  ref?: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement | null>);

  const [innerType, setInnerType] = useState('text');
  const [innerNumber, setInnerNumber] = useState<number | undefined>(value);
  const [innerString, setInnerString] = useState<string | undefined>(
    formatValue(value, currencyOptions),
  );

  const handleOnFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setInnerType('number');
    onFocus?.(event);
  }, [onFocus]);

  const handleOnBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setInnerType('text');
    onBlur?.(event);
  }, [onBlur]);

  const generateStyleVariables = useMemo<CustomStyles>(() => ({
    [`--${PREFIX_BS}input-currency-component-symbol-color`]: `var(--${PREFIX_BS}secondary)`,
    [`--${PREFIX_BS}input-currency-symbol-color`]: `var(--${PREFIX_BS}input-currency-component-symbol-color)`,
  }), []);

  const generateSymbolStyleVariables = useMemo(() => ({
    color: `var(--${PREFIX_BS}input-currency-symbol-color)`,
  }), []);

  const handleOnChange = useCallback((newValue?: string) => {
    const newNumber = (newValue === undefined || newValue === '') ? undefined : Number(newValue);

    if (newNumber !== innerNumber) {
      setInnerNumber(newNumber);
      setInnerString(formatValue(newNumber, currencyOptions));
      onChange?.(newNumber);
    }
  }, [currencyOptions, onChange, innerNumber]);

  useEffect(() => {
    if (value !== innerNumber) {
      setInnerNumber(value);
      setInnerString(formatValue(value, currencyOptions));
    }
  }, [value, currencyOptions, innerNumber]);

  const innerValue = useMemo<string>(
    () => (innerType === 'number' ? innerNumber?.toString() ?? '' : innerString ?? ''),
    [innerType, innerNumber, innerString],
  );

  return {
    inputRef,
    innerValue,
    innerType,
    handleOnFocus,
    handleOnChange,
    handleOnBlur,
    generateStyleVariables,
    generateSymbolStyleVariables,
  };
}
