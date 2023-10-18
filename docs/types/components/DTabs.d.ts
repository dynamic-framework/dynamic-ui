import type { PropsWithChildren } from 'react';
export type DTabOption = {
    label: string;
    tab: string;
    isDisabled?: boolean;
};
type Props = PropsWithChildren<{
    onChange: (option: DTabOption) => void;
    options: Array<DTabOption>;
    defaultSelected: string;
    className?: string;
    isVertical?: boolean;
}>;
type TabContextState = {
    isSelected: (tab: DTabOption['tab']) => boolean;
};
export default function DTabs({ children, defaultSelected, onChange, options, className, isVertical, }: Props): import("react/jsx-runtime").JSX.Element;
export declare function useTabContext(): TabContextState;
export {};
