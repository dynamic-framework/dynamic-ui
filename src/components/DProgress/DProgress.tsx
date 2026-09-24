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
  /**
   * Accessible name of the bar. Describe what progresses (e.g. "Upload
   * progress"), not the role. Defaults to `'Progress bar'` when neither this
   * nor `ariaLabelledBy` is set.
   */
  ariaLabel?: string;
  /**
   * Id of a visible element that names the bar, for a title rendered next to
   * it. When set, `aria-label` is not rendered, so `ariaLabel` and the default
   * name are ignored.
   */
  ariaLabelledBy?: string;
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
    ariaLabel,
    ariaLabelledBy,
    dataAttributes,
  }: Props,
) {
  const percentage = useMemo(() => {
    const range = maxValue - minValue;
    if (range <= 0) {
      return 0;
    }
    return Math.round(((currentValue - minValue) * 100) / range);
  }, [currentValue, minValue, maxValue]);

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
        aria-label={ariaLabelledBy ? undefined : (ariaLabel ?? 'Progress bar')}
        aria-labelledby={ariaLabelledBy}
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
