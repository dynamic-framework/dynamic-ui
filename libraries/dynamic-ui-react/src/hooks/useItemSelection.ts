import { useCallback, useMemo, useState } from 'react';

type Identifiable = {
  id: string | number;
};

type ItemSelection<T extends Identifiable> = {
  selectedItems: T[];
  isSelectedItem: (item: T) => boolean;
  toggleSelectedItem: (item: T) => void;
  resetSelectedItems: () => void;
  setSelectedItems: (items: T[]) => void;
};

type Props<T extends Identifiable> = {
  getItemIdentifier?: (item: T) => string | number;
  previousSelected?: T[];
};

export default function useItemSelection<T extends Identifiable>(
  {
    getItemIdentifier: getItemIdentifierProp,
    previousSelected = [],
  }: Props<T> = {},
): ItemSelection<T> {
  const getItemIdentifier = useCallback(
    (item: T) => (
      String(getItemIdentifierProp ? getItemIdentifierProp(item) : item.id)
    ),
    [getItemIdentifierProp],
  );

  const [selectionMap, setSelectionMap] = useState(
    () => new Map<string, T>(
      previousSelected.map((item) => [getItemIdentifier(item), item]),
    ),
  );

  const selectedItems = useMemo(() => Array.from(selectionMap.values()), [selectionMap]);

  const setSelectedItems = useCallback((items: T[]) => {
    setSelectionMap(
      new Map(items.map((item) => [getItemIdentifier(item), item])),
    );
  }, [getItemIdentifier]);

  const isSelectedItem = useCallback(
    (item: T) => selectionMap.has(getItemIdentifier(item)),
    [getItemIdentifier, selectionMap],
  );

  const toggleSelectedItem = useCallback(
    (item: T) => {
      const identifier = getItemIdentifier(item);
      setSelectionMap((prev) => {
        const newMap = new Map(prev);

        if (newMap.has(identifier)) {
          newMap.delete(identifier);
        } else {
          newMap.set(identifier, item);
        }
        return newMap;
      });
    },
    [getItemIdentifier],
  );

  const resetSelectedItems = useCallback(() => setSelectionMap(new Map()), []);

  return {
    selectedItems,
    isSelectedItem,
    toggleSelectedItem,
    resetSelectedItems,
    setSelectedItems,
  };
}
