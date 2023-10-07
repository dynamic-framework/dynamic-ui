import classNames from 'classnames';
import { useMemo } from 'react';

type Props = {
  currentValue: number;
  minValue?: number;
  maxValue?: number;
  hideCurrentValue?: boolean;
  enableStripedAnimation?: boolean;
};

export default function DProgress({
  currentValue,
  minValue = 0,
  maxValue = 100,
  hideCurrentValue = false,
  enableStripedAnimation = false,
}: Props) {
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
        className={classNames(generateClasses)}
        role="progressbar"
        aria-label="Progress bar"
        style={{ width: `${currentValue}%` }}
        aria-valuenow={currentValue}
        aria-valuemin={minValue}
        aria-valuemax={maxValue}
      >
        {!hideCurrentValue && formatProgress}
      </div>
    </div>
  );
}
