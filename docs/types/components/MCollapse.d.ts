import { PropsWithChildren, ReactNode } from 'react';
declare type Props = PropsWithChildren<{
    id?: string;
    className?: string;
    Component: JSX.Element | ReactNode;
    hasSeparator?: boolean;
    defaultCollapsed?: boolean;
    onChange?: (value: boolean) => void;
}>;
export default function MCollapse({ id, className, Component, hasSeparator, defaultCollapsed, onChange, children, }: Props): JSX.Element;
export {};
