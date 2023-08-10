import classNames from 'classnames';
import { MIcon } from './proxies';

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

export default function MStepper({
  options,
  currentStep,
  successIcon = 'check',
  isVertical = false,
} : Props) {
  return (
    <div className={classNames({
      'm-stepper': true,
      'is-vertical': isVertical,
    })}
    >
      {options.map(({ label, value }) => (
        <div
          className="m-step"
          key={label}
        >
          <div className="m-step-value">
            <div
              className={classNames({
                'm-step-icon-container': true,
                'm-step-check': value < currentStep,
                'm-step-current': value === currentStep,
              })}
            >
              {value < currentStep
                ? <MIcon icon={`${successIcon} m-step-icon`} />
                : value}
            </div>
          </div>
          <div className="m-step-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
