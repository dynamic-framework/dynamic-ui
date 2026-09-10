import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { PREFIX_BS } from '../config.js';
import DModalHeader from './components/DModalHeader.js';
import DModalBody from './components/DModalBody.js';
import DModalFooter from './components/DModalFooter.js';

const defaultTransition = {
    ease: 'easeInOut',
    duration: 0.3,
};
function DModal({ name, className, style, staticBackdrop, scrollable, centered, fullScreen, fullScreenFrom, size, transition, children, dataAttributes, }) {
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
    return (jsx(motion.div, Object.assign({ className: classNames('modal portal show', className), id: name, tabIndex: -1, "aria-labelledby": `${name}Label`, "aria-hidden": "false", style: style, initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 }, transition: Object.assign(Object.assign({}, (transition !== null && transition !== void 0 ? transition : defaultTransition)), { delay: 0.15 }) }, staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
    }), dataAttributes, { children: jsx("div", { className: classNames(generateModalDialogClasses), children: jsx("div", { className: "modal-content", children: children }) }) })));
}
var DModal$1 = Object.assign(DModal, {
    Header: DModalHeader,
    Body: DModalBody,
    Footer: DModalFooter,
});

export { DModal$1 as default };
//# sourceMappingURL=DModal.js.map
