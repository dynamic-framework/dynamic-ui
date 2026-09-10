import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useMemo } from 'react';

function DProgress({ className, style, currentValue, minValue = 0, maxValue = 100, hideCurrentValue = false, enableStripedAnimation = false, height, dataAttributes, }) {
    const percentage = useMemo(() => (Math.round((currentValue * 100) / maxValue)), [currentValue, maxValue]);
    const formatProgress = useMemo(() => `${percentage}%`, [percentage]);
    const generateClasses = useMemo(() => ({
        'progress-bar': true,
        'progress-bar-striped progress-bar-animated': enableStripedAnimation,
    }), [enableStripedAnimation]);
    return (jsx("div", Object.assign({ className: classNames('progress', className), style: Object.assign({ height }, style) }, dataAttributes, { children: jsx("div", { className: classNames(generateClasses), role: "progressbar", "aria-label": "Progress bar", style: { width: formatProgress }, "aria-valuenow": currentValue, "aria-valuemin": minValue, "aria-valuemax": maxValue, children: !hideCurrentValue && formatProgress }) })));
}

export { DProgress as default };
//# sourceMappingURL=DProgress.js.map
