import classNames from 'classnames';
import { useMemo } from 'react';
import { BaseProps } from '../interface';

type Props = BaseProps & {
  currentValue: number;
  minValue?: number;
  maxValue?: number;
  hideCurrentValue?: boolean;
  enableStripedAnimation?: boolean;
};

export default function DProgress(
  {
    className,
    style,
    currentValue,
    minValue = 0,
    maxValue = 100,
    hideCurrentValue = false,
    enableStripedAnimation = false,
  }: Props,
) {
  const formatProgress = useMemo(
    () => `${currentValue}%`,
    [currentValue],
  );

  const generateClasses = useMemo(() => ({
    'progress-bar': true,
    'progress-bar-striped progress-bar-animated': enableStripedAnimation,
  }), [enableStripedAnimation]);

  return (
    <div className="progress">
      <div
        className={classNames(generateClasses, className)}
        role="progressbar"
        aria-label="Progress bar"
        style={{ width: `${currentValue}%`, ...style }}
        aria-valuenow={currentValue}
        aria-valuemin={minValue}
        aria-valuemax={maxValue}
      >
        {!hideCurrentValue && formatProgress}
      </div>
    </div>
  );
}
