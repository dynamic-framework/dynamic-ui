import type { AriaGuidanceProps } from 'react-select';

/**
 * Builds react-select's `guidance` live message around a given control name.
 *
 * react-select announces "<aria-label> is focused" on the first focus of the
 * input, falling back to "Select" when there is no `aria-label`. A text `label`
 * names the control through `<label>` instead, which react-select cannot see,
 * so the announcement would read "Select" rather than the field name.
 *
 * react-select does not export its default messages, so this mirrors them for
 * every context and only swaps the name; an `aria-label` that reaches the
 * input still wins, as in the default.
 */
export default function createAriaGuidance(name: string) {
  return ({
    'aria-label': ariaLabel,
    context,
    isSearchable,
    isMulti,
    tabSelectsValue,
    isInitialFocus,
  }: AriaGuidanceProps): string => {
    switch (context) {
      case 'menu':
        return `Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu${tabSelectsValue ? ', press Tab to select the option and exit the menu' : ''}.`;
      case 'input':
        return isInitialFocus
          ? `${ariaLabel || name} is focused ${isSearchable ? ',type to refine list' : ''}, press Down to open the menu, ${isMulti ? ' press left to focus selected values' : ''}`
          : '';
      case 'value':
        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
      default:
        return '';
    }
  };
}
