import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

function DCardFooter({ className, style, children, }) {
    return (jsx("div", { className: classNames('card-footer', className), style: style, children: children }));
}

export { DCardFooter as default };
//# sourceMappingURL=DCardFooter.js.map
