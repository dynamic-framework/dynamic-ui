import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { useMemo, useCallback } from 'react';
import classNames from 'classnames';
import DIcon from '../DIcon/DIcon.js';
import warnMissingAccessibleName from './warnMissingAccessibleName.js';
import { useDContext } from '../../contexts/DContext.js';

function DButtonIcon(_a) {
    var { id, icon, size, className, variant, state, loadingAriaLabel, iconMaterialStyle, disabled = false, color = 'primary', loading = false, href, target, rel, stopPropagationEnabled = true, style, iconFamilyClass, iconFamilyPrefix, dataAttributes, onClick, 'aria-label': ariaLabelProp } = _a, rest = __rest(_a, ["id", "icon", "size", "className", "variant", "state", "loadingAriaLabel", "iconMaterialStyle", "disabled", "color", "loading", "href", "target", "rel", "stopPropagationEnabled", "style", "iconFamilyClass", "iconFamilyPrefix", "dataAttributes", "onClick", 'aria-label']);
    const { icon: { familyClass, familyPrefix, materialStyle, }, } = useDContext();
    const generateClasses = useMemo(() => {
        const variantClass = !variant || variant === 'solid'
            ? `btn-${color}`
            : `btn-${variant}-${color}`;
        return Object.assign(Object.assign(Object.assign({ 'btn d-button-icon': true, [variantClass]: true }, size && { [`btn-${size}`]: true }), (state && state !== 'disabled') && { [state]: true }), { loading });
    }, [variant, color, size, state, loading]);
    const isDisabled = useMemo(() => (state === 'disabled' || loading || disabled), [state, loading, disabled]);
    const clickHandler = useCallback((event) => {
        if (stopPropagationEnabled) {
            event.stopPropagation();
        }
        if (isDisabled) {
            event.preventDefault();
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    }, [stopPropagationEnabled, onClick, isDisabled]);
    const ariaLabel = useMemo(() => (loading
        ? loadingAriaLabel || ariaLabelProp
        : ariaLabelProp), [loading, loadingAriaLabel, ariaLabelProp]);
    /**
     * `aria-labelledby` and `title` also name a control, but they travel in `rest`,
     * which only the button branch spreads — an anchor drops them, so there the
     * button really is unnamed and the warning still applies.
     */
    const hasAccessibleName = useMemo(() => !!ariaLabel || (!href && (!!rest['aria-labelledby'] || !!rest.title)), [ariaLabel, href, rest]);
    if (process.env.NODE_ENV !== 'production' && !hasAccessibleName) {
        warnMissingAccessibleName(icon, href ? 'link' : 'button');
    }
    if (href) {
        return (jsx("a", Object.assign({ id: id, href: href, target: target, rel: rel, className: classNames(generateClasses, className), style: style, onClick: clickHandler, "aria-label": ariaLabel, "aria-disabled": isDisabled }, dataAttributes, { children: loading
                ? (jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }))
                : (jsx(DIcon, { icon: icon, familyClass: iconFamilyClass !== null && iconFamilyClass !== void 0 ? iconFamilyClass : familyClass, familyPrefix: iconFamilyPrefix !== null && iconFamilyPrefix !== void 0 ? iconFamilyPrefix : familyPrefix, materialStyle: iconMaterialStyle !== null && iconMaterialStyle !== void 0 ? iconMaterialStyle : materialStyle })) })));
    }
    return (jsx("button", Object.assign({ className: classNames(generateClasses, className), style: style, disabled: state === 'disabled' || loading, onClick: clickHandler, "aria-label": ariaLabel }, dataAttributes, rest, { children: loading
            ? (jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }))
            : (jsx(DIcon, { icon: icon, familyClass: iconFamilyClass !== null && iconFamilyClass !== void 0 ? iconFamilyClass : familyClass, familyPrefix: iconFamilyPrefix !== null && iconFamilyPrefix !== void 0 ? iconFamilyPrefix : familyPrefix, materialStyle: iconMaterialStyle !== null && iconMaterialStyle !== void 0 ? iconMaterialStyle : materialStyle })) })));
}

export { DButtonIcon as default };
//# sourceMappingURL=DButtonIcon.js.map
