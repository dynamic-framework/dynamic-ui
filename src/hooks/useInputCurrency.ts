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

/**
 * State and handlers for a currency input: a formatted string while the field
 * is idle and the raw number while it is being edited.
 *
 * `minValue`/`maxValue` bound the value. With `clamp` (default `true`) an
 * out-of-range value is brought into range whenever it is not being typed:
 * on mount, when `value` or the bounds change, and on blur. Every time the
 * clamp changes the value, `onChange` receives the clamped number, so the
 * input and the consumer's state never disagree. While the field is focused
 * the typed number is reported as is, so a partial entry is not rewritten.
 *
 * With `clamp: false` the value is never changed: the bounds only feed
 * `isOverMax` / `isUnderMin`, so the consumer can show its own message (e.g.
 * "You exceeded the limit") and keep the entered amount.
 */
export default function useInputCurrency(
  currencyOptions: Options,
  value?: number,
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void,
  onChange?: (value?: number) => void,
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void,
  ref?: ForwardedRef<HTMLInputElement>,
  minValue?: number,
  maxValue?: number,
  clamp: boolean = true,
) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement | null>);

  // Read through a ref so an inline `currencyOptions` object (a new reference
  // on every render) doesn't retrigger the synchronization effect below.
  const currencyOptionsRef = useRef(currencyOptions);
  currencyOptionsRef.current = currencyOptions;

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const clampValue = useCallback((newValue?: number) => {
    if (newValue === undefined || !clamp) {
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
  }, [minValue, maxValue, clamp]);

  const [innerType, setInnerType] = useState('text');
  const [innerNumber, setInnerNumber] = useState<number | undefined>(() => clampValue(value));
  const [innerString, setInnerString] = useState<string | undefined>(
    () => formatValue(clampValue(value), currencyOptions),
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
      setInnerString(formatValue(clampedNumber, currencyOptionsRef.current));
      onChange?.(clampedNumber);
    }

    onBlur?.(event);
  }, [onBlur, innerNumber, clampValue, onChange]);

  const handleOnChange = useCallback((newValue?: string) => {
    const newNumber = (newValue === undefined || newValue === '') ? undefined : Number(newValue);

    if (newNumber !== innerNumber) {
      setInnerNumber(newNumber);
      setInnerString(formatValue(newNumber, currencyOptionsRef.current));
      onChange?.(newNumber);
    }
  }, [onChange, innerNumber]);

  const isEditing = innerType === 'number';

  // Keep the inner value in sync with `value` and the bounds. While the user
  // is typing, the consumer echoes the typed number back through `value`, so
  // it is taken as is; otherwise it is clamped, and a clamp that changes it is
  // reported through `onChange`.
  useEffect(() => {
    const nextNumber = isEditing ? value : clampValue(value);

    if (nextNumber !== innerNumber) {
      setInnerNumber(nextNumber);
      setInnerString(formatValue(nextNumber, currencyOptionsRef.current));
    }

    if (nextNumber !== value) {
      onChangeRef.current?.(nextNumber);
    }
  // `innerNumber` is read, not tracked: the effect reacts to the consumer's
  // value and to the bounds, not to its own updates.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, clampValue, isEditing]);

  const innerValue = useMemo<string>(
    () => (innerType === 'number' ? innerNumber?.toString() ?? '' : innerString ?? ''),
    [innerType, innerNumber, innerString],
  );

  const isOverMax = maxValue !== undefined && innerNumber !== undefined && innerNumber > maxValue;
  const isUnderMin = minValue !== undefined && innerNumber !== undefined && innerNumber < minValue;

  return {
    inputRef,
    innerValue,
    innerType,
    isOverMax,
    isUnderMin,
    handleOnFocus,
    handleOnChange,
    handleOnBlur,
  };
}
