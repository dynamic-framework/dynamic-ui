import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useMemo, createContext, useState, useCallback, useContext, useEffect, forwardRef, useRef } from 'react';
import classNames from 'classnames';
import { __rest } from 'tslib';
import { useDropzone } from 'react-dropzone';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import currency from 'currency.js';
import DatePicker from 'react-datepicker';
import { parseISO, format, getMonth, getYear } from 'date-fns';
import { InputMask } from '@react-input/mask';
import Select, { components } from 'react-select';
import ResponsivePagination from 'react-responsive-pagination';
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useRole, useInteractions, useId, FloatingFocusManager, arrow, useHover, useFocus, FloatingPortal, FloatingArrow } from '@floating-ui/react';
import ContentLoader from 'react-content-loader';
import { ToastContainer, Slide, toast } from 'react-toastify';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { createPortal } from 'react-dom';

const PREFIX_BS = 'bs-';

function DIconBase({ icon, theme, style, className, size = '1.5rem', loading = false, loadingDuration = 1.8, hasCircle = false, circleSize = `calc(var(--${PREFIX_BS}icon-component-size) * 1)`, color, backgroundColor, materialStyle = false, familyClass = 'bi', familyPrefix = 'bi-', }) {
    const colorStyle = useMemo(() => {
        if (color) {
            return { [`--${PREFIX_BS}icon-component-color`]: color };
        }
        if (theme) {
            return { [`--${PREFIX_BS}icon-component-color`]: `var(--${PREFIX_BS}${theme})` };
        }
        return {};
    }, [color, theme]);
    const backgroundStyle = useMemo(() => {
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
    const circleSizeStyle = useMemo(() => {
        if (hasCircle) {
            return { [`--${PREFIX_BS}icon-component-padding`]: circleSize };
        }
        return { [`--${PREFIX_BS}icon-component-padding`]: '0' };
    }, [circleSize, hasCircle]);
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign(Object.assign(Object.assign({ [`--${PREFIX_BS}icon-component-size`]: size, [`--${PREFIX_BS}icon-component-loading-duration`]: `${loadingDuration}s` }, colorStyle), backgroundStyle), circleSizeStyle), style)), [size, loadingDuration, colorStyle, backgroundStyle, circleSizeStyle, style]);
    const generateClasses = useMemo(() => (Object.assign(Object.assign({ 'd-icon': true, [familyClass]: true, 'd-icon-loading': loading }, !materialStyle && {
        [`${familyPrefix}${icon}`]: true,
    }), className && { [className]: true })), [
        familyClass,
        loading,
        className,
        materialStyle,
        familyPrefix,
        icon,
    ]);
    return (jsx("i", { className: classNames(generateClasses), style: generateStyleVariables, children: materialStyle && icon }));
}

const defaultState = {
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
    setContext: () => { },
};
const DContext = createContext(defaultState);
function DContextProvider({ language = defaultState.language, currency = defaultState.currency, icon = defaultState.icon, iconMap = defaultState.iconMap, children, }) {
    const [internalContext, setInternalContext,] = useState({
        language,
        currency,
        icon,
        iconMap,
    });
    const setContext = useCallback((newValue) => (setInternalContext((prevInternalContext) => (Object.assign(Object.assign({}, prevInternalContext), newValue)))), []);
    const value = useMemo(() => (Object.assign(Object.assign({}, internalContext), { setContext })), [internalContext, setContext]);
    return (jsx(DContext.Provider, { value: value, children: children }));
}
function useDContext() {
    const context = useContext(DContext);
    if (context === undefined) {
        throw new Error('useDContext was used outside of DContextProvider');
    }
    return context;
}

function useDisableBodyScrollEffect(disable) {
    useEffect(() => {
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
    const [hasPortal, setHasPortal] = useState(false);
    useEffect(() => {
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
function useStackState(initialList) {
    const [list, setList] = useState(initialList);
    const { length } = list;
    const push = useCallback((item) => {
        setList((prevList) => [
            ...prevList,
            item,
        ]);
    }, []);
    const pop = useCallback(() => {
        setList((prevList) => {
            if (prevList.length === 0) {
                return prevList;
            }
            const [, ...newList] = prevList;
            return newList;
        });
    }, []);
    const peek = useCallback(() => {
        if (list.length > 0) {
            return list[list.length - 1];
        }
        return undefined;
    }, [list]);
    const clear = () => setList([]);
    const isEmpty = useCallback(() => list.length === 0, [list]);
    const controls = {
        clear,
        isEmpty,
        length,
        peek,
        pop,
        push,
    };
    return [list, controls];
}

const DModalContext = createContext(undefined);
function DModalContextProvider({ portalName, children, availableModals, }) {
    const { created } = usePortal(portalName);
    const [stack, { push, pop, peek }] = useStackState([]);
    useDisableBodyScrollEffect(Boolean(stack.length));
    const openModal = useCallback((modalName, payload) => {
        const Component = availableModals[modalName];
        if (!Component) {
            throw new Error(`there is no component for modal ${modalName.toString()}`);
        }
        push({
            modalName,
            Component,
            payload,
        });
    }, [availableModals, push]);
    const closeModal = useCallback(() => {
        const stackItem = peek();
        if (!stackItem) {
            return;
        }
        pop();
    }, [peek, pop]);
    const value = useMemo(() => ({
        stack,
        openModal,
        closeModal,
    }), [stack, openModal, closeModal]);
    return (jsxs(DModalContext.Provider, { value: value, children: [children, created && createPortal(jsxs(Fragment, { children: [stack.map(({ Component, modalName, payload, }) => (jsx(Component, { name: modalName, payload: payload, openModal: openModal, closeModal: closeModal }, modalName))), !!stack.length && jsx("div", { className: "modal-backdrop fade show" })] }), document.getElementById(portalName))] }));
}
function useDModalContext() {
    const context = useContext(DModalContext);
    if (context === undefined) {
        throw new Error('useModalContext was used outside of ModalContextProvider');
    }
    return context;
}

const DOffcanvasContext = createContext(undefined);
function DOffcanvasContextProvider({ portalName, children, availableOffcanvas, }) {
    const { created } = usePortal(portalName);
    const [stack, { push, pop, peek }] = useStackState([]);
    useDisableBodyScrollEffect(Boolean(stack.length));
    const openOffcanvas = useCallback((offcanvasName, payload) => {
        const Component = availableOffcanvas[offcanvasName];
        if (!Component) {
            throw new Error(`there is no component for offcanvas ${offcanvasName}`);
        }
        push({
            offcanvasName,
            Component,
            payload,
        });
    }, [availableOffcanvas, push]);
    const closeOffcanvas = useCallback(() => {
        const stackItem = peek();
        if (!stackItem) {
            return;
        }
        pop();
    }, [peek, pop]);
    const value = useMemo(() => ({
        stack,
        openOffcanvas,
        closeOffcanvas,
    }), [stack, openOffcanvas, closeOffcanvas]);
    return (jsxs(DOffcanvasContext.Provider, { value: value, children: [children, created && createPortal(jsxs(Fragment, { children: [stack.map(({ Component, offcanvasName, payload, }) => (jsx(Component, { name: offcanvasName, payload: payload, openOffcanvas: openOffcanvas, closeOffcanvas: closeOffcanvas }, offcanvasName))), !!stack.length && jsx("div", { className: "offcanvas-backdrop fade show" })] }), document.getElementById(portalName))] }));
}
function useDOffcanvasContext() {
    const context = useContext(DOffcanvasContext);
    if (context === undefined) {
        throw new Error('useOffcanvasContext was used outside of OffcanvasContextProvider');
    }
    return context;
}

function DIcon(_a) {
    var { familyClass: propFamilyClass, familyPrefix: propFamilyPrefix, materialStyle: propMaterialStyle } = _a, props = __rest(_a, ["familyClass", "familyPrefix", "materialStyle"]);
    const { icon: { familyClass, familyPrefix, materialStyle, }, } = useDContext();
    return (jsx(DIconBase, Object.assign({ familyClass: propFamilyClass || familyClass, familyPrefix: propFamilyPrefix || familyPrefix, materialStyle: propMaterialStyle || materialStyle }, props)));
}

function DAlert({ type = 'success', icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle = false, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle = false, showIcon = true, soft = false, showClose, onClose, children, id, className, style, }) {
    const { iconMap: { alert, xLg, }, } = useDContext();
    const icon = useMemo(() => iconProp || alert[type], [alert, iconProp, type]);
    const iconClose = useMemo(() => (iconCloseProp || xLg), [iconCloseProp, xLg]);
    const generateClasses = useMemo(() => (Object.assign({ alert: true, [`alert-${type}`]: true, 'fade show': !!showClose, 'alert-soft': soft }, className && { [className]: true })), [type, showClose, soft, className]);
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}alert-component-separator-opacity`]: '0.3' })), [style]);
    return (jsxs("div", { className: classNames(generateClasses), style: generateStyleVariables, role: "alert", id: id, children: [(showIcon || icon) && (jsx(DIcon, { className: "alert-icon", icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })), jsx("div", { className: "alert-text", children: children }), showClose && (jsx("div", { className: "alert-separator" })), showClose && (jsx("button", { type: "button", className: "btn-close", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { className: "alert-close-icon", icon: iconClose, familyClass: iconCloseFamilyClass, familyPrefix: iconCloseFamilyPrefix, materialStyle: iconCloseMaterialStyle }) }))] }));
}

function DBadge({ text, dot = false, soft = false, theme = 'primary', id, className, style, }) {
    const generateClasses = useMemo(() => ({
        badge: true,
        'rounded-circle p-2': dot,
        [`text-bg-${theme}`]: !!theme && !soft,
        [`text-bg-soft-${theme}`]: !!theme && soft,
    }), [dot, soft, theme]);
    return (jsx("span", Object.assign({ className: classNames(generateClasses, className), style: style }, id && { id }, { children: jsx("span", { children: text }) })));
}

function DBoxFile(_a) {
    var { icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, disabled = false, children, className, style } = _a, dropzoneOptions = __rest(_a, ["icon", "iconFamilyClass", "iconFamilyPrefix", "iconMaterialStyle", "disabled", "children", "className", "style"]);
    const { acceptedFiles, getRootProps, getInputProps, } = useDropzone(Object.assign({ disabled }, dropzoneOptions));
    const { iconMap: { upload, }, } = useDContext();
    const icon = useMemo(() => iconProp || upload, [iconProp, upload]);
    return (jsxs("section", { className: classNames('d-box-file', {
            'd-box-file-selected': !!acceptedFiles.length,
        }, className), style: style, children: [jsxs("div", Object.assign({}, getRootProps({
                className: classNames('d-box-file-dropzone', {
                    disabled,
                }),
            }), { children: [jsx("input", Object.assign({}, getInputProps())), jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle }), jsx("div", { className: "d-box-content", children: children })] })), !!acceptedFiles.length && (jsx("aside", { className: "d-box-files", children: acceptedFiles.map((file) => (jsx("div", { className: "d-box-files-text", children: `${file.name} - ${file.size} bytes` }, file.name))) }))] }));
}

function DButton({ theme = 'primary', size, variant, state, text = '', ariaLabel, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartMaterialStyle, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndMaterialStyle, value, type = 'button', pill = false, loading = false, loadingAriaLabel, disabled = false, stopPropagationEnabled = true, className, form, onClick, }) {
    const generateClasses = useMemo(() => {
        const variantClass = variant
            ? `btn-${variant}-${theme}`
            : `btn-${theme}`;
        return Object.assign(Object.assign(Object.assign({ btn: true, [variantClass]: true }, size && { [`btn-${size}`]: true }), (state && state !== 'disabled') && { [state]: true }), { loading });
    }, [variant, theme, size, state, loading]);
    const generateStyleVariables = useMemo(() => {
        if (pill) {
            return {
                [`--${PREFIX_BS}btn-component-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
                [`--${PREFIX_BS}btn-component-lg-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
                [`--${PREFIX_BS}btn-component-sm-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
            };
        }
        return {};
    }, [pill]);
    const clickHandler = useCallback((event) => {
        if (stopPropagationEnabled) {
            event.stopPropagation();
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    }, [stopPropagationEnabled, onClick]);
    const isDisabled = useMemo(() => (state === 'disabled' || loading || disabled), [state, loading, disabled]);
    const newAriaLabel = useMemo(() => (loading
        ? (loadingAriaLabel || ariaLabel || text)
        : (ariaLabel || text)), [loading, loadingAriaLabel, ariaLabel, text]);
    return (jsxs("button", Object.assign({ className: classNames(generateClasses, className), style: generateStyleVariables, type: type, disabled: isDisabled, onClick: clickHandler, "aria-label": newAriaLabel, form: form }, value && { value }, { children: [iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix, materialStyle: iconStartMaterialStyle })), (text && !loading) && (jsx("span", { children: text })), loading && (jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) })), iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix, materialStyle: iconEndMaterialStyle }))] })));
}

