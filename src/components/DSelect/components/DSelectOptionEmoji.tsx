import classNames from 'classnames';
import { components } from 'react-select';

import type { GroupBase, OptionProps } from 'react-select';

export type OptionEmoji = {
  label: string;
  value: string;
  emoji: string;
};

export default function DSelectOptionEmoji<
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
      <span>{(data as OptionEmoji).emoji}</span>
      <span>{children}</span>
    </components.Option>
  );
}
