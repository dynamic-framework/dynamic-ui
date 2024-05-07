import type { ComponentProps } from 'react';
import DInput from '../DInput';
import type { BaseProps } from '../interface';
type Props = BaseProps & {
    value?: string;
    onClick?: () => void;
    inputLabel?: string;
} & Omit<ComponentProps<typeof DInput>, 'type' | 'onIconEndClick' | 'value'>;
declare const ForwardedDDatePickerInput: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDDatePickerInput;
