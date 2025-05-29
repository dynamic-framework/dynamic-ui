import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import React, { useMemo, useEffect, useState, useCallback, useContext, createContext, Fragment, useLayoutEffect, forwardRef, useId, useRef, useSyncExternalStore } from 'react';
import classNames from 'classnames';
import { __rest } from 'tslib';
import { createPortal } from 'react-dom';
import { fromEvent } from 'file-selector';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import currency from 'currency.js';
import DatePicker from 'react-datepicker';
import { getYear, format, getMonth } from 'date-fns';
import Select, { components } from 'react-select';
import { InputMask } from '@react-input/mask';
import ResponsivePagination from 'react-responsive-pagination';
import { useFloating, autoUpdate, offset, flip, shift, useClick, useDismiss, useRole, useInteractions, useId as useId$1, FloatingFocusManager, arrow, useHover, useFocus, FloatingPortal, FloatingArrow } from '@floating-ui/react';
import ContentLoader from 'react-content-loader';
import { Toaster, toast } from 'react-hot-toast';
import { defaultCountries, parseCountry, usePhoneInput, CountrySelector } from 'react-international-phone';
import { PhoneNumberUtil } from 'google-libphonenumber';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const PREFIX_BS = 'bs-';

function DIconBase({ icon, theme, style, className, size, loading = false, loadingDuration = 1.8, hasCircle = false, circleSize = `calc(var(--${PREFIX_BS}icon-size) * 1)`, color, backgroundColor, materialStyle = false, familyClass = 'bi', familyPrefix = 'bi-', dataAttributes, }) {
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
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ [`--${PREFIX_BS}icon-component-loading-duration`]: `${loadingDuration}s` }, size && { [`--${PREFIX_BS}icon-component-size`]: size }), colorStyle), backgroundStyle), circleSizeStyle), style)), [size, loadingDuration, colorStyle, backgroundStyle, circleSizeStyle, style]);
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
    return (jsx("i", Object.assign({ className: classNames(generateClasses), style: generateStyleVariables }, dataAttributes, { children: materialStyle && icon })));
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
            jsx("div", { onClick: ({ target }) => handleClose(target), onKeyDown: () => { }, children: stack.map(({ Component, name, payload, }) => (jsxs(Fragment, { children: [jsx("div", { className: "backdrop fade show" }), jsx(Component, { name: name, payload: payload })] }, name))) }), document.getElementById(portalName))] }));
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

function DIcon(_a) {
    var { familyClass: propFamilyClass, familyPrefix: propFamilyPrefix, materialStyle: propMaterialStyle } = _a, props = __rest(_a, ["familyClass", "familyPrefix", "materialStyle"]);
    const { icon: { familyClass, familyPrefix, materialStyle, }, } = useDContext();
    return (jsx(DIconBase, Object.assign({ familyClass: propFamilyClass || familyClass, familyPrefix: propFamilyPrefix || familyPrefix, materialStyle: propMaterialStyle || materialStyle }, props)));
}

function DAlert({ theme = 'success', icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle = false, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle = false, showClose, onClose, children, id, className, style, dataAttributes, }) {
    const { iconMap: { alert, xLg, }, } = useDContext();
    const icon = useMemo(() => iconProp || alert[theme], [alert, iconProp, theme]);
    const iconClose = useMemo(() => (iconCloseProp || xLg), [iconCloseProp, xLg]);
    const generateClasses = useMemo(() => (Object.assign({ alert: true, [`alert-${theme}`]: true, 'fade show': !!showClose }, className && { [className]: true })), [theme, showClose, className]);
    return (jsxs("div", Object.assign({ className: classNames(generateClasses), style: style, role: "alert", id: id }, dataAttributes, { children: [icon && (jsx(DIcon, { className: "alert-icon", icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })), jsx("div", { className: "alert-text", children: children }), showClose && (jsx("button", { type: "button", className: "d-close", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: iconClose, familyClass: iconCloseFamilyClass, familyPrefix: iconCloseFamilyPrefix, materialStyle: iconCloseMaterialStyle }) }))] })));
}

