import { type ComponentProps } from 'react';
import DInput from '../DInput';
type DInputProps = ComponentProps<typeof DInput>;
export type DInputSearchProps = Omit<DInputProps, 'onChange' | 'defaultValue' | 'type'> & {
    debounceMs?: number;
    defaultValue?: string;
    onChange?: (value: string) => void;
    onImmediateChange?: (value: string) => void;
};
declare const ForwardedDInputSearch: import("react").ForwardRefExoticComponent<Omit<DInputSearchProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInputSearch;
