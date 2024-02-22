import classNames from 'classnames';
import { components } from 'react-select';

import type { GroupBase, SingleValueProps } from 'react-select';

import type { OptionEmoji } from './DSelectOptionEmoji';

export default function DSelectSingleValueEmojiText<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  {
    children,
    getValue,
    ...props
  }: SingleValueProps<Option, IsMulti, Group>,
) {
  const [value] = getValue();
  return (
    <components.SingleValue<Option, IsMulti, Group>
      className={classNames({
        'd-select__control--has-icon': true,
      })}
      getValue={getValue}
      {...props}
    >
      <span>{(value as OptionEmoji).emoji}</span>
      <span>{children}</span>
    </components.SingleValue>
  );
}
