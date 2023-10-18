import { ComponentProps } from 'react';
import { DInput } from './proxies';
declare type Props = {
    value?: string;
    onEventClick?: () => void;
} & Omit<ComponentProps<typeof DInput>, 'type' | 'isReadOnly' | 'onEventIconEndClick' | 'value'>;
declare const _default: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<unknown>>;
export default _default;
