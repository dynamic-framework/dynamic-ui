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

  return (
    <div
      className={classNames('df-progress', className)}
      // The fill is a live value, not a design decision, so it is the one thing
      // set inline — as a custom property rather than `width`, which leaves the
      // stylesheet in control of how it is used.
      style={{
        ...height !== undefined && { height },
        '--df-progress-value': formatProgress,
        ...style,
      } as React.CSSProperties}
      {...enableStripedAnimation && { 'data-striped': '', 'data-animated': '' }}
      {...dataAttributes}
    >
      <div
        className="df-progress-bar"
        role="progressbar"
        aria-label="Progress bar"
        aria-valuenow={currentValue}
        aria-valuemin={minValue}
        aria-valuemax={maxValue}
      >
        {!hideCurrentValue && formatProgress}
      </div>
    </div>
  );
}
