'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('classnames');
var tslib = require('tslib');
var reactDom = require('react-dom');
var reactDropzone = require('react-dropzone');
var reactSplide = require('@splidejs/react-splide');
var currency = require('currency.js');
var DatePicker = require('react-datepicker');
var dateFns = require('date-fns');
var Select = require('react-select');
var mask = require('@react-input/mask');
var ResponsivePagination = require('react-responsive-pagination');
var react = require('@floating-ui/react');
var ContentLoader = require('react-content-loader');
var reactHotToast = require('react-hot-toast');
var i18n = require('i18next');
var reactI18next = require('react-i18next');

const PREFIX_BS = 'bs-';

function DIconBase({ icon, theme, style, className, size = '1.5rem', loading = false, loadingDuration = 1.8, hasCircle = false, circleSize = `calc(var(--${PREFIX_BS}icon-component-size) * 1)`, color, backgroundColor, materialStyle = false, familyClass = 'bi', familyPrefix = 'bi-', dataAttributes, }) {
    const colorStyle = React.useMemo(() => {
        if (color) {
            return { [`--${PREFIX_BS}icon-component-color`]: color };
        }
        if (theme) {
            return { [`--${PREFIX_BS}icon-component-color`]: `var(--${PREFIX_BS}${theme})` };
        }
        return {};
    }, [color, theme]);
    const backgroundStyle = React.useMemo(() => {
        if (backgroundColor) {
            return { [`--${PREFIX_BS}icon-component-bg-color`]: backgroundColor };
        }
        if (hasCircle) {
            if (theme) {
                return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}${theme}-rgb), 0.1)` };
            }
            return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}body-color-rgb), 0.1)` };
        }
        return {};
    }, [backgroundColor, hasCircle, theme]);
    const circleSizeStyle = React.useMemo(() => {
        if (hasCircle) {
            return { [`--${PREFIX_BS}icon-component-padding`]: circleSize };
        }
        return { [`--${PREFIX_BS}icon-component-padding`]: '0' };
    }, [circleSize, hasCircle]);
    const generateStyleVariables = React.useMemo(() => (Object.assign(Object.assign(Object.assign(Object.assign({ [`--${PREFIX_BS}icon-component-size`]: size, [`--${PREFIX_BS}icon-component-loading-duration`]: `${loadingDuration}s` }, colorStyle), backgroundStyle), circleSizeStyle), style)), [size, loadingDuration, colorStyle, backgroundStyle, circleSizeStyle, style]);
    const generateClasses = React.useMemo(() => (Object.assign(Object.assign({ 'd-icon': true, [familyClass]: true, 'd-icon-loading': loading }, !materialStyle && {
        [`${familyPrefix}${icon}`]: true,
    }), className && { [className]: true })), [
        familyClass,
        loading,
        className,
        materialStyle,
        familyPrefix,
        icon,
    ]);
    return (jsxRuntime.jsx("i", Object.assign({ className: classNames(generateClasses), style: generateStyleVariables }, dataAttributes, { children: materialStyle && icon })));
}

function useDisableBodyScrollEffect(disable) {
    React.useEffect(() => {
        if (disable) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0';
        }
        else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        }
    }, [disable]);
}

function usePortal(portalName) {
    const [hasPortal, setHasPortal] = React.useState(false);
    React.useEffect(() => {
        const previousPortal = document.querySelector(`#${portalName}`);
        if (previousPortal) {
            previousPortal.remove();
        }
        const portal = document.createElement('div');
        portal.id = portalName;
        portal.className = 'd-portal';
        document.body.appendChild(portal);
        setHasPortal(true);
    }, [portalName]);
    return { created: hasPortal };
}

/**
 * useStackState inspired from rooks
 * @see https://github.com/imbhargav5/rooks/blob/main/packages/rooks/src/hooks/useStackState.ts
 * @description Manages a stack with react hooks.
 * @param initialList Initial value of the list
 * @returns The list and controls to modify the stack
 * @see https://react-hooks.org/docs/useStackState
 */
function useStackState(initialList = []) {
    const [list, setList] = React.useState(initialList);
    const push = React.useCallback((item) => (setList((prevList) => [
        ...prevList,
        item,
    ])), []);
    const pop = React.useCallback(() => (setList((prevList) => (prevList.slice(0, prevList.length - 1)))), []);
    const peek = React.useCallback(() => list.at(-1), [list]);
    const clear = React.useCallback(() => setList([]), []);
    const isEmpty = React.useCallback(() => list.length === 0, [list.length]);
    const controls = React.useMemo(() => ({
        clear,
        isEmpty,
        length: list.length,
        peek,
        pop,
        push,
    }), [
        clear,
        isEmpty,
        list.length,
        peek,
        pop,
        push,
    ]);
    return [list, controls];
}

const DPortalContext = React.createContext(undefined);
function DPortalContextProvider({ portalName, children, availablePortals, }) {
    const { created } = usePortal(portalName);
    const [stack, { push, pop, isEmpty }] = useStackState([]);
    useDisableBodyScrollEffect(Boolean(stack.length));
    const openPortal = React.useCallback((name, payload) => {
        if (!availablePortals) {
            throw new Error(`there is no component for portal ${name.toString()}`);
        }
        const Component = availablePortals[name];
        if (!Component) {
            throw new Error(`there is no component for portal ${name.toString()}`);
        }
        push({
            name,
            Component,
            payload,
        });
    }, [availablePortals, push]);
    const closePortal = React.useCallback(() => {
        if (isEmpty()) {
            return;
        }
        pop();
    }, [isEmpty, pop]);
    const value = React.useMemo(() => ({
        stack,
        openPortal,
        closePortal,
    }), [stack, openPortal, closePortal]);
    const handleClose = React.useCallback((target) => {
        if (!(target instanceof HTMLDivElement)) {
            return;
        }
        if (target.classList.contains('portal') && !('bsBackdrop' in target.dataset)) {
            closePortal();
            return;
        }
        if (target.classList.contains('backdrop')) {
            const lastPortal = target.nextElementSibling;
            if (lastPortal && lastPortal.classList.contains('portal') && !('bsBackdrop' in lastPortal.dataset)) {
                closePortal();
            }
        }
    }, [closePortal]);
    React.useEffect(() => {
        const keyEvent = (event) => {
            if (event.key === 'Escape') {
                const lastPortal = document.querySelector(`#${portalName} > div > div:last-child`);
                if (lastPortal) {
                    handleClose(lastPortal);
                }
            }
        };
        if (stack.length !== 0) {
            window.addEventListener('keydown', keyEvent);
        }
        return () => {
            window.removeEventListener('keydown', keyEvent);
        };
    }, [handleClose, portalName, stack.length]);
    return (jsxRuntime.jsxs(DPortalContext.Provider, { value: value, children: [children, created && reactDom.createPortal(
            // eslint-disable-next-line max-len
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            jsxRuntime.jsx("div", { onClick: ({ target }) => handleClose(target), onKeyDown: () => { }, children: stack.map(({ Component, name, payload, }) => (jsxRuntime.jsxs(React.Fragment, { children: [jsxRuntime.jsx("div", { className: "backdrop fade show" }), jsxRuntime.jsx(Component, { name: name, payload: payload })] }, name))) }), document.getElementById(portalName))] }));
}
function useDPortalContext() {
    const context = React.useContext(DPortalContext);
    if (context === undefined) {
        throw new Error('usePortalContext was used outside of PortalContextProvider');
    }
    return context;
}

function getCssVariable(variable) {
    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue(variable).trim();
}

const DEFAULT_STATE = {
    language: 'en',
    currency: {
        symbol: '$',
        precision: 2,
        separator: ',',
        decimal: '.',
    },
    icon: {
        familyClass: 'bi',
        familyPrefix: 'bi-',
        materialStyle: false,
    },
    iconMap: {
        x: 'x',
        xLg: 'x-lg',
        chevronUp: 'chevron-up',
        chevronDown: 'chevron-down',
        chevronLeft: 'chevron-left',
        chevronRight: 'chevron-right',
        upload: 'cloud-upload',
        calendar: 'calendar',
        check: 'check',
        alert: {
            warning: 'exclamation-circle',
            danger: 'exclamation-triangle',
            success: 'check-circle',
            info: 'info-circle',
            dark: 'info-circle',
            light: 'info-circle',
            primary: 'info-circle',
            secondary: 'info-circle',
        },
        input: {
            invalid: 'exclamation-circle',
            valid: 'check',
            search: 'search',
            show: 'eye',
            hide: 'eye-slash',
            increase: 'plus-square',
            decrease: 'dash-square',
        },
    },
    breakpoints: {
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
        xxl: '',
    },
    setContext: () => { },
    portalName: 'd-portal',
};
const DContext = React.createContext(DEFAULT_STATE);
function DContextProvider({ language = DEFAULT_STATE.language, currency = DEFAULT_STATE.currency, icon = DEFAULT_STATE.icon, iconMap = DEFAULT_STATE.iconMap, portalName = DEFAULT_STATE.portalName, availablePortals, children, }) {
    const [internalContext, setInternalContext,] = React.useState({
        language,
        currency,
        icon,
        iconMap,
        breakpoints: DEFAULT_STATE.breakpoints,
    });
    const setContext = React.useCallback((newValue) => (setInternalContext((prevInternalContext) => (Object.assign(Object.assign({}, prevInternalContext), newValue)))), []);
    React.useLayoutEffect(() => {
        console.log('context');
        setContext({
            breakpoints: {
                xs: getCssVariable(`--${PREFIX_BS}breakpoint-xs`),
                sm: getCssVariable(`--${PREFIX_BS}breakpoint-sm`),
                md: getCssVariable(`--${PREFIX_BS}breakpoint-md`),
                lg: getCssVariable(`--${PREFIX_BS}breakpoint-lg`),
                xl: getCssVariable(`--${PREFIX_BS}breakpoint-xl`),
                xxl: getCssVariable(`--${PREFIX_BS}breakpoint-xxl`),
            },
        });
    }, [setContext]);
    const value = React.useMemo(() => (Object.assign(Object.assign({}, internalContext), { setContext })), [internalContext, setContext]);
    return (jsxRuntime.jsx(DContext.Provider, { value: value, children: jsxRuntime.jsx(DPortalContextProvider, { portalName: portalName, availablePortals: availablePortals, children: children }) }));
}
function useDContext() {
    const context = React.useContext(DContext);
    if (context === undefined) {
        throw new Error('useDContext was used outside of DContextProvider');
    }
    return context;
}

function DIcon(_a) {
    var { familyClass: propFamilyClass, familyPrefix: propFamilyPrefix, materialStyle: propMaterialStyle } = _a, props = tslib.__rest(_a, ["familyClass", "familyPrefix", "materialStyle"]);
    const { icon: { familyClass, familyPrefix, materialStyle, }, } = useDContext();
    return (jsxRuntime.jsx(DIconBase, Object.assign({ familyClass: propFamilyClass || familyClass, familyPrefix: propFamilyPrefix || familyPrefix, materialStyle: propMaterialStyle || materialStyle }, props)));
}

function DAlert({ theme = 'success', icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle = false, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle = false, showClose, onClose, children, id, className, style, dataAttributes, }) {
    const { iconMap: { alert, xLg, }, } = useDContext();
    const icon = React.useMemo(() => iconProp || alert[theme], [alert, iconProp, theme]);
    const iconClose = React.useMemo(() => (iconCloseProp || xLg), [iconCloseProp, xLg]);
    const generateClasses = React.useMemo(() => (Object.assign({ alert: true, [`alert-${theme}`]: true, 'fade show': !!showClose }, className && { [className]: true })), [theme, showClose, className]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: classNames(generateClasses), style: style, role: "alert", id: id }, dataAttributes, { children: [icon && (jsxRuntime.jsx(DIcon, { className: "alert-icon", icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })), jsxRuntime.jsx("div", { className: "alert-text", children: children }), showClose && (jsxRuntime.jsx("button", { type: "button", className: "d-close", "aria-label": "Close", onClick: onClose, children: jsxRuntime.jsx(DIcon, { icon: iconClose, familyClass: iconCloseFamilyClass, familyPrefix: iconCloseFamilyPrefix, materialStyle: iconCloseMaterialStyle }) }))] })));
}

function DAvatar({ id, size, image, name: nameProp, useNameAsInitials = false, theme = 'secondary', variant, className, style, dataAttributes, }) {
    const generateClasses = React.useMemo(() => {
        const variantClass = variant
            ? `d-avatar-${variant}-${theme}`
            : `d-avatar-${theme}`;
        return {
            'd-avatar': true,
            [variantClass]: true,
            [`d-avatar-${size}`]: !!size,
        };
    }, [variant, theme, size]);
    const name = React.useMemo(() => {
        if (!nameProp) {
            return undefined;
        }
        if (useNameAsInitials) {
            return nameProp;
        }
        return nameProp.split(/\s+/).map((word) => word.charAt(0)).join('').toUpperCase();
    }, [nameProp, useNameAsInitials]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: classNames(generateClasses, className), style: style, id: id }, dataAttributes, { children: [image && jsxRuntime.jsx("img", { src: image, alt: nameProp, className: "d-avatar-img" }), (name && !image) && jsxRuntime.jsx("span", { className: "d-avatar-name", children: name })] })));
}

