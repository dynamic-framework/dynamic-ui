import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { toCssSize, roundedClass } from '../utils.js';

function DSkeletonBlock({ width = '100%', height = '1em', rounded, className, style, dataAttributes, }) {
    return (jsx("span", Object.assign({ className: classNames('placeholder d-skeleton-item d-skeleton-block', roundedClass(rounded), className), style: Object.assign({ width: toCssSize(width), height: toCssSize(height) }, style), "aria-hidden": "true" }, dataAttributes)));
}

export { DSkeletonBlock as default };
//# sourceMappingURL=DSkeletonBlock.js.map
