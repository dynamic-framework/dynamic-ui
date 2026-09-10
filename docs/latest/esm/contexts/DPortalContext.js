import { jsxs, jsx } from 'react/jsx-runtime';
import { createContext, useCallback, useMemo, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import useDisableBodyScrollEffect from '../hooks/useDisableBodyScrollEffect.js';
import usePortal from '../hooks/usePortal.js';
import useStackState from '../hooks/useStackState.js';
import getKeyboardFocusableElements from '../utils/getKeyboardFocusableElements.js';

const DPortalContext = createContext(undefined);
function DPortalContextProvider({ portalName, children, availablePortals, }) {
    const { created } = usePortal(portalName);
    const [stack, { push, pop }] = useStackState([]);
    useDisableBodyScrollEffect(Boolean(stack.length));
    const openPortal = useCallback(
    // eslint-disable-next-line prefer-arrow-callback
    function openPortalImpl(name, payload) {
        var _a;
        if (!availablePortals) {
            throw new Error('openPortal was called but DContextProvider has no availablePortals configured. '
                + 'Pass an availablePortals map to DContextProvider.');
        }
        const Component = availablePortals[name];
        if (!Component) {
            throw new Error(`No component registered for portal "${String(name)}". `
                + `Ensure "${String(name)}" has an entry in the availablePortals map on DContextProvider.`);
        }
        // K is a specific member of keyof T & string so the object satisfies
        // InternalStackItem<T>, but TS can't verify generic-over-union assignability.
        push({ name, Component, payload });
        (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.blur();
    }, [availablePortals, push]);
    const closePortal = useCallback(() => {
        // pop() is safe on empty stacks, so close remains idempotent.
        pop();
    }, [pop]);
    const publicStack = useMemo(() => stack.map(({ name, payload }) => ({ name, payload })), [stack]);
    const value = useMemo(() => ({
        stack: publicStack,
        openPortal,
        closePortal,
    }), [publicStack, openPortal, closePortal]);
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
/**
 * Hook to open/close registered portals (modals, offcanvas, etc.).
 *
 * **Prerequisite**: must be called inside a `DContextProvider` configured with
 * `portalName` and `availablePortals`. `DContextProvider` mounts
 * `DPortalContextProvider` internally — consumers never use
 * `DPortalContextProvider` directly.
 *
 * @template T - Map of portal name → payload shape (e.g. `ModalPayloads`).
 *   Typing this generic gives you autocomplete on `openPortal` arguments.
 * @returns `{ openPortal, closePortal, stack }` from the nearest portal context.
 * @throws If called outside of `DContextProvider` / `DPortalContextProvider`.
 *
 * @requires DContextProvider
 *
 * @example
 * ```tsx
 * const { openPortal, closePortal } = useDPortalContext<ModalPayloads>();
 * openPortal('confirm', { message: 'Are you sure?' });
 * ```
 */
function useDPortalContext() {
    const context = useContext(DPortalContext);
    if (context === undefined) {
        throw new Error('useDPortalContext was used outside of DPortalContextProvider');
    }
    return context;
}

export { DPortalContext, DPortalContextProvider, useDPortalContext };
//# sourceMappingURL=DPortalContext.js.map
