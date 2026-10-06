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
 *
 * Controlled usage follows the same contract as a native controlled input:
 * reflect `onChange` into `value` in the same event (`setState` in the
 * handler). The hook keeps showing `value` whenever it isn't being edited, so
 * a consumer can reject a change by keeping `value` as it was. Deferring the
 * update (a timer, awaiting a request) makes the hook see a stale `value` in
 * between: the field can flash the previous amount and a clamp can be
 * reported again when the deferred value arrives.
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

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  // Last clamp reported through `onChange`, as the value it came from and the
  // value it produced. StrictMode replays effects, and a consumer may reflect
  // `onChange` asynchronously, both before `value` catches up: the same clamp
  // must not be reported twice.
  const lastReportedClampRef = useRef<{ from?: number; to?: number } | null>(null);

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
      // Recorded before notifying, so the sync effect that runs when editing
      // ends doesn't report the same clamp again while `value` still holds the
      // typed number.
      lastReportedClampRef.current = { from: value, to: clampedNumber };
      onChange?.(clampedNumber);
    }

    onBlur?.(event);
  }, [onBlur, innerNumber, clampValue, onChange, value]);

  const handleOnChange = useCallback((newValue?: string) => {
    const newNumber = (newValue === undefined || newValue === '') ? undefined : Number(newValue);

    if (newNumber !== innerNumber) {
      setInnerNumber(newNumber);
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
    }

    if (nextNumber !== value) {
      const last = lastReportedClampRef.current;
      if (!last || last.from !== value || last.to !== nextNumber) {
        lastReportedClampRef.current = { from: value, to: nextNumber };
        onChangeRef.current?.(nextNumber);
      }
    } else {
      lastReportedClampRef.current = null;
    }
  // `innerNumber` is read, not tracked: the effect reacts to the consumer's
  // value and to the bounds, not to its own updates.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, clampValue, isEditing]);

  // Derived, not stored: the formatted text always matches the current number
  // and options, even when both change in the same render. It depends on the
  // options object itself, so a new custom `format` function is honored too;
  // formatting is cheap and doesn't feed the synchronization effect.
  const innerString = useMemo(
    () => formatValue(innerNumber, currencyOptions),
    [innerNumber, currencyOptions],
  );

  const innerValue = useMemo<string>(
    () => (innerType === 'number' ? innerNumber?.toString() ?? '' : innerString),
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
