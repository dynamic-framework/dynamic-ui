import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useMemo, useContext } from 'react';
import classNames from 'classnames';
import DIcon from '../../DIcon/DIcon.js';
import ListGroupContext from '../ListGroupContext.js';
import warnInvalidListMarkup from './warnInvalidListMarkup.js';
import { useDContext } from '../../../contexts/DContext.js';

function DListGroupItem({ as = 'li', action: actionProp, active, ariaCurrent = 'true', disabled, href, onClick, color, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartMaterialStyle, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndMaterialStyle, children, className, style, dataAttributes, }) {
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
    const container = useContext(ListGroupContext);
    const isInteractive = Tag === 'a' || Tag === 'button';
    // Inside a <ul>/<ol>, a link or button is wrapped in the <li> that carries
    // the item styles, so the group keeps list semantics (`list > listitem >
    // link|button`) without breaking Bootstrap's sibling selectors.
    const isWrapped = isInteractive && (container === 'ul' || container === 'ol');
    if (process.env.NODE_ENV !== 'production' && container === 'div' && Tag === 'li') {
        warnInvalidListMarkup(container, Tag);
    }
    const generateClasses = useMemo(() => ({
        'list-group-item': true,
        'list-group-item-action': isInteractive || actionProp,
        'd-list-group-item-interactive': isWrapped,
        [`list-group-item-${color}`]: !!color,
        active,
        disabled,
    }), [isInteractive, actionProp, isWrapped, active, disabled, color]);
    // A disabled link leaves the tab order and can't be activated: without
    // `href` and `onClick`, Enter does nothing. Dropping `href` also drops the
    // implicit link role, so it is set back explicitly. A button uses
    // `disabled`.
    const interactiveProps = useMemo(() => {
        if (Tag === 'button') {
            return Object.assign(Object.assign(Object.assign({ type: 'button' }, onClick && { onClick }), active && { 'aria-current': ariaCurrent }), disabled && { disabled: true });
        }
        if (Tag === 'a') {
            return disabled
                ? Object.assign({ role: 'link', 'aria-disabled': true, tabIndex: -1 }, active && { 'aria-current': ariaCurrent }) : Object.assign(Object.assign(Object.assign({}, href && { href }), onClick && { onClick }), active && { 'aria-current': ariaCurrent });
        }
        return Object.assign(Object.assign(Object.assign({}, onClick && { onClick }), active && { 'aria-current': ariaCurrent }), disabled && { 'aria-disabled': true });
    }, [Tag, href, onClick, active, ariaCurrent, disabled]);
    const content = (jsxs(Fragment, { children: [iconStart && (jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass !== null && iconStartFamilyClass !== void 0 ? iconStartFamilyClass : familyClass, familyPrefix: iconStartFamilyPrefix !== null && iconStartFamilyPrefix !== void 0 ? iconStartFamilyPrefix : familyPrefix, materialStyle: iconStartMaterialStyle !== null && iconStartMaterialStyle !== void 0 ? iconStartMaterialStyle : materialStyle })), children, iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass !== null && iconEndFamilyClass !== void 0 ? iconEndFamilyClass : familyClass, familyPrefix: iconEndFamilyPrefix !== null && iconEndFamilyPrefix !== void 0 ? iconEndFamilyPrefix : familyPrefix, materialStyle: iconEndMaterialStyle !== null && iconEndMaterialStyle !== void 0 ? iconEndMaterialStyle : materialStyle, className: "ms-auto" }))] }));
    if (isWrapped) {
        return (jsx("li", { className: classNames(generateClasses, className), style: style, children: jsx(Tag, Object.assign({ className: "d-list-group-item-link" }, interactiveProps, dataAttributes, { children: content })) }));
    }
    return (jsx(Tag, Object.assign({ className: classNames(generateClasses, className), style: style }, interactiveProps, dataAttributes, { children: content })));
}

export { DListGroupItem as default };
//# sourceMappingURL=DListGroupItem.js.map
