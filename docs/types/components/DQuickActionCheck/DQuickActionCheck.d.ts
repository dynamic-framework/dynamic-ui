import type { ChangeEvent } from 'react';
import type { BaseProps } from '../interface';
type Props = BaseProps & {
    id: string;
    name: string;
    value: string;
    line1: string;
    line2: string;
    line3: string;
    checked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default function DQuickActionCheck({ id, name, value, line1, line2, line3, className, style, checked, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};