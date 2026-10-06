import type { ReactNode } from 'react';
import type { Props as SelectProps, GroupBase } from 'react-select';
import DSelectOptionCheck from './components/DSelectOptionCheck';
import DSelectOptionIcon from './components/DSelectOptionIcon';
import DSelectSingleValueIconText from './components/DSelectSingleValueIconText';
import DSelectDropdownIndicator from './components/DSelectDropdownIndicator';
import DSelectClearIndicator from './components/DSelectClearIndicator';
import DSelectMultiValueRemove from './components/DSelectMultiValueRemove';
import DSelectLoadingIndicator from './components/DSelectLoadingIndicator';
import DSelectOptionEmoji from './components/DSelectOptionEmoji';
import DSelectSingleValueEmoji from './components/DSelectSingleValueEmoji';
import DSelectSingleValueEmojiText from './components/DSelectSingleValueEmojiText';
import DSelectPlaceholder from './components/DSelectPlaceholder';
import type { BaseProps, EndIconProps, FamilyIconProps, StartIconProps } from '../interface';
type Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> = BaseProps & FamilyIconProps & StartIconProps & EndIconProps & Omit<SelectProps<Option, IsMulti, Group>, 'isDisabled' | 'isClearable' | 'isLoading' | 'isRtl' | 'isSearchable' | 'isMulti'> & {
    /**
     * The label of the control. Any node is accepted, so it can carry a link, an
     * info trigger or other markup.
     *
     * Text doubles as the control's accessible name. A richer label does not, so
     * pass `ariaLabel`, or `aria-labelledby` pointing at a text element, alongside
     * it; a development-only warning says so when both are missing. A rich label
     * also does not fit `floatingLabel`, whose layout animates a single line of
     * text.
     */
    label?: ReactNode;
    /**
     * Accessible name of the control. It outranks the `label` in the accessible
     * name computation, so use it to name a control with a non-text label or to
     * replace the name a text label gives.
     *
     * Without a `label` or an `aria-labelledby` it falls back to a generic
     * string, so an unlabelled select is never nameless. With either there is no
     * fallback: a generic `aria-label` would override the label and make every
     * select announce the same name.
     */
    ariaLabel?: string;
    hint?: string;
    invalid?: boolean;
    valid?: boolean;
    menuWithMaxContent?: boolean;
    floatingLabel?: boolean;
    onIconStartClick?: (value?: SelectProps<Option, IsMulti, Group>['defaultValue']) => void;
    onIconEndClick?: (value?: SelectProps<Option, IsMulti, Group>['defaultValue']) => void;
    disabled?: SelectProps<Option, IsMulti, Group>['isDisabled'];
    clearable?: SelectProps<Option, IsMulti, Group>['isClearable'];
    loading?: SelectProps<Option, IsMulti, Group>['isLoading'];
    rtl?: SelectProps<Option, IsMulti, Group>['isRtl'];
    searchable?: SelectProps<Option, IsMulti, Group>['isSearchable'];
    multi?: SelectProps<Option, IsMulti, Group>['isMulti'];
};
declare function DSelect<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ id: idProp, inputId: inputIdProp, className, style, label, hint, iconFamilyClass, iconFamilyPrefix, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconStartTabIndex, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, iconEndTabIndex, invalid, valid, menuWithMaxContent, disabled, clearable, loading, floatingLabel, rtl, searchable, multi, components, defaultValue, placeholder, onIconStartClick, onIconEndClick, dataAttributes, ariaLabel, ariaLiveMessages, ...props }: Props<Option, IsMulti, Group>): import("react").JSX.Element;
declare const _default: typeof DSelect & {
    OptionCheck: typeof DSelectOptionCheck;
    OptionIcon: typeof DSelectOptionIcon;
    SingleValueIconText: typeof DSelectSingleValueIconText;
    DropdownIndicator: typeof DSelectDropdownIndicator;
    ClearIndicator: typeof DSelectClearIndicator;
    MultiValueRemove: typeof DSelectMultiValueRemove;
    LoadingIndicator: typeof DSelectLoadingIndicator;
    OptionEmoji: typeof DSelectOptionEmoji;
    SingleValueEmoji: typeof DSelectSingleValueEmoji;
    SingleValueEmojiText: typeof DSelectSingleValueEmojiText;
    Placeholder: typeof DSelectPlaceholder;
};
export default _default;
