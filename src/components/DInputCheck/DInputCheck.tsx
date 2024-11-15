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

  const inputComponent = useMemo(() => (
    <input
      ref={innerRef}
      onChange={handleChange}
      className={classNames(
        'form-check-input',
        {
          'is-invalid': invalid,
          'is-valid': valid,
        },
        className,
      )}
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
    className,
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

  if (!label) {
    return inputComponent;
  }

  return (
    <div
      className="form-check"
      {...dataAttributes}
    >
      {inputComponent}
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
      {hint && (
        <div
          className="form-text"
          id={`${id}Hint`}
        >
          {hint}
        </div>
      )}
    </div>
  );
}
