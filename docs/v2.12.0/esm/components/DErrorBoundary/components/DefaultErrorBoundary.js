import { jsx, jsxs } from 'react/jsx-runtime';
import DAlert from '../../DAlert/DAlert.js';
import DButton from '../../DButton/DButton.js';

function DefaultErrorBoundary({ resetErrorBoundary, message = 'An unexpected error occurred.', retryMessage = 'Retry', }) {
    return (jsx(DAlert, { color: "danger", showClose: false, children: jsxs("div", { className: "d-error-boundary-content", children: [jsx("span", { children: message }), jsx(DButton, { color: "secondary", variant: "outline", size: "sm", onClick: resetErrorBoundary, children: retryMessage })] }) }));
}

export { DefaultErrorBoundary as default };
//# sourceMappingURL=DefaultErrorBoundary.js.map
