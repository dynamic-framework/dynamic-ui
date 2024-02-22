import { components } from 'react-select';

import type { GroupBase, MultiValueRemoveProps } from 'react-select';

import DIcon from '../../DIcon';
import { useDContext } from '../../../contexts';

export default function DSelectMultiValueRemove<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: MultiValueRemoveProps<Option, IsMulti, Group>,
) {
  const {
    iconMap: {
      x,
    },
  } = useDContext();
  return (
    <components.MultiValueRemove<Option, IsMulti, Group>
      {...props}
    >
      <DIcon icon={x} />
    </components.MultiValueRemove>
  );
}
