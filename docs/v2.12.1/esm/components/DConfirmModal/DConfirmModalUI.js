import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect, useCallback } from 'react';
import DModal from '../DModal/DModal.js';
import DButton from '../DButton/DButton.js';
import ForwardedDInput from '../DInput/DInput.js';

function DConfirmModalUI({ entry }) {
    const { title = 'Are you sure you want to proceed?', message = 'Please confirm if you want to continue with this action.', confirmLabel = 'Confirm', cancelLabel = 'Cancel', confirmColor = 'primary', critical, onConfirmAction, onCloseAction, } = entry;
    const [confirmationCode, setConfirmationCode] = useState('');
    const [internalLoading, setInternalLoading] = useState(false);
    const isMountedRef = useRef(true);
    useEffect(() => {
        const cleanup = () => {
            isMountedRef.current = false;
        };
        return cleanup;
    }, []);
    const handleClose = useCallback(() => {
        onCloseAction();
    }, [onCloseAction]);
    const isConfirmDisabled = Boolean(internalLoading
        || (critical && confirmationCode !== critical.code));
    const handleConfirmClick = useCallback(() => {
        setInternalLoading(true);
        onConfirmAction()
            .catch(() => undefined)
            .finally(() => {
            // Only update state if the component is still mounted.
            // onConfirmAction() removes the entry on success, which unmounts this component.
            if (isMountedRef.current) {
                setInternalLoading(false);
            }
        });
    }, [onConfirmAction]);
    return (jsxs(DModal, { name: entry.id, size: "lg", className: `confirm-modal ${critical ? 'critical-modal' : ''}`, children: [jsx(DModal.Header, { onClose: handleClose, showCloseButton: true, children: jsx("h5", { className: "fw-bold", children: title }) }), jsxs(DModal.Body, { className: "d-confirm-modal-body", children: [jsx("p", { className: "d-confirm-modal-message", children: message }), critical && (jsx(ForwardedDInput, { type: "text", label: critical.codeLabel || 'Confirmation code', placeholder: critical.inputPlaceholder, value: confirmationCode, onChange: (value) => setConfirmationCode(value), className: "d-confirm-modal-field", autoFocus: true }))] }), jsxs(DModal.Footer, { children: [jsx(DButton, { text: cancelLabel, variant: "outline", color: "secondary", onClick: handleClose, disabled: internalLoading }), jsx(DButton, { text: confirmLabel, color: confirmColor, onClick: handleConfirmClick, disabled: isConfirmDisabled, loading: internalLoading })] })] }));
}

export { DConfirmModalUI as default };
//# sourceMappingURL=DConfirmModalUI.js.map
