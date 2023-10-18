import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMemo, useState, useEffect, useCallback, createContext, useContext, forwardRef, useRef, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { __rest } from 'tslib';
import { useDropzone } from 'react-dropzone';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import currency from 'currency.js';
import DatePicker from 'react-datepicker';
import { DateTime } from 'luxon';
import { useField } from 'formik';
import ResponsivePagination from 'react-responsive-pagination';
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useRole, useInteractions, useId, FloatingFocusManager, arrow, useHover, useFocus, FloatingPortal, FloatingArrow } from '@floating-ui/react';
import ContentLoader from 'react-content-loader';
import { toast, Slide, ToastContainer } from 'react-toastify';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import html2canvas from 'html2canvas';
import { createPortal } from 'react-dom';

function DBadge({ text, isDot = false, theme = 'primary', id, className, style, }) {
    const generateClasses = useMemo(() => ({
        badge: true,
        'badge-dot': isDot,
        [`badge-${theme}`]: !!theme,
    }), [isDot, theme]);
    return (jsx("span", Object.assign({ className: classNames(generateClasses, className), style: style }, id && { id }, { children: jsx("span", { children: text }) })));
}

function DInputSwitch({ label, id, name, isChecked, isDisabled, isReadonly, onChange, }) {
    const [internalIsChecked, setInternalIsChecked] = useState(isChecked);
    useEffect(() => {
        setInternalIsChecked(isChecked);
    }, [isChecked]);
    const changeHandler = useCallback((event) => {
        const value = event.currentTarget.checked;
        setInternalIsChecked(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (jsxs("div", { className: "form-check form-switch", children: [jsx("input", { id: id, name: name, onChange: isReadonly ? () => false : changeHandler, className: "form-check-input", type: "checkbox", role: "switch", checked: internalIsChecked, disabled: isDisabled }), label && (jsx("label", { className: "form-check-label", htmlFor: id, children: label }))] }));
}

function DPermissionItem({ permission, permissionState, onChange, onAction = () => { }, }) {
    return (jsxs("div", { role: "button", tabIndex: 0, onKeyDown: () => { }, className: "d-flex permission-item align-items-center", onClick: onAction, children: [jsx("span", { className: "flex-grow-1 label", children: permission.label }), permission.type === 'custom' && (jsx(DBadge, { theme: "tertiary", text: permissionState })), jsx(DInputSwitch, { id: permission.id, isChecked: !!permission.value, isDisabled: !permission.enabled, onChange: (isChecked) => onChange(isChecked) })] }));
}

function DPermissionGroup({ title, description, permissionState, permissionList, onChangePermission, onCustomAction = () => { }, }) {
    return (jsxs("div", { className: "row operation-group g-0 mb-3 mb-lg-0", children: [jsxs("div", { className: "col-12 col-lg-4 d-flex flex-column justify-content-center", children: [jsx("h6", { className: "fw-bold mb-3 mb-lg-2", children: title }), jsx("p", { className: "fs-8 d-none d-lg-block m-0", children: description })] }), jsx("div", { className: "col-12 offset-lg-1 col-lg-7", children: permissionList.map((permission) => (jsx(DPermissionItem, { permission: permission, permissionState: permissionState, onChange: (isChecked) => onChangePermission(permission, isChecked), onAction: () => onCustomAction(permission) }, permission.id))) })] }));
}

const PREFIX_BS = 'bs-';
const ALERT_TYPE_ICON = {
    warning: 'exclamation-circle',
    danger: 'exclamation-triangle',
    success: 'check-circle',
    info: 'info-circle',
    light: 'info-circle',
    dark: 'info-circle',
};

function DIcon({ icon, theme, className = '', size = '1.5rem', isLoading = false, loadingDuration = 1.8, hasCircle = false, circleSize = `calc(var(--${PREFIX_BS}icon-component-size) * 1)`, color, backgroundColor, familyClass = 'bi', familyPrefix = 'bi-', }) {
    const getColorStyle = useMemo(() => {
        if (color) {
            return { [`--${PREFIX_BS}component-color`]: color };
        }
        if (theme) {
            return { [`--${PREFIX_BS}icon-component-color`]: `var(--${PREFIX_BS}${theme})` };
        }
        return {};
    }, [color, theme]);
    const getBackgroundStyle = useMemo(() => {
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
    const getCircleSizeStyle = useMemo(() => {
        if (hasCircle) {
            return { [`--${PREFIX_BS}icon-component-padding`]: circleSize };
        }
        return { [`--${PREFIX_BS}icon-component-padding`]: '0' };
    }, [circleSize, hasCircle]);
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign(Object.assign({ [`--${PREFIX_BS}icon-component-size`]: size, [`--${PREFIX_BS}icon-component-loading-duration`]: `${loadingDuration}s` }, getColorStyle), getBackgroundStyle), getCircleSizeStyle)), [size, loadingDuration, getColorStyle, getBackgroundStyle, getCircleSizeStyle]);
    const generateClasses = useMemo(() => ({
        'd-icon': true,
        [className]: !!className,
        [familyClass]: true,
        [`${familyPrefix}${icon}`]: true,
        'd-icon-loading': isLoading,
    }), [familyClass, familyPrefix, icon, className, isLoading]);
    return (jsx("i", { className: classNames(generateClasses), style: generateStyleVariables }));
}

function DSummaryCard({ title, description, icon, iconSize, iconTheme, Summary, }) {
    return (jsxs("div", { children: [jsx("h6", { className: "fw-bold fs-6", children: title }), jsx("p", { className: "fs-8", children: description }), jsxs("div", { className: "bg-white rounded p-4 d-flex gap-3 shadow-sm text-gray-700 fs-8", children: [jsx(DIcon, { icon: icon, theme: iconTheme, size: iconSize }), Summary] })] }));
}

function DAlert({ type = 'light', icon, iconFamilyClass, iconFamilyPrefix, showIcon = false, showClose, onClose, children, id, className, style, }) {
    const generateClasses = useMemo(() => ({
        alert: true,
        [`alert-${type}`]: true,
        'fade show': !!showClose,
        className: !!className,
    }), [type, showClose, className]);
    const getIcon = useMemo(() => icon || ALERT_TYPE_ICON[type] || '', [icon, type]);
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}alert-component-separator-opacity`]: '0.3' }), type === 'light' && {
        [`--${PREFIX_BS}alert-component-icon-color`]: `var(--${PREFIX_BS}secondary)`,
    })), [style, type]);
    return (jsxs("div", { className: classNames(generateClasses), style: generateStyleVariables, role: "alert", id: id, children: [(showIcon || icon) && (jsx(DIcon, Object.assign({ className: "alert-icon", icon: getIcon }, iconFamilyClass && { familyClass: iconFamilyClass }, iconFamilyPrefix && { familyPrefix: iconFamilyPrefix }))), jsx("div", { className: "alert-text", children: children }), showClose && (jsx("div", { className: "alert-separator" })), showClose && (jsx("button", { type: "button", className: "btn-close", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { className: "alert-close-icon", icon: "x-lg", familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) }))] }));
}

function DBoxFile(_a) {
    var { icon = 'cloud-upload', iconFamilyClass, iconFamilyPrefix, isDisabled = false, children } = _a, dropzoneOptions = __rest(_a, ["icon", "iconFamilyClass", "iconFamilyPrefix", "isDisabled", "children"]);
    const { acceptedFiles, getRootProps, getInputProps, } = useDropzone(Object.assign({ disabled: isDisabled }, dropzoneOptions));
    return (jsxs("section", { className: classNames('d-box-file', {
            'd-box-file-selected': !!acceptedFiles.length,
        }), children: [jsxs("div", Object.assign({}, getRootProps({
                className: classNames('d-box-file-dropzone', {
                    disabled: isDisabled,
                }),
            }), { children: [jsx("input", Object.assign({}, getInputProps())), jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }), jsx("div", { className: "d-box-content", children: children })] })), !!acceptedFiles.length && (jsx("aside", { className: "d-box-files", children: acceptedFiles.map((file) => (jsx("div", { className: "d-box-files-text", children: `${file.name} - ${file.size} bytes` }, file.name))) }))] }));
}

function DButton({ theme = 'primary', size, variant, state, text = '', iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, value, type = 'button', isPill = false, isLoading = false, isDisabled = false, isStopPropagationEnabled = true, className, onClick, }) {
    const generateClasses = useMemo(() => {
        const variantClass = variant
            ? `btn-${variant}-${theme}`
            : `btn-${theme}`;
        return Object.assign(Object.assign(Object.assign({ btn: true, [variantClass]: true }, size && { [`btn-${size}`]: true }), (state && state !== 'disabled') && { [state]: true }), { loading: isLoading });
    }, [variant, theme, size, state, isLoading]);
    const generateStyleVariables = useMemo(() => {
        if (isPill) {
            return {
                [`--${PREFIX_BS}btn-component-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
                [`--${PREFIX_BS}btn-component-lg-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
                [`--${PREFIX_BS}btn-component-sm-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
            };
        }
        return {};
    }, [isPill]);
    const clickHandler = useCallback((event) => {
        if (isStopPropagationEnabled) {
            event.stopPropagation();
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    }, [isStopPropagationEnabled, onClick]);
    return (jsxs("button", Object.assign({ className: classNames(generateClasses, className), style: generateStyleVariables, type: type, disabled: state === 'disabled' || isLoading || isDisabled }, value && { value }, { onClick: clickHandler, children: [iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })), (text && !isLoading) && (jsx("span", { children: text })), isLoading && (jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) })), iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix }))] })));
}

