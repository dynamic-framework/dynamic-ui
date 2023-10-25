import type { PropsWithChildren, ReactNode, ReactElement } from 'react';
import type { BaseProps } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    id?: string;
    Component: ReactElement | ReactNode;
    hasSeparator?: boolean;
    defaultCollapsed?: boolean;
    onChange?: (value: boolean) => void;
}>;
export default function DCollapse({ id, className, style, Component, hasSeparator, defaultCollapsed, onChange, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
