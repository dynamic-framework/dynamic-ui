import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import DStepper$2 from '../DStepperDesktop/DStepperDesktop.js';
import DStepper$1 from '../DStepperMobile/DStepperMobile.js';
import { useDContext } from '../../contexts/DContext.js';

function DStepper({ options, currentStep, iconSuccess, iconSuccessFamilyClass, iconSuccessFamilyPrefix, iconSuccessMaterialStyle, vertical = false, breakpoint = 'lg', className, completed = false, style, dataAttributes, }) {
    const { icon: { familyClass, familyPrefix, materialStyle, }, } = useDContext();
    return (jsxs("div", Object.assign({ className: className, style: style }, dataAttributes, { children: [jsx("div", { className: classNames('d-stepper-mobile', `d-block d-${breakpoint}-none`), children: jsx(DStepper$1, { options: options, currentStep: currentStep }) }), jsx("div", { className: classNames('d-stepper-desktop', `d-none d-${breakpoint}-block`), children: jsx(DStepper$2, { options: options, currentStep: currentStep, vertical: vertical, iconSuccess: iconSuccess, iconSuccessFamilyClass: iconSuccessFamilyClass !== null && iconSuccessFamilyClass !== void 0 ? iconSuccessFamilyClass : familyClass, iconSuccessFamilyPrefix: iconSuccessFamilyPrefix !== null && iconSuccessFamilyPrefix !== void 0 ? iconSuccessFamilyPrefix : familyPrefix, iconSuccessMaterialStyle: iconSuccessMaterialStyle !== null && iconSuccessMaterialStyle !== void 0 ? iconSuccessMaterialStyle : materialStyle, completed: completed }) })] })));
}

export { DStepper as default };
//# sourceMappingURL=DStepper.js.map
