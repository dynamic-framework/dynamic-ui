import type { PropsWithChildren } from 'react';
import type { BreakpointSize } from './interface';
type Props = PropsWithChildren<{
    className?: string;
    isFlush?: boolean;
    isNumbered?: boolean;
    isHorizontal?: boolean;
    horizontalBreakpoint?: BreakpointSize;
}>;
export default function DList({ children, className, isFlush, isNumbered, isHorizontal, horizontalBreakpoint, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
