import Select from 'react-select';
import { useCallback } from 'react';
import classNames from 'classnames';

import type { Props as SelectProps, GroupBase } from 'react-select';

import { PREFIX_BS } from '../config';
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

import type {
  BaseProps,
  EndIconProps,
  FamilyIconProps,
  LabelIconProps,
  StartIconProps,
} from '../interface';

type Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> =
& BaseProps
& FamilyIconProps
& LabelIconProps
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
  label?: string;
  hint?: string;
  invalid?: boolean;
  valid?: boolean;
  menuWithMaxContent?: boolean;
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
    id,
    className,
    style,
    label,
    labelIcon,
    labelIconFamilyClass,
    labelIconFamilyPrefix,
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
    rtl,
    searchable,
    multi,
    components,
    defaultValue,
    onIconStartClick,
    onIconEndClick,
    ...props
  }: Props<Option, IsMulti, Group>,
) {
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
          disabled: disabled || loading,
        },
      )}
      style={style}
    >
      {label && (
        <label htmlFor={id}>
          {label}
          {labelIcon && (
            <DIcon
              className="d-select-icon"
              icon={labelIcon}
              size={`var(--${PREFIX_BS}input-label-font-size)`}
              familyClass={labelIconFamilyClass}
              familyPrefix={labelIconFamilyPrefix}
            />
          )}
        </label>
      )}
      <div className="d-select-control">
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
                className="d-input-icon"
                icon={iconStart}
                familyClass={iconStartFamilyClass}
                familyPrefix={iconStartFamilyPrefix}
              />
            </button>
          )}
          <Select<Option, IsMulti, Group>
            styles={{
              control: (base) => ({
                ...base,
                minHeight: 'unset',
              }),
              container: (base) => ({
                ...base,
                width: '100%',
              }),
              menu: (base) => ({
                ...base,
                width: menuWithMaxContent ? 'max-context' : '100%',
              }),
            }}
            className="d-select-component"
            classNamePrefix="d-select"
            isDisabled={disabled || loading}
            isClearable={clearable}
            isLoading={loading}
            isRtl={rtl}
            isSearchable={searchable}
            isMulti={multi}
            defaultValue={defaultValue}
            unstyled
            components={{
              DropdownIndicator: DSelectDropdownIndicator,
              ClearIndicator: DSelectClearIndicator,
              MultiValueRemove: DSelectMultiValueRemove,
              LoadingIndicator: DSelectLoadingIndicator,
              ...components,
            }}
            {...props}
          />
          {((invalid || valid) && !iconEnd && !loading) && (
            <span
              className="input-group-text"
              id={`${id}State`}
            >
              <DIcon
                className="d-input-validation-icon"
                icon={invalid ? 'exclamation-circle' : 'check'}
                familyClass={iconFamilyClass}
                familyPrefix={iconFamilyPrefix}
              />
            </span>
          )}
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
                  className="d-input-icon"
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
});
