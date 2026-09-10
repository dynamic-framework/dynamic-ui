import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import ForwardedDInput from '../DInput/DInput.js';
import useInputCurrency from '../../hooks/useInputCurrency.js';
import { useDContext } from '../../contexts/DContext.js';
import useDisableInputWheel from '../../hooks/useDisableInputWheel.js';

function DInputCurrency(_a, ref) {
    var { value, minValue, maxValue, currencyCode, onFocus, onBlur, onChange } = _a, props = __rest(_a, ["value", "minValue", "maxValue", "currencyCode", "onFocus", "onBlur", "onChange"]);
    const { currency: currencyOptions } = useDContext();
    const { handleOnWheel, } = useDisableInputWheel(ref);
    const { inputRef, innerValue, innerType, handleOnFocus, handleOnChange, handleOnBlur, } = useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref, minValue, maxValue);
    return (jsx(ForwardedDInput, Object.assign({ ref: inputRef, value: innerValue, onChange: handleOnChange, inputMode: "decimal", type: innerType, onFocus: handleOnFocus, onBlur: handleOnBlur, onWheel: handleOnWheel, inputStart: (jsx("span", { slot: "input-start", className: "d-input-currency-symbol", children: currencyCode || currencyOptions.symbol })) }, props)));
}
const ForwardedDInputCurrency = forwardRef(DInputCurrency);
ForwardedDInputCurrency.displayName = 'DInputCurrency';

export { ForwardedDInputCurrency as default };
//# sourceMappingURL=DInputCurrency.js.map
