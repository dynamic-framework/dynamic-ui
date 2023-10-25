import type { PropsWithChildren } from 'react';
import type { BaseProps } from '../../interface';
type Props = BaseProps & PropsWithChildren<{
    actionPlacement?: 'start' | 'end' | 'fill' | 'center';
}>;
export default function DModalFooter({ className, style, actionPlacement, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
