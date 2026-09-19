import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
} from 'react';
import classNames from 'classnames';

import type { ChangeEvent, ComponentPropsWithoutRef, ReactNode } from 'react';

import DFormLabel from '../internal/DFormLabel';
import hasLabelContent from '../../utils/hasLabelContent';
import warnLabelUsage from '../../utils/warnLabelUsage';

import type { BaseProps, InputCheckType } from '../interface';

type Props =
& ComponentPropsWithoutRef<'input'>
& BaseProps
& {
  id?: string;
  type: InputCheckType;
  name?: string;
  /**
   * The label of the control. Any node is accepted, so it can carry a link, an
   * info trigger or other markup — the terms-and-conditions pattern.
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
