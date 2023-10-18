import type { ComponentProps } from 'react';
import DInput from './DInput';
type Props = {
    value?: string;
    onClick?: () => void;
} & Omit<ComponentProps<typeof DInput>, 'type' | 'isReadOnly' | 'onIconEndClick' | 'value'>;
declare const ForwardedDDatePickerInput: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<unknown>>;
export default ForwardedDDatePickerInput;
