import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import DToastHeader from './components/DToastHeader.js';
import DToastBody from './components/DToastBody.js';

const LIVE_REGION_ATTRIBUTES = {
    alert: { role: 'alert', 'aria-live': 'assertive', 'aria-atomic': 'true' },
    status: { role: 'status', 'aria-live': 'polite', 'aria-atomic': 'true' },
    none: {},
};
function DToast({ children, role = 'alert', className, style, dataAttributes, }) {
    return (jsx("div", Object.assign({ className: classNames('toast', className) }, LIVE_REGION_ATTRIBUTES[role], { style: style }, dataAttributes, { children: children })));
}
var DToast$1 = Object.assign(DToast, {
    Header: DToastHeader,
    Body: DToastBody,
});

export { DToast$1 as default };
//# sourceMappingURL=DToast.js.map
