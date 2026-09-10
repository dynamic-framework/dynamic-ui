import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import DToastHeader from './components/DToastHeader.js';
import DToastBody from './components/DToastBody.js';

function DToast({ children, className, style, dataAttributes, }) {
    return (jsx("div", Object.assign({ className: classNames('toast', className), role: "alert", "aria-live": "assertive", "aria-atomic": "true", style: style }, dataAttributes, { children: children })));
}
var DToast$1 = Object.assign(DToast, {
    Header: DToastHeader,
    Body: DToastBody,
});

export { DToast$1 as default };
//# sourceMappingURL=DToast.js.map
