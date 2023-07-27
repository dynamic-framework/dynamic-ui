import classNames from 'classnames';

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
  isVertical = true,
} : Props) {
  return (
    <div className={classNames({
      'm-stepper': true,
      'is-vertical': isVertical,
    })}
    >
      {options.map(({ label, value }) => (
        <div
          className="step"
          key={label}
        >
          <div className="step-value">
            <div
              className={classNames({
                'step-icon-container': true,
                'step-check': value < currentStep,
                'step-current': value === currentStep,
              })}
            >
              {value < currentStep
                ? <i className={`bi bi-${successIcon} step-icon`} />
                : value}
            </div>
          </div>
          <div className="step-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
