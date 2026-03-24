import classNames from 'classnames';
import { components } from 'react-select';

import type { GroupBase, OptionProps } from 'react-select';

export default function DSelectOptionCheck<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  children,
  isSelected,
  ...props
}: OptionProps<Option, IsMulti, Group>) {
  return (
    <components.Option<Option, IsMulti, Group>
      {...props}
      isSelected={isSelected}
      className={classNames('d-select__option')}
    >
      <span
        className={classNames('d-select__check', {
          'd-select__check--selected': isSelected,
        })}
        aria-hidden="true"
      />

      <span className="d-select__label">
        {children}
      </span>
    </components.Option>
  );
}
