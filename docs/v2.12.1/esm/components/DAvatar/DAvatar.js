import { jsxs, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import classNames from 'classnames';

function DAvatar({ id, size, image, name: nameProp, useNameAsInitials = false, className, style, dataAttributes, }) {
    const generateClasses = useMemo(() => ({
        'd-avatar': true,
        [`d-avatar-${size}`]: !!size,
    }), [size]);
    const name = useMemo(() => {
        if (!nameProp) {
            return undefined;
        }
        if (useNameAsInitials) {
            return nameProp;
        }
        return nameProp.split(/\s+/).map((word) => word.charAt(0)).join('').toUpperCase();
    }, [nameProp, useNameAsInitials]);
    return (jsxs("div", Object.assign({ className: classNames(generateClasses, className), style: style, id: id }, dataAttributes, { children: [image && jsx("img", { src: image, alt: nameProp, className: "d-avatar-img" }), (name && !image) && jsx("span", { className: "d-avatar-name", children: name })] })));
}

export { DAvatar as default };
//# sourceMappingURL=DAvatar.js.map
