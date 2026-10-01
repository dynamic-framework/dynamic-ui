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
    dataAttributes,
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
      {...dataAttributes}
    >
      {options.map(({ label, value, description }) => (
        <div
          className="df-step"
          // 2.x used `d-step-current` on the step and `d-step-check` on the
          // marker — two classes for what is one axis with three values.
          data-state={stateFor(value)}
          key={value}
        >
          {/*
            * The number stays, and a completed step ADDS a badge.
            *
            * It used to swap the number for the check, so a done step showed a
            * solid green disc and nothing else. That loses what the marker is
            * for: a flow is "step 2 of 3", and a row of identical discs cannot
            * say which step you are on or how far back a given one was.
            */}
          <div className="df-step-marker">
            {value}
            {((value < currentStep) || completed) && (
              <DIcon
                className="df-step-check"
                icon={icon}
                familyClass={iconSuccessFamilyClass}
                familyPrefix={iconSuccessFamilyPrefix}
                materialStyle={iconSuccessMaterialStyle}
              />
            )}
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
