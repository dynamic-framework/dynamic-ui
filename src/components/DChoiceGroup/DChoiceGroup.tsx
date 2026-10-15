import {
  Fragment,
  useCallback,
  useId,
  useMemo,
} from 'react';
import classNames from 'classnames';

import type { ReactNode } from 'react';

import useControlledState from '../../hooks/useControlledState';
import { useResponsiveProp } from '../../hooks/useResponsiveProp';

import type { ResponsiveProp } from '../../hooks/useResponsiveProp';
import type { BaseProps, ComponentColor } from '../interface';

export type DChoiceGroupSize = 'sm' | 'md' | 'lg';

export type DChoiceGroupOption = {
  /** Submitted as the control's value, and what identifies the option. */
  value: string;
  /** What the reader sees. Text, or anything that fits on one line. */
  label: ReactNode;
  disabled?: boolean;
};

type CommonProps = BaseProps & {
  options: DChoiceGroupOption[];
  /**
   * Shared by every input, which is what makes a set of radios one group.
   *
   * Generated when omitted. Pass it when the form is submitted natively and
   * the server expects a particular field name.
   */
  name?: string;
  /** A visible name for the group. Also becomes its accessible name. */
  label?: string;
  /** Names the group when there is no visible `label`. */
  ariaLabel?: string;
  /** Help text under the options. Announced with the group. */
  hint?: string;
  /**
   * Resolved against the viewport when given per breakpoint.
   *
   * `{ xs: 'sm', lg: 'md' }` — compact where space is short, regular once
   * there is room.
   */
  size?: DChoiceGroupSize | ResponsiveProp<DChoiceGroupSize>;
  /**
   * Which theme colour the options take.
   *
   * Resting options use the soft variant of this colour and the selected one
   * the solid variant, so the group matches buttons of the same colour.
   */
  color?: ComponentColor;
  /** Disables the whole group. Individual options have their own `disabled`. */
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  /** Put the layout here: a grid, a single scrolling row, a wrapping row. */
  optionsClassName?: string;
  /** Applied to every option. */
  optionClassName?: string;
};

type SingleProps = {
  /** One option at a time: the inputs are radios. */
  multiple?: false;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

type MultipleProps = {
  /** Any number of options: the inputs are checkboxes. */
  multiple: true;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
};

export type Props = CommonProps & (SingleProps | MultipleProps);

/**
 * A group of options that reads as a row of buttons and behaves as a set of
 * radios — or of checkboxes, with `multiple`.
 *
 * ## Why it is not built out of buttons
 *
 * Looking like a button and being one are different things. Each option here
 * is a `<label>` bound to an `<input>`: the browser gives arrow-key movement
 * across a radio group, the checked state, the form value, and the announced
 * role, none of which a `<button>` has. The label is only what gets painted.
 *
 * The markup carries no button class for the same reason. What it does borrow
 * is the button *tokens*: every value in the stylesheet resolves to a
 * `--bs-btn-*` variable, with the soft variant answering for a resting option
 * and the solid one for a selected option. Buttons and choices then stay in
 * the same family without the choice pretending to be one.
 *
 * ## Layout is the consumer's
 *
 * A wrapping row, a three-column grid and a single scrolling line are the same
 * control with different composition. `optionsClassName` is where that goes —
 * the component does not try to own it.
 */
export default function DChoiceGroup(
  {
    options,
    name: nameProp,
    label,
    ariaLabel,
    hint,
    size = 'md',
    color = 'primary',
    disabled = false,
    invalid = false,
    required = false,
    multiple,
    value,
    defaultValue,
    onChange,
    className,
    optionsClassName,
    optionClassName,
    style,
    dataAttributes,
  }: Props,
) {
  const reactId = useId();
  const name = nameProp ?? reactId;
  const hintId = `${reactId}Hint`;

  /*
   * One state for both shapes.
   *
   * A single-select group is the same thing as a multi-select one that holds
   * at most one value, so the whole component works in arrays and only the
   * boundary — what arrives in `value`, what leaves through `onChange` —
   * knows the difference.
   */
  const selected = useMemo<string[]>(() => {
    if (value === undefined) return [];
    return Array.isArray(value) ? value : [value];
  }, [value]);

  const initial = useMemo<string[]>(() => {
    if (defaultValue === undefined) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  }, [defaultValue]);

  const [current, setCurrent] = useControlledState<string[]>(
    value === undefined ? undefined : selected,
    value !== undefined && onChange !== undefined,
    initial,
  );

  const emit = useCallback((next: string[]) => {
    setCurrent(next);
    if (!onChange) return;
    if (multiple) {
      (onChange as MultipleProps['onChange'])?.(next);
      return;
    }
    (onChange as SingleProps['onChange'])?.(next[0] ?? '');
  }, [multiple, onChange, setCurrent]);

  const handleChange = useCallback((optionValue: string) => () => {
    if (!multiple) {
      emit([optionValue]);
      return;
    }
    emit(current.includes(optionValue)
      ? current.filter((item) => item !== optionValue)
      : [...current, optionValue]);
  }, [current, emit, multiple]);

  /*
   * `true` keeps the listener on: a responsive size has to follow the viewport
   * while it changes, not only on the render that happened to mount it.
   */
  const { responsivePropValue } = useResponsiveProp(true);
  const resolvedSize = useMemo(() => (
    typeof size === 'string' ? size : responsivePropValue(size)
  ), [responsivePropValue, size]);

  return (
    <fieldset
      className={classNames(
        'd-choice-group',
        `d-choice-group-${color}`,
        // `md` is the default, and has no modifier to apply.
        { [`d-choice-group-${resolvedSize}`]: !!resolvedSize && resolvedSize !== 'md' },
        className,
      )}
      style={style}
      disabled={disabled}
      {...!label && ariaLabel && { 'aria-label': ariaLabel }}
      {...hint && { 'aria-describedby': hintId }}
      {...invalid && { 'data-invalid': '' }}
      {...dataAttributes}
    >
      {label && <legend className="d-choice-group-label">{label}</legend>}

      <div className={classNames('d-choice-group-options', optionsClassName)}>
        {options.map((option) => {
          const id = `${reactId}-${option.value}`;
          return (
            /*
             * Input first, label second, as siblings. Every selected, hovered
             * and focused state in the stylesheet is written as
             * `.d-choice-input:… + .d-choice`, so the order is load-bearing,
             * not a formatting choice.
             */
            <Fragment key={option.value}>
              <input
                className="d-choice-input"
                id={id}
                type={multiple ? 'checkbox' : 'radio'}
                name={name}
                value={option.value}
                checked={current.includes(option.value)}
                disabled={option.disabled}
                /*
                 * On radios, `required` on any one of them makes the group
                 * required — which is the intent. On checkboxes it would make
                 * each box required on its own, so every option would have to
                 * be ticked, which is not.
                 */
                required={required && !multiple}
                onChange={handleChange(option.value)}
                {...invalid && { 'aria-invalid': true }}
              />
              <label
                className={classNames('d-choice', optionClassName)}
                htmlFor={id}
              >
                {option.label}
              </label>
            </Fragment>
          );
        })}
      </div>

      {hint && <span className="d-choice-group-hint" id={hintId}>{hint}</span>}
    </fieldset>
  );
}
