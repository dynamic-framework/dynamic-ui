import { jsxs, jsx } from 'react/jsx-runtime';
import DButton from '../../DButton/DButton.js';
import DIcon from '../../DIcon/DIcon.js';

function EmptyState({ message, icon = 'FileText', actionText, onAction, }) {
    return (jsxs("div", { className: "d-empty-state", children: [jsx(DIcon, { icon: icon, size: "3rem", className: "d-empty-state-icon" }), jsx("p", { className: "d-empty-state-message", children: message !== null && message !== void 0 ? message : 'No data available.' }), actionText && onAction && (jsx(DButton, { onClick: onAction, text: actionText, variant: "outline" }))] }));
}

export { EmptyState };
//# sourceMappingURL=EmptyState.js.map