function DBadge({ text, soft = false, theme = 'primary', id, rounded, className, style, iconStart, iconEnd, iconMaterialStyle, iconFamilyClass, iconFamilyPrefix, dataAttributes, }) {
    const generateClasses = React.useMemo(() => ({
        badge: true,
        [`badge-${theme}`]: !!theme && !soft,
        [`badge-soft-${theme}`]: !!theme && soft,
        'rounded-pill': !!rounded,
    }), [rounded, soft, theme]);
    return (jsxRuntime.jsxs("span", Object.assign({ className: classNames(generateClasses, className), style: style }, id && { id }, dataAttributes, { children: [iconStart && (jsxRuntime.jsx(DIcon, { icon: iconStart, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })), jsxRuntime.jsx("span", { children: text }), iconEnd && (jsxRuntime.jsx(DIcon, { icon: iconEnd, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle }))] })));
}

function DBoxFile(_a) {
    var { icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, disabled = false, children, className, style, dataAttributes } = _a, dropzoneOptions = tslib.__rest(_a, ["icon", "iconFamilyClass", "iconFamilyPrefix", "iconMaterialStyle", "disabled", "children", "className", "style", "dataAttributes"]);
    const { acceptedFiles, getRootProps, getInputProps, } = reactDropzone.useDropzone(Object.assign({ disabled }, dropzoneOptions));
    const { iconMap: { upload, }, } = useDContext();
    const icon = React.useMemo(() => iconProp || upload, [iconProp, upload]);
    return (jsxRuntime.jsxs("section", Object.assign({ className: classNames('d-box-file', {
            'd-box-file-selected': !!acceptedFiles.length,
        }, className), style: style }, dataAttributes, { children: [jsxRuntime.jsxs("div", Object.assign({}, getRootProps({
                className: classNames('d-box-file-dropzone', {
                    disabled,
                }),
            }), { children: [jsxRuntime.jsx("input", Object.assign({}, getInputProps())), jsxRuntime.jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle }), jsxRuntime.jsx("div", { className: "d-box-content", children: children })] })), !!acceptedFiles.length && (jsxRuntime.jsx("aside", { className: "d-box-files", children: acceptedFiles.map((file) => (jsxRuntime.jsx("div", { className: "d-box-files-text", children: `${file.name} - ${file.size} bytes` }, file.name))) }))] })));
}

function DButton({ theme = 'primary', size, variant, state, text = '', ariaLabel, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartMaterialStyle, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndMaterialStyle, value, type = 'button', loading = false, loadingAriaLabel, disabled = false, stopPropagationEnabled = true, className, style, form, dataAttributes, onClick, }) {
    const generateClasses = React.useMemo(() => {
        const variantClass = variant
            ? `btn-${variant}-${theme}`
            : `btn-${theme}`;
        return Object.assign(Object.assign(Object.assign({ btn: true, [variantClass]: true }, size && { [`btn-${size}`]: true }), (state && state !== 'disabled') && { [state]: true }), { loading });
    }, [variant, theme, size, state, loading]);
    const clickHandler = React.useCallback((event) => {
        if (stopPropagationEnabled) {
            event.stopPropagation();
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    }, [stopPropagationEnabled, onClick]);
    const isDisabled = React.useMemo(() => (state === 'disabled' || loading || disabled), [state, loading, disabled]);
    const newAriaLabel = React.useMemo(() => (loading
        ? (loadingAriaLabel || ariaLabel || text)
        : (ariaLabel || text)), [loading, loadingAriaLabel, ariaLabel, text]);
    return (jsxRuntime.jsxs("button", Object.assign({ className: classNames(generateClasses, className), style: style, type: type, disabled: isDisabled, onClick: clickHandler, "aria-label": newAriaLabel, form: form }, dataAttributes, value && { value }, { children: [iconStart && (jsxRuntime.jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix, materialStyle: iconStartMaterialStyle })), (text && !loading) && (jsxRuntime.jsx("span", { children: text })), loading && (jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) })), iconEnd && (jsxRuntime.jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix, materialStyle: iconEndMaterialStyle }))] })));
}

function DButtonIcon({ id, icon, size, className, variant, state, loadingAriaLabel, iconMaterialStyle, ariaLabel, theme = 'primary', type = 'button', loading = false, disabled = false, stopPropagationEnabled = true, style, iconFamilyClass, iconFamilyPrefix, dataAttributes, onClick, }) {
    const generateClasses = React.useMemo(() => {
        const variantClass = variant
            ? `btn-${variant}-${theme}`
            : `btn-${theme}`;
        return Object.assign(Object.assign(Object.assign({ 'btn d-button-icon': true, [variantClass]: true }, size && { [`btn-${size}`]: true }), (state && state !== 'disabled') && { [state]: true }), { loading });
    }, [variant, theme, size, state, loading]);
    const clickHandler = React.useCallback((event) => {
        if (stopPropagationEnabled) {
            event.stopPropagation();
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    }, [stopPropagationEnabled, onClick]);
    const isDisabled = React.useMemo(() => (state === 'disabled' || loading || disabled), [state, loading, disabled]);
    const newAriaLabel = React.useMemo(() => (loading
        ? (loadingAriaLabel || ariaLabel)
        : (ariaLabel)), [ariaLabel, loading, loadingAriaLabel]);
    return (jsxRuntime.jsx("button", Object.assign({ className: classNames(generateClasses, className), style: style, type: type, disabled: isDisabled, onClick: clickHandler, "aria-label": newAriaLabel, id: id }, dataAttributes, { children: loading
            ? (jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) }))
            : (jsxRuntime.jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })) })));
}

function DCardHeader({ className, style, children, }) {
    return (jsxRuntime.jsx("div", { className: classNames('card-header', className), style: style, children: children }));
}

function DCardBody({ className, style, children, }) {
    return (jsxRuntime.jsx("div", { className: classNames('card-body', className), style: style, children: children }));
}

function DCardFooter({ className, style, children, }) {
    return (jsxRuntime.jsx("div", { className: classNames('card-footer', className), style: style, children: children }));
}

function DCard({ className, style, children, dataAttributes, }) {
    return (jsxRuntime.jsx("div", Object.assign({ style: style, className: classNames('card', className) }, dataAttributes, { children: children })));
}
var DCard$1 = Object.assign(DCard, {
    Header: DCardHeader,
    Body: DCardBody,
    Footer: DCardFooter,
});

function DCarouselSlide(_a) {
    var { className } = _a, props = tslib.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(reactSplide.SplideSlide, Object.assign({ className: classNames('d-carousel-slide', className) }, props)));
}

function DCarousel(_a, ref) {
    var { children, className, style, options, dataAttributes } = _a, props = tslib.__rest(_a, ["children", "className", "style", "options", "dataAttributes"]);
    return (jsxRuntime.jsx(reactSplide.Splide, Object.assign({ className: classNames('d-carousel', className), style: style, ref: ref, options: Object.assign(Object.assign({}, options), { classes: {
                // Arrows
                arrows: 'splide__arrows d-carousel-arrows',
                arrow: 'splide__arrow d-carousel-arrow',
                prev: 'splide__arrow--prev d-carousel-arrow-prev',
                next: 'splide__arrow--next d-carousel-arrow-next',
                // Paginator
                pagination: 'splide__pagination d-carousel-pagination',
                page: 'splide__pagination__page d-carousel-pagination-page',
            } }) }, dataAttributes, props, { children: children })));
}
const ForwardedDCarousel = React.forwardRef(DCarousel);
ForwardedDCarousel.displayName = 'DCarousel';
var DCarousel$1 = Object.assign(ForwardedDCarousel, {
    Slide: DCarouselSlide,
});

function DChip({ theme = 'primary', text, icon, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle, showClose = false, closeAriaLabel = 'close', className, style, dataAttributes, onClose, }) {
    const generateClasses = React.useMemo(() => ({
        'd-chip': true,
        [`d-chip-${theme}`]: !!theme,
    }), [theme]);
    const { iconMap: { xLg, }, } = useDContext();
    const iconClose = React.useMemo(() => iconCloseProp || xLg, [iconCloseProp, xLg]);
    return (jsxRuntime.jsxs("span", Object.assign({ className: classNames(generateClasses, className), style: style }, dataAttributes, { children: [icon && (jsxRuntime.jsx("div", { className: "d-chip-icon-container", children: jsxRuntime.jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle }) })), jsxRuntime.jsx("span", { children: text }), showClose && (jsxRuntime.jsx("button", { type: "button", className: "d-chip-icon-container", onClick: onClose, "aria-label": closeAriaLabel, children: jsxRuntime.jsx(DIcon, { icon: iconClose, familyClass: iconCloseFamilyClass, familyPrefix: iconCloseFamilyPrefix, materialStyle: iconCloseMaterialStyle }) }))] })));
}

function DCollapse({ id, className, style, Component, hasSeparator = false, defaultCollapsed = false, onChange, children, iconOpen: iconOpenProp, iconClose: iconCloseProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle = false, dataAttributes, }) {
    const [toggle, setToggle] = React.useState(defaultCollapsed);
    const onChangeCollapse = () => setToggle((prev) => !prev);
    const { iconMap: { chevronDown, chevronUp, }, } = useDContext();
    const iconOpen = React.useMemo(() => iconOpenProp || chevronUp, [chevronUp, iconOpenProp]);
    const iconClose = React.useMemo(() => iconCloseProp || chevronDown, [chevronDown, iconCloseProp]);
    React.useEffect(() => {
        if (onChange) {
            onChange(toggle);
        }
    }, [toggle, onChange]);
    React.useEffect(() => {
        setToggle(defaultCollapsed);
    }, [defaultCollapsed]);
    const generateStyles = React.useMemo(() => ({
        [`--${PREFIX_BS}collapse-separator-display`]: hasSeparator ? 'block' : 'none',
    }), [hasSeparator]);
    return (jsxRuntime.jsxs("div", Object.assign({ id: id, className: classNames('collapse-container', className), style: style }, dataAttributes, { children: [jsxRuntime.jsxs("button", { className: "collapse-button", type: "button", onClick: onChangeCollapse, children: [jsxRuntime.jsx("div", { className: "flex-grow-1", children: Component }), jsxRuntime.jsx(DIcon, { color: `var(--${PREFIX_BS}gray)`, size: `var(--${PREFIX_BS}fs-small)`, icon: toggle ? iconOpen : iconClose, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })] }), toggle && (jsxRuntime.jsx("div", { className: classNames({
                    'collapse-body': true,
                }), style: generateStyles, children: children }))] })));
}

function formatCurrency(amount, options) {
    return currency(amount, options).format();
}

function useFormatCurrency(...args) {
    const { currency } = useDContext();
    const format = React.useCallback((value, currencyOptions) => formatCurrency(value, currencyOptions || currency), [currency]);
    const values = (args || []).map((value) => (formatCurrency(value !== null && value !== void 0 ? value : 0, currency)));
    return {
        format,
        values,
    };
}

function DCurrencyText({ value, className, style, dataAttributes, }) {
    const { values: [valueFormatted] } = useFormatCurrency(value);
    return (jsxRuntime.jsx("span", Object.assign({ className: className, style: style }, dataAttributes, { children: valueFormatted })));
}

/* eslint-disable */
/**
 * This file is originally from `@primer/react`
 * The original source for this lived in the URL below.
 *
 * @see https://github.com/primer/react/blob/216d2a9f57b8acb0701ab4e04a23e057fc325c90/src/hooks/useProvidedRefOrCreate.ts
 */
/**
 * There are some situations where we only want to create a new ref if one is not provided to a component
 * or hook as a prop. However, due to the `rules-of-hooks`, we cannot conditionally make a call to `React.useRef`
 * only in the situations where the ref is not provided as a prop.
 * This hook aims to encapsulate that logic, so the consumer doesn't need to be concerned with violating `rules-of-hooks`.
 * @param providedRef The ref to use - if undefined, will use the ref from a call to React.useRef
 * @type TRef The type of the RefObject which should be created.
 */
function useProvidedRefOrCreate(providedRef) {
    const createdRef = React.useRef(null);
    return providedRef !== null && providedRef !== void 0 ? providedRef : createdRef;
}

