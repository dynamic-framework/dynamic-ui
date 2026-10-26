import { __rest } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import Select from 'react-select';
import { useId, useMemo, useCallback } from 'react';
import classNames from 'classnames';
import DIcon from '../DIcon/DIcon.js';
import DSelectOptionCheck from './components/DSelectOptionCheck.js';
import DSelectOptionIcon from './components/DSelectOptionIcon.js';
import DSelectSingleValueIconText from './components/DSelectSingleValueIconText.js';
import DSelectDropdownIndicator from './components/DSelectDropdownIndicator.js';
import DSelectClearIndicator from './components/DSelectClearIndicator.js';
import DSelectMultiValueRemove from './components/DSelectMultiValueRemove.js';
import DSelectLoadingIndicator from './components/DSelectLoadingIndicator.js';
import DSelectOptionEmoji from './components/DSelectOptionEmoji.js';
import DSelectSingleValueEmoji from './components/DSelectSingleValueEmoji.js';
import DSelectSingleValueEmojiText from './components/DSelectSingleValueEmojiText.js';
import DSelectPlaceholder from './components/DSelectPlaceholder.js';
import createAriaGuidance from './createAriaGuidance.js';
import DFormLabel from '../internal/DFormLabel.js';
import hasLabelContent from '../../utils/hasLabelContent.js';
import isTextLabel from '../../utils/isTextLabel.js';
import warnLabelUsage from '../../utils/warnLabelUsage.js';

