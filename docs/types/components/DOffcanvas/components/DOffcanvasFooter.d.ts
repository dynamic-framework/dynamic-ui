import type { PropsWithChildren } from 'react';
import type { BaseProps } from '../../interface';
type Props = BaseProps & PropsWithChildren<{
    footerActionPlacement?: 'start' | 'end' | 'fill';
}>;
export default function DOffcanvasFooter({ footerActionPlacement, children, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
