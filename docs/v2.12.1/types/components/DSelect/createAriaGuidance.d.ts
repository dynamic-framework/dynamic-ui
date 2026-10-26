import type { AriaGuidanceProps } from 'react-select';
type Names = {
    /** The `aria-labelledby` that reaches the input, if any. */
    labelledBy?: string;
    /** The text of the visible `label`, if it is text. */
    label?: string;
};
/**
 * Builds react-select's `guidance` live message around the control's name.
 *
 * react-select announces "<aria-label> is focused" on the first focus of the
 * input, falling back to "Select" when there is no `aria-label`. Neither a text
 * `label` nor `aria-labelledby` reaches that message, so the announcement would
 * disagree with the name assistive technology exposes.
 *
 * The name follows the accessible name precedence: `aria-labelledby`, then
 * `aria-label`, then the `<label>`. react-select does not export its default
 * messages, so this mirrors them for every context and only swaps the name.
 */
export default function createAriaGuidance({ labelledBy, label }: Names): ({ "aria-label": ariaLabel, context, isSearchable, isMulti, tabSelectsValue, isInitialFocus, }: AriaGuidanceProps) => string;
export {};
