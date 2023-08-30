'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const jsxRuntime = require('react/jsx-runtime');
const reactToastify = require('react-toastify');
require('react-toastify/dist/ReactToastify.css');
const tslib = require('tslib');
const DatePicker = require('react-datepicker');
const luxon = require('luxon');
const React = require('react');
const dAlert_js = require('@dynamic-framework/ui/components/d-alert.js');
const dBadge_js = require('@dynamic-framework/ui/components/d-badge.js');
const dButton_js = require('@dynamic-framework/ui/components/d-button.js');
const dChip_js = require('@dynamic-framework/ui/components/d-chip.js');
const dIcon_js = require('@dynamic-framework/ui/components/d-icon.js');
const dInput_js = require('@dynamic-framework/ui/components/d-input.js');
const dInputCheck_js = require('@dynamic-framework/ui/components/d-input-check.js');
const dInputCounter_js = require('@dynamic-framework/ui/components/d-input-counter.js');
const dInputCurrencyBase_js = require('@dynamic-framework/ui/components/d-input-currency-base.js');
const dInputPassword_js = require('@dynamic-framework/ui/components/d-input-password.js');
const dInputPin_js = require('@dynamic-framework/ui/components/d-input-pin.js');
const dInputSearch_js = require('@dynamic-framework/ui/components/d-input-search.js');
const dInputSelect_js = require('@dynamic-framework/ui/components/d-input-select.js');
const dInputSwitch_js = require('@dynamic-framework/ui/components/d-input-switch.js');
const dModal_js = require('@dynamic-framework/ui/components/d-modal.js');
const dOffcanvas_js = require('@dynamic-framework/ui/components/d-offcanvas.js');
const dProgress_js = require('@dynamic-framework/ui/components/d-progress.js');
const dQuickActionButton_js = require('@dynamic-framework/ui/components/d-quick-action-button.js');
const dQuickActionCheck_js = require('@dynamic-framework/ui/components/d-quick-action-check.js');
const dQuickActionSelect_js = require('@dynamic-framework/ui/components/d-quick-action-select.js');
const dQuickActionSwitch_js = require('@dynamic-framework/ui/components/d-quick-action-switch.js');
const ui = require('@dynamic-framework/ui');
const ContentLoader = require('react-content-loader');
const classNames = require('classnames');
const react = require('@floating-ui/react');
const formik = require('formik');
const reactDropzone = require('react-dropzone');
const reactSplide = require('@splidejs/react-splide');
const ResponsivePagination = require('react-responsive-pagination');
const i18n = require('i18next');
const reactI18next = require('react-i18next');
const html2canvas = require('html2canvas');
const ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const DatePicker__default = /*#__PURE__*/_interopDefaultLegacy(DatePicker);
const React__default = /*#__PURE__*/_interopDefaultLegacy(React);
const ContentLoader__default = /*#__PURE__*/_interopDefaultLegacy(ContentLoader);
const classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
const ResponsivePagination__default = /*#__PURE__*/_interopDefaultLegacy(ResponsivePagination);
const i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
const html2canvas__default = /*#__PURE__*/_interopDefaultLegacy(html2canvas);

const dashToPascalCase = (str) => str
    .toLowerCase()
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
const camelToDashCase = (str) => str.replace(/([A-Z])/g, (m) => `-${m[0].toLowerCase()}`);

const attachProps = (node, newProps, oldProps = {}) => {
    // some test frameworks don't render DOM elements, so we test here to make sure we are dealing with DOM first
    if (node instanceof Element) {
        // add any classes in className to the class list
        const className = getClassName(node.classList, newProps, oldProps);
        if (className !== '') {
            node.className = className;
        }
        Object.keys(newProps).forEach((name) => {
            if (name === 'children' ||
                name === 'style' ||
                name === 'ref' ||
                name === 'class' ||
                name === 'className' ||
                name === 'forwardedRef') {
                return;
            }
            if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                const eventName = name.substring(2);
                const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
                if (!isCoveredByReact(eventNameLc)) {
                    syncEvent(node, eventNameLc, newProps[name]);
                }
            }
            else {
                node[name] = newProps[name];
                const propType = typeof newProps[name];
                if (propType === 'string') {
                    node.setAttribute(camelToDashCase(name), newProps[name]);
                }
            }
        });
    }
};
const getClassName = (classList, newProps, oldProps) => {
    const newClassProp = newProps.className || newProps.class;
    const oldClassProp = oldProps.className || oldProps.class;
    // map the classes to Maps for performance
    const currentClasses = arrayToMap(classList);
    const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(' ') : []);
    const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(' ') : []);
    const finalClassNames = [];
    // loop through each of the current classes on the component
    // to see if it should be a part of the classNames added
    currentClasses.forEach((currentClass) => {
        if (incomingPropClasses.has(currentClass)) {
            // add it as its already included in classnames coming in from newProps
            finalClassNames.push(currentClass);
            incomingPropClasses.delete(currentClass);
        }
        else if (!oldPropClasses.has(currentClass)) {
            // add it as it has NOT been removed by user
            finalClassNames.push(currentClass);
        }
    });
    incomingPropClasses.forEach((s) => finalClassNames.push(s));
    return finalClassNames.join(' ');
};
/**
 * Transforms a React event name to a browser event name.
 */
