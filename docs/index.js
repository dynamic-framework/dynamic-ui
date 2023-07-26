'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const jsxRuntime = require('react/jsx-runtime');
const DatePicker = require('react-datepicker');
const luxon = require('luxon');
const es = require('date-fns/locale/es');
const React = require('react');
const ui = require('@dynamic-framework/ui');
const ContentLoader = require('react-content-loader');
const classnames = require('classnames');
const reactToastify = require('react-toastify');
require('react-toastify/dist/ReactToastify.css');
const react = require('@floating-ui/react');
const tslib = require('tslib');
const formik = require('formik');
const mAlert_js = require('@dynamic-framework/ui/components/m-alert.js');
const mBadge_js = require('@dynamic-framework/ui/components/m-badge.js');
const mButton_js = require('@dynamic-framework/ui/components/m-button.js');
const mChip_js = require('@dynamic-framework/ui/components/m-chip.js');
const mIcon_js = require('@dynamic-framework/ui/components/m-icon.js');
const mInput_js = require('@dynamic-framework/ui/components/m-input.js');
const mInputCheck_js = require('@dynamic-framework/ui/components/m-input-check.js');
const mInputCounter_js = require('@dynamic-framework/ui/components/m-input-counter.js');
const mInputCurrencyBase_js = require('@dynamic-framework/ui/components/m-input-currency-base.js');
const mInputPassword_js = require('@dynamic-framework/ui/components/m-input-password.js');
const mInputPin_js = require('@dynamic-framework/ui/components/m-input-pin.js');
const mInputSearch_js = require('@dynamic-framework/ui/components/m-input-search.js');
const mInputSelect_js = require('@dynamic-framework/ui/components/m-input-select.js');
const mInputSwitch_js = require('@dynamic-framework/ui/components/m-input-switch.js');
const mModal_js = require('@dynamic-framework/ui/components/m-modal.js');
const mOffcanvas_js = require('@dynamic-framework/ui/components/m-offcanvas.js');
const mProgressBar_js = require('@dynamic-framework/ui/components/m-progress-bar.js');
const mQuickActionButton_js = require('@dynamic-framework/ui/components/m-quick-action-button.js');
const mQuickActionCheck_js = require('@dynamic-framework/ui/components/m-quick-action-check.js');
const mQuickActionSelect_js = require('@dynamic-framework/ui/components/m-quick-action-select.js');
const mQuickActionSwitch_js = require('@dynamic-framework/ui/components/m-quick-action-switch.js');
const reactDropzone = require('react-dropzone');
const i18n = require('i18next');
const reactI18next = require('react-i18next');
const html2canvas = require('html2canvas');
const ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const DatePicker__default = /*#__PURE__*/_interopDefaultLegacy(DatePicker);
const es__default = /*#__PURE__*/_interopDefaultLegacy(es);
const React__default = /*#__PURE__*/_interopDefaultLegacy(React);
const ContentLoader__default = /*#__PURE__*/_interopDefaultLegacy(ContentLoader);
const classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
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
const MAlert = /*@__PURE__*/ createReactComponent('m-alert', undefined, undefined, mAlert_js.defineCustomElement);
const MBadge = /*@__PURE__*/ createReactComponent('m-badge', undefined, undefined, mBadge_js.defineCustomElement);
const MButton = /*@__PURE__*/ createReactComponent('m-button', undefined, undefined, mButton_js.defineCustomElement);
const MChip = /*@__PURE__*/ createReactComponent('m-chip', undefined, undefined, mChip_js.defineCustomElement);
const MIcon = /*@__PURE__*/ createReactComponent('m-icon', undefined, undefined, mIcon_js.defineCustomElement);
const MInput = /*@__PURE__*/ createReactComponent('m-input', undefined, undefined, mInput_js.defineCustomElement);
const MInputCheck = /*@__PURE__*/ createReactComponent('m-input-check', undefined, undefined, mInputCheck_js.defineCustomElement);
const MInputCounter = /*@__PURE__*/ createReactComponent('m-input-counter', undefined, undefined, mInputCounter_js.defineCustomElement);
const MInputCurrencyBase = /*@__PURE__*/ createReactComponent('m-input-currency-base', undefined, undefined, mInputCurrencyBase_js.defineCustomElement);
const MInputPassword = /*@__PURE__*/ createReactComponent('m-input-password', undefined, undefined, mInputPassword_js.defineCustomElement);
const MInputPin = /*@__PURE__*/ createReactComponent('m-input-pin', undefined, undefined, mInputPin_js.defineCustomElement);
const MInputSearch = /*@__PURE__*/ createReactComponent('m-input-search', undefined, undefined, mInputSearch_js.defineCustomElement);
const MInputSelect = /*@__PURE__*/ createReactComponent('m-input-select', undefined, undefined, mInputSelect_js.defineCustomElement);
const MInputSwitch = /*@__PURE__*/ createReactComponent('m-input-switch', undefined, undefined, mInputSwitch_js.defineCustomElement);
const MModal = /*@__PURE__*/ createReactComponent('m-modal', undefined, undefined, mModal_js.defineCustomElement);
const MOffcanvas = /*@__PURE__*/ createReactComponent('m-offcanvas', undefined, undefined, mOffcanvas_js.defineCustomElement);
const MProgressBar = /*@__PURE__*/ createReactComponent('m-progress-bar', undefined, undefined, mProgressBar_js.defineCustomElement);
const MQuickActionButton = /*@__PURE__*/ createReactComponent('m-quick-action-button', undefined, undefined, mQuickActionButton_js.defineCustomElement);
const MQuickActionCheck = /*@__PURE__*/ createReactComponent('m-quick-action-check', undefined, undefined, mQuickActionCheck_js.defineCustomElement);
const MQuickActionSelect = /*@__PURE__*/ createReactComponent('m-quick-action-select', undefined, undefined, mQuickActionSelect_js.defineCustomElement);
const MQuickActionSwitch = /*@__PURE__*/ createReactComponent('m-quick-action-switch', undefined, undefined, mQuickActionSwitch_js.defineCustomElement);

