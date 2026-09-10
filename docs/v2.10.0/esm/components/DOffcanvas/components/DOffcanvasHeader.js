import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import classNames from 'classnames';
import DIcon from '../../DIcon/DIcon.js';
import { useDContext } from '../../../contexts/DContext.js';

function DOffcanvasHeader({ showCloseButton, onClose, children, className, style, iconFamilyClass, iconFamilyPrefix, icon: iconProp, iconMaterialStyle, materialStyle: materialStyleProp, }) {
    var _a;
    const { icon: { familyClass, familyPrefix, materialStyle, }, iconMap: { xLg, }, } = useDContext();
    const icon = useMemo(() => iconProp || xLg, [iconProp, xLg]);
    return (jsxs(Fragment, { children: [jsxs("div", { className: classNames('offcanvas-header', className), style: style, children: [jsx("div", { children: children }), showCloseButton && (jsx("button", { type: "button", className: "d-close", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass !== null && iconFamilyClass !== void 0 ? iconFamilyClass : familyClass, familyPrefix: iconFamilyPrefix !== null && iconFamilyPrefix !== void 0 ? iconFamilyPrefix : familyPrefix, materialStyle: (_a = iconMaterialStyle !== null && iconMaterialStyle !== void 0 ? iconMaterialStyle : materialStyleProp) !== null && _a !== void 0 ? _a : materialStyle }) }))] }), jsx("div", { className: "d-offcanvas-separator" })] }));
}

export { DOffcanvasHeader as default };
//# sourceMappingURL=DOffcanvasHeader.js.map
