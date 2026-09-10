import { jsx, jsxs } from 'react/jsx-runtime';
import DAlert from '../../DAlert/DAlert.js';
import DButton from '../../DButton/DButton.js';

function DefaultErrorBoundary({ resetErrorBoundary }) {
    return (jsx(DAlert, { color: "danger", showClose: false, children: jsxs("div", { className: "d-error-boundary-content", children: [jsx("span", { children: "An unexpected error occurred." }), jsx(DButton, { color: "secondary", variant: "outline", size: "sm", onClick: resetErrorBoundary, children: "Retry" })] }) }));
}

export { DefaultErrorBoundary as default };
//# sourceMappingURL=DefaultErrorBoundary.js.map
