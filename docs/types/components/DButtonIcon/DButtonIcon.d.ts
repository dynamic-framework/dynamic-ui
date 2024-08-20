import type { MouseEvent } from 'react';
import type { BaseProps, ButtonType, ButtonVariant, ComponentSize, FamilyIconProps, InputState } from '../interface';
type Props = BaseProps & FamilyIconProps & {
    id?: string;
    icon: string;
    size?: ComponentSize;
    variant?: ButtonVariant;
    theme?: string;
    state?: InputState;
    type?: ButtonType;
    loading?: boolean;
    loadingAriaLabel?: string;
    ariaLabel?: string;
    stopPropagationEnabled?: boolean;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
export default function DButtonIcon({ id, icon, size, className, variant, state, loadingAriaLabel, iconMaterialStyle, ariaLabel, theme, type, loading, disabled, stopPropagationEnabled, style, iconFamilyClass, iconFamilyPrefix, dataAttributes, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
