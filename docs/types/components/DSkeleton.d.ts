import type { PropsWithChildren } from 'react';
export type Props = PropsWithChildren<{
    speed?: number;
    viewBox?: string;
    backgroundColor?: string;
    foregroundColor?: string;
}>;
export default function DSkeleton({ speed, viewBox, backgroundColor, foregroundColor, children, }: Props): import("react/jsx-runtime").JSX.Element;
