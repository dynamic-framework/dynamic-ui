import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

function DToastHeader({ children, className, style }) {
    return (jsx("div", { className: classNames('toast-header', className), style: style, children: children }));
}

export { DToastHeader as default };
//# sourceMappingURL=DToastHeader.js.map
