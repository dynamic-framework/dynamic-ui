import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useId, useMemo, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import DFormLabel from '../internal/DFormLabel.js';
import hasLabelContent from '../../utils/hasLabelContent.js';
import warnLabelUsage from '../../utils/warnLabelUsage.js';

function DInputCheck(_a) {
    var { id: idProp, type, name, label, ariaLabel, checked, defaultChecked, disabled = false, invalid = false, valid = false, indeterminate, inputClassName, value, hint, onChange, className, style, dataAttributes } = _a, props = __rest(_a, ["id", "type", "name", "label", "ariaLabel", "checked", "defaultChecked", "disabled", "invalid", "valid", "indeterminate", "inputClassName", "value", "hint", "onChange", "className", "style", "dataAttributes"]);
    const innerRef = useRef(null);
    // See `useControlledState` for why `onChange` takes part in this decision.
    const isControlled = checked !== undefined && onChange !== undefined;
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const handleChange = useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
        // Controlled only. Activating a checkbox clears the DOM `indeterminate`
        // flag, and it has no HTML attribute for React to restore the way it
        // restores `checked` when the parent rejects the change, so the mixed state
        // would be gone after the first click — the effect below only re-runs when
        // the prop moves. Uncontrolled keeps the browser's behaviour, where the
        // click owns the state and `indeterminate` was only the starting look.
        // Reapplied after `onChange` so a handler reading
        // `event.target.indeterminate` still sees what the browser left, and a
        // parent that does move the prop wins through that effect.
        if (isControlled && innerRef.current) {
            innerRef.current.indeterminate = type === 'checkbox' && Boolean(indeterminate);
        }
    }, [onChange, isControlled, indeterminate, type]);
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
    // Legacy path only: a `checked` with no `onChange` behind it still lands on
    // the element, but through the DOM, so the input stays uncontrolled and both
    // clicking it and the native radio-group behaviour keep working.
    useEffect(() => {
        if (isControlled || checked === undefined || !innerRef.current) {
            return;
        }
        innerRef.current.checked = checked;
    }, [isControlled, checked]);
    const inputComponent = useMemo(() => (jsx("input", Object.assign({ ref: innerRef }, isControlled
        ? { checked }
        : defaultChecked !== undefined && { defaultChecked }, { onChange: handleChange, className: classNames('form-check-input', {
            'is-invalid': invalid,
            'is-valid': valid,
        }, inputClassName), style: style, id: id, disabled: disabled, type: type, name: name, value: value, "aria-label": ariaLabel }, ariaDescribedby && { 'aria-describedby': ariaDescribedby }, props))), [
        isControlled,
        checked,
        defaultChecked,
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
    if (process.env.NODE_ENV !== 'production') {
        warnLabelUsage({
            component: 'DInputCheck',
            label,
            // `{...props}` is spread after `aria-label={ariaLabel}`, so a native
            // `aria-label` wins — including when it is explicitly undefined.
            hasAccessibleName: !!('aria-label' in props ? props['aria-label'] : ariaLabel)
                || !!props['aria-labelledby'],
            accessibleNameProp: 'ariaLabel',
        });
    }
    if (!hasLabelContent(label)) {
        return inputComponent;
    }
    return (jsxs("div", Object.assign({ className: classNames('form-check', className) }, dataAttributes, { children: [inputComponent, jsx(DFormLabel, { className: "form-check-label", htmlFor: id, children: label }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}

export { DInputCheck as default };
//# sourceMappingURL=DInputCheck.js.map
