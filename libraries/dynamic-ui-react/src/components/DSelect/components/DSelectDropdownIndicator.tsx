import { components } from 'react-select';

import type { GroupBase, DropdownIndicatorProps } from 'react-select';

import DIcon from '../../DIcon';
import { useDContext } from '../../../contexts';

export default function DSelectDropdownIndicator<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group>,
) {
  const {
    iconMap: {
      chevronDownIcon,
    },
  } = useDContext();
  return (
    <components.DropdownIndicator<Option, IsMulti, Group>
      {...props}
    >
      <DIcon icon={chevronDownIcon} />
    </components.DropdownIndicator>
  );
}
