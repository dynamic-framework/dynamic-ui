import classNames from 'classnames';
import { components } from 'react-select';

import type { GroupBase, OptionProps } from 'react-select';

import DIcon from '../../DIcon';

export type OptionIcon = {
  label: string;
  value: string;
  icon: string;
};

export default function DSelectOptionIcon<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  {
    children,
    data,
    ...props
  }: OptionProps<Option, IsMulti, Group>,
) {
  return (
    <components.Option<Option, IsMulti, Group>
      className={classNames({
        'd-select__option--has-icon': true,
      })}
      data={data}
      {...props}
    >
      <DIcon icon={(data as OptionIcon).icon} />
      {children}
    </components.Option>
  );
}
