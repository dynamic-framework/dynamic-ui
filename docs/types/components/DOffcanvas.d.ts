import type { PropsWithChildren } from 'react';
import type { OffcanvasPositionToggleFrom } from './interface';
type Props = PropsWithChildren<{
    name: string;
    className?: string;
    isStatic?: boolean;
    isScrollable?: boolean;
    openFrom?: OffcanvasPositionToggleFrom;
}>;
export default function DOffcanvas({ name, className, isStatic, isScrollable, openFrom, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
