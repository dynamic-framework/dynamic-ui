'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('classnames');
var tslib = require('tslib');
var reactDropzone = require('react-dropzone');
var reactSplide = require('@splidejs/react-splide');
var currency = require('currency.js');
var DatePicker = require('react-datepicker');
var dateFns = require('date-fns');
var ResponsivePagination = require('react-responsive-pagination');
var react = require('@floating-ui/react');
var ContentLoader = require('react-content-loader');
var reactToastify = require('react-toastify');
var i18n = require('i18next');
var reactI18next = require('react-i18next');
var reactDom = require('react-dom');

function DBadge({ text, isDot = false, theme = 'primary', id, className, style, }) {
    const generateClasses = React.useMemo(() => ({
        badge: true,
        'badge-dot': isDot,
        [`badge-${theme}`]: !!theme,
    }), [isDot, theme]);
    return (jsxRuntime.jsx("span", Object.assign({ className: classNames(generateClasses, className), style: style }, id && { id }, { children: jsxRuntime.jsx("span", { children: text }) })));
}

function DInputSwitch({ label, id, name, isChecked, isDisabled, isReadonly, className, style, onChange, }) {
    const [internalIsChecked, setInternalIsChecked] = React.useState(isChecked);
    React.useEffect(() => {
        setInternalIsChecked(isChecked);
    }, [isChecked]);
    const changeHandler = React.useCallback((event) => {
        const value = event.currentTarget.checked;
        setInternalIsChecked(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (jsxRuntime.jsxs("div", { className: "form-check form-switch", children: [jsxRuntime.jsx("input", { id: id, name: name, onChange: isReadonly ? () => false : changeHandler, className: classNames('form-check-input', className), style: style, type: "checkbox", role: "switch", checked: internalIsChecked, disabled: isDisabled }), label && (jsxRuntime.jsx("label", { className: "form-check-label", htmlFor: id, children: label }))] }));
}

function DPermissionItem({ permission, permissionState, onChange, onAction = () => { }, }) {
    return (jsxRuntime.jsxs("div", { role: "button", tabIndex: 0, onKeyDown: () => { }, className: "d-flex permission-item align-items-center", onClick: onAction, children: [jsxRuntime.jsx("span", { className: "flex-grow-1 label", children: permission.label }), permission.type === 'custom' && (jsxRuntime.jsx(DBadge, { theme: "tertiary", text: permissionState })), jsxRuntime.jsx(DInputSwitch, { id: permission.id, isChecked: !!permission.value, isDisabled: !permission.enabled, onChange: (isChecked) => onChange(isChecked) })] }));
}

function DPermissionGroup({ title, description, permissionState, permissionList, onChangePermission, onCustomAction = () => { }, }) {
    return (jsxRuntime.jsxs("div", { className: "row operation-group g-0 mb-3 mb-lg-0", children: [jsxRuntime.jsxs("div", { className: "col-12 col-lg-4 d-flex flex-column justify-content-center", children: [jsxRuntime.jsx("h6", { className: "fw-bold mb-3 mb-lg-2", children: title }), jsxRuntime.jsx("p", { className: "fs-8 d-none d-lg-block m-0", children: description })] }), jsxRuntime.jsx("div", { className: "col-12 offset-lg-1 col-lg-7", children: permissionList.map((permission) => (jsxRuntime.jsx(DPermissionItem, { permission: permission, permissionState: permissionState, onChange: (isChecked) => onChangePermission(permission, isChecked), onAction: () => onCustomAction(permission) }, permission.id))) })] }));
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

function DIcon({ icon, theme, style, className, size = '1.5rem', isLoading = false, loadingDuration = 1.8, hasCircle = false, circleSize = `calc(var(--${PREFIX_BS}icon-component-size) * 1)`, color, backgroundColor, familyClass = 'bi', familyPrefix = 'bi-', }) {
    const colorStyle = React.useMemo(() => {
        if (color) {
            return { [`--${PREFIX_BS}component-color`]: color };
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
    const generateClasses = React.useMemo(() => (Object.assign({ 'd-icon': true, [familyClass]: true, [`${familyPrefix}${icon}`]: true, 'd-icon-loading': isLoading }, className && { [className]: true })), [familyClass, familyPrefix, icon, className, isLoading]);
    return (jsxRuntime.jsx("i", { className: classNames(generateClasses), style: generateStyleVariables }));
}

function DSummaryCard({ title, description, icon, iconSize, iconTheme, Summary, }) {
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("h6", { className: "fw-bold fs-6", children: title }), jsxRuntime.jsx("p", { className: "fs-8", children: description }), jsxRuntime.jsxs("div", { className: "bg-white rounded p-4 d-flex gap-3 shadow-sm text-gray-700 fs-8", children: [jsxRuntime.jsx(DIcon, { icon: icon, theme: iconTheme, size: iconSize }), Summary] })] }));
}

function DAlert({ type = 'light', icon, iconFamilyClass, iconFamilyPrefix, showIcon = false, showClose, onClose, children, id, className, style, }) {
    const generateClasses = React.useMemo(() => (Object.assign({ alert: true, [`alert-${type}`]: true, 'fade show': !!showClose }, className && { [className]: true })), [type, showClose, className]);
    const getIcon = React.useMemo(() => icon || ALERT_TYPE_ICON[type] || '', [icon, type]);
    const generateStyleVariables = React.useMemo(() => (Object.assign(Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}alert-component-separator-opacity`]: '0.3' }), type === 'light' && {
        [`--${PREFIX_BS}alert-component-icon-color`]: `var(--${PREFIX_BS}secondary)`,
    })), [style, type]);
    return (jsxRuntime.jsxs("div", { className: classNames(generateClasses), style: generateStyleVariables, role: "alert", id: id, children: [(showIcon || icon) && (jsxRuntime.jsx(DIcon, Object.assign({ className: "alert-icon", icon: getIcon }, iconFamilyClass && { familyClass: iconFamilyClass }, iconFamilyPrefix && { familyPrefix: iconFamilyPrefix }))), jsxRuntime.jsx("div", { className: "alert-text", children: children }), showClose && (jsxRuntime.jsx("div", { className: "alert-separator" })), showClose && (jsxRuntime.jsx("button", { type: "button", className: "btn-close", "aria-label": "Close", onClick: onClose, children: jsxRuntime.jsx(DIcon, { className: "alert-close-icon", icon: "x-lg", familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) }))] }));
}

function DBoxFile(_a) {
    var { icon = 'cloud-upload', iconFamilyClass, iconFamilyPrefix, isDisabled = false, children, className, style } = _a, dropzoneOptions = tslib.__rest(_a, ["icon", "iconFamilyClass", "iconFamilyPrefix", "isDisabled", "children", "className", "style"]);
    const { acceptedFiles, getRootProps, getInputProps, } = reactDropzone.useDropzone(Object.assign({ disabled: isDisabled }, dropzoneOptions));
    return (jsxRuntime.jsxs("section", { className: classNames('d-box-file', {
            'd-box-file-selected': !!acceptedFiles.length,
        }, className), style: style, children: [jsxRuntime.jsxs("div", Object.assign({}, getRootProps({
                className: classNames('d-box-file-dropzone', {
                    disabled: isDisabled,
                }),
            }), { children: [jsxRuntime.jsx("input", Object.assign({}, getInputProps())), jsxRuntime.jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }), jsxRuntime.jsx("div", { className: "d-box-content", children: children })] })), !!acceptedFiles.length && (jsxRuntime.jsx("aside", { className: "d-box-files", children: acceptedFiles.map((file) => (jsxRuntime.jsx("div", { className: "d-box-files-text", children: `${file.name} - ${file.size} bytes` }, file.name))) }))] }));
}

function DButton({ theme = 'primary', size, variant, state, text = '', iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, value, type = 'button', isPill = false, isLoading = false, isDisabled = false, isStopPropagationEnabled = true, className, onClick, }) {
    const generateClasses = React.useMemo(() => {
        const variantClass = variant
            ? `btn-${variant}-${theme}`
            : `btn-${theme}`;
        return Object.assign(Object.assign(Object.assign({ btn: true, [variantClass]: true }, size && { [`btn-${size}`]: true }), (state && state !== 'disabled') && { [state]: true }), { loading: isLoading });
    }, [variant, theme, size, state, isLoading]);
    const generateStyleVariables = React.useMemo(() => {
        if (isPill) {
            return {
                [`--${PREFIX_BS}btn-component-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
                [`--${PREFIX_BS}btn-component-lg-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
                [`--${PREFIX_BS}btn-component-sm-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
            };
        }
        return {};
    }, [isPill]);
    const clickHandler = React.useCallback((event) => {
        if (isStopPropagationEnabled) {
            event.stopPropagation();
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    }, [isStopPropagationEnabled, onClick]);
    return (jsxRuntime.jsxs("button", Object.assign({ className: classNames(generateClasses, className), style: generateStyleVariables, type: type, disabled: state === 'disabled' || isLoading || isDisabled }, value && { value }, { onClick: clickHandler, children: [iconStart && (jsxRuntime.jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })), (text && !isLoading) && (jsxRuntime.jsx("span", { children: text })), isLoading && (jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) })), iconEnd && (jsxRuntime.jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix }))] })));
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

