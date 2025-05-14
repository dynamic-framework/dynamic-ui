import type { ComponentProps } from 'react';
import { BaseProps } from '../../interface';
import DInput from '../../DInput';
type Props = BaseProps & {
    value?: string;
    onChange?: (value?: string) => void;
} & Omit<ComponentProps<typeof DInput>, 'type' | 'isReadOnly' | 'onChange' | 'value'>;
export default function DDatePickerTime({ value, onChange, id, label, className, style, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
