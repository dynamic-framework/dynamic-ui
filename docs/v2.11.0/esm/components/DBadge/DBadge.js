import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useMemo } from 'react';
import DIcon from '../DIcon/DIcon.js';
import { useResponsiveProp } from '../../hooks/useResponsiveProp.js';
import { useDContext } from '../../contexts/DContext.js';

function DBadge(props) {
    const { text, soft = false, color = 'primary', id, rounded, className, size, style, iconStart, iconEnd, iconMaterialStyle, iconFamilyClass, iconFamilyPrefix, dataAttributes, } = props;
    const { icon: { familyClass, familyPrefix, materialStyle, }, } = useDContext();
    // Responsive size resolution using useResponsiveProp
    const { responsivePropValue } = useResponsiveProp(true);
    const resolvedSize = useMemo(() => {
        if (!size)
            return undefined;
        if (typeof size === 'string')
            return size;
        return responsivePropValue(size);
    }, [responsivePropValue, size]);
    const generateClasses = useMemo(() => ({
        badge: true,
        [`badge-${color}`]: !!color && !soft,
        [`badge-soft-${color}`]: !!color && soft,
        'rounded-pill': !!rounded,
        [`badge-${resolvedSize}`]: !!resolvedSize,
    }), [rounded, soft, color, resolvedSize]);
    return (jsxs("span", Object.assign({ className: classNames(generateClasses, className), style: style }, id && { id }, dataAttributes, { children: [iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconFamilyClass !== null && iconFamilyClass !== void 0 ? iconFamilyClass : familyClass, familyPrefix: iconFamilyPrefix !== null && iconFamilyPrefix !== void 0 ? iconFamilyPrefix : familyPrefix, materialStyle: iconMaterialStyle !== null && iconMaterialStyle !== void 0 ? iconMaterialStyle : materialStyle })), jsx("span", { children: text }), iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconFamilyClass !== null && iconFamilyClass !== void 0 ? iconFamilyClass : familyClass, familyPrefix: iconFamilyPrefix !== null && iconFamilyPrefix !== void 0 ? iconFamilyPrefix : familyPrefix, materialStyle: iconMaterialStyle !== null && iconMaterialStyle !== void 0 ? iconMaterialStyle : materialStyle }))] })));
}

export { DBadge as default };
//# sourceMappingURL=DBadge.js.map
