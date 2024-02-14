import DStepperDesktop from '../DStepperDesktop';
import DStepperMobile from '../DStepperMobile';

import type { BaseProps, BreakpointSize } from '../interface';

export type Step = {
  label: string;
  value: number;
  description?: string;
};

type Props = BaseProps & {
  options: Array<Step>;
  currentStep: number;
  iconSuccess?: string;
  iconSuccessFamilyClass?: string;
  iconSuccessFamilyPrefix?: string;
  iconSuccessMaterialStyle?: boolean;
  vertical?: boolean;
  breakpoint?: BreakpointSize;
};

export default function DStepper(
  {
    options,
    currentStep,
    iconSuccess = 'check',
    iconSuccessFamilyClass,
    iconSuccessFamilyPrefix,
    iconSuccessMaterialStyle = false,
    vertical = false,
    breakpoint = 'lg',
    className,
    style,
  } : Props,
) {
  return (
    <div
      className={className}
      style={style}
    >
      <div className={`d-block d-${breakpoint}-none`}>
        <DStepperMobile
          options={options}
          currentStep={currentStep}
        />
      </div>
      <div className={`d-none d-${breakpoint}-block`}>
        <DStepperDesktop
          options={options}
          currentStep={currentStep}
          vertical={vertical}
          iconSuccess={iconSuccess}
          iconSuccessFamilyClass={iconSuccessFamilyClass}
          iconSuccessFamilyPrefix={iconSuccessFamilyPrefix}
          iconSuccessMaterialStyle={iconSuccessMaterialStyle}
        />
      </div>
    </div>
  );
}
