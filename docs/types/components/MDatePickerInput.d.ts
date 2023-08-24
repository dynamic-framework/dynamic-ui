import { ComponentProps } from 'react';
import { MInput } from './proxies';
export declare type InnerDatePickerProps = {
    value?: string;
    onClick?: () => void;
};
declare type MDatePickerInputProps = InnerDatePickerProps & Omit<ComponentProps<typeof MInput>, 'type' | 'isReadOnly' | 'onMIconEndClick' | 'value'>;
declare const _default: import("react").ForwardRefExoticComponent<Omit<MDatePickerInputProps, "ref"> & import("react").RefAttributes<unknown>>;
export default _default;
