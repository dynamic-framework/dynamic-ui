import { PropsWithChildren } from 'react';
import type { BaseProps } from '../../interface';
type Props = BaseProps & PropsWithChildren<{
    actionPlacement?: 'start' | 'end' | 'fill';
}>;
export default function DOffcanvasFooter({ actionPlacement, children, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
