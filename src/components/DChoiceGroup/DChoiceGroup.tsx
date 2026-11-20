import {
  Fragment,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import classNames from 'classnames';

import type { ReactNode } from 'react';

import useControlledState from '../../hooks/useControlledState';
import { useResponsiveProp } from '../../hooks/useResponsiveProp';

import type { ResponsiveProp } from '../../hooks/useResponsiveProp';
import type { BaseProps, ComponentColor, ComponentSize } from '../interface';

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
  size?: ComponentSize | ResponsiveProp<ComponentSize>;
  color?: ComponentColor;
  /** Disables the whole group. Individual options have their own `disabled`. */
  disabled?: boolean;
  invalid?: boolean;
  /**
   * At least one option has to be chosen for the form to submit.
   *
   * Radios get this natively. Checkboxes cannot: `required` on a checkbox
   * means *that* box must be ticked, so putting it on each one would demand
   * all of them. A multi-select group enforces it through the constraint
   * validation API instead, on the first option that can take it — the form
   * blocks and the browser reports `requiredMessage`.
   */
  required?: boolean;
  /**
   * What the browser says when a required multi-select group is left empty.
   *
   * Only reaches the screen in that case; a required radio group uses the
   * browser's own wording for a missing selection.
   */
  requiredMessage?: string;
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
 * is the button *tokens*: spacing, radius, the focus ring, and the resting
 * state of each option, which is the soft variant of the group's colour — so
 * buttons and choices stay in the same family without the choice pretending
 * to be one.
 *
 * The selected state is the exception: it comes from a darker step of the
 * colour's own scale rather than from the solid button variant, because that
 * variant left three of the eight theme colours with a selection you could
 * not see. See the stylesheet.
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
    size,
    color = 'primary',
    disabled = false,
    invalid = false,
    required = false,
    requiredMessage = 'Select at least one option.',
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
   * A native form reset.
   *
   * The inputs are React-controlled, so the browser restores them to the
   * `defaultChecked` React wrote at mount — the DOM lands on the right values
   * — but no `change` event fires and this component's state never hears
   * about it. Three things go wrong, all of them silent:
   *
   *   - the state still holds the old selection, so the next render for any
   *     reason at all puts it back and the reset undoes itself;
   *   - a required multi-select counts a selection that is no longer checked,
   *     so an emptied group passes validation and the form submits;
   *   - `onChange` never fires, so anything the consumer derives from the
   *     value stays on the pre-reset answer.
   *
   * `reset` fires BEFORE the browser restores the controls, so the work is
   * deferred a microtask to land after them.
   */
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);
  const [, resyncDom] = useReducer((tick: number) => tick + 1, 0);

  /* Read inside the listener, which is subscribed once. */
  const reset = useRef({
    current, initial, isControlled: value !== undefined && onChange !== undefined, emit,
  });
  reset.current = {
    current, initial, isControlled: value !== undefined && onChange !== undefined, emit,
  };

  useEffect(() => {
    const form = fieldsetRef.current?.form;
    if (!form) return undefined;

    const handleReset = (event: Event) => {
      queueMicrotask(() => {
        if (event.defaultPrevented) return;
        const state = reset.current;

        /*
         * Controlled: the value is the consumer's, and a reset is not their
         * decision to change it. The DOM has moved, though, and React will
         * not notice on its own — so the group re-renders to write the
         * consumer's value back over what the browser just did.
         */
        if (state.isControlled) {
          resyncDom();
          return;
        }

        const same = state.initial.length === state.current.length
          && state.initial.every((item) => state.current.includes(item));
        if (same) return;

        /* Uncontrolled: back to `defaultValue`, and say so. */
        state.emit(state.initial);
      });
    };

    form.addEventListener('reset', handleReset);
    return () => form.removeEventListener('reset', handleReset);
  }, []);

  /*
   * "At least one" for a group of checkboxes.
   *
   * There is no HTML attribute for it: `required` on a checkbox is about that
   * checkbox. So the constraint is carried by one of them through
   * `setCustomValidity`, which is enough to make the whole form invalid, block
   * submission and get the browser to report it — without claiming that any
   * single box is the required one.
   *
   * It goes on the first option that can actually hold it. A disabled control
   * is barred from constraint validation, so hanging the group's only
   * constraint on one would silently drop it.
   */
  const constraintRef = useRef<HTMLInputElement>(null);
  const constraintIndex = useMemo(() => (
    options.findIndex((option) => !option.disabled)
  ), [options]);

  /*
   * Which element currently holds the constraint. Keys are option values, so
   * a change here is a change of DOM node — and the signal that the effect
   * has to move with it.
   */
  const constraintKey = options[constraintIndex]?.value;

  /* Counted against what is on screen, not against what state remembers. */
  const selectedCount = useMemo(() => (
    options.reduce((total, option) => (
      current.includes(option.value) ? total + 1 : total
    ), 0)
  ), [current, options]);

  useEffect(() => {
    const input = constraintRef.current;
    if (!input) return undefined;

    input.setCustomValidity(
      !multiple || !required || disabled || selectedCount
        ? ''
        : (requiredMessage || 'Select at least one option.'),
    );

    /*
     * Runs before the next pass and on unmount, against the element this pass
     * captured — which by then may no longer be the one the ref points at.
     * That is the point: it is how the previous holder gives the error back.
     */
    return () => { input.setCustomValidity(''); };
  }, [constraintKey, disabled, multiple, required, requiredMessage, selectedCount]);

  /*
   * `true` keeps the listener on: a responsive size has to follow the viewport
   * while it changes, not only on the render that happened to mount it.
   */
  const { responsivePropValue } = useResponsiveProp(true);
  const resolvedSize = useMemo(() => {
    if (!size) return undefined;
    return typeof size === 'string' ? size : responsivePropValue(size);
  }, [responsivePropValue, size]);

  return (
    <fieldset
      ref={fieldsetRef}
      className={classNames(
        'd-choice-group',
        `d-choice-group-${color}`,
        // No size, or a responsive one no breakpoint claims, means the regular
        // size — which is the base class on its own, with nothing added.
        { [`d-choice-group-${resolvedSize}`]: !!resolvedSize },
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
        {options.map((option, index) => {
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
                ref={index === constraintIndex ? constraintRef : undefined}
                className="d-choice-input"
                id={id}
                type={multiple ? 'checkbox' : 'radio'}
                name={name}
                value={option.value}
                checked={current.includes(option.value)}
                disabled={option.disabled}
                /*
                 * Radios only. On a checkbox this would demand that box in
                 * particular, so every option would have to be ticked; the
                 * group-level constraint above covers that case instead.
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