const transformReactEventName = (eventNameSuffix) => {
    switch (eventNameSuffix) {
        case 'doubleclick':
            return 'dblclick';
    }
    return eventNameSuffix;
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const isCoveredByReact = (eventNameSuffix) => {
    if (typeof document === 'undefined') {
        return true;
    }
    else {
        const eventName = 'on' + transformReactEventName(eventNameSuffix);
        let isSupported = eventName in document;
        if (!isSupported) {
            const element = document.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }
        return isSupported;
    }
};
const syncEvent = (node, eventName, newEventHandler) => {
    const eventStore = node.__events || (node.__events = {});
    const oldEventHandler = eventStore[eventName];
    // Remove old listener so they don't double up.
    if (oldEventHandler) {
        node.removeEventListener(eventName, oldEventHandler);
    }
    // Bind new listener.
    node.addEventListener(eventName, (eventStore[eventName] = function handler(e) {
        if (newEventHandler) {
            newEventHandler.call(this, e);
        }
    }));
};
const arrayToMap = (arr) => {
    const map = new Map();
    arr.forEach((s) => map.set(s, s));
    return map;
};

const setRef = (ref, value) => {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref != null) {
        // Cast as a MutableRef so we can assign current
        ref.current = value;
    }
};
const mergeRefs = (...refs) => {
    return (value) => {
        refs.forEach((ref) => {
            setRef(ref, value);
        });
    };
};
const createForwardRef = (ReactComponent, displayName) => {
    const forwardRef = (props, ref) => {
        return jsxRuntime.jsx(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    const forwardedRef = React__default["default"].forwardRef(forwardRef);
    forwardedRef.displayName = displayName;
    return forwardedRef;
};

const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement) => {
    if (defineCustomElement !== undefined) {
        defineCustomElement();
    }
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends React__default["default"].Component {
        constructor(props) {
            super(props);
            this.setComponentElRef = (element) => {
                this.componentEl = element;
            };
        }
        componentDidMount() {
            this.componentDidUpdate(this.props);
        }
        componentDidUpdate(prevProps) {
            attachProps(this.componentEl, this.props, prevProps);
        }
        render() {
            const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = tslib.__rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
            let propsToPass = Object.keys(cProps).reduce((acc, name) => {
                const value = cProps[name];
                if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                    const eventName = name.substring(2).toLowerCase();
                    if (typeof document !== 'undefined' && isCoveredByReact(eventName)) {
                        acc[name] = value;
                    }
                }
                else {
                    // we should only render strings, booleans, and numbers as attrs in html.
                    // objects, functions, arrays etc get synced via properties on mount.
                    const type = typeof value;
                    if (type === 'string' || type === 'boolean' || type === 'number') {
                        acc[camelToDashCase(name)] = value;
                    }
                }
                return acc;
            }, {});
            if (manipulatePropsFunction) {
                propsToPass = manipulatePropsFunction(this.props, propsToPass);
            }
            const newProps = Object.assign(Object.assign({}, propsToPass), { ref: mergeRefs(forwardedRef, this.setComponentElRef), style });
            /**
             * We use createElement here instead of
             * React.createElement to work around a
             * bug in Vite (https://github.com/vitejs/vite/issues/6104).
             * React.createElement causes all elements to be rendered
             * as <tagname> instead of the actual Web Component.
             */
            return React.createElement(tagName, newProps, children);
        }
        static get displayName() {
            return displayName;
        }
    };
    // If context was passed to createReactComponent then conditionally add it to the Component Class
    if (ReactComponentContext) {
        ReactComponent.contextType = ReactComponentContext;
    }
    return createForwardRef(ReactComponent, displayName);
};

/* eslint-disable */
const DAlert = /*@__PURE__*/ createReactComponent('d-alert', undefined, undefined, dAlert_js.defineCustomElement);
const DBadge = /*@__PURE__*/ createReactComponent('d-badge', undefined, undefined, dBadge_js.defineCustomElement);
const DButton = /*@__PURE__*/ createReactComponent('d-button', undefined, undefined, dButton_js.defineCustomElement);
const DChip = /*@__PURE__*/ createReactComponent('d-chip', undefined, undefined, dChip_js.defineCustomElement);
const DIcon = /*@__PURE__*/ createReactComponent('d-icon', undefined, undefined, dIcon_js.defineCustomElement);
const DInput = /*@__PURE__*/ createReactComponent('d-input', undefined, undefined, dInput_js.defineCustomElement);
const DInputCheck = /*@__PURE__*/ createReactComponent('d-input-check', undefined, undefined, dInputCheck_js.defineCustomElement);
const DInputCounter = /*@__PURE__*/ createReactComponent('d-input-counter', undefined, undefined, dInputCounter_js.defineCustomElement);
const DInputCurrencyBase = /*@__PURE__*/ createReactComponent('d-input-currency-base', undefined, undefined, dInputCurrencyBase_js.defineCustomElement);
const DInputPassword = /*@__PURE__*/ createReactComponent('d-input-password', undefined, undefined, dInputPassword_js.defineCustomElement);
const DInputPin = /*@__PURE__*/ createReactComponent('d-input-pin', undefined, undefined, dInputPin_js.defineCustomElement);
const DInputSearch = /*@__PURE__*/ createReactComponent('d-input-search', undefined, undefined, dInputSearch_js.defineCustomElement);
const DInputSelect = /*@__PURE__*/ createReactComponent('d-input-select', undefined, undefined, dInputSelect_js.defineCustomElement);
const DInputSwitch = /*@__PURE__*/ createReactComponent('d-input-switch', undefined, undefined, dInputSwitch_js.defineCustomElement);
const DModal = /*@__PURE__*/ createReactComponent('d-modal', undefined, undefined, dModal_js.defineCustomElement);
const DOffcanvas = /*@__PURE__*/ createReactComponent('d-offcanvas', undefined, undefined, dOffcanvas_js.defineCustomElement);
const DProgress = /*@__PURE__*/ createReactComponent('d-progress', undefined, undefined, dProgress_js.defineCustomElement);
const DQuickActionButton = /*@__PURE__*/ createReactComponent('d-quick-action-button', undefined, undefined, dQuickActionButton_js.defineCustomElement);
const DQuickActionCheck = /*@__PURE__*/ createReactComponent('d-quick-action-check', undefined, undefined, dQuickActionCheck_js.defineCustomElement);
const DQuickActionSelect = /*@__PURE__*/ createReactComponent('d-quick-action-select', undefined, undefined, dQuickActionSelect_js.defineCustomElement);
const DQuickActionSwitch = /*@__PURE__*/ createReactComponent('d-quick-action-switch', undefined, undefined, dQuickActionSwitch_js.defineCustomElement);

