import {
  useCallback,
  useEffect,
  useRef,
} from 'react';
import classNames from 'classnames';

import type { ChangeEvent } from 'react';

import type { BaseProps, InputCheckType } from '../interface';

type Props =
& BaseProps
& {
  type: InputCheckType;
  name?: string;
  label?: string;
  ariaLabel?: string;
  checked?: boolean;
  id: string;
  disabled?: boolean;
  indeterminate?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function DInputCheck(
  {
    type,
    name,
    label,
    ariaLabel,
    checked = false,
    id,
    disabled = false,
    indeterminate,
    value,
    onChange,
    className,
    style,
  }: Props,
) {
  const innerRef = useRef<HTMLInputElement>(null);
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  }, [onChange]);

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

  if (!label) {
    return (
      <input
        ref={innerRef}
        onChange={handleChange}
        className={classNames('form-check-input', className)}
        style={style}
        id={id}
        disabled={disabled}
        type={type}
        name={name}
        value={value}
        aria-label={ariaLabel}
      />
    );
  }

  return (
    <div className="form-check">
      <input
        ref={innerRef}
        onChange={handleChange}
        className={classNames('form-check-input', className)}
        style={style}
        id={id}
        disabled={disabled}
        type={type}
        name={name}
        value={value}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
