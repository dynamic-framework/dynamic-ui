import { jsxs, jsx } from 'react/jsx-runtime';
import { useId, useMemo, useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

function DInputSwitch({ id: idProp, label, ariaLabel, name, checked, disabled, invalid = false, valid = false, hint, readonly, className, style, dataAttributes, inputClassName, onChange, }) {
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const [internalIsChecked, setInternalIsChecked] = useState(checked);
    const ariaDescribedby = useMemo(() => ([
        !!hint && `${id}Hint`,
    ]
        .filter(Boolean)
        .join(' ')), [
        id,
        hint,
    ]);
    useEffect(() => {
        setInternalIsChecked(checked);
    }, [checked]);
    const changeHandler = useCallback((event) => {
        const value = event.currentTarget.checked;
        setInternalIsChecked(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (jsxs("div", Object.assign({ className: classNames('form-check form-switch', className) }, dataAttributes, { children: [jsx("input", Object.assign({ id: id, name: name, onChange: readonly ? () => false : changeHandler, className: classNames('form-check-input', {
                    'is-invalid': invalid,
                    'is-valid': valid,
                }, inputClassName), style: style, type: "checkbox", role: "switch", checked: internalIsChecked, disabled: disabled, "aria-label": ariaLabel }, ariaDescribedby && { 'aria-describedby': ariaDescribedby })), label && (jsx("label", { className: "form-check-label", htmlFor: id, children: label })), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}

export { DInputSwitch as default };
//# sourceMappingURL=DInputSwitch.js.map
