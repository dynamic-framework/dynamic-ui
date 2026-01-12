import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import classNames from 'classnames';
import React, { useEffect, useState, useCallback, useMemo, useContext, createContext, useLayoutEffect, useSyncExternalStore, forwardRef, useId, useRef } from 'react';
import { __rest } from 'tslib';
import * as LucideIcons from 'lucide-react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { fromEvent } from 'file-selector';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import currency from 'currency.js';
import DatePicker from 'react-datepicker';
import { getYear, format, getMonth } from 'date-fns';
import Select, { components } from 'react-select';
import { InputMask } from '@react-input/mask';
import ResponsivePagination from 'react-responsive-pagination';
import { useFloating, autoUpdate, offset, flip, shift, useClick, useDismiss, useRole, useInteractions, useId as useId$1, FloatingFocusManager, arrow, useHover, useFocus, FloatingPortal, FloatingArrow } from '@floating-ui/react';
import { Toaster, toast } from 'react-hot-toast';
import { defaultCountries, parseCountry, usePhoneInput, CountrySelector } from 'react-international-phone';
import { PhoneNumberUtil } from 'google-libphonenumber';
import html2canvas from 'html2canvas';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const PREFIX_BS = 'bs-';

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
function useStackState(initialList = []) {
    const [list, setList] = useState(initialList);
    const push = useCallback((item) => (setList((prevList) => [
        ...prevList,
        item,
    ])), []);
    const pop = useCallback(() => (setList((prevList) => (prevList.slice(0, prevList.length - 1)))), []);
    const peek = useCallback(() => list.at(-1), [list]);
    const clear = useCallback(() => setList([]), []);
    const isEmpty = useCallback(() => list.length === 0, [list.length]);
    const controls = useMemo(() => ({
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

function getKeyboardFocusableElements(container) {
    if (!container) {
        return [];
    }
    return [
        ...container.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'),
    ].filter((element) => !element.hasAttribute('disabled'));
}

const DPortalContext = createContext(undefined);
function DPortalContextProvider({ portalName, children, availablePortals, }) {
    const { created } = usePortal(portalName);
    const [stack, { push, pop, isEmpty }] = useStackState([]);
    useDisableBodyScrollEffect(Boolean(stack.length));
    const openPortal = useCallback((name, payload) => {
        var _a;
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
        (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.blur();
    }, [availablePortals, push]);
    const closePortal = useCallback(() => {
        if (isEmpty()) {
            return;
        }
        pop();
    }, [isEmpty, pop]);
    const value = useMemo(() => ({
        stack,
        openPortal,
        closePortal,
    }), [stack, openPortal, closePortal]);
    const handleClose = useCallback((target) => {
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
    useEffect(() => {
        const keyEvent = (event) => {
            const lastPortal = document.querySelector(`#${portalName} > div > div:last-child`);
            if (event.key === 'Escape') {
                if (lastPortal) {
                    handleClose(lastPortal);
                    return;
                }
            }
            if (event.key === 'Tab') {
                const focusableElements = getKeyboardFocusableElements(lastPortal);
                if (focusableElements.length === 0)
                    return;
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
                else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
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
    return (jsxs(DPortalContext.Provider, { value: value, children: [children, created && createPortal(
            // eslint-disable-next-line max-len
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            jsx("div", { onClick: ({ target }) => handleClose(target), onKeyDown: () => { }, children: jsx(AnimatePresence, { children: stack.flatMap(({ Component, name, payload, }) => [
                        jsx(motion.div, { className: "backdrop", initial: { opacity: 0 }, animate: { opacity: 0.5 }, exit: { opacity: 0, transition: { delay: 0.3 } }, transition: { duration: 0.15, ease: 'linear' } }, `${name}-backdrop`),
                        jsx(Component, { name: name, payload: payload }, name),
                    ]) }) }), document.getElementById(portalName))] }));
}
function useDPortalContext() {
    const context = useContext(DPortalContext);
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
        x: 'X',
        xLg: 'X',
        chevronUp: 'ChevronUp',
        chevronDown: 'ChevronDown',
        chevronLeft: 'ChevronLeft',
        chevronRight: 'ChevronRight',
        upload: 'Upload',
        calendar: 'Calendar',
        check: 'Check',
        alert: {
            warning: 'AlertCircle',
            danger: 'AlertTriangle',
            success: 'CheckCircle',
            info: 'Info',
        },
        input: {
            search: 'Search',
            show: 'Eye',
            hide: 'EyeOff',
            increase: 'Plus',
            decrease: 'Minus',
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
const DContext = createContext(DEFAULT_STATE);
function DContextProvider({ language = DEFAULT_STATE.language, currency = DEFAULT_STATE.currency, icon = DEFAULT_STATE.icon, iconMap = DEFAULT_STATE.iconMap, portalName = DEFAULT_STATE.portalName, availablePortals, children, }) {
    const [internalContext, setInternalContext,] = useState({
        language,
        currency,
        icon,
        iconMap,
        breakpoints: DEFAULT_STATE.breakpoints,
    });
    const setContext = useCallback((newValue) => (setInternalContext((prevInternalContext) => (Object.assign(Object.assign({}, prevInternalContext), newValue)))), []);
    useLayoutEffect(() => {
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
    const value = useMemo(() => (Object.assign(Object.assign({}, internalContext), { setContext })), [internalContext, setContext]);
    return (jsx(DContext.Provider, { value: value, children: jsx(DPortalContextProvider, { portalName: portalName, availablePortals: availablePortals, children: children }) }));
}
function useDContext() {
    const context = useContext(DContext);
    if (context === undefined) {
        throw new Error('useDContext was used outside of DContextProvider');
    }
    return context;
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
    return useSyncExternalStore(useListener ? (cb) => subscribeToMediaQuery(mediaQuery, cb) : noop, () => (mediaQuery ? checkMediaQuery(mediaQuery) : true), () => false);
}

function useMediaBreakpointUp(breakpoint, useListener = false) {
    const { breakpoints } = useDContext();
    const mediaQuery = useMemo(() => (`(min-width: ${breakpoints[breakpoint]})`), [breakpoint, breakpoints]);
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

/**
 * React hook to resolve a responsive property value based on the current viewport breakpoint.
 *
 * Given a `ResponsiveProp` object, this hook returns the value for the highest matching breakpoint.
 * If multiple breakpoints match, the value for the largest (highest) breakpoint is used.
 * If no breakpoints match, `undefined` is returned.
 *
 * @param useListener - Whether to listen for breakpoint changes (default: false).
 * @returns An object with a `responsivePropValue` function that takes a
 * `ResponsiveProp` and returns the resolved value.
 *
 * Usage example:
 * ```ts
 * const { responsivePropValue } = useResponsiveProp();
 * const value = responsivePropValue({ xs: "A", md: "B", xl: "C" });
 * // value will be "C" if xl breakpoint is active, "B" if md is active, etc.
 * ```
 */
function useResponsiveProp(useListener = false) {
    const bpXsUp = useMediaBreakpointUpXs(useListener);
    const bpSmUp = useMediaBreakpointUpSm(useListener);
    const bpMdUp = useMediaBreakpointUpMd(useListener);
    const bpLgUp = useMediaBreakpointUpLg(useListener);
    const bpXlUp = useMediaBreakpointUpXl(useListener);
    const bpXxlUp = useMediaBreakpointUpXxl(useListener);
    const responsivePropValue = useCallback((prop) => {
        // Pick the highest matched breakpoint value that is defined in prop
        if (prop.xxl !== undefined && bpXxlUp)
            return prop.xxl;
        if (prop.xl !== undefined && bpXlUp)
            return prop.xl;
        if (prop.lg !== undefined && bpLgUp)
            return prop.lg;
        if (prop.md !== undefined && bpMdUp)
            return prop.md;
        if (prop.sm !== undefined && bpSmUp)
            return prop.sm;
        if (prop.xs !== undefined && bpXsUp)
            return prop.xs;
        // Fallback: return undefined if no breakpoint matches
        return undefined;
    }, [bpSmUp, bpMdUp, bpLgUp, bpXlUp, bpXxlUp, bpXsUp]);
    return { responsivePropValue };
}

function DIconBase({ icon, color, style, className, size, useListenerSize = false, hasCircle = false, materialStyle = false, familyClass, familyPrefix, strokeWidth = 2, dataAttributes, }) {
    // If materialStyle is true, use Material Design icons (legacy)
    const useMaterialIcons = materialStyle;
    // Get Lucide icon component
    const LucideIcon = useMemo(() => {
        if (useMaterialIcons)
            return null;
        // Try to find the icon in Lucide (expects PascalCase)
        const icons = LucideIcons;
        return icons[icon] || null;
    }, [icon, useMaterialIcons]);
    const colorStyle = useMemo(() => {
        if (color) {
            return { [`--${PREFIX_BS}icon-component-color`]: `var(--${PREFIX_BS}${color})` };
        }
        return {};
    }, [color]);
    const backgroundStyle = useMemo(() => {
        if (hasCircle) {
            if (color) {
                return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}${color}-rgb), 0.1)` };
            }
            return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}body-color-rgb), 0.1)` };
        }
        return {};
    }, [hasCircle, color]);
    const { responsivePropValue } = useResponsiveProp(useListenerSize);
    const resolvedSize = useMemo(() => {
        if (!size)
            return undefined;
        if (typeof size === 'string')
            return size;
        return responsivePropValue(size);
    }, [responsivePropValue, size]);
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, resolvedSize && { [`--${PREFIX_BS}icon-component-size`]: resolvedSize }), colorStyle), backgroundStyle), hasCircle && { [`--${PREFIX_BS}icon-component-padding`]: `calc(var(--${PREFIX_BS}icon-component-size, 24px) * 0.4)` }), style)), [resolvedSize, colorStyle, backgroundStyle, hasCircle, style]);
    const generateClasses = useMemo(() => (Object.assign({ 'd-icon': true }, className && { [className]: true })), [className]);
    const iconSize = useMemo(() => {
        if (resolvedSize) {
            const numSize = parseInt(resolvedSize, 10);
            return !Number.isNaN(numSize) ? numSize : resolvedSize;
        }
        return undefined;
    }, [resolvedSize]);
    // Render Material Design icon (legacy support)
    if (useMaterialIcons) {
        return (jsx("i", Object.assign({ className: classNames(generateClasses, familyClass), style: generateStyleVariables }, dataAttributes, { children: icon })));
    }
    // Render Lucide icon
    if (!LucideIcon) {
        if (familyClass && familyPrefix) {
            return (jsx("i", Object.assign({ className: classNames(generateClasses, familyClass, `${familyPrefix}${icon}`), style: generateStyleVariables }, dataAttributes)));
        }
        // eslint-disable-next-line no-console
        console.warn(`Icon "${icon}" not found in Lucide. Make sure to use PascalCase names (e.g., "Home", "User", "Settings")`);
        return (jsx("span", Object.assign({ className: classNames(generateClasses), style: generateStyleVariables }, dataAttributes, { children: "?" })));
    }
    return (jsx("span", Object.assign({ className: classNames(generateClasses), style: generateStyleVariables }, dataAttributes, { children: jsx(LucideIcon, { size: iconSize || 24, strokeWidth: strokeWidth }) })));
}

function DIcon(_a) {
    var { familyClass: propFamilyClass, familyPrefix: propFamilyPrefix, materialStyle: propMaterialStyle } = _a, props = __rest(_a, ["familyClass", "familyPrefix", "materialStyle"]);
    const { icon: { familyClass, familyPrefix, materialStyle, }, } = useDContext();
    return (jsx(DIconBase, Object.assign({ familyClass: propFamilyClass || familyClass, familyPrefix: propFamilyPrefix || familyPrefix, materialStyle: propMaterialStyle || materialStyle }, props)));
}

function DAlert({ color = 'success', icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle = false, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle = false, showClose, onClose, children, id, className, style, dataAttributes, }) {
    const { iconMap: { alert, xLg, }, } = useDContext();
    const icon = useMemo(() => iconProp || alert[color], [alert, iconProp, color]);
    const iconClose = useMemo(() => (iconCloseProp || xLg), [iconCloseProp, xLg]);
    const generateClasses = useMemo(() => (Object.assign({ alert: true, [`alert-${color}`]: true, 'fade show': !!showClose }, className && { [className]: true })), [color, showClose, className]);
    return (jsxs("div", Object.assign({ className: classNames(generateClasses), style: style, role: "alert", id: id }, dataAttributes, { children: [icon && (jsx(DIcon, { className: "alert-icon", icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })), jsx("div", { className: "alert-text", children: children }), showClose && (jsx("button", { type: "button", className: "d-close", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: iconClose, familyClass: iconCloseFamilyClass, familyPrefix: iconCloseFamilyPrefix, materialStyle: iconCloseMaterialStyle }) }))] })));
}

function DAvatar({ id, size, image, name: nameProp, useNameAsInitials = false, className, style, dataAttributes, }) {
    const generateClasses = useMemo(() => ({
        'd-avatar': true,
        [`d-avatar-${size}`]: !!size,
    }), [size]);
    const name = useMemo(() => {
        if (!nameProp) {
            return undefined;
        }
        if (useNameAsInitials) {
            return nameProp;
        }
        return nameProp.split(/\s+/).map((word) => word.charAt(0)).join('').toUpperCase();
    }, [nameProp, useNameAsInitials]);
    return (jsxs("div", Object.assign({ className: classNames(generateClasses, className), style: style, id: id }, dataAttributes, { children: [image && jsx("img", { src: image, alt: nameProp, className: "d-avatar-img" }), (name && !image) && jsx("span", { className: "d-avatar-name", children: name })] })));
}

function DBadge({ text, soft = false, color = 'primary', id, rounded, className, size, style, iconStart, iconEnd, iconMaterialStyle, iconFamilyClass, iconFamilyPrefix, dataAttributes, }) {
    const generateClasses = useMemo(() => ({
        badge: true,
        [`badge-${color}`]: !!color && !soft,
        [`badge-soft-${color}`]: !!color && soft,
        'rounded-pill': !!rounded,
        [`badge-${size}`]: !!size,
    }), [rounded, soft, color, size]);
    return (jsxs("span", Object.assign({ className: classNames(generateClasses, className), style: style }, id && { id }, dataAttributes, { children: [iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })), jsx("span", { children: text }), iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle }))] })));
}

