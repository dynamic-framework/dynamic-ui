import type { GroupBase, PlaceholderProps } from 'react-select';
export default function DSelectPlaceholder<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ selectProps, innerProps: innerPropsProp, children, ...props }: PlaceholderProps<Option, IsMulti, Group>): import("react/jsx-runtime").JSX.Element;