function DCardHeader({ className, style, children, }) {
    return (jsx("div", { className: classNames('card-header', className), style: style, children: children }));
}

function DCardBody({ className, style, children, }) {
    return (jsx("div", { className: classNames('card-body', className), style: style, children: children }));
}

function DCardFooter({ className, style, children, }) {
    return (jsx("div", { className: classNames('card-footer', className), style: style, children: children }));
}

function DCard({ className, style, children, }) {
    return (jsx("div", { style: style, className: classNames('card', className), children: children }));
}
var DCard$1 = Object.assign(DCard, {
    Header: DCardHeader,
    Body: DCardBody,
    Footer: DCardFooter,
});

function DCarouselSlide(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (jsx(SplideSlide, Object.assign({ className: classNames('d-carousel-slide', className) }, props)));
}

function DCarousel(_a) {
    var { children, className, style, options } = _a, props = __rest(_a, ["children", "className", "style", "options"]);
    return (jsx(Splide, Object.assign({ className: classNames('d-carousel', className), style: style, options: Object.assign(Object.assign({}, options), { classes: {
                // Arrows
                arrows: 'splide__arrows d-carousel-arrows',
                arrow: 'splide__arrow d-carousel-arrow',
                prev: 'splide__arrow--prev d-carousel-arrow-prev',
                next: 'splide__arrow--next d-carousel-arrow-next',
                // Paginator
                pagination: 'splide__pagination d-carousel-pagination',
                page: 'splide__pagination__page d-carousel-pagination-page',
            } }) }, props, { children: children })));
}
var DCarousel$1 = Object.assign(DCarousel, {
    Slide: DCarouselSlide,
});

function DChip({ theme = 'primary', text, icon, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle, showClose = false, closeAriaLabel = 'close', className, style, onClose, }) {
    const generateClasses = useMemo(() => ({
        'd-chip': true,
        [`d-chip-${theme}`]: !!theme,
    }), [theme]);
    const { iconMap: { xLg, }, } = useDContext();
    const iconClose = useMemo(() => iconCloseProp || xLg, [iconCloseProp, xLg]);
    return (jsxs("span", { className: classNames(generateClasses, className), style: style, children: [icon && (jsx("div", { className: "d-chip-icon-container", children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle }) })), jsx("span", { children: text }), showClose && (jsx("button", { type: "button", className: "d-chip-icon-container", onClick: onClose, "aria-label": closeAriaLabel, children: jsx(DIcon, { icon: iconClose, familyClass: iconCloseFamilyClass, familyPrefix: iconCloseFamilyPrefix, materialStyle: iconCloseMaterialStyle }) }))] }));
}

function DCollapse({ id, className, style, Component, hasSeparator = false, defaultCollapsed = false, onChange, children, iconOpen: iconOpenProp, iconClose: iconCloseProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle = false, }) {
    const [toggle, setToggle] = useState(defaultCollapsed);
    const onChangeCollapse = () => setToggle((prev) => !prev);
    const { iconMap: { chevronDown, chevronUp, }, } = useDContext();
    const iconOpen = useMemo(() => iconOpenProp || chevronUp, [chevronUp, iconOpenProp]);
    const iconClose = useMemo(() => iconCloseProp || chevronDown, [chevronDown, iconCloseProp]);
    useEffect(() => {
        if (onChange) {
            onChange(toggle);
        }
    }, [toggle, onChange]);
    useEffect(() => {
        setToggle(defaultCollapsed);
    }, [defaultCollapsed]);
    const generateStyles = useMemo(() => ({
        [`--${PREFIX_BS}collapse-separator-display`]: hasSeparator ? 'block' : 'none',
    }), [hasSeparator]);
    return (jsxs("div", { id: id, className: classNames('collapse-container', className), style: style, children: [jsxs("button", { className: "collapse-button", type: "button", onClick: onChangeCollapse, children: [jsx("div", { className: "flex-grow-1", children: Component }), jsx(DIcon, { color: `var(--${PREFIX_BS}gray)`, size: `var(--${PREFIX_BS}ref-fs-small)`, icon: toggle ? iconOpen : iconClose, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })] }), toggle && (jsx("div", { className: classNames({
                    'collapse-body': true,
                }), style: generateStyles, children: children }))] }));
}

function formatCurrency(amount, options) {
    return currency(amount, options).format();
}

function useFormatCurrency(...args) {
    const { currency } = useDContext();
    const format = useCallback((value) => formatCurrency(value, currency), [currency]);
    const values = (args || []).map((value) => (formatCurrency(value !== null && value !== void 0 ? value : 0, currency)));
    return {
        format,
        values,
    };
}

