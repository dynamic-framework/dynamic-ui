import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useConfirmModalStore } from './confirmModalStore.js';
import DConfirmModalUI from './DConfirmModalUI.js';

/**
 * Container that renders confirm modals into the specified portal node.
 *
 * Must be explicitly mounted by the user (typically as a sibling of app content
 * within `DContextProvider`). The container floats above the portal stack and
 * intercepts Escape key events to close the top confirm modal without affecting
 * underlying modals or overlays.
 *
 * @example
 * <DContextProvider>
 *   <App />
 *   <DConfirmModalContainer nodeId="d-portal" />
 * </DContextProvider>
 */
function DConfirmModalContainer({ nodeId }) {
    const store = useConfirmModalStore();
    const [entries, setEntries] = useState([]);
    useEffect(() => {
        const unsubscribe = store.subscribe((next) => {
            setEntries(next);
        });
        return unsubscribe;
    }, [store]);
    // Capture Escape keydown to close the top confirm modal without affecting
    // the underlying portal stack (which also handles Escape).
    useEffect(() => {
        if (entries.length === 0) {
            return () => { };
        }
        const handleEscapeCapture = (event) => {
            if (event.key === 'Escape') {
                // Close the top (last) confirm modal
                entries[entries.length - 1].onCloseAction();
                // Prevent the event from reaching other handlers (e.g., DPortalContextProvider)
                event.stopPropagation();
                event.preventDefault();
            }
        };
        document.addEventListener('keydown', handleEscapeCapture, true);
        return () => {
            document.removeEventListener('keydown', handleEscapeCapture, true);
        };
    }, [entries]);
    const portalNode = document.getElementById(nodeId);
    if (!portalNode || entries.length === 0) {
        return null;
    }
    return createPortal(jsx(AnimatePresence, { children: entries.map((entry) => (jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: { delay: 0.3 } }, transition: { duration: 0.15, ease: 'linear' }, children: [jsx("div", { className: "backdrop backdrop-confirm-modal", onClick: entry.onCloseAction, role: "presentation" }), jsx(DConfirmModalUI, { entry: entry })] }, entry.id))) }), portalNode);
}

export { DConfirmModalContainer as default };
//# sourceMappingURL=DConfirmModalContainer.js.map
