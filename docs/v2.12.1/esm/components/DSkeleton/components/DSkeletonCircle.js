import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { toCssSize } from '../utils.js';

function DSkeletonCircle({ size = 40, className, style, dataAttributes, }) {
    const diameter = toCssSize(size);
    return (jsx("span", Object.assign({ className: classNames('placeholder d-skeleton-item d-skeleton-circle rounded-circle', className), style: Object.assign({ width: diameter, height: diameter }, style), "aria-hidden": "true" }, dataAttributes)));
}

export { DSkeletonCircle as default };
//# sourceMappingURL=DSkeletonCircle.js.map
