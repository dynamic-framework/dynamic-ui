'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');
const classNames = require('classnames');
const tslib = require('tslib');
const reactDropzone = require('react-dropzone');
const reactSplide = require('@splidejs/react-splide');
const currency = require('currency.js');
const DatePicker = require('react-datepicker');
const luxon = require('luxon');
const formik = require('formik');
const ResponsivePagination = require('react-responsive-pagination');
const react$1 = require('@floating-ui/react');
const ContentLoader = require('react-content-loader');
const reactToastify = require('react-toastify');
const i18n = require('i18next');
const reactI18next = require('react-i18next');
const html2canvas = require('html2canvas');
const reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
const currency__default = /*#__PURE__*/_interopDefaultLegacy(currency);
const DatePicker__default = /*#__PURE__*/_interopDefaultLegacy(DatePicker);
const ResponsivePagination__default = /*#__PURE__*/_interopDefaultLegacy(ResponsivePagination);
const ContentLoader__default = /*#__PURE__*/_interopDefaultLegacy(ContentLoader);
const i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
const html2canvas__default = /*#__PURE__*/_interopDefaultLegacy(html2canvas);

function DBadge({ text, isDot = false, theme = 'primary', id, className, style, }) {
    const generateClasses = react.useMemo(() => ({
        badge: true,
        'badge-dot': isDot,
        [`badge-${theme}`]: !!theme,
    }), [isDot, theme]);
    return (jsxRuntime.jsx("span", Object.assign({ className: classNames__default["default"](generateClasses, className), style: style }, id && { id }, { children: jsxRuntime.jsx("span", { children: text }) })));
}

