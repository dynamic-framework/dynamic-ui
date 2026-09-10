import { jsxs, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import classNames from 'classnames';
import DIcon from '../../DIcon/DIcon.js';
import { useDContext } from '../../../contexts/DContext.js';

function DListGroupItem({ as = 'li', action: actionProp, active, disabled, href, onClick, color, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartMaterialStyle, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndMaterialStyle, children, className, style, dataAttributes, }) {
    const { icon: { familyClass, familyPrefix, materialStyle, }, } = useDContext();
    const Tag = useMemo(() => {
        if (href) {
            return 'a';
        }
        if (actionProp) {
            return 'button';
        }
        return as;
    }, [href, as, actionProp]);
    const action = useMemo(() => {
        if (Tag === 'a' || Tag === 'button') {
            return true;
        }
        return actionProp;
    }, [Tag, actionProp]);
    const generateClasses = useMemo(() => ({
        'list-group-item': true,
        'list-group-item-action': action,
        [`list-group-item-${color}`]: !!color,
        active,
        disabled,
    }), [action, active, disabled, color]);
    const ariaAttributes = useMemo(() => {
        if (Tag === 'button') {
            return Object.assign(Object.assign({}, active && { 'aria-current': true }), disabled && { disabled: true });
        }
        return Object.assign(Object.assign({}, active && { 'aria-current': true }), disabled && { 'aria-disabled': true });
    }, [Tag, active, disabled]);
    return (jsxs(Tag, Object.assign({ className: classNames(generateClasses, className), style: style }, Tag === 'a' && href && { href }, onClick && { onClick }, ariaAttributes, dataAttributes, Tag === 'button' && { type: 'button' }, { children: [iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass !== null && iconStartFamilyClass !== void 0 ? iconStartFamilyClass : familyClass, familyPrefix: iconStartFamilyPrefix !== null && iconStartFamilyPrefix !== void 0 ? iconStartFamilyPrefix : familyPrefix, materialStyle: iconStartMaterialStyle !== null && iconStartMaterialStyle !== void 0 ? iconStartMaterialStyle : materialStyle })), children, iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass !== null && iconEndFamilyClass !== void 0 ? iconEndFamilyClass : familyClass, familyPrefix: iconEndFamilyPrefix !== null && iconEndFamilyPrefix !== void 0 ? iconEndFamilyPrefix : familyPrefix, materialStyle: iconEndMaterialStyle !== null && iconEndMaterialStyle !== void 0 ? iconEndMaterialStyle : materialStyle, className: "ms-auto" }))] })));
}

export { DListGroupItem as default };
//# sourceMappingURL=DListGroupItem.js.map