function DPermissionItem({ permission, permissionState, onChange, onAction = () => { }, }) {
    return (jsxRuntime.jsxs("div", Object.assign({ role: "button", tabIndex: 0, onKeyDown: () => { }, className: "d-flex permission-item align-items-center", onClick: onAction }, { children: [jsxRuntime.jsx("span", Object.assign({ className: "flex-grow-1 label" }, { children: permission.label })), permission.type === 'custom' && (jsxRuntime.jsx(DBadge, { theme: "tertiary", text: permissionState })), jsxRuntime.jsx(DInputSwitch, { innerId: permission.id, isChecked: !!permission.value, isDisabled: !permission.enabled, onEventChange: ({ detail: checked }) => onChange(checked) })] })));
}

function MPermissionGroup({ title, description, permissionState, permissionList, onChangePermission, onCustomAction = () => { }, }) {
    return (jsxRuntime.jsxs("div", Object.assign({ className: "row operation-group g-0 mb-3 mb-lg-0" }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: "col-12 col-lg-4 d-flex flex-column justify-content-center" }, { children: [jsxRuntime.jsx("h6", Object.assign({ className: "fw-bold mb-3 mb-lg-2" }, { children: title })), jsxRuntime.jsx("p", Object.assign({ className: "fs-8 d-none d-lg-block m-0" }, { children: description }))] })), jsxRuntime.jsx("div", Object.assign({ className: "col-12 offset-lg-1 col-lg-7" }, { children: permissionList.map((permission) => (jsxRuntime.jsx(DPermissionItem, { permission: permission, permissionState: permissionState, onChange: (isChecked) => onChangePermission(permission, isChecked), onAction: () => onCustomAction(permission) }, permission.id))) }))] })));
}

function MSummaryCard({ title, description, icon, iconSize, iconTheme, Summary, }) {
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("h6", Object.assign({ className: "fw-bold fs-6" }, { children: title })), jsxRuntime.jsx("p", Object.assign({ className: "fs-8" }, { children: description })), jsxRuntime.jsxs("div", Object.assign({ className: "bg-white rounded p-4 d-flex gap-3 shadow-sm text-gray-700 fs-8" }, { children: [jsxRuntime.jsx(DIcon, { icon: icon, theme: iconTheme, size: iconSize }), Summary] }))] }));
}

function DToastContainer({ style, position = 'top-right', }) {
    return (jsxRuntime.jsx(reactToastify.ToastContainer, { toastClassName: () => 'shadow-none p-0 cursor-default', position: position, autoClose: false, hideProgressBar: true, closeOnClick: false, closeButton: false, transition: reactToastify.Slide, style: style }));
}

const LiquidContext = React.createContext({
    language: 'en',
    currency: {
        symbol: '$',
        precision: 2,
        separator: ',',
        decimal: '.',
    },
});
function LiquidContextProvider({ children, }) {
    const value = React.useMemo(() => ({
        language: ui.liquidParser.parse('{{site.language}}'),
        currency: {
            symbol: ui.liquidParser.parse('{{vars.currency-symbol}}'),
            precision: parseInt(ui.liquidParser.parse('{{vars.currency-precision}}'), 10),
            separator: ui.liquidParser.parse('{{vars.currency-separator}}'),
            decimal: ui.liquidParser.parse('{{vars.currency-decimal}}'),
        },
    }), []);
    return (jsxRuntime.jsx(LiquidContext.Provider, Object.assign({ value: value }, { children: children })));
}
function useLiquidContext() {
    const context = React.useContext(LiquidContext);
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
    return (jsxRuntime.jsxs(ModalContext.Provider, Object.assign({ value: value }, { children: [children, hasPortal && ReactDOM.createPortal(jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [stack.map(({ Component, modalName, callbacks, payload, }) => {
                        const EnhancedComponent = enhanceModal(Component, callbacks);
                        return (jsxRuntime.jsx(EnhancedComponent, { name: modalName, payload: payload, openModal: openModal, closeModal: closeModal }, modalName));
                    }), !!stack.length && jsxRuntime.jsx("div", { className: "modal-backdrop fade show" })] }), document.getElementById(portalName))] })));
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
    return (jsxRuntime.jsxs(OffcanvasContext.Provider, Object.assign({ value: value }, { children: [children, hasPortal && ReactDOM.createPortal(jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [stack.map(({ Component, offcanvasName, callbacks, payload, }) => {
                        const EnhancedComponent = enhanceOffcanvas(Component, callbacks);
                        return (jsxRuntime.jsx(EnhancedComponent, { name: offcanvasName, payload: payload, openOffcanvas: openOffcanvas, closeOffcanvas: closeOffcanvas }, offcanvasName));
                    }), !!stack.length && jsxRuntime.jsx("div", { className: "offcanvas-backdrop fade show" })] }), document.getElementById(portalName))] })));
}
function useOffcanvasContext() {
    const context = React.useContext(OffcanvasContext);
    if (context === undefined) {
        throw new Error('useOffcanvasContext was used outside of OffcanvasContextProvider');
    }
    return context;
}