function DCard({ className, style, children, }) {
    return (jsx("div", { style: style, className: classNames('card', className), children: children }));
}

function DCardBody({ className, children, }) {
    return (jsx("div", { className: classNames('card-body', className), children: children }));
}

function DCardFooter({ className, children, }) {
    return (jsx("div", { className: classNames('card-footer', className), children: children }));
}

function DCardHeader({ className, children, }) {
    return (jsx("div", { className: classNames('card-header', className), children: children }));
}

function DCardAccount({ className, icon, theme, name, number, balance, balanceText, onClick, actionText, }) {
    return (jsx(DCard, { className: classNames('d-card-account', className), children: jsxs(DCardBody, { children: [jsxs("div", { className: "d-flex gap-3 align-items-center", children: [jsx(DIcon, { icon: icon, hasCircle: true, theme: theme, size: "1.5rem" }), jsxs("div", { className: "d-block flex-grow-1", children: [jsx("p", { className: "text-gray-700", children: name }), jsx("small", { className: "text-gray-500", children: number })] })] }), jsxs("div", { className: "d-block", children: [jsx("p", { className: "fw-bold fs-6 text-body", children: balance }), jsx("small", { className: "text-gray-700", children: balanceText })] }), jsx("div", { className: "d-flex justify-content-end", children: jsx(DButton, { text: actionText, variant: "link", size: "sm", theme: "secondary", iconEnd: "chevron-right", onClick: onClick }) })] }) }));
}

function DCarousel(_a) {
    var { children, className, options } = _a, props = __rest(_a, ["children", "className", "options"]);
    return (jsx(Splide, Object.assign({ className: classNames('d-carousel', className), options: Object.assign(Object.assign({}, options), { classes: {
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

function DCarouselSlide(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (jsx(SplideSlide, Object.assign({ className: classNames('d-carousel-slide', className) }, props)));
}

function DChip({ theme = 'primary', text, icon, iconFamilyClass, iconFamilyPrefix, showClose = false, onClose, }) {
    const generateClasses = useMemo(() => ({
        'd-chip': true,
        [`d-chip-${theme}`]: !!theme,
    }), [theme]);
    return (jsxs("span", { className: classNames(generateClasses), children: [icon && (jsx("div", { className: "d-chip-icon-container", children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) })), jsx("span", { children: text }), showClose && (jsx("button", { type: "button", className: "d-chip-icon-container", onClick: onClose, children: jsx(DIcon, { icon: "x-lg" }) }))] }));
}

function DCollapse({ id, className, Component, hasSeparator = false, defaultCollapsed = false, onChange, children, }) {
    const [toggle, setToggle] = useState(defaultCollapsed);
    const onChangeCollapse = () => setToggle((prev) => !prev);
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
    return (jsxs("div", { id: id, className: classNames('collapse-container', className), children: [jsxs("button", { className: "collapse-button", type: "button", onClick: onChangeCollapse, children: [jsx("div", { className: "flex-grow-1", children: Component }), jsx(DIcon, { color: `var(--${PREFIX_BS}gray)`, size: `var(--${PREFIX_BS}ref-fs-small)`, icon: toggle ? 'chevron-up' : 'chevron-down' })] }), toggle && (jsx("div", { className: classNames({
                    'collapse-body': true,
                }), style: generateStyles, children: children }))] }));
}

function DCollapseIconText({ children, icon, iconSize = '1.5rem', iconTheme = 'primary', title, iconFamilyClass, iconFamilyPrefix, }) {
    return (jsx(DCollapse, { defaultCollapsed: true, className: "d-collapse-icon-text", Component: (jsxs("div", { className: "d-collapse-icon-text-header", children: [jsx(DIcon, { icon: icon, size: iconSize, theme: iconTheme, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, hasCircle: true }), jsx("span", { className: "d-collapse-icon-text-title", children: title })] })), children: children }));
}

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
var liquidParser = {
    library: {},
    engine: undefined,
    init(library, Liquid) {
        this.library = library;
        if (Liquid) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
            this.engine = new Liquid.Liquid({
                strictFilters: true,
                strictVariables: true,
            });
        }
    },
    /**
     * Parse a liquid string
     * @param liquidString Target Content Space UID
     * @returns a usable object or string
     */
    async parseLiquidAsync(liquidString) {
        try {
            return this.engine.parseAndRender(liquidString, this.library);
        }
        catch (error) {
            return error.message;
        }
    },
    /**
     * Parse a liquid string
     * @param liquidString Target Content Space UID
     * @returns a usable object or string
     */
    parseLiquid(liquidString) {
        try {
            return this.engine.parseAndRenderSync(liquidString, this.library);
        }
        catch (error) {
            return error.message;
        }
    },
    parse(liquidString) {
        if (this.engine) {
            return this.parseLiquid(liquidString);
        }
        return liquidString;
    },
    async parseAsync(liquidString) {
        if (this.engine) {
            return this.parseLiquidAsync(liquidString);
        }
        return liquidString;
    },
};

function formatCurrency(amount, options) {
    return currency(amount, options).format();
}

const LANG = liquidParser.parse('{{site.language}}');
async function configureI8n(resources, _a = {}) {
    var { lng = LANG, fallbackLng = 'es' } = _a, config = __rest(_a, ["lng", "fallbackLng"]);
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

const LiquidContext = createContext({
    language: 'en',
    currency: {
        symbol: '$',
        precision: 2,
        separator: ',',
        decimal: '.',
    },
});
function LiquidContextProvider({ children, }) {
    const value = useMemo(() => ({
        language: liquidParser.parse('{{site.language}}'),
        currency: {
            symbol: liquidParser.parse('{{vars.currency-symbol}}'),
            precision: parseInt(liquidParser.parse('{{vars.currency-precision}}'), 10),
            separator: liquidParser.parse('{{vars.currency-separator}}'),
            decimal: liquidParser.parse('{{vars.currency-decimal}}'),
        },
    }), []);
    return (jsx(LiquidContext.Provider, { value: value, children: children }));
}
function useLiquidContext() {
    const context = useContext(LiquidContext);
    if (context === undefined) {
        throw new Error('useLiquidContext was used outside of LiquidContextProvider');
    }
    return context;
}
var LiquidContext$1 = LiquidContext;

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

const ModalContext = createContext(undefined);
function enhanceModal(Modal, callbacks) {
    return function EnhancedModal(_a) {
        var { name, payload } = _a, otherProps = __rest(_a, ["name", "payload"]);
        useEffect(() => {
            if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onAfterOpen) {
                callbacks.onAfterOpen(payload);
            }
            return () => {
                if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onAfterClose) {
                    callbacks.onAfterClose({ fromModal: false }, payload);
                }
            };
        }, [payload]);
        return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        jsx(Modal, Object.assign({ name: name, payload: payload }, otherProps)));
    };
}
function ModalContextProvider({ portalName, children, availableModals, }) {
    const [hasPortal, setHasPortal] = useState(false);
    useEffect(() => {
        const previousPortal = document.querySelector(`#${portalName}`);
        if (previousPortal) {
            previousPortal.remove();
        }
        const portal = document.createElement('div');
        portal.id = portalName;
        document.body.appendChild(portal);
        setHasPortal(true);
    }, [portalName]);
    const [stack, { push, pop, peek }] = useStackState([]);
    useEffect(() => {
        if (stack.length) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0';
        }
        else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        }
    }, [stack.length]);
    const openModal = useCallback((modalName, { payload, callbacks } = { payload: {} }) => {
        const Component = availableModals[modalName];
        if (!Component) {
            throw new Error(`there is no component for modal ${modalName}`);
        }
        const stackItem = {
            modalName,
            Component,
            payload,
            callbacks,
        };
        if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onBeforeOpen) {
            callbacks.onBeforeOpen(payload);
        }
        push(stackItem);
    }, [availableModals, push]);
    const closeModal = useCallback((context = { fromModal: false }) => {
        var _a;
        const stackItem = peek();
        if (!stackItem) {
            return;
        }
        if ((_a = stackItem.callbacks) === null || _a === void 0 ? void 0 : _a.onBeforeClose) {
            stackItem.callbacks.onBeforeClose(context, stackItem.payload);
        }
        pop();
    }, [peek, pop]);
    const value = useMemo(() => ({
        stack,
        openModal,
        closeModal,
    }), [stack, openModal, closeModal]);
    return (jsxs(ModalContext.Provider, { value: value, children: [children, hasPortal && createPortal(jsxs(Fragment, { children: [stack.map(({ Component, modalName, callbacks, payload, }) => {
                        const EnhancedComponent = enhanceModal(Component, callbacks);
                        return (jsx(EnhancedComponent, { name: modalName, payload: payload, openModal: openModal, closeModal: closeModal }, modalName));
                    }), !!stack.length && jsx("div", { className: "modal-backdrop fade show" })] }), document.getElementById(portalName))] }));
}
function useModalContext() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModalContext was used outside of ModalContextProvider');
    }
    return context;
}

