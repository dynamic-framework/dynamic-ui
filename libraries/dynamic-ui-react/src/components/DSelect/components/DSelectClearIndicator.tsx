import { components } from 'react-select';

import type { GroupBase, ClearIndicatorProps } from 'react-select';

import DIcon from '../../DIcon';
import { useDContext } from '../../../contexts';

export default function DSelectClearIndicator<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: ClearIndicatorProps<Option, IsMulti, Group>,
) {
  const {
    icon: {
      xLgIcon,
    },
  } = useDContext();
  return (
    <components.ClearIndicator<Option, IsMulti, Group>
      {...props}
    >
      <DIcon icon={xLgIcon} />
    </components.ClearIndicator>
  );
}