function DDatePickerTime(_a) {
    var { value, onEventChange, innerId, label } = _a, props = tslib.__rest(_a, ["value", "onEventChange", "innerId", "label"]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: "d-flex align-items-center gap-2 flex-column d-datepicker-time" }, { children: [label && (jsxRuntime.jsx("p", Object.assign({ className: "d-datepicker-time-label" }, { children: label }))), jsxRuntime.jsx(DInput, Object.assign({}, onEventChange && {
                onEventChange: (time) => onEventChange(time),
            }, { type: "time", innerId: innerId, value: value }, props))] })));
}

function DDatePickerInput(_a, ref) {
    var { value, onEventClick, innerId, iconEnd } = _a, props = tslib.__rest(_a, ["value", "onEventClick", "innerId", "iconEnd"]);
    React.useImperativeHandle(ref, () => ({}), []);
    return (jsxRuntime.jsx("div", Object.assign({ role: "button", onClick: onEventClick, onKeyDown: () => { }, tabIndex: -1 }, { children: jsxRuntime.jsx(DInput, Object.assign({ isReadOnly: true, type: "text", innerId: innerId, value: value, onEventIconEndClick: onEventClick, iconEnd: iconEnd }, props)) })));
}
const DDatePickerInput$1 = React.forwardRef(DDatePickerInput);

function DMonthPicker(_a) {
    var { onEventChangeDate, date } = _a, props = tslib.__rest(_a, ["onEventChangeDate", "date"]);
    const dateJS = (value) => luxon.DateTime.fromISO(value).toJSDate();
    const { language } = useLiquidContext();
    const lang = language || 'en';
    return (jsxRuntime.jsx(DatePicker__default["default"], Object.assign({ showMonthYearPicker: true, selected: dateJS(date), calendarClassName: "d-month-picker", onChange: (value) => {
            onEventChangeDate(value);
        }, customInput: (jsxRuntime.jsx("p", Object.assign({ className: "fw-bold text-capitalize" }, { children: luxon.DateTime.fromISO(date).setLocale(lang).toFormat('MMMM yyyy') }))), renderCustomHeader: ({ monthDate, decreaseYear, increaseYear, prevYearButtonDisabled, nextYearButtonDisabled, }) => (jsxRuntime.jsxs("div", Object.assign({ className: "d-flex align-items-center justify-content-between gap-4 fs-6 bg-dark" }, { children: [jsxRuntime.jsx(DButton, { iconStart: "chevron-left", size: "sm", variant: "link", theme: "light", onEventClick: decreaseYear, isDisabled: prevYearButtonDisabled }), jsxRuntime.jsx("p", Object.assign({ className: "fs-6 fw-bold" }, { children: monthDate.getFullYear() })), jsxRuntime.jsx(DButton, { iconStart: "chevron-right", size: "sm", variant: "link", theme: "light", onEventClick: increaseYear, isDisabled: nextYearButtonDisabled })] }))) }, props)));
}

function DDatePickerHeader({ monthDate, changeMonth, changeYear, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, withMonthSelector, decreaseMonthIcon, increaseMonthIcon, iconSize, buttonVariant, buttonTheme, }) {
    const { language } = useLiquidContext();
    const lang = language || 'en';
    return (jsxRuntime.jsxs("div", Object.assign({ className: "d-flex align-items-center justify-content-between d-datepicker-header" }, { children: [jsxRuntime.jsx(DButton, { iconStart: decreaseMonthIcon, size: iconSize, variant: buttonVariant, theme: buttonTheme, onEventClick: decreaseMonth, isDisabled: prevMonthButtonDisabled }), jsxRuntime.jsx(DMonthPicker, Object.assign({}, !withMonthSelector && { readOnly: true }, { date: monthDate.toISOString(), onEventChangeDate: (value) => {
                    if (value) {
                        changeMonth(luxon.DateTime.fromJSDate(value).month - 1);
                        changeYear(luxon.DateTime.fromJSDate(value).year);
                    }
                } }, lang && { locale: lang })), jsxRuntime.jsx(DButton, { iconStart: increaseMonthIcon, size: iconSize, variant: buttonVariant, theme: buttonTheme, onEventClick: increaseMonth, isDisabled: nextMonthButtonDisabled })] })));
}

