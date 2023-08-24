import { ComponentProps, FormEventHandler } from 'react';
import { MInput } from './proxies';
export declare type InnerDatePickerTimeProps = {
    value?: string | number;
    onChange?: ((value: string) => void) & FormEventHandler<HTMLMInputElement>;
};
declare type MDatePickerTimeProps = InnerDatePickerTimeProps & Omit<ComponentProps<typeof MInput>, 'type' | 'isReadOnly' | 'onMChange' | 'value'>;
export default function MDatePickerTime({ value, onChange, mId, label, ...props }: MDatePickerTimeProps): import("react/jsx-runtime").JSX.Element;
export {};
