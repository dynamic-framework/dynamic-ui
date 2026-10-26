import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { useMemo, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import DDatePickerTime from './components/DDatePickerTime.js';
import ForwardedDDatePickerInput from './components/DDatePickerInput.js';
import DDatePickerHeaderSelector, { PickerType } from './components/DDatePickerHeaderSelector.js';

function DDatePicker(_a) {
    var { inputLabel, inputHint, inputAriaLabel, ariaLabelInputTime, inputActionAriaLabel = 'open calendar', inputId = 'input-calendar', timeId = 'input-time', timeInputLabel, minYearSelect, maxYearSelect, iconHeaderSize, iconMaterialStyle, iconInput, headerPrevMonthAriaLabel, headerNextMonthAriaLabel, invalid = false, valid = false, renderCustomHeader: renderCustomHeaderProp, className, dateFormatCalendar: dateFormatCalendarProp, style, dataAttributes, placeholder, showHeaderSelectors, formatHeaderDate } = _a, props = __rest(_a, ["inputLabel", "inputHint", "inputAriaLabel", "ariaLabelInputTime", "inputActionAriaLabel", "inputId", "timeId", "timeInputLabel", "minYearSelect", "maxYearSelect", "iconHeaderSize", "iconMaterialStyle", "iconInput", "headerPrevMonthAriaLabel", "headerNextMonthAriaLabel", "invalid", "valid", "renderCustomHeader", "className", "dateFormatCalendar", "style", "dataAttributes", "placeholder", "showHeaderSelectors", "formatHeaderDate"]);
    // Some test runtimes can resolve react-datepicker as a module object.
    // Normalize to a renderable component for both function and { default } shapes.
    const SafeDatePicker = useMemo(() => {
        const interopDefault = DatePicker.default;
        if (interopDefault !== undefined) {
            return interopDefault;
        }
        if (typeof DatePicker === 'function') {
            return DatePicker;
        }
        return DatePicker;
    }, []);
    const pickerType = useMemo(() => {
        if (props.showQuarterYearPicker)
            return PickerType.Quarter;
        if (props.showMonthYearPicker)
            return PickerType.Month;
        if (props.showYearPicker)
            return PickerType.Year;
        return PickerType.Default;
    }, [
        props.showQuarterYearPicker,
        props.showMonthYearPicker,
        props.showYearPicker,
    ]);
    const DatePickerHeader = useCallback((headerProps) => (jsx(DDatePickerHeaderSelector, Object.assign({}, headerProps, { monthsShown: props.monthsShown, prevMonthAriaLabel: headerPrevMonthAriaLabel, nextMonthAriaLabel: headerNextMonthAriaLabel, iconSize: iconHeaderSize, minYearSelect: minYearSelect, maxYearSelect: maxYearSelect, pickerType: pickerType, showHeaderSelectors: showHeaderSelectors, formatHeaderDate: formatHeaderDate, locale: props.locale }))), [
        headerPrevMonthAriaLabel,
        headerNextMonthAriaLabel,
        iconHeaderSize,
        minYearSelect,
        maxYearSelect,
        pickerType,
        showHeaderSelectors,
        formatHeaderDate,
        props.monthsShown,
        props.locale,
    ]);
    const defaultRenderCustomHeader = useCallback((headerProps) => (jsx(DatePickerHeader, Object.assign({}, headerProps))), [DatePickerHeader]);
    const renderCustomHeader = useMemo(() => (renderCustomHeaderProp || defaultRenderCustomHeader), [defaultRenderCustomHeader, renderCustomHeaderProp]);
    return (jsx(SafeDatePicker, Object.assign({}, dataAttributes, props, { calendarClassName: "d-date-picker", renderCustomHeader: renderCustomHeader, placeholderText: placeholder, customInput: (jsx(ForwardedDDatePickerInput, { id: inputId, "aria-label": inputAriaLabel, iconEndAriaLabel: inputActionAriaLabel, iconMaterialStyle: iconMaterialStyle, iconEnd: iconInput, inputLabel: inputLabel, className: className, style: style, invalid: invalid, valid: valid, hint: inputHint })), customTimeInput: (jsx(DDatePickerTime, { id: timeId, "aria-label": ariaLabelInputTime })) })));
}

export { DDatePicker as default };
//# sourceMappingURL=DDatePicker.js.map
