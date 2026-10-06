import { jsxs, jsx } from 'react/jsx-runtime';
import { useId, useMemo, useCallback } from 'react';
import classNames from 'classnames';
import DFormLabel from '../internal/DFormLabel.js';
import hasLabelContent from '../../utils/hasLabelContent.js';
import warnLabelUsage from '../../utils/warnLabelUsage.js';
import useControlledState from '../../hooks/useControlledState.js';

function DInputSwitch({ id: idProp, label, ariaLabel, name, checked, defaultChecked = false, disabled, invalid = false, valid = false, hint, readonly, className, style, dataAttributes, inputClassName, onChange, }) {
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    // See `useControlledState` for why `onChange` takes part in this decision.
    const isControlled = checked !== undefined && onChange !== undefined;
    const [isChecked, setIsChecked] = useControlledState(checked, isControlled, defaultChecked);
    const ariaDescribedby = useMemo(() => ([
        !!hint && `${id}Hint`,
    ]
        .filter(Boolean)
        .join(' ')), [
        id,
        hint,
    ]);
    const changeHandler = useCallback((event) => {
        const value = event.currentTarget.checked;
        setIsChecked(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [setIsChecked, onChange]);
    if (process.env.NODE_ENV !== 'production') {
        warnLabelUsage({
            component: 'DInputSwitch',
            label,
            hasAccessibleName: !!ariaLabel,
            accessibleNameProp: 'ariaLabel',
        });
    }
    return (jsxs("div", Object.assign({ className: classNames('form-check form-switch', className) }, dataAttributes, { children: [jsx("input", Object.assign({ id: id, name: name, onChange: readonly ? () => false : changeHandler, className: classNames('form-check-input', {
                    'is-invalid': invalid,
                    'is-valid': valid,
                }, inputClassName), style: style, type: "checkbox", role: "switch", checked: isChecked, disabled: disabled, "aria-label": ariaLabel }, ariaDescribedby && { 'aria-describedby': ariaDescribedby })), hasLabelContent(label) && (jsx(DFormLabel, { className: "form-check-label", htmlFor: id, children: label })), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}

export { DInputSwitch as default };
//# sourceMappingURL=DInputSwitch.js.map
