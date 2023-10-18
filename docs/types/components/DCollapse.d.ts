import { PropsWithChildren, ReactNode, ReactElement } from 'react';
declare type Props = PropsWithChildren<{
    id?: string;
    className?: string;
    Component: ReactElement | ReactNode;
    hasSeparator?: boolean;
    defaultCollapsed?: boolean;
    onEventChange?: (value: boolean) => void;
}>;
export default function DCollapse({ id, className, Component, hasSeparator, defaultCollapsed, onEventChange, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
