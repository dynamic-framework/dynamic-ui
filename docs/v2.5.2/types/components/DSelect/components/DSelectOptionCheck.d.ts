import type { GroupBase, OptionProps } from 'react-select';
export default function DSelectOptionCheck<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ children, isSelected, ...props }: OptionProps<Option, IsMulti, Group>): import("react/jsx-runtime").JSX.Element;
