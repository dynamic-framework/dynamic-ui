import { __rest } from 'tslib';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { forwardRef, useId, useMemo } from 'react';
import classNames from 'classnames';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate.js';
import { PREFIX_BS } from '../config.js';

function DInputRange(_a, ref) {
    var { id: idProp, label, ariaLabel, className, style, value = '0', min = '0', max = '100', filledValue = true, onChange } = _a, props = __rest(_a, ["id", "label", "ariaLabel", "className", "style", "value", "min", "max", "filledValue", "onChange"]);
    const innerRef = useProvidedRefOrCreate(ref);
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const generateClasses = useMemo(() => ({
        'form-range': true,
        'form-range-value-indicator': filledValue,
    }), [filledValue]);
    const generateStyleVariables = useMemo(() => {
        const minNumber = parseFloat(min.toString());
        const maxNumber = parseFloat(max.toString());
        const valueNumber = parseFloat(value.toString());
        const percentage = ((valueNumber - minNumber) / (maxNumber - minNumber)) * 100;
        return Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}form-range-component-value`]: `${percentage}%` });
    }, [min, max, value, style]);
    const inputComponent = useMemo(() => (jsx("input", Object.assign({ id: id, ref: innerRef, className: classNames(generateClasses, className), "aria-label": ariaLabel, type: "range", value: value, min: min, max: max, style: generateStyleVariables, onChange: onChange }, props))), [
        ariaLabel,
        className,
        generateClasses,
        generateStyleVariables,
        id,
        innerRef,
        max,
        min,
        onChange,
        props,
        value,
    ]);
    if (!label) {
        return inputComponent;
    }
    return (jsxs(Fragment, { children: [jsx("label", { className: "form-label", htmlFor: id, children: label }), inputComponent] }));
}
const ForwardedDInputRange = forwardRef(DInputRange);
ForwardedDInputRange.displayName = 'DInputRange';

export { ForwardedDInputRange as default };
//# sourceMappingURL=DInputRange.js.map
