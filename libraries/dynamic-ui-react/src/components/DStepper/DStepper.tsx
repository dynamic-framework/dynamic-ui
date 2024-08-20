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
  completed?: boolean;
  breakpoint?: BreakpointSize;
};

export default function DStepper(
  {
    options,
    currentStep,
    iconSuccess,
    iconSuccessFamilyClass,
    iconSuccessFamilyPrefix,
    iconSuccessMaterialStyle = false,
    vertical = false,
    breakpoint = 'lg',
    className,
    completed = false,
    style,
    dataAttributes,
  } : Props,
) {
  return (
    <div
      className={className}
      style={style}
      {...dataAttributes}
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
          completed={completed}
        />
      </div>
    </div>
  );
}
