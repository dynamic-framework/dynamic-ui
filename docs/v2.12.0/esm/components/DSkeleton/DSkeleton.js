import { jsx, jsxs } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useContext, useMemo } from 'react';
import DSkeletonText from './components/DSkeletonText.js';
import DSkeletonBlock from './components/DSkeletonBlock.js';
import DSkeletonCircle from './components/DSkeletonCircle.js';
import SkeletonContext from './SkeletonContext.js';
import { PREFIX_BS } from '../config.js';
import { toCssSize, toCount } from './utils.js';

function DSkeleton({ animation, ariaLabel = 'Loading...', color, gap, direction = 'vertical', items, itemClassName, className, style, dataAttributes, children, }) {
    const isNested = useContext(SkeletonContext);
    // Nested skeletons without an explicit animation keep the one of their parent.
    const resolvedAnimation = animation !== null && animation !== void 0 ? animation : (isNested ? undefined : 'glow');
    const skeletonStyle = useMemo(() => (Object.assign(Object.assign(Object.assign({}, color && { [`--${PREFIX_BS}skeleton-bg`]: `var(--${PREFIX_BS}${color})` }), gap !== undefined && { [`--${PREFIX_BS}skeleton-gap`]: toCssSize(gap) }), style)), [color, gap, style]);
    const content = useMemo(() => {
        const isIterated = items !== undefined || typeof children === 'function';
        if (!isIterated)
            return children;
        return Array.from({ length: toCount(items !== null && items !== void 0 ? items : 1) }, (_, index) => (jsx("div", { className: classNames('d-skeleton-slot', itemClassName), children: typeof children === 'function' ? children(index) : children }, index)));
    }, [items, itemClassName, children]);
    const contentClassName = classNames('d-skeleton-content', direction === 'horizontal' && 'd-skeleton-content-horizontal');
    const animationClassName = resolvedAnimation && `d-skeleton-animation-${resolvedAnimation}`;
    if (isNested) {
        return (jsx("div", Object.assign({ className: classNames(contentClassName, animationClassName, className), style: skeletonStyle }, dataAttributes, { children: content })));
    }
    return (jsx(SkeletonContext.Provider, { value: true, children: jsxs("div", Object.assign({ className: classNames('d-skeleton', animationClassName, className), style: skeletonStyle }, dataAttributes, { children: [jsx("span", { className: "visually-hidden", role: "status", children: ariaLabel }), jsx("div", { className: contentClassName, "aria-hidden": "true", children: content })] })) }));
}
var DSkeleton$1 = Object.assign(DSkeleton, {
    Text: DSkeletonText,
    Block: DSkeletonBlock,
    Circle: DSkeletonCircle,
});

export { DSkeleton$1 as default };
//# sourceMappingURL=DSkeleton.js.map
