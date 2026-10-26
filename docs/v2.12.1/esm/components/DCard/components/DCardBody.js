import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

function DCardBody({ className, style, children, }) {
    return (jsx("div", { className: classNames('card-body', className), style: style, children: children }));
}

export { DCardBody as default };
//# sourceMappingURL=DCardBody.js.map
