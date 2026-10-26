/**
 * Name of the elements an `aria-labelledby` points at, joined as the accessible
 * name computation does. Read when the message is built rather than when the
 * select renders, since the referenced elements may render after it.
 *
 * Each element contributes its own `aria-label` when it has one, and its text
 * otherwise. That covers the targets a select is labelled by in practice — a
 * heading, a span, a labelled region — without shipping the full accessible
 * name algorithm; names derived from descendants' `aria-label`, `alt` or
 * hidden content are not resolved, so pass `ariaLiveMessages` for those.
 */
function resolveLabelledBy(labelledBy) {
    if (typeof document === 'undefined')
        return '';
    return labelledBy
        .split(/\s+/)
        .map((ref) => {
        var _a, _b;
        const element = document.getElementById(ref);
        return ((_a = element === null || element === void 0 ? void 0 : element.getAttribute('aria-label')) === null || _a === void 0 ? void 0 : _a.trim()) || ((_b = element === null || element === void 0 ? void 0 : element.textContent) === null || _b === void 0 ? void 0 : _b.trim());
    })
        .filter(Boolean)
        .join(' ');
}
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
function createAriaGuidance({ labelledBy, label }) {
    return ({ 'aria-label': ariaLabel, context, isSearchable, isMulti, tabSelectsValue, isInitialFocus, }) => {
        switch (context) {
            case 'menu':
                return `Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu${tabSelectsValue ? ', press Tab to select the option and exit the menu' : ''}.`;
            case 'input': {
                if (!isInitialFocus)
                    return '';
                const name = (labelledBy && resolveLabelledBy(labelledBy)) || ariaLabel || label || 'Select';
                return `${name} is focused ${isSearchable ? ',type to refine list' : ''}, press Down to open the menu, ${isMulti ? ' press left to focus selected values' : ''}`;
            }
            case 'value':
                return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
            default:
                return '';
        }
    };
}

export { createAriaGuidance as default };
//# sourceMappingURL=createAriaGuidance.js.map