function DDatePicker(_a) {
    var { onEventChangeDate, date, selectsRange, withMonthSelector, inputLabel, inputIcon = 'calendar', inputId = 'input-calendar', timeId = 'input-time', timeLabel, headerDecreaseMonthIcon = 'chevron-left', headerIncreaseMonthIcon = 'chevron-right', headerIconSize = 'sm', headerButtonVariant = 'link', headerButtonTheme = 'dark' } = _a, props = tslib.__rest(_a, ["onEventChangeDate", "date", "selectsRange", "withMonthSelector", "inputLabel", "inputIcon", "inputId", "timeId", "timeLabel", "headerDecreaseMonthIcon", "headerIncreaseMonthIcon", "headerIconSize", "headerButtonVariant", "headerButtonTheme"]);
    const dateJS = (value) => luxon.DateTime.fromISO(value).toJSDate();
    const { language } = useLiquidContext();
    const lang = language || 'en';
    // eslint-disable-next-line react/no-unstable-nested-components
    const InputPicker = React.forwardRef(({ value, onClick }, ref) => (jsxRuntime.jsx(DDatePickerInput$1, { label: inputLabel, innerId: inputId, iconEnd: inputIcon, value: value, onEventClick: onClick, ref: ref })));
    const TimeInputPicker = React.useCallback(({ value, onChange }) => (jsxRuntime.jsx(DDatePickerTime, { onEventChange: onChange, value: value, label: timeLabel, innerId: timeId })), [timeLabel, timeId]);
    const DatePickerHeader = React.useCallback((headerProps) => (jsxRuntime.jsx(DDatePickerHeader, Object.assign({}, headerProps, { decreaseMonthIcon: headerDecreaseMonthIcon, increaseMonthIcon: headerIncreaseMonthIcon, iconSize: headerIconSize, buttonVariant: headerButtonVariant, buttonTheme: headerButtonTheme, withMonthSelector: !!withMonthSelector }))), [headerButtonTheme,
        headerButtonVariant,
        headerDecreaseMonthIcon,
        headerIconSize,
        headerIncreaseMonthIcon,
        withMonthSelector,
    ]);
    return (jsxRuntime.jsx(DatePicker__default["default"], Object.assign({ selected: dateJS(date), calendarClassName: "m-date-picker", onChange: (value) => {
            onEventChangeDate(value);
        }, renderCustomHeader: (headerProps) => jsxRuntime.jsx(DatePickerHeader, Object.assign({}, headerProps)), customInput: jsxRuntime.jsx(InputPicker, {}), customTimeInput: jsxRuntime.jsx(TimeInputPicker, {}), selectsRange: selectsRange }, lang && { locale: lang }, props)));
}

function DSkeleton({ speed = 2, viewBox, backgroundColor, foregroundColor, children, }) {
    const innerBackgroundColor = React.useMemo(() => {
        if (backgroundColor) {
            return backgroundColor;
        }
        const computedStyle = getComputedStyle(document.documentElement);
        return computedStyle.getPropertyValue(`--${ui.PREFIX_BS}secondary-100`);
    }, [backgroundColor]);
    const innerForegroundColor = React.useMemo(() => {
        if (foregroundColor) {
            return foregroundColor;
        }
        const computedStyle = getComputedStyle(document.documentElement);
        return computedStyle.getPropertyValue(`--${ui.PREFIX_BS}gray-100`);
    }, [foregroundColor]);
    return (jsxRuntime.jsx(ContentLoader__default["default"], Object.assign({ speed: speed, viewBox: viewBox, backgroundColor: innerBackgroundColor, foregroundColor: innerForegroundColor }, { children: children })));
}

const TabContext = React.createContext(undefined);
function DTabs({ children, defaultSelected, onEventChange, options, className, isVertical, }) {
    const [selected, setSelected] = React.useState(defaultSelected);
    const onSelect = React.useCallback((option) => {
        if (option.tab) {
            setSelected(option.tab);
        }
        onEventChange(option);
    }, [onEventChange]);
    React.useEffect(() => {
        setSelected(defaultSelected);
    }, [defaultSelected]);
    const isSelected = React.useCallback((tab) => (selected === tab), [selected]);
    const value = React.useMemo(() => ({
        isSelected,
    }), [isSelected]);
    return (jsxRuntime.jsx(TabContext.Provider, Object.assign({ value: value }, { children: jsxRuntime.jsxs("div", Object.assign({ className: classNames__default["default"]({
                'd-tabs': true,
                'd-tabs-vertical': isVertical,
            }) }, { children: [jsxRuntime.jsx("nav", Object.assign({ className: "nav" }, { children: options.map((option) => (jsxRuntime.jsx("button", Object.assign({ id: `${option.tab}Tab`, className: classNames__default["default"]('nav-link', {
                            active: option.tab === selected,
                        }, className), type: "button", role: "tab", "aria-controls": `${option.tab}Pane`, "aria-selected": option.tab === selected, disabled: option.isDisabled, onClick: () => onSelect(option) }, { children: option.label }), option.label))) })), jsxRuntime.jsx("div", Object.assign({ className: "tab-content" }, { children: children }))] })) })));
}
function useTabContext() {
    const context = React.useContext(TabContext);
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
    return (jsxRuntime.jsx("div", Object.assign({ className: "tab-pane fade show active", id: `${tab}Pane`, role: "tabpanel", tabIndex: 0, "aria-labelledby": `${tab}Tab` }, { children: children })));
}