function DInputSwitch({ label, id, name, isChecked, isDisabled, isReadonly, onChange, }) {
    const [internalIsChecked, setInternalIsChecked] = react.useState(isChecked);
    react.useEffect(() => {
        setInternalIsChecked(isChecked);
    }, [isChecked]);
    const changeHandler = react.useCallback((event) => {
        const value = event.currentTarget.checked;
        setInternalIsChecked(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (jsxRuntime.jsxs("div", { className: "form-check form-switch", children: [jsxRuntime.jsx("input", { id: id, name: name, onChange: isReadonly ? () => false : changeHandler, className: "form-check-input", type: "checkbox", role: "switch", checked: internalIsChecked, disabled: isDisabled }), label && (jsxRuntime.jsx("label", { className: "form-check-label", htmlFor: id, children: label }))] }));
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

function DIcon({ icon, theme, className = '', size = '1.5rem', isLoading = false, loadingDuration = 1.8, hasCircle = false, circleSize = `calc(var(--${PREFIX_BS}icon-component-size) * 1)`, color, backgroundColor, familyClass = 'bi', familyPrefix = 'bi-', }) {
    const getColorStyle = react.useMemo(() => {
        if (color) {
            return { [`--${PREFIX_BS}component-color`]: color };
        }
        if (theme) {
            return { [`--${PREFIX_BS}icon-component-color`]: `var(--${PREFIX_BS}${theme})` };
        }
        return {};
    }, [color, theme]);
    const getBackgroundStyle = react.useMemo(() => {
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
    const getCircleSizeStyle = react.useMemo(() => {
        if (hasCircle) {
            return { [`--${PREFIX_BS}icon-component-padding`]: circleSize };
        }
        return { [`--${PREFIX_BS}icon-component-padding`]: '0' };
    }, [circleSize, hasCircle]);
    const generateStyleVariables = react.useMemo(() => (Object.assign(Object.assign(Object.assign({ [`--${PREFIX_BS}icon-component-size`]: size, [`--${PREFIX_BS}icon-component-loading-duration`]: `${loadingDuration}s` }, getColorStyle), getBackgroundStyle), getCircleSizeStyle)), [size, loadingDuration, getColorStyle, getBackgroundStyle, getCircleSizeStyle]);
    const generateClasses = react.useMemo(() => ({
        'd-icon': true,
        [className]: !!className,
        [familyClass]: true,
        [`${familyPrefix}${icon}`]: true,
        'd-icon-loading': isLoading,
    }), [familyClass, familyPrefix, icon, className, isLoading]);
    return (jsxRuntime.jsx("i", { className: classNames__default["default"](generateClasses), style: generateStyleVariables }));
}

function DSummaryCard({ title, description, icon, iconSize, iconTheme, Summary, }) {
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("h6", { className: "fw-bold fs-6", children: title }), jsxRuntime.jsx("p", { className: "fs-8", children: description }), jsxRuntime.jsxs("div", { className: "bg-white rounded p-4 d-flex gap-3 shadow-sm text-gray-700 fs-8", children: [jsxRuntime.jsx(DIcon, { icon: icon, theme: iconTheme, size: iconSize }), Summary] })] }));
}

function DAlert({ type = 'light', icon, iconFamilyClass, iconFamilyPrefix, showIcon = false, showClose, onClose, children, id, className, style, }) {
    const generateClasses = react.useMemo(() => ({
        alert: true,
        [`alert-${type}`]: true,
        'fade show': !!showClose,
        className: !!className,
    }), [type, showClose, className]);
    const getIcon = react.useMemo(() => icon || ALERT_TYPE_ICON[type] || '', [icon, type]);
    const generateStyleVariables = react.useMemo(() => (Object.assign(Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}alert-component-separator-opacity`]: '0.3' }), type === 'light' && {
        [`--${PREFIX_BS}alert-component-icon-color`]: `var(--${PREFIX_BS}secondary)`,
    })), [style, type]);
    return (jsxRuntime.jsxs("div", { className: classNames__default["default"](generateClasses), style: generateStyleVariables, role: "alert", id: id, children: [(showIcon || icon) && (jsxRuntime.jsx(DIcon, Object.assign({ className: "alert-icon", icon: getIcon }, iconFamilyClass && { familyClass: iconFamilyClass }, iconFamilyPrefix && { familyPrefix: iconFamilyPrefix }))), jsxRuntime.jsx("div", { className: "alert-text", children: children }), showClose && (jsxRuntime.jsx("div", { className: "alert-separator" })), showClose && (jsxRuntime.jsx("button", { type: "button", className: "btn-close", "aria-label": "Close", onClick: onClose, children: jsxRuntime.jsx(DIcon, { className: "alert-close-icon", icon: "x-lg", familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) }))] }));
}

function DBoxFile(_a) {
    var { icon = 'cloud-upload', iconFamilyClass, iconFamilyPrefix, isDisabled = false, children } = _a, dropzoneOptions = tslib.__rest(_a, ["icon", "iconFamilyClass", "iconFamilyPrefix", "isDisabled", "children"]);
    const { acceptedFiles, getRootProps, getInputProps, } = reactDropzone.useDropzone(Object.assign({ disabled: isDisabled }, dropzoneOptions));
    return (jsxRuntime.jsxs("section", { className: classNames__default["default"]('d-box-file', {
            'd-box-file-selected': !!acceptedFiles.length,
        }), children: [jsxRuntime.jsxs("div", Object.assign({}, getRootProps({
                className: classNames__default["default"]('d-box-file-dropzone', {
                    disabled: isDisabled,
                }),
            }), { children: [jsxRuntime.jsx("input", Object.assign({}, getInputProps())), jsxRuntime.jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }), jsxRuntime.jsx("div", { className: "d-box-content", children: children })] })), !!acceptedFiles.length && (jsxRuntime.jsx("aside", { className: "d-box-files", children: acceptedFiles.map((file) => (jsxRuntime.jsx("div", { className: "d-box-files-text", children: `${file.name} - ${file.size} bytes` }, file.name))) }))] }));
}

function DButton({ theme = 'primary', size, variant, state, text = '', iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, value, type = 'button', isPill = false, isLoading = false, isDisabled = false, isStopPropagationEnabled = true, className, onClick, }) {
    const generateClasses = react.useMemo(() => {
        const variantClass = variant
            ? `btn-${variant}-${theme}`
            : `btn-${theme}`;
        return Object.assign(Object.assign(Object.assign({ btn: true, [variantClass]: true }, size && { [`btn-${size}`]: true }), (state && state !== 'disabled') && { [state]: true }), { loading: isLoading });
    }, [variant, theme, size, state, isLoading]);
    const generateStyleVariables = react.useMemo(() => {
        if (isPill) {
            return {
                [`--${PREFIX_BS}btn-component-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
                [`--${PREFIX_BS}btn-component-lg-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
                [`--${PREFIX_BS}btn-component-sm-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)`,
            };
        }
        return {};
    }, [isPill]);
    const clickHandler = react.useCallback((event) => {
        if (isStopPropagationEnabled) {
            event.stopPropagation();
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    }, [isStopPropagationEnabled, onClick]);
    return (jsxRuntime.jsxs("button", Object.assign({ className: classNames__default["default"](generateClasses, className), style: generateStyleVariables, type: type, disabled: state === 'disabled' || isLoading || isDisabled }, value && { value }, { onClick: clickHandler, children: [iconStart && (jsxRuntime.jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })), (text && !isLoading) && (jsxRuntime.jsx("span", { children: text })), isLoading && (jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) })), iconEnd && (jsxRuntime.jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix }))] })));
}

function DCard({ className, style, children, }) {
    return (jsxRuntime.jsx("div", { style: style, className: classNames__default["default"]('card', className), children: children }));
}

function DCardBody({ className, children, }) {
    return (jsxRuntime.jsx("div", { className: classNames__default["default"]('card-body', className), children: children }));
}

function DCardFooter({ className, children, }) {
    return (jsxRuntime.jsx("div", { className: classNames__default["default"]('card-footer', className), children: children }));
}

function DCardHeader({ className, children, }) {
    return (jsxRuntime.jsx("div", { className: classNames__default["default"]('card-header', className), children: children }));
}

function DCardAccount({ className, icon, theme, name, number, balance, balanceText, onClick, actionText, }) {
    return (jsxRuntime.jsx(DCard, { className: classNames__default["default"]('d-card-account', className), children: jsxRuntime.jsxs(DCardBody, { children: [jsxRuntime.jsxs("div", { className: "d-flex gap-3 align-items-center", children: [jsxRuntime.jsx(DIcon, { icon: icon, hasCircle: true, theme: theme, size: "1.5rem" }), jsxRuntime.jsxs("div", { className: "d-block flex-grow-1", children: [jsxRuntime.jsx("p", { className: "text-gray-700", children: name }), jsxRuntime.jsx("small", { className: "text-gray-500", children: number })] })] }), jsxRuntime.jsxs("div", { className: "d-block", children: [jsxRuntime.jsx("p", { className: "fw-bold fs-6 text-body", children: balance }), jsxRuntime.jsx("small", { className: "text-gray-700", children: balanceText })] }), jsxRuntime.jsx("div", { className: "d-flex justify-content-end", children: jsxRuntime.jsx(DButton, { text: actionText, variant: "link", size: "sm", theme: "secondary", iconEnd: "chevron-right", onClick: onClick }) })] }) }));
}

function DCarousel(_a) {
    var { children, className, options } = _a, props = tslib.__rest(_a, ["children", "className", "options"]);
    return (jsxRuntime.jsx(reactSplide.Splide, Object.assign({ className: classNames__default["default"]('d-carousel', className), options: Object.assign(Object.assign({}, options), { classes: {
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
    var { className } = _a, props = tslib.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(reactSplide.SplideSlide, Object.assign({ className: classNames__default["default"]('d-carousel-slide', className) }, props)));
}

function DChip({ theme = 'primary', text, icon, iconFamilyClass, iconFamilyPrefix, showClose = false, onClose, }) {
    const generateClasses = react.useMemo(() => ({
        'd-chip': true,
        [`d-chip-${theme}`]: !!theme,
    }), [theme]);
    return (jsxRuntime.jsxs("span", { className: classNames__default["default"](generateClasses), children: [icon && (jsxRuntime.jsx("div", { className: "d-chip-icon-container", children: jsxRuntime.jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) })), jsxRuntime.jsx("span", { children: text }), showClose && (jsxRuntime.jsx("button", { type: "button", className: "d-chip-icon-container", onClick: onClose, children: jsxRuntime.jsx(DIcon, { icon: "x-lg" }) }))] }));
}

function DCollapse({ id, className, Component, hasSeparator = false, defaultCollapsed = false, onChange, children, }) {
    const [toggle, setToggle] = react.useState(defaultCollapsed);
    const onChangeCollapse = () => setToggle((prev) => !prev);
    react.useEffect(() => {
        if (onChange) {
            onChange(toggle);
        }
    }, [toggle, onChange]);
    react.useEffect(() => {
        setToggle(defaultCollapsed);
    }, [defaultCollapsed]);
    const generateStyles = react.useMemo(() => ({
        [`--${PREFIX_BS}collapse-separator-display`]: hasSeparator ? 'block' : 'none',
    }), [hasSeparator]);
    return (jsxRuntime.jsxs("div", { id: id, className: classNames__default["default"]('collapse-container', className), children: [jsxRuntime.jsxs("button", { className: "collapse-button", type: "button", onClick: onChangeCollapse, children: [jsxRuntime.jsx("div", { className: "flex-grow-1", children: Component }), jsxRuntime.jsx(DIcon, { color: `var(--${PREFIX_BS}gray)`, size: `var(--${PREFIX_BS}ref-fs-small)`, icon: toggle ? 'chevron-up' : 'chevron-down' })] }), toggle && (jsxRuntime.jsx("div", { className: classNames__default["default"]({
                    'collapse-body': true,
                }), style: generateStyles, children: children }))] }));
}

function DCollapseIconText({ children, icon, iconSize = '1.5rem', iconTheme = 'primary', title, iconFamilyClass, iconFamilyPrefix, }) {
    return (jsxRuntime.jsx(DCollapse, { defaultCollapsed: true, className: "d-collapse-icon-text", Component: (jsxRuntime.jsxs("div", { className: "d-collapse-icon-text-header", children: [jsxRuntime.jsx(DIcon, { icon: icon, size: iconSize, theme: iconTheme, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, hasCircle: true }), jsxRuntime.jsx("span", { className: "d-collapse-icon-text-title", children: title })] })), children: children }));
}

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
const liquidParser = {
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
    return currency__default["default"](amount, options).format();
}

const LANG = liquidParser.parse('{{site.language}}');
async function configureI8n(resources, _a = {}) {
    var { lng = LANG, fallbackLng = 'es' } = _a, config = tslib.__rest(_a, ["lng", "fallbackLng"]);
    return i18n__default["default"]
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

const LiquidContext = react.createContext({
    language: 'en',
    currency: {
        symbol: '$',
        precision: 2,
        separator: ',',
        decimal: '.',
    },
});
function LiquidContextProvider({ children, }) {
    const value = react.useMemo(() => ({
        language: liquidParser.parse('{{site.language}}'),
        currency: {
            symbol: liquidParser.parse('{{vars.currency-symbol}}'),
            precision: parseInt(liquidParser.parse('{{vars.currency-precision}}'), 10),
            separator: liquidParser.parse('{{vars.currency-separator}}'),
            decimal: liquidParser.parse('{{vars.currency-decimal}}'),
        },
    }), []);
    return (jsxRuntime.jsx(LiquidContext.Provider, { value: value, children: children }));
}
function useLiquidContext() {
    const context = react.useContext(LiquidContext);
    if (context === undefined) {
        throw new Error('useLiquidContext was used outside of LiquidContextProvider');
    }
    return context;
}
const LiquidContext$1 = LiquidContext;

/**
 * useStackState inspired from rooks
 * @see https://github.com/imbhargav5/rooks/blob/main/packages/rooks/src/hooks/useStackState.ts
 * @description Manages a stack with react hooks.
 * @param initialList Initial value of the list
 * @returns The list and controls to modify the stack
 * @see https://react-hooks.org/docs/useStackState
 */
function useStackState(initialList) {
    const [list, setList] = react.useState(initialList);
    const { length } = list;
    const push = react.useCallback((item) => {
        setList((prevList) => [
            ...prevList,
            item,
        ]);
    }, []);
    const pop = react.useCallback(() => {
        setList((prevList) => {
            if (prevList.length === 0) {
                return prevList;
            }
            const [, ...newList] = prevList;
            return newList;
        });
    }, []);
    const peek = react.useCallback(() => {
        if (list.length > 0) {
            return list[list.length - 1];
        }
        return undefined;
    }, [list]);
    const clear = () => setList([]);
    const isEmpty = react.useCallback(() => list.length === 0, [list]);
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

const ModalContext = react.createContext(undefined);
function enhanceModal(Modal, callbacks) {
    return function EnhancedModal(_a) {
        var { name, payload } = _a, otherProps = tslib.__rest(_a, ["name", "payload"]);
        react.useEffect(() => {
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
    const [hasPortal, setHasPortal] = react.useState(false);
    react.useEffect(() => {
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
    react.useEffect(() => {
        if (stack.length) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0';
        }
        else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        }
    }, [stack.length]);
    const openModal = react.useCallback((modalName, { payload, callbacks } = { payload: {} }) => {
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
    const closeModal = react.useCallback((context = { fromModal: false }) => {
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
    const value = react.useMemo(() => ({
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
    const context = react.useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModalContext was used outside of ModalContextProvider');
    }
    return context;
}

const OffcanvasContext = react.createContext(undefined);
function enhanceOffcanvas(Offcanvas, callbacks) {
    return function EnhancedOffcanvas(_a) {
        var { name, payload } = _a, otherProps = tslib.__rest(_a, ["name", "payload"]);
        react.useEffect(() => {
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
    const [hasPortal, setHasPortal] = react.useState(false);
    react.useEffect(() => {
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
    react.useEffect(() => {
        if (stack.length) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0';
        }
        else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        }
    }, [stack.length]);
    const openOffcanvas = react.useCallback((offcanvasName, { payload, callbacks } = { payload: {} }) => {
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
    const closeOffcanvas = react.useCallback((context = { fromOffcanvas: false }) => {
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
    const value = react.useMemo(() => ({
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
    const context = react.useContext(OffcanvasContext);
    if (context === undefined) {
        throw new Error('useOffcanvasContext was used outside of OffcanvasContextProvider');
    }
    return context;
}

function useFormatCurrency(...args) {
    const { currency } = useLiquidContext();
    const format = react.useCallback((value) => formatCurrency(value, currency), [currency]);
    const values = (args || []).map((value) => (formatCurrency(value !== null && value !== void 0 ? value : 0, currency)));
    return {
        format,
        values,
    };
}

function DCurrencyText({ value, className, }) {
    const { values: [valueFormatted] } = useFormatCurrency(value);
    return (jsxRuntime.jsx("span", { className: className, children: valueFormatted }));
}

function DInput({ id, style, className, name, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, placeholder = '', type = 'text', value = '', innerInputMode, pattern, isDisabled = false, isReadOnly = false, isLoading = false, iconFamilyClass, iconFamilyPrefix, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, hint, isInvalid = false, isValid = false, inputStart, onChange, onBlur, onFocus, onWheel, onIconStartClick, onIconEndClick, }, ref) {
    const innerRef = react.useRef(null);
    const [internalValue, setInternalValue] = react.useState(value);
    react.useEffect(() => {
        setInternalValue(value);
    }, [value]);
    react.useImperativeHandle(ref, () => ({
        blur() {
            var _a;
            (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        },
        focus() {
            var _a;
            (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        },
    }), []);
    const handleInputChange = react.useCallback((event) => {
        setInternalValue(event.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    return (jsxRuntime.jsxs("div", { className: classNames__default["default"]({
            'd-input': true,
            className: !!className,
        }), style: style, children: [label && (jsxRuntime.jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsxRuntime.jsx(DIcon, { className: "d-input-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxRuntime.jsxs("div", { className: "d-input-control", children: [jsxRuntime.jsxs("div", { className: classNames__default["default"]({
                            'input-group': true,
                            'has-validation': isInvalid,
                            disabled: isDisabled || isLoading,
                        }), children: [!!inputStart && (jsxRuntime.jsx("div", { className: "input-group-text", children: inputStart })), iconStart && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: onIconStartClick, disabled: isDisabled || isLoading, children: iconStart && (jsxRuntime.jsx(DIcon, { className: "d-input-icon", icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })) })), jsxRuntime.jsx("input", Object.assign({ ref: innerRef, id: id, name: name, type: type, className: classNames__default["default"]('form-control', {
                                    'is-invalid': isInvalid,
                                    'is-valid': isValid,
                                }), placeholder: placeholder, "aria-label": label, disabled: isDisabled || isLoading, readOnly: isReadOnly, value: internalValue, "aria-describedby": `${id}Add ${id}Hint`, pattern: pattern, onChange: (event) => handleInputChange(event), onBlur: onBlur, onFocus: onFocus, onWheel: onWheel }, innerInputMode && { inputMode: innerInputMode })), ((isInvalid || isValid) && !iconEnd && !isLoading) && (jsxRuntime.jsx("span", { className: "input-group-text", id: `${id}State`, children: jsxRuntime.jsx(DIcon, { className: "d-input-validation-icon", icon: isInvalid ? 'exclamation-circle' : 'check', familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) })), (iconEnd && !isLoading) && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: onIconEndClick, disabled: isDisabled || isLoading, children: iconEnd && (jsxRuntime.jsx(DIcon, { className: "d-input-icon", icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) })), isLoading && (jsxRuntime.jsx("div", { className: "input-group-text d-input-icon", children: jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsxRuntime.jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })] }));
}
const ForwardedDInput = react.forwardRef(DInput);
ForwardedDInput.displayName = 'DInput';
const DInput$1 = ForwardedDInput;

function DDatePickerTime(_a) {
    var { value, onChange, id, label } = _a, props = tslib.__rest(_a, ["value", "onChange", "id", "label"]);
    return (jsxRuntime.jsxs("div", { className: "d-flex align-items-center gap-2 flex-column d-datepicker-time", children: [label && (jsxRuntime.jsx("p", { className: "d-datepicker-time-label", children: label })), jsxRuntime.jsx(DInput$1, Object.assign({}, onChange && {
                onChange: (event) => onChange(event.target.value),
            }, { type: "time", id: id, value: value }, props))] }));
}

function DDatePickerInput(_a, ref) {
    var { value, onClick, id, iconEnd } = _a, props = tslib.__rest(_a, ["value", "onClick", "id", "iconEnd"]);
    react.useImperativeHandle(ref, () => ({}), []);
    return (jsxRuntime.jsx("div", { role: "button", onClick: onClick, onKeyDown: () => { }, tabIndex: -1, children: jsxRuntime.jsx(DInput$1, Object.assign({ isReadOnly: true, type: "text", id: id, value: value, onIconEndClick: onClick, iconEnd: iconEnd }, props)) }));
}
const ForwardedDDatePickerInput = react.forwardRef(DDatePickerInput);
ForwardedDDatePickerInput.displayName = 'DDatePickerInput';
const DDatePickerInput$1 = ForwardedDDatePickerInput;

function DMonthPicker(_a) {
    var { onChangeDate, date } = _a, props = tslib.__rest(_a, ["onChangeDate", "date"]);
    const { language } = useLiquidContext();
    const selected = react.useMemo(() => luxon.DateTime.fromISO(date).toJSDate(), [date]);
    const locale = react.useMemo(() => language || 'en', [language]);
    const dateFormatted = react.useMemo(() => (luxon.DateTime.fromISO(date).setLocale(locale).toFormat('MMMM yyyy')), [date, locale]);
    return (jsxRuntime.jsx(DatePicker__default["default"], Object.assign({ showMonthYearPicker: true, selected: selected, calendarClassName: "d-month-picker", onChange: onChangeDate, customInput: (jsxRuntime.jsx("p", { className: "fw-bold text-capitalize", children: dateFormatted })), renderCustomHeader: ({ monthDate, decreaseYear, increaseYear, prevYearButtonDisabled, nextYearButtonDisabled, }) => (jsxRuntime.jsxs("div", { className: "d-flex align-items-center justify-content-between gap-4 fs-6 bg-dark", children: [jsxRuntime.jsx(DButton, { iconStart: "chevron-left", size: "sm", variant: "link", theme: "light", onClick: decreaseYear, isDisabled: prevYearButtonDisabled }), jsxRuntime.jsx("p", { className: "fs-6 fw-bold", children: monthDate.getFullYear() }), jsxRuntime.jsx(DButton, { iconStart: "chevron-right", size: "sm", variant: "link", theme: "light", onClick: increaseYear, isDisabled: nextYearButtonDisabled })] })) }, props)));
}

function DDatePickerHeader({ monthDate, changeMonth, changeYear, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, withMonthSelector, decreaseMonthIcon, increaseMonthIcon, iconSize, buttonVariant, buttonTheme, }) {
    const { language } = useLiquidContext();
    const locale = react.useMemo(() => language || 'en', [language]);
    const onChangeDate = react.useCallback((value) => {
        if (value) {
            changeMonth(luxon.DateTime.fromJSDate(value).month - 1);
            changeYear(luxon.DateTime.fromJSDate(value).year);
        }
    }, [changeMonth, changeYear]);
    return (jsxRuntime.jsxs("div", { className: "d-flex align-items-center justify-content-between d-datepicker-header", children: [jsxRuntime.jsx(DButton, { iconStart: decreaseMonthIcon, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: decreaseMonth, isDisabled: prevMonthButtonDisabled }), jsxRuntime.jsx(DMonthPicker, Object.assign({}, !withMonthSelector && { readOnly: true }, { date: monthDate.toISOString(), onChangeDate: onChangeDate }, locale && { locale })), jsxRuntime.jsx(DButton, { iconStart: increaseMonthIcon, size: iconSize, variant: buttonVariant, theme: buttonTheme, onClick: increaseMonth, isDisabled: nextMonthButtonDisabled })] }));
}

function DDatePicker(_a) {
    var { onChangeDate, date, selectsRange, withMonthSelector, inputLabel, inputIcon = 'calendar', inputId = 'input-calendar', timeId = 'input-time', timeLabel, headerDecreaseMonthIcon = 'chevron-left', headerIncreaseMonthIcon = 'chevron-right', headerIconSize = 'sm', headerButtonVariant = 'link', headerButtonTheme = 'dark' } = _a, props = tslib.__rest(_a, ["onChangeDate", "date", "selectsRange", "withMonthSelector", "inputLabel", "inputIcon", "inputId", "timeId", "timeLabel", "headerDecreaseMonthIcon", "headerIncreaseMonthIcon", "headerIconSize", "headerButtonVariant", "headerButtonTheme"]);
    const selected = react.useMemo(() => luxon.DateTime.fromISO(date).toJSDate(), [date]);
    const { language } = useLiquidContext();
    const locale = react.useMemo(() => language || 'en', [language]);
    const DatePickerHeader = react.useCallback((headerProps) => (jsxRuntime.jsx(DDatePickerHeader, Object.assign({}, headerProps, { decreaseMonthIcon: headerDecreaseMonthIcon, increaseMonthIcon: headerIncreaseMonthIcon, iconSize: headerIconSize, buttonVariant: headerButtonVariant, buttonTheme: headerButtonTheme, withMonthSelector: !!withMonthSelector }))), [headerButtonTheme,
        headerButtonVariant,
        headerDecreaseMonthIcon,
        headerIconSize,
        headerIncreaseMonthIcon,
        withMonthSelector,
    ]);
    return (jsxRuntime.jsx(DatePicker__default["default"], Object.assign({ selected: selected, calendarClassName: "m-date-picker", onChange: onChangeDate, renderCustomHeader: (headerProps) => jsxRuntime.jsx(DatePickerHeader, Object.assign({}, headerProps)), customInput: jsxRuntime.jsx(DDatePickerInput$1, { id: inputId, iconEnd: inputIcon }), customTimeInput: jsxRuntime.jsx(DDatePickerTime, { id: timeId, label: timeLabel }), selectsRange: selectsRange }, locale && { locale }, props)));
}

function DFormikInput(_a) {
    var { name, hint } = _a, props = tslib.__rest(_a, ["name", "hint"]);
    const [field, meta, helpers] = formik.useField(name);
    return (jsxRuntime.jsx(DInput$1, Object.assign({}, props, { name: field.name, value: field.value, onChange: ({ target }) => helpers.setValue(target.value), onBlur: ({ target }) => field.onBlur(target.value), isInvalid: !!meta.error, hint: meta.error || hint })));
}

function DInputCurrencyBase(_a) {
    var { id, name, label = '', placeholder = '', value, isDisabled = false, isReadOnly = false, isLoading = false, hint, isInvalid = false, isValid = false, minValue, maxValue, currencyOptions, currencyCode, onChange, onBlur, onFocus } = _a, rest = tslib.__rest(_a, ["id", "name", "label", "placeholder", "value", "isDisabled", "isReadOnly", "isLoading", "hint", "isInvalid", "isValid", "minValue", "maxValue", "currencyOptions", "currencyCode", "onChange", "onBlur", "onFocus"]);
    const [internalValueAsNumber, setInternalValueAsNumber] = react.useState(value);
    const [internalValueAsFormat, setInternalValueAsFormat] = react.useState('');
    const [internalType, setInternalType] = react.useState('text');
    const [internalIsInvalid, setInternalIsInvalid] = react.useState(false);
    const currencyInputRef = react.useRef(null);
    const changeHandler = react.useCallback((event) => {
        event.stopPropagation();
        const eventValue = event.target.value;
        const valueAsNumber = eventValue ? parseFloat(eventValue) : undefined;
        const valueAsFormat = valueAsNumber !== undefined
            ? currency__default["default"](valueAsNumber, Object.assign(Object.assign({}, currencyOptions), { symbol: '' })).format()
            : '';
        setInternalValueAsNumber(valueAsNumber);
        setInternalValueAsFormat(valueAsFormat);
        onChange === null || onChange === void 0 ? void 0 : onChange(valueAsNumber);
    }, [currencyOptions, onChange]);
    const blurHandler = react.useCallback((event) => {
        event.stopPropagation();
        setInternalType('text');
        setInternalValueAsFormat(internalValueAsNumber !== undefined
            ? currency__default["default"](internalValueAsNumber, Object.assign(Object.assign({}, currencyOptions), { symbol: '' })).format()
            : '');
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(internalValueAsNumber);
    }, [currencyOptions, internalValueAsNumber, onBlur]);
    const focusHandler = react.useCallback((event) => {
        event.stopPropagation();
        setInternalType('number');
        setInternalValueAsFormat(internalValueAsNumber !== undefined
            ? currency__default["default"](internalValueAsNumber, Object.assign(Object.assign({}, currencyOptions), { symbol: '' })).format()
            : '');
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(internalValueAsNumber);
    }, [currencyOptions, internalValueAsNumber, onFocus]);
    const wheelHandler = react.useCallback((event) => {
        var _a;
        event.stopPropagation();
        (_a = currencyInputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    }, []);
    const isValidValue = react.useCallback((internalValue) => {
        if (internalValue === undefined) {
            return true;
        }
        if (internalType === 'number') {
            return ((minValue === undefined || internalValue >= minValue)
                && (maxValue === undefined || internalValue <= maxValue));
        }
        return true;
    }, [internalType, maxValue, minValue]);
    const valueAsType = react.useMemo(() => {
        if (internalType === 'number') {
            return internalValueAsNumber;
        }
        return internalValueAsFormat;
    }, [internalType, internalValueAsFormat, internalValueAsNumber]);
    react.useEffect(() => {
        setInternalIsInvalid(!isValidValue(value));
    }, [isValidValue, value]);
    react.useEffect(() => {
        setInternalValueAsNumber(value);
    }, [value]);
    const generateStyleVariables = react.useMemo(() => ({
        [`--${PREFIX_BS}input-currency-component-symbol-color`]: `var(--${PREFIX_BS}secondary)`,
        [`--${PREFIX_BS}input-currency-symbol-color`]: `var(--${PREFIX_BS}input-currency-component-symbol-color)`,
    }), []);
    const generateSymbolStyleVariables = react.useMemo(() => ({
        color: `var(--${PREFIX_BS}m-input-currency-symbol-color)`,
    }), []);
    return (jsxRuntime.jsx(DInput$1, Object.assign({ ref: currencyInputRef, style: generateStyleVariables, id: id, name: name, label: label, placeholder: placeholder, value: valueAsType, isDisabled: isDisabled, isReadOnly: isReadOnly, isLoading: isLoading, hint: hint, isInvalid: isInvalid || internalIsInvalid, isValid: isValid, type: internalType, innerInputMode: "decimal", pattern: "^[0-9]", onChange: changeHandler, onBlur: blurHandler, onFocus: focusHandler, onWheel: wheelHandler, inputStart: (jsxRuntime.jsx("span", { slot: "input-start", style: generateSymbolStyleVariables, children: currencyCode || currencyOptions.symbol })) }, rest)));
}

function DInputCurrency(props) {
    const { currency } = useLiquidContext();
    return (jsxRuntime.jsx(DInputCurrencyBase, Object.assign({ currencyOptions: currency }, props)));
}

function DFormikInputCurrency(_a) {
    var { name, hint } = _a, props = tslib.__rest(_a, ["name", "hint"]);
    const [field, meta, helpers] = formik.useField(name);
    return (jsxRuntime.jsx(DInputCurrency, Object.assign({}, props, { name: field.name, value: field.value, onChange: (value) => helpers.setValue(value), onBlur: (value) => field.onBlur(value), isInvalid: !!meta.error, hint: (meta === null || meta === void 0 ? void 0 : meta.error) || hint })));
}

function DInputSelect({ id, name, label = '', className, options, labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, isDisabled = false, isLoading = false, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, hint, selectedOption, valueExtractor, labelExtractor, onChange, onBlur, onIconStartClick, onIconEndClick, }) {
    const internalValueExtractor = react.useCallback((option) => {
        if (valueExtractor) {
            return valueExtractor(option);
        }
        if ('value' in option) {
            return option === null || option === void 0 ? void 0 : option.value;
        }
        throw new Error('Must provide a valueExtractor for custom object forms');
    }, [valueExtractor]);
    const internalLabelExtractor = react.useCallback((option) => {
        if (labelExtractor) {
            return labelExtractor(option);
        }
        if ('label' in option) {
            return option === null || option === void 0 ? void 0 : option.label;
        }
        throw new Error('Must provide a labelExtractor for custom object forms');
    }, [labelExtractor]);
    const changeHandler = react.useCallback((event) => {
        const selected = options
            .find((option) => internalValueExtractor(option).toString() === event.currentTarget.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(selected);
    }, [onChange, options, internalValueExtractor]);
    const blurHandler = react.useCallback((event) => {
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, [onBlur]);
    const iconStartClickHandler = react.useCallback((event) => {
        onIconStartClick === null || onIconStartClick === void 0 ? void 0 : onIconStartClick(event);
    }, [onIconStartClick]);
    const iconEndClickHandler = react.useCallback((event) => {
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick(event);
    }, [onIconEndClick]);
    return (jsxRuntime.jsxs("div", { className: classNames__default["default"]('d-input', className), children: [label && (jsxRuntime.jsxs("label", { htmlFor: id, children: [label, labelIcon && (jsxRuntime.jsx(DIcon, { className: "mdinput-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxRuntime.jsxs("div", { className: "d-input-control", children: [jsxRuntime.jsxs("div", { className: classNames__default["default"]({
                            'input-group': true,
                            disabled: isDisabled || isLoading,
                        }), children: [iconStart && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: iconStartClickHandler, disabled: isDisabled || isLoading, children: iconStart && (jsxRuntime.jsx(DIcon, { className: "d-input-icon", icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix })) })), jsxRuntime.jsx("select", Object.assign({ id: id, name: name, className: "form-select", "aria-label": label, disabled: isDisabled || isLoading, "aria-describedby": `${id}Add ${id}Hint`, onChange: changeHandler, onBlur: blurHandler }, selectedOption && { value: internalValueExtractor(selectedOption) }, { children: options.map((option) => (jsxRuntime.jsx("option", { value: internalValueExtractor(option), children: internalLabelExtractor(option) }, internalValueExtractor(option)))) })), iconEnd && !isLoading && (jsxRuntime.jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: iconEndClickHandler, disabled: isDisabled || isLoading, children: iconEnd && (jsxRuntime.jsx(DIcon, { className: "d-input-icon", icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) })), isLoading && (jsxRuntime.jsx("div", { className: "input-group-text form-control-icon loading", children: jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsxRuntime.jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })] }));
}

function DFormikInputSelect(_a) {
    var { name } = _a, props = tslib.__rest(_a, ["name"]);
    const [field, , helpers] = formik.useField(name);
    return (jsxRuntime.jsx(DInputSelect, Object.assign({}, props, { name: field.name, selectedOption: field.value, onChange: (selected) => helpers.setValue(selected), onBlur: (selected) => field.onBlur(selected) })));
}

function DInputCheck({ type, name, label, isChecked = false, id, isDisabled = false, isIndeterminate, value, onChange, }) {
    const innerRef = react.useRef(null);
    const handleChange = react.useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    react.useEffect(() => {
        if (innerRef.current) {
            innerRef.current.indeterminate = Boolean(isIndeterminate);
        }
    }, [isIndeterminate]);
    react.useEffect(() => {
        if (innerRef.current) {
            innerRef.current.checked = isChecked;
        }
    }, [isChecked]);
    if (!label) {
        return (jsxRuntime.jsx("input", { ref: innerRef, onChange: handleChange, className: "form-check-input", id: id, disabled: isDisabled, type: type, name: name, value: value }));
    }
    return (jsxRuntime.jsxs("div", { className: "form-check", children: [jsxRuntime.jsx("input", { ref: innerRef, onChange: handleChange, className: "form-check-input", id: id, disabled: isDisabled, type: type, name: name, value: value }), jsxRuntime.jsx("label", { className: "form-check-label", htmlFor: id, children: label })] }));
}

function DInputCounter(_a) {
    var { id, name, label = '', value, isDisabled = false, isReadOnly = false, isLoading = false, iconStart = 'dash-square', iconEnd = 'plus-square', hint, isInvalid = false, isValid = false, minValue, maxValue, style, className, onChange } = _a, rest = tslib.__rest(_a, ["id", "name", "label", "value", "isDisabled", "isReadOnly", "isLoading", "iconStart", "iconEnd", "hint", "isInvalid", "isValid", "minValue", "maxValue", "style", "className", "onChange"]);
    const [internalIsInvalid, setInternalIsInvalid] = react.useState(false);
    const [internalValue, setInternalValue] = react.useState(value);
    react.useEffect(() => {
        setInternalValue(value);
    }, [value]);
    react.useEffect(() => {
        onChange === null || onChange === void 0 ? void 0 : onChange(internalValue);
    }, [internalValue, onChange]);
    const changeHandler = react.useCallback((event) => {
        event.stopPropagation();
        const newValue = parseInt(event.target.value || '0', 10);
        setInternalValue(newValue);
    }, []);
    const clickHandler = react.useCallback((action) => {
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
    const generateStyleVariables = react.useMemo(() => (Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}input-component-form-control-text-align`]: 'center' })), [style]);
    react.useEffect(() => {
        setInternalIsInvalid(!(internalValue >= minValue && internalValue <= maxValue));
    }, [internalValue, minValue, maxValue]);
    return (jsxRuntime.jsx(DInput$1, Object.assign({ id: id, style: generateStyleVariables, className: className, name: name, label: label, value: internalValue, isDisabled: isDisabled, isReadOnly: isReadOnly, isLoading: isLoading, hint: hint, iconStart: iconStart, iconEnd: iconEnd, isInvalid: internalIsInvalid || isInvalid, isValid: isValid, type: "number", onChange: changeHandler, onIconStartClick: () => clickHandler(false), onIconEndClick: () => clickHandler(true) }, rest)));
}