function DInput(_a, ref) {
    var { id: idProp, style, className, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, labelIconMaterialStyle, disabled = false, loading = false, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconStart, iconStartDisabled, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconStartTabIndex, iconStartMaterialStyle, iconEnd, iconEndDisabled, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, iconEndMaterialStyle, hint, size, invalid = false, valid = false, floatingLabel = false, inputStart, inputEnd, value, placeholder = '', dataAttributes, onChange, onIconStartClick, onIconEndClick } = _a, inputProps = tslib.__rest(_a, ["id", "style", "className", "label", "labelIcon", "labelIconFamilyClass", "labelIconFamilyPrefix", "labelIconMaterialStyle", "disabled", "loading", "iconFamilyClass", "iconFamilyPrefix", "iconMaterialStyle", "iconStart", "iconStartDisabled", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconStartAriaLabel", "iconStartTabIndex", "iconStartMaterialStyle", "iconEnd", "iconEndDisabled", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "iconEndMaterialStyle", "hint", "size", "invalid", "valid", "floatingLabel", "inputStart", "inputEnd", "value", "placeholder", "dataAttributes", "onChange", "onIconStartClick", "onIconEndClick"]);
    const inputRef = useProvidedRefOrCreate(ref);
    const innerId = React.useId();
    const id = React.useMemo(() => idProp || innerId, [idProp, innerId]);
    const handleOnChange = React.useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event.currentTarget.value);
    }, [onChange]);
    const handleOnIconStartClick = React.useCallback(() => {
        onIconStartClick === null || onIconStartClick === void 0 ? void 0 : onIconStartClick(value);
    }, [onIconStartClick, value]);
    const handleOnIconEndClick = React.useCallback(() => {
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick(value);
    }, [onIconEndClick, value]);
    const ariaDescribedby = React.useMemo(() => ([
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
    const inputComponent = React.useMemo(() => (jsxRuntime.jsx("input", Object.assign({ ref: inputRef, id: id, className: classNames('form-control', {
            [`form-control-${size}`]: !!size,
            'is-invalid': invalid,
            'is-valid': valid,
        }), disabled: disabled || loading, value: value, onChange: handleOnChange }, (floatingLabel || placeholder) && { placeholder: floatingLabel ? '' : placeholder }, ariaDescribedby && { 'aria-describedby': ariaDescribedby }, inputProps))), [
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
        size,
    ]);
    const labelComponent = React.useMemo(() => (jsxRuntime.jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsxRuntime.jsx(DIcon, { icon: labelIcon, size: `var(--${PREFIX_BS}label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix, materialStyle: labelIconMaterialStyle }))] })), [
        id,
        label,
        labelIcon,
        labelIconFamilyClass,
        labelIconFamilyPrefix,
        labelIconMaterialStyle,
    ]);
    const dynamicComponent = React.useMemo(() => {
        if (floatingLabel) {
            return (jsxRuntime.jsxs("div", { className: "form-floating", children: [inputComponent, labelComponent] }));
        }
        return inputComponent;
    }, [floatingLabel, inputComponent, labelComponent]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: className, style: style }, dataAttributes, { children: [label && !floatingLabel && labelComponent, jsxRuntime.jsxs("div", { className: classNames({
                    'input-group': true,
                    'has-validation': invalid || valid,
                }), children: [!!inputStart && (jsxRuntime.jsx("div", { className: "input-group-text", id: `${id}InputStart`, children: inputStart })), iconStart && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: handleOnIconStartClick, disabled: disabled || loading || iconStartDisabled, "aria-label": iconStartAriaLabel, tabIndex: onIconStartClick ? iconStartTabIndex : -1, children: jsxRuntime.jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix, materialStyle: iconStartMaterialStyle }) })), dynamicComponent, (iconEnd && !loading) && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: handleOnIconEndClick, disabled: disabled || loading || iconEndDisabled, "aria-label": iconEndAriaLabel, tabIndex: onIconEndClick ? iconEndTabIndex : -1, children: jsxRuntime.jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix, materialStyle: iconEndMaterialStyle }) })), loading && (jsxRuntime.jsx("div", { className: "input-group-text", id: `${id}Loading`, children: jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) })), !!inputEnd && (jsxRuntime.jsx("div", { className: "input-group-text", id: `${id}InputEnd`, children: inputEnd }))] }), hint && (jsxRuntime.jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}
const ForwardedDInput = React.forwardRef(DInput);
ForwardedDInput.displayName = 'DInput';

function DDatePickerTime(_a) {
    var { value, onChange, id, label, className, style } = _a, props = tslib.__rest(_a, ["value", "onChange", "id", "label", "className", "style"]);
    return (jsxRuntime.jsxs("div", { className: classNames('d-flex align-items-center gap-2 flex-column d-datepicker-time', className), style: style, children: [label && (jsxRuntime.jsx("label", { htmlFor: id, className: "d-datepicker-time-label", children: label })), jsxRuntime.jsx(ForwardedDInput, Object.assign({ className: "w-100" }, onChange && {
                onChange,
            }, { type: "time", id: id, value: value }, props))] }));
}

function DDatePickerInput(_a, ref) {
    var { value, onClick, id, iconEnd, className, style, inputLabel, readOnly: ignored } = _a, props = tslib.__rest(_a, ["value", "onClick", "id", "iconEnd", "className", "style", "inputLabel", "readOnly"]);
    return (jsxRuntime.jsx(ForwardedDInput, Object.assign({ ref: ref, onClick: onClick, readOnly: true, type: "text", id: id, value: value, onIconEndClick: onClick, iconEnd: iconEnd, className: className, style: style, label: inputLabel }, props)));
}
const ForwardedDDatePickerInput = React.forwardRef(DDatePickerInput);
ForwardedDDatePickerInput.displayName = 'DDatePickerInput';

function DInputCheck(_a) {
    var { id: idProp, type, name, label, ariaLabel, checked = false, disabled = false, invalid = false, valid = false, indeterminate, value, hint, onChange, className, style, dataAttributes } = _a, props = tslib.__rest(_a, ["id", "type", "name", "label", "ariaLabel", "checked", "disabled", "invalid", "valid", "indeterminate", "value", "hint", "onChange", "className", "style", "dataAttributes"]);
    const innerRef = React.useRef(null);
    const innerId = React.useId();
    const id = React.useMemo(() => idProp || innerId, [idProp, innerId]);
    const handleChange = React.useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    const ariaDescribedby = React.useMemo(() => ([
        !!hint && `${id}Hint`,
    ]
        .filter(Boolean)
        .join(' ')), [
        id,
        hint,
    ]);
    React.useEffect(() => {
        if (innerRef.current) {
            innerRef.current.indeterminate = Boolean(indeterminate);
        }
    }, [indeterminate]);
    React.useEffect(() => {
        if (innerRef.current) {
            innerRef.current.checked = checked;
        }
    }, [checked]);
    const inputComponent = React.useMemo(() => (jsxRuntime.jsx("input", Object.assign({ ref: innerRef, onChange: handleChange, className: classNames('form-check-input', {
            'is-invalid': invalid,
            'is-valid': valid,
        }, className), style: style, id: id, disabled: disabled, type: type, name: name, value: value, "aria-label": ariaLabel }, ariaDescribedby && { 'aria-describedby': ariaDescribedby }, props))), [
        handleChange,
        invalid,
        valid,
        className,
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
    return (jsxRuntime.jsxs("div", Object.assign({ className: "form-check" }, dataAttributes, { children: [inputComponent, jsxRuntime.jsx("label", { className: "form-check-label", htmlFor: id, children: label }), hint && (jsxRuntime.jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}

function DSelectOptionCheck(_a) {
    var { innerProps, children, isSelected } = _a, props = tslib.__rest(_a, ["innerProps", "children", "isSelected"]);
    return (jsxRuntime.jsx(Select.components.Option, Object.assign({ className: classNames({
            'd-select__option': true,
            'd-select__option--is-checkbox': true,
        }), isSelected: isSelected, innerProps: innerProps }, props, { children: jsxRuntime.jsxs("label", { htmlFor: `${innerProps.id}Check`, children: [jsxRuntime.jsx(DInputCheck, { type: "checkbox", checked: isSelected, id: `${innerProps.id}Check` }), children] }) })));
}

function DSelectOptionIcon(_a) {
    var { children, data } = _a, props = tslib.__rest(_a, ["children", "data"]);
    return (jsxRuntime.jsxs(Select.components.Option, Object.assign({ className: classNames({
            'd-select__option--has-icon': true,
        }), data: data }, props, { children: [jsxRuntime.jsx(DIcon, { icon: data.icon }), children] })));
}

function DSelectSingleValueIconText(_a) {
    var { children, getValue } = _a, props = tslib.__rest(_a, ["children", "getValue"]);
    const [value] = getValue();
    return (jsxRuntime.jsxs(Select.components.SingleValue, Object.assign({ className: classNames({
            'd-select__control--has-icon': true,
        }), getValue: getValue }, props, { children: [jsxRuntime.jsx(DIcon, { icon: value.icon }), children] })));
}

function DSelectDropdownIndicator(props) {
    const { iconMap: { chevronDown, }, } = useDContext();
    return (jsxRuntime.jsx(Select.components.DropdownIndicator, Object.assign({}, props, { children: jsxRuntime.jsx(DIcon, { icon: chevronDown }) })));
}

function DSelectClearIndicator(props) {
    const { iconMap: { xLg, }, } = useDContext();
    return (jsxRuntime.jsx(Select.components.ClearIndicator, Object.assign({}, props, { children: jsxRuntime.jsx(DIcon, { icon: xLg }) })));
}

function DSelectMultiValueRemove(props) {
    const { iconMap: { x, }, } = useDContext();
    return (jsxRuntime.jsx(Select.components.MultiValueRemove, Object.assign({}, props, { children: jsxRuntime.jsx(DIcon, { icon: x }) })));
}

function DSelectLoadingIndicator({ innerProps, }) {
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames({
            'd-select__indicator': true,
            'd-select__loading-indicator': true,
        }) }, innerProps, { children: jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) })));
}

function DSelectOptionEmoji(_a) {
    var { children, data } = _a, props = tslib.__rest(_a, ["children", "data"]);
    return (jsxRuntime.jsxs(Select.components.Option, Object.assign({ className: classNames({
            'd-select__option--has-icon': true,
        }), data: data }, props, { children: [jsxRuntime.jsx("span", { children: data.emoji }), jsxRuntime.jsx("span", { children: children })] })));
}

function DSelectSingleValueEmoji(_a) {
    var { children, getValue } = _a, props = tslib.__rest(_a, ["children", "getValue"]);
    const [value] = getValue();
    return (jsxRuntime.jsx(Select.components.SingleValue, Object.assign({ className: classNames({
            'd-select__control--has-icon': true,
        }), getValue: getValue }, props, { children: value.emoji })));
}

function DSelectSingleValueEmojiText(_a) {
    var { children, getValue } = _a, props = tslib.__rest(_a, ["children", "getValue"]);
    const [value] = getValue();
    return (jsxRuntime.jsxs(Select.components.SingleValue, Object.assign({ className: classNames({
            'd-select__control--has-icon': true,
        }), getValue: getValue }, props, { children: [jsxRuntime.jsx("span", { children: value.emoji }), jsxRuntime.jsx("span", { children: children })] })));
}

function DSelectPlaceholder(_a) {
    var { selectProps, innerProps: innerPropsProp, children } = _a, props = tslib.__rest(_a, ["selectProps", "innerProps", "children"]);
    const id = React.useMemo(() => `${selectProps.inputId}Placeholder`, [selectProps.inputId]);
    const innerProps = React.useMemo(() => (Object.assign(Object.assign({}, innerPropsProp), { id })), [innerPropsProp, id]);
    return (jsxRuntime.jsx(Select.components.Placeholder, Object.assign({ innerProps: innerProps, selectProps: selectProps }, props, { children: children })));
}

function DSelect(_a) {
    var { id: idProp, className, style, label, labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, hint, iconFamilyClass, iconFamilyPrefix, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconStartTabIndex, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, invalid, valid, menuWithMaxContent = false, disabled, clearable, loading, rtl, searchable, multi, components, defaultValue, placeholder, onIconStartClick, onIconEndClick, dataAttributes } = _a, props = tslib.__rest(_a, ["id", "className", "style", "label", "labelIcon", "labelIconFamilyClass", "labelIconFamilyPrefix", "hint", "iconFamilyClass", "iconFamilyPrefix", "iconStart", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconStartAriaLabel", "iconStartTabIndex", "iconEnd", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "invalid", "valid", "menuWithMaxContent", "disabled", "clearable", "loading", "rtl", "searchable", "multi", "components", "defaultValue", "placeholder", "onIconStartClick", "onIconEndClick", "dataAttributes"]);
    const innerId = React.useId();
    const id = React.useMemo(() => idProp || innerId, [idProp, innerId]);
    const handleOnIconStartClick = React.useCallback(() => {
        onIconStartClick === null || onIconStartClick === void 0 ? void 0 : onIconStartClick(defaultValue);
    }, [onIconStartClick, defaultValue]);
    const handleOnIconEndClick = React.useCallback(() => {
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick(defaultValue);
    }, [onIconEndClick, defaultValue]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: classNames('d-select', className, {
            disabled: disabled || loading,
        }), style: style }, dataAttributes, { children: [label && (jsxRuntime.jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsxRuntime.jsx(DIcon, { icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxRuntime.jsxs("div", { className: classNames({
                    'input-group': true,
                    'has-validation': invalid,
                    disabled: disabled || loading,
                }), children: [iconStart && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: handleOnIconStartClick, disabled: disabled || loading, "aria-label": iconStartAriaLabel, tabIndex: iconStartTabIndex, children: jsxRuntime.jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix }) })), jsxRuntime.jsx(Select, Object.assign({ id: `${id}Container`, inputId: id, styles: {
                            control: (base) => (Object.assign(Object.assign({}, base), { minHeight: 'unset' })),
                            container: (base) => (Object.assign(Object.assign({}, base), { flex: 1 })),
                            menu: (base) => (Object.assign(Object.assign({}, base), { width: menuWithMaxContent ? 'max-context' : '100%', zIndex: 1000 })),
                        }, className: classNames('d-select-component', {
                            'is-invalid': invalid,
                            'is-valid': valid,
                        }), classNamePrefix: "d-select", isDisabled: disabled || loading, isClearable: clearable, isLoading: loading, isRtl: rtl, isSearchable: searchable, isMulti: multi, defaultValue: defaultValue, placeholder: placeholder, unstyled: true, components: Object.assign({ Placeholder: DSelectPlaceholder, DropdownIndicator: DSelectDropdownIndicator, ClearIndicator: DSelectClearIndicator, MultiValueRemove: DSelectMultiValueRemove, LoadingIndicator: DSelectLoadingIndicator }, components) }, props)), (iconEnd && !loading) && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: handleOnIconEndClick, disabled: disabled || loading, "aria-label": iconEndAriaLabel, tabIndex: iconEndTabIndex, children: iconEnd && (jsxRuntime.jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) }))] }), hint && (jsxRuntime.jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}
var DSelect$1 = Object.assign(DSelect, {
    OptionCheck: DSelectOptionCheck,
    OptionIcon: DSelectOptionIcon,
    SingleValueIconText: DSelectSingleValueIconText,
    DropdownIndicator: DSelectDropdownIndicator,
    ClearIndicator: DSelectClearIndicator,
    MultiValueRemove: DSelectMultiValueRemove,
    LoadingIndicator: DSelectLoadingIndicator,
    OptionEmoji: DSelectOptionEmoji,
    SingleValueEmoji: DSelectSingleValueEmoji,
    SingleValueEmojiText: DSelectSingleValueEmojiText,
    Placeholder: DSelectPlaceholder,
});

function DDatePickerHeader({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, iconPrevMonth, iconNextMonth, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, prevMonthAriaLabel = 'decrease month', nextMonthAriaLabel = 'increase month', iconSize, buttonVariant, buttonTheme, locale, style, className, minYearSelect, maxYearSelect, }) {
    const arrayYears = React.useMemo(() => Array.from({ length: maxYearSelect - minYearSelect + 1 }, (_, index) => minYearSelect + index), [maxYearSelect, minYearSelect]);
    const years = React.useMemo(() => arrayYears.map((year) => ({
        label: year.toString(),
        value: year,
    })), [arrayYears]);
    const defaultYear = React.useMemo(() => years.find((year) => year.value === dateFns.getYear(date)), [date, years]);
    const arrayMonths = React.useMemo(() => Array.from({ length: 12 }, (_, i) => dateFns.format(new Date(2000, i), 'LLLL', { locale })), [locale]);
    const months = React.useMemo(() => arrayMonths.map((month, i) => ({
        label: month,
        value: i,
    })), [arrayMonths]);
    const defaultMonth = React.useMemo(() => ({
        label: arrayMonths[dateFns.getMonth(date)],
        value: dateFns.getMonth(date),
    }), [arrayMonths, date]);
    return (jsxRuntime.jsxs("div", { className: classNames('d-flex align-items-center d-datepicker-header', className), style: style, children: [jsxRuntime.jsx(DButton, { iconStart: iconPrevMonth, iconStartFamilyClass: iconFamilyClass, iconStartFamilyPrefix: iconFamilyPrefix, iconStartMaterialStyle: iconMaterialStyle, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: decreaseMonth, disabled: prevMonthButtonDisabled, ariaLabel: prevMonthAriaLabel, className: "header-button" }), jsxRuntime.jsxs("div", { className: "d-flex justify-content-center flex-grow-1", children: [jsxRuntime.jsx(DSelect$1, { options: months, value: defaultMonth, defaultValue: defaultMonth, onChange: (month) => changeMonth((month === null || month === void 0 ? void 0 : month.value) || 0), searchable: false }), jsxRuntime.jsx(DSelect$1, { options: years, value: defaultYear, defaultValue: defaultYear, onChange: (year) => changeYear(Number(year === null || year === void 0 ? void 0 : year.value)), searchable: false })] }), jsxRuntime.jsx(DButton, { iconStart: iconNextMonth, iconStartFamilyClass: iconFamilyClass, iconStartFamilyPrefix: iconFamilyPrefix, iconStartMaterialStyle: iconMaterialStyle, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: increaseMonth, disabled: nextMonthButtonDisabled, ariaLabel: nextMonthAriaLabel, className: "header-button" })] }));
}

/**
 * @deprecated
 */
function DDatePicker(_a) {
    var { date, selectsRange = false, inputLabel, inputHint, inputAriaLabel, inputActionAriaLabel = 'open calendar', inputId = 'input-calendar', timeId = 'input-time', timeLabel, iconInput: iconInputProp, iconHeaderPrevMonth: iconHeaderPrevMonthProp, iconHeaderNextMonth: iconHeaderNextMonthProp, iconMaterialStyle: iconMaterialStyleProp, iconFamilyClass, iconFamilyPrefix, minYearSelect = 1900, maxYearSelect = 2100, iconHeaderSize = 'sm', headerPrevMonthAriaLabel = 'decrease month', headerNextMonthAriaLabel = 'increase month', headerButtonVariant = 'link', headerButtonTheme = 'dark', invalid = false, valid = false, renderCustomHeader: renderCustomHeaderProp, locale, className, formatWeekDay: formatWeekDayProp, style, dataAttributes, placeholder } = _a, props = tslib.__rest(_a, ["date", "selectsRange", "inputLabel", "inputHint", "inputAriaLabel", "inputActionAriaLabel", "inputId", "timeId", "timeLabel", "iconInput", "iconHeaderPrevMonth", "iconHeaderNextMonth", "iconMaterialStyle", "iconFamilyClass", "iconFamilyPrefix", "minYearSelect", "maxYearSelect", "iconHeaderSize", "headerPrevMonthAriaLabel", "headerNextMonthAriaLabel", "headerButtonVariant", "headerButtonTheme", "invalid", "valid", "renderCustomHeader", "locale", "className", "formatWeekDay", "style", "dataAttributes", "placeholder"]);
    const { iconMap: { calendar, chevronLeft, chevronRight, }, } = useDContext();
    const selected = React.useMemo(() => (date ? dateFns.parseISO(date) : null), [date]);
    const iconInput = React.useMemo(() => iconInputProp || calendar, [calendar, iconInputProp]);
    const handleFormatWeekDay = React.useMemo(() => (formatWeekDayProp
        ? (day) => formatWeekDayProp(day)
        : (day) => day.substring(0, 1)), [formatWeekDayProp]);
    const iconPrevMonth = React.useMemo(() => iconHeaderPrevMonthProp || chevronLeft, [chevronLeft, iconHeaderPrevMonthProp]);
    const iconNextMonth = React.useMemo(() => iconHeaderNextMonthProp || chevronRight, [chevronRight, iconHeaderNextMonthProp]);
    const DatePickerHeader = React.useCallback((headerProps) => (jsxRuntime.jsx(DDatePickerHeader, Object.assign({}, headerProps, locale && { locale }, { iconPrevMonth: iconPrevMonth, iconNextMonth: iconNextMonth, iconMaterialStyle: iconMaterialStyleProp, prevMonthAriaLabel: headerPrevMonthAriaLabel, nextMonthAriaLabel: headerNextMonthAriaLabel, iconSize: iconHeaderSize, buttonVariant: headerButtonVariant, buttonTheme: headerButtonTheme, minYearSelect: minYearSelect, maxYearSelect: maxYearSelect }))), [
        locale,
        iconPrevMonth,
        iconNextMonth,
        iconMaterialStyleProp,
        headerPrevMonthAriaLabel,
        headerNextMonthAriaLabel,
        iconHeaderSize,
        headerButtonVariant,
        headerButtonTheme,
        minYearSelect,
        maxYearSelect,
    ]);
    const defaultRenderCustomHeader = React.useCallback((headerProps) => (jsxRuntime.jsx(DatePickerHeader, Object.assign({}, headerProps))), [DatePickerHeader]);
    const renderCustomHeader = React.useMemo(() => (renderCustomHeaderProp || defaultRenderCustomHeader), [defaultRenderCustomHeader, renderCustomHeaderProp]);
    return (jsxRuntime.jsx(DatePicker, Object.assign({ selected: selected, calendarClassName: "d-date-picker", renderCustomHeader: renderCustomHeader, selectsRange: selectsRange, formatWeekDay: handleFormatWeekDay, customInput: (jsxRuntime.jsx(ForwardedDDatePickerInput, { id: inputId, "aria-label": inputAriaLabel, iconEndAriaLabel: inputActionAriaLabel, iconMaterialStyle: iconMaterialStyleProp, iconEnd: iconInput, inputLabel: inputLabel, className: className, style: style, invalid: invalid, valid: valid, hint: inputHint })), customTimeInput: (jsxRuntime.jsx(DDatePickerTime, { id: timeId, label: timeLabel })), placeholderText: placeholder }, locale && { locale }, dataAttributes, props)));
}

function DInputMask(props, ref) {
    return (jsxRuntime.jsx(mask.InputMask, Object.assign({ ref: ref, component: ForwardedDInput }, props)));
}
const ForwardedDInputMask = React.forwardRef(DInputMask);
ForwardedDInputMask.displayName = 'DInputMask';

function formatValue(value, currencyOptions) {
    if (value === undefined) {
        return '';
    }
    return currency(value, Object.assign(Object.assign({}, currencyOptions), { symbol: '' })).format();
}
function useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref) {
    const inputRef = useProvidedRefOrCreate(ref);
    const [innerType, setInnerType] = React.useState('text');
    const [innerNumber, setInnerNumber] = React.useState(value);
    const [innerString, setInnerString] = React.useState(formatValue(value, currencyOptions));
    const handleOnFocus = React.useCallback((event) => {
        event.stopPropagation();
        setInnerType('number');
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
    }, [onFocus]);
    const handleOnBlur = React.useCallback((event) => {
        event.stopPropagation();
        setInnerType('text');
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, [onBlur]);
    const generateStyleVariables = React.useMemo(() => ({
        [`--${PREFIX_BS}input-currency-component-symbol-color`]: `var(--${PREFIX_BS}secondary)`,
        [`--${PREFIX_BS}input-currency-symbol-color`]: `var(--${PREFIX_BS}input-currency-component-symbol-color)`,
    }), []);
    const generateSymbolStyleVariables = React.useMemo(() => ({
        color: `var(--${PREFIX_BS}input-currency-symbol-color)`,
    }), []);
    const handleOnChange = React.useCallback((newValue) => {
        const newNumber = (newValue === undefined || newValue === '') ? undefined : Number(newValue);
        if (newNumber !== innerNumber) {
            setInnerNumber(newNumber);
            setInnerString(formatValue(newNumber, currencyOptions));
            onChange === null || onChange === void 0 ? void 0 : onChange(newNumber);
        }
    }, [currencyOptions, onChange, innerNumber]);
    React.useEffect(() => {
        if (value !== innerNumber) {
            setInnerNumber(value);
            setInnerString(formatValue(value, currencyOptions));
        }
    }, [value, currencyOptions, innerNumber]);
    const innerValue = React.useMemo(() => { var _a; return (innerType === 'number' ? (_a = innerNumber === null || innerNumber === void 0 ? void 0 : innerNumber.toString()) !== null && _a !== void 0 ? _a : '' : innerString !== null && innerString !== void 0 ? innerString : ''); }, [innerType, innerNumber, innerString]);
    return {
        inputRef,
        innerValue,
        innerType,
        handleOnFocus,
        handleOnChange,
        handleOnBlur,
        generateStyleVariables,
        generateSymbolStyleVariables,
    };
}

function useDisableInputWheel(ref) {
    const inputRef = useProvidedRefOrCreate(ref);
    const handleOnWheel = React.useCallback((event) => {
        var _a;
        event.stopPropagation();
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    }, [inputRef]);
    return {
        handleOnWheel,
    };
}

function useItemSelection({ getItemIdentifier: getItemIdentifierProp, previousSelected = [], } = {}) {
    const getItemIdentifier = React.useCallback((item) => (String(getItemIdentifierProp ? getItemIdentifierProp(item) : item.id)), [getItemIdentifierProp]);
    const [selectionMap, setSelectionMap] = React.useState(() => new Map(previousSelected.map((item) => [getItemIdentifier(item), item])));
    const selectedItems = React.useMemo(() => Array.from(selectionMap.values()), [selectionMap]);
    const setSelectedItems = React.useCallback((items) => {
        setSelectionMap(new Map(items.map((item) => [getItemIdentifier(item), item])));
    }, [getItemIdentifier]);
    const isSelectedItem = React.useCallback((item) => selectionMap.has(getItemIdentifier(item)), [getItemIdentifier, selectionMap]);
    const toggleSelectedItem = React.useCallback((item) => {
        const identifier = getItemIdentifier(item);
        setSelectionMap((prev) => {
            const newMap = new Map(prev);
            if (newMap.has(identifier)) {
                newMap.delete(identifier);
            }
            else {
                newMap.set(identifier, item);
            }
            return newMap;
        });
    }, [getItemIdentifier]);
    const resetSelectedItems = React.useCallback(() => setSelectionMap(new Map()), []);
    return {
        selectedItems,
        isSelectedItem,
        toggleSelectedItem,
        resetSelectedItems,
        setSelectedItems,
    };
}

function subscribeToMediaQuery(query, callback) {
    const mediaQueryList = window.matchMedia(query);
    mediaQueryList.addEventListener('change', callback);
    return () => {
        mediaQueryList.removeEventListener('change', callback);
    };
}
function checkMediaQuery(query) {
    return window.matchMedia(query).matches;
}

function useMediaQuery(mediaQuery, useListener = false) {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const noop = (_) => () => { };
    return React.useSyncExternalStore(useListener ? (cb) => subscribeToMediaQuery(mediaQuery, cb) : noop, () => (mediaQuery ? checkMediaQuery(mediaQuery) : true), () => false);
}

function useMediaBreakpointUp(breakpoint, useListener = false) {
    const { breakpoints } = useDContext();
    const mediaQuery = React.useMemo(() => (`(min-width: ${breakpoints[breakpoint]})`), [breakpoint, breakpoints]);
    return useMediaQuery(mediaQuery, useListener);
}
function useMediaBreakpointUpXs(useListener = false) {
    return useMediaBreakpointUp('xs', useListener);
}
function useMediaBreakpointUpSm(useListener = false) {
    return useMediaBreakpointUp('sm', useListener);
}
function useMediaBreakpointUpMd(useListener = false) {
    return useMediaBreakpointUp('md', useListener);
}
function useMediaBreakpointUpLg(useListener = false) {
    return useMediaBreakpointUp('lg', useListener);
}
function useMediaBreakpointUpXl(useListener = false) {
    return useMediaBreakpointUp('xl', useListener);
}
function useMediaBreakpointUpXxl(useListener = false) {
    return useMediaBreakpointUp('xxl', useListener);
}

function DInputCounter(_a, ref) {
    var { minValue, maxValue, value = minValue, invalid, iconStart: iconStartProp, iconEnd: iconEndProp, iconStartAriaLabel = 'decrease action', iconEndAriaLabel = 'increase action', style, onChange } = _a, props = tslib.__rest(_a, ["minValue", "maxValue", "value", "invalid", "iconStart", "iconEnd", "iconStartAriaLabel", "iconEndAriaLabel", "style", "onChange"]);
    const { handleOnWheel, } = useDisableInputWheel(ref);
    const inputRef = useProvidedRefOrCreate(ref);
    const [internalIsInvalid, setInternalIsInvalid] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(value);
    React.useEffect(() => {
        setInternalValue(value);
    }, [value]);
    React.useEffect(() => {
        onChange === null || onChange === void 0 ? void 0 : onChange(Number(internalValue));
    }, [onChange, internalValue]);
    const handleOnChange = React.useCallback((newValue) => {
        setInternalValue(Number(newValue || '0'));
    }, []);
    const handleOnIconStartClick = React.useCallback(() => {
        setInternalValue((prevInternalValue) => Math.max(prevInternalValue - 1, minValue));
    }, [minValue]);
    const handleOnIconEndClick = React.useCallback(() => {
        setInternalValue((prevInternalValue) => Math.min(prevInternalValue + 1, maxValue));
    }, [maxValue]);
    const generateStyleVariables = React.useMemo(() => (Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}form-control-component-text-align`]: 'center' })), [style]);
    const valueString = React.useMemo(() => (internalValue.toString()), [internalValue]);
    React.useEffect(() => {
        setInternalIsInvalid(!(internalValue >= minValue && internalValue <= maxValue));
    }, [internalValue, minValue, maxValue]);
    const { iconMap: { input } } = useDContext();
    const iconEnd = React.useMemo(() => iconEndProp || input.increase, [iconEndProp, input.increase]);
    const iconStart = React.useMemo(() => iconStartProp || input.decrease, [iconStartProp, input.decrease]);
    return (jsxRuntime.jsx(ForwardedDInput, Object.assign({ ref: inputRef, value: valueString, style: generateStyleVariables, iconStart: iconStart, iconEnd: iconEnd, invalid: internalIsInvalid || invalid, type: "number", onChange: handleOnChange, onWheel: handleOnWheel, onIconStartClick: handleOnIconStartClick, onIconEndClick: handleOnIconEndClick, iconStartAriaLabel: iconStartAriaLabel, iconEndAriaLabel: iconEndAriaLabel }, internalValue === minValue && {
        iconStartDisabled: true,
    }, internalValue === maxValue && {
        iconEndDisabled: true,
    }, props)));
}
const ForwardedDInputCounter = React.forwardRef(DInputCounter);
ForwardedDInputCounter.displayName = 'DInputCounter';

/**
 * @deprecated
 */
function DInputCurrencyBase(_a, ref) {
    var { value, minValue, maxValue, currencyOptions, currencyCode, onFocus, onBlur, onChange } = _a, inputProps = tslib.__rest(_a, ["value", "minValue", "maxValue", "currencyOptions", "currencyCode", "onFocus", "onBlur", "onChange"]);
    const { handleOnWheel, } = useDisableInputWheel(ref);
    const { inputRef, innerValue, innerType, handleOnFocus, handleOnChange, handleOnBlur, generateStyleVariables, generateSymbolStyleVariables, } = useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref);
    return (jsxRuntime.jsx(ForwardedDInput, Object.assign({ ref: inputRef, value: innerValue, onChange: handleOnChange, style: generateStyleVariables, inputMode: "decimal", type: innerType, onFocus: handleOnFocus, onBlur: handleOnBlur, onWheel: handleOnWheel, inputStart: (jsxRuntime.jsx("span", { slot: "input-start", style: generateSymbolStyleVariables, children: currencyCode || currencyOptions.symbol })) }, inputProps)));
}
const ForwardedDInputCurrencyBase$1 = React.forwardRef(DInputCurrencyBase);
ForwardedDInputCurrencyBase$1.displayName = 'DInputCurrencyBase';

