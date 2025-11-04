/// <reference types="react" />
export type DropdownAction = {
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
    icon?: string;
    color?: 'default' | 'danger' | 'success' | 'warning' | 'info';
    isDivider?: boolean;
    label: string;
};
type Props = {
    actions: DropdownAction[];
    dropdownToggle?: ((props: {
        open: boolean;
        toggle: () => void;
    }) => React.ReactNode);
    className?: string;
};
export default function DDropdown({ actions, dropdownToggle, className, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
