import type { GroupBase, OptionProps } from 'react-select';
export type OptionIcon = {
    label: string;
    value: string;
    icon: string;
};
export default function DSelectOptionIcon<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ children, data, ...props }: OptionProps<Option, IsMulti, Group>): import("react/jsx-runtime").JSX.Element;
