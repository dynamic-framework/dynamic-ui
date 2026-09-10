import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

function DBox({ className, style, children, dataAttributes, }) {
    return (jsx("div", Object.assign({ style: style, className: classNames('d-box', className) }, dataAttributes, { children: children })));
}

export { DBox as default };
//# sourceMappingURL=DBox.js.map
