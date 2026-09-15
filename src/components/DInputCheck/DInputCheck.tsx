import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
} from 'react';
import classNames from 'classnames';

import type { ChangeEvent, ComponentPropsWithoutRef } from 'react';

import DFormLabel from '../internal/DFormLabel';
import hasLabelContent from '../../utils/hasLabelContent';
import warnLabelUsage from '../../utils/warnLabelUsage';

import type { BaseProps, DLabel, InputCheckType } from '../interface';

type Props =
& ComponentPropsWithoutRef<'input'>
& BaseProps
& {
  id?: string;
  type: InputCheckType;
  name?: string;
  label?: DLabel;
  ariaLabel?: string;
  checked?: boolean;
  inputClassName?: string;
  disabled?: boolean;
  invalid?: boolean;
  valid?: boolean;
  hint?: string;
  /** Only applies when `type` is `checkbox`; ignored for `radio`. */
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
      innerRef.current.indeterminate = type === 'checkbox' && Boolean(indeterminate);
    }
  }, [indeterminate, type]);

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
        inputClassName,
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

  if (process.env.NODE_ENV !== 'production') {
    warnLabelUsage({
      component: 'DInputCheck',
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
    <div
      className={classNames('form-check', className)}
      {...dataAttributes}
    >
      {inputComponent}
      <DFormLabel className="form-check-label" htmlFor={id}>
        {label}
      </DFormLabel>
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