function MCollapse({ id, className, Component, hasSeparator = false, defaultCollapsed = false, onChange, children, }) {
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
    return (jsxRuntime.jsxs("div", Object.assign({ id: id, className: classnames__default["default"]('m-collapse collapse-container', className) }, { children: [jsxRuntime.jsxs("button", Object.assign({ className: "collapse-button", type: "button", onClick: onChangeCollapse }, { children: [jsxRuntime.jsx("div", Object.assign({ className: "flex-grow-1" }, { children: Component })), jsxRuntime.jsx(MIcon, { color: `var(--${ui.PREFIX_BS}gray)`, size: `var(--${ui.PREFIX_BS}ref-fs-small)`, icon: toggle ? 'chevron-up' : 'chevron-down' })] })), toggle && (jsxRuntime.jsx("div", Object.assign({ className: classnames__default["default"]({
                    'collapse-body': true,
                }), style: {
                    [`--${ui.PREFIX_BS}m-collapse-separator-display`]: hasSeparator ? 'block' : 'none',
                } }, { children: children })))] })));
}

function MCollapseIconText({ children, icon, iconSize = '1.5rem', iconTheme = 'primary', title, iconFamilyClass, iconFamilyPrefix, }) {
    return (jsxRuntime.jsx(MCollapse, Object.assign({ defaultCollapsed: true, className: "m-collapse-icon-text", Component: (jsxRuntime.jsxs("div", Object.assign({ className: "m-collapse-icon-text-header" }, { children: [jsxRuntime.jsx(MIcon, { icon: icon, size: iconSize, theme: iconTheme, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, hasCircle: true }), jsxRuntime.jsx("span", Object.assign({ className: "m-collapse-icon-text-title" }, { children: title }))] }))) }, { children: children })));
}

function MPermissionItem({ permission, permissionState, onChange, onAction = () => { }, }) {
    return (jsxRuntime.jsxs("div", Object.assign({ role: "button", tabIndex: 0, onKeyDown: () => { }, className: "d-flex permission-item align-items-center", onClick: onAction }, { children: [jsxRuntime.jsx("span", Object.assign({ className: "flex-grow-1 label" }, { children: permission.label })), permission.type === 'custom' && (jsxRuntime.jsx(MBadge, { theme: "tertiary", text: permissionState })), jsxRuntime.jsx(MInputSwitch, { mId: permission.id, isChecked: !!permission.value, isDisabled: !permission.enabled, onMChange: ({ detail: checked }) => onChange(checked) })] })));
}