function DBox({ className, style, children, dataAttributes, }) {
    return (jsx("div", Object.assign({ style: style, className: classNames('d-box', className) }, dataAttributes, { children: children })));
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
    var { id: idProp, style, className, label = '', disabled = false, loading = false, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconStart, iconStartDisabled, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconStartTabIndex, iconStartMaterialStyle, iconEnd, iconEndDisabled, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, iconEndMaterialStyle, hint, size, invalid = false, valid = false, floatingLabel = false, inputStart, inputEnd, value, placeholder = '', dataAttributes, readonly, onChange, onIconStartClick, onIconEndClick } = _a, inputProps = __rest(_a, ["id", "style", "className", "label", "disabled", "loading", "iconFamilyClass", "iconFamilyPrefix", "iconMaterialStyle", "iconStart", "iconStartDisabled", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconStartAriaLabel", "iconStartTabIndex", "iconStartMaterialStyle", "iconEnd", "iconEndDisabled", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "iconEndMaterialStyle", "hint", "size", "invalid", "valid", "floatingLabel", "inputStart", "inputEnd", "value", "placeholder", "dataAttributes", "readonly", "onChange", "onIconStartClick", "onIconEndClick"]);
    const inputRef = useProvidedRefOrCreate(ref);
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
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
                }), children: [!!inputStart && (jsx("div", { className: "input-group-text", id: `${id}InputStart`, children: inputStart })), iconStart && (jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: handleOnIconStartClick, disabled: disabled || loading || iconStartDisabled, "aria-label": iconStartAriaLabel, tabIndex: onIconStartClick ? iconStartTabIndex : -1, children: jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix, materialStyle: iconStartMaterialStyle }) })), dynamicComponent, (iconEnd && !loading) && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: handleOnIconEndClick, disabled: disabled || loading || iconEndDisabled, "aria-label": iconEndAriaLabel, tabIndex: onIconEndClick ? iconEndTabIndex : -1, children: jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix, materialStyle: iconEndMaterialStyle }) })), loading && (jsx("div", { className: "input-group-text", id: `${id}Loading`, children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", "data-testid": "loading-spinner", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) })), !!inputEnd && (jsx("div", { className: "input-group-text", id: `${id}InputEnd`, children: inputEnd }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}
const ForwardedDInput = forwardRef(DInput);
ForwardedDInput.displayName = 'DInput';

/**
 * Check if the provided file type should be accepted by the input with accept attribute.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-accept
 *
 * Inspired by https://github.com/enyo/dropzone
 *
 * @param file {File} https://developer.mozilla.org/en-US/docs/Web/API/File
 * @param acceptedFiles {string|string[]}
 * @returns {boolean}
 */
function attrAccept(file, acceptedFiles) {
    if (file && acceptedFiles) {
        const acceptedFilesArray = Array.isArray(acceptedFiles)
            ? acceptedFiles
            : acceptedFiles.split(',');
        if (acceptedFilesArray.length === 0) {
            return true;
        }
        const fileName = file.name || '';
        const mimeType = (file.type || '').toLowerCase();
        const baseMimeType = mimeType.replace(/\/.*$/, '');
        return acceptedFilesArray.some((type) => {
            const validType = type.trim().toLowerCase();
            if (validType.charAt(0) === '.') {
                return fileName.toLowerCase().endsWith(validType);
            }
            if (validType.endsWith('/*')) {
                // This is something like a image/* mime type
                return baseMimeType === validType.replace(/\/.*$/, '');
            }
            return mimeType === validType;
        });
    }
    return true;
}

const isIeOrEdge = (userAgent = window.navigator.userAgent) => ((userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1)
    || userAgent.indexOf('Edge/') !== -1);
const ErrorCodes = {
    FileInvalidType: 'file-invalid-type',
    FileTooLarge: 'file-too-large',
    FileTooSmall: 'file-too-small',
    TooManyFiles: 'too-many-files',
    FailedFetch: 'failed-fetch-file',
};
// Check if v is a MIME type string.
function isMIMEType(v) {
    return (v === 'audio/*'
        || v === 'video/*'
        || v === 'image/*'
        || v === 'text/*'
        || v === 'application/*'
        || /\w+\/[-+.\w]+/g.test(v));
}
// Check if v is a file extension.
function isExt(v) {
    return /^.*\.[\w]+$/.test(v);
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
// Convert the `{accept}` dropzone prop to an array of MIME types/extensions.
function acceptPropAsAcceptAttr(accept) {
    return (Object.entries(accept)
        .reduce((a, [mimeType, ext]) => [...a, mimeType, ...ext], [])
        .filter((v) => isMIMEType(v) || isExt(v))
        .join(','));
}
function fileAccepted(file, accept) {
    const isAcceptable = file.type === 'application/x-moz-file' || attrAccept(file, accept);
    if (!isAcceptable) {
        return [
            false,
            {
                code: ErrorCodes.FileInvalidType,
                message: 'File has an unsupported file type',
            },
        ];
    }
    return [true, null];
}
function fileMatchSize(file, minSize, maxSize) {
    if (isDefined(file.size)) {
        if (isDefined(minSize) && file.size < minSize) {
            return [
                false,
                {
                    code: ErrorCodes.FileTooSmall,
                    message: `File "${file.name}" is too small. Minimum size is ${minSize} bytes.`,
                },
            ];
        }
        if (isDefined(maxSize) && file.size > maxSize) {
            return [
                false, {
                    code: ErrorCodes.FileTooLarge,
                    message: `File "${file.name}" is too large. Maximum size is ${maxSize} bytes.`,
                },
            ];
        }
    }
    return [true, null];
}
async function urlToFile(url) {
    var _a;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            return [
                null,
                {
                    code: ErrorCodes.FailedFetch,
                    message: `Failed to fetch file from ${url} (HTTP ${res.status})`,
                },
            ];
        }
        const blob = await res.blob();
        const filename = ((_a = url.split('/').pop()) === null || _a === void 0 ? void 0 : _a.split('?')[0]) || 'file';
        const file = new File([blob], filename, { type: blob.type });
        return [file, null];
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        const isCorsError = errorMessage.includes('CORS') || errorMessage.includes('Failed to fetch');
        return [
            null,
            {
                code: ErrorCodes.FailedFetch,
                message: `Failed to fetch file from ${url}${isCorsError ? ' (CORS error - file may not be accessible from this domain)' : ` (${errorMessage})`}`,
            },
        ];
    }
}
async function urlsToFiles(urls) {
    const results = await Promise.all(urls.map(urlToFile));
    let acceptedFiles = [];
    let errors = [];
    results.forEach(([file, error]) => {
        if (file) {
            acceptedFiles = [...acceptedFiles, file];
        }
        if (error) {
            errors = [...errors, error];
        }
    });
    return [acceptedFiles, errors];
}
const DEFAULT_PROPS = {
    disabled: false,
    maxSize: Infinity,
    minSize: 0,
    multiple: false,
    maxFiles: Infinity,
    noClick: false,
    noKeyboard: false,
    noDrag: false,
    autoFocus: false,
};

/* eslint-disable no-param-reassign */
function useDBoxFile(props) {
    const { accept, autoFocus, disabled, maxSize, minSize, multiple, maxFiles, value: preloadUrls, onDragEnter, onDragLeave, onDrop, onError, onLoad, noClick, noKeyboard, noDrag, } = Object.assign(Object.assign({}, DEFAULT_PROPS), props);
    const inputRef = useRef(null);
    const rootRef = useRef(null);
    const dragTargetsRef = useRef([]);
    const acceptAttr = useMemo(() => acceptPropAsAcceptAttr(accept), [accept]);
    const [files, setFiles] = useState([]);
    const [isDragValid, setIsDragValid] = useState(false);
    const [isDragInvalid, setIsDragInvalid] = useState(false);
    const preventDropOnDocument = useCallback((event) => {
        if (rootRef.current && rootRef.current.contains(event.target)) {
            // If we intercepted an event for our instance
            // let it propagate down to the instance's onDrop handler
            return;
        }
        event.preventDefault();
        dragTargetsRef.current = [];
    }, []);
    useEffect(() => {
        // Prevent drop over anywhere in the document
        document.addEventListener('dragover', preventDropOnDocument, false);
        document.addEventListener('drop', preventDropOnDocument, false);
        return () => {
            document.removeEventListener('dragover', preventDropOnDocument);
            document.removeEventListener('drop', preventDropOnDocument);
        };
    }, [preventDropOnDocument]);
    // Auto focus the root when autoFocus is true
    useEffect(() => {
        if (!disabled && autoFocus && rootRef.current) {
            rootRef.current.focus();
        }
    }, [rootRef, autoFocus, disabled]);
    useEffect(() => {
        if (!preloadUrls || !preloadUrls.length)
            return;
        // eslint-disable-next-line no-void
        void (async () => {
            const [accepted, errors] = await urlsToFiles(preloadUrls);
            if (accepted.length) {
                setFiles(accepted);
                onLoad === null || onLoad === void 0 ? void 0 : onLoad(accepted);
            }
            if (errors.length) {
                onError === null || onError === void 0 ? void 0 : onError(new Error(errors.map((e) => e.message).join(', ')));
            }
        })();
    }, [
        preloadUrls,
        onError,
        onLoad,
    ]);
    const processFiles = useCallback((inputFiles, event) => {
        let acceptedFiles = [];
        let rejectedFiles = [];
        // Handle size and type validation
        inputFiles.forEach((file) => {
            const [isTypeValid, acceptError] = fileAccepted(file, acceptAttr);
            const [isSizeValid, sizeError] = fileMatchSize(file, minSize, maxSize);
            const errors = [acceptError, sizeError].filter((e) => Boolean(e));
            if (isTypeValid && isSizeValid) {
                acceptedFiles = [...acceptedFiles, file];
            }
            else {
                rejectedFiles = [...rejectedFiles, { file, errors }];
            }
        });
        // Handle maxFiles overflow by trimming
        const total = files.length + acceptedFiles.length;
        if (total > maxFiles) {
            const allowed = Math.max(0, maxFiles - files.length);
            const accepted = acceptedFiles.slice(0, allowed);
            const rejected = acceptedFiles.slice(allowed).map((file) => ({
                file,
                errors: [
                    {
                        code: ErrorCodes.TooManyFiles,
                        message: `Exceeds maximum number of files (${maxFiles})`,
                    },
                ],
            }));
            acceptedFiles = [...accepted];
            rejectedFiles = [...rejectedFiles, ...rejected];
        }
        if (multiple) {
            setFiles((prev) => [...prev, ...acceptedFiles]);
        }
        else {
            setFiles(acceptedFiles.slice(0, 1));
        }
        if (onDrop) {
            onDrop(acceptedFiles, rejectedFiles, event);
        }
    }, [
        acceptAttr,
        files,
        maxFiles,
        maxSize,
        minSize,
        multiple,
        onDrop,
    ]);
    const handleDragEnter = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        if (disabled || noDrag)
            return;
        if (event.target instanceof HTMLElement) {
            dragTargetsRef.current = [...dragTargetsRef.current, event.target];
        }
        fromEvent(event).then((eventFiles) => {
            const fileCount = eventFiles.length;
            if (fileCount === 0) {
                setIsDragValid(false);
                setIsDragInvalid(true);
                return;
            }
            const isDragAccepted = eventFiles.every((file) => {
                const [typeValid] = fileAccepted(file, acceptAttr);
                const [sizeValid] = fileMatchSize(file, minSize, maxSize);
                return typeValid && sizeValid;
            });
            setIsDragValid(isDragAccepted);
            setIsDragInvalid(!isDragAccepted);
            onDragEnter === null || onDragEnter === void 0 ? void 0 : onDragEnter(event);
        }).catch((error) => {
            onError === null || onError === void 0 ? void 0 : onError(error);
        });
    }, [
        acceptAttr,
        disabled,
        maxSize,
        minSize,
        noDrag,
        onDragEnter,
        onError,
    ]);
    const handleDrop = useCallback((event) => {
        event.preventDefault();
        event.persist();
        event.stopPropagation();
        dragTargetsRef.current = [];
        setIsDragValid(false);
        setIsDragInvalid(false);
        if (disabled || noDrag)
            return;
        const droppedArray = Array.from(event.dataTransfer.files);
        processFiles(droppedArray, event.nativeEvent);
    }, [
        disabled,
        noDrag,
        processFiles,
    ]);
    const handleDragLeave = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        if (disabled || noDrag)
            return;
        // Only deactivate once the dropzone and all children have been left
        const targets = dragTargetsRef.current.filter((target) => rootRef.current && rootRef.current.contains(target));
        // Make sure to remove a target present multiple times only once
        // (Firefox may fire dragenter/dragleave multiple times on the same element)
        if (event.target instanceof HTMLElement) {
            const targetIdx = targets.indexOf(event.target);
            if (targetIdx !== -1) {
                targets.splice(targetIdx, 1);
            }
            dragTargetsRef.current = targets;
        }
        if (targets.length === 0) {
            setIsDragValid(false);
            setIsDragInvalid(false);
            onDragLeave === null || onDragLeave === void 0 ? void 0 : onDragLeave(event);
        }
    }, [disabled, noDrag, onDragLeave]);
    const handleFileSelect = useCallback((event) => {
        const targetFiles = event.target.files;
        if (!targetFiles)
            return;
        const selectedFiles = Array.from(targetFiles);
        processFiles(selectedFiles, event.nativeEvent);
        event.target.value = '';
    }, [processFiles]);
    const handleRemoveFile = useCallback((index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
        // Done twice to avoid mismatch between files and setFiles value
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(files.filter((_, i) => i !== index));
    }, [files, onLoad]);
    const openFileDialog = useCallback(() => {
        var _a;
        if (disabled)
            return;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    }, [disabled]);
    const handleClick = useCallback(() => {
        if (noClick) {
            return;
        }
        if (isIeOrEdge()) {
            setTimeout(openFileDialog, 0);
        }
        else {
            openFileDialog();
        }
    }, [noClick, openFileDialog]);
    const handleKeyDown = useCallback((event) => {
        if (!noKeyboard && (event.key === ' ' || event.key === 'Enter')) {
            event.preventDefault();
            openFileDialog();
        }
    }, [noKeyboard, openFileDialog]);
    return {
        inputRef,
        rootRef,
        files,
        isDragValid,
        isDragInvalid,
        acceptAttr,
        openFileDialog,
        handleFileSelect,
        handleDrop,
        handleDragEnter,
        handleDragLeave,
        handleRemoveFile,
        handleClick,
        handleKeyDown,
    };
}

