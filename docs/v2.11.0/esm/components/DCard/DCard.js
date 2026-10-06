import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import DCardHeader from './components/DCardHeader.js';
import DCardBody from './components/DCardBody.js';
import DCardFooter from './components/DCardFooter.js';

function DCard({ className, style, children, dataAttributes, }) {
    return (jsx("div", Object.assign({ style: style, className: classNames('card', className) }, dataAttributes, { children: children })));
}
var DCard$1 = Object.assign(DCard, {
    Header: DCardHeader,
    Body: DCardBody,
    Footer: DCardFooter,
});

export { DCard$1 as default };
//# sourceMappingURL=DCard.js.map