function MPermissionGroup({ title, description, permissionState, permissionList, onChangePermission, onCustomAction = () => { }, }) {
    return (jsxRuntime.jsxs("div", Object.assign({ className: "row operation-group g-0 mb-3 mb-lg-0" }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: "col-12 col-lg-4 d-flex flex-column justify-content-center" }, { children: [jsxRuntime.jsx("h6", Object.assign({ className: "fw-bold mb-3 mb-lg-2" }, { children: title })), jsxRuntime.jsx("p", Object.assign({ className: "fs-8 d-none d-lg-block m-0" }, { children: description }))] })), jsxRuntime.jsx("div", Object.assign({ className: "col-12 offset-lg-1 col-lg-7" }, { children: permissionList.map((permission) => (jsxRuntime.jsx(MPermissionItem, { permission: permission, permissionState: permissionState, onChange: (isChecked) => onChangePermission(permission, isChecked), onAction: () => onCustomAction(permission) }, permission.id))) }))] })));
}

function MSummaryCard({ title, description, icon, iconSize, iconTheme, Summary, }) {
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("h6", Object.assign({ className: "fw-bold fs-6" }, { children: title })), jsxRuntime.jsx("p", Object.assign({ className: "fs-8" }, { children: description })), jsxRuntime.jsxs("div", Object.assign({ className: "bg-white rounded p-4 d-flex gap-3 shadow-sm text-gray-700 fs-8" }, { children: [jsxRuntime.jsx(MIcon, { icon: icon, theme: iconTheme, size: iconSize }), Summary] }))] }));
}

