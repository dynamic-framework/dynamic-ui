import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useMemo } from 'react';
import DIcon from '../DIcon/DIcon.js';
import { useDContext } from '../../contexts/DContext.js';

function DAlert({ color = 'success', icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle, showClose, onClose, children, id, className, style, dataAttributes, }) {
    const { icon: { materialStyle, familyClass, familyPrefix, }, iconMap: { alert, xLg, }, } = useDContext();
    const icon = useMemo(() => iconProp || alert[color], [alert, iconProp, color]);
    const iconClose = useMemo(() => (iconCloseProp || xLg), [iconCloseProp, xLg]);
    const generateClasses = useMemo(() => (Object.assign({ alert: true, [`alert-${color}`]: true, 'fade show': !!showClose }, className && { [className]: true })), [color, showClose, className]);
    return (jsxs("div", Object.assign({ className: classNames(generateClasses), style: style, role: "alert", id: id }, dataAttributes, { children: [icon && (jsx(DIcon, { className: "alert-icon", icon: icon, familyClass: iconFamilyClass !== null && iconFamilyClass !== void 0 ? iconFamilyClass : familyClass, familyPrefix: iconFamilyPrefix !== null && iconFamilyPrefix !== void 0 ? iconFamilyPrefix : familyPrefix, materialStyle: iconMaterialStyle !== null && iconMaterialStyle !== void 0 ? iconMaterialStyle : materialStyle })), jsx("div", { className: "alert-text", children: children }), showClose && (jsx("button", { type: "button", className: "d-close", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: iconClose, familyClass: iconCloseFamilyClass !== null && iconCloseFamilyClass !== void 0 ? iconCloseFamilyClass : familyClass, familyPrefix: iconCloseFamilyPrefix !== null && iconCloseFamilyPrefix !== void 0 ? iconCloseFamilyPrefix : familyPrefix, materialStyle: iconCloseMaterialStyle !== null && iconCloseMaterialStyle !== void 0 ? iconCloseMaterialStyle : materialStyle }) }))] })));
}

export { DAlert as default };
//# sourceMappingURL=DAlert.js.map