function DCard({ className, style, children, }) {
    return (jsxRuntime.jsx("div", { style: style, className: classNames('card', className), children: children }));
}
var DCard$1 = Object.assign(DCard, {
    Header: DCardHeader,
    Body: DCardBody,
    Footer: DCardFooter,
});

function DCardAccount({ className, style, icon, theme, name, number, balance, balanceText, onClick, actionText, }) {
    return (jsxRuntime.jsx(DCard$1, { className: classNames('d-card-account', className), style: style, children: jsxRuntime.jsxs(DCard$1.Body, { children: [jsxRuntime.jsxs("div", { className: "d-flex gap-3 align-items-center", children: [jsxRuntime.jsx(DIcon, { icon: icon, hasCircle: true, theme: theme, size: "1.5rem" }), jsxRuntime.jsxs("div", { className: "d-block flex-grow-1", children: [jsxRuntime.jsx("p", { className: "text-gray-700", children: name }), jsxRuntime.jsx("small", { className: "text-gray-500", children: number })] })] }), jsxRuntime.jsxs("div", { className: "d-block", children: [jsxRuntime.jsx("p", { className: "fw-bold fs-6 text-body", children: balance }), jsxRuntime.jsx("small", { className: "text-gray-700", children: balanceText })] }), jsxRuntime.jsx("div", { className: "d-flex justify-content-end", children: jsxRuntime.jsx(DButton, { text: actionText, variant: "link", size: "sm", theme: "secondary", iconEnd: "chevron-right", onClick: onClick }) })] }) }));
}

function DCarouselSlide(_a) {
    var { className } = _a, props = tslib.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(reactSplide.SplideSlide, Object.assign({ className: classNames('d-carousel-slide', className) }, props)));
}

