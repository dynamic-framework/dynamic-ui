import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useMemo } from 'react';
import { toCssSize, roundedClass, toCount } from '../utils.js';

function DSkeletonText({ lines = 3, size, widths, lastLineWidth = '60%', rounded, className, style, dataAttributes, }) {
    const lineWidths = useMemo(() => {
        const count = toCount(lines);
        return Array.from({ length: count }, (_, index) => {
            if (widths === null || widths === void 0 ? void 0 : widths.length)
                return toCssSize(widths[index % widths.length]);
            if (count > 1 && index === count - 1)
                return toCssSize(lastLineWidth);
            return '100%';
        });
    }, [lines, widths, lastLineWidth]);
    return (jsx("span", Object.assign({ className: classNames('d-skeleton-text', className), style: style, "aria-hidden": "true" }, dataAttributes, { children: lineWidths.map((width, index) => (jsx("span", { className: classNames('placeholder d-skeleton-item d-skeleton-line', size && `placeholder-${size}`, roundedClass(rounded)), style: { width } }, index))) })));
}

export { DSkeletonText as default };
//# sourceMappingURL=DSkeletonText.js.map
