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
type DropdownPlacement = 'auto' | 'down' | 'up' | 'start' | 'end';
type Props = {
    actions: DropdownAction[];
    dropdownToggle?: ((props: {
        open: boolean;
        toggle: () => void;
    }) => React.ReactNode);
    className?: string;
    classNameMenu?: string;
    asPortal?: boolean;
    placement?: DropdownPlacement;
};
export default function DDropdown({ actions, dropdownToggle, className, classNameMenu, asPortal, placement, }: Props): import("react").JSX.Element;
export {};
