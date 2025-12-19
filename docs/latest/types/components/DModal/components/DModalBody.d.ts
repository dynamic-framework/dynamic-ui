import type { ReactNode } from 'react';
import type { BaseProps } from '../../interface';
type Props = BaseProps & {
    children: ReactNode;
};
export default function DModalBody({ children, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
