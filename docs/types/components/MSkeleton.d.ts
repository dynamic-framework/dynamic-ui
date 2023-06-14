import { PropsWithChildren } from 'react';
export declare type Props = PropsWithChildren<{
    speed?: number;
    viewBox?: string;
    backgroundColor?: string;
    foregroundColor?: string;
}>;
export default function MSkeleton({ speed, viewBox, backgroundColor, foregroundColor, children, }: Props): JSX.Element;
