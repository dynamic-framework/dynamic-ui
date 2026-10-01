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
      {/*
        * 2.x used `d-block d-{bp}-none` / `d-none d-{bp}-block`, which are
        * responsive utilities and therefore live in the opt-in stylesheet — a
        * component must not depend on that being loaded. The breakpoint is an
        * attribute and stepper.css owns the media queries.
        *
        * The attribute goes ON the pane, not on a wrapper around it. It used to
        * be wrapped, which meant two `.df-stepper-desktop` elements nested
        * inside each other: the outer one carried `data-from` and the inner one
        * — the one the sub-component renders — did not. The media query
        * therefore never matched the inner element, so it kept `display: none`
        * from the base rule and the desktop stepper was invisible at every
        * width. The mobile pane had the mirror image of the bug and was always
        * visible.
        */}
      <DStepperMobile
        options={options}
        currentStep={currentStep}
        dataAttributes={{ 'data-below': breakpoint }}
      />
      <DStepperDesktop
        dataAttributes={{ 'data-from': breakpoint }}
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
  );
}
