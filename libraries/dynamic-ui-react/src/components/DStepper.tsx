import classNames from 'classnames';

import { DIcon } from './proxies';

export type Step = {
  label: string;
  value: number;
};

type Props = {
  options: Array<Step>;
  currentStep: number;
  successIcon?: string;
  isVertical?: boolean;
};

export default function DStepper(
  {
    options,
    currentStep,
    successIcon = 'check',
    isVertical = false,
  } : Props,
) {
  return (
    <div className={classNames({
      'd-stepper': true,
      'is-vertical': isVertical,
    })}
    >
      {options.map(({ label, value }) => (
        <div
          className="d-step"
          key={label}
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
                    innerClass="d-step-icon"
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