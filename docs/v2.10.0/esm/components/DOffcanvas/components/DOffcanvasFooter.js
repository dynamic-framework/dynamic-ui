import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import classNames from 'classnames';

function DOffcanvasFooter({ actionPlacement, children, className, style, }) {
    const generateClasses = useMemo(() => ({
        'd-offcanvas-footer': true,
        [`d-offcanvas-action-${actionPlacement}`]: !!actionPlacement,
    }), [actionPlacement]);
    return (jsxs(Fragment, { children: [jsx("div", { className: "d-offcanvas-separator" }), jsx("div", { className: classNames(generateClasses, className), style: style, children: children })] }));
}

export { DOffcanvasFooter as default };
//# sourceMappingURL=DOffcanvasFooter.js.map