const OffcanvasContext = createContext(undefined);
function enhanceOffcanvas(Offcanvas, callbacks) {
    return function EnhancedOffcanvas(_a) {
        var { name, payload } = _a, otherProps = __rest(_a, ["name", "payload"]);
        useEffect(() => {
            if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onAfterOpen) {
                callbacks.onAfterOpen(payload);
            }
            return () => {
                if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onAfterClose) {
                    callbacks.onAfterClose({ fromOffcanvas: false }, payload);
                }
            };
        }, [payload]);
        return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        jsx(Offcanvas, Object.assign({ name: name, payload: payload }, otherProps)));
    };
}
function OffcanvasContextProvider({ portalName, children, availableOffcanvas, }) {
    const [hasPortal, setHasPortal] = useState(false);
    useEffect(() => {
        const previousPortal = document.querySelector(`#${portalName}`);
        if (previousPortal) {
            previousPortal.remove();
        }
        const portal = document.createElement('div');
        portal.id = portalName;
        document.body.appendChild(portal);
        setHasPortal(true);
    }, [portalName]);
    const [stack, { push, pop, peek }] = useStackState([]);
    useEffect(() => {
        if (stack.length) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0';
        }
        else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        }
    }, [stack.length]);
    const openOffcanvas = useCallback((offcanvasName, { payload, callbacks } = { payload: {} }) => {
        const Component = availableOffcanvas[offcanvasName];
        if (!Component) {
            throw new Error(`there is no component for offcanvas ${offcanvasName}`);
        }
        const stackItem = {
            offcanvasName,
            Component,
            payload,
            callbacks,
        };
        if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onBeforeOpen) {
            callbacks.onBeforeOpen(payload);
        }
        push(stackItem);
    }, [availableOffcanvas, push]);
    const closeOffcanvas = useCallback((context = { fromOffcanvas: false }) => {
        var _a;
        const stackItem = peek();
        if (!stackItem) {
            return;
        }
        if ((_a = stackItem.callbacks) === null || _a === void 0 ? void 0 : _a.onBeforeClose) {
            stackItem.callbacks.onBeforeClose(context, stackItem.payload);
        }
        pop();
    }, [peek, pop]);
    const value = useMemo(() => ({
        stack,
        openOffcanvas,
        closeOffcanvas,
    }), [stack, openOffcanvas, closeOffcanvas]);
    return (jsxs(OffcanvasContext.Provider, { value: value, children: [children, hasPortal && createPortal(jsxs(Fragment, { children: [stack.map(({ Component, offcanvasName, callbacks, payload, }) => {
                        const EnhancedComponent = enhanceOffcanvas(Component, callbacks);
                        return (jsx(EnhancedComponent, { name: offcanvasName, payload: payload, openOffcanvas: openOffcanvas, closeOffcanvas: closeOffcanvas }, offcanvasName));
                    }), !!stack.length && jsx("div", { className: "offcanvas-backdrop fade show" })] }), document.getElementById(portalName))] }));
}
function useOffcanvasContext() {
    const context = useContext(OffcanvasContext);
    if (context === undefined) {
        throw new Error('useOffcanvasContext was used outside of OffcanvasContextProvider');
    }
    return context;
}

function useFormatCurrency(...args) {
    const { currency } = useLiquidContext();
    const format = useCallback((value) => formatCurrency(value, currency), [currency]);
    const values = (args || []).map((value) => (formatCurrency(value !== null && value !== void 0 ? value : 0, currency)));
    return {
        format,
        values,
    };
}

function DCurrencyText({ value, className, }) {
    const { values: [valueFormatted] } = useFormatCurrency(value);
    return (jsx("span", { className: className, children: valueFormatted }));
}

