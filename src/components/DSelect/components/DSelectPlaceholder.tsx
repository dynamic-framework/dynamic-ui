import { components } from 'react-select';

import type { GroupBase, PlaceholderProps } from 'react-select';
import { useMemo } from 'react';

export default function DSelectPlaceholder<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  {
    selectProps,
    innerProps: innerPropsProp,
    children,
    ...props
  }: PlaceholderProps<Option, IsMulti, Group>,
) {
  const id = useMemo(() => `${selectProps.inputId}Placeholder`, [selectProps.inputId]);
  const innerProps = useMemo(() => ({
    ...innerPropsProp,
    id,
  }), [innerPropsProp, id]);

  return (
    <components.Placeholder
      innerProps={innerProps}
      selectProps={selectProps}
      {...props}
    >
      {children}
    </components.Placeholder>
  );
}
