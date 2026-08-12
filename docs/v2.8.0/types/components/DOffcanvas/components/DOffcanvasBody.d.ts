import type { ReactNode } from 'react';
import type { BaseProps } from '../../interface';
type Props = BaseProps & {
    children: ReactNode;
};
export default function DOffcanvasBody({ children, className, style, }: Props): import("react").JSX.Element;
export {};
