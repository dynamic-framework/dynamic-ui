import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

function DToastBody({ children, className, style }) {
    return (jsx("div", { className: classNames('toast-body', className), style: style, children: children }));
}

export { DToastBody as default };
//# sourceMappingURL=DToastBody.js.map
