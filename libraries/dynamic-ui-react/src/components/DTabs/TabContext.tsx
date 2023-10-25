import { createContext, useContext } from 'react';

import type { DTabOption } from './DTabs';

type TabContextState = {
  isSelected: (tab: DTabOption['tab']) => boolean;
};

const TabContext = createContext<TabContextState | undefined>(undefined);

export function useTabContext() {
  const context = useContext(TabContext);

  if (context === undefined) {
    throw new Error('useTabContext was used outside of MTab');
  }

  return context;
}

export default TabContext;