function DPopover({ children, renderComponent, isOpen, setEventIsOpen, }) {
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
    const { refs, floatingStyles, context } = react.useFloating({
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
    return (jsxRuntime.jsxs("div", Object.assign({ className: "d-popover" }, { children: [jsxRuntime.jsx("div", Object.assign({ ref: refs.setReference }, getReferenceProps(), { children: renderComponent(innerIsOpen) })), innerIsOpen && (jsxRuntime.jsx(react.FloatingFocusManager, Object.assign({ context: context, modal: false }, { children: jsxRuntime.jsx("div", Object.assign({ className: "d-popover-content", ref: refs.setFloating, style: floatingStyles, "aria-labelledby": headingId }, getFloatingProps(), { children: children })) })))] })));
}

function useFormatCurrency(...args) {
    const { currency } = useLiquidContext();
    const format = React.useCallback((value) => ui.formatCurrency(value, currency), [currency]);
    const values = (args || []).map((value) => (ui.formatCurrency(value !== null && value !== void 0 ? value : 0, currency)));
    return {
        format,
        values,
    };
}

function DCurrencyText({ value, className, }) {
    const { values: [valueFormatted] } = useFormatCurrency(value);
    return (jsxRuntime.jsx("span", Object.assign({ className: className }, { children: valueFormatted })));
}

function DFormikInput(_a) {
    var { name, hint } = _a, props = tslib.__rest(_a, ["name", "hint"]);
    const [field, meta, helpers] = formik.useField(name);
    return (jsxRuntime.jsx(DInput, Object.assign({}, props, { name: field.name, value: field.value, onEventChange: ({ detail }) => helpers.setValue(detail), onEventBlur: ({ detail }) => field.onBlur(detail), isInvalid: !!meta.error, hint: meta.error || hint })));
}

function DFormikInputSelect(_a) {
    var { name, labelExtractor = (item) => item === null || item === void 0 ? void 0 : item.label, valueExtractor = (item) => item === null || item === void 0 ? void 0 : item.value } = _a, props = tslib.__rest(_a, ["name", "labelExtractor", "valueExtractor"]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [field, , helpers] = formik.useField(name);
    return (jsxRuntime.jsx(DInputSelect, Object.assign({}, props, { name: field.name, selectedOption: field.value, labelExtractor: labelExtractor, valueExtractor: valueExtractor, onEventChange: ({ detail }) => helpers.setValue(detail), onEventBlur: ({ detail }) => field.onBlur(detail) })));
}

const TOOLTIP_FONT_SIZE_BY_SIZE = {
    sm: `var(--${ui.PREFIX_BS}ref-fs-small)`,
    default: `var(--${ui.PREFIX_BS}body-font-size)`,
    lg: `var(--${ui.PREFIX_BS}ref-fs-6)`,
};
const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 4;
const GAP = 2;
function DTooltip({ classNameContainer, className, offSet = ARROW_HEIGHT + GAP, padding, withFocus = false, withClick = false, withHover = true, isOpen = false, placement = 'top', size, Component, children, }) {
    const [open, setOpen] = React.useState(isOpen);
    const styleVariables = React.useMemo(() => {
        const defaultFontSize = size
            ? TOOLTIP_FONT_SIZE_BY_SIZE[size]
            : TOOLTIP_FONT_SIZE_BY_SIZE.default;
        return {
            background: `var(--${ui.PREFIX_BS}tooltip-bg, var(--${ui.PREFIX_BS}tooltip-component-bg, var(--${ui.PREFIX_BS}secondary)))`,
            borderRadius: `var(--${ui.PREFIX_BS}tooltip-border-radius, var(--${ui.PREFIX_BS}tooltip-component-border-radius, var(--${ui.PREFIX_BS}border-radius)))`,
            color: `var(--${ui.PREFIX_BS}tooltip-color, var(--${ui.PREFIX_BS}tooltip-component-color, var(--${ui.PREFIX_BS}white)))`,
            fontSize: `var(--${ui.PREFIX_BS}tooltip-font-size, var(--${ui.PREFIX_BS}tooltip-component-font-size, ${defaultFontSize}))`,
            padding: `var(--${ui.PREFIX_BS}tooltip-padding, var(--${ui.PREFIX_BS}tooltip-component-padding, var(--${ui.PREFIX_BS}ref-spacer-2)))`,
            maxWidth: `var(--${ui.PREFIX_BS}tooltip-max-width, var(--${ui.PREFIX_BS}tooltip-component-max-width, 300px))`,
        };
    }, [size]);
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

function DCollapse({ id, className, Component, hasSeparator = false, defaultCollapsed = false, onEventChange, children, }) {
    const [toggle, setToggle] = React.useState(defaultCollapsed);
    const onChangeCollapse = () => setToggle((prev) => !prev);
    React.useEffect(() => {
        if (onEventChange) {
            onEventChange(toggle);
        }
    }, [toggle, onEventChange]);
    React.useEffect(() => {
        setToggle(defaultCollapsed);
    }, [defaultCollapsed]);
    return (jsxRuntime.jsxs("div", Object.assign({ id: id, className: classNames__default["default"]('collapse-container', className) }, { children: [jsxRuntime.jsxs("button", Object.assign({ className: "collapse-button", type: "button", onClick: onChangeCollapse }, { children: [jsxRuntime.jsx("div", Object.assign({ className: "flex-grow-1" }, { children: Component })), jsxRuntime.jsx(DIcon, { color: `var(--${ui.PREFIX_BS}gray)`, size: `var(--${ui.PREFIX_BS}ref-fs-small)`, icon: toggle ? 'chevron-up' : 'chevron-down' })] })), toggle && (jsxRuntime.jsx("div", Object.assign({ className: classNames__default["default"]({
                    'collapse-body': true,
                }), style: {
                    [`--${ui.PREFIX_BS}collapse-separator-display`]: hasSeparator ? 'block' : 'none',
                } }, { children: children })))] })));
}

function DInputCurrency(_a) {
    var { onEventChange, onEventBlur, onEventFocus } = _a, otherProps = tslib.__rest(_a, ["onEventChange", "onEventBlur", "onEventFocus"]);
    const { currency } = useLiquidContext();
    return (jsxRuntime.jsx(DInputCurrencyBase, Object.assign({ currencyOptions: currency, onEventChange: ({ detail }) => onEventChange(detail) }, onEventBlur && {
        onEventBlur: ({ detail }) => onEventBlur(detail),
    }, onEventFocus && {
        onEventFocus: ({ detail }) => onEventFocus(detail),
    }, otherProps)));
}

function DBoxFile(_a) {
    var { icon = 'cloud-upload', iconFamilyClass, iconFamilyPrefix, isDisabled = false, children } = _a, dropzoneOptions = tslib.__rest(_a, ["icon", "iconFamilyClass", "iconFamilyPrefix", "isDisabled", "children"]);
    const { acceptedFiles, getRootProps, getInputProps, } = reactDropzone.useDropzone(Object.assign({ disabled: isDisabled }, dropzoneOptions));
    return (jsxRuntime.jsxs("section", Object.assign({ className: classNames__default["default"]('d-box-file', {
            'd-box-file-selected': !!acceptedFiles.length,
        }) }, { children: [jsxRuntime.jsxs("div", Object.assign({}, getRootProps({
                className: classNames__default["default"]('d-box-file-dropzone', {
                    disabled: isDisabled,
                }),
            }), { children: [jsxRuntime.jsx("input", Object.assign({}, getInputProps())), jsxRuntime.jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }), jsxRuntime.jsx("div", Object.assign({ className: "d-box-content" }, { children: children }))] })), !!acceptedFiles.length && (jsxRuntime.jsx("aside", Object.assign({ className: "d-box-files" }, { children: acceptedFiles.map((file) => (jsxRuntime.jsx("div", Object.assign({ className: "d-box-files-text" }, { children: `${file.name} - ${file.size} bytes` }), file.name))) })))] })));
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

function DList({ children, className, isFlush = false, isNumbered = false, isHorizontal = false, horizontalBreakpoint, }) {
    if (isFlush && isHorizontal) {
        throw new Error("Horizontal and Flush props don't work together");
    }
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames__default["default"]('list-group', {
            'list-group-flush': isFlush && !isHorizontal,
            'list-group-numbered': isNumbered,
            'list-group-horizontal': isHorizontal && !horizontalBreakpoint,
        }, (isHorizontal && horizontalBreakpoint) && `list-group-horizontal-${horizontalBreakpoint}`, className) }, { children: children })));
}

