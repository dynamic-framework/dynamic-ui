import {
  useEffect,
  useMemo,
  useCallback,
  useRef,
  forwardRef,
} from 'react';

import type {
  RefObject,
  ForwardedRef,
  ComponentPropsWithoutRef,
  CSSProperties,
} from 'react';

import DInput from '../DInput';
import { PREFIX_BS } from '../config';

import type {
  CustomStyles,
} from '../interface';
import type { Merge } from '../../types';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate';
import { useDContext } from '../../contexts';
import { useDisableInputWheel } from '../../hooks';
import useControlledState from '../../hooks/useControlledState';

type NonDInputProps = {
  /**
   * Current value of the counter.
   *
   * Passed together with `onChange` the counter is fully controlled: when the
   * parent rejects a change the counter snaps back to this value.
   *
   * Passed on its own it is taken as the starting value and the counter keeps
   * counting by itself — the historical behaviour. Prefer `defaultValue` for
   * that, it says so out loud.
   */
  value?: number;
  /** Starting value for uncontrolled usage; falls back to `minValue`. */
  defaultValue?: number;
  minValue: number;
  maxValue: number;
  onChange?: (value?: number) => void;
};

type Props = Merge<
Omit<
ComponentPropsWithoutRef<typeof DInput>,
| 'value'
| 'type'
| 'onChange'
| 'invalidIcon'
| 'validIcon'
>,
NonDInputProps
>;

function DInputCounter(
  {
    minValue,
    maxValue,
    value,
    defaultValue,
    invalid,
    iconStart: iconStartProp,
    iconEnd: iconEndProp,
    iconStartAriaLabel = 'decrease action',
    iconEndAriaLabel = 'increase action',
    style,
    onChange,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const {
    handleOnWheel,
  } = useDisableInputWheel(ref);
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement | null>);
  // See `useControlledState` for why `onChange` takes part in this decision.
  const isControlled = value !== undefined && onChange !== undefined;
  const [currentValue, setCurrentValue] = useControlledState(
    value,
    isControlled,
    defaultValue ?? minValue,
  );

  // `onChange` used to be called from an effect watching the internal value,
  // which made controlling the counter impossible: a controlled counter never
  // moves that value, so the effect never fired. Reporting from the handlers
  // instead works in both modes.
  const commitValue = useCallback((newValue: number) => {
    setCurrentValue(newValue);
    onChange?.(newValue);
  }, [setCurrentValue, onChange]);

  // Consumers have always been handed the starting value through `onChange` on
  // mount, and some seed their state with it, so that one call stays. The ref
  // keeps it to the first run: the old effect also re-fired on every render
  // that passed a fresh inline `onChange`.
  const hasReportedInitialValue = useRef(false);
  useEffect(() => {
    if (hasReportedInitialValue.current) {
      return;
    }
    hasReportedInitialValue.current = true;
    onChange?.(currentValue);
  }, [onChange, currentValue]);

  const handleOnChange = useCallback((newValue?: string) => {
    commitValue(Number(newValue || '0'));
  }, [commitValue]);

  const handleOnIconStartClick = useCallback(() => {
    commitValue(Math.max(currentValue - 1, minValue));
  }, [commitValue, currentValue, minValue]);

  const handleOnIconEndClick = useCallback(() => {
    commitValue(Math.min(currentValue + 1, maxValue));
  }, [commitValue, currentValue, maxValue]);

  const generateStyleVariables = useMemo<CustomStyles | CSSProperties>(() => ({
    ...style,
    [`--${PREFIX_BS}form-control-component-text-align`]: 'center',
  }), [style]);

  const valueString = useMemo(() => (
    currentValue.toString()
  ), [currentValue]);

  const internalIsInvalid = useMemo(() => (
    !(currentValue >= minValue && currentValue <= maxValue)
  ), [currentValue, minValue, maxValue]);

  const { iconMap: { input } } = useDContext();

  const iconEnd = useMemo(
    () => iconEndProp || input.increase,
    [iconEndProp, input.increase],
  );
  const iconStart = useMemo(
    () => iconStartProp || input.decrease,
    [iconStartProp, input.decrease],
  );

  return (
    <DInput
      ref={inputRef}
      value={valueString}
      style={generateStyleVariables}
      iconStart={iconStart}
      iconEnd={iconEnd}
      invalid={internalIsInvalid || invalid}
      type="number"
      onChange={handleOnChange}
      onWheel={handleOnWheel}
      onIconStartClick={handleOnIconStartClick}
      onIconEndClick={handleOnIconEndClick}
      iconStartAriaLabel={iconStartAriaLabel}
      iconEndAriaLabel={iconEndAriaLabel}
      {...currentValue === minValue && {
        iconStartDisabled: true,
      }}
      {...currentValue === maxValue && {
        iconEndDisabled: true,
      }}
      {...props}
    />
  );
}

const ForwardedDInputCounter = forwardRef<HTMLInputElement, Props>(DInputCounter);
ForwardedDInputCounter.displayName = 'DInputCounter';
export default ForwardedDInputCounter;
