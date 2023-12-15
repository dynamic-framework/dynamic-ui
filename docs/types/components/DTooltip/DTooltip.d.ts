import type { PropsWithChildren, ReactNode } from 'react';
import type { Placement } from '@floating-ui/react';
import type { BaseProps, ComponentSize } from '../interface';
export type Props = BaseProps & PropsWithChildren<{
    childrenClassName?: string;
    offSet?: number;
    padding?: number;
    withHover?: boolean;
    withFocus?: boolean;
    withClick?: boolean;
    open?: boolean;
    theme?: string;
    size?: ComponentSize;
    placement?: Placement;
    Component: ReactNode;
}>;
export default function DTooltip({ className, childrenClassName, style, offSet, padding, withFocus, withClick, withHover, open, theme, placement, size, Component, children, }: Props): import("react/jsx-runtime").JSX.Element;