function DListItem({ children, className, isActive = false, isDisabled = false, theme, onEventClick, }) {
    const Tag = React.useMemo(() => (onEventClick ? 'button' : 'div'), [onEventClick]);
    return (jsxRuntime.jsx(Tag, Object.assign({}, Tag === 'button' && {
        onClick: onEventClick,
        type: 'button',
    }, { className: classNames__default["default"]('list-group-item list-group-item-action', theme ? `list-group-item-${theme}` : undefined, className, {
            active: isActive,
            disabled: isDisabled,
        }) }, isActive && { 'aria-current': true }, { children: children })));
}

function useToast() {
    const toast = React.useCallback((message, { position = 'top-right', type = 'info', showClose = true, autoClose = false, } = {}) => {
        reactToastify.toast(({ closeToast }) => (jsxRuntime.jsx(DAlert, Object.assign({ type: type, showClose: showClose, onEventClose: closeToast }, { children: message }))), {
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
    const clipRef = React.useRef(null);
    const takeBlob = React.useCallback(async (type) => {
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
    const download = React.useCallback(async () => {
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
    const share = React.useCallback(async () => {
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
    return (jsxRuntime.jsx(DListItem, Object.assign({}, props, { children: jsxRuntime.jsxs("div", Object.assign({ className: classNames__default["default"]('d-flex justify-content-between align-items-center p-3 gap-3', classNameMovement) }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: "d-flex flex-column gap-1" }, { children: [jsxRuntime.jsx("span", Object.assign({ className: "fs-6" }, { children: description })), jsxRuntime.jsx("span", Object.assign({ className: "sp text-gray-700" }, { children: date }))] })), jsxRuntime.jsx("span", Object.assign({ className: classNames__default["default"]('fs-6', value.theme) }, { children: value.valueFormatted }))] })) })));
}

function DStepper({ options, currentStep, successIcon = 'check', isVertical = false, }) {
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames__default["default"]({
            'd-stepper': true,
            'is-vertical': isVertical,
        }) }, { children: options.map(({ label, value }) => (jsxRuntime.jsxs("div", Object.assign({ className: "d-step" }, { children: [jsxRuntime.jsx("div", Object.assign({ className: "d-step-value" }, { children: jsxRuntime.jsx("div", Object.assign({ className: classNames__default["default"]({
                            'd-step-icon-container': true,
                            'd-step-check': value < currentStep,
                            'd-step-current': value === currentStep,
                        }) }, { children: value < currentStep
                            ? (jsxRuntime.jsx(DIcon, { icon: successIcon, innerClass: "d-step-icon" }))
                            : value })) })), jsxRuntime.jsx("div", Object.assign({ className: "d-step-label" }, { children: label }))] }), label))) })));
}

function DFormikInputCurrency(_a) {
    var { name, hint } = _a, props = tslib.__rest(_a, ["name", "hint"]);
    const [field, meta, helpers] = formik.useField(name);
    return (jsxRuntime.jsx(DInputCurrency, Object.assign({}, props, { name: field.name, value: field.value, onEventChange: (value) => helpers.setValue(value), onEventBlur: (value) => field.onBlur(value), isInvalid: !!meta.error, hint: (meta === null || meta === void 0 ? void 0 : meta.error) || hint })));
}

function DCard({ className, style, children, }) {
    return (jsxRuntime.jsx("div", Object.assign({ style: style, className: classNames__default["default"]('card', className) }, { children: children })));
}

function DCardBody({ className, children, }) {
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames__default["default"]('card-body', className) }, { children: children })));
}

