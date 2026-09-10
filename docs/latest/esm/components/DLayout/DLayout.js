import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import DLayoutPane from './components/DLayoutPane.js';

function DLayout({ className, style, children, gap, columns, gapSm, gapMd, gapLg, gapXl, gapXxl, dataAttributes, }) {
    const gapClasses = classNames({
        [`gap-${gap}`]: gap !== undefined,
        [`gap-sm-${gapSm}`]: gapSm !== undefined,
        [`gap-md-${gapMd}`]: gapMd !== undefined,
        [`gap-lg-${gapLg}`]: gapLg !== undefined,
        [`gap-xl-${gapXl}`]: gapXl !== undefined,
        [`gap-xxl-${gapXxl}`]: gapXxl !== undefined,
    });
    const styleWithColumns = Object.assign(Object.assign({}, style), { '--bs-columns': columns });
    return (jsx("div", Object.assign({ style: styleWithColumns, className: classNames('grid', gapClasses, className) }, dataAttributes, { children: children })));
}
var DLayout$1 = Object.assign(DLayout, {
    Pane: DLayoutPane,
});

export { DLayout$1 as default };
//# sourceMappingURL=DLayout.js.map
