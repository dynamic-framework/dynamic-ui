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
type ResolvedSide = 'down' | 'up' | 'start' | 'end';
type DropdownPlacement = 'auto' | ResolvedSide;
/**
 * Horizontal alignment of the menu relative to the toggle, applied only when
 * the resolved placement is vertical (`down`/`up`) — mirrors Bootstrap's
 * `dropdown-menu-end`/`dropdown-center` menu alignment options.
 */
export type DropdownAlignment = 'start' | 'end' | 'center';
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
    alignment?: DropdownAlignment;
};
export default function DDropdown({ actions, dropdownToggle, className, classNameMenu, asPortal, placement, alignment, }: Props): import("react").JSX.Element;
export {};
