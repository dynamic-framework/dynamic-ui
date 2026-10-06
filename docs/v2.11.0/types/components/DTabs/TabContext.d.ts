/// <reference types="react" />
import type { DTabOption } from './DTabs';
type TabContextState = {
    isSelected: (tab: DTabOption['tab']) => boolean;
};
declare const TabContext: import("react").Context<TabContextState | undefined>;
type TabsState = {
    selected: string;
    setSelected: (tab: string) => void;
};
export declare const TabsStateContext: import("react").Context<TabsState | undefined>;
export declare function useTabContext(): TabContextState;
export default TabContext;
