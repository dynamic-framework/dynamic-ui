/// <reference types="react" />
import type { DTabOption } from './DTabs';
type TabContextState = {
    isSelected: (tab: DTabOption['tab']) => boolean;
};
declare const TabContext: import("react").Context<TabContextState | undefined>;
export declare function useTabContext(): TabContextState;
export default TabContext;
