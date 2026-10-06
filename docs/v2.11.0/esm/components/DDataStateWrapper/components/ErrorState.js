import { jsxs, jsx } from 'react/jsx-runtime';
import DAlert from '../../DAlert/DAlert.js';
import DButton from '../../DButton/DButton.js';

function ErrorState({ message, onRetry, retryMessage = 'Retry', color = 'danger', }) {
    return (jsxs(DAlert, { color: color, className: "d-error-state", children: [jsx("div", { className: "d-error-state-content", children: jsx("p", { className: "d-error-state-message", children: message !== null && message !== void 0 ? message : 'An unexpected error occurred.' }) }), onRetry && (jsx(DButton, { onClick: onRetry, text: retryMessage, variant: "outline", iconStart: "RefreshCw" }))] }));
}

export { ErrorState };
//# sourceMappingURL=ErrorState.js.map
