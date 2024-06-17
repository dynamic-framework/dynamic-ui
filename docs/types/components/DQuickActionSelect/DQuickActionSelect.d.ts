import type { ChangeEvent } from 'react';
import type { BaseProps } from '../interface';
type Props = BaseProps & {
    id?: string;
    name: string;
    value: string;
    line1: string;
    line2: string;
    selected?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default function DQuickActionSelect({ id: idProp, name, value, line1, line2, className, style, selected, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
