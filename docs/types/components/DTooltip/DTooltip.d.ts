import type { PropsWithChildren, ReactNode } from 'react';
import type { Placement } from '@floating-ui/react';
import type { BaseProps, ComponentSize } from '../interface';
export type Props = BaseProps & PropsWithChildren<{
    classNameContainer?: string;
    offSet?: number;
    padding?: number;
    withHover?: boolean;
    withFocus?: boolean;
    withClick?: boolean;
    open?: boolean;
    size?: ComponentSize;
    placement?: Placement;
    Component: ReactNode;
}>;
export default function DTooltip({ classNameContainer, className, style, offSet, padding, withFocus, withClick, withHover, open, placement, size, Component, children, }: Props): import("react/jsx-runtime").JSX.Element;
