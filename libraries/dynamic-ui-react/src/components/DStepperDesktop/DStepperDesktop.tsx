import classNames from 'classnames';

import DIcon from '../DIcon';

import type { BaseProps } from '../interface';

type Step = {
  label: string;
  value: number;
};

type Props = BaseProps & {
  options: Array<Step>;
  currentStep: number;
  successIcon?: string;
  vertical?: boolean;
};

export default function DStepper(
  {
    options,
    currentStep,
    successIcon = 'check',
    vertical = false,
    className,
    style,
  } : Props,
) {
  if (currentStep < 1 || currentStep > options.length) {
    throw new Error('Current step should be in the range from 1 to options length');
  }

  return (
    <div
      className={classNames({
        'd-stepper-desktop': true,
        'is-vertical': vertical,
      }, className)}
      style={style}
    >
      {options.map(({ label, value }) => (
        <div
          className="d-step"
          key={value}
        >
          <div className="d-step-value">
            <div
              className={classNames({
                'd-step-icon-container': true,
                'd-step-check': value < currentStep,
                'd-step-current': value === currentStep,
              })}
            >
              {value < currentStep
                ? (
                  <DIcon
                    icon={successIcon}
                    className="d-step-icon"
                  />
                )
                : value}
            </div>
          </div>
          <div className="d-step-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
