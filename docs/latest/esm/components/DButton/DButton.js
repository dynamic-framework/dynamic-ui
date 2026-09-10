import { __rest } from 'tslib';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { forwardRef, useMemo, useState, useRef, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import DIcon from '../DIcon/DIcon.js';
import { useResponsiveProp } from '../../hooks/useResponsiveProp.js';
import { useDContext } from '../../contexts/DContext.js';

const DButton = forwardRef((props, ref) => {
    const { color = 'primary', size, variant = 'solid', text, children, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartMaterialStyle, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndMaterialStyle, loading = false, loadingText, loadingAriaLabel, disabled = false, className, style, dataAttributes, onClick, type = 'button', target, rel, href, 'aria-label': ariaLabelProp } = props, rest = __rest(props, ["color", "size", "variant", "text", "children", "iconStart", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconStartMaterialStyle", "iconEnd", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndMaterialStyle", "loading", "loadingText", "loadingAriaLabel", "disabled", "className", "style", "dataAttributes", "onClick", "type", "target", "rel", "href", 'aria-label']);
    const { icon: { familyClass, familyPrefix, materialStyle, }, } = useDContext();
    // Responsive size resolution using useResponsiveProp
    const { responsivePropValue } = useResponsiveProp(true);
    const resolvedSize = useMemo(() => {
        if (!size)
            return undefined;
        if (typeof size === 'string')
            return size;
        return responsivePropValue(size);
    }, [responsivePropValue, size]);
    const [buttonWidth, setButtonWidth] = useState();
    const buttonRef = useRef(null);
    const isDisabled = useMemo(() => disabled || loading, [disabled, loading]);
    const content = useMemo(() => children || text, [children, text]);
    const classes = useMemo(() => {
        const variantClass = variant === 'solid'
            ? `btn-${color}`
            : `btn-${variant}-${color}`;
        return {
            btn: true,
            [variantClass]: true,
            [`btn-${resolvedSize}`]: !!resolvedSize,
            loading,
        };
    }, [variant, color, loading, resolvedSize]);
    const ariaLabel = useMemo(() => (loading
        ? loadingAriaLabel || ariaLabelProp || text
        : ariaLabelProp || text), [loading, loadingAriaLabel, text, ariaLabelProp]);
    const handleClick = useCallback((event) => {
        if (disabled || loading) {
            event.preventDefault();
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    }, [disabled, loading, onClick]);
    useEffect(() => {
        if (!loading && buttonRef.current) {
            const width = buttonRef.current.offsetWidth;
            if (width > 0)
                setButtonWidth(width);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content, iconEnd, iconStart]);
    if (href) {
        return (jsxs("a", Object.assign({ href: href, target: target, rel: rel, ref: (node) => {
                buttonRef.current = node;
                if (typeof ref === 'function')
                    ref(node);
                // eslint-disable-next-line max-len
                // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
                else if (ref)
                    ref.current = node;
            }, className: classNames(classes, className), style: Object.assign(Object.assign({}, style), (loading && buttonWidth
                ? { minWidth: `${buttonWidth}px` }
                : undefined)), "aria-label": ariaLabel, "aria-busy": loading, "aria-disabled": isDisabled, onClick: handleClick }, dataAttributes, { children: [loading && (jsxs("span", { className: "btn-loading", children: [jsx("span", { className: "spinner-border spinner-border-sm", "aria-hidden": "true" }), loadingText && jsx("span", { role: "status", children: loadingText })] })), !loading && (jsxs(Fragment, { children: [iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass !== null && iconStartFamilyClass !== void 0 ? iconStartFamilyClass : familyClass, familyPrefix: iconStartFamilyPrefix !== null && iconStartFamilyPrefix !== void 0 ? iconStartFamilyPrefix : familyPrefix, materialStyle: iconStartMaterialStyle !== null && iconStartMaterialStyle !== void 0 ? iconStartMaterialStyle : materialStyle })), content, iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass !== null && iconEndFamilyClass !== void 0 ? iconEndFamilyClass : familyClass, familyPrefix: iconEndFamilyPrefix !== null && iconEndFamilyPrefix !== void 0 ? iconEndFamilyPrefix : familyPrefix, materialStyle: iconEndMaterialStyle !== null && iconEndMaterialStyle !== void 0 ? iconEndMaterialStyle : materialStyle }))] }))] })));
    }
    return (jsxs("button", Object.assign({ ref: (node) => {
            buttonRef.current = node;
            if (typeof ref === 'function')
                ref(node);
            // eslint-disable-next-line max-len
            // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
            else if (ref)
                ref.current = node;
        }, 
        // eslint-disable-next-line react/button-has-type
        type: type, className: classNames(classes, className), style: Object.assign(Object.assign({}, style), (loading && buttonWidth
            ? { minWidth: `${buttonWidth}px` }
            : undefined)), disabled: isDisabled, "aria-label": ariaLabel, "aria-busy": loading, "aria-disabled": isDisabled, onClick: handleClick }, dataAttributes, rest, { children: [loading && (jsxs("span", { className: "btn-loading", children: [jsx("span", { className: "spinner-border spinner-border-sm", "aria-hidden": "true" }), loadingText && jsx("span", { role: "status", children: loadingText })] })), !loading && (jsxs(Fragment, { children: [iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass !== null && iconStartFamilyClass !== void 0 ? iconStartFamilyClass : familyClass, familyPrefix: iconStartFamilyPrefix !== null && iconStartFamilyPrefix !== void 0 ? iconStartFamilyPrefix : familyPrefix, materialStyle: iconStartMaterialStyle !== null && iconStartMaterialStyle !== void 0 ? iconStartMaterialStyle : materialStyle })), content, iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass !== null && iconEndFamilyClass !== void 0 ? iconEndFamilyClass : familyClass, familyPrefix: iconEndFamilyPrefix !== null && iconEndFamilyPrefix !== void 0 ? iconEndFamilyPrefix : familyPrefix, materialStyle: iconEndMaterialStyle !== null && iconEndMaterialStyle !== void 0 ? iconEndMaterialStyle : materialStyle }))] }))] })));
});
DButton.displayName = 'DButton';

export { DButton as default };
//# sourceMappingURL=DButton.js.map
