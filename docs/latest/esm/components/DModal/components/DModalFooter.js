import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import classNames from 'classnames';

function DModalFooter({ className, style, actionPlacement, children, }) {
    const generateClasses = useMemo(() => ({
        'modal-footer': true,
        [`d-modal-action-${actionPlacement}`]: !!actionPlacement,
    }), [actionPlacement]);
    return (jsxs(Fragment, { children: [jsx("div", { className: "d-modal-separator" }), jsx("div", { className: classNames(generateClasses, className), style: style, children: children })] }));
}

export { DModalFooter as default };
//# sourceMappingURL=DModalFooter.js.map
