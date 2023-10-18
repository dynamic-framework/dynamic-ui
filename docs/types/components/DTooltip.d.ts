import type { PropsWithChildren, ReactNode } from 'react';
import type { Placement } from '@floating-ui/react';
import type { ComponentSize } from '@dynamic-framework/ui';
export declare type Props = PropsWithChildren<{
    classNameContainer?: string;
    className?: string;
    offSet?: number;
    padding?: number;
    withHover?: boolean;
    withFocus?: boolean;
    withClick?: boolean;
    isOpen?: boolean;
    size?: ComponentSize;
    placement?: Placement;
    Component: ReactNode;
}>;
export default function DTooltip({ classNameContainer, className, offSet, padding, withFocus, withClick, withHover, isOpen, placement, size, Component, children, }: Props): import("react/jsx-runtime").JSX.Element;
