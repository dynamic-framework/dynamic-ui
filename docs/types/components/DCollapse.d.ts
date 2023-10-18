import type { PropsWithChildren, ReactNode, ReactElement } from 'react';
type Props = PropsWithChildren<{
    id?: string;
    className?: string;
    Component: ReactElement | ReactNode;
    hasSeparator?: boolean;
    defaultCollapsed?: boolean;
    onChange?: (value: boolean) => void;
}>;
export default function DCollapse({ id, className, Component, hasSeparator, defaultCollapsed, onChange, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
