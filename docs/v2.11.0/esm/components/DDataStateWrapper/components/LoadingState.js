import { jsx } from 'react/jsx-runtime';

function LoadingState({ ariaLabel = 'Loading...', className }) {
    return (jsx("div", { className: `d-loading-state ${className || ''}`.trim(), "aria-busy": "true", "aria-live": "polite", children: jsx("span", { className: "spinner-border", role: "status", "aria-label": ariaLabel }) }));
}

export { LoadingState };
//# sourceMappingURL=LoadingState.js.map
