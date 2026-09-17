import Select from 'react-select';
import { useCallback, useId, useMemo } from 'react';
import type { ReactNode } from 'react';
import classNames from 'classnames';
import type { Props as SelectProps, GroupBase } from 'react-select';
import DIcon from '../DIcon';
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

import DFormLabel from '../internal/DFormLabel';
import hasLabelContent from '../../utils/hasLabelContent';

import type {
  BaseProps,
  EndIconProps,
  FamilyIconProps,
  StartIconProps,
} from '../interface';

type Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> =
& BaseProps
& FamilyIconProps
& StartIconProps
& EndIconProps
& Omit<
SelectProps<Option, IsMulti, Group>,
| 'isDisabled'
| 'isClearable'
| 'isLoading'
| 'isRtl'
| 'isSearchable'
| 'isMulti'
> & {
  /**
   * The visible label of the control. Any node is accepted, so it can carry a
   * link, an info trigger or other markup.
   *
   * Unlike the other controls, this one is named by `ariaLabel` whatever the
   * label is: `aria-label` always reaches the inner input and outranks the
   * associated `<label>` in the accessible name computation. So a text label
   * here is visible but not the name — set `ariaLabel` to the real name of the
   * field, otherwise the control keeps announcing the generic default.
   *
   * A rich label also does not fit `floatingLabel`, whose layout animates a
   * single line of text.
   */
  label?: ReactNode;
  /**
   * Accessible name of the control, for every kind of `label`: it is always
   * passed to the inner input, where it outranks the associated `<label>`.
   * Defaults to a generic string, which is why a non-text `label` does not warn
   * here the way it does on the other inputs — and why leaving the default in
   * place makes every select announce the same name.
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

function DSelect<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  {
    id: idProp,
    className,
    style,
    label,
    hint,
    iconFamilyClass,
    iconFamilyPrefix,
    iconStart,
    iconStartFamilyClass,
    iconStartFamilyPrefix,
    iconStartAriaLabel,
    iconStartTabIndex,
    iconEnd,
    iconEndFamilyClass,
    iconEndFamilyPrefix,
    iconEndAriaLabel,
    iconEndTabIndex,
    invalid,
    valid,
    menuWithMaxContent = false,
    disabled,
    clearable,
    loading,
    floatingLabel = false,
    rtl,
    searchable,
    multi,
    components,
    defaultValue,
    placeholder,
    onIconStartClick,
    onIconEndClick,
    dataAttributes,
    ariaLabel = 'Search for an option',
    ...props
  }: Props<Option, IsMulti, Group>,
) {
  const innerId = useId();
  const id = useMemo(() => idProp || innerId, [idProp, innerId]);

  const handleOnIconStartClick = useCallback(() => {
    onIconStartClick?.(defaultValue);
  }, [onIconStartClick, defaultValue]);

  const handleOnIconEndClick = useCallback(() => {
    onIconEndClick?.(defaultValue);
  }, [onIconEndClick, defaultValue]);

  return (
    <div
      className={classNames(
        'd-select',
        className,
        {
          'd-select-floating': floatingLabel,
          disabled: disabled || loading,
        },
      )}
      style={style}
      {...dataAttributes}
    >
      {hasLabelContent(label) && (
        <DFormLabel htmlFor={id}>
          {label}
        </DFormLabel>
      )}
      <div
        className={classNames({
          'input-group': true,
          'has-validation': invalid,
          disabled: disabled || loading,
        })}
      >
        {iconStart && (
          <button
            type="button"
            className="input-group-text"
            id={`${id}Start`}
            onClick={handleOnIconStartClick}
            disabled={disabled || loading}
            aria-label={iconStartAriaLabel}
            tabIndex={iconStartTabIndex}
          >
            <DIcon
              icon={iconStart}
              familyClass={iconStartFamilyClass}
              familyPrefix={iconStartFamilyPrefix}
            />
          </button>
        )}
        <Select<Option, IsMulti, Group>
          id={`${id}Container`}
          inputId={id}
          aria-label={ariaLabel}
          styles={{
            control: (base) => ({
              ...base,
              minHeight: 'unset',
            }),
            container: (base) => ({
              ...base,
              flex: 1,
            }),
            menu: (base) => ({
              ...base,
              width: menuWithMaxContent ? 'max-context' : '100%',
              zIndex: 1000,
            }),
          }}
          className={classNames('d-select-component', {
            'is-invalid': invalid,
            'is-valid': valid,
          })}
          classNamePrefix="d-select"
          isDisabled={disabled || loading}
          isClearable={clearable}
          isLoading={loading}
          isRtl={rtl}
          isSearchable={searchable}
          isMulti={multi}
          defaultValue={defaultValue}
          placeholder={floatingLabel ? '' : placeholder}
          unstyled
          components={{
            Placeholder: DSelectPlaceholder,
            DropdownIndicator: DSelectDropdownIndicator,
            ClearIndicator: DSelectClearIndicator,
            MultiValueRemove: DSelectMultiValueRemove,
            LoadingIndicator: DSelectLoadingIndicator,
            ...components,
          }}
          {...props}
        />
        {(iconEnd && !loading) && (
          <button
            type="button"
            className="input-group-text"
            id={`${id}End`}
            onClick={handleOnIconEndClick}
            disabled={disabled || loading}
            aria-label={iconEndAriaLabel}
            tabIndex={iconEndTabIndex}
          >
            {iconEnd && (
              <DIcon
                icon={iconEnd}
                familyClass={iconEndFamilyClass}
                familyPrefix={iconEndFamilyPrefix}
              />
            )}
          </button>
        )}
      </div>
      {hint && (
        <div
          className="form-text"
          id={`${id}Hint`}
        >
          {hint}
        </div>
      )}
    </div>
  );
}

export default Object.assign(DSelect, {
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
