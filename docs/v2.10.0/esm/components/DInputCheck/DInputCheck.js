import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useId, useMemo, useCallback, useEffect } from 'react';
import classNames from 'classnames';

function DInputCheck(_a) {
    var { id: idProp, type, name, label, ariaLabel, checked = false, disabled = false, invalid = false, valid = false, indeterminate, inputClassName, value, hint, onChange, className, style, dataAttributes } = _a, props = __rest(_a, ["id", "type", "name", "label", "ariaLabel", "checked", "disabled", "invalid", "valid", "indeterminate", "inputClassName", "value", "hint", "onChange", "className", "style", "dataAttributes"]);
    const innerRef = useRef(null);
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const handleChange = useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    const ariaDescribedby = useMemo(() => ([
        !!hint && `${id}Hint`,
    ]
        .filter(Boolean)
        .join(' ')), [
        id,
        hint,
    ]);
    useEffect(() => {
        if (innerRef.current) {
            innerRef.current.indeterminate = type === 'checkbox' && Boolean(indeterminate);
        }
    }, [indeterminate, type]);
    useEffect(() => {
        if (innerRef.current) {
            innerRef.current.checked = checked;
        }
    }, [checked]);
    const inputComponent = useMemo(() => (jsx("input", Object.assign({ ref: innerRef, onChange: handleChange, className: classNames('form-check-input', {
            'is-invalid': invalid,
            'is-valid': valid,
        }, inputClassName), style: style, id: id, disabled: disabled, type: type, name: name, value: value, "aria-label": ariaLabel }, ariaDescribedby && { 'aria-describedby': ariaDescribedby }, props))), [
        handleChange,
        invalid,
        valid,
        inputClassName,
        style,
        id,
        disabled,
        type,
        name,
        value,
        ariaLabel,
        ariaDescribedby,
        props,
    ]);
    if (!label) {
        return inputComponent;
    }
    return (jsxs("div", Object.assign({ className: classNames('form-check', className) }, dataAttributes, { children: [inputComponent, jsx("label", { className: "form-check-label", htmlFor: id, children: label }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}

export { DInputCheck as default };
//# sourceMappingURL=DInputCheck.js.map
