import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { PropsWithChildren } from 'react';

import TabContext, { TabsStateContext } from '../TabContext';

type Props = PropsWithChildren<{
  defaultSelected: string;
}>;

/**
 * Owns the selected tab so the tab bar (`DTabs`) and its panels (`DTabs.Tab`)
 * can live anywhere inside it, e.g. the bar in a header and the panels in
 * another column.
 */
export default function DTabsProvider(
  {
    defaultSelected,
    children,
  }: Props,
) {
  const [selected, setSelected] = useState<string>(defaultSelected);

  useEffect(() => {
    setSelected(defaultSelected);
  }, [defaultSelected]);

  const isSelected = useCallback((tab: string) => (
    selected === tab
  ), [selected]);

  const state = useMemo(() => ({ selected, setSelected }), [selected]);
  const value = useMemo(() => ({ isSelected }), [isSelected]);

  return (
    <TabsStateContext.Provider value={state}>
      <TabContext.Provider value={value}>
        {children}
      </TabContext.Provider>
    </TabsStateContext.Provider>
  );
}
