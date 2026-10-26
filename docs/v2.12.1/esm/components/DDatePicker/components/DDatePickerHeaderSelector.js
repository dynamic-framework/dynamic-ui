import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useMemo, useCallback } from 'react';
import classNames from 'classnames';
import { getYear, format, getMonth } from 'date-fns';
import DSelect from '../../DSelect/DSelect.js';
import DButtonIcon from '../../DButtonIcon/DButtonIcon.js';
import { useDContext } from '../../../contexts/DContext.js';

var PickerType;
(function (PickerType) {
    PickerType["Default"] = "default";
    PickerType["Quarter"] = "quarter";
    PickerType["Month"] = "month";
    PickerType["Year"] = "year";
})(PickerType || (PickerType = {}));
function DDatePickerHeaderSelector({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, decreaseYear, increaseYear, monthDate, formatHeaderDate = 'EE, LLLL d', pickerType, prevMonthButtonDisabled, nextMonthButtonDisabled, monthsShown = 1, iconPrev, iconNext, prevYearButtonDisabled, nextYearButtonDisabled, prevMonthAriaLabel = 'decrease month', nextMonthAriaLabel = 'increase month', prevYearAriaLabel = 'decrease year', nextYearAriaLabel = 'increase year', iconSize, style, className, minYearSelect = 1900, maxYearSelect = 2100, showHeaderSelectors = false, customHeaderCount, locale, }) {
    const { iconMap: { chevronLeft, chevronRight, }, } = useDContext();
    const arrayYears = useMemo(() => Array.from({ length: maxYearSelect - minYearSelect + 1 }, (_, index) => minYearSelect + index), [maxYearSelect, minYearSelect]);
    const years = useMemo(() => arrayYears.map((year) => ({
        label: year.toString(),
        value: year,
    })), [arrayYears]);
    const defaultYear = useMemo(() => years.find((year) => year.value === getYear(monthDate)), [monthDate, years]);
    const arrayMonths = useMemo(() => Array.from({ length: 12 }, (_, i) => format(new Date(2000, i), 'LLLL', { locale })), [locale]);
    const months = useMemo(() => arrayMonths.map((month, i) => ({
        label: month,
        value: i,
    })), [arrayMonths]);
    const defaultMonth = useMemo(() => ({
        label: arrayMonths[getMonth(monthDate)],
        value: getMonth(monthDate),
    }), [arrayMonths, monthDate]);
    const getYearRange = useCallback(() => {
        const blockIndex = Math.floor((date.getFullYear() - 1) / 12);
        const startYear = blockIndex * 12 + 1;
        const endYear = startYear + 11;
        return [startYear, endYear];
    }, [date]);
    const [startYear, endYear] = getYearRange();
    if (pickerType === PickerType.Year) {
        return (jsxs("div", { className: classNames('react-datepicker__header-selector react-datepicker__header-year-selector', className), style: style, children: [jsx(DButtonIcon, { icon: iconPrev || chevronLeft, size: iconSize, variant: "link", onClick: decreaseYear, disabled: prevYearButtonDisabled, "aria-label": prevYearAriaLabel, className: "header-button" }), jsx("p", { children: `${startYear} - ${endYear}` }), jsx(DButtonIcon, { icon: iconNext || chevronRight, size: iconSize, variant: "link", onClick: increaseYear, disabled: nextYearButtonDisabled, "aria-label": nextYearAriaLabel, className: "header-button" })] }));
    }
    if (pickerType === PickerType.Quarter || pickerType === PickerType.Month) {
        return (jsxs("div", { className: classNames(`react-datepicker__header-selector react-datepicker__header-${pickerType}-selector`, className), style: style, children: [jsx(DButtonIcon, { icon: iconPrev || chevronLeft, size: iconSize, variant: "link", onClick: decreaseYear, disabled: prevMonthButtonDisabled, "aria-label": prevMonthAriaLabel, className: "header-button", style: { visibility: customHeaderCount === 0 ? 'visible' : 'hidden' } }), jsx("div", { className: "react-datepicker__header-year-selector", children: showHeaderSelectors ? (jsx(DSelect, { options: years, value: defaultYear, defaultValue: defaultYear, onChange: (year) => changeYear(Number(year === null || year === void 0 ? void 0 : year.value)), searchable: false })) : (jsx("p", { children: defaultYear === null || defaultYear === void 0 ? void 0 : defaultYear.label })) }), jsx(DButtonIcon, { icon: iconNext || chevronRight, size: iconSize, variant: "link", onClick: increaseYear, disabled: nextMonthButtonDisabled, "aria-label": nextMonthAriaLabel, className: "header-button", style: { visibility: customHeaderCount === monthsShown - 1 ? 'visible' : 'hidden' } })] }));
    }
    return (jsxs(Fragment, { children: [jsxs("div", { className: "datepicker-top-header", children: [showHeaderSelectors && (jsx(DSelect, { options: years, value: defaultYear, defaultValue: defaultYear, onChange: (year) => changeYear(Number(year === null || year === void 0 ? void 0 : year.value)), searchable: false, className: "custom-year-selector" })), jsx("h4", { className: "datepicker-top-header-title", children: format(monthDate, formatHeaderDate, { locale }) })] }), jsxs("div", { className: classNames('react-datepicker__header-selector react-datepicker__header-day-selector', className), style: style, children: [jsx(DButtonIcon, { icon: iconPrev || chevronLeft, size: iconSize, variant: "link", onClick: decreaseMonth, disabled: prevMonthButtonDisabled, "aria-label": prevMonthAriaLabel, className: "header-button", style: { visibility: customHeaderCount === 0 ? 'visible' : 'hidden' } }), showHeaderSelectors ? (jsx(DSelect, { options: months, value: defaultMonth, defaultValue: defaultMonth, onChange: (month) => changeMonth((month === null || month === void 0 ? void 0 : month.value) || 0), searchable: false, className: "custom-month-selector" })) : (jsx("p", { children: `${defaultMonth.label} ${defaultYear === null || defaultYear === void 0 ? void 0 : defaultYear.label}` })), jsx(DButtonIcon, { icon: iconNext || chevronRight, size: iconSize, variant: "link", onClick: increaseMonth, disabled: nextMonthButtonDisabled, "aria-label": nextMonthAriaLabel, className: "header-button", style: { visibility: customHeaderCount === monthsShown - 1 ? 'visible' : 'hidden' } })] })] }));
}

export { PickerType, DDatePickerHeaderSelector as default };
//# sourceMappingURL=DDatePickerHeaderSelector.js.map
