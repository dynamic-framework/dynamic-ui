import { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import currency from 'currency.js';
import useProvidedRefOrCreate from './useProvidedRefOrCreate.js';

function formatValue(value, currencyOptions) {
    if (value === undefined) {
        return '';
    }
    return currency(value, Object.assign(Object.assign({}, currencyOptions), { symbol: '' })).format();
}
function useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref, minValue, maxValue) {
    const inputRef = useProvidedRefOrCreate(ref);
    const clampValue = useCallback((newValue) => {
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
    const [innerNumber, setInnerNumber] = useState(clampValue(value));
    const [innerString, setInnerString] = useState(formatValue(clampValue(value), currencyOptions));
    const handleOnFocus = useCallback((event) => {
        event.stopPropagation();
        setInnerType('number');
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
    }, [onFocus]);
    const handleOnBlur = useCallback((event) => {
        event.stopPropagation();
        setInnerType('text');
        const clampedNumber = clampValue(innerNumber);
        if (clampedNumber !== innerNumber) {
            setInnerNumber(clampedNumber);
            setInnerString(formatValue(clampedNumber, currencyOptions));
            onChange === null || onChange === void 0 ? void 0 : onChange(clampedNumber);
        }
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, [onBlur, innerNumber, clampValue, currencyOptions, onChange]);
    const handleOnChange = useCallback((newValue) => {
        const newNumber = (newValue === undefined || newValue === '') ? undefined : Number(newValue);
        if (newNumber !== innerNumber) {
            setInnerNumber(newNumber);
            setInnerString(formatValue(newNumber, currencyOptions));
            onChange === null || onChange === void 0 ? void 0 : onChange(newNumber);
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
    const innerValue = useMemo(() => { var _a; return (innerType === 'number' ? (_a = innerNumber === null || innerNumber === void 0 ? void 0 : innerNumber.toString()) !== null && _a !== void 0 ? _a : '' : innerString !== null && innerString !== void 0 ? innerString : ''); }, [innerType, innerNumber, innerString]);
    return {
        inputRef,
        innerValue,
        innerType,
        handleOnFocus,
        handleOnChange,
        handleOnBlur,
    };
}

export { useInputCurrency as default };
//# sourceMappingURL=useInputCurrency.js.map