function DBoxFile(_a) {
    var { icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, children, className, style, dataAttributes } = _a, props = __rest(_a, ["icon", "iconFamilyClass", "iconFamilyPrefix", "iconMaterialStyle", "children", "className", "style", "dataAttributes"]);
    const { iconMap: { upload } } = useDContext();
    const icon = useMemo(() => iconProp || upload, [iconProp, upload]);
    const { inputRef, rootRef, isDragValid, isDragInvalid, acceptAttr, files, handleFileSelect, handleDrop, handleDragEnter, handleDragLeave, handleClick, handleKeyDown, handleRemoveFile, openFileDialog, } = useDBoxFile(props);
    return (jsxs(Fragment, { children: [jsx("section", Object.assign({ className: classNames('d-box-file', {
                    'd-box-file-selected': files.length > 0,
                    'd-box-file-disabled': props.disabled,
                    'd-box-file-valid': isDragValid,
                    'd-box-file-invalid': isDragInvalid,
                }, className), style: style }, dataAttributes, { children: jsxs("div", Object.assign({ className: "d-box-file-dropzone", ref: rootRef, onDragEnter: handleDragEnter, onDragOver: (e) => e.preventDefault(), onDragLeave: handleDragLeave, onDrop: handleDrop, onClick: handleClick, onKeyDown: handleKeyDown }, (!props.disabled && !props.noKeyboard ? { tabIndex: 0 } : {}), { role: "presentation", children: [jsx("input", { type: "file", multiple: props.multiple, style: { display: 'none' }, ref: inputRef, disabled: props.disabled, onChange: handleFileSelect, onClick: (e) => e.stopPropagation(), tabIndex: -1, accept: acceptAttr }), icon && iconProp !== false && (jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })), jsx("div", { className: "d-box-content", children: typeof children === 'function'
                                ? children(openFileDialog)
                                : children || (jsx("p", { className: "text-center m-0", children: "Drag and drop some files here, or click to select files" })) })] })) })), !!files.length && (jsx("ul", { className: "d-box-files", children: files.map((file, index) => (jsx(ForwardedDInput, { value: file.name, iconStart: "Paperclip", iconEnd: "Trash", readOnly: true, onIconEndClick: () => handleRemoveFile(index) }, `${file.name} ${index}`))) }))] }));
}

const DButton = forwardRef((props, ref) => {
    const { color = 'primary', size, variant, text, children, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartMaterialStyle, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndMaterialStyle, loading = false, loadingText, loadingAriaLabel, disabled = false, className, style, dataAttributes, onClick, type = 'button' } = props, rest = __rest(props, ["color", "size", "variant", "text", "children", "iconStart", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconStartMaterialStyle", "iconEnd", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndMaterialStyle", "loading", "loadingText", "loadingAriaLabel", "disabled", "className", "style", "dataAttributes", "onClick", "type"]);
    const [buttonWidth, setButtonWidth] = useState();
    const buttonRef = useRef(null);
    const isDisabled = useMemo(() => disabled || loading, [disabled, loading]);
    const content = useMemo(() => children || text, [children, text]);
    const classes = useMemo(() => {
        const variantClass = variant
            ? `btn-${variant}-${color}`
            : `btn-${color}`;
        return {
            btn: true,
            [variantClass]: true,
            [`btn-${size}`]: !!size,
            loading,
        };
    }, [variant, color, size, loading]);
    const ariaLabel = useMemo(() => {
        const ariaLabelProp = rest['aria-label'];
        return loading
            ? loadingAriaLabel || ariaLabelProp || text
            : ariaLabelProp || text;
    }, [loading, loadingAriaLabel, rest, text]);
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
            : undefined)), disabled: isDisabled, "aria-label": ariaLabel, "aria-busy": loading, "aria-disabled": isDisabled, onClick: handleClick }, dataAttributes, rest, { children: [loading && (jsxs("span", { className: "btn-loading", children: [jsx("span", { className: "spinner-border spinner-border-sm", "aria-hidden": "true" }), loadingText && jsx("span", { role: "status", children: loadingText })] })), !loading && (jsxs(Fragment, { children: [iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix, materialStyle: iconStartMaterialStyle })), content, iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix, materialStyle: iconEndMaterialStyle }))] }))] })));
});
DButton.displayName = 'DButton';

function DButtonIcon({ id, icon, size, className, variant, state, loadingAriaLabel, iconMaterialStyle, ariaLabel, color = 'primary', type = 'button', loading = false, disabled = false, stopPropagationEnabled = true, style, iconFamilyClass, iconFamilyPrefix, dataAttributes, onClick, }) {
    const generateClasses = useMemo(() => {
        const variantClass = variant
            ? `btn-${variant}-${color}`
            : `btn-${color}`;
        return Object.assign(Object.assign(Object.assign({ 'btn d-button-icon': true, [variantClass]: true }, size && { [`btn-${size}`]: true }), (state && state !== 'disabled') && { [state]: true }), { loading });
    }, [variant, color, size, state, loading]);
    const clickHandler = useCallback((event) => {
        if (stopPropagationEnabled) {
            event.stopPropagation();
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    }, [stopPropagationEnabled, onClick]);
    const isDisabled = useMemo(() => (state === 'disabled' || loading || disabled), [state, loading, disabled]);
    const newAriaLabel = useMemo(() => (loading
        ? (loadingAriaLabel || ariaLabel)
        : (ariaLabel)), [ariaLabel, loading, loadingAriaLabel]);
    return (jsx("button", Object.assign({ className: classNames(generateClasses, className), style: style, type: type, disabled: isDisabled, onClick: clickHandler, "aria-label": newAriaLabel, id: id }, dataAttributes, { children: loading
            ? (jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }))
            : (jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })) })));
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

