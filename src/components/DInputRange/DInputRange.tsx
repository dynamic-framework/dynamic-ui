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
  ReactNode,
  RefObject,
} from 'react';

import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate';
import DFormLabel from '../internal/DFormLabel';
import hasLabelContent from '../../utils/hasLabelContent';
import warnLabelUsage from '../../utils/warnLabelUsage';
import { PREFIX_BS } from '../config';

import type { BaseProps, CustomStyles } from '../interface';
import type { Merge } from '../../types';

type NonHTMLInputElementProps =
& BaseProps
& {
  /**
   * The label of the control. Any node is accepted, so it can carry a link, an
   * info trigger or other markup.
   *
   * Text doubles as the control's accessible name. A richer label does not, so
   * pass `ariaLabel` alongside it; a development-only warning says so when it
   * is missing.
   */
  label?: ReactNode;
  /**
   * Accessible name of the control, needed when `label` is not plain text.
   * Without it the name becomes whatever the label subtree computes to, which
   * for a label carrying a link or an icon reads as the wrong name or as none.
   */
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

  if (process.env.NODE_ENV !== 'production') {
    warnLabelUsage({
      component: 'DInputRange',
      label,
      // `{...props}` is spread after `aria-label={ariaLabel}`, so a native
      // `aria-label` wins — including when it is explicitly undefined.
      hasAccessibleName: !!('aria-label' in props ? props['aria-label'] : ariaLabel)
        || !!props['aria-labelledby'],
      accessibleNameProp: 'ariaLabel',
    });
  }

  if (!hasLabelContent(label)) {
    return inputComponent;
  }

  return (
    <>
      <DFormLabel className="form-label" htmlFor={id}>
        {label}
      </DFormLabel>
      {inputComponent}
    </>
  );
}

const ForwardedDInputRange = forwardRef<HTMLInputElement, Props>(DInputRange);
ForwardedDInputRange.displayName = 'DInputRange';
export default ForwardedDInputRange;