function DAvatar({ id, size, image, name: nameProp, useNameAsInitials = false, theme = 'secondary', variant, className, style, dataAttributes, }) {
    const generateClasses = useMemo(() => {
        const variantClass = variant
            ? `d-avatar-${variant}-${theme}`
            : `d-avatar-${theme}`;
        return {
            'd-avatar': true,
            [variantClass]: true,
            [`d-avatar-${size}`]: !!size,
        };
    }, [variant, theme, size]);
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

function DBadge({ text, soft = false, theme = 'primary', id, rounded, className, style, iconStart, iconEnd, iconMaterialStyle, iconFamilyClass, iconFamilyPrefix, dataAttributes, }) {
    const generateClasses = useMemo(() => ({
        badge: true,
        [`badge-${theme}`]: !!theme && !soft,
        [`badge-soft-${theme}`]: !!theme && soft,
        'rounded-pill': !!rounded,
    }), [rounded, soft, theme]);
    return (jsxs("span", Object.assign({ className: classNames(generateClasses, className), style: style }, id && { id }, dataAttributes, { children: [iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })), jsx("span", { children: text }), iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle }))] })));
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
    var { id: idProp, style, className, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, labelIconMaterialStyle, disabled = false, loading = false, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconStart, iconStartDisabled, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconStartTabIndex, iconStartMaterialStyle, iconEnd, iconEndDisabled, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, iconEndMaterialStyle, hint, size, invalid = false, valid = false, floatingLabel = false, inputStart, inputEnd, value, placeholder = '', dataAttributes, onChange, onIconStartClick, onIconEndClick } = _a, inputProps = __rest(_a, ["id", "style", "className", "label", "labelIcon", "labelIconFamilyClass", "labelIconFamilyPrefix", "labelIconMaterialStyle", "disabled", "loading", "iconFamilyClass", "iconFamilyPrefix", "iconMaterialStyle", "iconStart", "iconStartDisabled", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconStartAriaLabel", "iconStartTabIndex", "iconStartMaterialStyle", "iconEnd", "iconEndDisabled", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "iconEndMaterialStyle", "hint", "size", "invalid", "valid", "floatingLabel", "inputStart", "inputEnd", "value", "placeholder", "dataAttributes", "onChange", "onIconStartClick", "onIconEndClick"]);
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
    const labelComponent = useMemo(() => (jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsx(DIcon, { icon: labelIcon, size: `var(--${PREFIX_BS}label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix, materialStyle: labelIconMaterialStyle }))] })), [
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
    return (jsxs("div", Object.assign({ className: className, style: style }, dataAttributes, { children: [label && !floatingLabel && labelComponent, jsxs("div", { className: classNames({
                    [`input-group-${size}`]: !!size,
                    'input-group': true,
                    'has-validation': invalid || valid,
                }), children: [!!inputStart && (jsx("div", { className: "input-group-text", id: `${id}InputStart`, children: inputStart })), iconStart && (jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: handleOnIconStartClick, disabled: disabled || loading || iconStartDisabled, "aria-label": iconStartAriaLabel, tabIndex: onIconStartClick ? iconStartTabIndex : -1, children: jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix, materialStyle: iconStartMaterialStyle }) })), dynamicComponent, (iconEnd && !loading) && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: handleOnIconEndClick, disabled: disabled || loading || iconEndDisabled, "aria-label": iconEndAriaLabel, tabIndex: onIconEndClick ? iconEndTabIndex : -1, children: jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix, materialStyle: iconEndMaterialStyle }) })), loading && (jsx("div", { className: "input-group-text", id: `${id}Loading`, children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) })), !!inputEnd && (jsx("div", { className: "input-group-text", id: `${id}InputEnd`, children: inputEnd }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
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
                    message: `Failed to fetch file from ${url}`,
                },
            ];
        }
        const blob = await res.blob();
        const filename = ((_a = url.split('/').pop()) === null || _a === void 0 ? void 0 : _a.split('?')[0]) || 'file';
        const file = new File([blob], filename, { type: blob.type });
        return [file, null];
    }
    catch (error) {
        return [
            null,
            {
                code: ErrorCodes.FailedFetch,
                message: `Failed to fetch file from ${url}}`,
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
    return (jsxs(Fragment$1, { children: [jsx("section", Object.assign({ className: classNames('d-box-file', {
                    'd-box-file-selected': files.length > 0,
                    'd-box-file-disabled': props.disabled,
                    'd-box-file-valid': isDragValid,
                    'd-box-file-invalid': isDragInvalid,
                }, className), style: style }, dataAttributes, { children: jsxs("div", Object.assign({ className: "d-box-file-dropzone", ref: rootRef, onDragEnter: handleDragEnter, onDragOver: (e) => e.preventDefault(), onDragLeave: handleDragLeave, onDrop: handleDrop, onClick: handleClick, onKeyDown: handleKeyDown }, (!props.disabled && !props.noKeyboard ? { tabIndex: 0 } : {}), { role: "presentation", children: [jsx("input", { type: "file", multiple: props.multiple, style: { display: 'none' }, ref: inputRef, disabled: props.disabled, onChange: handleFileSelect, onClick: (e) => e.stopPropagation(), tabIndex: -1, accept: acceptAttr }), jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle }), jsx("div", { className: "d-box-content", children: typeof children === 'function'
                                ? children(openFileDialog)
                                : children })] })) })), !!files.length && (jsx("ul", { className: "d-box-files", children: files.map((file, index) => (jsx(ForwardedDInput, { value: file.name, iconStart: "paperclip", iconEnd: "trash", readOnly: true, onIconEndClick: () => handleRemoveFile(index) }, `${file.name} ${index}`))) }))] }));
}

function DButton({ theme = 'primary', size, variant, state, text = '', ariaLabel, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartMaterialStyle, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndMaterialStyle, value, type = 'button', loading = false, loadingAriaLabel, disabled = false, stopPropagationEnabled = true, className, style, form, dataAttributes, onClick, }) {
    const generateClasses = useMemo(() => {
        const variantClass = variant
            ? `btn-${variant}-${theme}`
            : `btn-${theme}`;
        return Object.assign(Object.assign(Object.assign({ btn: true, [variantClass]: true }, size && { [`btn-${size}`]: true }), (state && state !== 'disabled') && { [state]: true }), { loading });
    }, [variant, theme, size, state, loading]);
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
    return (jsxs("button", Object.assign({ className: classNames(generateClasses, className), style: style, type: type, disabled: isDisabled, onClick: clickHandler, "aria-label": newAriaLabel, form: form }, dataAttributes, value && { value }, { children: [iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix, materialStyle: iconStartMaterialStyle })), (text && !loading) && (jsx("span", { children: text })), loading && (jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) })), iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix, materialStyle: iconEndMaterialStyle }))] })));
}

function DButtonIcon({ id, icon, size, className, variant, state, loadingAriaLabel, iconMaterialStyle, ariaLabel, theme = 'primary', type = 'button', loading = false, disabled = false, stopPropagationEnabled = true, style, iconFamilyClass, iconFamilyPrefix, dataAttributes, onClick, }) {
    const generateClasses = useMemo(() => {
        const variantClass = variant
            ? `btn-${variant}-${theme}`
            : `btn-${theme}`;
        return Object.assign(Object.assign(Object.assign({ 'btn d-button-icon': true, [variantClass]: true }, size && { [`btn-${size}`]: true }), (state && state !== 'disabled') && { [state]: true }), { loading });
    }, [variant, theme, size, state, loading]);
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

function DChip({ theme = 'primary', text, icon, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle, showClose = false, closeAriaLabel = 'close', className, style, dataAttributes, onClose, }) {
    const generateClasses = useMemo(() => ({
        'd-chip': true,
        [`d-chip-${theme}`]: !!theme,
    }), [theme]);
    const { iconMap: { xLg, }, } = useDContext();
    const iconClose = useMemo(() => iconCloseProp || xLg, [iconCloseProp, xLg]);
    return (jsxs("span", Object.assign({ className: classNames(generateClasses, className), style: style }, dataAttributes, { children: [icon && (jsx("div", { className: "d-chip-icon-container", children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle }) })), jsx("span", { children: text }), showClose && (jsx("button", { type: "button", className: "d-chip-icon-container", onClick: onClose, "aria-label": closeAriaLabel, children: jsx(DIcon, { icon: iconClose, familyClass: iconCloseFamilyClass, familyPrefix: iconCloseFamilyPrefix, materialStyle: iconCloseMaterialStyle }) }))] })));
}

function DCollapse({ id, className, style, Component, hasSeparator = false, defaultCollapsed = false, onChange, children, iconOpen: iconOpenProp, iconClose: iconCloseProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle = false, dataAttributes, }) {
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
    return (jsxs("div", Object.assign({ id: id, className: classNames('collapse-container', className), style: style }, dataAttributes, { children: [jsxs("button", { className: "collapse-button", type: "button", onClick: onChangeCollapse, children: [jsx("div", { className: "flex-grow-1", children: Component }), jsx(DIcon, { color: `var(--${PREFIX_BS}gray)`, size: `var(--${PREFIX_BS}fs-small)`, icon: toggle ? iconOpen : iconClose, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: iconMaterialStyle })] }), toggle && (jsx("div", { className: classNames({
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
    var { id: idProp, type, name, label, ariaLabel, checked = false, disabled = false, invalid = false, valid = false, indeterminate, value, hint, onChange, className, style, dataAttributes } = _a, props = __rest(_a, ["id", "type", "name", "label", "ariaLabel", "checked", "disabled", "invalid", "valid", "indeterminate", "value", "hint", "onChange", "className", "style", "dataAttributes"]);
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
    return (jsxs("div", Object.assign({ className: "form-check" }, dataAttributes, { children: [inputComponent, jsx("label", { className: "form-check-label", htmlFor: id, children: label }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
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
    var { id: idProp, className, style, label, labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, hint, iconFamilyClass, iconFamilyPrefix, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconStartTabIndex, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, invalid, valid, menuWithMaxContent = false, disabled, clearable, loading, floatingLabel = false, rtl, searchable, multi, components, defaultValue, placeholder, onIconStartClick, onIconEndClick, dataAttributes } = _a, props = __rest(_a, ["id", "className", "style", "label", "labelIcon", "labelIconFamilyClass", "labelIconFamilyPrefix", "hint", "iconFamilyClass", "iconFamilyPrefix", "iconStart", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconStartAriaLabel", "iconStartTabIndex", "iconEnd", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "invalid", "valid", "menuWithMaxContent", "disabled", "clearable", "loading", "floatingLabel", "rtl", "searchable", "multi", "components", "defaultValue", "placeholder", "onIconStartClick", "onIconEndClick", "dataAttributes"]);
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
        }), style: style }, dataAttributes, { children: [label && (jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsx(DIcon, { icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxs("div", { className: classNames({
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
function DDatePickerHeaderSelector({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, decreaseYear, increaseYear, monthDate, pickerType, prevMonthButtonDisabled, nextMonthButtonDisabled, monthsShown = 1, iconPrev, iconNext, prevYearButtonDisabled, nextYearButtonDisabled, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle = false, prevMonthAriaLabel = 'decrease month', nextMonthAriaLabel = 'increase month', prevYearAriaLabel = 'decrease year', nextYearAriaLabel = 'increase year', iconSize, buttonVariant = 'link', buttonTheme = 'dark', style, className, minYearSelect = 1900, maxYearSelect = 2100, showHeaderSelectors = false, customHeaderCount, locale, }) {
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
        return (jsxs("div", { className: classNames('react-datepicker__header-selector react-datepicker__header-year-selector', className), style: style, children: [jsx(DButton, { iconStart: iconPrev || chevronLeft, iconStartFamilyClass: iconFamilyClass, iconStartFamilyPrefix: iconFamilyPrefix, iconStartMaterialStyle: iconMaterialStyle, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: decreaseYear, disabled: prevYearButtonDisabled, ariaLabel: prevYearAriaLabel, className: "header-button" }), jsx("p", { children: `${startYear} - ${endYear}` }), jsx(DButton, { iconStart: iconNext || chevronRight, iconStartFamilyClass: iconFamilyClass, iconStartFamilyPrefix: iconFamilyPrefix, iconStartMaterialStyle: iconMaterialStyle, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: increaseYear, disabled: nextYearButtonDisabled, ariaLabel: nextYearAriaLabel, className: "header-button" })] }));
    }
    if (pickerType === PickerType.Quarter || pickerType === PickerType.Month) {
        return (jsxs("div", { className: classNames(`react-datepicker__header-selector react-datepicker__header-${pickerType}-selector`, className), style: style, children: [jsx(DButton, { iconStart: iconPrev || chevronLeft, iconStartFamilyClass: iconFamilyClass, iconStartFamilyPrefix: iconFamilyPrefix, iconStartMaterialStyle: iconMaterialStyle, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: decreaseYear, disabled: prevMonthButtonDisabled, ariaLabel: prevMonthAriaLabel, className: "header-button", style: { visibility: customHeaderCount === 0 ? 'visible' : 'hidden' } }), jsx("div", { className: "d-flex justify-content-center flex-grow-1", children: showHeaderSelectors ? (jsx(DSelect$1, { options: years, value: defaultYear, defaultValue: defaultYear, onChange: (year) => changeYear(Number(year === null || year === void 0 ? void 0 : year.value)), searchable: false })) : (jsx("p", { children: defaultYear === null || defaultYear === void 0 ? void 0 : defaultYear.label })) }), jsx(DButton, { iconStart: iconNext || chevronRight, iconStartFamilyClass: iconFamilyClass, iconStartFamilyPrefix: iconFamilyPrefix, iconStartMaterialStyle: iconMaterialStyle, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: increaseYear, disabled: nextMonthButtonDisabled, ariaLabel: nextMonthAriaLabel, className: "header-button", style: { visibility: customHeaderCount === monthsShown - 1 ? 'visible' : 'hidden' } })] }));
    }
    return (jsxs("div", { className: classNames('react-datepicker__header-selector react-datepicker__header-day-selector', className), style: style, children: [jsx(DButton, { iconStart: iconPrev || chevronLeft, iconStartFamilyClass: iconFamilyClass, iconStartFamilyPrefix: iconFamilyPrefix, iconStartMaterialStyle: iconMaterialStyle, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: decreaseMonth, disabled: prevMonthButtonDisabled, ariaLabel: prevMonthAriaLabel, className: "header-button", style: { visibility: customHeaderCount === 0 ? 'visible' : 'hidden' } }), showHeaderSelectors ? (jsxs(Fragment$1, { children: [jsx(DSelect$1, { options: months, value: defaultMonth, defaultValue: defaultMonth, onChange: (month) => changeMonth((month === null || month === void 0 ? void 0 : month.value) || 0), searchable: false, className: "custom-month-selector" }), jsx(DSelect$1, { options: years, value: defaultYear, defaultValue: defaultYear, onChange: (year) => changeYear(Number(year === null || year === void 0 ? void 0 : year.value)), searchable: false, className: "custom-year-selector" })] })) : (jsx("p", { children: `${defaultMonth.label} ${defaultYear === null || defaultYear === void 0 ? void 0 : defaultYear.label}` })), jsx(DButton, { iconStart: iconNext || chevronRight, iconStartFamilyClass: iconFamilyClass, iconStartFamilyPrefix: iconFamilyPrefix, iconStartMaterialStyle: iconMaterialStyle, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: increaseMonth, disabled: nextMonthButtonDisabled, ariaLabel: nextMonthAriaLabel, className: "header-button", style: { visibility: customHeaderCount === monthsShown - 1 ? 'visible' : 'hidden' } })] }));
}

function DDatePicker(_a) {
    var { inputLabel, inputHint, inputAriaLabel, inputActionAriaLabel = 'open calendar', inputId = 'input-calendar', timeId = 'input-time', timeInputLabel, iconInput, iconHeaderPrev, iconHeaderNext, iconMaterialStyle, iconFamilyClass, iconFamilyPrefix, minYearSelect, maxYearSelect, iconHeaderSize, headerPrevMonthAriaLabel, headerNextMonthAriaLabel, headerButtonVariant, headerButtonTheme, invalid = false, valid = false, renderCustomHeader: renderCustomHeaderProp, className, dateFormatCalendar: dateFormatCalendarProp, style, dataAttributes, placeholder, showHeaderSelectors } = _a, props = __rest(_a, ["inputLabel", "inputHint", "inputAriaLabel", "inputActionAriaLabel", "inputId", "timeId", "timeInputLabel", "iconInput", "iconHeaderPrev", "iconHeaderNext", "iconMaterialStyle", "iconFamilyClass", "iconFamilyPrefix", "minYearSelect", "maxYearSelect", "iconHeaderSize", "headerPrevMonthAriaLabel", "headerNextMonthAriaLabel", "headerButtonVariant", "headerButtonTheme", "invalid", "valid", "renderCustomHeader", "className", "dateFormatCalendar", "style", "dataAttributes", "placeholder", "showHeaderSelectors"]);
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
    const DatePickerHeader = useCallback((headerProps) => (jsx(DDatePickerHeaderSelector, Object.assign({}, headerProps, { monthsShown: props.monthsShown, iconPrev: iconHeaderPrev, iconNext: iconHeaderNext, iconMaterialStyle: iconMaterialStyle, prevMonthAriaLabel: headerPrevMonthAriaLabel, nextMonthAriaLabel: headerNextMonthAriaLabel, iconSize: iconHeaderSize, buttonVariant: headerButtonVariant, buttonTheme: headerButtonTheme, minYearSelect: minYearSelect, maxYearSelect: maxYearSelect, pickerType: pickerType, showHeaderSelectors: showHeaderSelectors, locale: props.locale }))), [
        iconHeaderNext,
        iconHeaderPrev,
        iconMaterialStyle,
        headerPrevMonthAriaLabel,
        headerNextMonthAriaLabel,
        iconHeaderSize,
        headerButtonVariant,
        headerButtonTheme,
        minYearSelect,
        maxYearSelect,
        pickerType,
        showHeaderSelectors,
        props.monthsShown,
        props.locale,
    ]);
    const defaultRenderCustomHeader = useCallback((headerProps) => (jsx(DatePickerHeader, Object.assign({}, headerProps))), [DatePickerHeader]);
    const renderCustomHeader = useMemo(() => (renderCustomHeaderProp || defaultRenderCustomHeader), [defaultRenderCustomHeader, renderCustomHeaderProp]);
    return (jsx(DatePicker, Object.assign({}, dataAttributes, props, { calendarClassName: "d-date-picker", renderCustomHeader: renderCustomHeader, placeholderText: placeholder, customInput: (jsx(ForwardedDDatePickerInput, { id: inputId, "aria-label": inputAriaLabel, iconEndAriaLabel: inputActionAriaLabel, iconMaterialStyle: iconMaterialStyle, iconEnd: iconInput, inputLabel: inputLabel, className: className, style: style, invalid: invalid, valid: valid, hint: inputHint })), customTimeInput: (jsx(DDatePickerTime, { id: timeId })) })));
}

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

/**
 * @deprecated
 */
function DInputCurrencyBase(_a, ref) {
    var { value, minValue, maxValue, currencyOptions, currencyCode, onFocus, onBlur, onChange } = _a, inputProps = __rest(_a, ["value", "minValue", "maxValue", "currencyOptions", "currencyCode", "onFocus", "onBlur", "onChange"]);
    const { handleOnWheel, } = useDisableInputWheel(ref);
    const { inputRef, innerValue, innerType, handleOnFocus, handleOnChange, handleOnBlur, generateStyleVariables, generateSymbolStyleVariables, } = useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref);
    return (jsx(ForwardedDInput, Object.assign({ ref: inputRef, value: innerValue, onChange: handleOnChange, style: generateStyleVariables, inputMode: "decimal", type: innerType, onFocus: handleOnFocus, onBlur: handleOnBlur, onWheel: handleOnWheel, inputStart: (jsx("span", { slot: "input-start", style: generateSymbolStyleVariables, children: currencyCode || currencyOptions.symbol })) }, inputProps)));
}
const ForwardedDInputCurrencyBase$1 = forwardRef(DInputCurrencyBase);
ForwardedDInputCurrencyBase$1.displayName = 'DInputCurrencyBase';

function DInputCurrency(_a, ref) {
    var { value, minValue, maxValue, currencyCode, onFocus, onBlur, onChange } = _a, props = __rest(_a, ["value", "minValue", "maxValue", "currencyCode", "onFocus", "onBlur", "onChange"]);
    const { currency: currencyOptions } = useDContext();
    const { handleOnWheel, } = useDisableInputWheel(ref);
    const { inputRef, innerValue, innerType, handleOnFocus, handleOnChange, handleOnBlur, generateStyleVariables, generateSymbolStyleVariables, } = useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref);
    return (jsx(ForwardedDInput, Object.assign({ ref: inputRef, value: innerValue, onChange: handleOnChange, style: generateStyleVariables, inputMode: "decimal", type: innerType, onFocus: handleOnFocus, onBlur: handleOnBlur, onWheel: handleOnWheel, inputStart: (jsx("span", { slot: "input-start", style: generateSymbolStyleVariables, children: currencyCode || currencyOptions.symbol })) }, props)));
}
const ForwardedDInputCurrencyBase = forwardRef(DInputCurrency);
ForwardedDInputCurrencyBase.displayName = 'DInputCurrency';

/**
 * @deprecated
 */
function DInputSearch(_a, ref) {
    var { type, iconEnd: iconEndProp, iconEndAriaLabel = 'search' } = _a, props = __rest(_a, ["type", "iconEnd", "iconEndAriaLabel"]);
    const inputRef = useProvidedRefOrCreate(ref);
    return (jsx(ForwardedDInput, Object.assign({ ref: inputRef, type: "text", iconEnd: "search", iconEndAriaLabel: iconEndAriaLabel }, props)));
}
const ForwardedDInputSearch = forwardRef(DInputSearch);
ForwardedDInputSearch.displayName = 'DInputSearch';

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

function DInputPin({ id: idProp, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, placeholder, type = 'text', disabled = false, loading = false, secret = false, characters = 4, innerInputMode = 'text', hint, invalid = false, valid = false, className, style, dataAttributes, onChange, }) {
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
    const prevInput = useCallback(({ key, currentTarget }, index) => {
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
    const focusInput = useCallback((index) => {
        setActiveInput((prev) => prev.with(index, ''));
    }, []);
    const wheelInput = useCallback((event) => {
        event.currentTarget.blur();
    }, []);
    return (jsxs("div", Object.assign({ className: classNames('d-input-pin', className), style: style }, dataAttributes, { children: [label && (jsxs("label", { htmlFor: "pinIndex0", children: [label, labelIcon && (jsx(DIcon, { icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxs("div", { className: "d-input-pin-group", id: id, children: [Array.from({ length: characters }).map((_, index) => (jsx("input", Object.assign({ className: classNames({
                            'form-control': true,
                            'is-invalid': invalid,
                            'is-valid': valid,
                        }), value: activeInput[index], type: secret ? 'password' : type, "aria-describedby": `${id}State`, inputMode: innerInputMode, id: `pinIndex${index}`, name: `pin-${index}`, maxLength: 1, onInput: (event) => nextInput(event, index), onKeyDown: (event) => prevInput(event, index), onFocus: () => focusInput(index), onWheel: wheelInput, onClick: (event) => event.preventDefault(), onPaste: (event) => handlePaste(event), autoComplete: "off", placeholder: placeholder, disabled: disabled || loading, required: true }, type === 'number' && ({ min: 0, max: 9 })), index))), loading && (jsx("div", { className: "input-group-text", children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}

function DInputSelect({ id: idProp, name, label = '', className, style, options = [], labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, disabled = false, loading = false, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, hint, value, size, floatingLabel = false, invalid = false, valid = false, dataAttributes, valueExtractor, labelExtractor, onChange, onBlur, onIconStartClick, onIconEndClick, }) {
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
    const labelComponent = useMemo(() => (jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsx(DIcon, { icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), [
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
    return (jsxs("div", Object.assign({ className: className, style: style }, dataAttributes, { children: [label && !floatingLabel && (labelComponent), jsxs("div", { className: classNames({
                    'input-group': true,
                }), children: [iconStart && (jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: iconStartClickHandler, disabled: disabled || loading, "aria-label": iconStartAriaLabel, children: iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })) })), dynamicComponent, iconEnd && !loading && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: iconEndClickHandler, disabled: disabled || loading, "aria-label": iconEndAriaLabel, children: iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) })), loading && (jsx("div", { className: "input-group-text form-control-icon loading", children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}

function DInputSwitch({ id: idProp, label, ariaLabel, name, checked, disabled, invalid = false, valid = false, readonly, className, style, dataAttributes, onChange, }) {
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
    return (jsxs("div", Object.assign({ className: "form-check form-switch" }, dataAttributes, { children: [jsx("input", { id: id, name: name, onChange: readonly ? () => false : changeHandler, className: classNames('form-check-input', {
                    'is-invalid': invalid,
                    'is-valid': valid,
                }, className), style: style, type: "checkbox", role: "switch", checked: internalIsChecked, disabled: disabled, "aria-label": ariaLabel }), label && (jsx("label", { className: "form-check-label", htmlFor: id, children: label }))] })));
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
    return (jsxs(Fragment$1, { children: [jsx("label", { className: "form-label", htmlFor: id, children: label }), inputComponent] }));
}
const ForwardedDInputRange = forwardRef(DInputRange);
ForwardedDInputRange.displayName = 'DInputRange';

/**
 * @deprecated Please use DListGroup.Item or DListGroupItem instead
 */
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

/**
 * @deprecated Please use DListGroup instead
 */
function DList({ children, className, style, flush = false, numbered = false, horizontal = false, horizontalBreakpoint, dataAttributes, }) {
    if (flush && horizontal) {
        throw new Error("Horizontal and Flush props don't work together");
    }
    return (jsx("div", Object.assign({ className: classNames('list-group', {
            'list-group-flush': flush && !horizontal,
            'list-group-numbered': numbered,
            'list-group-horizontal': horizontal && !horizontalBreakpoint,
        }, (horizontal && horizontalBreakpoint) && `list-group-horizontal-${horizontalBreakpoint}`, className), style: style }, dataAttributes, { children: children })));
}
var DList$1 = Object.assign(DList, {
    Item: DListItem,
});

function DListGroupItem({ as = 'li', action: actionProp, active, disabled, href, onClick, theme, children, className, style, dataAttributes, }) {
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
        [`list-group-item-${theme}`]: !!theme,
        active,
        disabled,
    }), [action, active, disabled, theme]);
    const ariaAttributes = useMemo(() => {
        if (Tag === 'button') {
            return Object.assign(Object.assign({}, active && { 'aria-current': true }), disabled && { disabled: true });
        }
        return Object.assign(Object.assign({}, active && { 'aria-current': true }), disabled && { 'aria-disabled': true });
    }, [Tag, active, disabled]);
    return (jsx(Tag, Object.assign({ className: classNames(generateClasses, className), style: style }, Tag === 'a' && href && { href }, onClick && { onClick }, ariaAttributes, dataAttributes, Tag === 'button' && { type: 'button' }, { children: children })));
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
    return (jsxs(Fragment$1, { children: [jsxs("div", { className: classNames('modal-header', className), style: style, children: [jsx("div", { children: children }), showCloseButton && (jsx("button", { type: "button", className: "d-close align-self-center", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: materialStyle }) }))] }), jsx("div", { className: "d-modal-separator" })] }));
}

function DModalBody({ children, className, style, }) {
    return (jsx("div", { className: classNames('modal-body', className), style: style, children: children }));
}

function DModalFooter({ className, style, actionPlacement, children, }) {
    const generateClasses = useMemo(() => ({
        'modal-footer': true,
        [`d-modal-action-${actionPlacement}`]: !!actionPlacement,
    }), [actionPlacement]);
    return (jsxs(Fragment$1, { children: [jsx("div", { className: "d-modal-separator" }), jsx("div", { className: classNames(generateClasses, className), style: style, children: children })] }));
}

function DModal({ name, className, style, staticBackdrop, scrollable, centered, fullScreen, fullScreenFrom, size, children, dataAttributes, }) {
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
    return (jsx("div", Object.assign({ className: classNames('modal portal fade show', className), id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false", style: style }, staticBackdrop && ({
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
    return (jsxs(Fragment$1, { children: [jsxs("div", { className: classNames('offcanvas-header', className), style: style, children: [jsx("div", { children: children }), showCloseButton && (jsx("button", { type: "button", className: "d-close align-self-center", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, materialStyle: materialStyle }) }))] }), jsx("div", { className: "d-offcanvas-separator" })] }));
}

function DOffcanvasBody({ children, className, style, }) {
    return (jsx("div", { className: classNames('offcanvas-body', className), style: style, children: children }));
}

function DOffcanvasFooter({ actionPlacement, children, className, style, }) {
    const generateClasses = useMemo(() => ({
        'd-offcanvas-footer': true,
        [`d-offcanvas-action-${actionPlacement}`]: !!actionPlacement,
    }), [actionPlacement]);
    return (jsxs(Fragment$1, { children: [jsx("div", { className: "d-offcanvas-separator" }), jsx("div", { className: classNames(generateClasses, className), style: style, children: children })] }));
}

function DOffcanvas({ name, className, style, staticBackdrop, scrollable, openFrom = 'end', children, dataAttributes, }) {
    return (jsx("div", Object.assign({ className: classNames('offcanvas portal show', {
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
    var { className, page, current, showArrows, navClassName } = _a, props = __rest(_a, ["className", "page", "current", "showArrows", "navClassName"]);
    const backwardCompatibilityProps = useMemo(() => (Object.assign(Object.assign(Object.assign(Object.assign({}, props), { current: Number(page !== undefined ? page : current) }), showArrows !== undefined && { renderNav: showArrows }), props.extraClassName === undefined && className !== undefined && {
        extraClassName: className,
    })), [props, page, current, showArrows, className]);
    return (jsx(ResponsivePagination, Object.assign({ navClassName: classNames('page-item-arrow', navClassName) }, backwardCompatibilityProps)));
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
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign({}, style), adjustContentToRender && {
        [`--${PREFIX_BS}popover-component-min-width`]: 'auto',
    })), [style, adjustContentToRender]);
    return (jsxs("div", Object.assign({ className: classNames('d-popover', className), style: generateStyleVariables }, dataAttributes, { children: [jsx("div", Object.assign({ ref: refs.setReference }, getReferenceProps(), { children: renderComponent(isOpen) })), isOpen && (jsx(FloatingFocusManager, { context: context, modal: false, children: jsx("div", Object.assign({ className: classNames('d-popover-content', {
                        'w-100': adjustContentToRender,
                    }), ref: refs.setFloating, style: floatingStyles, "aria-labelledby": headingId }, getFloatingProps(), { children: children })) }))] })));
}

function DProgress({ className, style, currentValue, minValue = 0, maxValue = 100, hideCurrentValue = false, enableStripedAnimation = false, dataAttributes, }) {
    const percentage = useMemo(() => (Math.round((currentValue * 100) / maxValue)), [currentValue, maxValue]);
    const formatProgress = useMemo(() => `${percentage}%`, [percentage]);
    const generateClasses = useMemo(() => ({
        'progress-bar': true,
        'progress-bar-striped progress-bar-animated': enableStripedAnimation,
    }), [enableStripedAnimation]);
    return (jsx("div", Object.assign({ className: classNames('progress', className) }, dataAttributes, { children: jsx("div", { className: classNames(generateClasses), role: "progressbar", "aria-label": "Progress bar", style: Object.assign({ width: formatProgress }, style), "aria-valuenow": currentValue, "aria-valuemin": minValue, "aria-valuemax": maxValue, children: !hideCurrentValue && formatProgress }) })));
}

function DQuickActionButton({ line1, line2, className, actionIcon, actionIconFamilyClass, actionIconFamilyPrefix, actionIconTheme, representativeImage, representativeIcon, representativeIconTheme = 'secondary', representativeIconHasCircle = false, representativeIconFamilyClass, representativeIconFamilyPrefix, onClick, href, hrefTarget, style, dataAttributes, }) {
    const Tag = useMemo(() => {
        if (href) {
            return 'a';
        }
        if (onClick) {
            return 'button';
        }
        return 'div';
    }, [href, onClick]);
    const tagProps = useMemo(() => {
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
    return (jsxs(Tag, Object.assign({ style: style }, tagProps, dataAttributes, { children: [representativeIcon && (jsx(DIcon, { className: "d-quick-action-button-representative-icon", size: representativeIconHasCircle
                    ? `var(--${PREFIX_BS}quick-action-button-representative-icon-size)`
                    : `var(--${PREFIX_BS}quick-action-button-representative-image-size)`, icon: representativeIcon, hasCircle: representativeIconHasCircle, theme: representativeIconTheme, familyClass: representativeIconFamilyClass, familyPrefix: representativeIconFamilyPrefix })), representativeImage && (jsx("img", { className: "d-quick-action-button-representative-image", src: representativeImage, alt: "" })), jsx("div", { className: "d-quick-action-button-content", children: jsxs("div", { className: "d-quick-action-button-text", children: [jsx("span", { className: "d-quick-action-button-line1", children: line1 }), jsx("small", { className: "d-quick-action-button-line2", children: line2 })] }) }), actionIcon && (jsx(DIcon, { className: "d-quick-action-button-action-icon", icon: actionIcon, size: `var(--${PREFIX_BS}quick-action-button-action-icon-size)`, theme: actionIconTheme, familyClass: actionIconFamilyClass, familyPrefix: actionIconFamilyPrefix }))] })));
}

/**
 * @deprecated
 */
function DQuickActionCheck({ id: idProp, name, value, line1, line2, line3, className, style, checked, dataAttributes, onChange, }) {
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const changeHandler = useCallback((event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    return (jsxs("label", Object.assign({ className: classNames('d-quick-action-check', className), htmlFor: id, style: style }, dataAttributes, { children: [jsx(DInputCheck, { id: id, type: "radio", name: name, value: value, checked: checked, onChange: changeHandler }), jsxs("div", { className: "d-quick-action-check-detail", children: [jsx("span", { className: "d-quick-action-check-line1", children: line1 }), jsx("span", { className: "d-quick-action-check-line2", children: line2 })] }), jsx("span", { className: "d-quick-action-check-line3", children: line3 })] })));
}

function DQuickActionSelect({ id: idProp, name, value, line1, line2, className, style, selected = false, dataAttributes, onChange, }) {
    const innerRef = useRef(null);
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const changeHandler = useCallback((event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    useEffect(() => {
        if (innerRef.current) {
            innerRef.current.checked = selected;
        }
    }, [selected]);
    return (jsxs("label", Object.assign({ className: classNames('d-quick-action-select', className), htmlFor: id, style: style }, dataAttributes, { children: [jsx("input", { ref: innerRef, id: id, type: "radio", name: name, value: value, onChange: changeHandler }), jsx("span", { className: "d-quick-action-select-line1", children: line1 }), jsx("span", { className: "d-quick-action-select-line2", children: line2 })] })));
}

/**
 * @deprecated
 */
function DQuickActionSwitch({ id: idProp, name, label, hint, checked, disabled, className, style, dataAttributes, onClick, }) {
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    const clickHandler = useCallback((event) => {
        event.stopPropagation();
        onClick === null || onClick === void 0 ? void 0 : onClick(checked);
    }, [checked, onClick]);
    return (jsxs("button", Object.assign({ className: classNames('d-quick-action-switch', className), type: "button", onClick: clickHandler, style: style }, dataAttributes, { children: [jsx("div", { className: "d-quick-action-switch-content", children: jsx(DInputSwitch, { id: id, name: name, disabled: disabled, checked: checked, readonly: true, label: label }) }), jsx("div", { className: "d-quick-action-switch-hint", children: hint })] })));
}

/**
 * @deprecated Please use https://getbootstrap.com/docs/5.3/components/placeholders/ instead
 */
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
        }, className), style: style, children: options.map(({ label, value, description }) => (jsxs("div", { className: "d-step", children: [jsx("div", { className: "d-step-value", children: jsx("div", { className: classNames({
                            'd-step-icon-container': true,
                            'd-step-check': value < currentStep || completed,
                            'd-step-current': value === currentStep && !completed,
                        }), children: value < currentStep || completed
                            ? (jsx(DIcon, { icon: icon, familyClass: iconSuccessFamilyClass, familyPrefix: iconSuccessFamilyPrefix, materialStyle: iconSuccessMaterialStyle, className: "d-step-icon" }))
                            : value }) }), jsxs("div", { className: "d-step-text-container", children: [jsx("div", { className: "d-step-label", children: label }), description && (jsx("div", { className: "d-step-description", children: description }))] })] }, value))) }));
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
    return (jsxs("div", { className: classNames('d-stepper', className), style: style, children: [jsx("div", { className: "d-step-bar", style: { background: progressStyle }, children: jsx("p", { className: "d-step-number", children: `${currentStep}/${options.length}` }) }), jsx("div", { className: "d-step-info", children: Object.keys(currentOption).length > 0 && (jsxs(Fragment$1, { children: [jsx("div", { className: "d-step-label", children: currentOption.label }), jsx("div", { className: "d-step-description", children: currentOption.description || '' })] })) })] }));
}

function DStepper({ options, currentStep, iconSuccess, iconSuccessFamilyClass, iconSuccessFamilyPrefix, iconSuccessMaterialStyle = false, vertical = false, breakpoint = 'lg', className, completed = false, style, dataAttributes, }) {
    return (jsxs("div", Object.assign({ className: className, style: style }, dataAttributes, { children: [jsx("div", { className: `d-block d-${breakpoint}-none`, children: jsx(DStepper$1, { options: options, currentStep: currentStep }) }), jsx("div", { className: `d-none d-${breakpoint}-block`, children: jsx(DStepper$2, { options: options, currentStep: currentStep, vertical: vertical, iconSuccess: iconSuccess, iconSuccessFamilyClass: iconSuccessFamilyClass, iconSuccessFamilyPrefix: iconSuccessFamilyPrefix, iconSuccessMaterialStyle: iconSuccessMaterialStyle, completed: completed }) })] })));
}

const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 4;
const GAP = 2;
function DTooltip({ className, childrenClassName, style, offSet = ARROW_HEIGHT + GAP, padding, withFocus = false, withClick = false, withHover = true, open = false, theme = 'dark', placement = 'top', size, Component, children, }) {
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
    const generateClasses = useMemo(() => (Object.assign({ 'tooltip show': true, [`tooltip-${size}`]: !!size, [`tooltip-${theme}`]: !!theme }, className && { [className]: true })), [size, theme, className]);
    return (jsxs(Fragment$1, { children: [jsx("div", Object.assign({ className: childrenClassName, ref: refs.setReference }, getReferenceProps(), { children: Component })), jsx(FloatingPortal, { children: isOpen && (jsxs("div", Object.assign({ className: classNames(generateClasses), ref: refs.setFloating, style: Object.assign(Object.assign({}, floatingStyles), style) }, getFloatingProps(), { children: [jsx(FloatingArrow, { ref: arrowRef, context: context, width: ARROW_WIDTH, height: ARROW_HEIGHT }), jsx("div", { className: "tooltip-inner", children: children })] }))) })] }));
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
                        }, classNameTab), type: "button", role: "tab", "aria-controls": `${option.tab}Pane`, "aria-selected": option.tab === selected, disabled: option.disabled, onClick: () => onSelect(option), children: option.label }, option.label))) }), jsx("div", { className: "tab-content w-100", children: children })] })) }));
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
        const { title, description, icon, closeIcon, timestamp, theme, soft, } = data;
        return toast.custom(({ id, visible }) => {
            if (!visible) {
                return null;
            }
            if (!description) {
                return (jsx(DToast$1, { className: classNames({
                        [`toast-${theme}`]: !!theme && !soft,
                        [`toast-soft-${theme}`]: !!theme && !!soft,
                    }, 'show'), children: jsxs(DToast$1.Body, { children: [icon && (jsx(DIcon, { className: "toast-icon", icon: icon })), jsx("p", { className: "toast-title", children: title }), jsx("button", { type: "button", className: "d-close align-self-center", "aria-label": "Close", onClick: () => toast.dismiss(id), children: jsx(DIcon, { icon: closeIcon || xLg }) })] }) }));
            }
            return (jsxs(DToast$1, { className: classNames({
                    [`toast-${theme}`]: !!theme && !soft,
                    [`toast-soft-${theme}`]: !!theme && !!soft,
                }, 'show'), children: [jsxs(DToast$1.Header, { children: [icon && (jsx(DIcon, { className: "toast-icon", icon: icon })), jsx("p", { className: "toast-title", children: title }), timestamp && (jsx("small", { className: "toast-timestamp", children: timestamp })), jsx("button", { type: "button", className: "d-close align-self-center", "aria-label": "Close", onClick: () => toast.dismiss(id), children: jsx(DIcon, { icon: closeIcon || xLg }) })] }), jsx(DToast$1.Body, { children: jsx("span", { children: description }) })] }));
        }, toastProps);
    }, [xLg]);
    return {
        toast: toast$1,
    };
}

function DTableHead({ className, style, field, label, value = '', onChange, }) {
    const handleOnChange = useCallback(() => {
        if (value === field) {
            return onChange(`-${field}`);
        }
        if (value === `-${field}`) {
            return onChange('');
        }
        return onChange(field);
    }, [field, value, onChange]);
    return (jsx("th", { style: style, className: classNames('d-table-head', className), children: jsxs("button", { type: "button", onClick: handleOnChange, children: [label, value && value.includes(field) && (jsx(DIcon, { icon: value === field ? 'arrow-up' : 'arrow-down' }))] }) }));
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
    var { id: idProp, style, className, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, labelIconMaterialStyle, disabled = false, loading = false, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconEnd, iconEndDisabled, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, iconEndMaterialStyle, hint, size, invalid = false, valid = false, floatingLabel = false, inputEnd, value, placeholder = '', dataAttributes, onChange, onIconEndClick, countrySelectorProps, filteredCountries, defaultCountry = 'cl' } = _a, inputProps = __rest(_a, ["id", "style", "className", "label", "labelIcon", "labelIconFamilyClass", "labelIconFamilyPrefix", "labelIconMaterialStyle", "disabled", "loading", "iconFamilyClass", "iconFamilyPrefix", "iconMaterialStyle", "iconEnd", "iconEndDisabled", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "iconEndMaterialStyle", "hint", "size", "invalid", "valid", "floatingLabel", "inputEnd", "value", "placeholder", "dataAttributes", "onChange", "onIconEndClick", "countrySelectorProps", "filteredCountries", "defaultCountry"]);
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
    const labelComponent = useMemo(() => (jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsx(DIcon, { icon: labelIcon, size: `var(--${PREFIX_BS}label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix, materialStyle: labelIconMaterialStyle }))] })), [
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

export { DAlert, DAvatar, DBadge, DBoxFile, DButton, DButtonIcon, DCard$1 as DCard, DCardBody, DCardFooter, DCardHeader, DCarousel$1 as DCarousel, DCarouselSlide, DChip, DCollapse, DContext, DContextProvider, DCurrencyText, DDatePicker, DIcon, DIconBase, ForwardedDInput as DInput, DInputCheck, ForwardedDInputCounter as DInputCounter, ForwardedDInputCurrencyBase as DInputCurrency, ForwardedDInputCurrencyBase$1 as DInputCurrencyBase, ForwardedDInputMask as DInputMask, ForwardedDInputPassword as DInputPassword, ForwardedDInputPhone as DInputPhone, DInputPin, ForwardedDInputRange as DInputRange, ForwardedDInputSearch as DInputSearch, DInputSelect, DInputSwitch, DList$1 as DList, DListGroup$1 as DListGroup, DListGroupItem, DListItem, DModal$1 as DModal, DModalBody, DModalFooter, DModalHeader, DOffcanvas$1 as DOffcanvas, DOffcanvasBody, DOffcanvasFooter, DOffcanvasHeader, DPaginator, DPopover, DProgress, DQuickActionButton, DQuickActionCheck, DQuickActionSelect, DQuickActionSwitch, DSelect$1 as DSelect, DSkeleton, DStepper, DStepper$2 as DStepperDesktop, DStepper$1 as DStepperMobile, DTabContent, DTableHead, DTabs$1 as DTabs, DToast$1 as DToast, DToastContainer, DTooltip, changeQueryString, checkMediaQuery, configureI8n as configureI18n, formatCurrency, getCssVariable, getQueryString, subscribeToMediaQuery, useDContext, useDPortalContext, useDToast, useDisableBodyScrollEffect, useDisableInputWheel, useFormatCurrency, useInputCurrency, useItemSelection, useMediaBreakpointUpLg, useMediaBreakpointUpMd, useMediaBreakpointUpSm, useMediaBreakpointUpXl, useMediaBreakpointUpXs, useMediaBreakpointUpXxl, useMediaQuery, usePortal, useProvidedRefOrCreate, useStackState, useTabContext, validatePhoneNumber };
//# sourceMappingURL=index.esm.js.map
