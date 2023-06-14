import type { PropsWithChildren } from 'react';
export declare type TabOption = {
    label: string;
    tab: string;
    isDisabled?: boolean;
};
declare type Props = PropsWithChildren<{
    onChange: (option: TabOption) => void;
    options: Array<TabOption>;
    defaultSelected: string;
    className?: string;
    isVertical?: boolean;
}>;
declare type TabContextState = {
    isSelected: (tab: TabOption['tab']) => boolean;
};
export default function MTabs({ children, defaultSelected, onChange, options, className, isVertical, }: Props): JSX.Element;
export declare function useTabContext(): TabContextState;
export {};
