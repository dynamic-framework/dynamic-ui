import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useMemo, useContext, useRef, useState, useLayoutEffect } from 'react';
import classNames from 'classnames';
import DIcon from '../../DIcon/DIcon.js';
import DModalLabelContext from './DModalLabelContext.js';
import { useDContext } from '../../../contexts/DContext.js';

function DModalHeader({ showCloseButton, onClose, children, className, style, iconFamilyClass, iconFamilyPrefix, icon: iconProp, iconMaterialStyle, materialStyle: materialStyleProp, }) {
    var _a;
    const { icon: { familyClass, familyPrefix, materialStyle, }, iconMap: { xLg, }, } = useDContext();
    const icon = useMemo(() => iconProp || xLg, [iconProp, xLg]);
    // El contenedor de children toma el id del título salvo que el consumidor ya
    // lo haya puesto en un descendiente; así no hay ids duplicados. El observer
    // cubre los títulos que añaden o quitan ese id por su propio estado.
    const labelId = useContext(DModalLabelContext);
    const titleRef = useRef(null);
    const [labelOnWrapper, setLabelOnWrapper] = useState(false);
    useLayoutEffect(() => {
        const title = titleRef.current;
        if (!labelId || !title) {
            setLabelOnWrapper(false);
            return undefined;
        }
        const update = () => {
            const descendants = Array.from(title.querySelectorAll('[id]'));
            setLabelOnWrapper(!descendants.some((element) => element.id === labelId));
        };
        update();
        const observer = new MutationObserver(update);
        observer.observe(title, {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ['id'],
        });
        return () => observer.disconnect();
    }, [labelId]);
    return (jsxs(Fragment, { children: [jsxs("div", { className: classNames('modal-header', className), style: style, children: [jsx("div", { ref: titleRef, id: labelOnWrapper ? labelId : undefined, children: children }), showCloseButton && (jsx("button", { type: "button", className: "d-close", "aria-label": "Close", onClick: onClose, children: jsx(DIcon, { icon: icon, familyClass: iconFamilyClass !== null && iconFamilyClass !== void 0 ? iconFamilyClass : familyClass, familyPrefix: iconFamilyPrefix !== null && iconFamilyPrefix !== void 0 ? iconFamilyPrefix : familyPrefix, materialStyle: (_a = iconMaterialStyle !== null && iconMaterialStyle !== void 0 ? iconMaterialStyle : materialStyleProp) !== null && _a !== void 0 ? _a : materialStyle }) }))] }), jsx("div", { className: "d-modal-separator" })] }));
}

export { DModalHeader as default };
//# sourceMappingURL=DModalHeader.js.map
