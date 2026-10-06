import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef, useCallback, useEffect, useMemo } from 'react';
import ForwardedDInput from '../DInput/DInput.js';
import { PREFIX_BS } from '../config.js';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate.js';
import useControlledState from '../../hooks/useControlledState.js';
import useDisableInputWheel from '../../hooks/useDisableInputWheel.js';
import { useDContext } from '../../contexts/DContext.js';

function DInputCounter(_a, ref) {
    var { minValue, maxValue, value, defaultValue, invalid, iconStart: iconStartProp, iconEnd: iconEndProp, iconStartAriaLabel = 'decrease action', iconEndAriaLabel = 'increase action', style, onChange } = _a, props = __rest(_a, ["minValue", "maxValue", "value", "defaultValue", "invalid", "iconStart", "iconEnd", "iconStartAriaLabel", "iconEndAriaLabel", "style", "onChange"]);
    const { handleOnWheel, } = useDisableInputWheel(ref);
    const inputRef = useProvidedRefOrCreate(ref);
    // See `useControlledState` for why `onChange` takes part in this decision.
    const isControlled = value !== undefined && onChange !== undefined;
    const [currentValue, setCurrentValue] = useControlledState(value, isControlled, defaultValue !== null && defaultValue !== void 0 ? defaultValue : minValue);
    // The step handlers move *from* the current value rather than replacing it,
    // so they need the latest one even when several clicks land in the same React
    // batch and no render has happened in between — the functional update this
    // replaced handled that on its own. Written on every render so it follows the
    // props, and by `commitValue` so a second step in the same batch starts from
    // where the first left off instead of collapsing into it.
    const currentValueRef = useRef(currentValue);
    currentValueRef.current = currentValue;
    // `onChange` used to be called from an effect watching the internal value,
    // which made controlling the counter impossible: a controlled counter never
    // moves that value, so the effect never fired. Reporting from the handlers
    // instead works in both modes.
    const commitValue = useCallback((newValue) => {
        // Clicking at a bound, or typing the value that is already there, is not a
        // change. The effect this replaced watched the value itself and so stayed
        // quiet too; without this a batch of clicks against `minValue` would report
        // the same number once per click.
        if (newValue === currentValueRef.current) {
            return;
        }
        // Only the uncontrolled path moves the ref ahead of a render. There the
        // component owns the value, so a second step in the same batch has to build
        // on the first. Controlled, the prop is the truth and every step proposes
        // from it: a parent that rejects without re-rendering — `onChange={() => {}}`,
        // or a setter returning the previous state — never re-runs the assignment
        // above, so a speculative ref would climb away from the value on screen and
        // each further click would report a number further from it.
        if (!isControlled) {
            currentValueRef.current = newValue;
        }
        setCurrentValue(newValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    }, [isControlled, setCurrentValue, onChange]);
    // Consumers have always been handed the starting value through `onChange` on
    // mount, and some seed their state with it, so that one call stays. The ref
    // keeps it to the first run: the old effect also re-fired on every render
    // that passed a fresh inline `onChange`. Nothing is marked as reported until
    // there is a handler to report to, so a counter mounted without `onChange`
    // still hands over its starting value once one is attached.
    const hasReportedInitialValue = useRef(false);
    useEffect(() => {
        if (hasReportedInitialValue.current || !onChange) {
            return;
        }
        hasReportedInitialValue.current = true;
        onChange(currentValue);
    }, [onChange, currentValue]);
    // `value` used to default to `minValue`, so a counter left to its own devices
    // re-seeded — and reported — whenever `minValue` moved. Consumers use it as a
    // live bound, so that stays; an explicit `value` or `defaultValue` opts out,
    // exactly as passing `value` did before. The ref keeps this to real changes,
    // so mounting still reports once and a click is never undone.
    const hasExplicitStartingValue = value !== undefined || defaultValue !== undefined;
    const previousMinValue = useRef(minValue);
    useEffect(() => {
        if (previousMinValue.current === minValue) {
            return;
        }
        previousMinValue.current = minValue;
        if (hasExplicitStartingValue) {
            return;
        }
        commitValue(minValue);
    }, [hasExplicitStartingValue, minValue, commitValue]);
    const handleOnChange = useCallback((newValue) => {
        commitValue(Number(newValue || '0'));
    }, [commitValue]);
    const handleOnIconStartClick = useCallback(() => {
        commitValue(Math.max(currentValueRef.current - 1, minValue));
    }, [commitValue, minValue]);
    const handleOnIconEndClick = useCallback(() => {
        commitValue(Math.min(currentValueRef.current + 1, maxValue));
    }, [commitValue, maxValue]);
    const generateStyleVariables = useMemo(() => (Object.assign(Object.assign({}, style), { [`--${PREFIX_BS}form-control-component-text-align`]: 'center' })), [style]);
    const valueString = useMemo(() => (currentValue.toString()), [currentValue]);
    const internalIsInvalid = useMemo(() => (!(currentValue >= minValue && currentValue <= maxValue)), [currentValue, minValue, maxValue]);
    const { iconMap: { input } } = useDContext();
    const iconEnd = useMemo(() => iconEndProp || input.increase, [iconEndProp, input.increase]);
    const iconStart = useMemo(() => iconStartProp || input.decrease, [iconStartProp, input.decrease]);
    return (jsx(ForwardedDInput, Object.assign({ ref: inputRef, value: valueString, style: generateStyleVariables, iconStart: iconStart, iconEnd: iconEnd, invalid: internalIsInvalid || invalid, type: "number", onChange: handleOnChange, onWheel: handleOnWheel, onIconStartClick: handleOnIconStartClick, onIconEndClick: handleOnIconEndClick, iconStartAriaLabel: iconStartAriaLabel, iconEndAriaLabel: iconEndAriaLabel }, currentValue === minValue && {
        iconStartDisabled: true,
    }, currentValue === maxValue && {
        iconEndDisabled: true,
    }, props)));
}
const ForwardedDInputCounter = forwardRef(DInputCounter);
ForwardedDInputCounter.displayName = 'DInputCounter';

export { ForwardedDInputCounter as default };
//# sourceMappingURL=DInputCounter.js.map