function DInputPassword(_a) {
    var { id, name, label = '', placeholder = '', value = '', isDisabled = false, isReadOnly = false, isLoading = false, hint, isInvalid = false, isValid = false, onChange } = _a, rest = tslib.__rest(_a, ["id", "name", "label", "placeholder", "value", "isDisabled", "isReadOnly", "isLoading", "hint", "isInvalid", "isValid", "onChange"]);
    const [visible, setVisible] = react.useState(false);
    const changeHandler = react.useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event.target.value);
    }, [onChange]);
    const visibilityHandler = react.useCallback(() => {
        setVisible((prevVisible) => !prevVisible);
    }, []);
    return (jsxRuntime.jsx(DInput$1, Object.assign({ id: id, name: name, label: label, placeholder: placeholder, value: value, iconEnd: !visible ? 'eye-slash' : 'eye', type: !visible ? 'password' : 'text', isDisabled: isDisabled, isReadOnly: isReadOnly, isLoading: isLoading, hint: hint, isInvalid: isInvalid, isValid: isValid, onChange: changeHandler, onIconEndClick: visibilityHandler }, rest)));
}

function DInputPin({ id, label = '', labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, placeholder = '•', type = 'text', isDisabled = false, isLoading = false, isSecret = false, iconFamilyClass, iconFamilyPrefix, characters = 4, innerInputMode = 'text', hint, isInvalid = false, isValid = false, onChange, }) {
    const [pattern, setPattern] = react.useState('');
    react.useEffect(() => {
        setPattern(type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$');
    }, [type]);
    const nextInput = react.useCallback((event) => {
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
    const prevInput = react.useCallback((event) => {
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
    const focusInput = react.useCallback((event) => {
        // eslint-disable-next-line no-param-reassign
        event.currentTarget.value = '';
    }, []);
    const wheelInput = react.useCallback((event) => {
        event.currentTarget.blur();
    }, []);
    const formChange = react.useCallback((event) => {
        const formData = new FormData(event.currentTarget);
        const values = Array.from(formData.values()).join('');
        onChange === null || onChange === void 0 ? void 0 : onChange(values);
    }, [onChange]);
    const preventDefaultEvent = react.useCallback((event) => {
        event.preventDefault();
    }, []);
    return (jsxRuntime.jsxs("div", { className: "d-input-pin", children: [label && (jsxRuntime.jsxs("label", { htmlFor: "pinIndex0", children: [label, labelIcon && (jsxRuntime.jsx(DIcon, { className: "d-input-pin-icon", icon: labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: labelIconFamilyClass, familyPrefix: labelIconFamilyPrefix }))] })), jsxRuntime.jsxs("form", { id: id, className: "d-input-pin-controls", onInput: formChange, onSubmit: preventDefaultEvent, children: [Array.from({ length: characters }).map((_, index) => (jsxRuntime.jsx("input", Object.assign({ className: classNames__default["default"]({
                            'form-control': true,
                            'is-invalid': isInvalid,
                            'is-valid': isValid,
                        }), type: isSecret ? 'password' : type, "aria-describedby": `${id}State`, inputMode: innerInputMode, id: `pinIndex${index}`, name: `pin-${index}`, maxLength: 1, onChange: nextInput, onKeyDown: prevInput, onFocus: focusInput, onWheel: wheelInput, onClick: preventDefaultEvent, autoComplete: "off", placeholder: placeholder, disabled: isDisabled || isLoading, required: true }, type === 'number' && ({ min: 0, max: 9 })), index))), (isInvalid || isValid) && !isLoading && (jsxRuntime.jsx("span", { className: "input-group-text", id: `${id}State`, children: jsxRuntime.jsx(DIcon, { className: "d-input-pin-validation-icon", icon: isInvalid ? 'exclamation-circle' : 'check', familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }) })), isLoading && (jsxRuntime.jsx("div", { className: "input-group-text d-input-pin-icon", children: jsxRuntime.jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", children: jsxRuntime.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }))] }), hint && (jsxRuntime.jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] }));
}

function DInputSearch(_a) {
    var { id, name, label, placeholder, value, isDisabled, isReadOnly, isLoading, hint, isInvalid, isValid, onChange, onClick } = _a, rest = tslib.__rest(_a, ["id", "name", "label", "placeholder", "value", "isDisabled", "isReadOnly", "isLoading", "hint", "isInvalid", "isValid", "onChange", "onClick"]);
    const [internalValue, setInternalValue] = react.useState(value);
    react.useEffect(() => {
        setInternalValue(value);
    }, [value]);
    const changeHandler = react.useCallback((event) => {
        event.stopPropagation();
        setInternalValue(event.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    const clickHandler = react.useCallback(() => {
        onClick === null || onClick === void 0 ? void 0 : onClick(internalValue);
    }, [internalValue, onClick]);
    return (jsxRuntime.jsx(DInput$1, Object.assign({ id: id, name: name, label: label, placeholder: placeholder, value: internalValue, iconEnd: "search", isDisabled: isDisabled, isReadOnly: isReadOnly, isLoading: isLoading, hint: hint, isInvalid: isInvalid, isValid: isValid, onChange: changeHandler, onIconEndClick: clickHandler }, rest)));
}

function DList({ children, className, isFlush = false, isNumbered = false, isHorizontal = false, horizontalBreakpoint, }) {
    if (isFlush && isHorizontal) {
        throw new Error("Horizontal and Flush props don't work together");
    }
    return (jsxRuntime.jsx("div", { className: classNames__default["default"]('list-group', {
            'list-group-flush': isFlush && !isHorizontal,
            'list-group-numbered': isNumbered,
            'list-group-horizontal': isHorizontal && !horizontalBreakpoint,
        }, (isHorizontal && horizontalBreakpoint) && `list-group-horizontal-${horizontalBreakpoint}`, className), children: children }));
}

function DListItem({ children, className, isActive = false, isDisabled = false, theme, onClick, }) {
    const Tag = react.useMemo(() => (onClick ? 'button' : 'div'), [onClick]);
    return (jsxRuntime.jsx(Tag, Object.assign({}, Tag === 'button' && {
        onClick,
        type: 'button',
    }, { className: classNames__default["default"]('list-group-item list-group-item-action', theme ? `list-group-item-${theme}` : undefined, className, {
            active: isActive,
            disabled: isDisabled,
        }) }, isActive && { 'aria-current': true }, { children: children })));
}

function useToast() {
    const toast = react.useCallback((message, { position = 'top-right', type = 'info', showClose = true, autoClose = false, } = {}) => {
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

function useScreenshot() {
    const clipRef = react.useRef(null);
    const takeBlob = react.useCallback(async (type) => {
        if (!clipRef.current) {
            throw new Error('set the clipRef');
        }
        const canvas = await html2canvas__default["default"](clipRef === null || clipRef === void 0 ? void 0 : clipRef.current, {
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
    const download = react.useCallback(async () => {
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
    const share = react.useCallback(async () => {
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
    var { description, date, amount, classNameMovement } = _a, props = tslib.__rest(_a, ["description", "date", "amount", "classNameMovement"]);
    const { format } = useFormatCurrency();
    const value = react.useMemo(() => {
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
    return (jsxRuntime.jsx(DListItem, Object.assign({}, props, { children: jsxRuntime.jsxs("div", { className: classNames__default["default"]('d-flex justify-content-between align-items-center p-3 gap-3', classNameMovement), children: [jsxRuntime.jsxs("div", { className: "d-flex flex-column gap-1", children: [jsxRuntime.jsx("span", { className: "fs-6", children: description }), jsxRuntime.jsx("span", { className: "small text-gray-700", children: date })] }), jsxRuntime.jsx("span", { className: classNames__default["default"]('fs-6', value.theme), children: value.valueFormatted })] }) })));
}

function DModal({ name, className = '', isStatic, isScrollable, isCentered, isFullScreen, fullScreenFrom, modalSize, children, }) {
    const fullScreenClass = react.useMemo(() => {
        if (isFullScreen) {
            if (fullScreenFrom) {
                return `modal-fullscreen-${fullScreenFrom}-down`;
            }
            return 'modal-fullscreen';
        }
        return '';
    }, [fullScreenFrom, isFullScreen]);
    const generateClasses = react.useMemo(() => ({
        'modal fade show': true,
        [`${className}`]: !!className,
    }), [className]);
    const generateModalDialogClasses = react.useMemo(() => (Object.assign({ 'modal-dialog': true, 'modal-dialog-centered': !!isCentered, 'modal-dialog-scrollable': !!isScrollable, [fullScreenClass]: !!isFullScreen }, modalSize && { [`modal-${modalSize}`]: true })), [fullScreenClass, isCentered, isFullScreen, isScrollable, modalSize]);
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames__default["default"](generateClasses), id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false" }, isStatic && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), { children: jsxRuntime.jsx("div", { className: classNames__default["default"](generateModalDialogClasses), children: jsxRuntime.jsx("div", { className: "modal-content", children: children }) }) })));
}

function DModalBody({ children }) {
    return (jsxRuntime.jsx("div", { className: "d-modal-slot modal-body", children: children }));
}

function DModalFooter({ actionPlacement = 'fill', children, }) {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: "d-modal-separator" }), jsxRuntime.jsx("div", { className: `d-modal-slot modal-footer d-modal-action-${actionPlacement}`, children: children })] }));
}

function DModalHeader({ showCloseButton, onClose, children, }) {
    return (jsxRuntime.jsxs("div", { className: "modal-header", children: [showCloseButton && (jsxRuntime.jsx("button", { type: "button", className: "d-modal-close", "aria-label": "Close", onClick: onClose, children: jsxRuntime.jsx(DIcon, { icon: "x-lg" }) })), children] }));
}

function DOffcanvas({ name, className, isStatic, isScrollable, openFrom = 'end', children, }) {
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames__default["default"]('offcanvas show', {
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
    return (jsxRuntime.jsx("div", { className: "d-offcanvas-slot offcanvas-body", children: children }));
}

function DOffcanvasFooter({ footerActionPlacement = 'fill', children, }) {
    return (jsxRuntime.jsx("div", { className: `d-offcanvas-slot d-offcanvas-footer d-offcanvas-action-${footerActionPlacement}`, children: children }));
}

function DOffcanvasHeader({ showCloseButton, onClose, children, }) {
    return (jsxRuntime.jsxs("div", { className: "offcanvas-header", children: [jsxRuntime.jsx("div", { className: "d-offcanvas-slot", children: children }), showCloseButton && (jsxRuntime.jsx("button", { type: "button", className: "d-offcanvas-close", "aria-label": "Close", onClick: onClose, children: jsxRuntime.jsx(DIcon, { icon: "x-lg" }) }))] }));
}

function DPaginator(_a) {
    var { className, nextLabel, previousLabel, showArrows = true, page, onPageChange } = _a, props = tslib.__rest(_a, ["className", "nextLabel", "previousLabel", "showArrows", "page", "onPageChange"]);
    return (jsxRuntime.jsx(ResponsivePagination__default["default"], Object.assign({ extraClassName: classNames__default["default"]('pagination', className), nextClassName: classNames__default["default"]('arrow arrow-next', !nextLabel && 'no-label'), nextLabel: nextLabel, previousClassName: classNames__default["default"]('arrow arrow-prev', !previousLabel && 'no-label'), previousLabel: previousLabel, renderNav: showArrows, current: page, onPageChange: onPageChange }, props)));
}

function DPopover({ children, renderComponent, isOpen, setEventIsOpen, adjustContentToRender = false, }) {
    const [innerIsOpen, setInnerIsOpen] = react.useState(false);
    react.useEffect(() => {
        setInnerIsOpen(isOpen);
    }, [isOpen]);
    const onOpenChange = react.useCallback((value) => {
        setInnerIsOpen(value);
        if (setEventIsOpen) {
            setEventIsOpen(value);
        }
    }, [setEventIsOpen]);
    const { refs, floatingStyles, context } = react$1.useFloating({
        open: innerIsOpen,
        onOpenChange,
        middleware: [
            react$1.offset(0),
            react$1.flip({ fallbackAxisSideDirection: 'none' }),
            react$1.shift(),
        ],
        whileElementsMounted: react$1.autoUpdate,
    });
    const click = react$1.useClick(context);
    const dismiss = react$1.useDismiss(context);
    const role = react$1.useRole(context);
    const { getReferenceProps, getFloatingProps } = react$1.useInteractions([
        click,
        dismiss,
        role,
    ]);
    const headingId = react$1.useId();
    return (jsxRuntime.jsxs("div", { className: "d-popover", children: [jsxRuntime.jsx("div", Object.assign({ ref: refs.setReference }, getReferenceProps(), { children: renderComponent(innerIsOpen) })), innerIsOpen && (jsxRuntime.jsx(react$1.FloatingFocusManager, { context: context, modal: false, children: jsxRuntime.jsx("div", Object.assign({ className: classNames__default["default"]('d-popover-content', {
                        'w-100': adjustContentToRender,
                    }), ref: refs.setFloating, style: floatingStyles, "aria-labelledby": headingId }, getFloatingProps(), { children: children })) }))] }));
}

function DProgress({ currentValue, minValue = 0, maxValue = 100, hideCurrentValue = false, enableStripedAnimation = false, }) {
    const formatProgress = react.useMemo(() => `${currentValue}%`, [currentValue]);
    const generateClasses = react.useMemo(() => ({
        'progress-bar': true,
        'progress-bar-striped progress-bar-animated': enableStripedAnimation,
    }), [enableStripedAnimation]);
    return (jsxRuntime.jsx("div", { className: "progress", children: jsxRuntime.jsx("div", { className: classNames__default["default"](generateClasses), role: "progressbar", "aria-label": "Progress bar", style: { width: `${currentValue}%` }, "aria-valuenow": currentValue, "aria-valuemin": minValue, "aria-valuemax": maxValue, children: !hideCurrentValue && formatProgress }) }));
}

function DQuickActionButton({ line1, line2, className, actionLinkText, actionLinkTheme = 'secondary', actionIcon, secondaryActionIcon, actionIconFamilyClass, actionIconFamilyPrefix, representativeImage, representativeIcon, representativeIconTheme = 'secondary', representativeIconHasCircle = false, representativeIconFamilyClass, representativeIconFamilyPrefix, onClick, onClickSecondary, style, }) {
    const globalClickHandler = react.useCallback(() => {
        if (actionLinkText) {
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick();
    }, [actionLinkText, onClick]);
    const actionLinkClickHandler = react.useCallback(() => {
        if (!actionLinkText) {
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick();
    }, [actionLinkText, onClick]);
    const secondaryActionLinkClickHandler = react.useCallback(() => {
        onClickSecondary === null || onClickSecondary === void 0 ? void 0 : onClickSecondary();
    }, [onClickSecondary]);
    const Tag = react.useMemo(() => (actionLinkText ? 'div' : 'button'), [actionLinkText]);
    return (jsxRuntime.jsxs(Tag, { className: classNames__default["default"]('d-quick-action-button', className), onClick: !actionLinkText ? globalClickHandler : undefined, style: style, children: [representativeIcon && (jsxRuntime.jsx(DIcon, { className: "d-quick-action-button-representative-icon", size: representativeIconHasCircle
                    ? `var(--${PREFIX_BS}quick-action-button-representative-icon-size)`
                    : `var(--${PREFIX_BS}quick-action-button-representative-image-size)`, icon: representativeIcon, hasCircle: representativeIconHasCircle, theme: representativeIconTheme, familyClass: representativeIconFamilyClass, familyPrefix: representativeIconFamilyPrefix })), representativeImage && (jsxRuntime.jsx("img", { className: "d-quick-action-button-representative-image", src: representativeImage, alt: "" })), jsxRuntime.jsx("div", { className: "d-quick-action-button-content", children: jsxRuntime.jsxs("div", { className: "d-quick-action-button-text", children: [jsxRuntime.jsx("span", { className: "d-quick-action-button-line1", children: line1 }), jsxRuntime.jsx("small", { className: "d-quick-action-button-line2", children: line2 })] }) }), secondaryActionIcon && (jsxRuntime.jsx(DButton, { className: "d-quick-action-button-secondary-action-link", type: "button", variant: "link", iconStart: secondaryActionIcon, iconStartFamilyClass: actionIconFamilyClass, iconStartFamilyPrefix: actionIconFamilyPrefix, theme: actionLinkTheme, onClick: secondaryActionLinkClickHandler, isStopPropagationEnabled: true })), actionLinkText && !actionIcon && (jsxRuntime.jsx(DButton, { className: "d-quick-action-button-action-link", type: "button", variant: "link", theme: actionLinkTheme, text: actionLinkText, onClick: actionLinkClickHandler, isStopPropagationEnabled: true })), actionIcon && !actionLinkText && (jsxRuntime.jsx(DIcon, { className: "d-quick-action-button-action-icon", icon: actionIcon, size: `var(--${PREFIX_BS}quick-action-button-action-icon-size)`, familyClass: actionIconFamilyClass, familyPrefix: actionIconFamilyPrefix }))] }));
}

function DQuickActionCheck({ id, name, value, line1, line2, line3, className, isChecked, onChange, }) {
    const changeHandler = react.useCallback((event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    return (jsxRuntime.jsxs("label", { className: classNames__default["default"]('d-quick-action-check', className), htmlFor: id, children: [jsxRuntime.jsx(DInputCheck, { id: id, type: "radio", name: name, value: value, isChecked: isChecked, onChange: changeHandler }), jsxRuntime.jsxs("div", { className: "d-quick-action-check-detail", children: [jsxRuntime.jsx("span", { className: "d-quick-action-check-line1", children: line1 }), jsxRuntime.jsx("span", { className: "d-quick-action-check-line2", children: line2 })] }), jsxRuntime.jsx("span", { className: "d-quick-action-check-line3", children: line3 })] }));
}

function DQuickActionSelect({ id, name, value, line1, line2, className, isSelected = false, onChange, }) {
    const innerRef = react.useRef(null);
    const changeHandler = react.useCallback((event) => {
        event.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    react.useEffect(() => {
        if (innerRef.current) {
            innerRef.current.checked = isSelected;
        }
    }, [isSelected]);
    return (jsxRuntime.jsxs("label", { className: classNames__default["default"]('d-quick-action-select', className), htmlFor: id, children: [jsxRuntime.jsx("input", { ref: innerRef, id: id, type: "radio", name: name, value: value, onChange: changeHandler }), jsxRuntime.jsx("span", { className: "d-quick-action-select-line1", children: line1 }), jsxRuntime.jsx("span", { className: "d-quick-action-select-line2", children: line2 })] }));
}

function DQuickActionSwitch({ id, name, label, hint, className, isChecked, isDisabled, onClick, }) {
    const clickHandler = react.useCallback((event) => {
        event.stopPropagation();
        onClick === null || onClick === void 0 ? void 0 : onClick(isChecked);
    }, [isChecked, onClick]);
    return (jsxRuntime.jsxs("button", { className: classNames__default["default"]('d-quick-action-switch', className), type: "button", onClick: clickHandler, children: [jsxRuntime.jsxs("div", { className: "d-quick-action-switch-content", children: [jsxRuntime.jsx(DInputSwitch, { id: id, name: name, isDisabled: isDisabled, isChecked: isChecked, isReadonly: true }), jsxRuntime.jsx("label", { className: "d-quick-action-switch-label", htmlFor: id, children: label })] }), jsxRuntime.jsx("div", { className: "d-quick-action-switch-hint", children: hint })] }));
}

function DSkeleton({ speed = 2, viewBox, backgroundColor, foregroundColor, children, }) {
    const innerBackgroundColor = react.useMemo(() => {
        if (backgroundColor) {
            return backgroundColor;
        }
        const computedStyle = getComputedStyle(document.documentElement);
        return computedStyle.getPropertyValue(`--${PREFIX_BS}secondary-100`);
    }, [backgroundColor]);
    const innerForegroundColor = react.useMemo(() => {
        if (foregroundColor) {
            return foregroundColor;
        }
        const computedStyle = getComputedStyle(document.documentElement);
        return computedStyle.getPropertyValue(`--${PREFIX_BS}gray-100`);
    }, [foregroundColor]);
    return (jsxRuntime.jsx(ContentLoader__default["default"], { speed: speed, viewBox: viewBox, backgroundColor: innerBackgroundColor, foregroundColor: innerForegroundColor, children: children }));
}

function DStepper$2({ options, currentStep, successIcon = 'check', isVertical = false, }) {
    if (currentStep < 1 || currentStep > options.length) {
        throw new Error('Current step should be in the range from 1 to options length');
    }
    return (jsxRuntime.jsx("div", { className: classNames__default["default"]({
            'd-stepper-desktop': true,
            'is-vertical': isVertical,
        }), children: options.map(({ label, value }) => (jsxRuntime.jsxs("div", { className: "d-step", children: [jsxRuntime.jsx("div", { className: "d-step-value", children: jsxRuntime.jsx("div", { className: classNames__default["default"]({
                            'd-step-icon-container': true,
                            'd-step-check': value < currentStep,
                            'd-step-current': value === currentStep,
                        }), children: value < currentStep
                            ? (jsxRuntime.jsx(DIcon, { icon: successIcon, className: "d-step-icon" }))
                            : value }) }), jsxRuntime.jsx("div", { className: "d-step-label", children: label })] }, value))) }));
}

function DStepper$1({ options, currentStep, }) {
    if (currentStep < 1 || currentStep > options.length) {
        throw new Error('Current step should be in the range from 1 to options length');
    }
    const currentOption = react.useMemo(() => { var _a; return (_a = options[currentStep - 1]) !== null && _a !== void 0 ? _a : {}; }, [currentStep, options]);
    const [currentAngle, setCurrentAngle] = react.useState(0);
    react.useEffect(() => {
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
    const progressStyle = react.useMemo(() => `conic-gradient(
      from 180deg,
      var(--${PREFIX_BS}step-progress-outter-fill-background-color) ${currentAngle}deg,
      var(--${PREFIX_BS}step-progress-outter-background-color) 0deg)`, [currentAngle]);
    return (jsxRuntime.jsxs("div", { className: "d-stepper", children: [jsxRuntime.jsx("div", { className: "d-step-bar", style: { background: progressStyle }, children: jsxRuntime.jsx("p", { className: "d-step-number", children: `${currentStep}/${options.length}` }) }), jsxRuntime.jsx("div", { className: "d-step-info", children: Object.keys(currentOption).length > 0 && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: "d-step-label", children: currentOption.label }), jsxRuntime.jsx("div", { className: "d-step-description", children: currentOption.description || '' })] })) })] }));
}

function DStepper({ options, currentStep, successIcon = 'check', isVertical = false, breakpoint = 'lg', }) {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: `d-block d-${breakpoint}-none`, children: jsxRuntime.jsx(DStepper$1, { options: options, currentStep: currentStep }) }), jsxRuntime.jsx("div", { className: `d-none d-${breakpoint}-block`, children: jsxRuntime.jsx(DStepper$2, { options: options, currentStep: currentStep, successIcon: successIcon, isVertical: isVertical }) })] }));
}

const TabContext = react.createContext(undefined);
function DTabs({ children, defaultSelected, onChange, options, className, isVertical, }) {
    const [selected, setSelected] = react.useState(defaultSelected);
    const onSelect = react.useCallback((option) => {
        if (option.tab) {
            setSelected(option.tab);
        }
        onChange(option);
    }, [onChange]);
    react.useEffect(() => {
        setSelected(defaultSelected);
    }, [defaultSelected]);
    const isSelected = react.useCallback((tab) => (selected === tab), [selected]);
    const value = react.useMemo(() => ({
        isSelected,
    }), [isSelected]);
    return (jsxRuntime.jsx(TabContext.Provider, { value: value, children: jsxRuntime.jsxs("div", { className: classNames__default["default"]({
                'd-tabs': true,
                'd-tabs-vertical': isVertical,
            }), children: [jsxRuntime.jsx("nav", { className: "nav", children: options.map((option) => (jsxRuntime.jsx("button", { id: `${option.tab}Tab`, className: classNames__default["default"]('nav-link', {
                            active: option.tab === selected,
                        }, className), type: "button", role: "tab", "aria-controls": `${option.tab}Pane`, "aria-selected": option.tab === selected, disabled: option.isDisabled, onClick: () => onSelect(option), children: option.label }, option.label))) }), jsxRuntime.jsx("div", { className: "tab-content", children: children })] }) }));
}
function useTabContext() {
    const context = react.useContext(TabContext);
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
    return (jsxRuntime.jsx("div", { className: "tab-pane fade show active", id: `${tab}Pane`, role: "tabpanel", tabIndex: 0, "aria-labelledby": `${tab}Tab`, children: children }));
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
    const [open, setOpen] = react.useState(isOpen);
    const styleVariables = react.useMemo(() => {
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
    const arrowRef = react.useRef(null);
    const { refs, context, floatingStyles, } = react$1.useFloating({
        open,
        onOpenChange: setOpen,
        placement,
        whileElementsMounted: react$1.autoUpdate,
        middleware: [
            react$1.offset(offSet),
            react$1.flip(),
            react$1.shift({
                padding,
            }),
            react$1.arrow({
                element: arrowRef,
            }),
        ],
    });
    const hover = react$1.useHover(context, { move: false });
    const focus = react$1.useFocus(context);
    const dismiss = react$1.useDismiss(context);
    const click = react$1.useClick(context);
    const role = react$1.useRole(context, { role: 'tooltip' });
    const { getReferenceProps, getFloatingProps } = react$1.useInteractions([
        withHover ? hover : undefined,
        withClick ? click : undefined,
        withFocus ? focus : undefined,
        dismiss,
        role,
    ]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", Object.assign({ className: className, ref: refs.setReference }, getReferenceProps(), { children: Component })), jsxRuntime.jsx(react$1.FloatingPortal, { children: open && (jsxRuntime.jsxs("div", Object.assign({ className: classNameContainer, ref: refs.setFloating, style: Object.assign(Object.assign({}, floatingStyles), styleVariables) }, getFloatingProps(), { children: [jsxRuntime.jsx(react$1.FloatingArrow, { ref: arrowRef, context: context, style: {
                                fill: styleVariables.background,
                            }, width: ARROW_WIDTH, height: ARROW_HEIGHT }), children] }))) })] }));
}

function DToastContainer({ style, position = 'top-right', }) {
    return (jsxRuntime.jsx(reactToastify.ToastContainer, { toastClassName: () => 'shadow-none p-0 cursor-default', position: position, autoClose: false, hideProgressBar: true, closeOnClick: false, closeButton: false, transition: reactToastify.Slide, style: style }));
}

exports.DAlert = DAlert;
exports.DBadge = DBadge;
exports.DBoxFile = DBoxFile;
exports.DButton = DButton;
exports.DCard = DCard;
exports.DCardAccount = DCardAccount;
exports.DCardBody = DCardBody;
exports.DCardFooter = DCardFooter;
exports.DCardHeader = DCardHeader;
exports.DCarousel = DCarousel;
exports.DCarouselSlide = DCarouselSlide;
exports.DChip = DChip;
exports.DCollapse = DCollapse;
exports.DCollapseIconText = DCollapseIconText;
exports.DCurrencyText = DCurrencyText;
exports.DDatePicker = DDatePicker;
exports.DFormikInput = DFormikInput;
exports.DFormikInputCurrency = DFormikInputCurrency;
exports.DFormikInputSelect = DFormikInputSelect;
exports.DIcon = DIcon;
exports.DInput = DInput$1;
exports.DInputCheck = DInputCheck;
exports.DInputCounter = DInputCounter;
exports.DInputCurrency = DInputCurrency;
exports.DInputCurrencyBase = DInputCurrencyBase;
exports.DInputPassword = DInputPassword;
exports.DInputPin = DInputPin;
exports.DInputSearch = DInputSearch;
exports.DInputSelect = DInputSelect;
exports.DInputSwitch = DInputSwitch;
exports.DList = DList;
exports.DListItem = DListItem;
exports.DListItemMovement = DListItemMovement;
exports.DModal = DModal;
exports.DModalBody = DModalBody;
exports.DModalFooter = DModalFooter;
exports.DModalHeader = DModalHeader;
exports.DOffcanvas = DOffcanvas;
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
exports.DTabs = DTabs;
exports.DToastContainer = DToastContainer;
exports.DTooltip = DTooltip;
exports.LiquidContext = LiquidContext$1;
exports.LiquidContextProvider = LiquidContextProvider;
exports.ModalContext = ModalContext;
exports.ModalContextProvider = ModalContextProvider;
exports.OffcanvasContext = OffcanvasContext;
exports.OffcanvasContextProvider = OffcanvasContextProvider;
exports.configureI18n = configureI8n;
exports.formatCurrency = formatCurrency;
exports.liquidParser = liquidParser;
exports.useFormatCurrency = useFormatCurrency;
exports.useLiquidContext = useLiquidContext;
exports.useModalContext = useModalContext;
exports.useOffcanvasContext = useOffcanvasContext;
exports.useScreenshot = useScreenshot;
exports.useScreenshotDownload = useScreenshotDownload;
exports.useScreenshotWebShare = useScreenshotWebShare;
exports.useTabContext = useTabContext;
exports.useToast = useToast;
//# sourceMappingURL=index.js.map
