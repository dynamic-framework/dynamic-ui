import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

function DCardHeader({ className, style, children, }) {
    return (jsx("div", { className: classNames('card-header', className), style: style, children: children }));
}

export { DCardHeader as default };
//# sourceMappingURL=DCardHeader.js.map
