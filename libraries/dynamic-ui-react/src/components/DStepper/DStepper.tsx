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
  successIcon?: string;
  vertical?: boolean;
  breakpoint?: BreakpointSize;
};

export default function DStepper(
  {
    options,
    currentStep,
    successIcon = 'check',
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
          successIcon={successIcon}
          vertical={vertical}
        />
      </div>
    </div>
  );
}