function DCurrencyText({ value, className, style, }) {
    const { values: [valueFormatted] } = useFormatCurrency(value);
    return (jsx("span", { className: className, style: style, children: valueFormatted }));
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
    var { id, style, className, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, labelIconMaterialStyle, disabled = false, loading = false, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconStart, iconStartDisabled, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconStartTabIndex, iconStartMaterialStyle, iconEnd, iconEndDisabled, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, iconEndMaterialStyle, invalidIcon: invalidIconProp, validIcon: validIconProp, hint, invalid = false, valid = false, floatingLabel = false, inputStart, inputEnd, value, placeholder = '', onChange, onIconStartClick, onIconEndClick } = _a, inputProps = __rest(_a, ["id", "style", "className", "label", "labelIcon", "labelIconFamilyClass", "labelIconFamilyPrefix", "labelIconMaterialStyle", "disabled", "loading", "iconFamilyClass", "iconFamilyPrefix", "iconMaterialStyle", "iconStart", "iconStartDisabled", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconStartAriaLabel", "iconStartTabIndex", "iconStartMaterialStyle", "iconEnd", "iconEndDisabled", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "iconEndMaterialStyle", "invalidIcon", "validIcon", "hint", "invalid", "valid", "floatingLabel", "inputStart", "inputEnd", "value", "placeholder", "onChange", "onIconStartClick", "onIconEndClick"]);
    const inputRef = useProvidedRefOrCreate(ref);
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
        iconStart && `${id}Start`,
        hint && `${id}Hint`,
        iconEnd && `${id}End`,
    ]
        .filter(Boolean)
        .join(' ')), [id, iconStart, iconEnd, hint]);
    const inputComponent = useMemo(() => (jsx("input", Object.assign({ ref: inputRef, id: id, className: classNames('form-control', {
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
    ]);
    const labelComponent = useMemo(() => (jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsx(DIcon, { className: "d-input-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix, materialStyle: labelIconMaterialStyle }))] })), [
        id,
        label,
        labelIcon,
        labelIconFamilyClass,
        labelIconFamilyPrefix,
        labelIconMaterialStyle,
    ]);
    const dynamicComponent = useMemo(() => {
        if (floatingLabel) {
            return (jsxs("div", { className: "form-floating", children: [inputComponent, labelComponent] }));
        }
        return inputComponent;
    }, [floatingLabel, inputComponent, labelComponent]);
    const { iconMap: { input } } = useDContext();
    const invalidIcon = useMemo(() => invalidIconProp || input.invalid, [input.invalid, invalidIconProp]);
    const validIcon = useMemo(() => validIconProp || input.valid, [input.valid, validIconProp]);
    return (jsxs("div", { className: classNames(Object.assign({ 'd-input': true }, className && { [className]: true })), style: style, children: [label && !floatingLabel && (labelComponent), jsxs("div", { className: "d-input-control", children: [jsxs("div", { className: classNames({
                            'input-group': true,
                            'has-validation': invalid,
                            disabled: disabled || loading,
                        }), children: [!!inputStart && (jsx("div", { className: "input-group-text", children: inputStart })), iconStart && (jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: handleOnIconStartClick, disabled: disabled || loading || iconStartDisabled, "aria-label": iconStartAriaLabel, tabIndex: iconStartTabIndex, children: jsx(DIcon, { className: "d-input-icon", icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix, materialStyle: iconStartMaterialStyle }) })), dynamicComponent, ((invalid || valid) && !iconEnd && !loading) && (jsx("span", { className: "input-group-text", id: `${id}State`, children: jsx(DIcon, { className: "d-input-validation-icon", icon: invalid ? invalidIcon : validIcon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle }) })), (iconEnd && !loading) && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: handleOnIconEndClick, disabled: disabled || loading || iconEndDisabled, "aria-label": iconEndAriaLabel, tabIndex: iconEndTabIndex, children: jsx(DIcon, { className: "d-input-icon", icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix, materialStyle: iconEndMaterialStyle }) })), loading && (jsx("div", { className: "input-group-text d-input-icon", children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) })), !!inputEnd && (jsx("div", { className: "input-group-text", children: inputEnd }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })] }));
}
const ForwardedDInput = forwardRef(DInput);
ForwardedDInput.displayName = 'DInput';
var DInput$1 = ForwardedDInput;

function DDatePickerTime(_a) {
    var { value, onChange, id, label, className, style } = _a, props = __rest(_a, ["value", "onChange", "id", "label", "className", "style"]);
    return (jsxs("div", { className: classNames('d-flex align-items-center gap-2 flex-column d-datepicker-time', className), style: style, children: [label && (jsx("label", { htmlFor: id, className: "d-datepicker-time-label", children: label })), jsx(DInput$1, Object.assign({}, onChange && {
                onChange,
            }, { type: "time", id: id, value: value }, props))] }));
}

function DDatePickerInput(_a, ref) {
    var { value, onClick, id, iconEnd, className, style } = _a, props = __rest(_a, ["value", "onClick", "id", "iconEnd", "className", "style"]);
    return (jsx(DInput$1, Object.assign({ ref: ref, onClick: onClick, readOnly: true, type: "text", id: id, value: value, onIconEndClick: onClick, iconEnd: iconEnd, className: className, style: style }, props)));
}
const ForwardedDDatePickerInput = forwardRef(DDatePickerInput);
ForwardedDDatePickerInput.displayName = 'DDatePickerInput';
var DDatePickerInput$1 = ForwardedDDatePickerInput;

function DMonthPicker(_a) {
    var { onChange, date, locale, className, calendarClassName, headerPrevYearAriaLabel = 'decrease year', headerNextYearAriaLabel = 'increase year', iconFamilyClass, iconFamilyPrefix, iconPrevMonth: iconPrevMonthProp, iconNextMonth: iconNextMonthProp } = _a, props = __rest(_a, ["onChange", "date", "locale", "className", "calendarClassName", "headerPrevYearAriaLabel", "headerNextYearAriaLabel", "iconFamilyClass", "iconFamilyPrefix", "iconPrevMonth", "iconNextMonth"]);
    const selected = useMemo(() => parseISO(date), [date]);
    const { iconMap: { chevronLeft, chevronRight, }, } = useDContext();
    const iconPrevMonth = useMemo(() => iconPrevMonthProp || chevronLeft, [chevronLeft, iconPrevMonthProp]);
    const iconNextMonth = useMemo(() => iconNextMonthProp || chevronRight, [chevronRight, iconNextMonthProp]);
    const dateFormatted = useMemo(() => (format(new Date(date), 'MMMM yyyy', { locale })), [date, locale]);
    return (jsx(DatePicker, Object.assign({ showMonthYearPicker: true, selected: selected, className: className, calendarClassName: classNames('d-month-picker', calendarClassName), onChange: onChange }, locale && { locale }, { customInput: (jsx("p", { className: "fw-bold text-capitalize", children: dateFormatted })), renderCustomHeader: ({ monthDate, decreaseYear, increaseYear, prevYearButtonDisabled, nextYearButtonDisabled, }) => (jsxs("div", { className: "d-flex align-items-center justify-content-between gap-4 fs-6 bg-dark", children: [jsx(DButton, { iconStart: iconPrevMonth, size: "sm", variant: "link", theme: "light", onClick: decreaseYear, disabled: prevYearButtonDisabled, ariaLabel: headerPrevYearAriaLabel, iconStartFamilyClass: iconFamilyClass, iconStartFamilyPrefix: iconFamilyPrefix }), jsx("p", { className: "fs-6 fw-bold", children: monthDate.getFullYear() }), jsx(DButton, { iconStart: iconNextMonth, size: "sm", variant: "link", theme: "light", onClick: increaseYear, disabled: nextYearButtonDisabled, ariaLabel: headerNextYearAriaLabel, iconEndFamilyClass: iconFamilyPrefix, iconEndFamilyPrefix: iconFamilyPrefix })] })) }, props)));
}

function DDatePickerHeader({ monthDate, changeMonth, changeYear, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, withMonthSelector, iconPrevMonth, iconNextMonth, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, prevMonthAriaLabel = 'decrease month', nextMonthAriaLabel = 'increase month', iconSize, buttonVariant, buttonTheme, locale, style, className, }) {
    const onChangeDate = useCallback((value) => {
        if (value) {
            changeMonth(getMonth(value));
            changeYear(getYear(value));
        }
    }, [changeMonth, changeYear]);
    return (jsxs("div", { className: classNames('d-flex align-items-center justify-content-between d-datepicker-header', className), style: style, children: [jsx(DButton, { iconStart: iconPrevMonth, iconStartFamilyClass: iconFamilyClass, iconStartFamilyPrefix: iconFamilyPrefix, iconStartMaterialStyle: iconMaterialStyle, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: decreaseMonth, disabled: prevMonthButtonDisabled, ariaLabel: prevMonthAriaLabel }), jsx(DMonthPicker, Object.assign({}, !withMonthSelector && { readOnly: true }, withMonthSelector && { className: 'cursor-pointer' }, { date: monthDate.toISOString(), onChange: onChangeDate, iconPrevMonth: iconPrevMonth, iconNextMonth: iconNextMonth }, locale && { locale })), jsx(DButton, { iconStart: iconNextMonth, iconStartFamilyClass: iconFamilyClass, iconStartFamilyPrefix: iconFamilyPrefix, iconStartMaterialStyle: iconMaterialStyle, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: increaseMonth, disabled: nextMonthButtonDisabled, ariaLabel: nextMonthAriaLabel })] }));
}

function DDatePicker(_a) {
    var { date, selectsRange = false, withMonthSelector, inputLabel, inputAriaLabel, inputActionAriaLabel = 'open calendar', inputId = 'input-calendar', timeId = 'input-time', timeLabel, iconInput: iconInputProp, iconHeaderPrevMonth: iconHeaderPrevMonthProp, iconHeaderNextMonth: iconHeaderNextMonthProp, iconMaterialStyle: iconMaterialStyleProp, iconFamilyClass, iconFamilyPrefix, headerPrevMonthAriaLabel = 'decrease month', headerNextMonthAriaLabel = 'increase month', headerIconSize = 'sm', headerButtonVariant = 'link', headerButtonTheme = 'dark', locale, className, style } = _a, props = __rest(_a, ["date", "selectsRange", "withMonthSelector", "inputLabel", "inputAriaLabel", "inputActionAriaLabel", "inputId", "timeId", "timeLabel", "iconInput", "iconHeaderPrevMonth", "iconHeaderNextMonth", "iconMaterialStyle", "iconFamilyClass", "iconFamilyPrefix", "headerPrevMonthAriaLabel", "headerNextMonthAriaLabel", "headerIconSize", "headerButtonVariant", "headerButtonTheme", "locale", "className", "style"]);
    const { iconMap: { calendar, chevronLeft, chevronRight, }, } = useDContext();
    const selected = useMemo(() => (date ? parseISO(date) : null), [date]);
    const iconInput = useMemo(() => iconInputProp || calendar, [calendar, iconInputProp]);
    const iconPrevMonth = useMemo(() => iconHeaderPrevMonthProp || chevronLeft, [chevronLeft, iconHeaderPrevMonthProp]);
    const iconNextMonth = useMemo(() => iconHeaderNextMonthProp || chevronRight, [chevronRight, iconHeaderNextMonthProp]);
    const DatePickerHeader = useCallback((headerProps) => (jsx(DDatePickerHeader, Object.assign({}, headerProps, locale && { locale }, { iconPrevMonth: iconPrevMonth, iconNextMonth: iconNextMonth, iconMaterialStyle: iconMaterialStyleProp, prevMonthAriaLabel: headerPrevMonthAriaLabel, nextMonthAriaLabel: headerNextMonthAriaLabel, iconSize: headerIconSize, buttonVariant: headerButtonVariant, buttonTheme: headerButtonTheme, withMonthSelector: !!withMonthSelector }))), [locale,
        iconPrevMonth,
        iconNextMonth,
        iconMaterialStyleProp,
        headerPrevMonthAriaLabel,
        headerNextMonthAriaLabel,
        headerIconSize,
        headerButtonVariant,
        headerButtonTheme,
        withMonthSelector,
    ]);
    return (jsx(DatePicker, Object.assign({ selected: selected, calendarClassName: "d-date-picker", renderCustomHeader: (headerProps) => jsx(DatePickerHeader, Object.assign({}, headerProps)), customInput: (jsx(DDatePickerInput$1, { id: inputId, "aria-label": inputAriaLabel, iconEndAriaLabel: inputActionAriaLabel, iconMaterialStyle: iconMaterialStyleProp, iconEnd: iconInput, className: className, style: style })), customTimeInput: jsx(DDatePickerTime, { id: timeId, label: timeLabel }), selectsRange: selectsRange }, locale && { locale }, props)));
}

function DInputMask(props, ref) {
    return (jsx(InputMask, Object.assign({ ref: ref, component: DInput$1 }, props)));
}
const ForwardedDInputMask = forwardRef(DInputMask);
ForwardedDInputMask.displayName = 'DInputMask';
var DInputMask$1 = ForwardedDInputMask;

function DInputCounter(_a, ref) {
    var { minValue, maxValue, value = minValue, invalid, iconStart: iconStartProp, iconEnd: iconEndProp, iconStartAriaLabel = 'decrease action', iconEndAriaLabel = 'increase action', style, onChange } = _a, props = __rest(_a, ["minValue", "maxValue", "value", "invalid", "iconStart", "iconEnd", "iconStartAriaLabel", "iconEndAriaLabel", "style", "onChange"]);
    const inputRef = useProvidedRefOrCreate(ref);
    const [internalIsInvalid, setInternalIsInvalid] = useState(false);
    const [internalValue, setInternalValue] = useState(value);
    useEffect(() => {
        setInternalValue(value);
    }, [value]);
    useEffect(() => {
        onChange === null || onChange === void 0 ? void 0 : onChange(Number(internalValue));
    }, [onChange, internalValue]);
    const handleOnChange = useCallback((newValue) => {
        setInternalValue(Number(newValue || '0'));
    }, []);
    const handleOnIconStartClick = useCallback(() => {
        setInternalValue((prevInternalValue) => Math.max(prevInternalValue - 1, minValue));
    }, [minValue]);
    const handleOnIconEndClick = useCallback(() => {
        setInternalValue((prevInternalValue) => Math.min(prevInternalValue + 1, maxValue));
    }, [maxValue]);
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}input-component-form-control-text-align`]: 'center' })), [style]);
    const valueString = useMemo(() => (internalValue.toString()), [internalValue]);
    useEffect(() => {
        setInternalIsInvalid(!(internalValue >= minValue && internalValue <= maxValue));
    }, [internalValue, minValue, maxValue]);
    const { iconMap: { input } } = useDContext();
    const iconEnd = useMemo(() => iconEndProp || input.increase, [iconEndProp, input.increase]);
    const iconStart = useMemo(() => iconStartProp || input.decrease, [iconStartProp, input.decrease]);
    return (jsx(DInput$1, Object.assign({ ref: inputRef, value: valueString, style: generateStyleVariables, iconStart: iconStart, iconEnd: iconEnd, invalid: internalIsInvalid || invalid, type: "number", onChange: handleOnChange, onIconStartClick: handleOnIconStartClick, onIconEndClick: handleOnIconEndClick, iconStartAriaLabel: iconStartAriaLabel, iconEndAriaLabel: iconEndAriaLabel }, internalValue === minValue && {
        iconStartDisabled: true,
    }, internalValue === maxValue && {
        iconEndDisabled: true,
    }, props)));
}
const ForwardedDInputCounter = forwardRef(DInputCounter);
ForwardedDInputCounter.displayName = 'DInputCounter';
var DInputCounter$1 = ForwardedDInputCounter;

function formatValue(value, currencyOptions) {
    if (value === undefined) {
        return '';
    }
    return currency(value, Object.assign(Object.assign({}, currencyOptions), { symbol: '' })).format();
}
function useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref) {
    const inputRef = useProvidedRefOrCreate(ref);
    const [innerType, setInnerType] = useState('text');
    const [innerNumber, setInnerNumber] = useState(value);
    const [innerString, setInnerString] = useState(formatValue(value, currencyOptions));
    const handleOnFocus = useCallback((event) => {
        event.stopPropagation();
        setInnerType('number');
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
    }, [onFocus]);
    const handleOnBlur = useCallback((event) => {
        event.stopPropagation();
        setInnerType('text');
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, [onBlur]);
    const handleOnWheel = useCallback((event) => {
        var _a;
        event.stopPropagation();
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    }, [inputRef]);
    const generateStyleVariables = useMemo(() => ({
        [`--${PREFIX_BS}input-currency-component-symbol-color`]: `var(--${PREFIX_BS}secondary)`,
        [`--${PREFIX_BS}input-currency-symbol-color`]: `var(--${PREFIX_BS}input-currency-component-symbol-color)`,
    }), []);
    const generateSymbolStyleVariables = useMemo(() => ({
        color: `var(--${PREFIX_BS}m-input-currency-symbol-color)`,
    }), []);
    const handleOnChange = useCallback((newValue) => {
        const newNumber = (newValue === undefined || newValue === '')
            ? undefined
            : Number(newValue);
        setInnerNumber(newNumber);
        setInnerString(formatValue(newNumber, currencyOptions));
    }, [currencyOptions]);
    useEffect(() => {
        onChange === null || onChange === void 0 ? void 0 : onChange(innerNumber);
    }, [onChange, innerNumber]);
    useEffect(() => {
        setInnerNumber(value);
    }, [value]);
    const innerValue = useMemo(() => {
        if (value === undefined || value.toString() === '') {
            return '';
        }
        const valueToUse = innerType === 'number'
            ? innerNumber === null || innerNumber === void 0 ? void 0 : innerNumber.toString()
            : innerString;
        return valueToUse !== null && valueToUse !== void 0 ? valueToUse : '';
    }, [value, innerType, innerNumber, innerString]);
    return {
        inputRef,
        innerValue,
        innerType,
        handleOnFocus,
        handleOnChange,
        handleOnBlur,
        handleOnWheel,
        generateStyleVariables,
        generateSymbolStyleVariables,
    };
}

function DInputCurrencyBase(_a, ref) {
    var { value, minValue, maxValue, currencyOptions, currencyCode, onFocus, onBlur, onChange } = _a, inputProps = __rest(_a, ["value", "minValue", "maxValue", "currencyOptions", "currencyCode", "onFocus", "onBlur", "onChange"]);
    const { inputRef, innerValue, innerType, handleOnFocus, handleOnChange, handleOnBlur, handleOnWheel, generateStyleVariables, generateSymbolStyleVariables, } = useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref);
    return (jsx(DInput$1, Object.assign({ ref: inputRef, value: innerValue, onChange: handleOnChange, style: generateStyleVariables, inputMode: "decimal", pattern: "^[0-9]", type: innerType, onFocus: handleOnFocus, onBlur: handleOnBlur, onWheel: handleOnWheel, inputStart: (jsx("span", { slot: "input-start", style: generateSymbolStyleVariables, children: currencyCode || currencyOptions.symbol })) }, inputProps)));
}
const ForwardedDInputCurrencyBase$1 = forwardRef(DInputCurrencyBase);
ForwardedDInputCurrencyBase$1.displayName = 'DInputCurrencyBase';
var DInputCurrencyBase$1 = ForwardedDInputCurrencyBase$1;

function DInputCurrency(_a, ref) {
    var { value, minValue, maxValue, currencyCode, onFocus, onBlur, onChange } = _a, props = __rest(_a, ["value", "minValue", "maxValue", "currencyCode", "onFocus", "onBlur", "onChange"]);
    const { currency: currencyOptions } = useDContext();
    const { inputRef, innerValue, innerType, handleOnFocus, handleOnChange, handleOnBlur, handleOnWheel, generateStyleVariables, generateSymbolStyleVariables, } = useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref);
    return (jsx(DInput$1, Object.assign({ ref: inputRef, value: innerValue, onChange: handleOnChange, style: generateStyleVariables, inputMode: "decimal", pattern: "^[0-9]", type: innerType, onFocus: handleOnFocus, onBlur: handleOnBlur, onWheel: handleOnWheel, inputStart: (jsx("span", { slot: "input-start", style: generateSymbolStyleVariables, children: currencyCode || currencyOptions.symbol })) }, props)));
}
const ForwardedDInputCurrencyBase = forwardRef(DInputCurrency);
ForwardedDInputCurrencyBase.displayName = 'DInputCurrency';
var DInputCurrency$1 = ForwardedDInputCurrencyBase;

function DInputSearch(_a, ref) {
    var { type, iconEnd: iconEndProp, iconEndAriaLabel = 'search' } = _a, props = __rest(_a, ["type", "iconEnd", "iconEndAriaLabel"]);
    const inputRef = useProvidedRefOrCreate(ref);
    return (jsx(DInput$1, Object.assign({ ref: inputRef, type: "text", iconEnd: "search", iconEndAriaLabel: iconEndAriaLabel }, props)));
}
const ForwardedDInputSearch = forwardRef(DInputSearch);
ForwardedDInputSearch.displayName = 'DInputSearch';
var DInputSearch$1 = ForwardedDInputSearch;

function DInputPassword(_a, ref) {
    var { onIconEndClick, iconEndAriaLabel = 'show/hide password' } = _a, props = __rest(_a, ["onIconEndClick", "iconEndAriaLabel"]);
    const inputRef = useProvidedRefOrCreate(ref);
    const [visible, setVisible] = useState(false);
    const handleOnIconEndClick = useCallback(() => {
        setVisible((prevVisible) => !prevVisible);
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick();
    }, [onIconEndClick]);
    const { iconMap: { input } } = useDContext();
    const iconEnd = useMemo(() => (!visible ? input.hide : input.show), [input.hide, input.show, visible]);
    return (jsx(DInput$1, Object.assign({ ref: inputRef, iconEnd: iconEnd, type: !visible ? 'password' : 'text', onIconEndClick: handleOnIconEndClick, iconEndAriaLabel: iconEndAriaLabel }, props)));
}
const ForwardedDInputPassword = forwardRef(DInputPassword);
ForwardedDInputPassword.displayName = 'DInputPassword';
var DInputPassword$1 = ForwardedDInputPassword;

function DInputCheck({ type, name, label, ariaLabel, checked = false, id, disabled = false, indeterminate, value, onChange, className, style, }) {
    const innerRef = useRef(null);
    const handleChange = useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    useEffect(() => {
        if (innerRef.current) {
            innerRef.current.indeterminate = Boolean(indeterminate);
        }
    }, [indeterminate]);
    useEffect(() => {
        if (innerRef.current) {
            innerRef.current.checked = checked;
        }
    }, [checked]);
    if (!label) {
        return (jsx("input", { ref: innerRef, onChange: handleChange, className: classNames('form-check-input', className), style: style, id: id, disabled: disabled, type: type, name: name, value: value, "aria-label": ariaLabel }));
    }
    return (jsxs("div", { className: "form-check", children: [jsx("input", { ref: innerRef, onChange: handleChange, className: classNames('form-check-input', className), style: style, id: id, disabled: disabled, type: type, name: name, value: value }), jsx("label", { className: "form-check-label", htmlFor: id, children: label })] }));
}

function DInputPin({ id, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, placeholder, type = 'text', disabled = false, loading = false, secret = false, iconFamilyClass, iconFamilyPrefix, characters = 4, invalidIcon: invalidIconProp, validIcon: validIconProp, innerInputMode = 'text', hint, invalid = false, valid = false, className, style, onChange, }) {
    const [pattern, setPattern] = useState('');
    useEffect(() => {
        setPattern(type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$');
    }, [type]);
    const nextInput = useCallback((event) => {
        var _a;
        const input = event.target;
        const regex = new RegExp(pattern);
        if (!regex.test(input.value)) {
            input.value = '';
        }
        if (input.value !== '') {
            if (input.nextSibling) {
                (_a = input.nextSibling) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                input.blur();
            }
        }
    }, [pattern]);
    const prevInput = useCallback((event) => {
        var _a;
        if (event.key === 'Backspace') {
            const { value } = event.currentTarget;
            if (event.currentTarget.previousSibling && value === '') {
                (_a = event.currentTarget.previousSibling) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                event.currentTarget.blur();
                event.currentTarget.focus();
            }
        }
    }, []);
    const focusInput = useCallback((event) => {
        // eslint-disable-next-line no-param-reassign
        event.currentTarget.value = '';
    }, []);
    const wheelInput = useCallback((event) => {
        event.currentTarget.blur();
    }, []);
    const formChange = useCallback((event) => {
        const formData = new FormData(event.currentTarget);
        const values = Array.from(formData.values()).join('');
        onChange === null || onChange === void 0 ? void 0 : onChange(values);
    }, [onChange]);
    const preventDefaultEvent = useCallback((event) => {
        event.preventDefault();
    }, []);
    const { iconMap: { input } } = useDContext();
    const invalidIcon = useMemo(() => invalidIconProp || input.invalid, [input.invalid, invalidIconProp]);
    const validIcon = useMemo(() => validIconProp || input.valid, [input.valid, validIconProp]);
    return (jsxs("div", { className: classNames('d-input-pin', className), style: style, children: [label && (jsxs("label", { htmlFor: "pinIndex0", children: [label, labelIcon && (jsx(DIcon, { className: "d-input-pin-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxs("form", { id: id, className: "d-input-pin-controls", onInput: formChange, onSubmit: preventDefaultEvent, children: [Array.from({ length: characters }).map((_, index) => (jsx("input", Object.assign({ className: classNames({
                            'form-control': true,
                            'is-invalid': invalid,
                            'is-valid': valid,
                        }), type: secret ? 'password' : type, "aria-describedby": `${id}State`, inputMode: innerInputMode, id: `pinIndex${index}`, name: `pin-${index}`, maxLength: 1, onChange: nextInput, onKeyDown: prevInput, onFocus: focusInput, onWheel: wheelInput, onClick: preventDefaultEvent, autoComplete: "off", placeholder: placeholder, disabled: disabled || loading, required: true }, type === 'number' && ({ min: 0, max: 9 })), index))), (invalid || valid) && !loading && (jsx("span", { className: "input-group-text", id: `${id}State`, children: jsx(DIcon, { className: "d-input-pin-validation-icon", icon: invalid ? invalidIcon : validIcon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) })), loading && (jsx("div", { className: "input-group-text d-input-pin-icon", children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] }));
}

function DInputSelect({ id, name, label = '', className, style, options = [], labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, disabled = false, loading = false, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, hint, value, floatingLabel = false, valueExtractor, labelExtractor, onChange, onBlur, onIconStartClick, onIconEndClick, }) {
    const internalValueExtractor = useCallback((option) => {
        if (valueExtractor) {
            return valueExtractor(option);
        }
        if ('value' in option) {
            return option === null || option === void 0 ? void 0 : option.value;
        }
        throw new Error('Must provide a valueExtractor for custom object forms');
    }, [valueExtractor]);
    const internalLabelExtractor = useCallback((option) => {
        if (labelExtractor) {
            return labelExtractor(option);
        }
        if ('label' in option) {
            return option === null || option === void 0 ? void 0 : option.label;
        }
        throw new Error('Must provide a labelExtractor for custom object forms');
    }, [labelExtractor]);
    const changeHandler = useCallback((event) => {
        const selected = options
            .find((option) => internalValueExtractor(option).toString() === event.currentTarget.value);
        if (selected) {
            onChange === null || onChange === void 0 ? void 0 : onChange(selected);
        }
    }, [onChange, options, internalValueExtractor]);
    const blurHandler = useCallback((event) => {
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, [onBlur]);
    const iconStartClickHandler = useCallback((event) => {
        onIconStartClick === null || onIconStartClick === void 0 ? void 0 : onIconStartClick(event);
    }, [onIconStartClick]);
    const iconEndClickHandler = useCallback((event) => {
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick(event);
    }, [onIconEndClick]);
    const ariaDescribedby = useMemo(() => ([
        iconStart && `${id}Start`,
        hint && `${id}Hint`,
        iconEnd && `${id}End`,
    ]
        .filter(Boolean)
        .join(' ')), [id, iconStart, iconEnd, hint]);
    const selectComponent = useMemo(() => (jsx("select", Object.assign({ id: id, name: name, className: classNames({
            'form-select': true,
            'floating-label': floatingLabel,
        }), "aria-label": label, disabled: disabled || loading, onChange: changeHandler, onBlur: blurHandler }, ariaDescribedby && { 'aria-describedby': ariaDescribedby }, value && { value }, { children: options.map((option) => (jsx("option", { value: internalValueExtractor(option), children: internalLabelExtractor(option) }, internalValueExtractor(option)))) }))), [
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
    ]);
    const labelComponent = useMemo(() => (jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsx(DIcon, { className: "mdinput-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), [
        id,
        label,
        labelIcon,
        labelIconFamilyClass,
        labelIconFamilyPrefix,
    ]);
    const dynamicComponent = useMemo(() => {
        if (floatingLabel) {
            return (jsxs("div", { className: "form-floating", children: [selectComponent, labelComponent] }));
        }
        return selectComponent;
    }, [floatingLabel, labelComponent, selectComponent]);
    return (jsxs("div", { className: classNames('d-input', className), style: style, children: [label && !floatingLabel && (labelComponent), jsxs("div", { className: "d-input-control", children: [jsxs("div", { className: classNames({
                            'input-group': true,
                            disabled: disabled || loading,
                        }), children: [iconStart && (jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: iconStartClickHandler, disabled: disabled || loading, "aria-label": iconStartAriaLabel, children: iconStart && (jsx(DIcon, { className: "d-input-icon", icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })) })), dynamicComponent, iconEnd && !loading && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: iconEndClickHandler, disabled: disabled || loading, "aria-label": iconEndAriaLabel, children: iconEnd && (jsx(DIcon, { className: "d-input-icon", icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) })), loading && (jsx("div", { className: "input-group-text form-control-icon loading", children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })] }));
}

function DInputSwitch({ label, ariaLabel, id, name, checked, disabled, readonly, className, style, onChange, }) {
    const [internalIsChecked, setInternalIsChecked] = useState(checked);
    useEffect(() => {
        setInternalIsChecked(checked);
    }, [checked]);
    const changeHandler = useCallback((event) => {
        const value = event.currentTarget.checked;
        setInternalIsChecked(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (jsxs("div", { className: "form-check form-switch", children: [jsx("input", { id: id, name: name, onChange: readonly ? () => false : changeHandler, className: classNames('form-check-input', className), style: style, type: "checkbox", role: "switch", checked: internalIsChecked, disabled: disabled, "aria-label": ariaLabel }), label && (jsx("label", { className: "form-check-label", htmlFor: id, children: label }))] }));
}

function DSelectOptionCheck(_a) {
    var { innerProps, children, isSelected } = _a, props = __rest(_a, ["innerProps", "children", "isSelected"]);
    return (jsx(components.Option, Object.assign({ className: classNames({
            'd-select__option': true,
            'd-select__option--is-checkbox': true,
        }), isSelected: isSelected, innerProps: innerProps }, props, { children: jsxs("label", { htmlFor: `${innerProps.id}Check`, children: [jsx(DInputCheck, { type: "checkbox", checked: isSelected, id: `${innerProps.id}Check` }), children] }) })));
}

function DSelectOptionIcon(_a) {
    var { children, data } = _a, props = __rest(_a, ["children", "data"]);
    return (jsxs(components.Option, Object.assign({ className: classNames({
            'd-select__option--has-icon': true,
        }), data: data }, props, { children: [jsx(DIcon, { icon: data.icon }), children] })));
}

function DSelectSingleValueIconText(_a) {
    var { children, getValue } = _a, props = __rest(_a, ["children", "getValue"]);
    const [value] = getValue();
    return (jsxs(components.SingleValue, Object.assign({ className: classNames({
            'd-select__control--has-icon': true,
        }), getValue: getValue }, props, { children: [jsx(DIcon, { icon: value.icon }), children] })));
}

function DSelectDropdownIndicator(props) {
    const { iconMap: { chevronDown, }, } = useDContext();
    return (jsx(components.DropdownIndicator, Object.assign({}, props, { children: jsx(DIcon, { icon: chevronDown }) })));
}

function DSelectClearIndicator(props) {
    const { iconMap: { xLg, }, } = useDContext();
    return (jsx(components.ClearIndicator, Object.assign({}, props, { children: jsx(DIcon, { icon: xLg }) })));
}

function DSelectMultiValueRemove(props) {
    const { iconMap: { x, }, } = useDContext();
    return (jsx(components.MultiValueRemove, Object.assign({}, props, { children: jsx(DIcon, { icon: x }) })));
}

function DSelectLoadingIndicator({ innerProps, }) {
    return (jsx("div", Object.assign({ className: classNames({
            'd-select__indicator': true,
            'd-select__loading-indicator': true,
        }) }, innerProps, { children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) })));
}

function DSelectOptionEmoji(_a) {
    var { children, data } = _a, props = __rest(_a, ["children", "data"]);
    return (jsxs(components.Option, Object.assign({ className: classNames({
            'd-select__option--has-icon': true,
        }), data: data }, props, { children: [jsx("span", { children: data.emoji }), jsx("span", { children: children })] })));
}

function DSelectSingleValueEmoji(_a) {
    var { children, getValue } = _a, props = __rest(_a, ["children", "getValue"]);
    const [value] = getValue();
    return (jsx(components.SingleValue, Object.assign({ className: classNames({
            'd-select__control--has-icon': true,
        }), getValue: getValue }, props, { children: value.emoji })));
}

function DSelectSingleValueEmojiText(_a) {
    var { children, getValue } = _a, props = __rest(_a, ["children", "getValue"]);
    const [value] = getValue();
    return (jsxs(components.SingleValue, Object.assign({ className: classNames({
            'd-select__control--has-icon': true,
        }), getValue: getValue }, props, { children: [jsx("span", { children: value.emoji }), jsx("span", { children: children })] })));
}

function DSelect(_a) {
    var { id, className, style, label, labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, hint, iconFamilyClass, iconFamilyPrefix, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconStartTabIndex, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, invalid, valid, menuWithMaxContent = false, disabled, clearable, loading, rtl, searchable, multi, components, defaultValue, onIconStartClick, onIconEndClick } = _a, props = __rest(_a, ["id", "className", "style", "label", "labelIcon", "labelIconFamilyClass", "labelIconFamilyPrefix", "hint", "iconFamilyClass", "iconFamilyPrefix", "iconStart", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconStartAriaLabel", "iconStartTabIndex", "iconEnd", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "invalid", "valid", "menuWithMaxContent", "disabled", "clearable", "loading", "rtl", "searchable", "multi", "components", "defaultValue", "onIconStartClick", "onIconEndClick"]);
    const handleOnIconStartClick = useCallback(() => {
        onIconStartClick === null || onIconStartClick === void 0 ? void 0 : onIconStartClick(defaultValue);
    }, [onIconStartClick, defaultValue]);
    const handleOnIconEndClick = useCallback(() => {
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick(defaultValue);
    }, [onIconEndClick, defaultValue]);
    return (jsxs("div", { className: classNames('d-select', className, {
            disabled: disabled || loading,
        }), style: style, children: [label && (jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsx(DIcon, { className: "d-select-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxs("div", { className: "d-select-control", children: [jsxs("div", { className: classNames({
                            'input-group': true,
                            'has-validation': invalid,
                            disabled: disabled || loading,
                        }), children: [iconStart && (jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: handleOnIconStartClick, disabled: disabled || loading, "aria-label": iconStartAriaLabel, tabIndex: iconStartTabIndex, children: jsx(DIcon, { className: "d-input-icon", icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix }) })), jsx(Select, Object.assign({ styles: {
                                    control: (base) => (Object.assign(Object.assign({}, base), { minHeight: 'unset' })),
                                    container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })),
                                    menu: (base) => (Object.assign(Object.assign({}, base), { width: menuWithMaxContent ? 'max-context' : '100%' })),
                                }, className: "d-select-component", classNamePrefix: "d-select", isDisabled: disabled || loading, isClearable: clearable, isLoading: loading, isRtl: rtl, isSearchable: searchable, isMulti: multi, defaultValue: defaultValue, unstyled: true, components: Object.assign({ DropdownIndicator: DSelectDropdownIndicator, ClearIndicator: DSelectClearIndicator, MultiValueRemove: DSelectMultiValueRemove, LoadingIndicator: DSelectLoadingIndicator }, components) }, props)), ((invalid || valid) && !iconEnd && !loading) && (jsx("span", { className: "input-group-text", id: `${id}State`, children: jsx(DIcon, { className: "d-input-validation-icon", icon: invalid ? 'exclamation-circle' : 'check', familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) })), (iconEnd && !loading) && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: handleOnIconEndClick, disabled: disabled || loading, "aria-label": iconEndAriaLabel, tabIndex: iconEndTabIndex, children: iconEnd && (jsx(DIcon, { className: "d-input-icon", icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })] }));
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
});

function DListItem({ children, className, style, active = false, disabled = false, theme, onClick, }) {
    const Tag = useMemo(() => (onClick ? 'button' : 'div'), [onClick]);
    return (jsx(Tag, Object.assign({}, Tag === 'button' && {
        onClick,
        type: 'button',
    }, { className: classNames('list-group-item list-group-item-action', theme ? `list-group-item-${theme}` : undefined, className, {
            active,
            disabled,
        }), style: style }, active && { 'aria-current': true }, { children: children })));
}

function DList({ children, className, style, flush = false, numbered = false, horizontal = false, horizontalBreakpoint, }) {
    if (flush && horizontal) {
        throw new Error("Horizontal and Flush props don't work together");
    }
    return (jsx("div", { className: classNames('list-group', {
            'list-group-flush': flush && !horizontal,
            'list-group-numbered': numbered,
            'list-group-horizontal': horizontal && !horizontalBreakpoint,
        }, (horizontal && horizontalBreakpoint) && `list-group-horizontal-${horizontalBreakpoint}`, className), style: style, children: children }));
}
var DList$1 = Object.assign(DList, {
    Item: DListItem,
});

function DModalHeader({ showCloseButton, onClose, children, className, style, iconFamilyClass, iconFamilyPrefix, icon: iconProp, materialStyle = false, }) {
    const { iconMap: { xLg, }, } = useDContext();
    const icon = useMemo(() => iconProp || xLg, [iconProp, xLg]);
    return (jsxs("div", { className: classNames('modal-header', className), style: style, children: [jsx("div", { className: "d-modal-slot", children: children }), showCloseButton && (jsx("button", { type: "button", className: "d-modal-close", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: materialStyle }) }))] }));
}

function DModalBody({ children, className, style, }) {
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}modal-component-body-padding`]: 0 })), [style]);
    return (jsx("div", { className: classNames('d-modal-slot modal-body', className), style: generateStyleVariables, children: children }));
}

