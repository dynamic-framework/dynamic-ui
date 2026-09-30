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
      className={['df-stepper', className].filter(Boolean).join(' ')}
      style={style}
      {...dataAttributes}
    >
      {/* 2.x used `d-block d-{bp}-none` / `d-none d-{bp}-block`, which are
          responsive utilities and therefore live in the opt-in stylesheet — a
          component must not depend on that being loaded. The breakpoint is an
          attribute and stepper.css owns the media queries. */}
      <div className="df-stepper-mobile" data-below={breakpoint}>
        <DStepperMobile
          options={options}
          currentStep={currentStep}
        />
      </div>
      <div className="df-stepper-desktop" data-from={breakpoint}>
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