function DCarousel(_a) {
    var { children, className, style, options } = _a, props = tslib.__rest(_a, ["children", "className", "style", "options"]);
    return (jsxRuntime.jsx(reactSplide.Splide, Object.assign({ className: classNames('d-carousel', className), style: style, options: Object.assign(Object.assign({}, options), { classes: {
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

function DChip({ theme = 'primary', text, icon, iconFamilyClass, iconFamilyPrefix, showClose = false, className, style, onClose, }) {
    const generateClasses = React.useMemo(() => ({
        'd-chip': true,
        [`d-chip-${theme}`]: !!theme,
    }), [theme]);
    return (jsxRuntime.jsxs("span", { className: classNames(generateClasses, className), style: style, children: [icon && (jsxRuntime.jsx("div", { className: "d-chip-icon-container", children: jsxRuntime.jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) })), jsxRuntime.jsx("span", { children: text }), showClose && (jsxRuntime.jsx("button", { type: "button", className: "d-chip-icon-container", onClick: onClose, children: jsxRuntime.jsx(DIcon, { icon: "x-lg" }) }))] }));
}

function DCollapse({ id, className, style, Component, hasSeparator = false, defaultCollapsed = false, onChange, children, }) {
    const [toggle, setToggle] = React.useState(defaultCollapsed);
    const onChangeCollapse = () => setToggle((prev) => !prev);
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
    return (jsxRuntime.jsxs("div", { id: id, className: classNames('collapse-container', className), style: style, children: [jsxRuntime.jsxs("button", { className: "collapse-button", type: "button", onClick: onChangeCollapse, children: [jsxRuntime.jsx("div", { className: "flex-grow-1", children: Component }), jsxRuntime.jsx(DIcon, { color: `var(--${PREFIX_BS}gray)`, size: `var(--${PREFIX_BS}ref-fs-small)`, icon: toggle ? 'chevron-up' : 'chevron-down' })] }), toggle && (jsxRuntime.jsx("div", { className: classNames({
                    'collapse-body': true,
                }), style: generateStyles, children: children }))] }));
}

function DCollapseIconText({ children, icon, iconSize = '1.5rem', iconTheme = 'primary', title, iconFamilyClass, iconFamilyPrefix, className, style, }) {
    return (jsxRuntime.jsx(DCollapse, { defaultCollapsed: true, className: classNames('d-collapse-icon-text', className), style: style, Component: (jsxRuntime.jsxs("div", { className: "d-collapse-icon-text-header", children: [jsxRuntime.jsx(DIcon, { icon: icon, size: iconSize, theme: iconTheme, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, hasCircle: true }), jsxRuntime.jsx("span", { className: "d-collapse-icon-text-title", children: title })] })), children: children }));
}

const defaultState = {
    language: 'en',
    currency: {
        symbol: '$',
        precision: 2,
        separator: ',',
        decimal: '.',
    },
};
const DContext = React.createContext(defaultState);
function DContextProvider({ language = defaultState.language, currency = defaultState.currency, children, }) {
    const value = React.useMemo(() => ({
        language,
        currency,
    }), [language, currency]);
    return (jsxRuntime.jsx(DContext.Provider, { value: value, children: children }));
}
function useDContext() {
    const context = React.useContext(DContext);
    if (context === undefined) {
        throw new Error('useDContext was used outside of DContextProvider');
    }
    return context;
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
    const [list, setList] = React.useState(initialList);
    const { length } = list;
    const push = React.useCallback((item) => {
        setList((prevList) => [
            ...prevList,
            item,
        ]);
    }, []);
    const pop = React.useCallback(() => {
        setList((prevList) => {
            if (prevList.length === 0) {
                return prevList;
            }
            const [, ...newList] = prevList;
            return newList;
        });
    }, []);
    const peek = React.useCallback(() => {
        if (list.length > 0) {
            return list[list.length - 1];
        }
        return undefined;
    }, [list]);
    const clear = () => setList([]);
    const isEmpty = React.useCallback(() => list.length === 0, [list]);
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

const ModalContext = React.createContext(undefined);
function enhanceModal(Modal, callbacks) {
    return function EnhancedModal(_a) {
        var { name, payload } = _a, otherProps = tslib.__rest(_a, ["name", "payload"]);
        React.useEffect(() => {
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
        jsxRuntime.jsx(Modal, Object.assign({ name: name, payload: payload }, otherProps)));
    };
}
function ModalContextProvider({ portalName, children, availableModals, }) {
    const [hasPortal, setHasPortal] = React.useState(false);
    React.useEffect(() => {
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
    React.useEffect(() => {
        if (stack.length) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0';
        }
        else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        }
    }, [stack.length]);
    const openModal = React.useCallback((modalName, { payload, callbacks } = { payload: {} }) => {
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
    const closeModal = React.useCallback((context = { fromModal: false }) => {
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
    const value = React.useMemo(() => ({
        stack,
        openModal,
        closeModal,
    }), [stack, openModal, closeModal]);
    return (jsxRuntime.jsxs(ModalContext.Provider, { value: value, children: [children, hasPortal && reactDom.createPortal(jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [stack.map(({ Component, modalName, callbacks, payload, }) => {
                        const EnhancedComponent = enhanceModal(Component, callbacks);
                        return (jsxRuntime.jsx(EnhancedComponent, { name: modalName, payload: payload, openModal: openModal, closeModal: closeModal }, modalName));
                    }), !!stack.length && jsxRuntime.jsx("div", { className: "modal-backdrop fade show" })] }), document.getElementById(portalName))] }));
}
function useModalContext() {
    const context = React.useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModalContext was used outside of ModalContextProvider');
    }
    return context;
}

const OffcanvasContext = React.createContext(undefined);
function enhanceOffcanvas(Offcanvas, callbacks) {
    return function EnhancedOffcanvas(_a) {
        var { name, payload } = _a, otherProps = tslib.__rest(_a, ["name", "payload"]);
        React.useEffect(() => {
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
        jsxRuntime.jsx(Offcanvas, Object.assign({ name: name, payload: payload }, otherProps)));
    };
}
function OffcanvasContextProvider({ portalName, children, availableOffcanvas, }) {
    const [hasPortal, setHasPortal] = React.useState(false);
    React.useEffect(() => {
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
    React.useEffect(() => {
        if (stack.length) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0';
        }
        else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        }
    }, [stack.length]);
    const openOffcanvas = React.useCallback((offcanvasName, { payload, callbacks } = { payload: {} }) => {
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
    const closeOffcanvas = React.useCallback((context = { fromOffcanvas: false }) => {
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
    const value = React.useMemo(() => ({
        stack,
        openOffcanvas,
        closeOffcanvas,
    }), [stack, openOffcanvas, closeOffcanvas]);
    return (jsxRuntime.jsxs(OffcanvasContext.Provider, { value: value, children: [children, hasPortal && reactDom.createPortal(jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [stack.map(({ Component, offcanvasName, callbacks, payload, }) => {
                        const EnhancedComponent = enhanceOffcanvas(Component, callbacks);
                        return (jsxRuntime.jsx(EnhancedComponent, { name: offcanvasName, payload: payload, openOffcanvas: openOffcanvas, closeOffcanvas: closeOffcanvas }, offcanvasName));
                    }), !!stack.length && jsxRuntime.jsx("div", { className: "offcanvas-backdrop fade show" })] }), document.getElementById(portalName))] }));
}
function useOffcanvasContext() {
    const context = React.useContext(OffcanvasContext);
    if (context === undefined) {
        throw new Error('useOffcanvasContext was used outside of OffcanvasContextProvider');
    }
    return context;
}

function formatCurrency(amount, options) {
    return currency(amount, options).format();
}

function useFormatCurrency(...args) {
    const { currency } = useDContext();
    const format = React.useCallback((value) => formatCurrency(value, currency), [currency]);
    const values = (args || []).map((value) => (formatCurrency(value !== null && value !== void 0 ? value : 0, currency)));
    return {
        format,
        values,
    };
}

function DCurrencyText({ value, className, style, }) {
    const { values: [valueFormatted] } = useFormatCurrency(value);
    return (jsxRuntime.jsx("span", { className: className, style: style, children: valueFormatted }));
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
    var { id, style, className, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, disabled = false, readOnly = false, loading = false, iconFamilyClass, iconFamilyPrefix, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, hint, invalid = false, valid = false, inputStart, value, onChange, onIconStartClick, onIconEndClick } = _a, inputProps = tslib.__rest(_a, ["id", "style", "className", "label", "labelIcon", "labelIconFamilyClass", "labelIconFamilyPrefix", "disabled", "readOnly", "loading", "iconFamilyClass", "iconFamilyPrefix", "iconStart", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconEnd", "iconEndFamilyClass", "iconEndFamilyPrefix", "hint", "invalid", "valid", "inputStart", "value", "onChange", "onIconStartClick", "onIconEndClick"]);
    const inputRef = useProvidedRefOrCreate(ref);
    const handleOnChange = React.useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event.currentTarget.value);
    }, [onChange]);
    const handleOnIconStartClick = React.useCallback(() => {
        onIconStartClick === null || onIconStartClick === void 0 ? void 0 : onIconStartClick(value);
    }, [onIconStartClick, value]);
    const handleOnIconEndClick = React.useCallback(() => {
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick(value);
    }, [onIconEndClick, value]);
    return (jsxRuntime.jsxs("div", { className: classNames({
            'd-input': true,
            className: !!className,
        }), style: style, children: [label && (jsxRuntime.jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsxRuntime.jsx(DIcon, { className: "d-input-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxRuntime.jsxs("div", { className: "d-input-control", children: [jsxRuntime.jsxs("div", { className: classNames({
                            'input-group': true,
                            'has-validation': invalid,
                            disabled: disabled || loading,
                        }), children: [!!inputStart && (jsxRuntime.jsx("div", { className: "input-group-text", children: inputStart })), iconStart && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: handleOnIconStartClick, disabled: disabled || loading, children: iconStart && (jsxRuntime.jsx(DIcon, { className: "d-input-icon", icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })) })), jsxRuntime.jsx("input", Object.assign({ ref: inputRef, id: id, className: classNames('form-control', {
                                    'is-invalid': invalid,
                                    'is-valid': valid,
                                }), "aria-label": label, disabled: disabled || loading, readOnly: readOnly, "aria-describedby": `${id}Add ${id}Hint`, value: value, onChange: handleOnChange }, inputProps)), ((invalid || valid) && !iconEnd && !loading) && (jsxRuntime.jsx("span", { className: "input-group-text", id: `${id}State`, children: jsxRuntime.jsx(DIcon, { className: "d-input-validation-icon", icon: invalid ? 'exclamation-circle' : 'check', familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) })), (iconEnd && !loading) && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: handleOnIconEndClick, disabled: disabled || loading, children: iconEnd && (jsxRuntime.jsx(DIcon, { className: "d-input-icon", icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) })), loading && (jsxRuntime.jsx("div", { className: "input-group-text d-input-icon", children: jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsxRuntime.jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })] }));
}
const ForwardedDInput = React.forwardRef(DInput);
ForwardedDInput.displayName = 'DInput';
var DInput$1 = ForwardedDInput;

function DDatePickerTime(_a) {
    var { value, onChange, id, label, className, style } = _a, props = tslib.__rest(_a, ["value", "onChange", "id", "label", "className", "style"]);
    return (jsxRuntime.jsxs("div", { className: classNames('d-flex align-items-center gap-2 flex-column d-datepicker-time', className), style: style, children: [label && (jsxRuntime.jsx("p", { className: "d-datepicker-time-label", children: label })), jsxRuntime.jsx(DInput$1, Object.assign({}, onChange && {
                onChange,
            }, { type: "time", id: id, value: value }, props))] }));
}

function DDatePickerInput(_a, ref) {
    var { value, onClick, id, iconEnd, className, style } = _a, props = tslib.__rest(_a, ["value", "onClick", "id", "iconEnd", "className", "style"]);
    React.useImperativeHandle(ref, () => ({}), []);
    return (jsxRuntime.jsx("div", { role: "button", onClick: onClick, onKeyDown: () => { }, tabIndex: -1, children: jsxRuntime.jsx(DInput$1, Object.assign({ readOnly: true, type: "text", id: id, value: value, onIconEndClick: onClick, iconEnd: iconEnd, className: className, style: style }, props)) }));
}
const ForwardedDDatePickerInput = React.forwardRef(DDatePickerInput);
ForwardedDDatePickerInput.displayName = 'DDatePickerInput';
var DDatePickerInput$1 = ForwardedDDatePickerInput;

function DMonthPicker(_a) {
    var { onChangeDate, date, locale, className } = _a, props = tslib.__rest(_a, ["onChangeDate", "date", "locale", "className"]);
    const selected = React.useMemo(() => dateFns.parseISO(date), [date]);
    const dateFormatted = React.useMemo(() => (dateFns.format(new Date(date), 'MMMM yyyy', { locale })), [date, locale]);
    return (jsxRuntime.jsx(DatePicker, Object.assign({ showMonthYearPicker: true, selected: selected, calendarClassName: classNames('d-month-picker', className), onChange: onChangeDate }, locale && { locale }, { customInput: (jsxRuntime.jsx("p", { className: "fw-bold text-capitalize", children: dateFormatted })), renderCustomHeader: ({ monthDate, decreaseYear, increaseYear, prevYearButtonDisabled, nextYearButtonDisabled, }) => (jsxRuntime.jsxs("div", { className: "d-flex align-items-center justify-content-between gap-4 fs-6 bg-dark", children: [jsxRuntime.jsx(DButton, { iconStart: "chevron-left", size: "sm", variant: "link", theme: "light", onClick: decreaseYear, isDisabled: prevYearButtonDisabled }), jsxRuntime.jsx("p", { className: "fs-6 fw-bold", children: monthDate.getFullYear() }), jsxRuntime.jsx(DButton, { iconStart: "chevron-right", size: "sm", variant: "link", theme: "light", onClick: increaseYear, isDisabled: nextYearButtonDisabled })] })) }, props)));
}

function DDatePickerHeader({ monthDate, changeMonth, changeYear, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, withMonthSelector, decreaseMonthIcon, increaseMonthIcon, iconSize, buttonVariant, buttonTheme, locale, style, className, }) {
    const onChangeDate = React.useCallback((value) => {
        if (value) {
            changeMonth(dateFns.getMonth(value));
            changeYear(dateFns.getYear(value));
        }
    }, [changeMonth, changeYear]);
    return (jsxRuntime.jsxs("div", { className: classNames('d-flex align-items-center justify-content-between d-datepicker-header', className), style: style, children: [jsxRuntime.jsx(DButton, { iconStart: decreaseMonthIcon, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: decreaseMonth, isDisabled: prevMonthButtonDisabled }), jsxRuntime.jsx(DMonthPicker, Object.assign({}, !withMonthSelector && { readOnly: true }, { date: monthDate.toISOString(), onChangeDate: onChangeDate }, locale && { locale })), jsxRuntime.jsx(DButton, { iconStart: increaseMonthIcon, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: increaseMonth, isDisabled: nextMonthButtonDisabled })] }));
}

function DDatePicker(_a) {
    var { date, selectsRange = false, withMonthSelector, inputLabel, inputIcon = 'calendar', inputId = 'input-calendar', timeId = 'input-time', timeLabel, headerDecreaseMonthIcon = 'chevron-left', headerIncreaseMonthIcon = 'chevron-right', headerIconSize = 'sm', headerButtonVariant = 'link', headerButtonTheme = 'dark', locale, className, style } = _a, props = tslib.__rest(_a, ["date", "selectsRange", "withMonthSelector", "inputLabel", "inputIcon", "inputId", "timeId", "timeLabel", "headerDecreaseMonthIcon", "headerIncreaseMonthIcon", "headerIconSize", "headerButtonVariant", "headerButtonTheme", "locale", "className", "style"]);
    const selected = React.useMemo(() => (date ? dateFns.parseISO(date) : null), [date]);
    const DatePickerHeader = React.useCallback((headerProps) => (jsxRuntime.jsx(DDatePickerHeader, Object.assign({}, headerProps, locale && { locale }, { decreaseMonthIcon: headerDecreaseMonthIcon, increaseMonthIcon: headerIncreaseMonthIcon, iconSize: headerIconSize, buttonVariant: headerButtonVariant, buttonTheme: headerButtonTheme, withMonthSelector: !!withMonthSelector }))), [headerButtonTheme,
        headerButtonVariant,
        headerDecreaseMonthIcon,
        headerIconSize,
        headerIncreaseMonthIcon,
        withMonthSelector,
        locale,
    ]);
    return (jsxRuntime.jsx(DatePicker, Object.assign({ selected: selected, calendarClassName: "d-date-picker", renderCustomHeader: (headerProps) => jsxRuntime.jsx(DatePickerHeader, Object.assign({}, headerProps)), customInput: (jsxRuntime.jsx(DDatePickerInput$1, { id: inputId, iconEnd: inputIcon, className: className, style: style })), customTimeInput: jsxRuntime.jsx(DDatePickerTime, { id: timeId, label: timeLabel }), selectsRange: selectsRange }, locale && { locale }, props)));
}

function DInputCounter(_a, ref) {
    var { minValue, maxValue, value = minValue, invalid, iconStart = 'dash-square', iconEnd = 'plus-square', style, onChange } = _a, props = tslib.__rest(_a, ["minValue", "maxValue", "value", "invalid", "iconStart", "iconEnd", "style", "onChange"]);
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
    const generateStyleVariables = React.useMemo(() => (Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}input-component-form-control-text-align`]: 'center' })), [style]);
    const valueString = React.useMemo(() => (internalValue.toString()), [internalValue]);
    React.useEffect(() => {
        setInternalIsInvalid(!(internalValue >= minValue && internalValue <= maxValue));
    }, [internalValue, minValue, maxValue]);
    return (jsxRuntime.jsx(DInput$1, Object.assign({ ref: inputRef, value: valueString, style: generateStyleVariables, iconStart: iconStart, iconEnd: iconEnd, invalid: internalIsInvalid || invalid, type: "number", onChange: handleOnChange, onIconStartClick: handleOnIconStartClick, onIconEndClick: handleOnIconEndClick }, props)));
}
const ForwardedDInputCounter = React.forwardRef(DInputCounter);
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
    const handleOnWheel = React.useCallback((event) => {
        var _a;
        event.stopPropagation();
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    }, [inputRef]);
    const generateStyleVariables = React.useMemo(() => ({
        [`--${PREFIX_BS}input-currency-component-symbol-color`]: `var(--${PREFIX_BS}secondary)`,
        [`--${PREFIX_BS}input-currency-symbol-color`]: `var(--${PREFIX_BS}input-currency-component-symbol-color)`,
    }), []);
    const generateSymbolStyleVariables = React.useMemo(() => ({
        color: `var(--${PREFIX_BS}m-input-currency-symbol-color)`,
    }), []);
    const handleOnChange = React.useCallback((newValue) => {
        const newNumber = (newValue === undefined || newValue === '')
            ? undefined
            : Number(newValue);
        setInnerNumber(newNumber);
        setInnerString(formatValue(newNumber, currencyOptions));
    }, [currencyOptions]);
    React.useEffect(() => {
        onChange === null || onChange === void 0 ? void 0 : onChange(innerNumber);
    }, [onChange, innerNumber]);
    React.useEffect(() => {
        setInnerNumber(value);
    }, [value]);
    const innerValue = React.useMemo(() => {
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
    var { value, minValue, maxValue, currencyOptions, currencyCode, invalid, onFocus, onBlur, onChange } = _a, inputProps = tslib.__rest(_a, ["value", "minValue", "maxValue", "currencyOptions", "currencyCode", "invalid", "onFocus", "onBlur", "onChange"]);
    const { inputRef, innerValue, innerType, handleOnFocus, handleOnChange, handleOnBlur, handleOnWheel, generateStyleVariables, generateSymbolStyleVariables, } = useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref);
    return (jsxRuntime.jsx(DInput$1, Object.assign({ ref: inputRef, value: innerValue, onChange: handleOnChange, style: generateStyleVariables, inputMode: "decimal", pattern: "^[0-9]", type: innerType, onFocus: handleOnFocus, onBlur: handleOnBlur, onWheel: handleOnWheel, inputStart: (jsxRuntime.jsx("span", { slot: "input-start", style: generateSymbolStyleVariables, children: currencyCode || currencyOptions.symbol })) }, inputProps)));
}
const ForwardedDInputCurrencyBase$1 = React.forwardRef(DInputCurrencyBase);
ForwardedDInputCurrencyBase$1.displayName = 'DInputCurrencyBase';
var DInputCurrencyBase$1 = ForwardedDInputCurrencyBase$1;

function DInputCurrency(_a, ref) {
    var { value, minValue, maxValue, currencyCode, invalid, onFocus, onBlur, onChange } = _a, props = tslib.__rest(_a, ["value", "minValue", "maxValue", "currencyCode", "invalid", "onFocus", "onBlur", "onChange"]);
    const { currency: currencyOptions } = useDContext();
    const { inputRef, innerValue, innerType, handleOnFocus, handleOnChange, handleOnBlur, handleOnWheel, generateStyleVariables, generateSymbolStyleVariables, } = useInputCurrency(currencyOptions, value, onFocus, onChange, onBlur, ref);
    return (jsxRuntime.jsx(DInput$1, Object.assign({ ref: inputRef, value: innerValue, onChange: handleOnChange, style: generateStyleVariables, inputMode: "decimal", pattern: "^[0-9]", type: innerType, onFocus: handleOnFocus, onBlur: handleOnBlur, onWheel: handleOnWheel, inputStart: (jsxRuntime.jsx("span", { slot: "input-start", style: generateSymbolStyleVariables, children: currencyCode || currencyOptions.symbol })) }, props)));
}
const ForwardedDInputCurrencyBase = React.forwardRef(DInputCurrency);
ForwardedDInputCurrencyBase.displayName = 'DInputCurrency';
var DInputCurrency$1 = ForwardedDInputCurrencyBase;

function DInputSearch(_a, ref) {
    var { onClick, type } = _a, props = tslib.__rest(_a, ["onClick", "type"]);
    const inputRef = useProvidedRefOrCreate(ref);
    return (jsxRuntime.jsx(DInput$1, Object.assign({ ref: inputRef, type: "text", iconEnd: "search", onIconEndClick: onClick }, props)));
}
const ForwardedDInputSearch = React.forwardRef(DInputSearch);
ForwardedDInputSearch.displayName = 'DInputSearch';
var DInputSearch$1 = ForwardedDInputSearch;

function DInputPassword(_a, ref) {
    var { onIconEndClick } = _a, props = tslib.__rest(_a, ["onIconEndClick"]);
    const inputRef = useProvidedRefOrCreate(ref);
    const [visible, setVisible] = React.useState(false);
    const handleOnIconEndClick = React.useCallback(() => {
        setVisible((prevVisible) => !prevVisible);
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick();
    }, [onIconEndClick]);
    return (jsxRuntime.jsx(DInput$1, Object.assign({ ref: inputRef, iconEnd: !visible ? 'eye-slash' : 'eye', type: !visible ? 'password' : 'text', onIconEndClick: handleOnIconEndClick }, props)));
}
const ForwardedDInputPassword = React.forwardRef(DInputPassword);
ForwardedDInputPassword.displayName = 'DInputPassword';
var DInputPassword$1 = ForwardedDInputPassword;

function DInputCheck({ type, name, label, isChecked = false, id, isDisabled = false, isIndeterminate, value, onChange, className, style, }) {
    const innerRef = React.useRef(null);
    const handleChange = React.useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    React.useEffect(() => {
        if (innerRef.current) {
            innerRef.current.indeterminate = Boolean(isIndeterminate);
        }
    }, [isIndeterminate]);
    React.useEffect(() => {
        if (innerRef.current) {
            innerRef.current.checked = isChecked;
        }
    }, [isChecked]);
    if (!label) {
        return (jsxRuntime.jsx("input", { ref: innerRef, onChange: handleChange, className: classNames('form-check-input', className), style: style, id: id, disabled: isDisabled, type: type, name: name, value: value }));
    }
    return (jsxRuntime.jsxs("div", { className: "form-check", children: [jsxRuntime.jsx("input", { ref: innerRef, onChange: handleChange, className: classNames('form-check-input', className), style: style, id: id, disabled: isDisabled, type: type, name: name, value: value }), jsxRuntime.jsx("label", { className: "form-check-label", htmlFor: id, children: label })] }));
}

function DInputPin({ id, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, placeholder = '•', type = 'text', isDisabled = false, isLoading = false, isSecret = false, iconFamilyClass, iconFamilyPrefix, characters = 4, innerInputMode = 'text', hint, isInvalid = false, isValid = false, className, style, onChange, }) {
    const [pattern, setPattern] = React.useState('');
    React.useEffect(() => {
        setPattern(type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$');
    }, [type]);
    const nextInput = React.useCallback((event) => {
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
    const prevInput = React.useCallback((event) => {
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
    const focusInput = React.useCallback((event) => {
        // eslint-disable-next-line no-param-reassign
        event.currentTarget.value = '';
    }, []);
    const wheelInput = React.useCallback((event) => {
        event.currentTarget.blur();
    }, []);
    const formChange = React.useCallback((event) => {
        const formData = new FormData(event.currentTarget);
        const values = Array.from(formData.values()).join('');
        onChange === null || onChange === void 0 ? void 0 : onChange(values);
    }, [onChange]);
    const preventDefaultEvent = React.useCallback((event) => {
        event.preventDefault();
    }, []);
    return (jsxRuntime.jsxs("div", { className: classNames('d-input-pin', className), style: style, children: [label && (jsxRuntime.jsxs("label", { htmlFor: "pinIndex0", children: [label, labelIcon && (jsxRuntime.jsx(DIcon, { className: "d-input-pin-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxRuntime.jsxs("form", { id: id, className: "d-input-pin-controls", onInput: formChange, onSubmit: preventDefaultEvent, children: [Array.from({ length: characters }).map((_, index) => (jsxRuntime.jsx("input", Object.assign({ className: classNames({
                            'form-control': true,
                            'is-invalid': isInvalid,
                            'is-valid': isValid,
                        }), type: isSecret ? 'password' : type, "aria-describedby": `${id}State`, inputMode: innerInputMode, id: `pinIndex${index}`, name: `pin-${index}`, maxLength: 1, onChange: nextInput, onKeyDown: prevInput, onFocus: focusInput, onWheel: wheelInput, onClick: preventDefaultEvent, autoComplete: "off", placeholder: placeholder, disabled: isDisabled || isLoading, required: true }, type === 'number' && ({ min: 0, max: 9 })), index))), (isInvalid || isValid) && !isLoading && (jsxRuntime.jsx("span", { className: "input-group-text", id: `${id}State`, children: jsxRuntime.jsx(DIcon, { className: "d-input-pin-validation-icon", icon: isInvalid ? 'exclamation-circle' : 'check', familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) })), isLoading && (jsxRuntime.jsx("div", { className: "input-group-text d-input-pin-icon", children: jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsxRuntime.jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] }));
}

function DInputSelect({ id, name, label = '', className, style, options, labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, isDisabled = false, isLoading = false, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, hint, selectedOption, valueExtractor, labelExtractor, onChange, onBlur, onIconStartClick, onIconEndClick, }) {
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
        onChange === null || onChange === void 0 ? void 0 : onChange(selected);
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
    return (jsxRuntime.jsxs("div", { className: classNames('d-input', className), style: style, children: [label && (jsxRuntime.jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsxRuntime.jsx(DIcon, { className: "mdinput-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxRuntime.jsxs("div", { className: "d-input-control", children: [jsxRuntime.jsxs("div", { className: classNames({
                            'input-group': true,
                            disabled: isDisabled || isLoading,
                        }), children: [iconStart && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: iconStartClickHandler, disabled: isDisabled || isLoading, children: iconStart && (jsxRuntime.jsx(DIcon, { className: "d-input-icon", icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })) })), jsxRuntime.jsx("select", Object.assign({ id: id, name: name, className: "form-select", "aria-label": label, disabled: isDisabled || isLoading, "aria-describedby": `${id}Add ${id}Hint`, onChange: changeHandler, onBlur: blurHandler }, selectedOption && { value: internalValueExtractor(selectedOption) }, { children: options.map((option) => (jsxRuntime.jsx("option", { value: internalValueExtractor(option), children: internalLabelExtractor(option) }, internalValueExtractor(option)))) })), iconEnd && !isLoading && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: iconEndClickHandler, disabled: isDisabled || isLoading, children: iconEnd && (jsxRuntime.jsx(DIcon, { className: "d-input-icon", icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) })), isLoading && (jsxRuntime.jsx("div", { className: "input-group-text form-control-icon loading", children: jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsxRuntime.jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })] }));
}

function DListItem({ children, className, style, isActive = false, isDisabled = false, theme, onClick, }) {
    const Tag = React.useMemo(() => (onClick ? 'button' : 'div'), [onClick]);
    return (jsxRuntime.jsx(Tag, Object.assign({}, Tag === 'button' && {
        onClick,
        type: 'button',
    }, { className: classNames('list-group-item list-group-item-action', theme ? `list-group-item-${theme}` : undefined, className, {
            active: isActive,
            disabled: isDisabled,
        }), style: style }, isActive && { 'aria-current': true }, { children: children })));
}

function DList({ children, className, style, isFlush = false, isNumbered = false, isHorizontal = false, horizontalBreakpoint, }) {
    if (isFlush && isHorizontal) {
        throw new Error("Horizontal and Flush props don't work together");
    }
    return (jsxRuntime.jsx("div", { className: classNames('list-group', {
            'list-group-flush': isFlush && !isHorizontal,
            'list-group-numbered': isNumbered,
            'list-group-horizontal': isHorizontal && !horizontalBreakpoint,
        }, (isHorizontal && horizontalBreakpoint) && `list-group-horizontal-${horizontalBreakpoint}`, className), style: style, children: children }));
}
var DList$1 = Object.assign(DList, {
    Item: DListItem,
});

function DListItemMovement(_a) {
    var { description, date, amount, className, style } = _a, props = tslib.__rest(_a, ["description", "date", "amount", "className", "style"]);
    const { format } = useFormatCurrency();
    const value = React.useMemo(() => {
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
    return (jsxRuntime.jsx(DListItem, Object.assign({}, props, { children: jsxRuntime.jsxs("div", { className: classNames('d-flex justify-content-between align-items-center p-3 gap-3', className), style: style, children: [jsxRuntime.jsxs("div", { className: "d-flex flex-column gap-1", children: [jsxRuntime.jsx("span", { className: "fs-6", children: description }), jsxRuntime.jsx("span", { className: "small text-gray-700", children: date })] }), jsxRuntime.jsx("span", { className: classNames('fs-6', value.theme), children: value.valueFormatted })] }) })));
}

function DModalHeader({ showCloseButton, onClose, children, className, style, }) {
    return (jsxRuntime.jsxs("div", { className: classNames('modal-header', className), style: style, children: [showCloseButton && (jsxRuntime.jsx("button", { type: "button", className: "d-modal-close", "aria-label": "Close", onClick: onClose, children: jsxRuntime.jsx(DIcon, { icon: "x-lg" }) })), children] }));
}

function DModalBody({ children, className, style, }) {
    return (jsxRuntime.jsx("div", { className: classNames('d-modal-slot modal-body', className), style: style, children: children }));
}

function DModalFooter({ className, style, actionPlacement = 'fill', children, }) {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: "d-modal-separator" }), jsxRuntime.jsx("div", { className: classNames(`d-modal-slot modal-footer d-modal-action-${actionPlacement}`, className), style: style, children: children })] }));
}

function DModal({ name, className, style, isStatic, isScrollable, isCentered, isFullScreen, fullScreenFrom, modalSize, children, }) {
    const fullScreenClass = React.useMemo(() => {
        if (isFullScreen) {
            if (fullScreenFrom) {
                return `modal-fullscreen-${fullScreenFrom}-down`;
            }
            return 'modal-fullscreen';
        }
        return '';
    }, [fullScreenFrom, isFullScreen]);
    const generateClasses = React.useMemo(() => (Object.assign({ 'modal fade show': true }, className && { [className]: true })), [className]);
    const generateModalDialogClasses = React.useMemo(() => (Object.assign({ 'modal-dialog': true, 'modal-dialog-centered': !!isCentered, 'modal-dialog-scrollable': !!isScrollable, [fullScreenClass]: !!isFullScreen }, modalSize && { [`modal-${modalSize}`]: true })), [fullScreenClass, isCentered, isFullScreen, isScrollable, modalSize]);
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames(generateClasses), id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false", style: style }, isStatic && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), { children: jsxRuntime.jsx("div", { className: classNames(generateModalDialogClasses), children: jsxRuntime.jsx("div", { className: "modal-content", children: children }) }) })));
}
var DModal$1 = Object.assign(DModal, {
    Header: DModalHeader,
    Body: DModalBody,
    Footer: DModalFooter,
});

function DOffcanvasHeader({ showCloseButton, onClose, children, className, style, }) {
    return (jsxRuntime.jsxs("div", { className: classNames('offcanvas-header', className), style: style, children: [jsxRuntime.jsx("div", { className: "d-offcanvas-slot", children: children }), showCloseButton && (jsxRuntime.jsx("button", { type: "button", className: "d-offcanvas-close", "aria-label": "Close", onClick: onClose, children: jsxRuntime.jsx(DIcon, { icon: "x-lg" }) }))] }));
}

function DOffcanvasBody({ children, className, style, }) {
    return (jsxRuntime.jsx("div", { className: classNames('d-offcanvas-slot offcanvas-body', className), style: style, children: children }));
}

function DOffcanvasFooter({ footerActionPlacement = 'fill', children, className, style, }) {
    return (jsxRuntime.jsx("div", { className: classNames(`d-offcanvas-slot d-offcanvas-footer d-offcanvas-action-${footerActionPlacement}`, className), style: style, children: children }));
}

function DOffcanvas({ name, className, style, isStatic, isScrollable, openFrom = 'end', children, }) {
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames('offcanvas show', {
            [`offcanvas-${openFrom}`]: openFrom,
        }, className), style: style, id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false" }, isStatic && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), isScrollable && ({
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
    var { className, nextLabel, previousLabel, showArrows = true, page, onPageChange } = _a, props = tslib.__rest(_a, ["className", "nextLabel", "previousLabel", "showArrows", "page", "onPageChange"]);
    return (jsxRuntime.jsx(ResponsivePagination, Object.assign({ extraClassName: classNames('pagination', className), nextClassName: classNames('arrow arrow-next', !nextLabel && 'no-label'), nextLabel: nextLabel, previousClassName: classNames('arrow arrow-prev', !previousLabel && 'no-label'), previousLabel: previousLabel, renderNav: showArrows, current: page, onPageChange: onPageChange }, props)));
}

function DPopover({ children, renderComponent, isOpen, setEventIsOpen, adjustContentToRender = false, className, style, }) {
    const [innerIsOpen, setInnerIsOpen] = React.useState(false);
    React.useEffect(() => {
        setInnerIsOpen(isOpen);
    }, [isOpen]);
    const onOpenChange = React.useCallback((value) => {
        setInnerIsOpen(value);
        if (setEventIsOpen) {
            setEventIsOpen(value);
        }
    }, [setEventIsOpen]);
    const { refs, floatingStyles: floatingStylesBase, context, } = react.useFloating({
        open: innerIsOpen,
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
    const floatingStyles = React.useMemo(() => (Object.assign(Object.assign({}, floatingStylesBase), adjustContentToRender && {
        [`--${PREFIX_BS}popover-component-min-width`]: 'auto',
    })), [floatingStylesBase, adjustContentToRender]);
    return (jsxRuntime.jsxs("div", { className: classNames('d-popover', className), style: style, children: [jsxRuntime.jsx("div", Object.assign({ ref: refs.setReference }, getReferenceProps(), { children: renderComponent(innerIsOpen) })), innerIsOpen && (jsxRuntime.jsx(react.FloatingFocusManager, { context: context, modal: false, children: jsxRuntime.jsx("div", Object.assign({ className: classNames('d-popover-content', {
                        'w-100': adjustContentToRender,
                    }), ref: refs.setFloating, style: floatingStyles, "aria-labelledby": headingId }, getFloatingProps(), { children: children })) }))] }));
}

function DProgress({ className, style, currentValue, minValue = 0, maxValue = 100, hideCurrentValue = false, enableStripedAnimation = false, }) {
    const formatProgress = React.useMemo(() => `${currentValue}%`, [currentValue]);
    const generateClasses = React.useMemo(() => ({
        'progress-bar': true,
        'progress-bar-striped progress-bar-animated': enableStripedAnimation,
    }), [enableStripedAnimation]);
    return (jsxRuntime.jsx("div", { className: "progress", children: jsxRuntime.jsx("div", { className: classNames(generateClasses, className), role: "progressbar", "aria-label": "Progress bar", style: Object.assign({ width: `${currentValue}%` }, style), "aria-valuenow": currentValue, "aria-valuemin": minValue, "aria-valuemax": maxValue, children: !hideCurrentValue && formatProgress }) }));
}

function DQuickActionButton({ line1, line2, className, actionLinkText, actionLinkTheme = 'secondary', actionIcon, secondaryActionIcon, actionIconFamilyClass, actionIconFamilyPrefix, representativeImage, representativeIcon, representativeIconTheme = 'secondary', representativeIconHasCircle = false, representativeIconFamilyClass, representativeIconFamilyPrefix, onClick, onClickSecondary, style, }) {
    const globalClickHandler = React.useCallback(() => {
        if (actionLinkText) {
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick();
    }, [actionLinkText, onClick]);
    const actionLinkClickHandler = React.useCallback(() => {
        if (!actionLinkText) {
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick();
    }, [actionLinkText, onClick]);
    const secondaryActionLinkClickHandler = React.useCallback(() => {
        onClickSecondary === null || onClickSecondary === void 0 ? void 0 : onClickSecondary();
    }, [onClickSecondary]);
    const Tag = React.useMemo(() => (actionLinkText ? 'div' : 'button'), [actionLinkText]);
    return (jsxRuntime.jsxs(Tag, { className: classNames('d-quick-action-button', className), onClick: !actionLinkText ? globalClickHandler : undefined, style: style, children: [representativeIcon && (jsxRuntime.jsx(DIcon, { className: "d-quick-action-button-representative-icon", size: representativeIconHasCircle
                    ? `var(--${PREFIX_BS}quick-action-button-representative-icon-size)`
                    : `var(--${PREFIX_BS}quick-action-button-representative-image-size)`, icon: representativeIcon, hasCircle: representativeIconHasCircle, theme: representativeIconTheme, familyClass: representativeIconFamilyClass, familyPrefix: representativeIconFamilyPrefix })), representativeImage && (jsxRuntime.jsx("img", { className: "d-quick-action-button-representative-image", src: representativeImage, alt: "" })), jsxRuntime.jsx("div", { className: "d-quick-action-button-content", children: jsxRuntime.jsxs("div", { className: "d-quick-action-button-text", children: [jsxRuntime.jsx("span", { className: "d-quick-action-button-line1", children: line1 }), jsxRuntime.jsx("small", { className: "d-quick-action-button-line2", children: line2 })] }) }), secondaryActionIcon && (jsxRuntime.jsx(DButton, { className: "d-quick-action-button-secondary-action-link", type: "button", variant: "link", iconStart: secondaryActionIcon, iconStartFamilyClass: actionIconFamilyClass, iconStartFamilyPrefix: actionIconFamilyPrefix, theme: actionLinkTheme, onClick: secondaryActionLinkClickHandler, isStopPropagationEnabled: true })), actionLinkText && !actionIcon && (jsxRuntime.jsx(DButton, { className: "d-quick-action-button-action-link", type: "button", variant: "link", theme: actionLinkTheme, text: actionLinkText, onClick: actionLinkClickHandler, isStopPropagationEnabled: true })), actionIcon && !actionLinkText && (jsxRuntime.jsx(DIcon, { className: "d-quick-action-button-action-icon", icon: actionIcon, size: `var(--${PREFIX_BS}quick-action-button-action-icon-size)`, familyClass: actionIconFamilyClass, familyPrefix: actionIconFamilyPrefix }))] }));
}

function DQuickActionCheck({ id, name, value, line1, line2, line3, className, style, isChecked, onChange, }) {
    const changeHandler = React.useCallback((event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    return (jsxRuntime.jsxs("label", { className: classNames('d-quick-action-check', className), htmlFor: id, style: style, children: [jsxRuntime.jsx(DInputCheck, { id: id, type: "radio", name: name, value: value, isChecked: isChecked, onChange: changeHandler }), jsxRuntime.jsxs("div", { className: "d-quick-action-check-detail", children: [jsxRuntime.jsx("span", { className: "d-quick-action-check-line1", children: line1 }), jsxRuntime.jsx("span", { className: "d-quick-action-check-line2", children: line2 })] }), jsxRuntime.jsx("span", { className: "d-quick-action-check-line3", children: line3 })] }));
}

function DQuickActionSelect({ id, name, value, line1, line2, className, style, isSelected = false, onChange, }) {
    const innerRef = React.useRef(null);
    const changeHandler = React.useCallback((event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    React.useEffect(() => {
        if (innerRef.current) {
            innerRef.current.checked = isSelected;
        }
    }, [isSelected]);
    return (jsxRuntime.jsxs("label", { className: classNames('d-quick-action-select', className), htmlFor: id, style: style, children: [jsxRuntime.jsx("input", { ref: innerRef, id: id, type: "radio", name: name, value: value, onChange: changeHandler }), jsxRuntime.jsx("span", { className: "d-quick-action-select-line1", children: line1 }), jsxRuntime.jsx("span", { className: "d-quick-action-select-line2", children: line2 })] }));
}

function DQuickActionSwitch({ id, name, label, hint, isChecked, isDisabled, className, style, onClick, }) {
    const clickHandler = React.useCallback((event) => {
        event.stopPropagation();
        onClick === null || onClick === void 0 ? void 0 : onClick(isChecked);
    }, [isChecked, onClick]);
    return (jsxRuntime.jsxs("button", { className: classNames('d-quick-action-switch', className), type: "button", onClick: clickHandler, style: style, children: [jsxRuntime.jsxs("div", { className: "d-quick-action-switch-content", children: [jsxRuntime.jsx(DInputSwitch, { id: id, name: name, isDisabled: isDisabled, isChecked: isChecked, isReadonly: true }), jsxRuntime.jsx("label", { className: "d-quick-action-switch-label", htmlFor: id, children: label })] }), jsxRuntime.jsx("div", { className: "d-quick-action-switch-hint", children: hint })] }));
}

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

function DStepper$2({ options, currentStep, successIcon = 'check', isVertical = false, className, style, }) {
    if (currentStep < 1 || currentStep > options.length) {
        throw new Error('Current step should be in the range from 1 to options length');
    }
    return (jsxRuntime.jsx("div", { className: classNames({
            'd-stepper-desktop': true,
            'is-vertical': isVertical,
        }, className), style: style, children: options.map(({ label, value }) => (jsxRuntime.jsxs("div", { className: "d-step", children: [jsxRuntime.jsx("div", { className: "d-step-value", children: jsxRuntime.jsx("div", { className: classNames({
                            'd-step-icon-container': true,
                            'd-step-check': value < currentStep,
                            'd-step-current': value === currentStep,
                        }), children: value < currentStep
                            ? (jsxRuntime.jsx(DIcon, { icon: successIcon, className: "d-step-icon" }))
                            : value }) }), jsxRuntime.jsx("div", { className: "d-step-label", children: label })] }, value))) }));
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
      from 180deg,
      var(--${PREFIX_BS}step-progress-outter-fill-background-color) ${currentAngle}deg,
      var(--${PREFIX_BS}step-progress-outter-background-color) 0deg)`, [currentAngle]);
    return (jsxRuntime.jsxs("div", { className: classNames('d-stepper', className), style: style, children: [jsxRuntime.jsx("div", { className: "d-step-bar", style: { background: progressStyle }, children: jsxRuntime.jsx("p", { className: "d-step-number", children: `${currentStep}/${options.length}` }) }), jsxRuntime.jsx("div", { className: "d-step-info", children: Object.keys(currentOption).length > 0 && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: "d-step-label", children: currentOption.label }), jsxRuntime.jsx("div", { className: "d-step-description", children: currentOption.description || '' })] })) })] }));
}

function DStepper({ options, currentStep, successIcon = 'check', isVertical = false, breakpoint = 'lg', className, style, }) {
    return (jsxRuntime.jsxs("div", { className: className, style: style, children: [jsxRuntime.jsx("div", { className: `d-block d-${breakpoint}-none`, children: jsxRuntime.jsx(DStepper$1, { options: options, currentStep: currentStep }) }), jsxRuntime.jsx("div", { className: `d-none d-${breakpoint}-block`, children: jsxRuntime.jsx(DStepper$2, { options: options, currentStep: currentStep, successIcon: successIcon, isVertical: isVertical }) })] }));
}

const TOOLTIP_FONT_SIZE_BY_SIZE = {
    sm: `var(--${PREFIX_BS}ref-fs-small)`,
    default: `var(--${PREFIX_BS}body-font-size)`,
    lg: `var(--${PREFIX_BS}ref-fs-6)`,
};
const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 4;
const GAP = 2;
function DTooltip({ classNameContainer, className, style, offSet = ARROW_HEIGHT + GAP, padding, withFocus = false, withClick = false, withHover = true, isOpen = false, placement = 'top', size, Component, children, }) {
    const [open, setOpen] = React.useState(isOpen);
    const styleVariables = React.useMemo(() => {
        const defaultFontSize = size
            ? TOOLTIP_FONT_SIZE_BY_SIZE[size]
            : TOOLTIP_FONT_SIZE_BY_SIZE.default;
        return Object.assign(Object.assign({}, style), { background: `var(--${PREFIX_BS}tooltip-bg, var(--${PREFIX_BS}tooltip-component-bg, var(--${PREFIX_BS}secondary)))`, borderRadius: `var(--${PREFIX_BS}tooltip-border-radius, var(--${PREFIX_BS}tooltip-component-border-radius, var(--${PREFIX_BS}border-radius)))`, color: `var(--${PREFIX_BS}tooltip-color, var(--${PREFIX_BS}tooltip-component-color, var(--${PREFIX_BS}white)))`, fontSize: `var(--${PREFIX_BS}tooltip-font-size, var(--${PREFIX_BS}tooltip-component-font-size, ${defaultFontSize}))`, padding: `var(--${PREFIX_BS}tooltip-padding, var(--${PREFIX_BS}tooltip-component-padding, var(--${PREFIX_BS}ref-spacer-2)))`, maxWidth: `var(--${PREFIX_BS}tooltip-max-width, var(--${PREFIX_BS}tooltip-component-max-width, 300px))` });
    }, [size, style]);
    const arrowRef = React.useRef(null);
    const { refs, context, floatingStyles, } = react.useFloating({
        open,
        onOpenChange: setOpen,
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
    const dismiss = react.useDismiss(context);
    const click = react.useClick(context);
    const role = react.useRole(context, { role: 'tooltip' });
    const { getReferenceProps, getFloatingProps } = react.useInteractions([
        withHover ? hover : undefined,
        withClick ? click : undefined,
        withFocus ? focus : undefined,
        dismiss,
        role,
    ]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", Object.assign({ className: className, ref: refs.setReference }, getReferenceProps(), { children: Component })), jsxRuntime.jsx(react.FloatingPortal, { children: open && (jsxRuntime.jsxs("div", Object.assign({ className: classNameContainer, ref: refs.setFloating, style: Object.assign(Object.assign({}, floatingStyles), styleVariables) }, getFloatingProps(), { children: [jsxRuntime.jsx(react.FloatingArrow, { ref: arrowRef, context: context, style: {
                                fill: styleVariables.background,
                            }, width: ARROW_WIDTH, height: ARROW_HEIGHT }), children] }))) })] }));
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

