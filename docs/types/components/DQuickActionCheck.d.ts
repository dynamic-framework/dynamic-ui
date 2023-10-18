import type { ChangeEvent } from 'react';
type Props = {
    id: string;
    name: string;
    value: string;
    line1: string;
    line2: string;
    line3: string;
    className?: string;
    isChecked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default function DQuickActionCheck({ id, name, value, line1, line2, line3, className, isChecked, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
