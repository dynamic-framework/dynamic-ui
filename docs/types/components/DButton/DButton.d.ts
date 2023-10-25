import type { MouseEvent } from 'react';
import type { BaseProps, ButtonType, ButtonVariant, ComponentSize, EndIconProps, InputState, StartIconProps } from '../interface';
type Props = BaseProps & StartIconProps & EndIconProps & {
    id?: string;
    theme?: string;
    size?: ComponentSize;
    variant?: ButtonVariant;
    state?: InputState;
    text?: string;
    value?: string;
    type?: ButtonType;
    isPill?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
    isStopPropagationEnabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
export default function DButton({ theme, size, variant, state, text, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, value, type, isPill, isLoading, isDisabled, isStopPropagationEnabled, className, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