function DTabs({ children, defaultSelected, onChange, options, className, style, isVertical, }) {
    const [selected, setSelected] = React.useState(defaultSelected);
    const onSelect = React.useCallback((option) => {
        if (option.tab) {
            setSelected(option.tab);
        }
        onChange(option);
    }, [onChange]);
    React.useEffect(() => {
        setSelected(defaultSelected);
    }, [defaultSelected]);
    const isSelected = React.useCallback((tab) => (selected === tab), [selected]);
    const value = React.useMemo(() => ({
        isSelected,
    }), [isSelected]);
    return (jsxRuntime.jsx(TabContext.Provider, { value: value, children: jsxRuntime.jsxs("div", { className: classNames({
                'd-tabs': true,
                'd-tabs-vertical': isVertical,
            }, className), style: style, children: [jsxRuntime.jsx("nav", { className: "nav", children: options.map((option) => (jsxRuntime.jsx("button", { id: `${option.tab}Tab`, className: classNames('nav-link', {
                            active: option.tab === selected,
                        }, className), type: "button", role: "tab", "aria-controls": `${option.tab}Pane`, "aria-selected": option.tab === selected, disabled: option.isDisabled, onClick: () => onSelect(option), children: option.label }, option.label))) }), jsxRuntime.jsx("div", { className: "tab-content", children: children })] }) }));
}
var DTabs$1 = Object.assign(DTabs, {
    Tab: DTabContent,
});

