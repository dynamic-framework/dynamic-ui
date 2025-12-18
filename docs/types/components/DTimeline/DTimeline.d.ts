/// <reference types="react" />
import type { BaseProps } from '../interface';
export type DTimelineItem = {
    title: string;
    description?: string;
    time?: string;
    icon?: string;
    status?: 'success' | 'warning' | 'danger' | 'info';
    children?: React.ReactNode;
};
type Props = BaseProps & {
    items: DTimelineItem[];
};
export default function DTimeline({ className, style, dataAttributes, items, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
