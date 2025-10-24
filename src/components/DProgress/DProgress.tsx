import classNames from 'classnames';
import { useMemo } from 'react';

import type { BaseProps } from '../interface';

type Props = BaseProps & {
  currentValue: number;
  minValue?: number;
  maxValue?: number;
  hideCurrentValue?: boolean;
  enableStripedAnimation?: boolean;
  height?: string | number;
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
    height,
    dataAttributes,
  }: Props,
) {
  const percentage = useMemo(() => (
    Math.round((currentValue * 100) / maxValue)
  ), [currentValue, maxValue]);

  const formatProgress = useMemo(
    () => `${percentage}%`,
    [percentage],
  );

  const generateClasses = useMemo(() => ({
    'progress-bar': true,
    'progress-bar-striped progress-bar-animated': enableStripedAnimation,
  }), [enableStripedAnimation]);

  return (
    <div
      className={classNames('progress', className)}
      style={{ height, ...style }}
      {...dataAttributes}
    >
      <div
        className={classNames(generateClasses)}
        role="progressbar"
        aria-label="Progress bar"
        style={{ width: formatProgress }}
        aria-valuenow={currentValue}
        aria-valuemin={minValue}
        aria-valuemax={maxValue}
      >
        {!hideCurrentValue && formatProgress}
      </div>
    </div>
  );
}