function DSelect(_a) {
    var { id: idProp, inputId: inputIdProp, className, style, label, hint, iconFamilyClass, iconFamilyPrefix, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconStartTabIndex, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, invalid, valid, menuWithMaxContent = false, disabled, clearable, loading, floatingLabel = false, rtl, searchable, multi, components, defaultValue, placeholder, onIconStartClick, onIconEndClick, dataAttributes, ariaLabel, ariaLiveMessages } = _a, props = __rest(_a, ["id", "inputId", "className", "style", "label", "hint", "iconFamilyClass", "iconFamilyPrefix", "iconStart", "iconStartFamilyClass", "iconStartFamilyPrefix", "iconStartAriaLabel", "iconStartTabIndex", "iconEnd", "iconEndFamilyClass", "iconEndFamilyPrefix", "iconEndAriaLabel", "iconEndTabIndex", "invalid", "valid", "menuWithMaxContent", "disabled", "clearable", "loading", "floatingLabel", "rtl", "searchable", "multi", "components", "defaultValue", "placeholder", "onIconStartClick", "onIconEndClick", "dataAttributes", "ariaLabel", "ariaLiveMessages"]);
    const innerId = useId();
    const id = useMemo(() => idProp || innerId, [idProp, innerId]);
    // The `<label>` must point at the element react-select renders the input
    // with, so an explicit `inputId` wins over `id` for both.
    const inputId = inputIdProp || id;
    // A text label or `aria-labelledby` names the control without going through
    // `aria-label`, which is all react-select's focus announcement reads, so it
    // is handed those names explicitly. Messages passed by the consumer still
    // take precedence.
    const textLabel = hasLabelContent(label) && isTextLabel(label) ? String(label) : undefined;
    const labelledBy = props['aria-labelledby'];
    const liveMessages = useMemo(() => (textLabel || labelledBy
        ? Object.assign({ guidance: createAriaGuidance({ labelledBy, label: textLabel }) }, ariaLiveMessages) : ariaLiveMessages), [textLabel, labelledBy, ariaLiveMessages]);
    const handleOnIconStartClick = useCallback(() => {
        onIconStartClick === null || onIconStartClick === void 0 ? void 0 : onIconStartClick(defaultValue);
    }, [onIconStartClick, defaultValue]);
    const handleOnIconEndClick = useCallback(() => {
        onIconEndClick === null || onIconEndClick === void 0 ? void 0 : onIconEndClick(defaultValue);
    }, [onIconEndClick, defaultValue]);
    if (process.env.NODE_ENV !== 'production') {
        warnLabelUsage({
            component: 'DSelect',
            label,
            // `{...props}` is spread after `ariaLabel`, so a native `aria-label` in it
            // is the one that reaches the input, even when it is `undefined`.
            hasAccessibleName: !!('aria-label' in props ? props['aria-label'] : ariaLabel)
                || !!labelledBy,
            accessibleNameProp: 'ariaLabel',
            floatingLabel,
        });
    }
    return (jsxs("div", Object.assign({ className: classNames('d-select', className, {
            'd-select-floating': floatingLabel,
            disabled: disabled || loading,
        }), style: style }, dataAttributes, { children: [hasLabelContent(label) && (jsx(DFormLabel, { htmlFor: inputId, children: label })), jsxs("div", { className: classNames({
                    'input-group': true,
                    'has-validation': invalid,
                    disabled: disabled || loading,
                }), children: [iconStart && (jsx("button", { type: "button", className: "input-group-text", id: `${id}Start`, onClick: handleOnIconStartClick, disabled: disabled || loading, "aria-label": iconStartAriaLabel, tabIndex: iconStartTabIndex, children: jsx(DIcon, { icon: iconStart, familyClass: iconStartFamilyClass, familyPrefix: iconStartFamilyPrefix }) })), jsx(Select, Object.assign({ id: `${id}Container`, inputId: inputId, "aria-label": ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : (hasLabelContent(label) || props['aria-labelledby'] ? undefined : 'Search for an option'), ariaLiveMessages: liveMessages, styles: {
                            control: (base) => (Object.assign(Object.assign({}, base), { minHeight: 'unset' })),
                            container: (base) => (Object.assign(Object.assign({}, base), { flex: 1 })),
                            menu: (base) => (Object.assign(Object.assign({}, base), { width: menuWithMaxContent ? 'max-context' : '100%', zIndex: 1000 })),
                        }, className: classNames('d-select-component', {
                            'is-invalid': invalid,
                            'is-valid': valid,
                        }), classNamePrefix: "d-select", isDisabled: disabled || loading, isClearable: clearable, isLoading: loading, isRtl: rtl, isSearchable: searchable, isMulti: multi, defaultValue: defaultValue, placeholder: floatingLabel ? '' : placeholder, unstyled: true, components: Object.assign({ Placeholder: DSelectPlaceholder, DropdownIndicator: DSelectDropdownIndicator, ClearIndicator: DSelectClearIndicator, MultiValueRemove: DSelectMultiValueRemove, LoadingIndicator: DSelectLoadingIndicator }, components) }, props)), (iconEnd && !loading) && (jsx("button", { type: "button", className: "input-group-text", id: `${id}End`, onClick: handleOnIconEndClick, disabled: disabled || loading, "aria-label": iconEndAriaLabel, tabIndex: iconEndTabIndex, children: iconEnd && (jsx(DIcon, { icon: iconEnd, familyClass: iconEndFamilyClass, familyPrefix: iconEndFamilyPrefix })) }))] }), hint && (jsx("div", { className: "form-text", id: `${id}Hint`, children: hint }))] })));
}
var DSelect$1 = Object.assign(DSelect, {
    OptionCheck: DSelectOptionCheck,
    OptionIcon: DSelectOptionIcon,
    SingleValueIconText: DSelectSingleValueIconText,
    DropdownIndicator: DSelectDropdownIndicator,
    ClearIndicator: DSelectClearIndicator,
    MultiValueRemove: DSelectMultiValueRemove,
    LoadingIndicator: DSelectLoadingIndicator,
    OptionEmoji: DSelectOptionEmoji,
    SingleValueEmoji: DSelectSingleValueEmoji,
    SingleValueEmojiText: DSelectSingleValueEmojiText,
    Placeholder: DSelectPlaceholder,
});

export { DSelect$1 as default };
//# sourceMappingURL=DSelect.js.map
