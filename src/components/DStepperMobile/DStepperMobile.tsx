import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { CSSProperties } from 'react';

import classNames from 'classnames';

import { PREFIX } from '../config';
import type { BaseProps } from '../interface';

type Step = {
  label: string;
  description?: string;
  value: number;
};

type Props = BaseProps & {
  options: Array<Step>;
  currentStep: number;
};

export default function DStepper(
  {
    options,
    currentStep,
    className,
    style,
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

  return (
    <div
      className={classNames('df-stepper-mobile', className)}
      style={style}
    >
      {/* 2.x assembled the whole `conic-gradient()` string in JavaScript. Only
          the angle is a live value, so only the angle is written here and the
          gradient lives in stepper.css. */}
      <div
        className="df-step-progress"
        style={{ [`--${PREFIX}step-progress-angle`]: `${currentAngle}deg` } as CSSProperties}
      >
        <p className="df-step-progress-value">{`${currentStep}/${options.length}`}</p>
      </div>
      <div className="df-step-info">
        {Object.keys(currentOption).length > 0 && (
          <>
            <div className="df-step-label">{currentOption.label}</div>
            <div className="df-step-description">{currentOption.description || ''}</div>
          </>
        )}
      </div>
    </div>
  );
}
