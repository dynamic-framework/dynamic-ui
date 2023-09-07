import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { __rest } from 'tslib';
import DatePicker from 'react-datepicker';
import { DateTime } from 'luxon';
import React, { createElement, createContext, useMemo, useContext, useState, useCallback, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from '@dynamic-framework/ui/components/d-alert.js';
import { defineCustomElement as defineCustomElement$1 } from '@dynamic-framework/ui/components/d-badge.js';
import { defineCustomElement as defineCustomElement$2 } from '@dynamic-framework/ui/components/d-button.js';
import { defineCustomElement as defineCustomElement$3 } from '@dynamic-framework/ui/components/d-chip.js';
import { defineCustomElement as defineCustomElement$4 } from '@dynamic-framework/ui/components/d-icon.js';
import { defineCustomElement as defineCustomElement$5 } from '@dynamic-framework/ui/components/d-input.js';
import { defineCustomElement as defineCustomElement$6 } from '@dynamic-framework/ui/components/d-input-check.js';
import { defineCustomElement as defineCustomElement$7 } from '@dynamic-framework/ui/components/d-input-counter.js';
import { defineCustomElement as defineCustomElement$8 } from '@dynamic-framework/ui/components/d-input-currency-base.js';
import { defineCustomElement as defineCustomElement$9 } from '@dynamic-framework/ui/components/d-input-password.js';
import { defineCustomElement as defineCustomElement$a } from '@dynamic-framework/ui/components/d-input-pin.js';
import { defineCustomElement as defineCustomElement$b } from '@dynamic-framework/ui/components/d-input-search.js';
import { defineCustomElement as defineCustomElement$c } from '@dynamic-framework/ui/components/d-input-select.js';
import { defineCustomElement as defineCustomElement$d } from '@dynamic-framework/ui/components/d-input-switch.js';
import { defineCustomElement as defineCustomElement$e } from '@dynamic-framework/ui/components/d-modal.js';
import { defineCustomElement as defineCustomElement$f } from '@dynamic-framework/ui/components/d-offcanvas.js';
import { defineCustomElement as defineCustomElement$g } from '@dynamic-framework/ui/components/d-progress.js';
import { defineCustomElement as defineCustomElement$h } from '@dynamic-framework/ui/components/d-quick-action-button.js';
import { defineCustomElement as defineCustomElement$i } from '@dynamic-framework/ui/components/d-quick-action-check.js';
import { defineCustomElement as defineCustomElement$j } from '@dynamic-framework/ui/components/d-quick-action-select.js';
import { defineCustomElement as defineCustomElement$k } from '@dynamic-framework/ui/components/d-quick-action-switch.js';
import { liquidParser, PREFIX_BS, formatCurrency } from '@dynamic-framework/ui';
export { liquidParser } from '@dynamic-framework/ui';
import ContentLoader from 'react-content-loader';
import classNames from 'classnames';
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useRole, useInteractions, useId, FloatingFocusManager, arrow, useHover, useFocus, FloatingPortal, FloatingArrow } from '@floating-ui/react';
import { useField } from 'formik';
import { useDropzone } from 'react-dropzone';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ResponsivePagination from 'react-responsive-pagination';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import html2canvas from 'html2canvas';
import { createPortal } from 'react-dom';

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
        return jsx(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    const forwardedRef = React.forwardRef(forwardRef);
    forwardedRef.displayName = displayName;
    return forwardedRef;
};

