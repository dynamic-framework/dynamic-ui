import type { ComponentProps, FormEventHandler } from 'react';
import DInput from './DInput';
type Props = {
    value?: string | number;
    onChange?: ((value: string) => void) & FormEventHandler<HTMLInputElement>;
} & Omit<ComponentProps<typeof DInput>, 'type' | 'isReadOnly' | 'onChange' | 'value'>;
export default function DDatePickerTime({ value, onChange, id, label, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
