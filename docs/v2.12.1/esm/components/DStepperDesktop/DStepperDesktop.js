import { jsx, jsxs } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useMemo } from 'react';
import DIcon from '../DIcon/DIcon.js';
import { useDContext } from '../../contexts/DContext.js';

function DStepper({ options, currentStep, iconSuccess: iconSuccessProp, iconSuccessFamilyClass, iconSuccessFamilyPrefix, iconSuccessMaterialStyle, vertical = false, completed, alignStart = false, className, style, }) {
    const { icon: { familyClass, familyPrefix, materialStyle, }, iconMap: { check, }, } = useDContext();
    const icon = useMemo(() => iconSuccessProp || check, [check, iconSuccessProp]);
    if (currentStep < 1 || currentStep > options.length) {
        throw new Error('Current step should be in the range from 1 to options length');
    }
    return (jsx("div", { className: classNames({
            'd-stepper-desktop': true,
            'is-vertical': vertical,
            'is-align-start': alignStart && !vertical,
        }, className), style: style, children: options.map(({ label, value, description }) => (jsxs("div", { className: classNames({
                'd-step': true,
                'd-step-current': value === currentStep && !completed,
            }), children: [jsx("div", { className: "d-step-value", children: jsxs("div", { className: classNames({
                            'd-step-icon-container': true,
                            'd-step-check': value < currentStep || completed,
                        }), children: [((value < currentStep) || completed) && (jsx(DIcon, { icon: icon, familyClass: iconSuccessFamilyClass !== null && iconSuccessFamilyClass !== void 0 ? iconSuccessFamilyClass : familyClass, familyPrefix: iconSuccessFamilyPrefix !== null && iconSuccessFamilyPrefix !== void 0 ? iconSuccessFamilyPrefix : familyPrefix, materialStyle: iconSuccessMaterialStyle !== null && iconSuccessMaterialStyle !== void 0 ? iconSuccessMaterialStyle : materialStyle, className: "d-step-icon" })), value] }) }), jsxs("div", { className: "d-step-text-container", children: [jsx("div", { className: "d-step-label", children: label }), description && (jsx("div", { className: "d-step-description", children: description }))] })] }, value))) }));
}

export { DStepper as default };
//# sourceMappingURL=DStepperDesktop.js.map
