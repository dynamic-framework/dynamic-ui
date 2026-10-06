import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import ForwardedDInput from '../DInput/DInput.js';
import useInputCurrency from '../../hooks/useInputCurrency.js';
import { useDContext } from '../../contexts/DContext.js';
import useDisableInputWheel from '../../hooks/useDisableInputWheel.js';

function DInputCurrency(_a, ref) {
    var { value, minValue, maxValue, clamp = true, currencyCode, onFocus, onBlur, onChange, invalid: invalidProp, valid: validProp } = _a, props = __rest(_a, ["value", "minValue", "maxValue", "clamp", "currencyCode", "onFocus", "onBlur", "onChange", "invalid", "valid"]);
    const { currency: currencyOptions } = useDContext();
    const { handleOnWheel, } = useDisableInputWheel(ref);
    const { inputRef, innerValue, innerType, isOverMax, isUnderMin, handleOnFocus, handleOnChange, handleOnBlur, } = useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref, minValue, maxValue, clamp);
    const outOfRange = !clamp && (isOverMax || isUnderMin);
    // One validation state: an explicit `invalid` wins; otherwise an
    // out-of-range value is invalid and can't also be shown as valid.
    const invalid = invalidProp !== null && invalidProp !== void 0 ? invalidProp : outOfRange;
    const valid = invalid ? false : validProp;
    return (jsx(ForwardedDInput, Object.assign({ ref: inputRef, value: innerValue, onChange: handleOnChange, inputMode: "decimal", type: innerType, onFocus: handleOnFocus, onBlur: handleOnBlur, onWheel: handleOnWheel, invalid: invalid, valid: valid, inputStart: (jsx("span", { slot: "input-start", className: "d-input-currency-symbol", children: currencyCode || currencyOptions.symbol })) }, props)));
}
const ForwardedDInputCurrency = forwardRef(DInputCurrency);
ForwardedDInputCurrency.displayName = 'DInputCurrency';

export { ForwardedDInputCurrency as default };
//# sourceMappingURL=DInputCurrency.js.map
