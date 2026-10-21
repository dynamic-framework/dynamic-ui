import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useMemo, useState, useEffect } from 'react';
import classNames from 'classnames';
import { PREFIX_BS } from '../config.js';

function DStepper({ options, currentStep, className, style, }) {
    if (currentStep < 1 || currentStep > options.length) {
        throw new Error('Current step should be in the range from 1 to options length');
    }
    const currentOption = useMemo(() => { var _a; return (_a = options[currentStep - 1]) !== null && _a !== void 0 ? _a : {}; }, [currentStep, options]);
    const [currentAngle, setCurrentAngle] = useState(0);
    useEffect(() => {
        const targetAngle = (currentStep / options.length) * 360;
        const animationInterval = setInterval(() => {
            const angleDifference = targetAngle - currentAngle;
            const step = Math.sign(angleDifference) * 5;
            if (Math.abs(angleDifference) <= Math.abs(step)) {
                setCurrentAngle(targetAngle);
                clearInterval(animationInterval);
            }
            else {
                setCurrentAngle(currentAngle + step);
            }
        }, 16);
        return () => {
            clearInterval(animationInterval);
        };
    }, [currentAngle, currentStep, options.length]);
    const progressStyle = useMemo(() => `conic-gradient(
      from 0deg,
      var(--${PREFIX_BS}step-progress-outter-fill-background-color) ${currentAngle}deg,
      var(--${PREFIX_BS}step-progress-outter-background-color) 0deg)`, [currentAngle]);
    return (jsxs("div", { className: classNames('d-stepper', className), style: style, children: [jsx("div", { className: "d-step-bar", style: { background: progressStyle }, children: jsx("p", { className: "d-step-number", children: `${currentStep}/${options.length}` }) }), jsx("div", { className: "d-step-info", children: Object.keys(currentOption).length > 0 && (jsxs(Fragment, { children: [jsx("div", { className: "d-step-label", children: currentOption.label }), jsx("div", { className: "d-step-description", children: currentOption.description || '' })] })) })] }));
}

export { DStepper as default };
//# sourceMappingURL=DStepperMobile.js.map