function DCard({ className, style, children, dataAttributes, }) {
    return (jsx("div", Object.assign({ style: style, className: classNames('card', className) }, dataAttributes, { children: children })));
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

function DCarousel(_a, ref) {
    var { children, className, style, options, dataAttributes } = _a, props = __rest(_a, ["children", "className", "style", "options", "dataAttributes"]);
    return (jsx(Splide, Object.assign({ className: classNames('d-carousel', className), style: style, ref: ref, options: Object.assign(Object.assign({}, options), { classes: {
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
const ForwardedDCarousel = forwardRef(DCarousel);
ForwardedDCarousel.displayName = 'DCarousel';
var DCarousel$1 = Object.assign(ForwardedDCarousel, {
    Slide: DCarouselSlide,
});

function DChip({ color = 'primary', text, icon, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle, showClose = false, closeAriaLabel = 'close', className, style, dataAttributes, onClose, }) {
    const generateClasses = useMemo(() => ({
        'd-chip': true,
        [`d-chip-${color}`]: !!color,
    }), [color]);
    const { iconMap: { xLg, }, } = useDContext();
    const iconClose = useMemo(() => iconCloseProp || xLg, [iconCloseProp, xLg]);
    return (jsxs("span", Object.assign({ className: classNames(generateClasses, className), style: style }, dataAttributes, { children: [icon && (jsx("div", { className: "d-chip-icon-container", children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle }) })), jsx("span", { children: text }), showClose && (jsx("button", { type: "button", className: "d-chip-icon-container", onClick: onClose, "aria-label": closeAriaLabel, children: jsx(DIcon, { icon: iconClose, familyClass: iconCloseFamilyClass, familyPrefix: iconCloseFamilyPrefix, materialStyle: iconCloseMaterialStyle }) }))] })));
}

function DCollapse({ id, className, style, Component, hasSeparator = false, defaultCollapsed = true, onChange, children, iconOpen: iconOpenProp, iconClose: iconCloseProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle = false, dataAttributes, }) {
    const [collapsed, setCollapsed] = useState(defaultCollapsed);
    const onChangeCollapse = () => {
        setCollapsed((prev) => {
            const next = !prev;
            if (onChange) {
                onChange(next);
            }
            return next;
        });
    };
    useEffect(() => {
        setCollapsed(defaultCollapsed);
    }, [defaultCollapsed]);
    const { iconMap: { chevronDown, chevronUp, }, } = useDContext();
    const iconOpen = useMemo(() => iconOpenProp || chevronDown, [chevronDown, iconOpenProp]);
    const iconClose = useMemo(() => iconCloseProp || chevronUp, [chevronUp, iconCloseProp]);
    const generateStyles = useMemo(() => ({
        [`--${PREFIX_BS}collapse-separator-display`]: hasSeparator ? 'block' : 'none',
    }), [hasSeparator]);
    return (jsxs("div", Object.assign({ id: id, className: classNames('collapse-container', className), style: style }, dataAttributes, { children: [jsxs("button", { className: "collapse-button", type: "button", onClick: onChangeCollapse, children: [jsx("div", { className: "flex-grow-1", children: Component }), jsx(DIcon, { color: "gray", size: "1rem", icon: collapsed ? iconOpen : iconClose, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })] }), !collapsed && (jsx("div", { className: classNames({
                    'collapse-body': true,
                }), style: generateStyles, children: children }))] })));
}

function formatCurrency(amount, options) {
    return currency(amount, options).format();
}

function useFormatCurrency(...args) {
    const { currency } = useDContext();
    const format = useCallback((value, currencyOptions) => formatCurrency(value, currencyOptions || currency), [currency]);
    const values = (args || []).map((value) => (formatCurrency(value !== null && value !== void 0 ? value : 0, currency)));
    return {
        format,
        values,
    };
}

function DCurrencyText({ value, className, style, dataAttributes, }) {
    const { values: [valueFormatted] } = useFormatCurrency(value);
    return (jsx("span", Object.assign({ className: className, style: style }, dataAttributes, { children: valueFormatted })));
}

function DDatePickerTime({ value, onChange, id, }) {
    return (jsx(ForwardedDInput, { className: "d-datepicker-time", type: "time", value: value, id: id, onChange: (time) => {
            onChange === null || onChange === void 0 ? void 0 : onChange(time);
        } }));
}

function DDatePickerInput(_a, ref) {
    var { value, onClick, id, iconEnd, className, style, inputLabel, readOnly: ignored } = _a, props = __rest(_a, ["value", "onClick", "id", "iconEnd", "className", "style", "inputLabel", "readOnly"]);
    const { iconMap: { calendar } } = useDContext();
    return (jsx(ForwardedDInput, Object.assign({ ref: ref, onClick: onClick, readOnly: true, type: "text", id: id, value: value, onIconEndClick: onClick, iconEnd: iconEnd || calendar, className: className, style: style, label: inputLabel }, props)));
}
const ForwardedDDatePickerInput = forwardRef(DDatePickerInput);
ForwardedDDatePickerInput.displayName = 'DDatePickerInput';

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
            innerRef.current.indeterminate = Boolean(indeterminate);
        }
    }, [indeterminate]);
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
    const { iconMap: { x, }, } = useDContext();
    return (jsx(components.ClearIndicator, Object.assign({}, props, { children: jsx(DIcon, { icon: x }) })));
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

function DSelectPlaceholder(_a) {
    var { selectProps, innerProps: innerPropsProp, children } = _a, props = __rest(_a, ["selectProps", "innerProps", "children"]);
    const id = useMemo(() => `${selectProps.inputId}Placeholder`, [selectProps.inputId]);
    const innerProps = useMemo(() => (Object.assign(Object.assign({}, innerPropsProp), { id })), [innerPropsProp, id]);
    return (jsx(components.Placeholder, Object.assign({ innerProps: innerProps, selectProps: selectProps }, props, { children: children })));
}

function DSelect(_a) {
    var { id: idProp, className, style, label, hint, iconFamilyClass, iconFamilyPrefix, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconStartTabIndex, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, invalid, valid, menuWithMaxContent = false, disabled, clearable, loading, floatingLabel = false, rtl, searchable, multi, components, defaultValue, placeholder, onIconStartClick, onIconEndClick, dataAttributes } = _a, props = __rest(_a, ["id", "className", "style", "label", "hint", "iconFamilyClass", "iconFamilyPrefix", "iconStart", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconStartAriaLabel", "iconStartTabIndex", "iconEnd", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "invalid", "valid", "menuWithMaxContent", "disabled", "clearable", "loading", "floatingLabel", "rtl", "searchable", "multi", "components", "defaultValue", "placeholder", "onIconStartClick", "onIconEndClick", "dataAttributes"]);
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const handleOnIconStartClick = useCallback(() => {
        onIconStartClick === null || onIconStartClick === void 0 ? void 0 : onIconStartClick(defaultValue);
    }, [onIconStartClick, defaultValue]);
    const handleOnIconEndClick = useCallback(() => {
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick(defaultValue);
    }, [onIconEndClick, defaultValue]);
    return (jsxs("div", Object.assign({ className: classNames('d-select', className, {
            'd-select-floating': floatingLabel,
            disabled: disabled || loading,
        }), style: style }, dataAttributes, { children: [label && (jsx("label", { htmlFor: id, children: label })), jsxs("div", { className: classNames({
                    'input-group': true,
                    'has-validation': invalid,
                    disabled: disabled || loading,
                }), children: [iconStart && (jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: handleOnIconStartClick, disabled: disabled || loading, "aria-label": iconStartAriaLabel, tabIndex: iconStartTabIndex, children: jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix }) })), jsx(Select, Object.assign({ id: `${id}Container`, inputId: id, styles: {
                            control: (base) => (Object.assign(Object.assign({}, base), { minHeight: 'unset' })),
                            container: (base) => (Object.assign(Object.assign({}, base), { flex: 1 })),
                            menu: (base) => (Object.assign(Object.assign({}, base), { width: menuWithMaxContent ? 'max-context' : '100%', zIndex: 1000 })),
                        }, className: classNames('d-select-component', {
                            'is-invalid': invalid,
                            'is-valid': valid,
                        }), classNamePrefix: "d-select", isDisabled: disabled || loading, isClearable: clearable, isLoading: loading, isRtl: rtl, isSearchable: searchable, isMulti: multi, defaultValue: defaultValue, placeholder: floatingLabel ? '' : placeholder, unstyled: true, components: Object.assign({ Placeholder: DSelectPlaceholder, DropdownIndicator: DSelectDropdownIndicator, ClearIndicator: DSelectClearIndicator, MultiValueRemove: DSelectMultiValueRemove, LoadingIndicator: DSelectLoadingIndicator }, components) }, props)), (iconEnd && !loading) && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: handleOnIconEndClick, disabled: disabled || loading, "aria-label": iconEndAriaLabel, tabIndex: iconEndTabIndex, children: iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
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

var PickerType;
(function (PickerType) {
    PickerType["Default"] = "default";
    PickerType["Quarter"] = "quarter";
    PickerType["Month"] = "month";
    PickerType["Year"] = "year";
})(PickerType || (PickerType = {}));
function DDatePickerHeaderSelector({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, decreaseYear, increaseYear, monthDate, formatHeaderDate = 'EE, LLLL d', pickerType, prevMonthButtonDisabled, nextMonthButtonDisabled, monthsShown = 1, iconPrev, iconNext, prevYearButtonDisabled, nextYearButtonDisabled, prevMonthAriaLabel = 'decrease month', nextMonthAriaLabel = 'increase month', prevYearAriaLabel = 'decrease year', nextYearAriaLabel = 'increase year', iconSize, style, className, minYearSelect = 1900, maxYearSelect = 2100, showHeaderSelectors = false, customHeaderCount, locale, }) {
    const { iconMap: { chevronLeft, chevronRight, }, } = useDContext();
    const arrayYears = useMemo(() => Array.from({ length: maxYearSelect - minYearSelect + 1 }, (_, index) => minYearSelect + index), [maxYearSelect, minYearSelect]);
    const years = useMemo(() => arrayYears.map((year) => ({
        label: year.toString(),
        value: year,
    })), [arrayYears]);
    const defaultYear = useMemo(() => years.find((year) => year.value === getYear(monthDate)), [monthDate, years]);
    const arrayMonths = useMemo(() => Array.from({ length: 12 }, (_, i) => format(new Date(2000, i), 'LLLL', { locale })), [locale]);
    const months = useMemo(() => arrayMonths.map((month, i) => ({
        label: month,
        value: i,
    })), [arrayMonths]);
    const defaultMonth = useMemo(() => ({
        label: arrayMonths[getMonth(monthDate)],
        value: getMonth(monthDate),
    }), [arrayMonths, monthDate]);
    const getYearRange = useCallback(() => {
        const blockIndex = Math.floor((date.getFullYear() - 1) / 12);
        const startYear = blockIndex * 12 + 1;
        const endYear = startYear + 11;
        return [startYear, endYear];
    }, [date]);
    const [startYear, endYear] = getYearRange();
    if (pickerType === PickerType.Year) {
        return (jsxs("div", { className: classNames('react-datepicker__header-selector react-datepicker__header-year-selector', className), style: style, children: [jsx(DButtonIcon, { icon: iconPrev || chevronLeft, size: iconSize, variant: "link", onClick: decreaseYear, disabled: prevYearButtonDisabled, ariaLabel: prevYearAriaLabel, className: "header-button" }), jsx("p", { children: `${startYear} - ${endYear}` }), jsx(DButtonIcon, { icon: iconNext || chevronRight, size: iconSize, variant: "link", onClick: increaseYear, disabled: nextYearButtonDisabled, ariaLabel: nextYearAriaLabel, className: "header-button" })] }));
    }
    if (pickerType === PickerType.Quarter || pickerType === PickerType.Month) {
        return (jsxs("div", { className: classNames(`react-datepicker__header-selector react-datepicker__header-${pickerType}-selector`, className), style: style, children: [jsx(DButtonIcon, { icon: iconPrev || chevronLeft, size: iconSize, variant: "link", onClick: decreaseYear, disabled: prevMonthButtonDisabled, ariaLabel: prevMonthAriaLabel, className: "header-button", style: { visibility: customHeaderCount === 0 ? 'visible' : 'hidden' } }), jsx("div", { className: "d-flex justify-content-center flex-grow-1", children: showHeaderSelectors ? (jsx(DSelect$1, { options: years, value: defaultYear, defaultValue: defaultYear, onChange: (year) => changeYear(Number(year === null || year === void 0 ? void 0 : year.value)), searchable: false })) : (jsx("p", { children: defaultYear === null || defaultYear === void 0 ? void 0 : defaultYear.label })) }), jsx(DButtonIcon, { icon: iconNext || chevronRight, size: iconSize, variant: "link", onClick: increaseYear, disabled: nextMonthButtonDisabled, ariaLabel: nextMonthAriaLabel, className: "header-button", style: { visibility: customHeaderCount === monthsShown - 1 ? 'visible' : 'hidden' } })] }));
    }
    return (jsxs(Fragment, { children: [jsxs("div", { className: "datepicker-top-header", children: [showHeaderSelectors && (jsx(DSelect$1, { options: years, value: defaultYear, defaultValue: defaultYear, onChange: (year) => changeYear(Number(year === null || year === void 0 ? void 0 : year.value)), searchable: false, className: "custom-year-selector" })), jsx("h4", { className: "mb-0 fw-normal", children: format(monthDate, formatHeaderDate, { locale }) })] }), jsxs("div", { className: classNames('react-datepicker__header-selector react-datepicker__header-day-selector', className), style: style, children: [jsx(DButtonIcon, { icon: iconPrev || chevronLeft, size: iconSize, variant: "link", onClick: decreaseMonth, disabled: prevMonthButtonDisabled, ariaLabel: prevMonthAriaLabel, className: "header-button", style: { visibility: customHeaderCount === 0 ? 'visible' : 'hidden' } }), showHeaderSelectors ? (jsx(DSelect$1, { options: months, value: defaultMonth, defaultValue: defaultMonth, onChange: (month) => changeMonth((month === null || month === void 0 ? void 0 : month.value) || 0), searchable: false, className: "custom-month-selector" })) : (jsx("p", { children: `${defaultMonth.label} ${defaultYear === null || defaultYear === void 0 ? void 0 : defaultYear.label}` })), jsx(DButtonIcon, { icon: iconNext || chevronRight, size: iconSize, variant: "link", onClick: increaseMonth, disabled: nextMonthButtonDisabled, ariaLabel: nextMonthAriaLabel, className: "header-button", style: { visibility: customHeaderCount === monthsShown - 1 ? 'visible' : 'hidden' } })] })] }));
}

function DDatePicker(_a) {
    var { inputLabel, inputHint, inputAriaLabel, inputActionAriaLabel = 'open calendar', inputId = 'input-calendar', timeId = 'input-time', timeInputLabel, minYearSelect, maxYearSelect, iconHeaderSize, iconMaterialStyle, iconInput, headerPrevMonthAriaLabel, headerNextMonthAriaLabel, invalid = false, valid = false, renderCustomHeader: renderCustomHeaderProp, className, dateFormatCalendar: dateFormatCalendarProp, style, dataAttributes, placeholder, showHeaderSelectors, formatHeaderDate } = _a, props = __rest(_a, ["inputLabel", "inputHint", "inputAriaLabel", "inputActionAriaLabel", "inputId", "timeId", "timeInputLabel", "minYearSelect", "maxYearSelect", "iconHeaderSize", "iconMaterialStyle", "iconInput", "headerPrevMonthAriaLabel", "headerNextMonthAriaLabel", "invalid", "valid", "renderCustomHeader", "className", "dateFormatCalendar", "style", "dataAttributes", "placeholder", "showHeaderSelectors", "formatHeaderDate"]);
    const pickerType = useMemo(() => {
        if (props.showQuarterYearPicker)
            return PickerType.Quarter;
        if (props.showMonthYearPicker)
            return PickerType.Month;
        if (props.showYearPicker)
            return PickerType.Year;
        return PickerType.Default;
    }, [
        props.showQuarterYearPicker,
        props.showMonthYearPicker,
        props.showYearPicker,
    ]);
    const DatePickerHeader = useCallback((headerProps) => (jsx(DDatePickerHeaderSelector, Object.assign({}, headerProps, { monthsShown: props.monthsShown, prevMonthAriaLabel: headerPrevMonthAriaLabel, nextMonthAriaLabel: headerNextMonthAriaLabel, iconSize: iconHeaderSize, minYearSelect: minYearSelect, maxYearSelect: maxYearSelect, pickerType: pickerType, showHeaderSelectors: showHeaderSelectors, formatHeaderDate: formatHeaderDate, locale: props.locale }))), [
        headerPrevMonthAriaLabel,
        headerNextMonthAriaLabel,
        iconHeaderSize,
        minYearSelect,
        maxYearSelect,
        pickerType,
        showHeaderSelectors,
        formatHeaderDate,
        props.monthsShown,
        props.locale,
    ]);
    const defaultRenderCustomHeader = useCallback((headerProps) => (jsx(DatePickerHeader, Object.assign({}, headerProps))), [DatePickerHeader]);
    const renderCustomHeader = useMemo(() => (renderCustomHeaderProp || defaultRenderCustomHeader), [defaultRenderCustomHeader, renderCustomHeaderProp]);
    return (jsx(DatePicker, Object.assign({}, dataAttributes, props, { calendarClassName: "d-date-picker", renderCustomHeader: renderCustomHeader, placeholderText: placeholder, customInput: (jsx(ForwardedDDatePickerInput, { id: inputId, "aria-label": inputAriaLabel, iconEndAriaLabel: inputActionAriaLabel, iconMaterialStyle: iconMaterialStyle, iconEnd: iconInput, inputLabel: inputLabel, className: className, style: style, invalid: invalid, valid: valid, hint: inputHint })), customTimeInput: (jsx(DDatePickerTime, { id: timeId })) })));
}

function DLayoutPane({ className, style, children, cols, colsXs, colsSm, colsMd, colsLg, colsXl, colsXxl, dataAttributes, }) {
    const colsClass = cols ? `g-col-${cols}` : undefined;
    const colsXsClass = colsXs ? `g-col-${colsXs}` : undefined;
    const colsSmClass = colsSm ? `g-col-sm-${colsSm}` : undefined;
    const colsMdClass = colsMd ? `g-col-md-${colsMd}` : undefined;
    const colsLgClass = colsLg ? `g-col-lg-${colsLg}` : undefined;
    const colsXlClass = colsXl ? `g-col-xl-${colsXl}` : undefined;
    const colsXxlClass = colsXxl ? `g-col-xxl-${colsXxl}` : undefined;
    return (jsx("div", Object.assign({ className: classNames(colsClass, colsXsClass, colsSmClass, colsMdClass, colsLgClass, colsXlClass, colsXxlClass, className), style: style }, dataAttributes, { children: children })));
}

function DLayout({ className, style, children, gap, columns, gapSm, gapMd, gapLg, gapXl, gapXxl, dataAttributes, }) {
    const gapClasses = classNames({
        [`gap-${gap}`]: gap !== undefined,
        [`gap-sm-${gapSm}`]: gapSm !== undefined,
        [`gap-md-${gapMd}`]: gapMd !== undefined,
        [`gap-lg-${gapLg}`]: gapLg !== undefined,
        [`gap-xl-${gapXl}`]: gapXl !== undefined,
        [`gap-xxl-${gapXxl}`]: gapXxl !== undefined,
    });
    const styleWithColumns = Object.assign(Object.assign({}, style), { '--bs-columns': columns });
    return (jsx("div", Object.assign({ style: styleWithColumns, className: classNames('grid', gapClasses, className) }, dataAttributes, { children: children })));
}
var DLayout$1 = Object.assign(DLayout, {
    Pane: DLayoutPane,
});

function DInputMask(props, ref) {
    return (jsx(InputMask, Object.assign({ ref: ref, component: ForwardedDInput }, props)));
}
const ForwardedDInputMask = forwardRef(DInputMask);
ForwardedDInputMask.displayName = 'DInputMask';

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
    const generateStyleVariables = useMemo(() => ({
        [`--${PREFIX_BS}input-currency-component-symbol-color`]: `var(--${PREFIX_BS}secondary)`,
        [`--${PREFIX_BS}input-currency-symbol-color`]: `var(--${PREFIX_BS}input-currency-component-symbol-color)`,
    }), []);
    const generateSymbolStyleVariables = useMemo(() => ({
        color: `var(--${PREFIX_BS}input-currency-symbol-color)`,
    }), []);
    const handleOnChange = useCallback((newValue) => {
        const newNumber = (newValue === undefined || newValue === '') ? undefined : Number(newValue);
        if (newNumber !== innerNumber) {
            setInnerNumber(newNumber);
            setInnerString(formatValue(newNumber, currencyOptions));
            onChange === null || onChange === void 0 ? void 0 : onChange(newNumber);
        }
    }, [currencyOptions, onChange, innerNumber]);
    useEffect(() => {
        if (value !== innerNumber) {
            setInnerNumber(value);
            setInnerString(formatValue(value, currencyOptions));
        }
    }, [value, currencyOptions, innerNumber]);
    const innerValue = useMemo(() => { var _a; return (innerType === 'number' ? (_a = innerNumber === null || innerNumber === void 0 ? void 0 : innerNumber.toString()) !== null && _a !== void 0 ? _a : '' : innerString !== null && innerString !== void 0 ? innerString : ''); }, [innerType, innerNumber, innerString]);
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
    const handleOnWheel = useCallback((event) => {
        var _a;
        event.stopPropagation();
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    }, [inputRef]);
    return {
        handleOnWheel,
    };
}

function useItemSelection({ getItemIdentifier: getItemIdentifierProp, previousSelected = [], } = {}) {
    const getItemIdentifier = useCallback((item) => (String(getItemIdentifierProp ? getItemIdentifierProp(item) : item.id)), [getItemIdentifierProp]);
    const [selectionMap, setSelectionMap] = useState(() => new Map(previousSelected.map((item) => [getItemIdentifier(item), item])));
    const selectedItems = useMemo(() => Array.from(selectionMap.values()), [selectionMap]);
    const setSelectedItems = useCallback((items) => {
        setSelectionMap(new Map(items.map((item) => [getItemIdentifier(item), item])));
    }, [getItemIdentifier]);
    const isSelectedItem = useCallback((item) => selectionMap.has(getItemIdentifier(item)), [getItemIdentifier, selectionMap]);
    const toggleSelectedItem = useCallback((item) => {
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
    const resetSelectedItems = useCallback(() => setSelectionMap(new Map()), []);
    return {
        selectedItems,
        isSelectedItem,
        toggleSelectedItem,
        resetSelectedItems,
        setSelectedItems,
    };
}

function DInputCounter(_a, ref) {
    var { minValue, maxValue, value = minValue, invalid, iconStart: iconStartProp, iconEnd: iconEndProp, iconStartAriaLabel = 'decrease action', iconEndAriaLabel = 'increase action', style, onChange } = _a, props = __rest(_a, ["minValue", "maxValue", "value", "invalid", "iconStart", "iconEnd", "iconStartAriaLabel", "iconEndAriaLabel", "style", "onChange"]);
    const { handleOnWheel, } = useDisableInputWheel(ref);
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
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}form-control-component-text-align`]: 'center' })), [style]);
    const valueString = useMemo(() => (internalValue.toString()), [internalValue]);
    useEffect(() => {
        setInternalIsInvalid(!(internalValue >= minValue && internalValue <= maxValue));
    }, [internalValue, minValue, maxValue]);
    const { iconMap: { input } } = useDContext();
    const iconEnd = useMemo(() => iconEndProp || input.increase, [iconEndProp, input.increase]);
    const iconStart = useMemo(() => iconStartProp || input.decrease, [iconStartProp, input.decrease]);
    return (jsx(ForwardedDInput, Object.assign({ ref: inputRef, value: valueString, style: generateStyleVariables, iconStart: iconStart, iconEnd: iconEnd, invalid: internalIsInvalid || invalid, type: "number", onChange: handleOnChange, onWheel: handleOnWheel, onIconStartClick: handleOnIconStartClick, onIconEndClick: handleOnIconEndClick, iconStartAriaLabel: iconStartAriaLabel, iconEndAriaLabel: iconEndAriaLabel }, internalValue === minValue && {
        iconStartDisabled: true,
    }, internalValue === maxValue && {
        iconEndDisabled: true,
    }, props)));
}
const ForwardedDInputCounter = forwardRef(DInputCounter);
ForwardedDInputCounter.displayName = 'DInputCounter';

function DInputCurrency(_a, ref) {
    var { value, minValue, maxValue, currencyCode, onFocus, onBlur, onChange } = _a, props = __rest(_a, ["value", "minValue", "maxValue", "currencyCode", "onFocus", "onBlur", "onChange"]);
    const { currency: currencyOptions } = useDContext();
    const { handleOnWheel, } = useDisableInputWheel(ref);
    const { inputRef, innerValue, innerType, handleOnFocus, handleOnChange, handleOnBlur, generateStyleVariables, generateSymbolStyleVariables, } = useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref);
    return (jsx(ForwardedDInput, Object.assign({ ref: inputRef, value: innerValue, onChange: handleOnChange, style: generateStyleVariables, inputMode: "decimal", type: innerType, onFocus: handleOnFocus, onBlur: handleOnBlur, onWheel: handleOnWheel, inputStart: (jsx("span", { slot: "input-start", style: generateSymbolStyleVariables, children: currencyCode || currencyOptions.symbol })) }, props)));
}
const ForwardedDInputCurrency = forwardRef(DInputCurrency);
ForwardedDInputCurrency.displayName = 'DInputCurrency';

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
    return (jsx(ForwardedDInput, Object.assign({ ref: inputRef, iconEnd: iconEnd, type: !visible ? 'password' : 'text', onIconEndClick: handleOnIconEndClick, iconEndAriaLabel: iconEndAriaLabel }, props)));
}
const ForwardedDInputPassword = forwardRef(DInputPassword);
ForwardedDInputPassword.displayName = 'DInputPassword';

function PasswordCheckItem({ password, regex, text, }) {
    const isValid = regex.test(password);
    return (jsxs("li", { className: "d-flex gap-2 align-items-start small text-gray-600", children: [jsx(DIcon, { className: classNames('flex-shrink-0', isValid ? 'text-success' : 'text-gray-300'), icon: isValid ? 'CircleCheck' : 'Circle', size: "16px" }), jsx("span", { className: classNames({ 'text-success': isValid }), children: text })] }));
}

const getColorClass = (strength, total) => {
    const percentage = total > 0 ? strength / total : 0;
    if (percentage === 0)
        return 'bg-gray-200';
    if (percentage <= 0.25)
        return 'bg-danger';
    if (percentage <= 0.5)
        return 'bg-warning';
    if (percentage <= 0.75)
        return 'bg-info';
    return 'bg-success';
};
function PasswordStrengthBar({ strength, total }) {
    const percentage = total > 0 ? (strength / total) * 100 : 0;
    return (jsx("div", { className: "w-100 rounded-3 overflow-hidden bg-gray-100 mb-2", style: { height: '8px' }, children: jsx("div", { className: `h-100 ${getColorClass(strength, total)}`, style: {
                width: `${percentage}%`,
                transition: 'width 0.3s ease-in-out',
            } }) }));
}

const CHECK_REGEX = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /\d/,
    specialChar: /[~!@#$^*\-_=[\]{}|;,.?]/,
};
function PasswordChecksList({ password, validationMessages, enabledChecks, }) {
    const allChecks = [
        {
            key: 'uppercase',
            regex: CHECK_REGEX.uppercase,
            text: validationMessages.uppercaseLetter,
        },
        {
            key: 'lowercase',
            regex: CHECK_REGEX.lowercase,
            text: validationMessages.lowercaseLetter,
        },
        {
            key: 'number',
            regex: CHECK_REGEX.number,
            text: validationMessages.number,
        },
        {
            key: 'specialChar',
            regex: CHECK_REGEX.specialChar,
            text: validationMessages.especialChar,
        },
    ];
    const passwordChecks = allChecks.filter((check) => enabledChecks.includes(check.key));
    const passed = passwordChecks.filter((r) => r.regex.test(password)).length;
    const total = passwordChecks.length;
    return (jsxs("div", { className: "mt-2", children: [jsx(PasswordStrengthBar, { strength: passed, total: total }), jsx("ul", { className: "list-unstyled m-0 d-flex flex-column gap-2", children: passwordChecks.map(({ key, regex, text }) => (jsx(PasswordCheckItem, { password: password, regex: regex, text: text }, key))) })] }));
}

const DEFAULT_VALIDATION_MESSAGES = {
    number: 'At least one number',
    lowercaseLetter: 'At least one lowercase letter',
    uppercaseLetter: 'At least one uppercase letter',
    especialChar: 'At least one of these special characters: ~!@#$^*-_=[]{}|;,.?',
    notMatch: 'The password confirmation and the new password do not match.',
};
const DEFAULT_ENABLED_CHECKS = ['uppercase', 'lowercase', 'number', 'specialChar'];
function DPasswordStrengthMeter({ id, label = 'Password', placeholder, value = '', name, disabled = false, invalid = false, validationMessages = DEFAULT_VALIDATION_MESSAGES, enabledChecks = DEFAULT_ENABLED_CHECKS, className, style, dataAttributes, onChange, }) {
    const [password, setPassword] = useState(value);
    useEffect(() => {
        setPassword(value);
    }, [value]);
    const handleChange = (newValue) => {
        setPassword(newValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    return (jsxs("div", Object.assign({ className: className, style: style }, dataAttributes, { children: [jsx(ForwardedDInputPassword, { id: id, label: label, placeholder: placeholder, value: password, name: name, disabled: disabled, invalid: invalid, onChange: handleChange }), jsx(PasswordChecksList, { password: password, validationMessages: validationMessages, enabledChecks: enabledChecks })] })));
}

function DInputPin({ id: idProp, label = '', placeholder, type = 'text', disabled = false, loading = false, secret = false, characters = 4, innerInputMode = 'text', hint, invalid = false, valid = false, className, style, dataAttributes, onChange, }) {
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const [pattern, setPattern] = useState('');
    const [activeInput, setActiveInput] = useState(Array.from({ length: characters }).fill(''));
    const isInputNum = useMemo(() => type === 'number' || type === 'tel', [type]);
    useEffect(() => {
        setPattern(type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$');
    }, [type]);
    const handleOTPChange = useCallback((otp) => {
        const otpValue = otp.join('');
        onChange === null || onChange === void 0 ? void 0 : onChange(otpValue);
    }, [onChange]);
    useEffect(() => {
        handleOTPChange(activeInput);
    }, [activeInput, handleOTPChange]);
    const handlePaste = useCallback((event) => {
        event.preventDefault();
        const pastedData = event.clipboardData.getData('text/plain');
        const cleanData = isInputNum ? pastedData.replace(/[^0-9]/gmi, '') : pastedData;
        const newInput = Array.from({ length: characters }).map((_, index) => cleanData[index] || '');
        setActiveInput(newInput);
        event.currentTarget.blur();
    }, [characters, isInputNum]);
    const nextInput = useCallback((event, index) => {
        var _a;
        const regex = new RegExp(pattern);
        const input = event.currentTarget;
        if (!regex.test(input.value)) {
            input.value = '';
        }
        if (input.value !== '') {
            setActiveInput((prev) => {
                const newValue = [...prev];
                newValue[index] = input.value;
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
    const prevInput = useCallback(({ key, currentTarget }, index) => {
        var _a;
        if (key === 'Backspace') {
            const { value } = currentTarget;
            setActiveInput((prev) => {
                const newVal = [...prev];
                newVal[index] = '';
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
    const focusInput = useCallback((index) => {
        setActiveInput((prev) => {
            const newVal = [...prev];
            newVal[index] = '';
            return newVal;
        });
    }, []);
    const wheelInput = useCallback((event) => {
        event.currentTarget.blur();
    }, []);
    return (jsxs("div", Object.assign({ className: classNames('d-input-pin', className), style: style }, dataAttributes, { children: [label && (jsx("label", { htmlFor: "pinIndex0", children: label })), jsxs("div", { className: "d-input-pin-group", id: id, children: [Array.from({ length: characters }).map((_, index) => (jsx("input", Object.assign({ className: classNames({
                            'form-control': true,
                            'is-invalid': invalid,
                            'is-valid': valid,
                        }), value: activeInput[index], type: secret ? 'password' : type, "aria-describedby": `${id}State`, inputMode: innerInputMode, id: `pinIndex${index}`, name: `pin-${index}`, maxLength: 1, onInput: (event) => nextInput(event, index), onKeyDown: (event) => prevInput(event, index), onFocus: () => focusInput(index), onWheel: wheelInput, onClick: (event) => event.preventDefault(), onPaste: (event) => handlePaste(event), autoComplete: "off", placeholder: placeholder, disabled: disabled || loading, required: true }, type === 'number' && ({ min: 0, max: 9 })), index))), loading && (jsx("div", { className: "input-group-text", children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}

function DInputSelect({ id: idProp, name, label = '', className, style, options = [], disabled = false, loading = false, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, hint, value, size, floatingLabel = false, invalid = false, valid = false, dataAttributes, valueExtractor, labelExtractor, onChange, onBlur, onIconStartClick, onIconEndClick, }) {
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
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
            [`form-select-${size}`]: !!size,
            'floating-label': floatingLabel,
            'is-invalid': invalid,
            'is-valid': valid,
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
        invalid,
        valid,
        size,
    ]);
    const labelComponent = useMemo(() => (jsx("label", { htmlFor: id, children: label })), [
        id,
        label,
    ]);
    const dynamicComponent = useMemo(() => {
        if (floatingLabel) {
            return (jsxs("div", { className: "form-floating", children: [selectComponent, labelComponent] }));
        }
        return selectComponent;
    }, [floatingLabel, labelComponent, selectComponent]);
    return (jsxs("div", Object.assign({ className: className, style: style }, dataAttributes, { children: [label && !floatingLabel && (labelComponent), jsxs("div", { className: classNames({
                    'input-group': true,
                }), children: [iconStart && (jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: iconStartClickHandler, disabled: disabled || loading, "aria-label": iconStartAriaLabel, children: iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })) })), dynamicComponent, iconEnd && !loading && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: iconEndClickHandler, disabled: disabled || loading, "aria-label": iconEndAriaLabel, children: iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) })), loading && (jsx("div", { className: "input-group-text form-control-icon loading", children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}

function DInputSwitch({ id: idProp, label, ariaLabel, name, checked, disabled, invalid = false, valid = false, readonly, className, style, dataAttributes, inputClassName, onChange, }) {
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const [internalIsChecked, setInternalIsChecked] = useState(checked);
    useEffect(() => {
        setInternalIsChecked(checked);
    }, [checked]);
    const changeHandler = useCallback((event) => {
        const value = event.currentTarget.checked;
        setInternalIsChecked(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (jsxs("div", Object.assign({ className: classNames('form-check form-switch', className) }, dataAttributes, { children: [jsx("input", { id: id, name: name, onChange: readonly ? () => false : changeHandler, className: classNames('form-check-input', {
                    'is-invalid': invalid,
                    'is-valid': valid,
                }, inputClassName), style: style, type: "checkbox", role: "switch", checked: internalIsChecked, disabled: disabled, "aria-label": ariaLabel }), label && (jsx("label", { className: "form-check-label", htmlFor: id, children: label }))] })));
}

function DInputRange(_a, ref) {
    var { id: idProp, label, ariaLabel, className, style, value = '0', min = '0', max = '100', filledValue = true, onChange } = _a, props = __rest(_a, ["id", "label", "ariaLabel", "className", "style", "value", "min", "max", "filledValue", "onChange"]);
    const innerRef = useProvidedRefOrCreate(ref);
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const generateClasses = useMemo(() => ({
        'form-range': true,
        'form-range-value-indicator': filledValue,
    }), [filledValue]);
    const generateStyleVariables = useMemo(() => {
        const minNumber = parseFloat(min.toString());
        const maxNumber = parseFloat(max.toString());
        const valueNumber = parseFloat(value.toString());
        const percentage = ((valueNumber - minNumber) / (maxNumber - minNumber)) * 100;
        return Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}form-range-component-value`]: `${percentage}%` });
    }, [min, max, value, style]);
    const inputComponent = useMemo(() => (jsx("input", Object.assign({ id: id, ref: innerRef, className: classNames(generateClasses, className), "aria-label": ariaLabel, type: "range", value: value, min: min, max: max, style: generateStyleVariables, onChange: onChange }, props))), [
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
    return (jsxs(Fragment, { children: [jsx("label", { className: "form-label", htmlFor: id, children: label }), inputComponent] }));
}
const ForwardedDInputRange = forwardRef(DInputRange);
ForwardedDInputRange.displayName = 'DInputRange';

function DListGroupItem({ as = 'li', action: actionProp, active, disabled, href, onClick, color, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartMaterialStyle, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndMaterialStyle, children, className, style, dataAttributes, }) {
    const Tag = useMemo(() => {
        if (href) {
            return 'a';
        }
        if (actionProp) {
            return 'button';
        }
        return as;
    }, [href, as, actionProp]);
    const action = useMemo(() => {
        if (Tag === 'a' || Tag === 'button') {
            return true;
        }
        return actionProp;
    }, [Tag, actionProp]);
    const generateClasses = useMemo(() => ({
        'list-group-item': true,
        'list-group-item-action': action,
        [`list-group-item-${color}`]: !!color,
        active,
        disabled,
    }), [action, active, disabled, color]);
    const ariaAttributes = useMemo(() => {
        if (Tag === 'button') {
            return Object.assign(Object.assign({}, active && { 'aria-current': true }), disabled && { disabled: true });
        }
        return Object.assign(Object.assign({}, active && { 'aria-current': true }), disabled && { 'aria-disabled': true });
    }, [Tag, active, disabled]);
    return (jsxs(Tag, Object.assign({ className: classNames(generateClasses, className), style: style }, Tag === 'a' && href && { href }, onClick && { onClick }, ariaAttributes, dataAttributes, Tag === 'button' && { type: 'button' }, { children: [iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix, materialStyle: iconStartMaterialStyle })), children, iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix, materialStyle: iconEndMaterialStyle, className: "ms-auto" }))] })));
}

function DListGroup({ as = 'ul', numbered, flush, horizontal, children, className, style, dataAttributes, }) {
    const Tag = useMemo(() => {
        if (numbered) {
            return 'ol';
        }
        return as;
    }, [numbered, as]);
    const generateClasses = useMemo(() => {
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
    return (jsx(Tag, Object.assign({ className: classNames(generateClasses, className), style: style }, dataAttributes, { children: children })));
}
var DListGroup$1 = Object.assign(DListGroup, {
    Item: DListGroupItem,
});

function DModalHeader({ showCloseButton, onClose, children, className, style, iconFamilyClass, iconFamilyPrefix, icon: iconProp, materialStyle = false, }) {
    const { iconMap: { xLg, }, } = useDContext();
    const icon = useMemo(() => iconProp || xLg, [iconProp, xLg]);
    return (jsxs(Fragment, { children: [jsxs("div", { className: classNames('modal-header', className), style: style, children: [jsx("div", { children: children }), showCloseButton && (jsx("button", { type: "button", className: "d-close align-self-center", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: materialStyle }) }))] }), jsx("div", { className: "d-modal-separator" })] }));
}

function DModalBody({ children, className, style, }) {
    return (jsx("div", { className: classNames('modal-body', className), style: style, children: children }));
}

function DModalFooter({ className, style, actionPlacement, children, }) {
    const generateClasses = useMemo(() => ({
        'modal-footer': true,
        [`d-modal-action-${actionPlacement}`]: !!actionPlacement,
    }), [actionPlacement]);
    return (jsxs(Fragment, { children: [jsx("div", { className: "d-modal-separator" }), jsx("div", { className: classNames(generateClasses, className), style: style, children: children })] }));
}

const defaultTransition$1 = {
    ease: 'easeInOut',
    duration: 0.3,
};
function DModal({ name, className, style, staticBackdrop, scrollable, centered, fullScreen, fullScreenFrom, size, transition, children, dataAttributes, }) {
    const fullScreenClass = useMemo(() => {
        if (fullScreen) {
            if (fullScreenFrom) {
                return `modal-fullscreen-${fullScreenFrom}-down`;
            }
            return 'modal-fullscreen';
        }
        return '';
    }, [fullScreenFrom, fullScreen]);
    const generateModalDialogClasses = useMemo(() => (Object.assign({ 'modal-dialog': true, 'modal-dialog-centered': !!centered, 'modal-dialog-scrollable': !!scrollable, [fullScreenClass]: !!fullScreen }, size && { [`modal-${size}`]: true })), [fullScreenClass, centered, fullScreen, scrollable, size]);
    return (jsx(motion.div, Object.assign({ className: classNames('modal portal show', className), id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false", style: style, initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 }, transition: Object.assign(Object.assign({}, (transition !== null && transition !== void 0 ? transition : defaultTransition$1)), { delay: 0.15 }) }, staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), dataAttributes, { children: jsx("div", { className: classNames(generateModalDialogClasses), children: jsx("div", { className: "modal-content", children: children }) }) })));
}
var DModal$1 = Object.assign(DModal, {
    Header: DModalHeader,
    Body: DModalBody,
    Footer: DModalFooter,
});

function DOffcanvasHeader({ showCloseButton, onClose, children, className, style, iconFamilyClass, iconFamilyPrefix, icon: iconProp, materialStyle = false, }) {
    const { iconMap: { xLg, }, } = useDContext();
    const icon = useMemo(() => iconProp || xLg, [iconProp, xLg]);
    return (jsxs(Fragment, { children: [jsxs("div", { className: classNames('offcanvas-header', className), style: style, children: [jsx("div", { children: children }), showCloseButton && (jsx("button", { type: "button", className: "d-close align-self-center", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: materialStyle }) }))] }), jsx("div", { className: "d-offcanvas-separator" })] }));
}

function DOffcanvasBody({ children, className, style, }) {
    return (jsx("div", { className: classNames('offcanvas-body', className), style: style, children: children }));
}

function DOffcanvasFooter({ actionPlacement, children, className, style, }) {
    const generateClasses = useMemo(() => ({
        'd-offcanvas-footer': true,
        [`d-offcanvas-action-${actionPlacement}`]: !!actionPlacement,
    }), [actionPlacement]);
    return (jsxs(Fragment, { children: [jsx("div", { className: "d-offcanvas-separator" }), jsx("div", { className: classNames(generateClasses, className), style: style, children: children })] }));
}

const variants = {
    hidden: (openFrom) => {
        const properties = {};
        if (openFrom === 'start') {
            properties.x = '-100%';
        }
        if (openFrom === 'end') {
            properties.x = '100%';
        }
        if (openFrom === 'top') {
            properties.y = '-100%';
        }
        if (openFrom === 'bottom') {
            properties.y = '100%';
        }
        return properties;
    },
    visible: {
        x: 0,
        y: 0,
    },
};
const defaultTransition = {
    ease: 'easeInOut',
    duration: 0.3,
};
function DOffcanvas({ name, className, style, staticBackdrop, scrollable, openFrom = 'end', transition, children, dataAttributes, }) {
    return (jsx(motion.div, Object.assign({ className: classNames('offcanvas portal show', {
            [`offcanvas-${openFrom}`]: openFrom,
        }, className), style: Object.assign(Object.assign({}, style), { transition: 'none' }), id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false", custom: openFrom, variants: variants, initial: "hidden", animate: "visible", exit: "hidden", transition: Object.assign(Object.assign({}, (transition !== null && transition !== void 0 ? transition : defaultTransition)), { delay: 0.15 }) }, staticBackdrop && ({
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
    var { navClassName } = _a, props = __rest(_a, ["navClassName"]);
    return (jsx(ResponsivePagination, Object.assign({ navClassName: classNames('page-item-arrow', navClassName) }, props)));
}

function DPopover({ children, renderComponent, open, setOpen, adjustContentToRender = false, className, style, dataAttributes, }) {
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
    const headingId = useId$1();
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign({}, style), (adjustContentToRender && {
        [`--${PREFIX_BS}popover-component-min-width`]: 'auto',
    }))), [style, adjustContentToRender]);
    return (jsxs("div", Object.assign({ className: classNames('d-popover', className), style: generateStyleVariables }, dataAttributes, { children: [jsx("div", Object.assign({ ref: refs.setReference }, getReferenceProps(), { children: renderComponent(isOpen) })), isOpen && (jsx(FloatingFocusManager, { context: context, modal: false, children: jsx("div", Object.assign({ className: classNames('d-popover-content', {
                        'w-100': adjustContentToRender,
                    }), ref: refs.setFloating, style: floatingStyles, "aria-labelledby": headingId }, getFloatingProps(), { children: children })) }))] })));
}

function DProgress({ className, style, currentValue, minValue = 0, maxValue = 100, hideCurrentValue = false, enableStripedAnimation = false, height, dataAttributes, }) {
    const percentage = useMemo(() => (Math.round((currentValue * 100) / maxValue)), [currentValue, maxValue]);
    const formatProgress = useMemo(() => `${percentage}%`, [percentage]);
    const generateClasses = useMemo(() => ({
        'progress-bar': true,
        'progress-bar-striped progress-bar-animated': enableStripedAnimation,
    }), [enableStripedAnimation]);
    return (jsx("div", Object.assign({ className: classNames('progress', className), style: Object.assign({ height }, style) }, dataAttributes, { children: jsx("div", { className: classNames(generateClasses), role: "progressbar", "aria-label": "Progress bar", style: { width: formatProgress }, "aria-valuenow": currentValue, "aria-valuemin": minValue, "aria-valuemax": maxValue, children: !hideCurrentValue && formatProgress }) })));
}

function DStepper$2({ options, currentStep, iconSuccess: iconSuccessProp, iconSuccessFamilyClass, iconSuccessFamilyPrefix, iconSuccessMaterialStyle = false, vertical = false, completed, alignStart = false, className, style, }) {
    const { iconMap: { check, }, } = useDContext();
    const icon = useMemo(() => iconSuccessProp || check, [check, iconSuccessProp]);
    if (currentStep < 1 || currentStep > options.length) {
        throw new Error('Current step should be in the range from 1 to options length');
    }
    return (jsx("div", { className: classNames({
            'd-stepper-desktop': true,
            'is-vertical': vertical,
            'is-align-start': alignStart && !vertical,
        }, className), style: style, children: options.map(({ label, value, description }) => (jsxs("div", { className: classNames({
                'd-step': true,
                'd-step-current': value === currentStep && !completed,
            }), children: [jsx("div", { className: "d-step-value", children: jsxs("div", { className: classNames({
                            'd-step-icon-container': true,
                            'd-step-check': value < currentStep || completed,
                        }), children: [((value < currentStep) || completed) && (jsx(DIcon, { icon: icon, familyClass: iconSuccessFamilyClass, familyPrefix: iconSuccessFamilyPrefix, materialStyle: iconSuccessMaterialStyle, className: "d-step-icon" })), value] }) }), jsxs("div", { className: "d-step-text-container", children: [jsx("div", { className: "d-step-label", children: label }), description && (jsx("div", { className: "d-step-description", children: description }))] })] }, value))) }));
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
      from 0deg,
      var(--${PREFIX_BS}step-progress-outter-fill-background-color) ${currentAngle}deg,
      var(--${PREFIX_BS}step-progress-outter-background-color) 0deg)`, [currentAngle]);
    return (jsxs("div", { className: classNames('d-stepper', className), style: style, children: [jsx("div", { className: "d-step-bar", style: { background: progressStyle }, children: jsx("p", { className: "d-step-number", children: `${currentStep}/${options.length}` }) }), jsx("div", { className: "d-step-info", children: Object.keys(currentOption).length > 0 && (jsxs(Fragment, { children: [jsx("div", { className: "d-step-label", children: currentOption.label }), jsx("div", { className: "d-step-description", children: currentOption.description || '' })] })) })] }));
}

function DStepper({ options, currentStep, iconSuccess, iconSuccessFamilyClass, iconSuccessFamilyPrefix, iconSuccessMaterialStyle = false, vertical = false, breakpoint = 'lg', className, completed = false, style, dataAttributes, }) {
    return (jsxs("div", Object.assign({ className: className, style: style }, dataAttributes, { children: [jsx("div", { className: `d-block d-${breakpoint}-none`, children: jsx(DStepper$1, { options: options, currentStep: currentStep }) }), jsx("div", { className: `d-none d-${breakpoint}-block`, children: jsx(DStepper$2, { options: options, currentStep: currentStep, vertical: vertical, iconSuccess: iconSuccess, iconSuccessFamilyClass: iconSuccessFamilyClass, iconSuccessFamilyPrefix: iconSuccessFamilyPrefix, iconSuccessMaterialStyle: iconSuccessMaterialStyle, completed: completed }) })] })));
}

const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 4;
const GAP = 2;
function DTooltip({ className, childrenClassName, style, offSet = ARROW_HEIGHT + GAP, padding, withFocus = false, withClick = false, withHover = true, open = false, placement = 'top', size, Component, children, }) {
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
    const dismiss = useDismiss(context, { ancestorScroll: true });
    const click = useClick(context);
    const role = useRole(context, { role: 'tooltip' });
    const { getReferenceProps, getFloatingProps } = useInteractions([
        withHover ? hover : undefined,
        withClick ? click : undefined,
        withFocus ? focus : undefined,
        dismiss,
        role,
    ]);
    const generateClasses = useMemo(() => (Object.assign({ 'tooltip show': true, [`tooltip-${size}`]: !!size }, className && { [className]: true })), [size, className]);
    return (jsxs(Fragment, { children: [jsx("div", Object.assign({ className: childrenClassName, ref: refs.setReference }, getReferenceProps(), { children: Component })), jsx(FloatingPortal, { children: isOpen && (jsxs("div", Object.assign({ className: classNames(generateClasses), ref: refs.setFloating, style: Object.assign(Object.assign({}, floatingStyles), style) }, getFloatingProps(), { children: [jsx(FloatingArrow, { ref: arrowRef, context: context, width: ARROW_WIDTH, height: ARROW_HEIGHT }), jsx("div", { className: "tooltip-inner", children: children })] }))) })] }));
}

function DTimeline({ className, style, dataAttributes, items, }) {
    return (jsx("div", Object.assign({ style: style, className: classNames('d-timeline', className) }, dataAttributes, { children: items.map((item, index) => (jsxs("div", { className: classNames('d-timeline-item', {
                [`d-timeline-item-${item.status}`]: item.status,
            }), children: [jsx("div", { className: "d-timeline-item-connector" }), jsx("div", { className: "d-timeline-item-icon", children: jsx("i", { className: `bi bi-${item.icon || 'check'}` }) }), jsxs("div", { className: "d-timeline-item-content", children: [jsx("div", { className: "d-timeline-item-title", children: item.title }), item.description && jsx("div", { className: "d-timeline-item-description", children: item.description }), item.time && jsx("div", { className: "d-timeline-item-time", children: item.time }), item.children] })] }, index))) })));
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

function DTabs({ children, defaultSelected, onChange, options, className, classNameTab, style, vertical, variant = 'underline', dataAttributes, }) {
    const [selected, setSelected] = useState(defaultSelected);
    const onSelect = useCallback((option) => {
        if (option.tab) {
            setSelected(option.tab);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
    }, [onChange]);
    useEffect(() => {
        setSelected(defaultSelected);
    }, [defaultSelected]);
    const isSelected = useCallback((tab) => (selected === tab), [selected]);
    const value = useMemo(() => ({
        isSelected,
    }), [isSelected]);
    const generateClasses = useMemo(() => (Object.assign({ nav: true, 'flex-column align-items-center': vertical && variant !== 'tabs', [`nav-${variant}`]: true }, className && { [className]: true })), [vertical, variant, className]);
    return (jsx(TabContext.Provider, { value: value, children: jsxs("div", Object.assign({ className: classNames({
                'd-flex w-100': true,
                'flex-column': !vertical || variant === 'tabs',
            }), style: style }, dataAttributes, { children: [jsx("nav", { className: classNames(generateClasses), children: options.map((option) => (jsx("button", { id: `${option.tab}Tab`, className: classNames('nav-link', {
                            active: option.tab === selected,
                        }, classNameTab), type: "button", role: "tab", "aria-controls": `${option.tab}Pane`, "aria-selected": option.tab === selected, disabled: option.disabled, onClick: () => onSelect(option), children: option.label }, option.tab))) }), jsx("div", { className: "tab-content w-100", children: children })] })) }));
}
var DTabs$1 = Object.assign(DTabs, {
    Tab: DTabContent,
});

function DToastHeader({ children, className, style }) {
    return (jsx("div", { className: classNames('toast-header', className), style: style, children: children }));
}

function DToastBody({ children, className, style }) {
    return (jsx("div", { className: classNames('toast-body', className), style: style, children: children }));
}

function DToast({ children, className, style, dataAttributes, }) {
    return (jsx("div", Object.assign({ className: classNames('toast', className), role: "alert", "aria-live": "assertive", "aria-atomic": "true", style: style }, dataAttributes, { children: children })));
}
var DToast$1 = Object.assign(DToast, {
    Header: DToastHeader,
    Body: DToastBody,
});

function DToastContainer({ containerClassName, position = 'bottom-center', reverseOrder = false, containerStyle, toastOptions, gutter, }) {
    return (jsx(Toaster, { containerClassName: containerClassName, position: position, reverseOrder: reverseOrder, containerStyle: containerStyle, gutter: gutter, toastOptions: toastOptions }));
}

function useDToast() {
    const { iconMap: { xLg, }, } = useDContext();
    const toast$1 = useCallback((data, toastProps) => {
        if (typeof data === 'function') {
            return toast.custom(data, toastProps);
        }
        const { title, description, icon, closeIcon, timestamp, color, } = data;
        return toast.custom(({ id, visible }) => {
            if (!visible) {
                return null;
            }
            if (!description) {
                return (jsx(DToast$1, { className: classNames({
                        [`toast-${color}`]: !!color,
                    }, 'show'), children: jsxs(DToast$1.Body, { children: [icon && (jsx(DIcon, { className: "toast-icon", icon: icon })), jsx("p", { className: "toast-title", children: title }), jsx("button", { type: "button", className: "d-close align-self-center", "aria-label": "Close", onClick: () => toast.dismiss(id), children: jsx(DIcon, { icon: closeIcon || xLg }) })] }) }));
            }
            return (jsxs(DToast$1, { className: classNames({
                    [`toast-${color}`]: !!color,
                }, 'show'), children: [jsxs(DToast$1.Header, { children: [icon && (jsx(DIcon, { className: "toast-icon", icon: icon })), jsx("p", { className: "toast-title", children: title }), timestamp && (jsx("small", { className: "toast-timestamp", children: timestamp })), jsx("button", { type: "button", className: "d-close align-self-center", "aria-label": "Close", onClick: () => toast.dismiss(id), children: jsx(DIcon, { icon: closeIcon || xLg }) })] }), jsx(DToast$1.Body, { children: jsx("span", { children: description }) })] }));
        }, toastProps);
    }, [xLg]);
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

const phoneUtil = PhoneNumberUtil.getInstance();
function validatePhoneNumber(phone) {
    try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    }
    catch (error) {
        return false;
    }
}

function DInputPhone(_a, ref) {
    var { id: idProp, style, className, label = '', disabled = false, loading = false, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconEnd, iconEndDisabled, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, iconEndMaterialStyle, hint, size, invalid = false, valid = false, floatingLabel = false, inputEnd, value, placeholder = '', dataAttributes, onChange, onIconEndClick, countrySelectorProps, filteredCountries, defaultCountry = 'cl' } = _a, inputProps = __rest(_a, ["id", "style", "className", "label", "disabled", "loading", "iconFamilyClass", "iconFamilyPrefix", "iconMaterialStyle", "iconEnd", "iconEndDisabled", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "iconEndMaterialStyle", "hint", "size", "invalid", "valid", "floatingLabel", "inputEnd", "value", "placeholder", "dataAttributes", "onChange", "onIconEndClick", "countrySelectorProps", "filteredCountries", "defaultCountry"]);
    const innerRef = useProvidedRefOrCreate(ref);
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
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
                }), children: [jsx(CountrySelector, Object.assign({}, countrySelectorProps, { selectedCountry: country.iso2, onSelect: ({ iso2 }) => setCountry(iso2), countries: countries, disabled: disabled || loading, className: classNames('input-group-text', countrySelectorProps === null || countrySelectorProps === void 0 ? void 0 : countrySelectorProps.className) })), dynamicComponent, (iconEnd && !loading) && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: handleOnIconEndClick, disabled: disabled || loading || iconEndDisabled, "aria-label": iconEndAriaLabel, tabIndex: onIconEndClick ? iconEndTabIndex : -1, children: jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix, materialStyle: iconEndMaterialStyle }) })), loading && (jsx("div", { className: "input-group-text", id: `${id}Loading`, children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) })), !!inputEnd && (jsx("div", { className: "input-group-text", id: `${id}InputEnd`, children: inputEnd }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}
const ForwardedDInputPhone = forwardRef(DInputPhone);
ForwardedDInputPhone.displayName = 'DInputPhone';

const DEFAULT_IMAGE = 'https://cdn.modyo.cloud/uploads/06b434f7-b943-4f54-9543-84a904e189aa/original/Visa_Logo_1_.png';
const CHIP_IMAGE = 'https://cdn.modyo.cloud/uploads/4660ad00-e5d8-477e-8919-52b53d0a26fb/original/chip-debit-svgrepo-com_1_.png';
function DCreditCard({ brand = 'visa', name, number, holderText = 'Card Holder', logoImage, isChipVisible = true, className, isVertical = false, }) {
    return (jsxs("div", { className: classNames('d-credit-card overflow-hidden text-white', 'position-relative rounded-3', 'd-none d-lg-flex', isVertical && 'is-vertical', className), children: [jsxs("div", { className: "d-credit-card-header", children: [jsx("img", { src: logoImage || DEFAULT_IMAGE, alt: brand, className: "d-credit-card-logo", width: 100 }), isChipVisible && (jsx("div", { className: "d-credit-card-chip p-2 rounded-2", children: jsx("img", { src: CHIP_IMAGE, alt: "chip", width: 30, className: "d-credit-card-chip-image" }) }))] }), jsxs("div", { className: "d-credit-card-details mt-auto d-none d-sm-block", children: [jsx("div", { className: "d-credit-card-number d-none d-sm-block mb-4", children: number }), jsx("small", { className: "d-block opacity-50", children: holderText }), jsx("span", { className: "name", children: name })] })] }));
}

const getItemClass = (action) => {
    const base = `dropdown-item d-flex align-items-center 
  ${action.color ? `dropdown-item-${action.color}` : ''} ${action.disabled ? 'disabled' : ''}`;
    return base;
};
function DDropdown({ actions, dropdownToggle, className, }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [position, setPosition] = useState('down'); // 🆕
    // Cerrar al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    // 🆕 Calcular posición del menú al abrir
    useEffect(() => {
        if (open && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const spaceBottom = window.innerHeight - rect.bottom;
            const spaceRight = window.innerWidth - rect.right;
            if (spaceBottom < 150) {
                setPosition('up');
            }
            else if (spaceRight < 150) {
                setPosition('start');
            }
            else {
                setPosition('down');
            }
        }
    }, [open]);
    let ToggleElement;
    if (dropdownToggle) {
        if (typeof dropdownToggle === 'function') {
            ToggleElement = dropdownToggle({ open, toggle: () => setOpen(!open) });
        }
        else {
            ToggleElement = dropdownToggle;
        }
    }
    else {
        ToggleElement = (jsx(DButtonIcon, { variant: "link", stopPropagationEnabled: false, onClick: () => setOpen(!open), icon: "MoreVertical" }));
    }
    return (jsxs("div", { className: `dropdown position-relative drop-${position} ${className}`, ref: dropdownRef, children: [ToggleElement, jsx("ul", { style: {
                    position: 'absolute',
                    top: position === 'up' ? 'auto' : '100%',
                    bottom: position === 'up' ? '100%' : 'auto',
                    left: position === 'start' ? 'auto' : 0,
                    right: position === 'start' ? '0' : 'auto',
                    transform: 'translateY(4px)',
                }, className: `dropdown-menu p-2 ${open ? 'show' : ''}`, children: actions.map((action, index) => {
                    if (action.isDivider) {
                        return (jsx("hr", { className: "dropdown-divider" }, index));
                    }
                    return (jsx("li", { children: action.href ? (jsxs("a", { className: getItemClass(action), href: action.href, onClick: (e) => {
                                if (action.disabled) {
                                    e.preventDefault();
                                }
                                else {
                                    setOpen(false);
                                }
                            }, children: [action.icon && (jsx(DIcon, { icon: action.icon, className: "me-2", size: "1rem" })), action.label] })) : (jsxs("button", { className: getItemClass(action), type: "button", onClick: () => {
                                var _a;
                                if (!action.disabled) {
                                    (_a = action.onClick) === null || _a === void 0 ? void 0 : _a.call(action);
                                    setOpen(false);
                                }
                            }, disabled: action.disabled, children: [action.icon && (jsx(DIcon, { icon: action.icon, className: "me-2", size: "1rem" })), action.label] })) }, index));
                }) })] }));
}

function useScreenshot() {
    const clipRef = useRef(null);
    const takeBlob = useCallback(async (type) => {
        if (!clipRef.current) {
            throw new Error('set the clipRef');
        }
        const canvas = await html2canvas(clipRef === null || clipRef === void 0 ? void 0 : clipRef.current, {
            allowTaint: true,
            useCORS: true,
        });
        return (new Promise((resolve, reject) => {
            canvas.toBlob((innerBlob) => {
                if (!innerBlob) {
                    return reject();
                }
                return resolve(innerBlob);
            }, type);
        }));
    }, []);
    return {
        clipRef,
        takeBlob,
    };
}

function useScreenshotDownload() {
    const { clipRef, takeBlob } = useScreenshot();
    const download = useCallback(async () => {
        const blob = await takeBlob();
        const url = window.URL.createObjectURL(blob);
        const link = window.document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.download = 'voucher.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }, [takeBlob]);
    return {
        download,
        downloadRef: clipRef,
    };
}

function useScreenshotWebShare() {
    const { takeBlob, clipRef } = useScreenshot();
    const share = useCallback(async () => {
        const blob = await takeBlob();
        const image = new File([blob], 'voucher.jpeg', { type: 'image/jpeg' });
        if (!navigator.canShare
            && (navigator.canShare && !navigator.canShare({ files: [image] }))) {
            window.print();
            return;
        }
        await navigator.share({ files: [image] });
    }, [takeBlob]);
    return {
        share,
        shareRef: clipRef,
    };
}

function DVoucher({ amount, amountDetails, icon = 'CircleCheckBig', color = 'success', title, onError, message, downloadText = 'Download', shareText = 'Share', children, }) {
    const { shareRef, share } = useScreenshotWebShare();
    const { downloadRef, download } = useScreenshotDownload();
    const handleShare = () => {
        share()
            .catch(async (err) => {
            if (onError) {
                await onError(err);
            }
        })
            .catch(() => {
            // Error already handled by onError
        });
    };
    const handleDownload = () => {
        download()
            .catch(async (err) => {
            if (onError) {
                await onError(err);
            }
        })
            .catch(() => {
            // Error already handled by onError
        });
    };
    return (jsx("div", { className: "d-voucher", ref: (el) => {
            shareRef.current = el;
            downloadRef.current = el;
        }, children: jsxs("div", { children: [jsxs("div", { className: "d-voucher-header", children: [jsx(DIcon, { icon: icon, color: color }), jsxs("div", { className: "text-center", children: [jsx("h3", { className: "mb-2", children: title }), jsx("p", { className: "m-0", children: message })] })] }), amount && (jsxs("div", { className: "d-voucher-amount", children: [jsx("div", { className: classNames('text-center fw-bold fs-3', amountDetails ? 'mb-1' : 'm-0'), children: amount }), amountDetails] })), jsx("hr", { className: "my-4" }), children, jsx("hr", { className: "my-4" }), jsxs("div", { className: "d-voucher-footer", children: [jsx(DButton, { onClick: handleShare, iconStart: "Share2", text: shareText, variant: "outline", size: "sm" }), jsx(DButton, { onClick: handleDownload, iconStart: "Download", text: downloadText, variant: "outline", size: "sm" })] })] }) }));
}

export { DAlert, DAvatar, DBadge, DBox, DBoxFile, DButton, DButtonIcon, DCard$1 as DCard, DCardBody, DCardFooter, DCardHeader, DCarousel$1 as DCarousel, DCarouselSlide, DChip, DCollapse, DContext, DContextProvider, DCreditCard, DCurrencyText, DDatePicker, DDropdown, DIcon, DIconBase, ForwardedDInput as DInput, DInputCheck, ForwardedDInputCounter as DInputCounter, ForwardedDInputCurrency as DInputCurrency, ForwardedDInputMask as DInputMask, ForwardedDInputPassword as DInputPassword, ForwardedDInputPhone as DInputPhone, DInputPin, ForwardedDInputRange as DInputRange, DInputSelect, DInputSwitch, DLayout$1 as DLayout, DLayoutPane, DListGroup$1 as DListGroup, DListGroupItem, DModal$1 as DModal, DModalBody, DModalFooter, DModalHeader, DOffcanvas$1 as DOffcanvas, DOffcanvasBody, DOffcanvasFooter, DOffcanvasHeader, DPaginator, DPasswordStrengthMeter, DPopover, DProgress, DSelect$1 as DSelect, DStepper, DStepper$2 as DStepperDesktop, DStepper$1 as DStepperMobile, DTabContent, DTabs$1 as DTabs, DTimeline, DToast$1 as DToast, DToastContainer, DTooltip, DVoucher, changeQueryString, checkMediaQuery, configureI8n as configureI18n, formatCurrency, getCssVariable, getQueryString, subscribeToMediaQuery, useDContext, useDPortalContext, useDToast, useDisableBodyScrollEffect, useDisableInputWheel, useFormatCurrency, useInputCurrency, useItemSelection, useMediaBreakpointUpLg, useMediaBreakpointUpMd, useMediaBreakpointUpSm, useMediaBreakpointUpXl, useMediaBreakpointUpXs, useMediaBreakpointUpXxl, useMediaQuery, usePortal, useProvidedRefOrCreate, useStackState, useTabContext, validatePhoneNumber };
//# sourceMappingURL=index.esm.js.map