function DModalFooter({ className, style, actionPlacement = 'fill', children, }) {
    return (jsxs(Fragment, { children: [jsx("div", { className: "d-modal-separator" }), jsx("div", { className: classNames(`d-modal-slot modal-footer d-modal-action-${actionPlacement}`, className), style: style, children: children })] }));
}

function DModal({ name, className, style, staticBackdrop, scrollable, centered, fullScreen, fullScreenFrom, size, children, }) {
    const fullScreenClass = useMemo(() => {
        if (fullScreen) {
            if (fullScreenFrom) {
                return `modal-fullscreen-${fullScreenFrom}-down`;
            }
            return 'modal-fullscreen';
        }
        return '';
    }, [fullScreenFrom, fullScreen]);
    const generateClasses = useMemo(() => (Object.assign({ 'modal fade show': true }, className && { [className]: true })), [className]);
    const generateModalDialogClasses = useMemo(() => (Object.assign({ 'modal-dialog': true, 'modal-dialog-centered': !!centered, 'modal-dialog-scrollable': !!scrollable, [fullScreenClass]: !!fullScreen }, size && { [`modal-${size}`]: true })), [fullScreenClass, centered, fullScreen, scrollable, size]);
    return (jsx("div", Object.assign({ className: classNames(generateClasses), id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false", style: style }, staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), { children: jsx("div", { className: classNames(generateModalDialogClasses), children: jsx("div", { className: "modal-content", children: children }) }) })));
}
var DModal$1 = Object.assign(DModal, {
    Header: DModalHeader,
    Body: DModalBody,
    Footer: DModalFooter,
});

function DOffcanvasHeader({ showCloseButton, onClose, children, className, style, iconFamilyClass, iconFamilyPrefix, icon: iconProp, materialStyle = false, }) {
    const { iconMap: { xLg, }, } = useDContext();
    const icon = useMemo(() => iconProp || xLg, [iconProp, xLg]);
    return (jsxs("div", { className: classNames('offcanvas-header', className), style: style, children: [jsx("div", { className: "d-offcanvas-slot", children: children }), showCloseButton && (jsx("button", { type: "button", className: "d-offcanvas-close", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: materialStyle }) }))] }));
}

function DOffcanvasBody({ children, className, style, }) {
    return (jsx("div", { className: classNames('d-offcanvas-slot offcanvas-body', className), style: style, children: children }));
}

function DOffcanvasFooter({ footerActionPlacement = 'fill', children, className, style, }) {
    return (jsx("div", { className: classNames(`d-offcanvas-slot d-offcanvas-footer d-offcanvas-action-${footerActionPlacement}`, className), style: style, children: children }));
}

function DOffcanvas({ name, className, style, staticBackdrop, scrollable, openFrom = 'end', children, }) {
    return (jsx("div", Object.assign({ className: classNames('offcanvas show', {
            [`offcanvas-${openFrom}`]: openFrom,
        }, className), style: style, id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false" }, staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), scrollable && ({
        [`data-${PREFIX_BS}scroll`]: 'true',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), { children: children })));
}
var DOffcanvas$1 = Object.assign(DOffcanvas, {
    Header: DOffcanvasHeader,
    Body: DOffcanvasBody,
    Footer: DOffcanvasFooter,
});

function DPaginator(_a) {
    var { className, nextLabel, previousLabel, showArrows = true, page, onPageChange } = _a, props = __rest(_a, ["className", "nextLabel", "previousLabel", "showArrows", "page", "onPageChange"]);
    return (jsx(ResponsivePagination, Object.assign({ extraClassName: classNames('pagination', className), nextClassName: classNames('arrow arrow-next', !nextLabel && 'no-label'), nextLabel: nextLabel, previousClassName: classNames('arrow arrow-prev', !previousLabel && 'no-label'), previousLabel: previousLabel, renderNav: showArrows, current: page, onPageChange: onPageChange }, props)));
}

function DPopover({ children, renderComponent, open, setOpen, adjustContentToRender = false, className, style, }) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(open);
    }, [open]);
    const onOpenChange = useCallback((value) => {
        setIsOpen(value);
        if (setOpen) {
            setOpen(value);
        }
    }, [setOpen]);
    const { refs, floatingStyles, context, } = useFloating({
        open: isOpen,
        onOpenChange,
        middleware: [
            offset(0),
            flip({ fallbackAxisSideDirection: 'none' }),
            shift(),
        ],
        whileElementsMounted: autoUpdate,
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss,
        role,
    ]);
    const headingId = useId();
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign({}, style), adjustContentToRender && {
        [`--${PREFIX_BS}popover-component-min-width`]: 'auto',
    })), [style, adjustContentToRender]);
    return (jsxs("div", { className: classNames('d-popover', className), style: generateStyleVariables, children: [jsx("div", Object.assign({ ref: refs.setReference }, getReferenceProps(), { children: renderComponent(isOpen) })), isOpen && (jsx(FloatingFocusManager, { context: context, modal: false, children: jsx("div", Object.assign({ className: classNames('d-popover-content', {
                        'w-100': adjustContentToRender,
                    }), ref: refs.setFloating, style: floatingStyles, "aria-labelledby": headingId }, getFloatingProps(), { children: children })) }))] }));
}

