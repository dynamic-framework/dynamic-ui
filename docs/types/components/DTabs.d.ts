import type { PropsWithChildren } from 'react';
export declare type DTabOption = {
    label: string;
    tab: string;
    isDisabled?: boolean;
};
declare type Props = PropsWithChildren<{
    onEventChange: (option: DTabOption) => void;
    options: Array<DTabOption>;
    defaultSelected: string;
    className?: string;
    isVertical?: boolean;
}>;
declare type TabContextState = {
    isSelected: (tab: DTabOption['tab']) => boolean;
};
export default function DTabs({ children, defaultSelected, onEventChange, options, className, isVertical, }: Props): import("react/jsx-runtime").JSX.Element;
export declare function useTabContext(): TabContextState;
export {};
