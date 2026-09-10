import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

function DModalBody({ children, className, style, }) {
    return (jsx("div", { className: classNames('modal-body', className), style: style, children: children }));
}

export { DModalBody as default };
//# sourceMappingURL=DModalBody.js.map