function DProgress({ className, style, currentValue, minValue = 0, maxValue = 100, hideCurrentValue = false, enableStripedAnimation = false, }) {
    const percentage = useMemo(() => (Math.round((currentValue * 100) / maxValue)), [currentValue, maxValue]);
    const formatProgress = useMemo(() => `${percentage}%`, [percentage]);
    const generateClasses = useMemo(() => ({
        'progress-bar': true,
        'progress-bar-striped progress-bar-animated': enableStripedAnimation,
    }), [enableStripedAnimation]);
    return (jsx("div", { className: classNames('progress', className), children: jsx("div", { className: classNames(generateClasses), role: "progressbar", "aria-label": "Progress bar", style: Object.assign({ width: formatProgress }, style), "aria-valuenow": currentValue, "aria-valuemin": minValue, "aria-valuemax": maxValue, children: !hideCurrentValue && formatProgress }) }));
}

function DQuickActionButton({ line1, line2, className, actionLinkText, actionLinkTheme = 'secondary', actionIcon, secondaryActionIcon, secondaryActionAriaLabel, actionIconFamilyClass, actionIconFamilyPrefix, representativeImage, representativeIcon, representativeIconTheme = 'secondary', representativeIconHasCircle = false, representativeIconFamilyClass, representativeIconFamilyPrefix, onClick, onClickSecondary, style, }) {
    const globalClickHandler = useCallback(() => {
        if (actionLinkText) {
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick();
    }, [actionLinkText, onClick]);
    const actionLinkClickHandler = useCallback(() => {
        if (!actionLinkText) {
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick();
    }, [actionLinkText, onClick]);
    const secondaryActionLinkClickHandler = useCallback(() => {
        onClickSecondary === null || onClickSecondary === void 0 ? void 0 : onClickSecondary();
    }, [onClickSecondary]);
    const Tag = useMemo(() => (actionLinkText ? 'div' : 'button'), [actionLinkText]);
    return (jsxs(Tag, { className: classNames('d-quick-action-button', className), onClick: !actionLinkText ? globalClickHandler : undefined, style: style, children: [representativeIcon && (jsx(DIcon, { className: "d-quick-action-button-representative-icon", size: representativeIconHasCircle
                    ? `var(--${PREFIX_BS}quick-action-button-representative-icon-size)`
                    : `var(--${PREFIX_BS}quick-action-button-representative-image-size)`, icon: representativeIcon, hasCircle: representativeIconHasCircle, theme: representativeIconTheme, familyClass: representativeIconFamilyClass, familyPrefix: representativeIconFamilyPrefix })), representativeImage && (jsx("img", { className: "d-quick-action-button-representative-image", src: representativeImage, alt: "" })), jsx("div", { className: "d-quick-action-button-content", children: jsxs("div", { className: "d-quick-action-button-text", children: [jsx("span", { className: "d-quick-action-button-line1", children: line1 }), jsx("small", { className: "d-quick-action-button-line2", children: line2 })] }) }), secondaryActionIcon && (jsx(DButton, { className: "d-quick-action-button-secondary-action-link", type: "button", variant: "link", iconStart: secondaryActionIcon, ariaLabel: secondaryActionAriaLabel, iconStartFamilyClass: actionIconFamilyClass, iconStartFamilyPrefix: actionIconFamilyPrefix, theme: actionLinkTheme, onClick: secondaryActionLinkClickHandler, stopPropagationEnabled: true })), actionLinkText && !actionIcon && (jsx(DButton, { className: "d-quick-action-button-action-link", type: "button", variant: "link", theme: actionLinkTheme, text: actionLinkText, onClick: actionLinkClickHandler, stopPropagationEnabled: true })), actionIcon && !actionLinkText && (jsx(DIcon, { className: "d-quick-action-button-action-icon", icon: actionIcon, size: `var(--${PREFIX_BS}quick-action-button-action-icon-size)`, familyClass: actionIconFamilyClass, familyPrefix: actionIconFamilyPrefix }))] }));
}

function DQuickActionCheck({ id, name, value, line1, line2, line3, className, style, checked, onChange, }) {
    const changeHandler = useCallback((event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    return (jsxs("label", { className: classNames('d-quick-action-check', className), htmlFor: id, style: style, children: [jsx(DInputCheck, { id: id, type: "radio", name: name, value: value, checked: checked, onChange: changeHandler }), jsxs("div", { className: "d-quick-action-check-detail", children: [jsx("span", { className: "d-quick-action-check-line1", children: line1 }), jsx("span", { className: "d-quick-action-check-line2", children: line2 })] }), jsx("span", { className: "d-quick-action-check-line3", children: line3 })] }));
}

function DQuickActionSelect({ id, name, value, line1, line2, className, style, selected = false, onChange, }) {
    const innerRef = useRef(null);
    const changeHandler = useCallback((event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    useEffect(() => {
        if (innerRef.current) {
            innerRef.current.checked = selected;
        }
    }, [selected]);
    return (jsxs("label", { className: classNames('d-quick-action-select', className), htmlFor: id, style: style, children: [jsx("input", { ref: innerRef, id: id, type: "radio", name: name, value: value, onChange: changeHandler }), jsx("span", { className: "d-quick-action-select-line1", children: line1 }), jsx("span", { className: "d-quick-action-select-line2", children: line2 })] }));
}

function DQuickActionSwitch({ id, name, label, hint, checked, disabled, className, style, onClick, }) {
    const clickHandler = useCallback((event) => {
        event.stopPropagation();
        onClick === null || onClick === void 0 ? void 0 : onClick(checked);
    }, [checked, onClick]);
    return (jsxs("button", { className: classNames('d-quick-action-switch', className), type: "button", onClick: clickHandler, style: style, children: [jsxs("div", { className: "d-quick-action-switch-content", children: [jsx(DInputSwitch, { id: id, name: name, disabled: disabled, checked: checked, readonly: true }), jsx("label", { className: "d-quick-action-switch-label", htmlFor: id, children: label })] }), jsx("div", { className: "d-quick-action-switch-hint", children: hint })] }));
}

function DSkeleton({ speed = 2, viewBox, backgroundColor, foregroundColor, children, }) {
    const innerBackgroundColor = useMemo(() => {
        if (backgroundColor) {
            return backgroundColor;
        }
        const computedStyle = getComputedStyle(document.documentElement);
        return computedStyle.getPropertyValue(`--${PREFIX_BS}secondary-100`);
    }, [backgroundColor]);
    const innerForegroundColor = useMemo(() => {
        if (foregroundColor) {
            return foregroundColor;
        }
        const computedStyle = getComputedStyle(document.documentElement);
        return computedStyle.getPropertyValue(`--${PREFIX_BS}gray-100`);
    }, [foregroundColor]);
    return (jsx(ContentLoader, { speed: speed, viewBox: viewBox, backgroundColor: innerBackgroundColor, foregroundColor: innerForegroundColor, children: children }));
}

function DStepper$2({ options, currentStep, iconSuccess: iconSuccessProp, iconSuccessFamilyClass, iconSuccessFamilyPrefix, iconSuccessMaterialStyle = false, vertical = false, className, style, }) {
    const { iconMap: { check, }, } = useDContext();
    const icon = useMemo(() => iconSuccessProp || check, [check, iconSuccessProp]);
    if (currentStep < 1 || currentStep > options.length) {
        throw new Error('Current step should be in the range from 1 to options length');
    }
    return (jsx("div", { className: classNames({
            'd-stepper-desktop': true,
            'is-vertical': vertical,
        }, className), style: style, children: options.map(({ label, value }) => (jsxs("div", { className: "d-step", children: [jsx("div", { className: "d-step-value", children: jsx("div", { className: classNames({
                            'd-step-icon-container': true,
                            'd-step-check': value < currentStep,
                            'd-step-current': value === currentStep,
                        }), children: value < currentStep
                            ? (jsx(DIcon, { icon: icon, familyClass: iconSuccessFamilyClass, familyPrefix: iconSuccessFamilyPrefix, materialStyle: iconSuccessMaterialStyle, className: "d-step-icon" }))
                            : value }) }), jsx("div", { className: "d-step-label", children: label })] }, value))) }));
}

function DStepper$1({ options, currentStep, className, style, }) {
    if (currentStep < 1 || currentStep > options.length) {
        throw new Error('Current step should be in the range from 1 to options length');
    }
    const currentOption = useMemo(() => { var _a; return (_a = options[currentStep - 1]) !== null && _a !== void 0 ? _a : {}; }, [currentStep, options]);
    const [currentAngle, setCurrentAngle] = useState(0);
    useEffect(() => {
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
    const progressStyle = useMemo(() => `conic-gradient(
      from 180deg,
      var(--${PREFIX_BS}step-progress-outter-fill-background-color) ${currentAngle}deg,
      var(--${PREFIX_BS}step-progress-outter-background-color) 0deg)`, [currentAngle]);
    return (jsxs("div", { className: classNames('d-stepper', className), style: style, children: [jsx("div", { className: "d-step-bar", style: { background: progressStyle }, children: jsx("p", { className: "d-step-number", children: `${currentStep}/${options.length}` }) }), jsx("div", { className: "d-step-info", children: Object.keys(currentOption).length > 0 && (jsxs(Fragment, { children: [jsx("div", { className: "d-step-label", children: currentOption.label }), jsx("div", { className: "d-step-description", children: currentOption.description || '' })] })) })] }));
}

function DStepper({ options, currentStep, iconSuccess, iconSuccessFamilyClass, iconSuccessFamilyPrefix, iconSuccessMaterialStyle = false, vertical = false, breakpoint = 'lg', className, style, }) {
    return (jsxs("div", { className: className, style: style, children: [jsx("div", { className: `d-block d-${breakpoint}-none`, children: jsx(DStepper$1, { options: options, currentStep: currentStep }) }), jsx("div", { className: `d-none d-${breakpoint}-block`, children: jsx(DStepper$2, { options: options, currentStep: currentStep, vertical: vertical, iconSuccess: iconSuccess, iconSuccessFamilyClass: iconSuccessFamilyClass, iconSuccessFamilyPrefix: iconSuccessFamilyPrefix, iconSuccessMaterialStyle: iconSuccessMaterialStyle }) })] }));
}

const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 4;
const GAP = 2;
function DTooltip({ className, childrenClassName, style, offSet = ARROW_HEIGHT + GAP, padding, withFocus = false, withClick = false, withHover = true, open = false, theme = 'primary', placement = 'top', size, Component, children, }) {
    const [isOpen, setIsOpen] = useState(open);
    const arrowRef = useRef(null);
    const { refs, context, floatingStyles, } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(offSet),
            flip(),
            shift({
                padding,
            }),
            arrow({
                element: arrowRef,
            }),
        ],
    });
    const hover = useHover(context, { move: false });
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    const click = useClick(context);
    const role = useRole(context, { role: 'tooltip' });
    const { getReferenceProps, getFloatingProps } = useInteractions([
        withHover ? hover : undefined,
        withClick ? click : undefined,
        withFocus ? focus : undefined,
        dismiss,
        role,
    ]);
    const generateClasses = useMemo(() => (Object.assign({ 'd-tooltip': true, [`d-tooltip-${size}`]: !!size, [`d-tooltip-${theme}`]: !!theme }, className && { [className]: true })), [size, theme, className]);
    return (jsxs(Fragment, { children: [jsx("div", Object.assign({ className: childrenClassName, ref: refs.setReference }, getReferenceProps(), { children: Component })), jsx(FloatingPortal, { children: isOpen && (jsxs("div", Object.assign({ className: classNames(generateClasses), ref: refs.setFloating, style: Object.assign(Object.assign({}, floatingStyles), style) }, getFloatingProps(), { children: [jsx(FloatingArrow, { ref: arrowRef, context: context, width: ARROW_WIDTH, height: ARROW_HEIGHT }), children] }))) })] }));
}

const TabContext = createContext(undefined);
function useTabContext() {
    const context = useContext(TabContext);
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
    return (jsx("div", { className: classNames('tab-pane fade show active', className), id: `${tab}Pane`, role: "tabpanel", tabIndex: 0, "aria-labelledby": `${tab}Tab`, style: style, children: children }));
}

function DTabs({ children, defaultSelected, onChange, options, className, style, vertical, }) {
    const [selected, setSelected] = useState(defaultSelected);
    const onSelect = useCallback((option) => {
        if (option.tab) {
            setSelected(option.tab);
        }
        onChange(option);
    }, [onChange]);
    useEffect(() => {
        setSelected(defaultSelected);
    }, [defaultSelected]);
    const isSelected = useCallback((tab) => (selected === tab), [selected]);
    const value = useMemo(() => ({
        isSelected,
    }), [isSelected]);
    return (jsx(TabContext.Provider, { value: value, children: jsxs("div", { className: classNames({
                'd-tabs': true,
                'd-tabs-vertical': vertical,
            }, className), style: style, children: [jsx("nav", { className: "nav", children: options.map((option) => (jsx("button", { id: `${option.tab}Tab`, className: classNames('nav-link', {
                            active: option.tab === selected,
                        }, className), type: "button", role: "tab", "aria-controls": `${option.tab}Pane`, "aria-selected": option.tab === selected, disabled: option.disabled, onClick: () => onSelect(option), children: option.label }, option.label))) }), jsx("div", { className: "tab-content", children: children })] }) }));
}
var DTabs$1 = Object.assign(DTabs, {
    Tab: DTabContent,
});

function DToastContainer({ style, position = 'top-right', className, }) {
    return (jsx(ToastContainer, { toastClassName: () => classNames('shadow-none p-0 cursor-default', className), position: position, autoClose: false, hideProgressBar: true, closeOnClick: false, closeButton: false, transition: Slide, style: style }));
}

function useToast() {
    const toast$1 = useCallback((message, { position = 'top-right', type = 'info', showClose = true, autoClose = false, icon, iconClose, } = {}) => {
        toast(({ closeToast }) => (jsx(DAlert, { type: type, showClose: showClose, onClose: closeToast, id: "alertID", icon: icon, iconClose: iconClose, children: message })), {
            transition: Slide,
            position,
            autoClose,
        });
    }, []);
    return {
        toast: toast$1,
    };
}

async function configureI8n(resources, _a = {}) {
    var { lng = 'en', fallbackLng = 'en' } = _a, config = __rest(_a, ["lng", "fallbackLng"]);
    return i18n
        .use(initReactI18next)
        .init(Object.assign({ resources,
        lng, initImmediate: true, fallbackLng, interpolation: {
            escapeValue: false,
            prefix: '{',
            suffix: '}',
            // skipOnVariables: false,
        } }, config))
        .then((t) => t);
}

export { DAlert, DBadge, DBoxFile, DButton, DCard$1 as DCard, DCardBody, DCardFooter, DCardHeader, DCarousel$1 as DCarousel, DCarouselSlide, DChip, DCollapse, DContext, DContextProvider, DCurrencyText, DDatePicker, DIcon, DIconBase, DInput$1 as DInput, DInputCheck, DInputCounter$1 as DInputCounter, DInputCurrency$1 as DInputCurrency, DInputCurrencyBase$1 as DInputCurrencyBase, DInputMask$1 as DInputMask, DInputPassword$1 as DInputPassword, DInputPin, DInputSearch$1 as DInputSearch, DInputSelect, DInputSwitch, DList$1 as DList, DListItem, DModal$1 as DModal, DModalBody, DModalContext, DModalContextProvider, DModalFooter, DModalHeader, DOffcanvas$1 as DOffcanvas, DOffcanvasBody, DOffcanvasContext, DOffcanvasContextProvider, DOffcanvasFooter, DOffcanvasHeader, DPaginator, DPopover, DProgress, DQuickActionButton, DQuickActionCheck, DQuickActionSelect, DQuickActionSwitch, DSelect$1 as DSelect, DSkeleton, DStepper, DStepper$2 as DStepperDesktop, DStepper$1 as DStepperMobile, DTabContent, DTabs$1 as DTabs, DToastContainer, DTooltip, configureI8n as configureI18n, formatCurrency, useDContext, useDModalContext, useDOffcanvasContext, useDisableBodyScrollEffect, useFormatCurrency, useInputCurrency, usePortal, useProvidedRefOrCreate, useStackState, useTabContext, useToast };
//# sourceMappingURL=index.esm.js.map
