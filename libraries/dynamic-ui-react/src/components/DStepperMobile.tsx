import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import { PREFIX_BS } from './config';

type Step = {
  label: string;
  description?: string;
  value: number;
};

type Props = {
  options: Array<Step>;
  currentStep: number;
};

export default function DStepper(
  {
    options,
    currentStep,
  } : Props,
) {
  if (currentStep < 1 || currentStep > options.length) {
    throw new Error('Current step should be in the range from 1 to options length');
  }

  const currentOption = useMemo(() => options[currentStep - 1] ?? {}, [currentStep, options]);
  const [currentAngle, setCurrentAngle] = useState(0);

  useEffect(() => {
    const targetAngle = (currentStep / options.length) * 360;

    const animationInterval = setInterval(() => {
      const angleDifference = targetAngle - currentAngle;
      const step = Math.sign(angleDifference) * 5;

      if (Math.abs(angleDifference) <= Math.abs(step)) {
        setCurrentAngle(targetAngle);
        clearInterval(animationInterval);
      } else {
        setCurrentAngle(currentAngle + step);
      }
    }, 16);

    return () => {
      clearInterval(animationInterval);
    };
  }, [currentAngle, currentStep, options.length]);

  const progressStyle = useMemo(
    () => `conic-gradient(
      from 180deg,
      var(--${PREFIX_BS}step-progress-outter-fill-background-color) ${currentAngle}deg,
      var(--${PREFIX_BS}step-progress-outter-background-color) 0deg)`,
    [currentAngle],
  );

  return (
    <div className="d-stepper">
      <div className="d-step-bar" style={{ background: progressStyle }}>
        <p className="d-step-number">{`${currentStep}/${options.length}`}</p>
      </div>
      <div className="d-step-info">
        {Object.keys(currentOption).length > 0 && (
          <>
            <div className="d-step-label">{currentOption.label}</div>
            <div className="d-step-description">{currentOption.description || ''}</div>
          </>
        )}
      </div>
    </div>
  );
}
