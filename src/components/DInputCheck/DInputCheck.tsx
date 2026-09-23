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
  /**
   * Checked state of the control.
   *
   * Passed together with `onChange` the control is fully controlled: when the
   * parent rejects a change the DOM snaps back to this value.
   *
   * Passed on its own it is taken as the starting value and the control keeps
   * toggling by itself — the historical behaviour. Prefer `defaultChecked` for
   * that, it says so out loud.
   */
  checked?: boolean;
  /** Starting checked state for uncontrolled usage. */
  defaultChecked?: boolean;
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
    checked,
    defaultChecked,
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
  // See `useControlledState` for why `onChange` takes part in this decision.
  const isControlled = checked !== undefined && onChange !== undefined;
  const innerId = useId();
  const id = useMemo(() => idProp || innerId, [idProp, innerId]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);

    // Activating a checkbox clears the DOM `indeterminate` flag, and it has no
    // HTML attribute for React to restore the way it restores `checked` when a
    // controlled parent rejects the change. Without this the mixed state is
    // gone after the first click, since the effect below only re-runs when the
    // prop moves. Reapplied after `onChange` so a handler reading
    // `event.target.indeterminate` still sees what the browser left, and a
    // parent that does move the prop wins through that effect.
    if (innerRef.current) {
      innerRef.current.indeterminate = type === 'checkbox' && Boolean(indeterminate);
    }
  }, [onChange, indeterminate, type]);

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

  // Legacy path only: a `checked` with no `onChange` behind it still lands on
  // the element, but through the DOM, so the input stays uncontrolled and both
  // clicking it and the native radio-group behaviour keep working.
  useEffect(() => {
    if (isControlled || checked === undefined || !innerRef.current) {
      return;
    }
    innerRef.current.checked = checked;
  }, [isControlled, checked]);

  const inputComponent = useMemo(() => (
    <input
      ref={innerRef}
      {...isControlled
        ? { checked }
        : defaultChecked !== undefined && { defaultChecked }}
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
    isControlled,
    checked,
    defaultChecked,
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