function DInput({ id, style, className, name, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, placeholder = '', type = 'text', value = '', innerInputMode, pattern, isDisabled = false, isReadOnly = false, isLoading = false, iconFamilyClass, iconFamilyPrefix, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, hint, isInvalid = false, isValid = false, inputStart, onChange, onBlur, onFocus, onWheel, onIconStartClick, onIconEndClick, }, ref) {
    const innerRef = useRef(null);
    const [internalValue, setInternalValue] = useState(value);
    useEffect(() => {
        setInternalValue(value);
    }, [value]);
    useImperativeHandle(ref, () => ({
        blur() {
            var _a;
            (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        },
        focus() {
            var _a;
            (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        },
    }), []);
    const handleInputChange = useCallback((event) => {
        setInternalValue(event.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    return (jsxs("div", { className: classNames({
            'd-input': true,
            className: !!className,
        }), style: style, children: [label && (jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsx(DIcon, { className: "d-input-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxs("div", { className: "d-input-control", children: [jsxs("div", { className: classNames({
                            'input-group': true,
                            'has-validation': isInvalid,
                            disabled: isDisabled || isLoading,
                        }), children: [!!inputStart && (jsx("div", { className: "input-group-text", children: inputStart })), iconStart && (jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: onIconStartClick, disabled: isDisabled || isLoading, children: iconStart && (jsx(DIcon, { className: "d-input-icon", icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })) })), jsx("input", Object.assign({ ref: innerRef, id: id, name: name, type: type, className: classNames('form-control', {
                                    'is-invalid': isInvalid,
                                    'is-valid': isValid,
                                }), placeholder: placeholder, "aria-label": label, disabled: isDisabled || isLoading, readOnly: isReadOnly, value: internalValue, "aria-describedby": `${id}Add ${id}Hint`, pattern: pattern, onChange: (event) => handleInputChange(event), onBlur: onBlur, onFocus: onFocus, onWheel: onWheel }, innerInputMode && { inputMode: innerInputMode })), ((isInvalid || isValid) && !iconEnd && !isLoading) && (jsx("span", { className: "input-group-text", id: `${id}State`, children: jsx(DIcon, { className: "d-input-validation-icon", icon: isInvalid ? 'exclamation-circle' : 'check', familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) })), (iconEnd && !isLoading) && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: onIconEndClick, disabled: isDisabled || isLoading, children: iconEnd && (jsx(DIcon, { className: "d-input-icon", icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) })), isLoading && (jsx("div", { className: "input-group-text d-input-icon", children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })] }));
}
const ForwardedDInput = forwardRef(DInput);
ForwardedDInput.displayName = 'DInput';
var DInput$1 = ForwardedDInput;

function DDatePickerTime(_a) {
    var { value, onChange, id, label } = _a, props = __rest(_a, ["value", "onChange", "id", "label"]);
    return (jsxs("div", { className: "d-flex align-items-center gap-2 flex-column d-datepicker-time", children: [label && (jsx("p", { className: "d-datepicker-time-label", children: label })), jsx(DInput$1, Object.assign({}, onChange && {
                onChange: (event) => onChange(event.target.value),
            }, { type: "time", id: id, value: value }, props))] }));
}

function DDatePickerInput(_a, ref) {
    var { value, onClick, id, iconEnd } = _a, props = __rest(_a, ["value", "onClick", "id", "iconEnd"]);
    useImperativeHandle(ref, () => ({}), []);
    return (jsx("div", { role: "button", onClick: onClick, onKeyDown: () => { }, tabIndex: -1, children: jsx(DInput$1, Object.assign({ isReadOnly: true, type: "text", id: id, value: value, onIconEndClick: onClick, iconEnd: iconEnd }, props)) }));
}
const ForwardedDDatePickerInput = forwardRef(DDatePickerInput);
ForwardedDDatePickerInput.displayName = 'DDatePickerInput';
var DDatePickerInput$1 = ForwardedDDatePickerInput;

function DMonthPicker(_a) {
    var { onChangeDate, date } = _a, props = __rest(_a, ["onChangeDate", "date"]);
    const { language } = useLiquidContext();
    const selected = useMemo(() => DateTime.fromISO(date).toJSDate(), [date]);
    const locale = useMemo(() => language || 'en', [language]);
    const dateFormatted = useMemo(() => (DateTime.fromISO(date).setLocale(locale).toFormat('MMMM yyyy')), [date, locale]);
    return (jsx(DatePicker, Object.assign({ showMonthYearPicker: true, selected: selected, calendarClassName: "d-month-picker", onChange: onChangeDate, customInput: (jsx("p", { className: "fw-bold text-capitalize", children: dateFormatted })), renderCustomHeader: ({ monthDate, decreaseYear, increaseYear, prevYearButtonDisabled, nextYearButtonDisabled, }) => (jsxs("div", { className: "d-flex align-items-center justify-content-between gap-4 fs-6 bg-dark", children: [jsx(DButton, { iconStart: "chevron-left", size: "sm", variant: "link", theme: "light", onClick: decreaseYear, isDisabled: prevYearButtonDisabled }), jsx("p", { className: "fs-6 fw-bold", children: monthDate.getFullYear() }), jsx(DButton, { iconStart: "chevron-right", size: "sm", variant: "link", theme: "light", onClick: increaseYear, isDisabled: nextYearButtonDisabled })] })) }, props)));
}

function DDatePickerHeader({ monthDate, changeMonth, changeYear, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, withMonthSelector, decreaseMonthIcon, increaseMonthIcon, iconSize, buttonVariant, buttonTheme, }) {
    const { language } = useLiquidContext();
    const locale = useMemo(() => language || 'en', [language]);
    const onChangeDate = useCallback((value) => {
        if (value) {
            changeMonth(DateTime.fromJSDate(value).month - 1);
            changeYear(DateTime.fromJSDate(value).year);
        }
    }, [changeMonth, changeYear]);
    return (jsxs("div", { className: "d-flex align-items-center justify-content-between d-datepicker-header", children: [jsx(DButton, { iconStart: decreaseMonthIcon, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: decreaseMonth, isDisabled: prevMonthButtonDisabled }), jsx(DMonthPicker, Object.assign({}, !withMonthSelector && { readOnly: true }, { date: monthDate.toISOString(), onChangeDate: onChangeDate }, locale && { locale })), jsx(DButton, { iconStart: increaseMonthIcon, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: increaseMonth, isDisabled: nextMonthButtonDisabled })] }));
}

function DDatePicker(_a) {
    var { onChangeDate, date, selectsRange, withMonthSelector, inputLabel, inputIcon = 'calendar', inputId = 'input-calendar', timeId = 'input-time', timeLabel, headerDecreaseMonthIcon = 'chevron-left', headerIncreaseMonthIcon = 'chevron-right', headerIconSize = 'sm', headerButtonVariant = 'link', headerButtonTheme = 'dark' } = _a, props = __rest(_a, ["onChangeDate", "date", "selectsRange", "withMonthSelector", "inputLabel", "inputIcon", "inputId", "timeId", "timeLabel", "headerDecreaseMonthIcon", "headerIncreaseMonthIcon", "headerIconSize", "headerButtonVariant", "headerButtonTheme"]);
    const selected = useMemo(() => DateTime.fromISO(date).toJSDate(), [date]);
    const { language } = useLiquidContext();
    const locale = useMemo(() => language || 'en', [language]);
    const DatePickerHeader = useCallback((headerProps) => (jsx(DDatePickerHeader, Object.assign({}, headerProps, { decreaseMonthIcon: headerDecreaseMonthIcon, increaseMonthIcon: headerIncreaseMonthIcon, iconSize: headerIconSize, buttonVariant: headerButtonVariant, buttonTheme: headerButtonTheme, withMonthSelector: !!withMonthSelector }))), [headerButtonTheme,
        headerButtonVariant,
        headerDecreaseMonthIcon,
        headerIconSize,
        headerIncreaseMonthIcon,
        withMonthSelector,
    ]);
    return (jsx(DatePicker, Object.assign({ selected: selected, calendarClassName: "m-date-picker", onChange: onChangeDate, renderCustomHeader: (headerProps) => jsx(DatePickerHeader, Object.assign({}, headerProps)), customInput: jsx(DDatePickerInput$1, { id: inputId, iconEnd: inputIcon }), customTimeInput: jsx(DDatePickerTime, { id: timeId, label: timeLabel }), selectsRange: selectsRange }, locale && { locale }, props)));
}

function DFormikInput(_a) {
    var { name, hint } = _a, props = __rest(_a, ["name", "hint"]);
    const [field, meta, helpers] = useField(name);
    return (jsx(DInput$1, Object.assign({}, props, { name: field.name, value: field.value, onChange: ({ target }) => helpers.setValue(target.value), onBlur: ({ target }) => field.onBlur(target.value), isInvalid: !!meta.error, hint: meta.error || hint })));
}

function DInputCurrencyBase(_a) {
    var { id, name, label = '', placeholder = '', value, isDisabled = false, isReadOnly = false, isLoading = false, hint, isInvalid = false, isValid = false, minValue, maxValue, currencyOptions, currencyCode, onChange, onBlur, onFocus } = _a, rest = __rest(_a, ["id", "name", "label", "placeholder", "value", "isDisabled", "isReadOnly", "isLoading", "hint", "isInvalid", "isValid", "minValue", "maxValue", "currencyOptions", "currencyCode", "onChange", "onBlur", "onFocus"]);
    const [internalValueAsNumber, setInternalValueAsNumber] = useState(value);
    const [internalValueAsFormat, setInternalValueAsFormat] = useState('');
    const [internalType, setInternalType] = useState('text');
    const [internalIsInvalid, setInternalIsInvalid] = useState(false);
    const currencyInputRef = useRef(null);
    const changeHandler = useCallback((event) => {
        event.stopPropagation();
        const eventValue = event.target.value;
        const valueAsNumber = eventValue ? parseFloat(eventValue) : undefined;
        const valueAsFormat = valueAsNumber !== undefined
            ? currency(valueAsNumber, Object.assign(Object.assign({}, currencyOptions), { symbol: '' })).format()
            : '';
        setInternalValueAsNumber(valueAsNumber);
        setInternalValueAsFormat(valueAsFormat);
        onChange === null || onChange === void 0 ? void 0 : onChange(valueAsNumber);
    }, [currencyOptions, onChange]);
    const blurHandler = useCallback((event) => {
        event.stopPropagation();
        setInternalType('text');
        setInternalValueAsFormat(internalValueAsNumber !== undefined
            ? currency(internalValueAsNumber, Object.assign(Object.assign({}, currencyOptions), { symbol: '' })).format()
            : '');
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(internalValueAsNumber);
    }, [currencyOptions, internalValueAsNumber, onBlur]);
    const focusHandler = useCallback((event) => {
        event.stopPropagation();
        setInternalType('number');
        setInternalValueAsFormat(internalValueAsNumber !== undefined
            ? currency(internalValueAsNumber, Object.assign(Object.assign({}, currencyOptions), { symbol: '' })).format()
            : '');
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(internalValueAsNumber);
    }, [currencyOptions, internalValueAsNumber, onFocus]);
    const wheelHandler = useCallback((event) => {
        var _a;
        event.stopPropagation();
        (_a = currencyInputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    }, []);
    const isValidValue = useCallback((internalValue) => {
        if (internalValue === undefined) {
            return true;
        }
        if (internalType === 'number') {
            return ((minValue === undefined || internalValue >= minValue)
                && (maxValue === undefined || internalValue <= maxValue));
        }
        return true;
    }, [internalType, maxValue, minValue]);
    const valueAsType = useMemo(() => {
        if (internalType === 'number') {
            return internalValueAsNumber;
        }
        return internalValueAsFormat;
    }, [internalType, internalValueAsFormat, internalValueAsNumber]);
    useEffect(() => {
        setInternalIsInvalid(!isValidValue(value));
    }, [isValidValue, value]);
    useEffect(() => {
        setInternalValueAsNumber(value);
    }, [value]);
    const generateStyleVariables = useMemo(() => ({
        [`--${PREFIX_BS}input-currency-component-symbol-color`]: `var(--${PREFIX_BS}secondary)`,
        [`--${PREFIX_BS}input-currency-symbol-color`]: `var(--${PREFIX_BS}input-currency-component-symbol-color)`,
    }), []);
    const generateSymbolStyleVariables = useMemo(() => ({
        color: `var(--${PREFIX_BS}m-input-currency-symbol-color)`,
    }), []);
    return (jsx(DInput$1, Object.assign({ ref: currencyInputRef, style: generateStyleVariables, id: id, name: name, label: label, placeholder: placeholder, value: valueAsType, isDisabled: isDisabled, isReadOnly: isReadOnly, isLoading: isLoading, hint: hint, isInvalid: isInvalid || internalIsInvalid, isValid: isValid, type: internalType, innerInputMode: "decimal", pattern: "^[0-9]", onChange: changeHandler, onBlur: blurHandler, onFocus: focusHandler, onWheel: wheelHandler, inputStart: (jsx("span", { slot: "input-start", style: generateSymbolStyleVariables, children: currencyCode || currencyOptions.symbol })) }, rest)));
}

function DInputCurrency(props) {
    const { currency } = useLiquidContext();
    return (jsx(DInputCurrencyBase, Object.assign({ currencyOptions: currency }, props)));
}

function DFormikInputCurrency(_a) {
    var { name, hint } = _a, props = __rest(_a, ["name", "hint"]);
    const [field, meta, helpers] = useField(name);
    return (jsx(DInputCurrency, Object.assign({}, props, { name: field.name, value: field.value, onChange: (value) => helpers.setValue(value), onBlur: (value) => field.onBlur(value), isInvalid: !!meta.error, hint: (meta === null || meta === void 0 ? void 0 : meta.error) || hint })));
}

function DInputSelect({ id, name, label = '', className, options, labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, isDisabled = false, isLoading = false, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, hint, selectedOption, valueExtractor, labelExtractor, onChange, onBlur, onIconStartClick, onIconEndClick, }) {
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
        onChange === null || onChange === void 0 ? void 0 : onChange(selected);
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
    return (jsxs("div", { className: classNames('d-input', className), children: [label && (jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsx(DIcon, { className: "mdinput-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxs("div", { className: "d-input-control", children: [jsxs("div", { className: classNames({
                            'input-group': true,
                            disabled: isDisabled || isLoading,
                        }), children: [iconStart && (jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: iconStartClickHandler, disabled: isDisabled || isLoading, children: iconStart && (jsx(DIcon, { className: "d-input-icon", icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })) })), jsx("select", Object.assign({ id: id, name: name, className: "form-select", "aria-label": label, disabled: isDisabled || isLoading, "aria-describedby": `${id}Add ${id}Hint`, onChange: changeHandler, onBlur: blurHandler }, selectedOption && { value: internalValueExtractor(selectedOption) }, { children: options.map((option) => (jsx("option", { value: internalValueExtractor(option), children: internalLabelExtractor(option) }, internalValueExtractor(option)))) })), iconEnd && !isLoading && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: iconEndClickHandler, disabled: isDisabled || isLoading, children: iconEnd && (jsx(DIcon, { className: "d-input-icon", icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) })), isLoading && (jsx("div", { className: "input-group-text form-control-icon loading", children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })] }));
}

function DFormikInputSelect(_a) {
    var { name } = _a, props = __rest(_a, ["name"]);
    const [field, , helpers] = useField(name);
    return (jsx(DInputSelect, Object.assign({}, props, { name: field.name, selectedOption: field.value, onChange: (selected) => helpers.setValue(selected), onBlur: (selected) => field.onBlur(selected) })));
}

function DInputCheck({ type, name, label, isChecked = false, id, isDisabled = false, isIndeterminate, value, onChange, }) {
    const innerRef = useRef(null);
    const handleChange = useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    useEffect(() => {
        if (innerRef.current) {
            innerRef.current.indeterminate = Boolean(isIndeterminate);
        }
    }, [isIndeterminate]);
    useEffect(() => {
        if (innerRef.current) {
            innerRef.current.checked = isChecked;
        }
    }, [isChecked]);
    if (!label) {
        return (jsx("input", { ref: innerRef, onChange: handleChange, className: "form-check-input", id: id, disabled: isDisabled, type: type, name: name, value: value }));
    }
    return (jsxs("div", { className: "form-check", children: [jsx("input", { ref: innerRef, onChange: handleChange, className: "form-check-input", id: id, disabled: isDisabled, type: type, name: name, value: value }), jsx("label", { className: "form-check-label", htmlFor: id, children: label })] }));
}

function DInputCounter(_a) {
    var { id, name, label = '', value, isDisabled = false, isReadOnly = false, isLoading = false, iconStart = 'dash-square', iconEnd = 'plus-square', hint, isInvalid = false, isValid = false, minValue, maxValue, style, className, onChange } = _a, rest = __rest(_a, ["id", "name", "label", "value", "isDisabled", "isReadOnly", "isLoading", "iconStart", "iconEnd", "hint", "isInvalid", "isValid", "minValue", "maxValue", "style", "className", "onChange"]);
    const [internalIsInvalid, setInternalIsInvalid] = useState(false);
    const [internalValue, setInternalValue] = useState(value);
    useEffect(() => {
        setInternalValue(value);
    }, [value]);
    useEffect(() => {
        onChange === null || onChange === void 0 ? void 0 : onChange(internalValue);
    }, [internalValue, onChange]);
    const changeHandler = useCallback((event) => {
        event.stopPropagation();
        const newValue = parseInt(event.target.value || '0', 10);
        setInternalValue(newValue);
    }, []);
    const clickHandler = useCallback((action) => {
        if (action) {
            setInternalValue((prevInternalValue) => {
                const newValue = prevInternalValue + 1;
                return newValue <= maxValue ? newValue : maxValue;
            });
        }
        else {
            setInternalValue((prevInternalValue) => {
                const newValue = prevInternalValue - 1;
                return newValue >= minValue ? newValue : minValue;
            });
        }
    }, [maxValue, minValue]);
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}input-component-form-control-text-align`]: 'center' })), [style]);
    useEffect(() => {
        setInternalIsInvalid(!(internalValue >= minValue && internalValue <= maxValue));
    }, [internalValue, minValue, maxValue]);
    return (jsx(DInput$1, Object.assign({ id: id, style: generateStyleVariables, className: className, name: name, label: label, value: internalValue, isDisabled: isDisabled, isReadOnly: isReadOnly, isLoading: isLoading, hint: hint, iconStart: iconStart, iconEnd: iconEnd, isInvalid: internalIsInvalid || isInvalid, isValid: isValid, type: "number", onChange: changeHandler, onIconStartClick: () => clickHandler(false), onIconEndClick: () => clickHandler(true) }, rest)));
}

function DInputPassword(_a) {
    var { id, name, label = '', placeholder = '', value = '', isDisabled = false, isReadOnly = false, isLoading = false, hint, isInvalid = false, isValid = false, onChange } = _a, rest = __rest(_a, ["id", "name", "label", "placeholder", "value", "isDisabled", "isReadOnly", "isLoading", "hint", "isInvalid", "isValid", "onChange"]);
    const [visible, setVisible] = useState(false);
    const changeHandler = useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event.target.value);
    }, [onChange]);
    const visibilityHandler = useCallback(() => {
        setVisible((prevVisible) => !prevVisible);
    }, []);
    return (jsx(DInput$1, Object.assign({ id: id, name: name, label: label, placeholder: placeholder, value: value, iconEnd: !visible ? 'eye-slash' : 'eye', type: !visible ? 'password' : 'text', isDisabled: isDisabled, isReadOnly: isReadOnly, isLoading: isLoading, hint: hint, isInvalid: isInvalid, isValid: isValid, onChange: changeHandler, onIconEndClick: visibilityHandler }, rest)));
}

function DInputPin({ id, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, placeholder = '•', type = 'text', isDisabled = false, isLoading = false, isSecret = false, iconFamilyClass, iconFamilyPrefix, characters = 4, innerInputMode = 'text', hint, isInvalid = false, isValid = false, onChange, }) {
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
    return (jsxs("div", { className: "d-input-pin", children: [label && (jsxs("label", { htmlFor: "pinIndex0", children: [label, labelIcon && (jsx(DIcon, { className: "d-input-pin-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxs("form", { id: id, className: "d-input-pin-controls", onInput: formChange, onSubmit: preventDefaultEvent, children: [Array.from({ length: characters }).map((_, index) => (jsx("input", Object.assign({ className: classNames({
                            'form-control': true,
                            'is-invalid': isInvalid,
                            'is-valid': isValid,
                        }), type: isSecret ? 'password' : type, "aria-describedby": `${id}State`, inputMode: innerInputMode, id: `pinIndex${index}`, name: `pin-${index}`, maxLength: 1, onChange: nextInput, onKeyDown: prevInput, onFocus: focusInput, onWheel: wheelInput, onClick: preventDefaultEvent, autoComplete: "off", placeholder: placeholder, disabled: isDisabled || isLoading, required: true }, type === 'number' && ({ min: 0, max: 9 })), index))), (isInvalid || isValid) && !isLoading && (jsx("span", { className: "input-group-text", id: `${id}State`, children: jsx(DIcon, { className: "d-input-pin-validation-icon", icon: isInvalid ? 'exclamation-circle' : 'check', familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) })), isLoading && (jsx("div", { className: "input-group-text d-input-pin-icon", children: jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] }));
}

function DInputSearch(_a) {
    var { id, name, label, placeholder, value, isDisabled, isReadOnly, isLoading, hint, isInvalid, isValid, onChange, onClick } = _a, rest = __rest(_a, ["id", "name", "label", "placeholder", "value", "isDisabled", "isReadOnly", "isLoading", "hint", "isInvalid", "isValid", "onChange", "onClick"]);
    const [internalValue, setInternalValue] = useState(value);
    useEffect(() => {
        setInternalValue(value);
    }, [value]);
    const changeHandler = useCallback((event) => {
        event.stopPropagation();
        setInternalValue(event.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    const clickHandler = useCallback(() => {
        onClick === null || onClick === void 0 ? void 0 : onClick(internalValue);
    }, [internalValue, onClick]);
    return (jsx(DInput$1, Object.assign({ id: id, name: name, label: label, placeholder: placeholder, value: internalValue, iconEnd: "search", isDisabled: isDisabled, isReadOnly: isReadOnly, isLoading: isLoading, hint: hint, isInvalid: isInvalid, isValid: isValid, onChange: changeHandler, onIconEndClick: clickHandler }, rest)));
}

function DList({ children, className, isFlush = false, isNumbered = false, isHorizontal = false, horizontalBreakpoint, }) {
    if (isFlush && isHorizontal) {
        throw new Error("Horizontal and Flush props don't work together");
    }
    return (jsx("div", { className: classNames('list-group', {
            'list-group-flush': isFlush && !isHorizontal,
            'list-group-numbered': isNumbered,
            'list-group-horizontal': isHorizontal && !horizontalBreakpoint,
        }, (isHorizontal && horizontalBreakpoint) && `list-group-horizontal-${horizontalBreakpoint}`, className), children: children }));
}

function DListItem({ children, className, isActive = false, isDisabled = false, theme, onClick, }) {
    const Tag = useMemo(() => (onClick ? 'button' : 'div'), [onClick]);
    return (jsx(Tag, Object.assign({}, Tag === 'button' && {
        onClick,
        type: 'button',
    }, { className: classNames('list-group-item list-group-item-action', theme ? `list-group-item-${theme}` : undefined, className, {
            active: isActive,
            disabled: isDisabled,
        }) }, isActive && { 'aria-current': true }, { children: children })));
}

function useToast() {
    const toast$1 = useCallback((message, { position = 'top-right', type = 'info', showClose = true, autoClose = false, } = {}) => {
        toast(({ closeToast }) => (jsx(DAlert, { type: type, showClose: showClose, onClose: closeToast, id: "alertID", children: message })), {
            transition: Slide,
            position,
            autoClose,
        });
    }, []);
    return {
        toast: toast$1,
    };
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

function DListItemMovement(_a) {
    var { description, date, amount, classNameMovement } = _a, props = __rest(_a, ["description", "date", "amount", "classNameMovement"]);
    const { format } = useFormatCurrency();
    const value = useMemo(() => {
        const valueFormatted = format(amount);
        if (amount > 0) {
            return {
                theme: 'text-success',
                valueFormatted,
            };
        }
        return {
            theme: 'text-danger',
            valueFormatted,
        };
    }, [format, amount]);
    return (jsx(DListItem, Object.assign({}, props, { children: jsxs("div", { className: classNames('d-flex justify-content-between align-items-center p-3 gap-3', classNameMovement), children: [jsxs("div", { className: "d-flex flex-column gap-1", children: [jsx("span", { className: "fs-6", children: description }), jsx("span", { className: "small text-gray-700", children: date })] }), jsx("span", { className: classNames('fs-6', value.theme), children: value.valueFormatted })] }) })));
}

function DModal({ name, className = '', isStatic, isScrollable, isCentered, isFullScreen, fullScreenFrom, modalSize, children, }) {
    const fullScreenClass = useMemo(() => {
        if (isFullScreen) {
            if (fullScreenFrom) {
                return `modal-fullscreen-${fullScreenFrom}-down`;
            }
            return 'modal-fullscreen';
        }
        return '';
    }, [fullScreenFrom, isFullScreen]);
    const generateClasses = useMemo(() => ({
        'modal fade show': true,
        [`${className}`]: !!className,
    }), [className]);
    const generateModalDialogClasses = useMemo(() => (Object.assign({ 'modal-dialog': true, 'modal-dialog-centered': !!isCentered, 'modal-dialog-scrollable': !!isScrollable, [fullScreenClass]: !!isFullScreen }, modalSize && { [`modal-${modalSize}`]: true })), [fullScreenClass, isCentered, isFullScreen, isScrollable, modalSize]);
    return (jsx("div", Object.assign({ className: classNames(generateClasses), id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false" }, isStatic && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), { children: jsx("div", { className: classNames(generateModalDialogClasses), children: jsx("div", { className: "modal-content", children: children }) }) })));
}

function DModalBody({ children }) {
    return (jsx("div", { className: "d-modal-slot modal-body", children: children }));
}

function DModalFooter({ actionPlacement = 'fill', children, }) {
    return (jsxs(Fragment, { children: [jsx("div", { className: "d-modal-separator" }), jsx("div", { className: `d-modal-slot modal-footer d-modal-action-${actionPlacement}`, children: children })] }));
}

function DModalHeader({ showCloseButton, onClose, children, }) {
    return (jsxs("div", { className: "modal-header", children: [showCloseButton && (jsx("button", { type: "button", className: "d-modal-close", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: "x-lg" }) })), children] }));
}

function DOffcanvas({ name, className, isStatic, isScrollable, openFrom = 'end', children, }) {
    return (jsx("div", Object.assign({ className: classNames('offcanvas show', {
            [`offcanvas-${openFrom}`]: openFrom,
        }, className), id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false" }, isStatic && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), isScrollable && ({
        [`data-${PREFIX_BS}scroll`]: 'true',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), { children: children })));
}

function DOffcanvasBody({ children }) {
    return (jsx("div", { className: "d-offcanvas-slot offcanvas-body", children: children }));
}

function DOffcanvasFooter({ footerActionPlacement = 'fill', children, }) {
    return (jsx("div", { className: `d-offcanvas-slot d-offcanvas-footer d-offcanvas-action-${footerActionPlacement}`, children: children }));
}

function DOffcanvasHeader({ showCloseButton, onClose, children, }) {
    return (jsxs("div", { className: "offcanvas-header", children: [jsx("div", { className: "d-offcanvas-slot", children: children }), showCloseButton && (jsx("button", { type: "button", className: "d-offcanvas-close", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: "x-lg" }) }))] }));
}

function DPaginator(_a) {
    var { className, nextLabel, previousLabel, showArrows = true, page, onPageChange } = _a, props = __rest(_a, ["className", "nextLabel", "previousLabel", "showArrows", "page", "onPageChange"]);
    return (jsx(ResponsivePagination, Object.assign({ extraClassName: classNames('pagination', className), nextClassName: classNames('arrow arrow-next', !nextLabel && 'no-label'), nextLabel: nextLabel, previousClassName: classNames('arrow arrow-prev', !previousLabel && 'no-label'), previousLabel: previousLabel, renderNav: showArrows, current: page, onPageChange: onPageChange }, props)));
}

function DPopover({ children, renderComponent, isOpen, setEventIsOpen, adjustContentToRender = false, }) {
    const [innerIsOpen, setInnerIsOpen] = useState(false);
    useEffect(() => {
        setInnerIsOpen(isOpen);
    }, [isOpen]);
    const onOpenChange = useCallback((value) => {
        setInnerIsOpen(value);
        if (setEventIsOpen) {
            setEventIsOpen(value);
        }
    }, [setEventIsOpen]);
    const { refs, floatingStyles, context } = useFloating({
        open: innerIsOpen,
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
    return (jsxs("div", { className: "d-popover", children: [jsx("div", Object.assign({ ref: refs.setReference }, getReferenceProps(), { children: renderComponent(innerIsOpen) })), innerIsOpen && (jsx(FloatingFocusManager, { context: context, modal: false, children: jsx("div", Object.assign({ className: classNames('d-popover-content', {
                        'w-100': adjustContentToRender,
                    }), ref: refs.setFloating, style: floatingStyles, "aria-labelledby": headingId }, getFloatingProps(), { children: children })) }))] }));
}

function DProgress({ currentValue, minValue = 0, maxValue = 100, hideCurrentValue = false, enableStripedAnimation = false, }) {
    const formatProgress = useMemo(() => `${currentValue}%`, [currentValue]);
    const generateClasses = useMemo(() => ({
        'progress-bar': true,
        'progress-bar-striped progress-bar-animated': enableStripedAnimation,
    }), [enableStripedAnimation]);
    return (jsx("div", { className: "progress", children: jsx("div", { className: classNames(generateClasses), role: "progressbar", "aria-label": "Progress bar", style: { width: `${currentValue}%` }, "aria-valuenow": currentValue, "aria-valuemin": minValue, "aria-valuemax": maxValue, children: !hideCurrentValue && formatProgress }) }));
}

function DQuickActionButton({ line1, line2, actionLinkText, actionLinkTheme = 'secondary', actionIcon, secondaryActionIcon, actionIconFamilyClass, actionIconFamilyPrefix, representativeImage, representativeIcon, representativeIconTheme = 'secondary', representativeIconHasCircle = false, representativeIconFamilyClass, representativeIconFamilyPrefix, onClick, onClickSecondary, style, }) {
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
    return (jsxs(Tag, { className: "d-quick-action-button", onClick: !actionLinkText ? globalClickHandler : undefined, style: style, children: [representativeIcon && (jsx(DIcon, { className: "d-quick-action-button-representative-icon", size: representativeIconHasCircle
                    ? `var(--${PREFIX_BS}quick-action-button-representative-icon-size)`
                    : `var(--${PREFIX_BS}quick-action-button-representative-image-size)`, icon: representativeIcon, hasCircle: representativeIconHasCircle, theme: representativeIconTheme, familyClass: representativeIconFamilyClass, familyPrefix: representativeIconFamilyPrefix })), representativeImage && (jsx("img", { className: "d-quick-action-button-representative-image", src: representativeImage, alt: "" })), jsx("div", { className: "d-quick-action-button-content", children: jsxs("div", { className: "d-quick-action-button-text", children: [jsx("span", { className: "d-quick-action-button-line1", children: line1 }), jsx("small", { className: "d-quick-action-button-line2", children: line2 })] }) }), secondaryActionIcon && (jsx(DButton, { className: "d-quick-action-button-secondary-action-link", type: "button", variant: "link", iconStart: secondaryActionIcon, iconStartFamilyClass: actionIconFamilyClass, iconStartFamilyPrefix: actionIconFamilyPrefix, theme: actionLinkTheme, onClick: secondaryActionLinkClickHandler, isStopPropagationEnabled: true })), actionLinkText && !actionIcon && (jsx(DButton, { className: "d-quick-action-button-action-link", type: "button", variant: "link", theme: actionLinkTheme, text: actionLinkText, onClick: actionLinkClickHandler, isStopPropagationEnabled: true })), actionIcon && !actionLinkText && (jsx(DIcon, { className: "d-quick-action-button-action-icon", icon: actionIcon, size: `var(--${PREFIX_BS}quick-action-button-action-icon-size)`, familyClass: actionIconFamilyClass, familyPrefix: actionIconFamilyPrefix }))] }));
}

function DQuickActionCheck({ id, name, value, line1, line2, line3, isChecked, onChange, }) {
    const changeHandler = useCallback((event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    return (jsxs("label", { className: "d-quick-action-check", htmlFor: id, children: [jsx(DInputCheck, { id: id, type: "radio", name: name, value: value, isChecked: isChecked, onChange: changeHandler }), jsxs("div", { className: "d-quick-action-check-detail", children: [jsx("span", { className: "d-quick-action-check-line1", children: line1 }), jsx("span", { className: "d-quick-action-check-line2", children: line2 })] }), jsx("span", { className: "d-quick-action-check-line3", children: line3 })] }));
}

function DQuickActionSelect({ id, name, value, line1, line2, isSelected = false, onChange, }) {
    const innerRef = useRef(null);
    const changeHandler = useCallback((event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    useEffect(() => {
        if (innerRef.current) {
            innerRef.current.checked = isSelected;
        }
    }, [isSelected]);
    return (jsxs("label", { className: "d-quick-action-select", htmlFor: id, children: [jsx("input", { ref: innerRef, id: id, type: "radio", name: name, value: value, onChange: changeHandler }), jsx("span", { className: "d-quick-action-select-line1", children: line1 }), jsx("span", { className: "d-quick-action-select-line2", children: line2 })] }));
}

function DQuickActionSwitch({ id, name, label, hint, isChecked, isDisabled, onClick, }) {
    const clickHandler = useCallback((event) => {
        event.stopPropagation();
        onClick === null || onClick === void 0 ? void 0 : onClick(isChecked);
    }, [isChecked, onClick]);
    return (jsxs("button", { className: "d-quick-action-switch", type: "button", onClick: clickHandler, children: [jsxs("div", { className: "d-quick-action-switch-content", children: [jsx(DInputSwitch, { id: id, name: name, isDisabled: isDisabled, isChecked: isChecked, isReadonly: true }), jsx("label", { className: "d-quick-action-switch-label", htmlFor: id, children: label })] }), jsx("div", { className: "d-quick-action-switch-hint", children: hint })] }));
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

function DStepper$2({ options, currentStep, successIcon = 'check', isVertical = false, }) {
    if (currentStep < 1 || currentStep > options.length) {
        throw new Error('Current step should be in the range from 1 to options length');
    }
    return (jsx("div", { className: classNames({
            'd-stepper-desktop': true,
            'is-vertical': isVertical,
        }), children: options.map(({ label, value }) => (jsxs("div", { className: "d-step", children: [jsx("div", { className: "d-step-value", children: jsx("div", { className: classNames({
                            'd-step-icon-container': true,
                            'd-step-check': value < currentStep,
                            'd-step-current': value === currentStep,
                        }), children: value < currentStep
                            ? (jsx(DIcon, { icon: successIcon, className: "d-step-icon" }))
                            : value }) }), jsx("div", { className: "d-step-label", children: label })] }, value))) }));
}

function DStepper$1({ options, currentStep, }) {
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
    return (jsxs("div", { className: "d-stepper", children: [jsx("div", { className: "d-step-bar", style: { background: progressStyle }, children: jsx("p", { className: "d-step-number", children: `${currentStep}/${options.length}` }) }), jsx("div", { className: "d-step-info", children: Object.keys(currentOption).length > 0 && (jsxs(Fragment, { children: [jsx("div", { className: "d-step-label", children: currentOption.label }), jsx("div", { className: "d-step-description", children: currentOption.description || '' })] })) })] }));
}

function DStepper({ options, currentStep, successIcon = 'check', isVertical = false, breakpoint = 'lg', }) {
    return (jsxs(Fragment, { children: [jsx("div", { className: `d-block d-${breakpoint}-none`, children: jsx(DStepper$1, { options: options, currentStep: currentStep }) }), jsx("div", { className: `d-none d-${breakpoint}-block`, children: jsx(DStepper$2, { options: options, currentStep: currentStep, successIcon: successIcon, isVertical: isVertical }) })] }));
}

const TabContext = createContext(undefined);
function DTabs({ children, defaultSelected, onChange, options, className, isVertical, }) {
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
                'd-tabs-vertical': isVertical,
            }), children: [jsx("nav", { className: "nav", children: options.map((option) => (jsx("button", { id: `${option.tab}Tab`, className: classNames('nav-link', {
                            active: option.tab === selected,
                        }, className), type: "button", role: "tab", "aria-controls": `${option.tab}Pane`, "aria-selected": option.tab === selected, disabled: option.isDisabled, onClick: () => onSelect(option), children: option.label }, option.label))) }), jsx("div", { className: "tab-content", children: children })] }) }));
}
function useTabContext() {
    const context = useContext(TabContext);
    if (context === undefined) {
        throw new Error('useTabContext was used outside of MTab');
    }
    return context;
}

function DTabContent({ tab, children }) {
    const { isSelected } = useTabContext();
    if (!isSelected(tab)) {
        return null;
    }
    return (jsx("div", { className: "tab-pane fade show active", id: `${tab}Pane`, role: "tabpanel", tabIndex: 0, "aria-labelledby": `${tab}Tab`, children: children }));
}

const TOOLTIP_FONT_SIZE_BY_SIZE = {
    sm: `var(--${PREFIX_BS}ref-fs-small)`,
    default: `var(--${PREFIX_BS}body-font-size)`,
    lg: `var(--${PREFIX_BS}ref-fs-6)`,
};
const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 4;
const GAP = 2;
function DTooltip({ classNameContainer, className, offSet = ARROW_HEIGHT + GAP, padding, withFocus = false, withClick = false, withHover = true, isOpen = false, placement = 'top', size, Component, children, }) {
    const [open, setOpen] = useState(isOpen);
    const styleVariables = useMemo(() => {
        const defaultFontSize = size
            ? TOOLTIP_FONT_SIZE_BY_SIZE[size]
            : TOOLTIP_FONT_SIZE_BY_SIZE.default;
        return {
            background: `var(--${PREFIX_BS}tooltip-bg, var(--${PREFIX_BS}tooltip-component-bg, var(--${PREFIX_BS}secondary)))`,
            borderRadius: `var(--${PREFIX_BS}tooltip-border-radius, var(--${PREFIX_BS}tooltip-component-border-radius, var(--${PREFIX_BS}border-radius)))`,
            color: `var(--${PREFIX_BS}tooltip-color, var(--${PREFIX_BS}tooltip-component-color, var(--${PREFIX_BS}white)))`,
            fontSize: `var(--${PREFIX_BS}tooltip-font-size, var(--${PREFIX_BS}tooltip-component-font-size, ${defaultFontSize}))`,
            padding: `var(--${PREFIX_BS}tooltip-padding, var(--${PREFIX_BS}tooltip-component-padding, var(--${PREFIX_BS}ref-spacer-2)))`,
            maxWidth: `var(--${PREFIX_BS}tooltip-max-width, var(--${PREFIX_BS}tooltip-component-max-width, 300px))`,
        };
    }, [size]);
    const arrowRef = useRef(null);
    const { refs, context, floatingStyles, } = useFloating({
        open,
        onOpenChange: setOpen,
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
    return (jsxs(Fragment, { children: [jsx("div", Object.assign({ className: className, ref: refs.setReference }, getReferenceProps(), { children: Component })), jsx(FloatingPortal, { children: open && (jsxs("div", Object.assign({ className: classNameContainer, ref: refs.setFloating, style: Object.assign(Object.assign({}, floatingStyles), styleVariables) }, getFloatingProps(), { children: [jsx(FloatingArrow, { ref: arrowRef, context: context, style: {
                                fill: styleVariables.background,
                            }, width: ARROW_WIDTH, height: ARROW_HEIGHT }), children] }))) })] }));
}

function DToastContainer({ style, position = 'top-right', }) {
    return (jsx(ToastContainer, { toastClassName: () => 'shadow-none p-0 cursor-default', position: position, autoClose: false, hideProgressBar: true, closeOnClick: false, closeButton: false, transition: Slide, style: style }));
}

export { DAlert, DBadge, DBoxFile, DButton, DCard, DCardAccount, DCardBody, DCardFooter, DCardHeader, DCarousel, DCarouselSlide, DChip, DCollapse, DCollapseIconText, DCurrencyText, DDatePicker, DFormikInput, DFormikInputCurrency, DFormikInputSelect, DIcon, DInput$1 as DInput, DInputCheck, DInputCounter, DInputCurrency, DInputCurrencyBase, DInputPassword, DInputPin, DInputSearch, DInputSelect, DInputSwitch, DList, DListItem, DListItemMovement, DModal, DModalBody, DModalFooter, DModalHeader, DOffcanvas, DOffcanvasBody, DOffcanvasFooter, DOffcanvasHeader, DPaginator, DPermissionGroup, DPermissionItem, DPopover, DProgress, DQuickActionButton, DQuickActionCheck, DQuickActionSelect, DQuickActionSwitch, DSkeleton, DStepper, DStepper$2 as DStepperDesktop, DStepper$1 as DStepperMobile, DSummaryCard, DTabContent, DTabs, DToastContainer, DTooltip, LiquidContext$1 as LiquidContext, LiquidContextProvider, ModalContext, ModalContextProvider, OffcanvasContext, OffcanvasContextProvider, configureI8n as configureI18n, formatCurrency, liquidParser, useFormatCurrency, useLiquidContext, useModalContext, useOffcanvasContext, useScreenshot, useScreenshotDownload, useScreenshotWebShare, useTabContext, useToast };
//# sourceMappingURL=index.esm.js.map
