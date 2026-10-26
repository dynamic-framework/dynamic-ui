import { jsx, jsxs } from 'react/jsx-runtime';
import classNames from 'classnames';
import DIcon from '../DIcon/DIcon.js';

function DTimeline({ className, style, dataAttributes, items, }) {
    return (jsx("div", Object.assign({ style: style, className: classNames('d-timeline', className) }, dataAttributes, { children: items.map((item, index) => (jsxs("div", { className: classNames('d-timeline-item', {
                [`d-timeline-item-${item.status}`]: item.status,
            }), children: [jsx("div", { className: "d-timeline-item-connector" }), jsx("div", { className: "d-timeline-item-icon", children: jsx(DIcon, { icon: item.icon || 'Check', size: "1rem" }) }), jsxs("div", { className: "d-timeline-item-content", children: [jsx("div", { className: "d-timeline-item-title", children: item.title }), item.description && jsx("div", { className: "d-timeline-item-description", children: item.description }), item.time && jsx("div", { className: "d-timeline-item-time", children: item.time }), item.children] })] }, index))) })));
}

export { DTimeline as default };
//# sourceMappingURL=DTimeline.js.map
