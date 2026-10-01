import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
} from 'react';
import classNames from 'classnames';

import type { ChangeEvent, ComponentPropsWithoutRef } from 'react';

import type { BaseProps, InputCheckType } from '../interface';

type Props =
& ComponentPropsWithoutRef<'input'>
& BaseProps
& {
  id?: string;
  type: InputCheckType;
  name?: string;
  label?: string;
  ariaLabel?: string;
  checked?: boolean;
  inputClassName?: string;
  disabled?: boolean;
  invalid?: boolean;
  valid?: boolean;
  hint?: string;
  indeterminate?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function DInputCheck(
  {
    id: idProp,
    type,
    name,
    label,
    ariaLabel,
    checked = false,
    disabled = false,
    invalid = false,
    valid = false,
    indeterminate,
    inputClassName,
    value,
    hint,
    onChange,
    className,
    style,
    dataAttributes,
    ...props
  }: Props,
) {
  const innerRef = useRef<HTMLInputElement>(null);
  const innerId = useId();
  const id = useMemo(() => idProp || innerId, [idProp, innerId]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  }, [onChange]);

  const ariaDescribedby = useMemo(() => (
    [
      !!hint && `${id}Hint`,
    ]
      .filter(Boolean)
      .join(' ')
  ), [
    id,
    hint,
  ]);

  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);

  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.checked = checked;
    }
  }, [checked]);

  const input = useMemo(() => (
    <input
      ref={innerRef}
      onChange={handleChange}
      className={classNames('df-choice-input', inputClassName)}
      {...invalid && { 'data-invalid': '' }}
      {...valid && { 'data-valid': '' }}
      style={style}
      id={id}
      disabled={disabled}
      type={type}
      name={name}
      value={value}
      aria-label={ariaLabel}
      {...ariaDescribedby && { 'aria-describedby': ariaDescribedby }}
      {...props}
    />
  ), [
    handleChange,
    invalid,
    valid,
    inputClassName,
    style,
    id,
    disabled,
    type,
    name,
    value,
    ariaLabel,
    ariaDescribedby,
    props,
  ]);

  /**
   * A checkbox carries its tick in a sibling element rather than on the input.
   *
   * The tick is drawn with `mask-image` so its colour comes from a token — a
   * baked-in `fill` in a data URI can never follow a rebrand. But a mask
   * applies to the WHOLE element, so masking the input clipped away its border
   * and left a tick floating with no box around it. Moving the mask to an
   * overlay leaves the input's border, corner radius and focus ring alone,
   * which are the parts the browser and the tokens should keep owning.
   *
   * Only the checkbox needs it. A radio's dot is a `radial-gradient` and a
   * switch's thumb is one too — neither masks anything, so neither needs a
   * second element.
   */
  const inputComponent = type === 'checkbox'
    ? (
      <span className="df-choice-control">
        {input}
        <span className="df-choice-mark" aria-hidden="true" />
      </span>
    )
    : input;

  if (!label) {
    return inputComponent;
  }

  return (
    <div
      className={classNames('df-choice', className)}
      {...dataAttributes}
    >
      {inputComponent}
      <label className="df-choice-label" htmlFor={id}>
        {label}
      </label>
      {hint && (
        <div
          className="df-help"
          id={`${id}Hint`}
        >
          {hint}
        </div>
      )}
    </div>
  );
}
