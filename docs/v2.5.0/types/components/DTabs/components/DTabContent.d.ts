import type { PropsWithChildren } from 'react';
import type { BaseProps } from '../../interface';
type Props = BaseProps & PropsWithChildren<{
    tab: string;
}>;
export default function DTabContent({ tab, children, className, style, }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
