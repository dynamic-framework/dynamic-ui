import type { GroupBase, OptionProps } from 'react-select';
export type OptionEmoji = {
    label: string;
    value: string;
    emoji: string;
};
export default function DSelectOptionEmoji<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ children, data, ...props }: OptionProps<Option, IsMulti, Group>): import("react/jsx-runtime").JSX.Element;