const LiquidContext = React.createContext({
    language: 'en-US',
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

DatePicker.registerLocale('es', es__default["default"]);
function MCalendar({ setDate, date, calendarContainer, inline = true, withPortal, minDate, showTimeInput, calendarStartDay, timeInputLabel, dateFormat, className, calendarClassName, selectsRange, selectsStart, selectsEnd, startDate, endDate, autoFocus, monthsShown, fixedHeight, }) {
    const dateJS = (value) => luxon.DateTime.fromISO(value).toJSDate();
    const { language } = useLiquidContext();
    const lang = language === 'en' ? undefined : 'es';
    return (jsxRuntime.jsx(DatePicker__default["default"], Object.assign({ selected: dateJS(date), onChange: (value) => {
            if (Array.isArray(value)) {
                const [start, end] = value;
                setDate([
                    start ? luxon.DateTime.fromJSDate(start).toISO() : null,
                    end ? luxon.DateTime.fromJSDate(end).toISO() : null,
                ]);
            }
            else {
                setDate(value ? luxon.DateTime.fromJSDate(value).toISO() : null);
            }
        }, 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        calendarContainer: calendarContainer, inline: inline, withPortal: withPortal, minDate: minDate ? dateJS(minDate) : undefined, showTimeInput: showTimeInput, calendarStartDay: calendarStartDay, timeInputLabel: timeInputLabel, dateFormat: dateFormat, className: className, calendarClassName: calendarClassName, selectsRange: selectsRange, selectsEnd: selectsEnd, selectsStart: selectsStart, startDate: startDate, endDate: endDate, autoFocus: autoFocus, monthsShown: monthsShown, fixedHeight: fixedHeight }, lang && { locale: lang })));
}

function MSkeleton({ speed = 2, viewBox, backgroundColor, foregroundColor, children, }) {
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
function MTabs({ children, defaultSelected, onChange, options, className, isVertical, }) {
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
    return (jsxRuntime.jsx(TabContext.Provider, Object.assign({ value: value }, { children: jsxRuntime.jsxs("div", Object.assign({ className: classnames__default["default"]({
                'm-tabs': true,
                'm-tabs-vertical': isVertical,
            }) }, { children: [jsxRuntime.jsx("nav", Object.assign({ className: "nav" }, { children: options.map((option) => (jsxRuntime.jsx("button", Object.assign({ id: `${option.tab}Tab`, className: classnames__default["default"]('nav-link', {
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

function MTabContent({ tab, children }) {
    const { isSelected } = useTabContext();
    if (!isSelected(tab)) {
        return null;
    }
    return (jsxRuntime.jsx("div", Object.assign({ className: "tab-pane fade show active", id: `${tab}Pane`, role: "tabpanel", tabIndex: 0, "aria-labelledby": `${tab}Tab` }, { children: children })));
}

function MToastContainer({ style, position = 'bottom-center', }) {
    return (jsxRuntime.jsx(reactToastify.ToastContainer, { toastClassName: () => 'shadow-none p-0 cursor-default', position: position, autoClose: false, hideProgressBar: true, closeOnClick: false, closeButton: false, transition: reactToastify.Slide, style: style }));
}

function MPopover({ children, renderComponent, isOpen, setIsOpen = () => { }, }) {
    const [innerIsOpen, setInnerIsOpen] = React.useState(false);
    React.useEffect(() => {
        setInnerIsOpen(isOpen);
    }, [isOpen]);
    const onOpenChange = React.useCallback((value) => {
        setInnerIsOpen(value);
        setIsOpen(value);
    }, [setIsOpen]);
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
    return (jsxRuntime.jsxs("div", Object.assign({ className: "m-popover" }, { children: [jsxRuntime.jsx("div", Object.assign({ ref: refs.setReference }, getReferenceProps(), { children: renderComponent(innerIsOpen) })), innerIsOpen && (jsxRuntime.jsx(react.FloatingFocusManager, Object.assign({ context: context, modal: false }, { children: jsxRuntime.jsx("div", Object.assign({ className: "m-popover-content", ref: refs.setFloating, style: floatingStyles, "aria-labelledby": headingId }, getFloatingProps(), { children: children })) })))] })));
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

function MCurrencyText({ value, className, }) {
    const { values: [valueFormatted] } = useFormatCurrency(value);
    return (jsxRuntime.jsx("span", Object.assign({ className: className }, { children: valueFormatted })));
}

function MFormikInput(_a) {
    var { name } = _a, props = tslib.__rest(_a, ["name"]);
    const [field, meta, helpers] = formik.useField(name);
    return (jsxRuntime.jsx(MInput, Object.assign({}, props, { name: field.name, value: field.value, onMChange: ({ detail }) => helpers.setValue(detail), onMBlur: ({ detail }) => field.onBlur(detail), isInvalid: !!meta.error })));
}

function MFormikInputSelect(_a) {
    var { name, labelExtractor = (item) => item === null || item === void 0 ? void 0 : item.label, valueExtractor = (item) => item === null || item === void 0 ? void 0 : item.value } = _a, props = tslib.__rest(_a, ["name", "labelExtractor", "valueExtractor"]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [field, , helpers] = formik.useField(name);
    return (jsxRuntime.jsx(MInputSelect, Object.assign({}, props, { name: field.name, selectedOption: field.value, labelExtractor: labelExtractor, valueExtractor: valueExtractor, onMChange: ({ detail }) => helpers.setValue(detail), onMBlur: ({ detail }) => field.onBlur(detail) })));
}

const TOOLTIP_FONT_SIZE_BY_SIZE = {
    sm: `var(--${ui.PREFIX_BS}ref-fs-subparagraph)`,
    default: `var(--${ui.PREFIX_BS}body-font-size)`,
    lg: `var(--${ui.PREFIX_BS}ref-fs-6)`,
};
const ARROW_WIDTH = 8;
const ARROW_HEIGHT = 4;
const GAP = 2;
function MTooltip({ classNameContainer, className, offSet = ARROW_HEIGHT + GAP, padding, withFocus = false, withClick = false, withHover = true, isOpen = false, placement = 'top', size, Component, children, }) {
    const [open, setOpen] = React.useState(isOpen);
    const styleVariables = React.useMemo(() => {
        const defaultFontSize = size
            ? TOOLTIP_FONT_SIZE_BY_SIZE[size]
            : TOOLTIP_FONT_SIZE_BY_SIZE.default;
        return {
            background: `var(--${ui.PREFIX_BS}m-tooltip-bg, var(--${ui.PREFIX_BS}m-tooltip-component-bg, var(--${ui.PREFIX_BS}secondary)))`,
            borderRadius: `var(--${ui.PREFIX_BS}m-tooltip-border-radius, var(--${ui.PREFIX_BS}m-tooltip-component-border-radius, var(--${ui.PREFIX_BS}border-radius)))`,
            color: `var(--${ui.PREFIX_BS}m-tooltip-color, var(--${ui.PREFIX_BS}m-tooltip-component-color, var(--${ui.PREFIX_BS}white)))`,
            fontSize: `var(--${ui.PREFIX_BS}m-tooltip-font-size, var(--${ui.PREFIX_BS}m-tooltip-component-font-size, ${defaultFontSize}))`,
            padding: `var(--${ui.PREFIX_BS}m-tooltip-padding, var(--${ui.PREFIX_BS}m-tooltip-component-padding, var(--${ui.PREFIX_BS}ref-spacer-2)))`,
            maxWidth: `var(--${ui.PREFIX_BS}m-tooltip-max-width, var(--${ui.PREFIX_BS}m-tooltip-component-max-width, 300px))`,
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

function MInputCurrency(_a) {
    var { onChange } = _a, otherProps = tslib.__rest(_a, ["onChange"]);
    const { currency } = useLiquidContext();
    return (jsxRuntime.jsx(MInputCurrencyBase, Object.assign({ currencyOptions: currency, onMChange: ({ detail }) => onChange(detail) }, otherProps)));
}

function MBoxFile(_a) {
    var { icon = 'cloud-upload', iconFamilyClass, iconFamilyPrefix, isDisabled = false, children } = _a, dropzoneOptions = tslib.__rest(_a, ["icon", "iconFamilyClass", "iconFamilyPrefix", "isDisabled", "children"]);
    const { acceptedFiles, getRootProps, getInputProps, } = reactDropzone.useDropzone(Object.assign({ disabled: isDisabled }, dropzoneOptions));
    return (jsxRuntime.jsxs("section", Object.assign({ className: classnames__default["default"]('m-box-file', {
            'm-box-file-selected': !!acceptedFiles.length,
        }) }, { children: [jsxRuntime.jsxs("div", Object.assign({}, getRootProps({
                className: classnames__default["default"]('m-box-file-dropzone', {
                    disabled: isDisabled,
                }),
            }), { children: [jsxRuntime.jsx("input", Object.assign({}, getInputProps())), jsxRuntime.jsx(MIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }), jsxRuntime.jsx("div", Object.assign({ className: "m-box-content" }, { children: children }))] })), !!acceptedFiles.length && (jsxRuntime.jsx("aside", Object.assign({ className: "m-box-files" }, { children: acceptedFiles.map((file) => (jsxRuntime.jsx("div", Object.assign({ className: "m-box-files-text" }, { children: `${file.name} - ${file.size} bytes` }), file.name))) })))] })));
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

function useToast() {
    const toast = React.useCallback((message, { position = 'bottom-center', type = 'info', showClose = true, autoClose = false, } = {}) => {
        reactToastify.toast(({ closeToast }) => (jsxRuntime.jsx(MAlert, Object.assign({ type: type, showClose: showClose, onMClose: closeToast }, { children: message }))), {
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

exports.LiquidContext = LiquidContext$1;
exports.LiquidContextProvider = LiquidContextProvider;
exports.MAlert = MAlert;
exports.MBadge = MBadge;
exports.MBoxFile = MBoxFile;
exports.MButton = MButton;
exports.MCalendar = MCalendar;
exports.MChip = MChip;
exports.MCollapse = MCollapse;
exports.MCollapseIconText = MCollapseIconText;
exports.MCurrencyText = MCurrencyText;
exports.MFormikInput = MFormikInput;
exports.MFormikInputSelect = MFormikInputSelect;
exports.MIcon = MIcon;
exports.MInput = MInput;
exports.MInputCheck = MInputCheck;
exports.MInputCounter = MInputCounter;
exports.MInputCurrency = MInputCurrency;
exports.MInputCurrencyBase = MInputCurrencyBase;
exports.MInputPassword = MInputPassword;
exports.MInputPin = MInputPin;
exports.MInputSearch = MInputSearch;
exports.MInputSelect = MInputSelect;
exports.MInputSwitch = MInputSwitch;
exports.MModal = MModal;
exports.MOffcanvas = MOffcanvas;
exports.MPermissionGroup = MPermissionGroup;
exports.MPermissionItem = MPermissionItem;
exports.MPopover = MPopover;
exports.MProgressBar = MProgressBar;
exports.MQuickActionButton = MQuickActionButton;
exports.MQuickActionCheck = MQuickActionCheck;
exports.MQuickActionSelect = MQuickActionSelect;
exports.MQuickActionSwitch = MQuickActionSwitch;
exports.MSkeleton = MSkeleton;
exports.MSummaryCard = MSummaryCard;
exports.MTabContent = MTabContent;
exports.MTabs = MTabs;
exports.MToastContainer = MToastContainer;
exports.MTooltip = MTooltip;
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
