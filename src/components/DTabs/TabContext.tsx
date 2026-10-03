import { createContext, useContext } from 'react';

import type { DTabOption } from './DTabs';

type TabContextState = {
  isSelected: (tab: DTabOption['tab']) => boolean;
};

const TabContext = createContext<TabContextState | undefined>(undefined);

type TabsState = {
  selected: string;
  setSelected: (tab: string) => void;
};

export const TabsStateContext = createContext<TabsState | undefined>(undefined);

export function useTabContext() {
  const context = useContext(TabContext);

  if (context === undefined) {
    throw new Error('useTabContext was used outside of DTabs');
  }

  return context;
}

export default TabContext;
