import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef, useState, useEffect, useCallback } from 'react';
import ForwardedDInput from '../DInput/DInput.js';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate.js';

function normalizeValue(value) {
    return value !== null && value !== void 0 ? value : '';
}
function DInputSearch(_a, ref) {
    var { debounceMs = 300, onChange, onImmediateChange, value, defaultValue, placeholder = 'Search...' } = _a, props = __rest(_a, ["debounceMs", "onChange", "onImmediateChange", "value", "defaultValue", "placeholder"]);
    const inputRef = useProvidedRefOrCreate(ref);
    const isControlled = value !== undefined;
    const onChangeRef = useRef(onChange);
    onChangeRef.current = onChange;
    const [internalValue, setInternalValue] = useState(normalizeValue(isControlled ? value : defaultValue));
    // null = no keystroke has occurred yet (skip debounce on mount)
    const [pendingValue, setPendingValue] = useState(null);
    useEffect(() => {
        if (!isControlled)
            return;
        setInternalValue(normalizeValue(value));
    }, [isControlled, value]);
    const handleChange = useCallback((nextValue) => {
        if (!isControlled) {
            setInternalValue(nextValue);
        }
        setPendingValue(nextValue);
        onImmediateChange === null || onImmediateChange === void 0 ? void 0 : onImmediateChange(nextValue);
    }, [isControlled, onImmediateChange]);
    useEffect(() => {
        var _a;
        let timeoutId;
        if (pendingValue !== null) {
            if (debounceMs <= 0) {
                (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, pendingValue);
                setPendingValue(null);
            }
            else {
                timeoutId = window.setTimeout(() => {
                    var _a;
                    (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, pendingValue);
                    setPendingValue(null);
                }, debounceMs);
            }
        }
        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [debounceMs, pendingValue]);
    return (jsx(ForwardedDInput, Object.assign({ ref: inputRef }, props, { type: "search", value: internalValue, onChange: handleChange, placeholder: placeholder })));
}
const ForwardedDInputSearch = forwardRef(DInputSearch);
ForwardedDInputSearch.displayName = 'DInputSearch';

export { ForwardedDInputSearch as default };
//# sourceMappingURL=DInputSearch.js.map
