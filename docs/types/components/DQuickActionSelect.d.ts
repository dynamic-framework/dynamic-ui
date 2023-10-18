import type { ChangeEvent } from 'react';
type Props = {
    id: string;
    name: string;
    value: string;
    line1: string;
    line2: string;
    className?: string;
    isSelected?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default function DQuickActionSelect({ id, name, value, line1, line2, className, isSelected, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