const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement) => {
    if (defineCustomElement !== undefined) {
        defineCustomElement();
    }
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends React.Component {
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
            const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
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
            return createElement(tagName, newProps, children);
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
const DAlert = /*@__PURE__*/ createReactComponent('d-alert', undefined, undefined, defineCustomElement);
const DBadge = /*@__PURE__*/ createReactComponent('d-badge', undefined, undefined, defineCustomElement$1);
const DButton = /*@__PURE__*/ createReactComponent('d-button', undefined, undefined, defineCustomElement$2);
const DChip = /*@__PURE__*/ createReactComponent('d-chip', undefined, undefined, defineCustomElement$3);
const DIcon = /*@__PURE__*/ createReactComponent('d-icon', undefined, undefined, defineCustomElement$4);
const DInput = /*@__PURE__*/ createReactComponent('d-input', undefined, undefined, defineCustomElement$5);
const DInputCheck = /*@__PURE__*/ createReactComponent('d-input-check', undefined, undefined, defineCustomElement$6);
const DInputCounter = /*@__PURE__*/ createReactComponent('d-input-counter', undefined, undefined, defineCustomElement$7);
const DInputCurrencyBase = /*@__PURE__*/ createReactComponent('d-input-currency-base', undefined, undefined, defineCustomElement$8);
const DInputPassword = /*@__PURE__*/ createReactComponent('d-input-password', undefined, undefined, defineCustomElement$9);
const DInputPin = /*@__PURE__*/ createReactComponent('d-input-pin', undefined, undefined, defineCustomElement$a);
const DInputSearch = /*@__PURE__*/ createReactComponent('d-input-search', undefined, undefined, defineCustomElement$b);
const DInputSelect = /*@__PURE__*/ createReactComponent('d-input-select', undefined, undefined, defineCustomElement$c);
const DInputSwitch = /*@__PURE__*/ createReactComponent('d-input-switch', undefined, undefined, defineCustomElement$d);
const DModal = /*@__PURE__*/ createReactComponent('d-modal', undefined, undefined, defineCustomElement$e);
const DOffcanvas = /*@__PURE__*/ createReactComponent('d-offcanvas', undefined, undefined, defineCustomElement$f);
const DProgress = /*@__PURE__*/ createReactComponent('d-progress', undefined, undefined, defineCustomElement$g);
const DQuickActionButton = /*@__PURE__*/ createReactComponent('d-quick-action-button', undefined, undefined, defineCustomElement$h);
const DQuickActionCheck = /*@__PURE__*/ createReactComponent('d-quick-action-check', undefined, undefined, defineCustomElement$i);
const DQuickActionSelect = /*@__PURE__*/ createReactComponent('d-quick-action-select', undefined, undefined, defineCustomElement$j);
const DQuickActionSwitch = /*@__PURE__*/ createReactComponent('d-quick-action-switch', undefined, undefined, defineCustomElement$k);

function DPermissionItem({ permission, permissionState, onChange, onAction = () => { }, }) {
    return (jsxs("div", Object.assign({ role: "button", tabIndex: 0, onKeyDown: () => { }, className: "d-flex permission-item align-items-center", onClick: onAction }, { children: [jsx("span", Object.assign({ className: "flex-grow-1 label" }, { children: permission.label })), permission.type === 'custom' && (jsx(DBadge, { theme: "tertiary", text: permissionState })), jsx(DInputSwitch, { innerId: permission.id, isChecked: !!permission.value, isDisabled: !permission.enabled, onEventChange: ({ detail: checked }) => onChange(checked) })] })));
}

function MPermissionGroup({ title, description, permissionState, permissionList, onChangePermission, onCustomAction = () => { }, }) {
    return (jsxs("div", Object.assign({ className: "row operation-group g-0 mb-3 mb-lg-0" }, { children: [jsxs("div", Object.assign({ className: "col-12 col-lg-4 d-flex flex-column justify-content-center" }, { children: [jsx("h6", Object.assign({ className: "fw-bold mb-3 mb-lg-2" }, { children: title })), jsx("p", Object.assign({ className: "fs-8 d-none d-lg-block m-0" }, { children: description }))] })), jsx("div", Object.assign({ className: "col-12 offset-lg-1 col-lg-7" }, { children: permissionList.map((permission) => (jsx(DPermissionItem, { permission: permission, permissionState: permissionState, onChange: (isChecked) => onChangePermission(permission, isChecked), onAction: () => onCustomAction(permission) }, permission.id))) }))] })));
}

function MSummaryCard({ title, description, icon, iconSize, iconTheme, Summary, }) {
    return (jsxs("div", { children: [jsx("h6", Object.assign({ className: "fw-bold fs-6" }, { children: title })), jsx("p", Object.assign({ className: "fs-8" }, { children: description })), jsxs("div", Object.assign({ className: "bg-white rounded p-4 d-flex gap-3 shadow-sm text-gray-700 fs-8" }, { children: [jsx(DIcon, { icon: icon, theme: iconTheme, size: iconSize }), Summary] }))] }));
}

function DToastContainer({ style, position = 'top-right', }) {
    return (jsx(ToastContainer, { toastClassName: () => 'shadow-none p-0 cursor-default', position: position, autoClose: false, hideProgressBar: true, closeOnClick: false, closeButton: false, transition: Slide, style: style }));
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
    return (jsx(LiquidContext.Provider, Object.assign({ value: value }, { children: children })));
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
    return (jsxs(ModalContext.Provider, Object.assign({ value: value }, { children: [children, hasPortal && createPortal(jsxs(Fragment, { children: [stack.map(({ Component, modalName, callbacks, payload, }) => {
                        const EnhancedComponent = enhanceModal(Component, callbacks);
                        return (jsx(EnhancedComponent, { name: modalName, payload: payload, openModal: openModal, closeModal: closeModal }, modalName));
                    }), !!stack.length && jsx("div", { className: "modal-backdrop fade show" })] }), document.getElementById(portalName))] })));
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
    return (jsxs(OffcanvasContext.Provider, Object.assign({ value: value }, { children: [children, hasPortal && createPortal(jsxs(Fragment, { children: [stack.map(({ Component, offcanvasName, callbacks, payload, }) => {
                        const EnhancedComponent = enhanceOffcanvas(Component, callbacks);
                        return (jsx(EnhancedComponent, { name: offcanvasName, payload: payload, openOffcanvas: openOffcanvas, closeOffcanvas: closeOffcanvas }, offcanvasName));
                    }), !!stack.length && jsx("div", { className: "offcanvas-backdrop fade show" })] }), document.getElementById(portalName))] })));
}
function useOffcanvasContext() {
    const context = useContext(OffcanvasContext);
    if (context === undefined) {
        throw new Error('useOffcanvasContext was used outside of OffcanvasContextProvider');
    }
    return context;
}

function DDatePickerTime(_a) {
    var { value, onEventChange, innerId, label } = _a, props = __rest(_a, ["value", "onEventChange", "innerId", "label"]);
    return (jsxs("div", Object.assign({ className: "d-flex align-items-center gap-2 flex-column d-datepicker-time" }, { children: [label && (jsx("p", Object.assign({ className: "d-datepicker-time-label" }, { children: label }))), jsx(DInput, Object.assign({}, onEventChange && {
                onEventChange: (time) => onEventChange(time),
            }, { type: "time", innerId: innerId, value: value }, props))] })));
}

function DDatePickerInput(_a, ref) {
    var { value, onEventClick, innerId, iconEnd } = _a, props = __rest(_a, ["value", "onEventClick", "innerId", "iconEnd"]);
    useImperativeHandle(ref, () => ({}), []);
    return (jsx("div", Object.assign({ role: "button", onClick: onEventClick, onKeyDown: () => { }, tabIndex: -1 }, { children: jsx(DInput, Object.assign({ isReadOnly: true, type: "text", innerId: innerId, value: value, onEventIconEndClick: onEventClick, iconEnd: iconEnd }, props)) })));
}
var DDatePickerInput$1 = forwardRef(DDatePickerInput);

function DMonthPicker(_a) {
    var { onEventChangeDate, date } = _a, props = __rest(_a, ["onEventChangeDate", "date"]);
    const dateJS = (value) => DateTime.fromISO(value).toJSDate();
    const { language } = useLiquidContext();
    const lang = language || 'en';
    return (jsx(DatePicker, Object.assign({ showMonthYearPicker: true, selected: dateJS(date), calendarClassName: "d-month-picker", onChange: (value) => {
            onEventChangeDate(value);
        }, customInput: (jsx("p", Object.assign({ className: "fw-bold text-capitalize" }, { children: DateTime.fromISO(date).setLocale(lang).toFormat('MMMM yyyy') }))), renderCustomHeader: ({ monthDate, decreaseYear, increaseYear, prevYearButtonDisabled, nextYearButtonDisabled, }) => (jsxs("div", Object.assign({ className: "d-flex align-items-center justify-content-between gap-4 fs-6 bg-dark" }, { children: [jsx(DButton, { iconStart: "chevron-left", size: "sm", variant: "link", theme: "light", onEventClick: decreaseYear, isDisabled: prevYearButtonDisabled }), jsx("p", Object.assign({ className: "fs-6 fw-bold" }, { children: monthDate.getFullYear() })), jsx(DButton, { iconStart: "chevron-right", size: "sm", variant: "link", theme: "light", onEventClick: increaseYear, isDisabled: nextYearButtonDisabled })] }))) }, props)));
}

function DDatePickerHeader({ monthDate, changeMonth, changeYear, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, withMonthSelector, decreaseMonthIcon, increaseMonthIcon, iconSize, buttonVariant, buttonTheme, }) {
    const { language } = useLiquidContext();
    const lang = language || 'en';
    return (jsxs("div", Object.assign({ className: "d-flex align-items-center justify-content-between d-datepicker-header" }, { children: [jsx(DButton, { iconStart: decreaseMonthIcon, size: iconSize, variant: buttonVariant, theme: buttonTheme, onEventClick: decreaseMonth, isDisabled: prevMonthButtonDisabled }), jsx(DMonthPicker, Object.assign({}, !withMonthSelector && { readOnly: true }, { date: monthDate.toISOString(), onEventChangeDate: (value) => {
                    if (value) {
                        changeMonth(DateTime.fromJSDate(value).month - 1);
                        changeYear(DateTime.fromJSDate(value).year);
                    }
                } }, lang && { locale: lang })), jsx(DButton, { iconStart: increaseMonthIcon, size: iconSize, variant: buttonVariant, theme: buttonTheme, onEventClick: increaseMonth, isDisabled: nextMonthButtonDisabled })] })));
}

function DDatePicker(_a) {
    var { onEventChangeDate, date, selectsRange, withMonthSelector, inputLabel, inputIcon = 'calendar', inputId = 'input-calendar', timeId = 'input-time', timeLabel, headerDecreaseMonthIcon = 'chevron-left', headerIncreaseMonthIcon = 'chevron-right', headerIconSize = 'sm', headerButtonVariant = 'link', headerButtonTheme = 'dark' } = _a, props = __rest(_a, ["onEventChangeDate", "date", "selectsRange", "withMonthSelector", "inputLabel", "inputIcon", "inputId", "timeId", "timeLabel", "headerDecreaseMonthIcon", "headerIncreaseMonthIcon", "headerIconSize", "headerButtonVariant", "headerButtonTheme"]);
    const dateJS = (value) => DateTime.fromISO(value).toJSDate();
    const { language } = useLiquidContext();
    const lang = language || 'en';
    // eslint-disable-next-line react/no-unstable-nested-components
    const InputPicker = forwardRef(({ value, onClick }, ref) => (jsx(DDatePickerInput$1, { label: inputLabel, innerId: inputId, iconEnd: inputIcon, value: value, onEventClick: onClick, ref: ref })));
    const TimeInputPicker = useCallback(({ value, onChange }) => (jsx(DDatePickerTime, { onEventChange: onChange, value: value, label: timeLabel, innerId: timeId })), [timeLabel, timeId]);
    const DatePickerHeader = useCallback((headerProps) => (jsx(DDatePickerHeader, Object.assign({}, headerProps, { decreaseMonthIcon: headerDecreaseMonthIcon, increaseMonthIcon: headerIncreaseMonthIcon, iconSize: headerIconSize, buttonVariant: headerButtonVariant, buttonTheme: headerButtonTheme, withMonthSelector: !!withMonthSelector }))), [headerButtonTheme,
        headerButtonVariant,
        headerDecreaseMonthIcon,
        headerIconSize,
        headerIncreaseMonthIcon,
        withMonthSelector,
    ]);
    return (jsx(DatePicker, Object.assign({ selected: dateJS(date), calendarClassName: "m-date-picker", onChange: (value) => {
            onEventChangeDate(value);
        }, renderCustomHeader: (headerProps) => jsx(DatePickerHeader, Object.assign({}, headerProps)), customInput: jsx(InputPicker, {}), customTimeInput: jsx(TimeInputPicker, {}), selectsRange: selectsRange }, lang && { locale: lang }, props)));
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
    return (jsx(ContentLoader, Object.assign({ speed: speed, viewBox: viewBox, backgroundColor: innerBackgroundColor, foregroundColor: innerForegroundColor }, { children: children })));
}

const TabContext = createContext(undefined);
function DTabs({ children, defaultSelected, onEventChange, options, className, isVertical, }) {
    const [selected, setSelected] = useState(defaultSelected);
    const onSelect = useCallback((option) => {
        if (option.tab) {
            setSelected(option.tab);
        }
        onEventChange(option);
    }, [onEventChange]);
    useEffect(() => {
        setSelected(defaultSelected);
    }, [defaultSelected]);
    const isSelected = useCallback((tab) => (selected === tab), [selected]);
    const value = useMemo(() => ({
        isSelected,
    }), [isSelected]);
    return (jsx(TabContext.Provider, Object.assign({ value: value }, { children: jsxs("div", Object.assign({ className: classNames({
                'd-tabs': true,
                'd-tabs-vertical': isVertical,
            }) }, { children: [jsx("nav", Object.assign({ className: "nav" }, { children: options.map((option) => (jsx("button", Object.assign({ id: `${option.tab}Tab`, className: classNames('nav-link', {
                            active: option.tab === selected,
                        }, className), type: "button", role: "tab", "aria-controls": `${option.tab}Pane`, "aria-selected": option.tab === selected, disabled: option.isDisabled, onClick: () => onSelect(option) }, { children: option.label }), option.label))) })), jsx("div", Object.assign({ className: "tab-content" }, { children: children }))] })) })));
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
    return (jsx("div", Object.assign({ className: "tab-pane fade show active", id: `${tab}Pane`, role: "tabpanel", tabIndex: 0, "aria-labelledby": `${tab}Tab` }, { children: children })));
}

function DPopover({ children, renderComponent, isOpen, setEventIsOpen, }) {
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
    return (jsxs("div", Object.assign({ className: "d-popover" }, { children: [jsx("div", Object.assign({ ref: refs.setReference }, getReferenceProps(), { children: renderComponent(innerIsOpen) })), innerIsOpen && (jsx(FloatingFocusManager, Object.assign({ context: context, modal: false }, { children: jsx("div", Object.assign({ className: "d-popover-content", ref: refs.setFloating, style: floatingStyles, "aria-labelledby": headingId }, getFloatingProps(), { children: children })) })))] })));
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
    return (jsx("span", Object.assign({ className: className }, { children: valueFormatted })));
}

function DFormikInput(_a) {
    var { name, hint } = _a, props = __rest(_a, ["name", "hint"]);
    const [field, meta, helpers] = useField(name);
    return (jsx(DInput, Object.assign({}, props, { name: field.name, value: field.value, onEventChange: ({ detail }) => helpers.setValue(detail), onEventBlur: ({ detail }) => field.onBlur(detail), isInvalid: !!meta.error, hint: meta.error || hint })));
}

function DFormikInputSelect(_a) {
    var { name, labelExtractor = (item) => item === null || item === void 0 ? void 0 : item.label, valueExtractor = (item) => item === null || item === void 0 ? void 0 : item.value } = _a, props = __rest(_a, ["name", "labelExtractor", "valueExtractor"]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [field, , helpers] = useField(name);
    return (jsx(DInputSelect, Object.assign({}, props, { name: field.name, selectedOption: field.value, labelExtractor: labelExtractor, valueExtractor: valueExtractor, onEventChange: ({ detail }) => helpers.setValue(detail), onEventBlur: ({ detail }) => field.onBlur(detail) })));
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

function DCollapse({ id, className, Component, hasSeparator = false, defaultCollapsed = false, onEventChange, children, }) {
    const [toggle, setToggle] = useState(defaultCollapsed);
    const onChangeCollapse = () => setToggle((prev) => !prev);
    useEffect(() => {
        if (onEventChange) {
            onEventChange(toggle);
        }
    }, [toggle, onEventChange]);
    useEffect(() => {
        setToggle(defaultCollapsed);
    }, [defaultCollapsed]);
    return (jsxs("div", Object.assign({ id: id, className: classNames('collapse-container', className) }, { children: [jsxs("button", Object.assign({ className: "collapse-button", type: "button", onClick: onChangeCollapse }, { children: [jsx("div", Object.assign({ className: "flex-grow-1" }, { children: Component })), jsx(DIcon, { color: `var(--${PREFIX_BS}gray)`, size: `var(--${PREFIX_BS}ref-fs-small)`, icon: toggle ? 'chevron-up' : 'chevron-down' })] })), toggle && (jsx("div", Object.assign({ className: classNames({
                    'collapse-body': true,
                }), style: {
                    [`--${PREFIX_BS}collapse-separator-display`]: hasSeparator ? 'block' : 'none',
                } }, { children: children })))] })));
}

function DInputCurrency(_a) {
    var { onEventChange, onEventBlur, onEventFocus } = _a, otherProps = __rest(_a, ["onEventChange", "onEventBlur", "onEventFocus"]);
    const { currency } = useLiquidContext();
    return (jsx(DInputCurrencyBase, Object.assign({ currencyOptions: currency, onEventChange: ({ detail }) => onEventChange(detail) }, onEventBlur && {
        onEventBlur: ({ detail }) => onEventBlur(detail),
    }, onEventFocus && {
        onEventFocus: ({ detail }) => onEventFocus(detail),
    }, otherProps)));
}

function DBoxFile(_a) {
    var { icon = 'cloud-upload', iconFamilyClass, iconFamilyPrefix, isDisabled = false, children } = _a, dropzoneOptions = __rest(_a, ["icon", "iconFamilyClass", "iconFamilyPrefix", "isDisabled", "children"]);
    const { acceptedFiles, getRootProps, getInputProps, } = useDropzone(Object.assign({ disabled: isDisabled }, dropzoneOptions));
    return (jsxs("section", Object.assign({ className: classNames('d-box-file', {
            'd-box-file-selected': !!acceptedFiles.length,
        }) }, { children: [jsxs("div", Object.assign({}, getRootProps({
                className: classNames('d-box-file-dropzone', {
                    disabled: isDisabled,
                }),
            }), { children: [jsx("input", Object.assign({}, getInputProps())), jsx(DIcon, { icon: icon, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix }), jsx("div", Object.assign({ className: "d-box-content" }, { children: children }))] })), !!acceptedFiles.length && (jsx("aside", Object.assign({ className: "d-box-files" }, { children: acceptedFiles.map((file) => (jsx("div", Object.assign({ className: "d-box-files-text" }, { children: `${file.name} - ${file.size} bytes` }), file.name))) })))] })));
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

function DList({ children, className, isFlush = false, isNumbered = false, isHorizontal = false, horizontalBreakpoint, }) {
    if (isFlush && isHorizontal) {
        throw new Error("Horizontal and Flush props don't work together");
    }
    return (jsx("div", Object.assign({ className: classNames('list-group', {
            'list-group-flush': isFlush && !isHorizontal,
            'list-group-numbered': isNumbered,
            'list-group-horizontal': isHorizontal && !horizontalBreakpoint,
        }, (isHorizontal && horizontalBreakpoint) && `list-group-horizontal-${horizontalBreakpoint}`, className) }, { children: children })));
}

function DListItem({ children, className, isActive = false, isDisabled = false, theme, onEventClick, }) {
    const Tag = useMemo(() => (onEventClick ? 'button' : 'div'), [onEventClick]);
    return (jsx(Tag, Object.assign({}, Tag === 'button' && {
        onClick: onEventClick,
        type: 'button',
    }, { className: classNames('list-group-item list-group-item-action', theme ? `list-group-item-${theme}` : undefined, className, {
            active: isActive,
            disabled: isDisabled,
        }) }, isActive && { 'aria-current': true }, { children: children })));
}

function useToast() {
    const toast$1 = useCallback((message, { position = 'top-right', type = 'info', showClose = true, autoClose = false, } = {}) => {
        toast(({ closeToast }) => (jsx(DAlert, Object.assign({ type: type, showClose: showClose, onEventClose: closeToast }, { children: message }))), {
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
    return (jsx(DListItem, Object.assign({}, props, { children: jsxs("div", Object.assign({ className: classNames('d-flex justify-content-between align-items-center p-3 gap-3', classNameMovement) }, { children: [jsxs("div", Object.assign({ className: "d-flex flex-column gap-1" }, { children: [jsx("span", Object.assign({ className: "fs-6" }, { children: description })), jsx("span", Object.assign({ className: "small text-gray-700" }, { children: date }))] })), jsx("span", Object.assign({ className: classNames('fs-6', value.theme) }, { children: value.valueFormatted }))] })) })));
}

function DStepper({ options, currentStep, successIcon = 'check', isVertical = false, }) {
    return (jsx("div", Object.assign({ className: classNames({
            'd-stepper': true,
            'is-vertical': isVertical,
        }) }, { children: options.map(({ label, value }) => (jsxs("div", Object.assign({ className: "d-step" }, { children: [jsx("div", Object.assign({ className: "d-step-value" }, { children: jsx("div", Object.assign({ className: classNames({
                            'd-step-icon-container': true,
                            'd-step-check': value < currentStep,
                            'd-step-current': value === currentStep,
                        }) }, { children: value < currentStep
                            ? (jsx(DIcon, { icon: successIcon, innerClass: "d-step-icon" }))
                            : value })) })), jsx("div", Object.assign({ className: "d-step-label" }, { children: label }))] }), label))) })));
}

function DFormikInputCurrency(_a) {
    var { name, hint } = _a, props = __rest(_a, ["name", "hint"]);
    const [field, meta, helpers] = useField(name);
    return (jsx(DInputCurrency, Object.assign({}, props, { name: field.name, value: field.value, onEventChange: (value) => helpers.setValue(value), onEventBlur: (value) => field.onBlur(value), isInvalid: !!meta.error, hint: (meta === null || meta === void 0 ? void 0 : meta.error) || hint })));
}

function DCard({ className, style, children, }) {
    return (jsx("div", Object.assign({ style: style, className: classNames('card', className) }, { children: children })));
}

function DCardBody({ className, children, }) {
    return (jsx("div", Object.assign({ className: classNames('card-body', className) }, { children: children })));
}

function DCardAccount({ className, icon, theme, name, number, balance, balanceText, onEventClick, actionText, }) {
    return (jsx(DCard, Object.assign({ className: classNames('d-card-account', className) }, { children: jsxs(DCardBody, { children: [jsxs("div", Object.assign({ className: "d-flex gap-3 align-items-center" }, { children: [jsx(DIcon, { icon: icon, hasCircle: true, theme: theme, size: "1.5rem" }), jsxs("div", Object.assign({ className: "d-block flex-grow-1" }, { children: [jsx("p", Object.assign({ className: "text-gray-700" }, { children: name })), jsx("small", Object.assign({ className: "text-gray-500" }, { children: number }))] }))] })), jsxs("div", Object.assign({ className: "d-block" }, { children: [jsx("p", Object.assign({ className: "fw-bold fs-6 text-body" }, { children: balance })), jsx("small", Object.assign({ className: "text-gray-700" }, { children: balanceText }))] })), jsx("div", Object.assign({ className: "d-flex justify-content-end" }, { children: jsx(DButton, { text: actionText, variant: "link", size: "sm", theme: "secondary", iconEnd: "chevron-right", onEventClick: onEventClick }) }))] }) })));
}

function DCardHeader({ className, children, }) {
    return (jsx("div", Object.assign({ className: classNames('card-header', className) }, { children: children })));
}

function DCardFooter({ className, children, }) {
    return (jsx("div", Object.assign({ className: classNames('card-footer', className) }, { children: children })));
}

function DCollapseIconText({ children, icon, iconSize = '1.5rem', iconTheme = 'primary', title, iconFamilyClass, iconFamilyPrefix, }) {
    return (jsx(DCollapse, Object.assign({ defaultCollapsed: true, className: "d-collapse-icon-text", Component: (jsxs("div", Object.assign({ className: "d-collapse-icon-text-header" }, { children: [jsx(DIcon, { icon: icon, size: iconSize, theme: iconTheme, familyClass: iconFamilyClass, familyPrefix: iconFamilyPrefix, hasCircle: true }), jsx("span", Object.assign({ className: "d-collapse-icon-text-title" }, { children: title }))] }))) }, { children: children })));
}

function DPaginator(_a) {
    var { className, nextLabel, previousLabel, showArrows = true, page, onEventPageChange } = _a, props = __rest(_a, ["className", "nextLabel", "previousLabel", "showArrows", "page", "onEventPageChange"]);
    return (jsx(ResponsivePagination, Object.assign({ extraClassName: classNames('pagination', className), nextClassName: classNames('arrow arrow-next', !nextLabel && 'no-label'), nextLabel: nextLabel, previousClassName: classNames('arrow arrow-prev', !previousLabel && 'no-label'), previousLabel: previousLabel, renderNav: showArrows, current: page, onPageChange: onEventPageChange }, props)));
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

export { DAlert, DBadge, DBoxFile, DButton, DCard, DCardAccount, DCardBody, DCardFooter, DCardHeader, DCarousel, DCarouselSlide, DChip, DCollapse, DCollapseIconText, DCurrencyText, DDatePicker, DFormikInput, DFormikInputCurrency, DFormikInputSelect, DIcon, DInput, DInputCheck, DInputCounter, DInputCurrency, DInputCurrencyBase, DInputPassword, DInputPin, DInputSearch, DInputSelect, DInputSwitch, DList, DListItem, DListItemMovement, DModal, DOffcanvas, DPaginator, DPermissionItem, DPopover, DProgress, DQuickActionButton, DQuickActionCheck, DQuickActionSelect, DQuickActionSwitch, DSkeleton, DStepper, DTabContent, DTabs, DToastContainer, DTooltip, LiquidContext$1 as LiquidContext, LiquidContextProvider, MPermissionGroup, MSummaryCard, ModalContext, ModalContextProvider, OffcanvasContext, OffcanvasContextProvider, configureI8n as configureI18n, useFormatCurrency, useLiquidContext, useModalContext, useOffcanvasContext, useScreenshot, useScreenshotDownload, useScreenshotWebShare, useTabContext, useToast };
//# sourceMappingURL=index.esm.js.map
