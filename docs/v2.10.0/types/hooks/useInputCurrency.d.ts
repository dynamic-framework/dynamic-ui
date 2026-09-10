import type { RefObject, ForwardedRef, FocusEvent } from 'react';
import type { Options } from 'currency.js';
export default function useInputCurrency(currencyOptions: Options, value?: number, onFocus?: (event: FocusEvent<HTMLInputElement>) => void, onChange?: (value?: number) => void, onBlur?: (event: FocusEvent<HTMLInputElement>) => void, ref?: ForwardedRef<HTMLInputElement>, minValue?: number, maxValue?: number): {
    inputRef: RefObject<HTMLInputElement | null>;
    innerValue: string;
    innerType: string;
    handleOnFocus: (event: FocusEvent<HTMLInputElement>) => void;
    handleOnChange: (newValue?: string) => void;
    handleOnBlur: (event: FocusEvent<HTMLInputElement>) => void;
};
