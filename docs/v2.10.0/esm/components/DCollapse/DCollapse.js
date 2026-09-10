import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useState, useEffect, useMemo } from 'react';
import DIcon from '../DIcon/DIcon.js';
import { useDContext } from '../../contexts/DContext.js';

function DCollapse({ id, className, style, Component, defaultCollapsed = true, onChange, children, iconOpen: iconOpenProp, iconClose: iconCloseProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, dataAttributes, }) {
    const [collapsed, setCollapsed] = useState(defaultCollapsed);
    const onChangeCollapse = () => {
        setCollapsed((prev) => {
            const next = !prev;
            if (onChange) {
                onChange(next);
            }
            return next;
        });
    };
    useEffect(() => {
        setCollapsed(defaultCollapsed);
    }, [defaultCollapsed]);
    const { icon: { familyClass, familyPrefix, materialStyle, }, iconMap: { chevronDown, chevronUp, }, } = useDContext();
    const iconOpen = useMemo(() => iconOpenProp || chevronDown, [chevronDown, iconOpenProp]);
    const iconClose = useMemo(() => iconCloseProp || chevronUp, [chevronUp, iconCloseProp]);
    return (jsxs("div", Object.assign({ id: id, className: classNames('collapse-container', className), style: style }, dataAttributes, { children: [jsxs("button", { className: "collapse-button", type: "button", onClick: onChangeCollapse, children: [jsx("div", { className: "flex-grow-1", children: Component }), jsx(DIcon, { className: "collapse-icon", color: "primary", size: "1.25rem", icon: collapsed ? iconOpen : iconClose, familyClass: iconFamilyClass !== null && iconFamilyClass !== void 0 ? iconFamilyClass : familyClass, familyPrefix: iconFamilyPrefix !== null && iconFamilyPrefix !== void 0 ? iconFamilyPrefix : familyPrefix, materialStyle: iconMaterialStyle !== null && iconMaterialStyle !== void 0 ? iconMaterialStyle : materialStyle })] }), jsx("div", { className: classNames('collapse-body-wrapper', {
                    show: !collapsed,
                }), children: jsx("div", { className: "collapse-body", children: children }) })] })));
}

export { DCollapse as default };
//# sourceMappingURL=DCollapse.js.map