function DInputCurrency(_a, ref) {
    var { value, minValue, maxValue, currencyCode, onFocus, onBlur, onChange } = _a, props = tslib.__rest(_a, ["value", "minValue", "maxValue", "currencyCode", "onFocus", "onBlur", "onChange"]);
    const { currency: currencyOptions } = useDContext();
    const { handleOnWheel, } = useDisableInputWheel(ref);
    const { inputRef, innerValue, innerType, handleOnFocus, handleOnChange, handleOnBlur, generateStyleVariables, generateSymbolStyleVariables, } = useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref);
    return (jsxRuntime.jsx(ForwardedDInput, Object.assign({ ref: inputRef, value: innerValue, onChange: handleOnChange, style: generateStyleVariables, inputMode: "decimal", type: innerType, onFocus: handleOnFocus, onBlur: handleOnBlur, onWheel: handleOnWheel, inputStart: (jsxRuntime.jsx("span", { slot: "input-start", style: generateSymbolStyleVariables, children: currencyCode || currencyOptions.symbol })) }, props)));
}
const ForwardedDInputCurrencyBase = React.forwardRef(DInputCurrency);
ForwardedDInputCurrencyBase.displayName = 'DInputCurrency';

/**
 * @deprecated
 */
function DInputSearch(_a, ref) {
    var { type, iconEnd: iconEndProp, iconEndAriaLabel = 'search' } = _a, props = tslib.__rest(_a, ["type", "iconEnd", "iconEndAriaLabel"]);
    const inputRef = useProvidedRefOrCreate(ref);
    return (jsxRuntime.jsx(ForwardedDInput, Object.assign({ ref: inputRef, type: "text", iconEnd: "search", iconEndAriaLabel: iconEndAriaLabel }, props)));
}
const ForwardedDInputSearch = React.forwardRef(DInputSearch);
ForwardedDInputSearch.displayName = 'DInputSearch';

