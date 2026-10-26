import { jsxs, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import classNames from 'classnames';
import DIcon from '../DIcon/DIcon.js';
import { useDContext } from '../../contexts/DContext.js';

function DChip({ color = 'primary', text, icon, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle, showClose = false, closeAriaLabel = 'close', className, style, dataAttributes, onClose, }) {
    const generateClasses = useMemo(() => ({
        'd-chip': true,
        [`d-chip-${color}`]: !!color,
    }), [color]);
    const { icon: { familyClass, familyPrefix, materialStyle, }, iconMap: { xLg, }, } = useDContext();
    const iconClose = useMemo(() => iconCloseProp || xLg, [iconCloseProp, xLg]);
    return (jsxs("span", Object.assign({ className: classNames(generateClasses, className), style: style }, dataAttributes, { children: [icon && (jsx("div", { className: "d-chip-icon-container", children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass !== null && iconFamilyClass !== void 0 ? iconFamilyClass : familyClass, familyPrefix: iconFamilyPrefix !== null && iconFamilyPrefix !== void 0 ? iconFamilyPrefix : familyPrefix, materialStyle: iconMaterialStyle !== null && iconMaterialStyle !== void 0 ? iconMaterialStyle : materialStyle }) })), jsx("span", { children: text }), showClose && (jsx("button", { type: "button", className: "d-chip-icon-container", onClick: onClose, "aria-label": closeAriaLabel, children: jsx(DIcon, { icon: iconClose, familyClass: iconCloseFamilyClass !== null && iconCloseFamilyClass !== void 0 ? iconCloseFamilyClass : familyClass, familyPrefix: iconCloseFamilyPrefix !== null && iconCloseFamilyPrefix !== void 0 ? iconCloseFamilyPrefix : familyPrefix, materialStyle: iconCloseMaterialStyle !== null && iconCloseMaterialStyle !== void 0 ? iconCloseMaterialStyle : materialStyle }) }))] })));
}

export { DChip as default };
//# sourceMappingURL=DChip.js.map