function DCardAccount({ className, icon, theme, name, number, balance, balanceText, onEventClick, actionText, }) {
    return (jsxRuntime.jsx(DCard, Object.assign({ className: classNames__default["default"]('d-card-account', className) }, { children: jsxRuntime.jsxs(DCardBody, { children: [jsxRuntime.jsxs("div", Object.assign({ className: "d-flex gap-3 align-items-center" }, { children: [jsxRuntime.jsx(DIcon, { icon: icon, hasCircle: true, theme: theme, size: "1.5rem" }), jsxRuntime.jsxs("div", Object.assign({ className: "d-block flex-grow-1" }, { children: [jsxRuntime.jsx("p", Object.assign({ className: "text-gray-700" }, { children: name })), jsxRuntime.jsx("small", Object.assign({ className: "text-gray" }, { children: number }))] }))] })), jsxRuntime.jsxs("div", Object.assign({ className: "d-block" }, { children: [jsxRuntime.jsx("p", Object.assign({ className: "fw-bold fs-6 text-body" }, { children: balance })), jsxRuntime.jsx("small", Object.assign({ className: "text-gray-700" }, { children: balanceText }))] })), jsxRuntime.jsx("div", Object.assign({ className: "d-flex justify-content-end" }, { children: jsxRuntime.jsx(DButton, { text: actionText, variant: "link", size: "sm", theme: "secondary", iconEnd: "chevron-right", onEventClick: onEventClick }) }))] }) })));
}

function DCardHeader({ className, children, }) {
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames__default["default"]('card-header', className) }, { children: children })));
}

function DCardFooter({ className, children, }) {
    return (jsxRuntime.jsx("div", Object.assign({ className: classNames__default["default"]('card-footer', className) }, { children: children })));
}

function DCollapseIconText({ children, icon, iconSize = '1.5rem', iconTheme = 'primary', title, iconFamilyClass, iconFamilyPrefix, }) {
    return (jsxRuntime.jsx(DCollapse, Object.assign({ defaultCollapsed: true, className: "d-collapse-icon-text", Component: (jsxRuntime.jsxs("div", Object.assign({ className: "d-collapse-icon-text-header" }, { children: [jsxRuntime.jsx(DIcon, { icon: icon, size: iconSize, theme: iconTheme, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, hasCircle: true }), jsxRuntime.jsx("span", Object.assign({ className: "d-collapse-icon-text-title" }, { children: title }))] }))) }, { children: children })));
}

function DPaginator(_a) {
    var { className, nextLabel, previousLabel, showArrows = true, page, onEventPageChange } = _a, props = tslib.__rest(_a, ["className", "nextLabel", "previousLabel", "showArrows", "page", "onEventPageChange"]);
    return (jsxRuntime.jsx(ResponsivePagination__default["default"], Object.assign({ extraClassName: classNames__default["default"]('pagination', className), nextClassName: classNames__default["default"]('arrow arrow-next', !nextLabel && 'no-label'), nextLabel: nextLabel, previousClassName: classNames__default["default"]('arrow arrow-prev', !previousLabel && 'no-label'), previousLabel: previousLabel, renderNav: showArrows, current: page, onPageChange: onEventPageChange }, props)));
}

const LANG = ui.liquidParser.parse('{{site.language}}');
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

Object.defineProperty(exports, 'liquidParser', {
    enumerable: true,
    get: function () { return ui.liquidParser; }
});
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
exports.DInput = DInput;
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
exports.DOffcanvas = DOffcanvas;
exports.DPaginator = DPaginator;
exports.DPermissionItem = DPermissionItem;
exports.DPopover = DPopover;
exports.DProgress = DProgress;
exports.DQuickActionButton = DQuickActionButton;
exports.DQuickActionCheck = DQuickActionCheck;
exports.DQuickActionSelect = DQuickActionSelect;
exports.DQuickActionSwitch = DQuickActionSwitch;
exports.DSkeleton = DSkeleton;
exports.DStepper = DStepper;
exports.DTabContent = DTabContent;
exports.DTabs = DTabs;
exports.DToastContainer = DToastContainer;
exports.DTooltip = DTooltip;
exports.LiquidContext = LiquidContext$1;
exports.LiquidContextProvider = LiquidContextProvider;
exports.MPermissionGroup = MPermissionGroup;
exports.MSummaryCard = MSummaryCard;
exports.ModalContext = ModalContext;
exports.ModalContextProvider = ModalContextProvider;
exports.OffcanvasContext = OffcanvasContext;
exports.OffcanvasContextProvider = OffcanvasContextProvider;
exports.configureI18n = configureI8n;
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
