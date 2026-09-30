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

  /** One axis with three values, where 2.x had two independent classes. */
  const stateFor = (value: number): 'done' | 'current' | 'todo' => {
    if (completed || value < currentStep) return 'done';
    if (value === currentStep) return 'current';
    return 'todo';
  };

  return (
    <div
      className={classNames('df-stepper-desktop', className)}
      {...vertical && { 'data-orientation': 'vertical' }}
      {...alignStart && !vertical && { 'data-align': 'start' }}
      style={style}
    >
      {options.map(({ label, value, description }) => (
        <div
          className="df-step"
          // 2.x used `d-step-current` on the step and `d-step-check` on the
          // marker — two classes for what is one axis with three values.
          data-state={stateFor(value)}
          key={value}
        >
          <div className="df-step-marker">
            {((value < currentStep) || completed) ? (
              <DIcon
                icon={icon}
                familyClass={iconSuccessFamilyClass}
                familyPrefix={iconSuccessFamilyPrefix}
                materialStyle={iconSuccessMaterialStyle}
              />
            ) : value}
          </div>
          <div className="df-step-text">
            <div className="df-step-label">{label}</div>
            {description && (
              <div className="df-step-description">{description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
