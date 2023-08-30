import { ComponentProps, FormEventHandler } from 'react';
import { DInput } from './proxies';
declare type Props = {
    value?: string | number;
    onEventChange?: ((value: string) => void) & FormEventHandler<HTMLDInputElement>;
} & Omit<ComponentProps<typeof DInput>, 'type' | 'isReadOnly' | 'onEventChange' | 'value'>;
export default function DDatePickerTime({ value, onEventChange, innerId, label, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
