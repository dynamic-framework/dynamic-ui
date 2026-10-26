import { jsx } from 'react/jsx-runtime';
import { useRef, useEffect, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { PREFIX_BS } from '../config.js';
import DPortalStack from '../../contexts/portal/DPortalStack.js';
import { registerPortalStack } from '../../contexts/portal/portalStackRegistry.js';
import getKeyboardFocusableElements from '../../utils/getKeyboardFocusableElements.js';
import DModalHeader from './components/DModalHeader.js';
import DModalLabelContext from './components/DModalLabelContext.js';
import DModalBody from './components/DModalBody.js';
import DModalFooter from './components/DModalFooter.js';

const defaultTransition = {
    ease: 'easeInOut',
    duration: 0.3,
};
// Los portales que se renderizan con DContextProvider solo animan su salida
// cuando este módulo forma parte del bundle.
registerPortalStack(DPortalStack);
function DModal({ name, className, style, staticBackdrop, scrollable, centered, fullScreen, fullScreenFrom, size, transition, children, dataAttributes, ariaLabel, }) {
    const labelId = `${name}Label`;
    // Foco inicial: el contenedor recibe el foco al montar, salvo que ya esté
    // dentro (un hijo con autoFocus).
    const dialogRef = useRef(null);
    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog && !dialog.contains(document.activeElement)) {
            dialog.focus();
        }
    }, []);
    // Con el foco en el contenedor, Shift+Tab iría a lo que hay antes del
    // diálogo: el bucle de Tab de DPortalContext solo actúa desde el primer y el
    // último enfocable. Tab desde el contenedor ya va al primero. Sin
    // enfocables, ninguna de las dos teclas saca el foco del contenedor.
    const handleKeyDown = useCallback((event) => {
        const dialog = dialogRef.current;
        if (event.key !== 'Tab' || !dialog || document.activeElement !== dialog) {
            return;
        }
        const focusableElements = getKeyboardFocusableElements(dialog);
        if (focusableElements.length === 0) {
            event.preventDefault();
            return;
        }
        if (event.shiftKey) {
            event.preventDefault();
            focusableElements[focusableElements.length - 1].focus();
        }
    }, []);
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
    return (jsx(motion.div, Object.assign({ ref: dialogRef, className: classNames('modal portal show', className), id: name, tabIndex: -1, onKeyDown: handleKeyDown, role: "dialog", "aria-modal": "true", "aria-label": ariaLabel, "aria-labelledby": ariaLabel ? undefined : labelId, "aria-hidden": "false", style: style, initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 }, transition: Object.assign(Object.assign({}, (transition !== null && transition !== void 0 ? transition : defaultTransition)), { delay: 0.15 }) }, staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), dataAttributes, { children: jsx("div", { className: classNames(generateModalDialogClasses), children: jsx("div", { className: "modal-content", children: jsx(DModalLabelContext.Provider, { value: labelId, children: children }) }) }) })));
}
var DModal$1 = Object.assign(DModal, {
    Header: DModalHeader,
    Body: DModalBody,
    Footer: DModalFooter,
});

export { DModal$1 as default };
//# sourceMappingURL=DModal.js.map
