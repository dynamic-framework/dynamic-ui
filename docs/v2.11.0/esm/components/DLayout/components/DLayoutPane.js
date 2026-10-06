import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

function DLayoutPane({ className, style, children, cols, colsXs, colsSm, colsMd, colsLg, colsXl, colsXxl, dataAttributes, }) {
    const colsClass = cols ? `g-col-${cols}` : undefined;
    const colsXsClass = colsXs ? `g-col-${colsXs}` : undefined;
    const colsSmClass = colsSm ? `g-col-sm-${colsSm}` : undefined;
    const colsMdClass = colsMd ? `g-col-md-${colsMd}` : undefined;
    const colsLgClass = colsLg ? `g-col-lg-${colsLg}` : undefined;
    const colsXlClass = colsXl ? `g-col-xl-${colsXl}` : undefined;
    const colsXxlClass = colsXxl ? `g-col-xxl-${colsXxl}` : undefined;
    return (jsx("div", Object.assign({ className: classNames(colsClass, colsXsClass, colsSmClass, colsMdClass, colsLgClass, colsXlClass, colsXxlClass, className), style: style }, dataAttributes, { children: children })));
}

export { DLayoutPane as default };
//# sourceMappingURL=DLayoutPane.js.map
