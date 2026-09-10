import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useId, useMemo, useCallback } from 'react';
import classNames from 'classnames';
import DIcon from '../DIcon/DIcon.js';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate.js';
import { useDContext } from '../../contexts/DContext.js';

function DInput(_a, ref) {
    var { id: idProp, style, className, label = '', disabled = false, loading = false, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconStart, iconStartDisabled, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconStartTabIndex, iconStartMaterialStyle, iconEnd, iconEndDisabled, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, iconEndMaterialStyle, hint, size, invalid = false, valid = false, floatingLabel = false, inputStart, inputEnd, value, placeholder = '', dataAttributes, readonly, onChange, onIconStartClick, onIconEndClick } = _a, inputProps = __rest(_a, ["id", "style", "className", "label", "disabled", "loading", "iconFamilyClass", "iconFamilyPrefix", "iconMaterialStyle", "iconStart", "iconStartDisabled", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconStartAriaLabel", "iconStartTabIndex", "iconStartMaterialStyle", "iconEnd", "iconEndDisabled", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "iconEndMaterialStyle", "hint", "size", "invalid", "valid", "floatingLabel", "inputStart", "inputEnd", "value", "placeholder", "dataAttributes", "readonly", "onChange", "onIconStartClick", "onIconEndClick"]);
    const inputRef = useProvidedRefOrCreate(ref);
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const { icon: { familyClass, familyPrefix, materialStyle, }, } = useDContext();
    const handleOnChange = useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event.currentTarget.value);
    }, [onChange]);
    const handleOnIconStartClick = useCallback(() => {
        onIconStartClick === null || onIconStartClick === void 0 ? void 0 : onIconStartClick(value);
    }, [onIconStartClick, value]);
    const handleOnIconEndClick = useCallback(() => {
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick(value);
    }, [onIconEndClick, value]);
    const ariaDescribedby = useMemo(() => ([
        !!inputStart && `${id}InputStart`,
        !!iconStart && `${id}Start`,
        (invalid || valid) && !iconEnd && !loading && `${id}State`,
        (iconEnd && !loading) && `${id}End`,
        loading && `${id}Loading`,
        !!inputEnd && `${id}InputEnd`,
        !!hint && `${id}Hint`,
    ]
        .filter(Boolean)
        .join(' ')), [
        id,
        inputStart,
        iconStart,
        invalid,
        valid,
        iconEnd,
        loading,
        inputEnd,
        hint,
    ]);
    const inputComponent = useMemo(() => (jsx("input", Object.assign({ ref: inputRef, id: id, className: classNames('form-control', {
            'is-invalid': invalid,
            'is-valid': valid,
        }), disabled: disabled || loading, readOnly: readonly, value: value, onChange: handleOnChange }, (floatingLabel || placeholder) && { placeholder: floatingLabel ? '' : placeholder }, ariaDescribedby && { 'aria-describedby': ariaDescribedby }, inputProps))), [
        ariaDescribedby,
        disabled,
        handleOnChange,
        id,
        inputProps,
        inputRef,
        invalid,
        loading,
        placeholder,
        floatingLabel,
        valid,
        value,
        readonly,
    ]);
    const labelComponent = useMemo(() => (jsx("label", { htmlFor: id, children: label })), [
        id,
        label,
    ]);
    const dynamicComponent = useMemo(() => {
        if (floatingLabel) {
            return (jsxs("div", { className: "form-floating", children: [inputComponent, labelComponent] }));
        }
        return inputComponent;
    }, [floatingLabel, inputComponent, labelComponent]);
    return (jsxs("div", Object.assign({ className: className, style: style }, dataAttributes, { children: [label && !floatingLabel && labelComponent, jsxs("div", { className: classNames({
                    [`input-group-${size}`]: !!size,
                    'input-group': true,
                    'has-validation': invalid || valid,
                }), children: [!!inputStart && (jsx("div", { className: "input-group-text", id: `${id}InputStart`, children: inputStart })), iconStart && (onIconStartClick ? (jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: handleOnIconStartClick, disabled: disabled || loading || iconStartDisabled, "aria-label": iconStartAriaLabel || (typeof iconStart === 'string' ? iconStart : 'start icon'), tabIndex: iconStartTabIndex, children: jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass !== null && iconStartFamilyClass !== void 0 ? iconStartFamilyClass : familyClass, familyPrefix: iconStartFamilyPrefix !== null && iconStartFamilyPrefix !== void 0 ? iconStartFamilyPrefix : familyPrefix, materialStyle: iconStartMaterialStyle !== null && iconStartMaterialStyle !== void 0 ? iconStartMaterialStyle : materialStyle }) })) : (jsx("div", { className: "input-group-text", id: `${id}Start`, tabIndex: -1, children: jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass !== null && iconStartFamilyClass !== void 0 ? iconStartFamilyClass : familyClass, familyPrefix: iconStartFamilyPrefix !== null && iconStartFamilyPrefix !== void 0 ? iconStartFamilyPrefix : familyPrefix, materialStyle: iconStartMaterialStyle !== null && iconStartMaterialStyle !== void 0 ? iconStartMaterialStyle : materialStyle }) }))), dynamicComponent, (iconEnd && !loading) && (onIconEndClick ? (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: handleOnIconEndClick, disabled: disabled || loading || iconEndDisabled, "aria-label": iconEndAriaLabel || (typeof iconEnd === 'string' ? iconEnd : 'end icon'), tabIndex: iconEndTabIndex, children: jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass !== null && iconEndFamilyClass !== void 0 ? iconEndFamilyClass : familyClass, familyPrefix: iconEndFamilyPrefix !== null && iconEndFamilyPrefix !== void 0 ? iconEndFamilyPrefix : familyPrefix, materialStyle: iconEndMaterialStyle !== null && iconEndMaterialStyle !== void 0 ? iconEndMaterialStyle : materialStyle }) })) : (jsx("div", { className: "input-group-text", id: `${id}End`, tabIndex: -1, children: jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass !== null && iconEndFamilyClass !== void 0 ? iconEndFamilyClass : familyClass, familyPrefix: iconEndFamilyPrefix !== null && iconEndFamilyPrefix !== void 0 ? iconEndFamilyPrefix : familyPrefix, materialStyle: iconEndMaterialStyle !== null && iconEndMaterialStyle !== void 0 ? iconEndMaterialStyle : materialStyle }) }))), loading && (jsx("div", { className: "input-group-text", id: `${id}Loading`, children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", "data-testid": "loading-spinner", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) })), !!inputEnd && (jsx("div", { className: "input-group-text", id: `${id}InputEnd`, children: inputEnd }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}
const ForwardedDInput = forwardRef(DInput);
ForwardedDInput.displayName = 'DInput';

export { ForwardedDInput as default };
//# sourceMappingURL=DInput.js.map
