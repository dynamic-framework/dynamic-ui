import {
  forwardRef,
  useId,
  useMemo,
} from 'react';
import classNames from 'classnames';

import type {
  CSSProperties,
  ForwardedRef,
  ComponentPropsWithoutRef,
  RefObject,
} from 'react';

import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate';
import { PREFIX_BS } from '../config';

import type { BaseProps, CustomStyles } from '../interface';
import type { Merge } from '../../types';

type NonHTMLInputElementProps =
& BaseProps
& {
  label?: string;
  ariaLabel?: string;
  filledValue?: boolean;
};

type Props = Merge<
Omit<ComponentPropsWithoutRef<'input'>, 'type'>,
NonHTMLInputElementProps
>;

function DInputRange(
  {
    id: idProp,
    label,
    ariaLabel,
    className,
    style,
    value = '0',
    min = '0',
    max = '100',
    filledValue = true,
    onChange,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const innerRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement | null>);
  const innerId = useId();
  const id = useMemo(() => idProp || innerId, [idProp, innerId]);

  const generateClasses = useMemo(
    () => ({
      'form-range': true,
      'form-range-value-indicator': filledValue,
    }),
    [filledValue],
  );

  const generateStyleVariables = useMemo<CustomStyles | CSSProperties>(() => {
    const minNumber = parseFloat(min.toString());
    const maxNumber = parseFloat(max.toString());
    const valueNumber = parseFloat(value.toString());

    const percentage = ((valueNumber - minNumber) / (maxNumber - minNumber)) * 100;

    return {
      ...style,
      [`--${PREFIX_BS}form-range-component-value`]: `${percentage}%`,
    };
  }, [min, max, value, style]);

  const inputComponent = useMemo(() => (
    <input
      id={id}
      ref={innerRef}
      className={classNames(generateClasses, className)}
      aria-label={ariaLabel}
      type="range"
      value={value}
      min={min}
      max={max}
      style={generateStyleVariables}
      onChange={onChange}
      {...props}
    />
  ), [
    ariaLabel,
    className,
    generateClasses,
    generateStyleVariables,
    id,
    innerRef,
    max,
    min,
    onChange,
    props,
    value,
  ]);

  if (!label) {
    return inputComponent;
  }

  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      {inputComponent}
    </>
  );
}

const ForwardedDInputRange = forwardRef<HTMLInputElement, Props>(DInputRange);
ForwardedDInputRange.displayName = 'DInputRange';
export default ForwardedDInputRange;
