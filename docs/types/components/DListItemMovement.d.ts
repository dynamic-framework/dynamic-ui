import { ComponentProps } from 'react';
import DListItem from './DListItem';
declare type Props = Omit<ComponentProps<typeof DListItem>, 'children'> & {
    description: string;
    date: string;
    amount: number;
    classNameMovement?: string;
};
export default function DListItemMovement({ description, date, amount, classNameMovement, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