function DToastContainer({ style, position = 'top-right', className, }) {
    return (jsxRuntime.jsx(reactToastify.ToastContainer, { toastClassName: () => classNames('shadow-none p-0 cursor-default', className), position: position, autoClose: false, hideProgressBar: true, closeOnClick: false, closeButton: false, transition: reactToastify.Slide, style: style }));
}

function useToast() {
    const toast = React.useCallback((message, { position = 'top-right', type = 'info', showClose = true, autoClose = false, } = {}) => {
        reactToastify.toast(({ closeToast }) => (jsxRuntime.jsx(DAlert, { type: type, showClose: showClose, onClose: closeToast, id: "alertID", children: message })), {
            transition: reactToastify.Slide,
            position,
            autoClose,
        });
    }, []);
    return {
        toast,
    };
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

exports.DAlert = DAlert;
exports.DBadge = DBadge;
exports.DBoxFile = DBoxFile;
exports.DButton = DButton;
exports.DCard = DCard$1;
exports.DCardAccount = DCardAccount;
exports.DCardBody = DCardBody;
exports.DCardFooter = DCardFooter;
exports.DCardHeader = DCardHeader;
exports.DCarousel = DCarousel$1;
exports.DCarouselSlide = DCarouselSlide;
exports.DChip = DChip;
exports.DCollapse = DCollapse;
exports.DCollapseIconText = DCollapseIconText;
exports.DContext = DContext;
exports.DContextProvider = DContextProvider;
exports.DCurrencyText = DCurrencyText;
exports.DDatePicker = DDatePicker;
exports.DIcon = DIcon;
exports.DInput = DInput$1;
exports.DInputCheck = DInputCheck;
exports.DInputCounter = DInputCounter$1;
exports.DInputCurrency = DInputCurrency$1;
exports.DInputCurrencyBase = DInputCurrencyBase$1;
exports.DInputPassword = DInputPassword$1;
exports.DInputPin = DInputPin;
exports.DInputSearch = DInputSearch$1;
exports.DInputSelect = DInputSelect;
exports.DInputSwitch = DInputSwitch;
exports.DList = DList$1;
exports.DListItem = DListItem;
exports.DListItemMovement = DListItemMovement;
exports.DModal = DModal$1;
exports.DModalBody = DModalBody;
exports.DModalFooter = DModalFooter;
exports.DModalHeader = DModalHeader;
exports.DOffcanvas = DOffcanvas$1;
exports.DOffcanvasBody = DOffcanvasBody;
exports.DOffcanvasFooter = DOffcanvasFooter;
exports.DOffcanvasHeader = DOffcanvasHeader;
exports.DPaginator = DPaginator;
exports.DPermissionGroup = DPermissionGroup;
exports.DPermissionItem = DPermissionItem;
exports.DPopover = DPopover;
exports.DProgress = DProgress;
exports.DQuickActionButton = DQuickActionButton;
exports.DQuickActionCheck = DQuickActionCheck;
exports.DQuickActionSelect = DQuickActionSelect;
exports.DQuickActionSwitch = DQuickActionSwitch;
exports.DSkeleton = DSkeleton;
exports.DStepper = DStepper;
exports.DStepperDesktop = DStepper$2;
exports.DStepperMobile = DStepper$1;
exports.DSummaryCard = DSummaryCard;
exports.DTabContent = DTabContent;
exports.DTabs = DTabs$1;
exports.DToastContainer = DToastContainer;
exports.DTooltip = DTooltip;
exports.ModalContext = ModalContext;
exports.ModalContextProvider = ModalContextProvider;
exports.OffcanvasContext = OffcanvasContext;
exports.OffcanvasContextProvider = OffcanvasContextProvider;
exports.configureI18n = configureI8n;
exports.formatCurrency = formatCurrency;
exports.useDContext = useDContext;
exports.useFormatCurrency = useFormatCurrency;
exports.useInputCurrency = useInputCurrency;
exports.useModalContext = useModalContext;
exports.useOffcanvasContext = useOffcanvasContext;
exports.useProvidedRefOrCreate = useProvidedRefOrCreate;
exports.useStackState = useStackState;
exports.useTabContext = useTabContext;
exports.useToast = useToast;
//# sourceMappingURL=index.js.map
