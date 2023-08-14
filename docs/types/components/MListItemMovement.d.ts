import { ComponentProps } from 'react';
import MListItem from './MListItem';
declare type Props = Omit<ComponentProps<typeof MListItem>, 'children'> & {
    description: string;
    date: string;
    amount: number;
    classNameMovement?: string;
};
export default function MListItemMovement({ description, date, amount, classNameMovement, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