function DInputPassword(_a, ref) {
    var { onIconEndClick, iconEndAriaLabel = 'show/hide password' } = _a, props = tslib.__rest(_a, ["onIconEndClick", "iconEndAriaLabel"]);
    const inputRef = useProvidedRefOrCreate(ref);
    const [visible, setVisible] = React.useState(false);
    const handleOnIconEndClick = React.useCallback(() => {
        setVisible((prevVisible) => !prevVisible);
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick();
    }, [onIconEndClick]);
    const { iconMap: { input } } = useDContext();
    const iconEnd = React.useMemo(() => (!visible ? input.hide : input.show), [input.hide, input.show, visible]);
    return (jsxRuntime.jsx(ForwardedDInput, Object.assign({ ref: inputRef, iconEnd: iconEnd, type: !visible ? 'password' : 'text', onIconEndClick: handleOnIconEndClick, iconEndAriaLabel: iconEndAriaLabel }, props)));
}
const ForwardedDInputPassword = React.forwardRef(DInputPassword);
ForwardedDInputPassword.displayName = 'DInputPassword';

function DInputPin({ id: idProp, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, placeholder, type = 'text', disabled = false, loading = false, secret = false, characters = 4, innerInputMode = 'text', hint, invalid = false, valid = false, className, style, dataAttributes, onChange, }) {
    const innerId = React.useId();
    const id = React.useMemo(() => idProp || innerId, [idProp, innerId]);
    const [pattern, setPattern] = React.useState('');
    const [activeInput, setActiveInput] = React.useState(Array.from({ length: characters }).fill(''));
    const isInputNum = React.useMemo(() => type === 'number' || type === 'tel', [type]);
    React.useEffect(() => {
        setPattern(type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$');
    }, [type]);
    const handleOTPChange = React.useCallback((otp) => {
        const otpValue = otp.join('');
        onChange === null || onChange === void 0 ? void 0 : onChange(otpValue);
    }, [onChange]);
    React.useEffect(() => {
        handleOTPChange(activeInput);
    }, [activeInput, handleOTPChange]);
    const handlePaste = React.useCallback((event) => {
        event.preventDefault();
        const pastedData = event.clipboardData.getData('text/plain');
        const cleanData = isInputNum ? pastedData.replace(/[^0-9]/gmi, '') : pastedData;
        const newInput = Array.from({ length: characters }).map((_, index) => cleanData[index] || '');
        setActiveInput(newInput);
        event.currentTarget.blur();
    }, [characters, isInputNum]);
    const nextInput = React.useCallback((event, index) => {
        var _a;
        const regex = new RegExp(pattern);
        const input = event.currentTarget;
        if (!regex.test(input.value)) {
            input.value = '';
        }
        if (input.value !== '') {
            setActiveInput((prev) => {
                const newValue = prev.with(index, input.value);
                return newValue;
            });
            if (input.nextSibling) {
                (_a = input.nextSibling) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                input.blur();
            }
        }
    }, [pattern]);
    const prevInput = React.useCallback(({ key, currentTarget }, index) => {
        var _a;
        if (key === 'Backspace') {
            const { value } = currentTarget;
            setActiveInput((prev) => {
                const newVal = prev.with(index, '');
                return newVal;
            });
            if (currentTarget.previousSibling && value === '') {
                (_a = currentTarget.previousSibling) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                currentTarget.blur();
                currentTarget.focus();
            }
        }
    }, []);
    const focusInput = React.useCallback((index) => {
        setActiveInput((prev) => prev.with(index, ''));
    }, []);
    const wheelInput = React.useCallback((event) => {
        event.currentTarget.blur();
    }, []);
    return (jsxRuntime.jsxs("div", Object.assign({ className: classNames('d-input-pin', className), style: style }, dataAttributes, { children: [label && (jsxRuntime.jsxs("label", { htmlFor: "pinIndex0", children: [label, labelIcon && (jsxRuntime.jsx(DIcon, { icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxRuntime.jsxs("div", { className: "d-input-pin-group", id: id, children: [Array.from({ length: characters }).map((_, index) => (jsxRuntime.jsx("input", Object.assign({ className: classNames({
                            'form-control': true,
                            'is-invalid': invalid,
                            'is-valid': valid,
                        }), value: activeInput[index], type: secret ? 'password' : type, "aria-describedby": `${id}State`, inputMode: innerInputMode, id: `pinIndex${index}`, name: `pin-${index}`, maxLength: 1, onInput: (event) => nextInput(event, index), onKeyDown: (event) => prevInput(event, index), onFocus: () => focusInput(index), onWheel: wheelInput, onClick: (event) => event.preventDefault(), onPaste: (event) => handlePaste(event), autoComplete: "off", placeholder: placeholder, disabled: disabled || loading, required: true }, type === 'number' && ({ min: 0, max: 9 })), index))), loading && (jsxRuntime.jsx("div", { className: "input-group-text", children: jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsxRuntime.jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}

function DInputSelect({ id: idProp, name, label = '', className, style, options = [], labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, disabled = false, loading = false, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, hint, value, size, floatingLabel = false, invalid = false, valid = false, dataAttributes, valueExtractor, labelExtractor, onChange, onBlur, onIconStartClick, onIconEndClick, }) {
    const innerId = React.useId();
    const id = React.useMemo(() => idProp || innerId, [idProp, innerId]);
    const internalValueExtractor = React.useCallback((option) => {
        if (valueExtractor) {
            return valueExtractor(option);
        }
        if ('value' in option) {
            return option === null || option === void 0 ? void 0 : option.value;
        }
        throw new Error('Must provide a valueExtractor for custom object forms');
    }, [valueExtractor]);
    const internalLabelExtractor = React.useCallback((option) => {
        if (labelExtractor) {
            return labelExtractor(option);
        }
        if ('label' in option) {
            return option === null || option === void 0 ? void 0 : option.label;
        }
        throw new Error('Must provide a labelExtractor for custom object forms');
    }, [labelExtractor]);
    const changeHandler = React.useCallback((event) => {
        const selected = options
            .find((option) => internalValueExtractor(option).toString() === event.currentTarget.value);
        if (selected) {
            onChange === null || onChange === void 0 ? void 0 : onChange(selected);
        }
    }, [onChange, options, internalValueExtractor]);
    const blurHandler = React.useCallback((event) => {
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, [onBlur]);
    const iconStartClickHandler = React.useCallback((event) => {
        onIconStartClick === null || onIconStartClick === void 0 ? void 0 : onIconStartClick(event);
    }, [onIconStartClick]);
    const iconEndClickHandler = React.useCallback((event) => {
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick(event);
    }, [onIconEndClick]);
    const ariaDescribedby = React.useMemo(() => ([
        iconStart && `${id}Start`,
        hint && `${id}Hint`,
        iconEnd && `${id}End`,
    ]
        .filter(Boolean)
        .join(' ')), [id, iconStart, iconEnd, hint]);
    const selectComponent = React.useMemo(() => (jsxRuntime.jsx("select", Object.assign({ id: id, name: name, className: classNames({
            'form-select': true,
            [`form-select-${size}`]: !!size,
            'floating-label': floatingLabel,
            'is-invalid': invalid,
            'is-valid': valid,
        }), "aria-label": label, disabled: disabled || loading, onChange: changeHandler, onBlur: blurHandler }, ariaDescribedby && { 'aria-describedby': ariaDescribedby }, value && { value }, { children: options.map((option) => (jsxRuntime.jsx("option", { value: internalValueExtractor(option), children: internalLabelExtractor(option) }, internalValueExtractor(option)))) }))), [
        ariaDescribedby,
        blurHandler,
        changeHandler,
        disabled,
        id,
        internalLabelExtractor,
        internalValueExtractor,
        label,
        loading,
        name,
        options,
        value,
        floatingLabel,
        invalid,
        valid,
        size,
    ]);
    const labelComponent = React.useMemo(() => (jsxRuntime.jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsxRuntime.jsx(DIcon, { icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), [
        id,
        label,
        labelIcon,
        labelIconFamilyClass,
        labelIconFamilyPrefix,
    ]);
    const dynamicComponent = React.useMemo(() => {
        if (floatingLabel) {
            return (jsxRuntime.jsxs("div", { className: "form-floating", children: [selectComponent, labelComponent] }));
        }
        return selectComponent;
    }, [floatingLabel, labelComponent, selectComponent]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: className, style: style }, dataAttributes, { children: [label && !floatingLabel && (labelComponent), jsxRuntime.jsxs("div", { className: classNames({
                    'input-group': true,
                }), children: [iconStart && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: iconStartClickHandler, disabled: disabled || loading, "aria-label": iconStartAriaLabel, children: iconStart && (jsxRuntime.jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })) })), dynamicComponent, iconEnd && !loading && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: iconEndClickHandler, disabled: disabled || loading, "aria-label": iconEndAriaLabel, children: iconEnd && (jsxRuntime.jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) })), loading && (jsxRuntime.jsx("div", { className: "input-group-text form-control-icon loading", children: jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsxRuntime.jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}

function DInputSwitch({ id: idProp, label, ariaLabel, name, checked, disabled, invalid = false, valid = false, readonly, className, style, dataAttributes, onChange, }) {
    const innerId = React.useId();
    const id = React.useMemo(() => idProp || innerId, [idProp, innerId]);
    const [internalIsChecked, setInternalIsChecked] = React.useState(checked);
    React.useEffect(() => {
        setInternalIsChecked(checked);
    }, [checked]);
    const changeHandler = React.useCallback((event) => {
        const value = event.currentTarget.checked;
        setInternalIsChecked(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: "form-check form-switch" }, dataAttributes, { children: [jsxRuntime.jsx("input", { id: id, name: name, onChange: readonly ? () => false : changeHandler, className: classNames('form-check-input', {
                    'is-invalid': invalid,
                    'is-valid': valid,
                }, className), style: style, type: "checkbox", role: "switch", checked: internalIsChecked, disabled: disabled, "aria-label": ariaLabel }), label && (jsxRuntime.jsx("label", { className: "form-check-label", htmlFor: id, children: label }))] })));
}

function DInputRange(_a, ref) {
    var { id: idProp, label, ariaLabel, className, style, value = '0', min = '0', max = '100', filledValue = true, onChange } = _a, props = tslib.__rest(_a, ["id", "label", "ariaLabel", "className", "style", "value", "min", "max", "filledValue", "onChange"]);
    const innerRef = useProvidedRefOrCreate(ref);
    const innerId = React.useId();
    const id = React.useMemo(() => idProp || innerId, [idProp, innerId]);
    const generateClasses = React.useMemo(() => ({
        'form-range': true,
        'form-range-value-indicator': filledValue,
    }), [filledValue]);
    const generateStyleVariables = React.useMemo(() => {
        const minNumber = parseFloat(min.toString());
        const maxNumber = parseFloat(max.toString());
        const valueNumber = parseFloat(value.toString());
        const percentage = ((valueNumber - minNumber) / (maxNumber - minNumber)) * 100;
        return Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}form-range-component-value`]: `${percentage}%` });
    }, [min, max, value, style]);
    const inputComponent = React.useMemo(() => (jsxRuntime.jsx("input", Object.assign({ id: id, ref: innerRef, className: classNames(generateClasses, className), "aria-label": ariaLabel, type: "range", value: value, min: min, max: max, style: generateStyleVariables, onChange: onChange }, props))), [
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
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("label", { className: "form-label", htmlFor: id, children: label }), inputComponent] }));
}
const ForwardedDInputRange = React.forwardRef(DInputRange);
ForwardedDInputRange.displayName = 'DInputRange';

/**
 * @deprecated Please use DListGroup.Item or DListGroupItem instead
 */
function DListItem({ children, className, style, active = false, disabled = false, theme, onClick, }) {
    const Tag = React.useMemo(() => (onClick ? 'button' : 'div'), [onClick]);
    return (jsxRuntime.jsx(Tag, Object.assign({}, Tag === 'button' && {
        onClick,
        type: 'button',
    }, { className: classNames('list-group-item list-group-item-action', theme ? `list-group-item-${theme}` : undefined, className, {
            active,
            disabled,
        }), style: style }, active && { 'aria-current': true }, { children: children })));
}

/**
 * @deprecated Please use DListGroup instead
 */
function DList({ children, className, style, flush = false, numbered = false, horizontal = false, horizontalBreakpoint, dataAttributes, }) {
    if (flush && horizontal) {
        throw new Error("Horizontal and Flush props don't work together");
    }
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames('list-group', {
            'list-group-flush': flush && !horizontal,
            'list-group-numbered': numbered,
            'list-group-horizontal': horizontal && !horizontalBreakpoint,
        }, (horizontal && horizontalBreakpoint) && `list-group-horizontal-${horizontalBreakpoint}`, className), style: style }, dataAttributes, { children: children })));
}
var DList$1 = Object.assign(DList, {
    Item: DListItem,
});

function DListGroupItem({ as = 'li', action: actionProp, active, disabled, href, onClick, theme, children, className, style, dataAttributes, }) {
    const Tag = React.useMemo(() => {
        if (href) {
            return 'a';
        }
        if (actionProp) {
            return 'button';
        }
        return as;
    }, [href, as, actionProp]);
    const action = React.useMemo(() => {
        if (Tag === 'a' || Tag === 'button') {
            return true;
        }
        return actionProp;
    }, [Tag, actionProp]);
    const generateClasses = React.useMemo(() => ({
        'list-group-item': true,
        'list-group-item-action': action,
        [`list-group-item-${theme}`]: !!theme,
        active,
        disabled,
    }), [action, active, disabled, theme]);
    const ariaAttributes = React.useMemo(() => {
        if (Tag === 'button') {
            return Object.assign(Object.assign({}, active && { 'aria-current': true }), disabled && { disabled: true });
        }
        return Object.assign(Object.assign({}, active && { 'aria-current': true }), disabled && { 'aria-disabled': true });
    }, [Tag, active, disabled]);
    return (jsxRuntime.jsx(Tag, Object.assign({ className: classNames(generateClasses, className), style: style }, Tag === 'a' && href && { href }, onClick && { onClick }, ariaAttributes, dataAttributes, { children: children })));
}

function DListGroup({ as = 'ul', numbered, flush, horizontal, children, className, style, dataAttributes, }) {
    const Tag = React.useMemo(() => {
        if (numbered) {
            return 'ol';
        }
        return as;
    }, [numbered, as]);
    const generateClasses = React.useMemo(() => {
        const listGroupHorizontalClass = typeof horizontal === 'string'
            ? `list-group-horizontal-${horizontal}`
            : 'list-group-horizontal';
        return {
            'list-group': true,
            'list-group-numbered': numbered,
            'list-group-flush': flush,
            [listGroupHorizontalClass]: !!horizontal,
        };
    }, [flush, horizontal, numbered]);
    return (jsxRuntime.jsx(Tag, Object.assign({ className: classNames(generateClasses, className), style: style }, dataAttributes, { children: children })));
}
var DListGroup$1 = Object.assign(DListGroup, {
    Item: DListGroupItem,
});

function DModalHeader({ showCloseButton, onClose, children, className, style, iconFamilyClass, iconFamilyPrefix, icon: iconProp, materialStyle = false, }) {
    const { iconMap: { xLg, }, } = useDContext();
    const icon = React.useMemo(() => iconProp || xLg, [iconProp, xLg]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: classNames('modal-header', className), style: style, children: [jsxRuntime.jsx("div", { children: children }), showCloseButton && (jsxRuntime.jsx("button", { type: "button", className: "d-close align-self-center", "aria-label": "Close", onClick: onClose, children: jsxRuntime.jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: materialStyle }) }))] }), jsxRuntime.jsx("div", { className: "d-modal-separator" })] }));
}

function DModalBody({ children, className, style, }) {
    return (jsxRuntime.jsx("div", { className: classNames('modal-body', className), style: style, children: children }));
}

function DModalFooter({ className, style, actionPlacement, children, }) {
    const generateClasses = React.useMemo(() => ({
        'modal-footer': true,
        [`d-modal-action-${actionPlacement}`]: !!actionPlacement,
    }), [actionPlacement]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: "d-modal-separator" }), jsxRuntime.jsx("div", { className: classNames(generateClasses, className), style: style, children: children })] }));
}

function DModal({ name, className, style, staticBackdrop, scrollable, centered, fullScreen, fullScreenFrom, size, children, dataAttributes, }) {
    const fullScreenClass = React.useMemo(() => {
        if (fullScreen) {
            if (fullScreenFrom) {
                return `modal-fullscreen-${fullScreenFrom}-down`;
            }
            return 'modal-fullscreen';
        }
        return '';
    }, [fullScreenFrom, fullScreen]);
    const generateModalDialogClasses = React.useMemo(() => (Object.assign({ 'modal-dialog': true, 'modal-dialog-centered': !!centered, 'modal-dialog-scrollable': !!scrollable, [fullScreenClass]: !!fullScreen }, size && { [`modal-${size}`]: true })), [fullScreenClass, centered, fullScreen, scrollable, size]);
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames('modal portal fade show', className), id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false", style: style }, staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), dataAttributes, { children: jsxRuntime.jsx("div", { className: classNames(generateModalDialogClasses), children: jsxRuntime.jsx("div", { className: "modal-content", children: children }) }) })));
}
var DModal$1 = Object.assign(DModal, {
    Header: DModalHeader,
    Body: DModalBody,
    Footer: DModalFooter,
});

function DOffcanvasHeader({ showCloseButton, onClose, children, className, style, iconFamilyClass, iconFamilyPrefix, icon: iconProp, materialStyle = false, }) {
    const { iconMap: { xLg, }, } = useDContext();
    const icon = React.useMemo(() => iconProp || xLg, [iconProp, xLg]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: classNames('offcanvas-header', className), style: style, children: [jsxRuntime.jsx("div", { children: children }), showCloseButton && (jsxRuntime.jsx("button", { type: "button", className: "d-close align-self-center", "aria-label": "Close", onClick: onClose, children: jsxRuntime.jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: materialStyle }) }))] }), jsxRuntime.jsx("div", { className: "d-offcanvas-separator" })] }));
}

function DOffcanvasBody({ children, className, style, }) {
    return (jsxRuntime.jsx("div", { className: classNames('offcanvas-body', className), style: style, children: children }));
}

function DOffcanvasFooter({ actionPlacement, children, className, style, }) {
    const generateClasses = React.useMemo(() => ({
        'd-offcanvas-footer': true,
        [`d-offcanvas-action-${actionPlacement}`]: !!actionPlacement,
    }), [actionPlacement]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: "d-offcanvas-separator" }), jsxRuntime.jsx("div", { className: classNames(generateClasses, className), style: style, children: children })] }));
}

function DOffcanvas({ name, className, style, staticBackdrop, scrollable, openFrom = 'end', children, dataAttributes, }) {
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames('offcanvas portal show', {
            [`offcanvas-${openFrom}`]: openFrom,
        }, className), style: style, id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false" }, staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), scrollable && ({
        [`data-${PREFIX_BS}scroll`]: 'true',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), dataAttributes, { children: children })));
}
var DOffcanvas$1 = Object.assign(DOffcanvas, {
    Header: DOffcanvasHeader,
    Body: DOffcanvasBody,
    Footer: DOffcanvasFooter,
});

function DPaginator(_a) {
    var { className, page, current, showArrows, navClassName } = _a, props = tslib.__rest(_a, ["className", "page", "current", "showArrows", "navClassName"]);
    const backwardCompatibilityProps = React.useMemo(() => (Object.assign(Object.assign(Object.assign(Object.assign({}, props), { current: Number(page !== undefined ? page : current) }), showArrows !== undefined && { renderNav: showArrows }), props.extraClassName === undefined && className !== undefined && {
        extraClassName: className,
    })), [props, page, current, showArrows, className]);
    return (jsxRuntime.jsx(ResponsivePagination, Object.assign({ navClassName: classNames('page-item-arrow', navClassName) }, backwardCompatibilityProps)));
}

/**
 * @deprecated
 */
function DPopover({ children, renderComponent, open, setOpen, adjustContentToRender = false, className, style, dataAttributes, }) {
    const [isOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        setIsOpen(open);
    }, [open]);
    const onOpenChange = React.useCallback((value) => {
        setIsOpen(value);
        if (setOpen) {
            setOpen(value);
        }
    }, [setOpen]);
    const { refs, floatingStyles, context, } = react.useFloating({
        open: isOpen,
        onOpenChange,
        middleware: [
            react.offset(0),
            react.flip({ fallbackAxisSideDirection: 'none' }),
            react.shift(),
        ],
        whileElementsMounted: react.autoUpdate,
    });
    const click = react.useClick(context);
    const dismiss = react.useDismiss(context);
    const role = react.useRole(context);
    const { getReferenceProps, getFloatingProps } = react.useInteractions([
        click,
        dismiss,
        role,
    ]);
    const headingId = react.useId();
    const generateStyleVariables = React.useMemo(() => (Object.assign(Object.assign({}, style), adjustContentToRender && {
        [`--${PREFIX_BS}popover-component-min-width`]: 'auto',
    })), [style, adjustContentToRender]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: classNames('d-popover', className), style: generateStyleVariables }, dataAttributes, { children: [jsxRuntime.jsx("div", Object.assign({ ref: refs.setReference }, getReferenceProps(), { children: renderComponent(isOpen) })), isOpen && (jsxRuntime.jsx(react.FloatingFocusManager, { context: context, modal: false, children: jsxRuntime.jsx("div", Object.assign({ className: classNames('d-popover-content', {
                        'w-100': adjustContentToRender,
                    }), ref: refs.setFloating, style: floatingStyles, "aria-labelledby": headingId }, getFloatingProps(), { children: children })) }))] })));
}

function DProgress({ className, style, currentValue, minValue = 0, maxValue = 100, hideCurrentValue = false, enableStripedAnimation = false, dataAttributes, }) {
    const percentage = React.useMemo(() => (Math.round((currentValue * 100) / maxValue)), [currentValue, maxValue]);
    const formatProgress = React.useMemo(() => `${percentage}%`, [percentage]);
    const generateClasses = React.useMemo(() => ({
        'progress-bar': true,
        'progress-bar-striped progress-bar-animated': enableStripedAnimation,
    }), [enableStripedAnimation]);
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames('progress', className) }, dataAttributes, { children: jsxRuntime.jsx("div", { className: classNames(generateClasses), role: "progressbar", "aria-label": "Progress bar", style: Object.assign({ width: formatProgress }, style), "aria-valuenow": currentValue, "aria-valuemin": minValue, "aria-valuemax": maxValue, children: !hideCurrentValue && formatProgress }) })));
}

function DQuickActionButton({ line1, line2, className, actionIcon, actionIconFamilyClass, actionIconFamilyPrefix, actionIconTheme, representativeImage, representativeIcon, representativeIconTheme = 'secondary', representativeIconHasCircle = false, representativeIconFamilyClass, representativeIconFamilyPrefix, onClick, href, hrefTarget, style, dataAttributes, }) {
    const Tag = React.useMemo(() => {
        if (href) {
            return 'a';
        }
        if (onClick) {
            return 'button';
        }
        return 'div';
    }, [href, onClick]);
    const tagProps = React.useMemo(() => {
        if (href) {
            return {
                className: classNames('d-quick-action-button', 'd-quick-action-button-feedback', className),
                href,
                target: hrefTarget,
            };
        }
        if (onClick) {
            return {
                className: classNames('d-quick-action-button', 'd-quick-action-button-feedback', className),
                onClick,
            };
        }
        return {
            className: classNames('d-quick-action-button', className),
        };
    }, [
        className,
        href,
        hrefTarget,
        onClick,
    ]);
    return (jsxRuntime.jsxs(Tag, Object.assign({ style: style }, tagProps, dataAttributes, { children: [representativeIcon && (jsxRuntime.jsx(DIcon, { className: "d-quick-action-button-representative-icon", size: representativeIconHasCircle
                    ? `var(--${PREFIX_BS}quick-action-button-representative-icon-size)`
                    : `var(--${PREFIX_BS}quick-action-button-representative-image-size)`, icon: representativeIcon, hasCircle: representativeIconHasCircle, theme: representativeIconTheme, familyClass: representativeIconFamilyClass, familyPrefix: representativeIconFamilyPrefix })), representativeImage && (jsxRuntime.jsx("img", { className: "d-quick-action-button-representative-image", src: representativeImage, alt: "" })), jsxRuntime.jsx("div", { className: "d-quick-action-button-content", children: jsxRuntime.jsxs("div", { className: "d-quick-action-button-text", children: [jsxRuntime.jsx("span", { className: "d-quick-action-button-line1", children: line1 }), jsxRuntime.jsx("small", { className: "d-quick-action-button-line2", children: line2 })] }) }), actionIcon && (jsxRuntime.jsx(DIcon, { className: "d-quick-action-button-action-icon", icon: actionIcon, size: `var(--${PREFIX_BS}quick-action-button-action-icon-size)`, theme: actionIconTheme, familyClass: actionIconFamilyClass, familyPrefix: actionIconFamilyPrefix }))] })));
}

/**
 * @deprecated
 */
function DQuickActionCheck({ id: idProp, name, value, line1, line2, line3, className, style, checked, dataAttributes, onChange, }) {
    const innerId = React.useId();
    const id = React.useMemo(() => idProp || innerId, [idProp, innerId]);
    const changeHandler = React.useCallback((event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    return (jsxRuntime.jsxs("label", Object.assign({ className: classNames('d-quick-action-check', className), htmlFor: id, style: style }, dataAttributes, { children: [jsxRuntime.jsx(DInputCheck, { id: id, type: "radio", name: name, value: value, checked: checked, onChange: changeHandler }), jsxRuntime.jsxs("div", { className: "d-quick-action-check-detail", children: [jsxRuntime.jsx("span", { className: "d-quick-action-check-line1", children: line1 }), jsxRuntime.jsx("span", { className: "d-quick-action-check-line2", children: line2 })] }), jsxRuntime.jsx("span", { className: "d-quick-action-check-line3", children: line3 })] })));
}

function DQuickActionSelect({ id: idProp, name, value, line1, line2, className, style, selected = false, dataAttributes, onChange, }) {
    const innerRef = React.useRef(null);
    const innerId = React.useId();
    const id = React.useMemo(() => idProp || innerId, [idProp, innerId]);
    const changeHandler = React.useCallback((event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    React.useEffect(() => {
        if (innerRef.current) {
            innerRef.current.checked = selected;
        }
    }, [selected]);
    return (jsxRuntime.jsxs("label", Object.assign({ className: classNames('d-quick-action-select', className), htmlFor: id, style: style }, dataAttributes, { children: [jsxRuntime.jsx("input", { ref: innerRef, id: id, type: "radio", name: name, value: value, onChange: changeHandler }), jsxRuntime.jsx("span", { className: "d-quick-action-select-line1", children: line1 }), jsxRuntime.jsx("span", { className: "d-quick-action-select-line2", children: line2 })] })));
}

/**
 * @deprecated
 */
function DQuickActionSwitch({ id: idProp, name, label, hint, checked, disabled, className, style, dataAttributes, onClick, }) {
    const innerId = React.useId();
    const id = React.useMemo(() => idProp || innerId, [idProp, innerId]);
    const clickHandler = React.useCallback((event) => {
        event.stopPropagation();
        onClick === null || onClick === void 0 ? void 0 : onClick(checked);
    }, [checked, onClick]);
    return (jsxRuntime.jsxs("button", Object.assign({ className: classNames('d-quick-action-switch', className), type: "button", onClick: clickHandler, style: style }, dataAttributes, { children: [jsxRuntime.jsx("div", { className: "d-quick-action-switch-content", children: jsxRuntime.jsx(DInputSwitch, { id: id, name: name, disabled: disabled, checked: checked, readonly: true, label: label }) }), jsxRuntime.jsx("div", { className: "d-quick-action-switch-hint", children: hint })] })));
}

/**
 * @deprecated Please use https://getbootstrap.com/docs/5.3/components/placeholders/ instead
 */
function DSkeleton({ speed = 2, viewBox, backgroundColor, foregroundColor, children, }) {
    const innerBackgroundColor = React.useMemo(() => {
        if (backgroundColor) {
            return backgroundColor;
        }
        const computedStyle = getComputedStyle(document.documentElement);
        return computedStyle.getPropertyValue(`--${PREFIX_BS}secondary-100`);
    }, [backgroundColor]);
    const innerForegroundColor = React.useMemo(() => {
        if (foregroundColor) {
            return foregroundColor;
        }
        const computedStyle = getComputedStyle(document.documentElement);
        return computedStyle.getPropertyValue(`--${PREFIX_BS}gray-100`);
    }, [foregroundColor]);
    return (jsxRuntime.jsx(ContentLoader, { speed: speed, viewBox: viewBox, backgroundColor: innerBackgroundColor, foregroundColor: innerForegroundColor, children: children }));
}

function DStepper$2({ options, currentStep, iconSuccess: iconSuccessProp, iconSuccessFamilyClass, iconSuccessFamilyPrefix, iconSuccessMaterialStyle = false, vertical = false, completed, alignStart = false, className, style, }) {
    const { iconMap: { check, }, } = useDContext();
    const icon = React.useMemo(() => iconSuccessProp || check, [check, iconSuccessProp]);
    if (currentStep < 1 || currentStep > options.length) {
        throw new Error('Current step should be in the range from 1 to options length');
    }
    return (jsxRuntime.jsx("div", { className: classNames({
            'd-stepper-desktop': true,
            'is-vertical': vertical,
            'is-align-start': alignStart && !vertical,
        }, className), style: style, children: options.map(({ label, value, description }) => (jsxRuntime.jsxs("div", { className: "d-step", children: [jsxRuntime.jsx("div", { className: "d-step-value", children: jsxRuntime.jsx("div", { className: classNames({
                            'd-step-icon-container': true,
                            'd-step-check': value < currentStep || completed,
                            'd-step-current': value === currentStep && !completed,
                        }), children: value < currentStep || completed
                            ? (jsxRuntime.jsx(DIcon, { icon: icon, familyClass: iconSuccessFamilyClass, familyPrefix: iconSuccessFamilyPrefix, materialStyle: iconSuccessMaterialStyle, className: "d-step-icon" }))
                            : value }) }), jsxRuntime.jsxs("div", { className: "d-step-text-container", children: [jsxRuntime.jsx("div", { className: "d-step-label", children: label }), description && (jsxRuntime.jsx("div", { className: "d-step-description", children: description }))] })] }, value))) }));
}

function DStepper$1({ options, currentStep, className, style, }) {
    if (currentStep < 1 || currentStep > options.length) {
        throw new Error('Current step should be in the range from 1 to options length');
    }
    const currentOption = React.useMemo(() => { var _a; return (_a = options[currentStep - 1]) !== null && _a !== void 0 ? _a : {}; }, [currentStep, options]);
    const [currentAngle, setCurrentAngle] = React.useState(0);
    React.useEffect(() => {
        const targetAngle = (currentStep / options.length) * 360;
        const animationInterval = setInterval(() => {
            const angleDifference = targetAngle - currentAngle;
            const step = Math.sign(angleDifference) * 5;
            if (Math.abs(angleDifference) <= Math.abs(step)) {
                setCurrentAngle(targetAngle);
                clearInterval(animationInterval);
            }
            else {
                setCurrentAngle(currentAngle + step);
            }
        }, 16);
        return () => {
            clearInterval(animationInterval);
        };
    }, [currentAngle, currentStep, options.length]);
    const progressStyle = React.useMemo(() => `conic-gradient(
      from 0deg,
      var(--${PREFIX_BS}step-progress-outter-fill-background-color) ${currentAngle}deg,
      var(--${PREFIX_BS}step-progress-outter-background-color) 0deg)`, [currentAngle]);
    return (jsxRuntime.jsxs("div", { className: classNames('d-stepper', className), style: style, children: [jsxRuntime.jsx("div", { className: "d-step-bar", style: { background: progressStyle }, children: jsxRuntime.jsx("p", { className: "d-step-number", children: `${currentStep}/${options.length}` }) }), jsxRuntime.jsx("div", { className: "d-step-info", children: Object.keys(currentOption).length > 0 && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: "d-step-label", children: currentOption.label }), jsxRuntime.jsx("div", { className: "d-step-description", children: currentOption.description || '' })] })) })] }));
}

function DStepper({ options, currentStep, iconSuccess, iconSuccessFamilyClass, iconSuccessFamilyPrefix, iconSuccessMaterialStyle = false, vertical = false, breakpoint = 'lg', className, completed = false, style, dataAttributes, }) {
    return (jsxRuntime.jsxs("div", Object.assign({ className: className, style: style }, dataAttributes, { children: [jsxRuntime.jsx("div", { className: `d-block d-${breakpoint}-none`, children: jsxRuntime.jsx(DStepper$1, { options: options, currentStep: currentStep }) }), jsxRuntime.jsx("div", { className: `d-none d-${breakpoint}-block`, children: jsxRuntime.jsx(DStepper$2, { options: options, currentStep: currentStep, vertical: vertical, iconSuccess: iconSuccess, iconSuccessFamilyClass: iconSuccessFamilyClass, iconSuccessFamilyPrefix: iconSuccessFamilyPrefix, iconSuccessMaterialStyle: iconSuccessMaterialStyle, completed: completed }) })] })));
}

const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 4;
const GAP = 2;
function DTooltip({ className, childrenClassName, style, offSet = ARROW_HEIGHT + GAP, padding, withFocus = false, withClick = false, withHover = true, open = false, theme = 'dark', placement = 'top', size, Component, children, }) {
    const [isOpen, setIsOpen] = React.useState(open);
    const arrowRef = React.useRef(null);
    const { refs, context, floatingStyles, } = react.useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement,
        whileElementsMounted: react.autoUpdate,
        middleware: [
            react.offset(offSet),
            react.flip(),
            react.shift({
                padding,
            }),
            react.arrow({
                element: arrowRef,
            }),
        ],
    });
    const hover = react.useHover(context, { move: false });
    const focus = react.useFocus(context);
    const dismiss = react.useDismiss(context, { ancestorScroll: true });
    const click = react.useClick(context);
    const role = react.useRole(context, { role: 'tooltip' });
    const { getReferenceProps, getFloatingProps } = react.useInteractions([
        withHover ? hover : undefined,
        withClick ? click : undefined,
        withFocus ? focus : undefined,
        dismiss,
        role,
    ]);
    const generateClasses = React.useMemo(() => (Object.assign({ 'tooltip show': true, [`tooltip-${size}`]: !!size, [`tooltip-${theme}`]: !!theme }, className && { [className]: true })), [size, theme, className]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", Object.assign({ className: childrenClassName, ref: refs.setReference }, getReferenceProps(), { children: Component })), jsxRuntime.jsx(react.FloatingPortal, { children: isOpen && (jsxRuntime.jsxs("div", Object.assign({ className: classNames(generateClasses), ref: refs.setFloating, style: Object.assign(Object.assign({}, floatingStyles), style) }, getFloatingProps(), { children: [jsxRuntime.jsx(react.FloatingArrow, { ref: arrowRef, context: context, width: ARROW_WIDTH, height: ARROW_HEIGHT }), jsxRuntime.jsx("div", { className: "tooltip-inner", children: children })] }))) })] }));
}

const TabContext = React.createContext(undefined);
function useTabContext() {
    const context = React.useContext(TabContext);
    if (context === undefined) {
        throw new Error('useTabContext was used outside of MTab');
    }
    return context;
}

function DTabContent({ tab, children, className, style, }) {
    const { isSelected } = useTabContext();
    if (!isSelected(tab)) {
        return null;
    }
    return (jsxRuntime.jsx("div", { className: classNames('tab-pane fade show active', className), id: `${tab}Pane`, role: "tabpanel", tabIndex: 0, "aria-labelledby": `${tab}Tab`, style: style, children: children }));
}

function DTabs({ children, defaultSelected, onChange, options, className, classNameTab, style, vertical, variant = 'underline', dataAttributes, }) {
    const [selected, setSelected] = React.useState(defaultSelected);
    const onSelect = React.useCallback((option) => {
        if (option.tab) {
            setSelected(option.tab);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
    }, [onChange]);
    React.useEffect(() => {
        setSelected(defaultSelected);
    }, [defaultSelected]);
    const isSelected = React.useCallback((tab) => (selected === tab), [selected]);
    const value = React.useMemo(() => ({
        isSelected,
    }), [isSelected]);
    const generateClasses = React.useMemo(() => (Object.assign({ nav: true, 'flex-column align-items-center': vertical && variant !== 'tabs', [`nav-${variant}`]: true }, className && { [className]: true })), [vertical, variant, className]);
    return (jsxRuntime.jsx(TabContext.Provider, { value: value, children: jsxRuntime.jsxs("div", Object.assign({ className: classNames({
                'd-flex w-100': true,
                'flex-column': !vertical || variant === 'tabs',
            }), style: style }, dataAttributes, { children: [jsxRuntime.jsx("nav", { className: classNames(generateClasses), children: options.map((option) => (jsxRuntime.jsx("button", { id: `${option.tab}Tab`, className: classNames('nav-link', {
                            active: option.tab === selected,
                        }, classNameTab), type: "button", role: "tab", "aria-controls": `${option.tab}Pane`, "aria-selected": option.tab === selected, disabled: option.disabled, onClick: () => onSelect(option), children: option.label }, option.label))) }), jsxRuntime.jsx("div", { className: "tab-content w-100", children: children })] })) }));
}
var DTabs$1 = Object.assign(DTabs, {
    Tab: DTabContent,
});

function DToastHeader({ children, className, style }) {
    return (jsxRuntime.jsx("div", { className: classNames('toast-header', className), style: style, children: children }));
}

function DToastBody({ children, className, style }) {
    return (jsxRuntime.jsx("div", { className: classNames('toast-body', className), style: style, children: children }));
}

function DToast({ children, className, style, dataAttributes, }) {
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames('toast', className), role: "alert", "aria-live": "assertive", "aria-atomic": "true", style: style }, dataAttributes, { children: children })));
}
var DToast$1 = Object.assign(DToast, {
    Header: DToastHeader,
    Body: DToastBody,
});

function DToastContainer({ containerClassName, position = 'bottom-center', reverseOrder = false, containerStyle, toastOptions, gutter, }) {
    return (jsxRuntime.jsx(reactHotToast.Toaster, { containerClassName: containerClassName, position: position, reverseOrder: reverseOrder, containerStyle: containerStyle, gutter: gutter, toastOptions: toastOptions }));
}

function useDToast() {
    const { iconMap: { xLg, }, } = useDContext();
    const toast = React.useCallback((data, toastProps) => {
        if (typeof data === 'function') {
            return reactHotToast.toast.custom(data, toastProps);
        }
        const { title, description, icon, closeIcon, timestamp, theme, soft, } = data;
        return reactHotToast.toast.custom(({ id, visible }) => {
            if (!visible) {
                return null;
            }
            if (!description) {
                return (jsxRuntime.jsx(DToast$1, { className: classNames({
                        [`toast-${theme}`]: !!theme && !soft,
                        [`toast-soft-${theme}`]: !!theme && !!soft,
                    }, 'show'), children: jsxRuntime.jsxs(DToast$1.Body, { children: [icon && (jsxRuntime.jsx(DIcon, { className: "toast-icon", icon: icon })), jsxRuntime.jsx("p", { className: "toast-title", children: title }), jsxRuntime.jsx("button", { type: "button", className: "d-close align-self-center", "aria-label": "Close", onClick: () => reactHotToast.toast.dismiss(id), children: jsxRuntime.jsx(DIcon, { icon: closeIcon || xLg }) })] }) }));
            }
            return (jsxRuntime.jsxs(DToast$1, { className: classNames({
                    [`toast-${theme}`]: !!theme && !soft,
                    [`toast-soft-${theme}`]: !!theme && !!soft,
                }, 'show'), children: [jsxRuntime.jsxs(DToast$1.Header, { children: [icon && (jsxRuntime.jsx(DIcon, { className: "toast-icon", icon: icon })), jsxRuntime.jsx("p", { className: "toast-title", children: title }), timestamp && (jsxRuntime.jsx("small", { className: "toast-timestamp", children: timestamp })), jsxRuntime.jsx("button", { type: "button", className: "d-close align-self-center", "aria-label": "Close", onClick: () => reactHotToast.toast.dismiss(id), children: jsxRuntime.jsx(DIcon, { icon: closeIcon || xLg }) })] }), jsxRuntime.jsx(DToast$1.Body, { children: jsxRuntime.jsx("span", { children: description }) })] }));
        }, toastProps);
    }, [xLg]);
    return {
        toast,
    };
}

function DTableHead({ className, style, field, label, value = '', onChange, }) {
    const handleOnChange = React.useCallback(() => {
        if (value === field) {
            return onChange(`-${field}`);
        }
        if (value === `-${field}`) {
            return onChange('');
        }
        return onChange(field);
    }, [field, value, onChange]);
    return (jsxRuntime.jsx("th", { style: style, className: classNames('d-table-head', className), children: jsxRuntime.jsxs("button", { type: "button", onClick: handleOnChange, children: [label, value && value.includes(field) && (jsxRuntime.jsx(DIcon, { icon: value === field ? 'arrow-up' : 'arrow-down' }))] }) }));
}

async function configureI8n(resources, _a = {}) {
    var { lng = 'en', fallbackLng = 'en' } = _a, config = tslib.__rest(_a, ["lng", "fallbackLng"]);
    return i18n
        .use(reactI18next.initReactI18next)
        .init(Object.assign({ resources,
        lng, initImmediate: true, fallbackLng, interpolation: {
            escapeValue: false,
            prefix: '{',
            suffix: '}',
            // skipOnVariables: false,
        } }, config))
        .then((t) => t);
}

function getQueryString(value, config = {
    useSearch: true,
}) {
    const urlParams = new URLSearchParams(config.useSearch ? window.location.search : '');
    return urlParams.get(value) || config.default;
}

function changeQueryString(values, { useSearch = true, pushState = false, } = {}) {
    const searchParams = new URLSearchParams(useSearch ? window.location.search : '');
    Object.entries(values).forEach(([key, value]) => {
        if (!value) {
            searchParams.delete(key);
            return;
        }
        searchParams.set(key, String(value));
    });
    if (pushState) {
        const url = new URL(window.location.href);
        url.search = searchParams.toString();
        window.history.pushState(null, '', url.toString());
    }
    return searchParams.toString();
}

exports.DAlert = DAlert;
exports.DAvatar = DAvatar;
exports.DBadge = DBadge;
exports.DBoxFile = DBoxFile;
exports.DButton = DButton;
exports.DButtonIcon = DButtonIcon;
exports.DCard = DCard$1;
exports.DCardBody = DCardBody;
exports.DCardFooter = DCardFooter;
exports.DCardHeader = DCardHeader;
exports.DCarousel = DCarousel$1;
exports.DCarouselSlide = DCarouselSlide;
exports.DChip = DChip;
exports.DCollapse = DCollapse;
exports.DContext = DContext;
exports.DContextProvider = DContextProvider;
exports.DCurrencyText = DCurrencyText;
exports.DDatePicker = DDatePicker;
exports.DIcon = DIcon;
exports.DIconBase = DIconBase;
exports.DInput = ForwardedDInput;
exports.DInputCheck = DInputCheck;
exports.DInputCounter = ForwardedDInputCounter;
exports.DInputCurrency = ForwardedDInputCurrencyBase;
exports.DInputCurrencyBase = ForwardedDInputCurrencyBase$1;
exports.DInputMask = ForwardedDInputMask;
exports.DInputPassword = ForwardedDInputPassword;
exports.DInputPin = DInputPin;
exports.DInputRange = ForwardedDInputRange;
exports.DInputSearch = ForwardedDInputSearch;
exports.DInputSelect = DInputSelect;
exports.DInputSwitch = DInputSwitch;
exports.DList = DList$1;
exports.DListGroup = DListGroup$1;
exports.DListGroupItem = DListGroupItem;
exports.DListItem = DListItem;
exports.DModal = DModal$1;
exports.DModalBody = DModalBody;
exports.DModalFooter = DModalFooter;
exports.DModalHeader = DModalHeader;
exports.DOffcanvas = DOffcanvas$1;
exports.DOffcanvasBody = DOffcanvasBody;
exports.DOffcanvasFooter = DOffcanvasFooter;
exports.DOffcanvasHeader = DOffcanvasHeader;
exports.DPaginator = DPaginator;
exports.DPopover = DPopover;
exports.DProgress = DProgress;
exports.DQuickActionButton = DQuickActionButton;
exports.DQuickActionCheck = DQuickActionCheck;
exports.DQuickActionSelect = DQuickActionSelect;
exports.DQuickActionSwitch = DQuickActionSwitch;
exports.DSelect = DSelect$1;
exports.DSkeleton = DSkeleton;
exports.DStepper = DStepper;
exports.DStepperDesktop = DStepper$2;
exports.DStepperMobile = DStepper$1;
exports.DTabContent = DTabContent;
exports.DTableHead = DTableHead;
exports.DTabs = DTabs$1;
exports.DToast = DToast$1;
exports.DToastContainer = DToastContainer;
exports.DTooltip = DTooltip;
exports.changeQueryString = changeQueryString;
exports.checkMediaQuery = checkMediaQuery;
exports.configureI18n = configureI8n;
exports.formatCurrency = formatCurrency;
exports.getCssVariable = getCssVariable;
exports.getQueryString = getQueryString;
exports.subscribeToMediaQuery = subscribeToMediaQuery;
exports.useDContext = useDContext;
exports.useDPortalContext = useDPortalContext;
exports.useDToast = useDToast;
exports.useDisableBodyScrollEffect = useDisableBodyScrollEffect;
exports.useDisableInputWheel = useDisableInputWheel;
exports.useFormatCurrency = useFormatCurrency;
exports.useInputCurrency = useInputCurrency;
exports.useItemSelection = useItemSelection;
exports.useMediaBreakpointUpLg = useMediaBreakpointUpLg;
exports.useMediaBreakpointUpMd = useMediaBreakpointUpMd;
exports.useMediaBreakpointUpSm = useMediaBreakpointUpSm;
exports.useMediaBreakpointUpXl = useMediaBreakpointUpXl;
exports.useMediaBreakpointUpXs = useMediaBreakpointUpXs;
exports.useMediaBreakpointUpXxl = useMediaBreakpointUpXxl;
exports.useMediaQuery = useMediaQuery;
exports.usePortal = usePortal;
exports.useProvidedRefOrCreate = useProvidedRefOrCreate;
exports.useStackState = useStackState;
exports.useTabContext = useTabContext;
//# sourceMappingURL=index.js.map
