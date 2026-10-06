import type { RefObject, ForwardedRef, FocusEvent } from 'react';
import type { Options } from 'currency.js';
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
export default function useInputCurrency(currencyOptions: Options, value?: number, onFocus?: (event: FocusEvent<HTMLInputElement>) => void, onChange?: (value?: number) => void, onBlur?: (event: FocusEvent<HTMLInputElement>) => void, ref?: ForwardedRef<HTMLInputElement>, minValue?: number, maxValue?: number, clamp?: boolean): {
    inputRef: RefObject<HTMLInputElement | null>;
    innerValue: string;
    innerType: string;
    isOverMax: boolean;
    isUnderMin: boolean;
    handleOnFocus: (event: FocusEvent<HTMLInputElement>) => void;
    handleOnChange: (newValue?: string) => void;
    handleOnBlur: (event: FocusEvent<HTMLInputElement>) => void;
};
