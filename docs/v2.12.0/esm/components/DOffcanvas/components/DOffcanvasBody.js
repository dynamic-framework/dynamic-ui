import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

function DOffcanvasBody({ children, className, style, }) {
    return (jsx("div", { className: classNames('offcanvas-body', className), style: style, children: children }));
}

export { DOffcanvasBody as default };
//# sourceMappingURL=DOffcanvasBody.js.map
