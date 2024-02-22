import classNames from 'classnames';
import { components } from 'react-select';

import type { GroupBase, OptionProps } from 'react-select';

import DInputCheck from '../../DInputCheck';

export default function DSelectOptionCheck<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  {
    innerProps,
    children,
    isSelected,
    ...props
  }: OptionProps<Option, IsMulti, Group>,
) {
  return (
    <components.Option<Option, IsMulti, Group>
      className={classNames({
        'd-select__option': true,
        'd-select__option--is-checkbox': true,
      })}
      isSelected={isSelected}
      innerProps={innerProps}
      {...props}
    >
      <label htmlFor={`${innerProps.id}Check`}>
        <DInputCheck
          type="checkbox"
          checked={isSelected}
          id={`${innerProps.id}Check`}
        />
        {children}
      </label>
    </components.Option>
  );
}
