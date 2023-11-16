import type { ComponentProps } from 'react';
import DInput from '../DInput';
import type { BaseProps } from '../interface';
type Props = BaseProps & {
    value?: string;
    onClick?: () => void;
} & Omit<ComponentProps<typeof DInput>, 'type' | 'isReadOnly' | 'onIconEndClick' | 'value'>;
declare const ForwardedDDatePickerInput: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDDatePickerInput;
