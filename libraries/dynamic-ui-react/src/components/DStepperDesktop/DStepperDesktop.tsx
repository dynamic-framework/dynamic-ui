import classNames from 'classnames';

import { useMemo } from 'react';
import DIcon from '../DIcon';

import type { BaseProps } from '../interface';
import { useDContext } from '../../contexts';

type Step = {
  label: string;
  description?: string;
  value: number;
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
  alignStart?: boolean;
};

export default function DStepper(
  {
    options,
    currentStep,
    iconSuccess: iconSuccessProp,
    iconSuccessFamilyClass,
    iconSuccessFamilyPrefix,
    iconSuccessMaterialStyle = false,
    vertical = false,
    completed,
    alignStart = false,
    className,
    style,
  } : Props,
) {
  const {
    iconMap: {
      check,
    },
  } = useDContext();

  const icon = useMemo(() => iconSuccessProp || check, [check, iconSuccessProp]);

  if (currentStep < 1 || currentStep > options.length) {
    throw new Error('Current step should be in the range from 1 to options length');
  }

  return (
    <div
      className={classNames(
        {
          'd-stepper-desktop': true,
          'is-vertical': vertical,
        },
        className,
      )}
      style={style}
    >
      {options.map(({ label, value, description }) => (
        <div
          className="d-step"
          key={value}
        >
          <div className="d-step-value">
            <div
              className={classNames({
                'd-step-icon-container': true,
                'd-step-check': value < currentStep || completed,
                'd-step-current': value === currentStep && !completed,
              })}
            >
              {value < currentStep || completed
                ? (
                  <DIcon
                    icon={icon}
                    familyClass={iconSuccessFamilyClass}
                    familyPrefix={iconSuccessFamilyPrefix}
                    materialStyle={iconSuccessMaterialStyle}
                    className="d-step-icon"
                  />
                )
                : value}
            </div>
          </div>
          <div
            className={classNames(
              'd-step-text-container',
              { 'd-step-text-container-start': alignStart },
            )}
          >
            <div className="d-step-label">{label}</div>
            {description && (
              <div className="d-step-description">{description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
