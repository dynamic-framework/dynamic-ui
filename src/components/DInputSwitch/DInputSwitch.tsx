import {
  useCallback,
  useId,
  useMemo,
} from 'react';
import classNames from 'classnames';
import type { ChangeEvent, ReactNode } from 'react';

import DFormLabel from '../internal/DFormLabel';
import hasLabelContent from '../../utils/hasLabelContent';
import warnLabelUsage from '../../utils/warnLabelUsage';
import useControlledState from '../../hooks/useControlledState';

import type { BaseProps } from '../interface';

type Props =
& BaseProps
& {
  id?: string;
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
  name?: string;
  /**
   * Checked state of the switch.
   *
   * Passed together with `onChange` the switch is fully controlled: when the
   * parent rejects a change the switch snaps back to this value.
   *
   * Passed on its own it is taken as the starting value and the switch keeps
   * toggling by itself — the historical behaviour. Prefer `defaultChecked` for
   * that, it says so out loud.
   */
  checked?: boolean;
  /** Starting checked state for uncontrolled usage. */
  defaultChecked?: boolean;
  disabled?: boolean;
  inputClassName?: string;
  invalid?: boolean;
  valid?: boolean;
  hint?: string;
  readonly?: boolean;
  onChange?: (isChecked: boolean) => void;
};

export default function DInputSwitch(
  {
    id: idProp,
    label,
    ariaLabel,
    name,
    checked,
    defaultChecked = false,
    disabled,
    invalid = false,
    valid = false,
    hint,
    readonly,
    className,
    style,
    dataAttributes,
    inputClassName,
    onChange,
  }: Props,
) {
  const innerId = useId();
  const id = useMemo(() => idProp || innerId, [idProp, innerId]);
  // See `useControlledState` for why `onChange` takes part in this decision.
  const isControlled = checked !== undefined && onChange !== undefined;
  const [isChecked, setIsChecked] = useControlledState(checked, isControlled, defaultChecked);

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

  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.checked;
    setIsChecked(value);
    onChange?.(value);
  }, [setIsChecked, onChange]);

  if (process.env.NODE_ENV !== 'production') {
    warnLabelUsage({
      component: 'DInputSwitch',
      label,
      hasAccessibleName: !!ariaLabel,
      accessibleNameProp: 'ariaLabel',
    });
  }

  return (
    <div
      className={classNames('form-check form-switch', className)}
      {...dataAttributes}
    >
      <input
        id={id}
        name={name}
        onChange={readonly ? () => false : changeHandler}
        className={classNames(
          'form-check-input',
          {
            'is-invalid': invalid,
            'is-valid': valid,
          },
          inputClassName,
        )}
        style={style}
        type="checkbox"
        role="switch"
        checked={isChecked}
        disabled={disabled}
        aria-label={ariaLabel}
        {...ariaDescribedby && { 'aria-describedby': ariaDescribedby }}
      />
      {hasLabelContent(label) && (
        <DFormLabel
          className="form-check-label"
          htmlFor={id}
        >
          {label}
        </DFormLabel>
      )}
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
