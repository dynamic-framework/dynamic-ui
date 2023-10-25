import type { ComponentProps } from 'react';
import { DListItem } from '../DList';
import type { BaseProps } from '../interface';
type Props = BaseProps & Omit<ComponentProps<typeof DListItem>, 'children'> & {
    description: string;
    date: string;
    amount: number;
};
export default function DListItemMovement({ description, date, amount, className, style, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
