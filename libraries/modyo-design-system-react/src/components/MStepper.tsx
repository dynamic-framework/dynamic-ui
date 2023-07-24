import classNames from 'classnames';

export type Step = {
  label: string;
  value: number;
};

type Props = {
  options: Array<Step>;
  currentStep: number;
  successIcon?: string;
};

export default function MStepper({ options, currentStep, successIcon = 'check' } : Props) {
  return (
    <div className="m-stepper">
      {options.map(({ label, value }) => (
        <div
          className="d-flex flex-column gap-2 flex-1 step"
          key={label}
        >
          <div className="step-value d-flex justify-content-center w-100 position-relative">
            <div
              className={classNames({
                'step-icon-container': true,
                'text-secondary border border-1 border-secondary bg-white': value > currentStep,
                'text-white bg-success': value < currentStep,
                'text-white bg-secondary': value === currentStep,
              })}
            >
              {value < currentStep
                ? <i className={`bi bi-${successIcon} step-icon`} />
                : value}
            </div>
          </div>
          <div className="step-label px-4">{label}</div>
        </div>
      ))}
    </div>
  );
}
