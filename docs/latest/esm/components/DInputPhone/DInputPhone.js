import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useId, useMemo, useCallback } from 'react';
import classNames from 'classnames';
import { defaultCountries, parseCountry, usePhoneInput, CountrySelector } from 'react-international-phone';
import DIcon from '../DIcon/DIcon.js';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate.js';
import { useDContext } from '../../contexts/DContext.js';
import validatePhoneNumber from '../../utils/validatePhoneNumber.js';

function DInputPhone(_a, ref) {
    var { id: idProp, style, className, label = '', disabled = false, loading = false, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconEnd, iconEndDisabled, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, iconEndMaterialStyle, hint, size, invalid = false, valid = false, floatingLabel = false, inputEnd, value, placeholder = '', dataAttributes, onChange, onIconEndClick, countrySelectorProps, filteredCountries, defaultCountry = 'cl' } = _a, inputProps = __rest(_a, ["id", "style", "className", "label", "disabled", "loading", "iconFamilyClass", "iconFamilyPrefix", "iconMaterialStyle", "iconEnd", "iconEndDisabled", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "iconEndMaterialStyle", "hint", "size", "invalid", "valid", "floatingLabel", "inputEnd", "value", "placeholder", "dataAttributes", "onChange", "onIconEndClick", "countrySelectorProps", "filteredCountries", "defaultCountry"]);
    const innerRef = useProvidedRefOrCreate(ref);
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const { icon: { familyClass, familyPrefix, materialStyle, }, } = useDContext();
    const handleOnIconEndClick = useCallback(() => {
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick(value);
    }, [onIconEndClick, value]);
    const ariaDescribedby = useMemo(() => ([
        (invalid || valid) && !iconEnd && !loading && `${id}State`,
        (iconEnd && !loading) && `${id}End`,
        loading && `${id}Loading`,
        !!inputEnd && `${id}InputEnd`,
        !!hint && `${id}Hint`,
    ]
        .filter(Boolean)
        .join(' ')), [
        id,
        invalid,
        valid,
        iconEnd,
        loading,
        inputEnd,
        hint,
    ]);
    const countries = useMemo(() => {
        if (filteredCountries === undefined) {
            return defaultCountries;
        }
        return defaultCountries.filter((country) => {
            const { iso2 } = parseCountry(country);
            return filteredCountries.includes(iso2);
        });
    }, [filteredCountries]);
    const { inputValue, handlePhoneValueChange, inputRef, country, setCountry, } = usePhoneInput({
        inputRef: innerRef,
        defaultCountry,
        value,
        countries,
        onChange: (data) => {
            onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, data), { isValid: validatePhoneNumber(data.phone) }));
        },
    });
    const inputComponent = useMemo(() => (jsx("input", Object.assign({ ref: inputRef, id: id, className: classNames('form-control', {
            'is-invalid': invalid,
            'is-valid': valid,
        }), disabled: disabled || loading, value: inputValue, onChange: handlePhoneValueChange, inputMode: "tel" }, (floatingLabel || placeholder) && { placeholder: floatingLabel ? '' : placeholder }, ariaDescribedby && { 'aria-describedby': ariaDescribedby }, inputProps))), [
        ariaDescribedby,
        disabled,
        floatingLabel,
        handlePhoneValueChange,
        id,
        inputProps,
        inputRef,
        inputValue,
        invalid,
        loading,
        placeholder,
        valid,
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
    }, [
        floatingLabel,
        inputComponent,
        labelComponent,
    ]);
    return (jsxs("div", Object.assign({ className: classNames('d-input-phone', className), style: style }, dataAttributes, { children: [label && !floatingLabel && labelComponent, jsxs("div", { className: classNames({
                    [`input-group-${size}`]: !!size,
                    'input-group': true,
                    'has-validation': invalid || valid,
                }), children: [jsx(CountrySelector, Object.assign({}, countrySelectorProps, { selectedCountry: country.iso2, onSelect: ({ iso2 }) => setCountry(iso2), countries: countries, disabled: disabled || loading, className: classNames('input-group-text', countrySelectorProps === null || countrySelectorProps === void 0 ? void 0 : countrySelectorProps.className) })), dynamicComponent, (iconEnd && !loading) && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: handleOnIconEndClick, disabled: disabled || loading || iconEndDisabled, "aria-label": iconEndAriaLabel, tabIndex: onIconEndClick ? iconEndTabIndex : -1, children: jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass !== null && iconEndFamilyClass !== void 0 ? iconEndFamilyClass : familyClass, familyPrefix: iconEndFamilyPrefix !== null && iconEndFamilyPrefix !== void 0 ? iconEndFamilyPrefix : familyPrefix, materialStyle: iconEndMaterialStyle !== null && iconEndMaterialStyle !== void 0 ? iconEndMaterialStyle : materialStyle }) })), loading && (jsx("div", { className: "input-group-text", id: `${id}Loading`, children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) })), !!inputEnd && (jsx("div", { className: "input-group-text", id: `${id}InputEnd`, children: inputEnd }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}
const ForwardedDInputPhone = forwardRef(DInputPhone);
ForwardedDInputPhone.displayName = 'DInputPhone';

export { ForwardedDInputPhone as default };
//# sourceMappingURL=DInputPhone.js.map
