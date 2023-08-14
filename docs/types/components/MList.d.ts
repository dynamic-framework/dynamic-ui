import { PropsWithChildren } from 'react';
declare type Props = PropsWithChildren<{
    className?: string;
    isFlush?: boolean;
    isNumbered?: boolean;
    isHorizontal?: boolean;
    horizontalBreakpoint?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}>;
export default function MList({ children, className, isFlush, isNumbered, isHorizontal, horizontalBreakpoint, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
