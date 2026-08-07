import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
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
  minValue?: number,
  maxValue?: number,
) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement | null>);

  const clampValue = useCallback((newValue?: number) => {
    if (newValue === undefined) {
      return newValue;
    }

    let clampedValue = newValue;

    if (minValue !== undefined) {
      clampedValue = Math.max(clampedValue, minValue);
    }

    if (maxValue !== undefined) {
      clampedValue = Math.min(clampedValue, maxValue);
    }

    return clampedValue;
  }, [minValue, maxValue]);

  const [innerType, setInnerType] = useState('text');
  const [innerNumber, setInnerNumber] = useState<number | undefined>(clampValue(value));
  const [innerString, setInnerString] = useState<string | undefined>(
    formatValue(clampValue(value), currencyOptions),
  );

  const handleOnFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setInnerType('number');
    onFocus?.(event);
  }, [onFocus]);

  const handleOnBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setInnerType('text');

    const clampedNumber = clampValue(innerNumber);

    if (clampedNumber !== innerNumber) {
      setInnerNumber(clampedNumber);
      setInnerString(formatValue(clampedNumber, currencyOptions));
      onChange?.(clampedNumber);
    }

    onBlur?.(event);
  }, [onBlur, innerNumber, clampValue, currencyOptions, onChange]);

  const handleOnChange = useCallback((newValue?: string) => {
    const newNumber = (newValue === undefined || newValue === '') ? undefined : Number(newValue);

    if (newNumber !== innerNumber) {
      setInnerNumber(newNumber);
      setInnerString(formatValue(newNumber, currencyOptions));
      onChange?.(newNumber);
    }
  }, [currencyOptions, onChange, innerNumber]);

  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

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
  };
}
