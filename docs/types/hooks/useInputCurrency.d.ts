import type { RefObject, ForwardedRef, FocusEvent, WheelEvent } from 'react';
import type { Options } from 'currency.js';
import type { CustomStyles } from '../components/interface';
export default function useInputCurrency(currencyOptions: Options, value?: number, onFocus?: (event: FocusEvent<HTMLInputElement>) => void, onChange?: (value?: number) => void, onBlur?: (event: FocusEvent<HTMLInputElement>) => void, ref?: ForwardedRef<HTMLInputElement>): {
    inputRef: RefObject<HTMLInputElement>;
    innerValue: string;
    innerType: string;
    handleOnFocus: (event: FocusEvent<HTMLInputElement>) => void;
    handleOnChange: (newValue?: string) => void;
    handleOnBlur: (event: FocusEvent<HTMLInputElement>) => void;
    handleOnWheel: (event: WheelEvent<HTMLInputElement>) => void;
    generateStyleVariables: CustomStyles;
    generateSymbolStyleVariables: {
        color: string;
    };
};
