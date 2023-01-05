import { useCallback, useState } from 'react';

/**
 * useStackState inspired from rooks
 * @see https://github.com/imbhargav5/rooks/blob/main/packages/rooks/src/hooks/useStackState.ts
 * @description Manages a stack with react hooks.
 * @param initialList Initial value of the list
 * @returns The list and controls to modify the stack
 * @see https://react-hooks.org/docs/useStackState
 */
export default function useStackState<T>(initialList: T[]): [
  T[],
  {
    clear: () => void;
    isEmpty: () => boolean;
    length: number;
    peek: () => T | undefined;
    pop: () => void;
    push: (item: T) => void;
  },
] {
  const [list, setList] = useState<T[]>(initialList);
  const { length } = list;

  const push = useCallback(
    (item: T) => {
      setList((prevList) => [
        ...prevList,
        item,
      ]);
    },
    [],
  );

  const pop = useCallback(() => {
    setList((prevList) => {
      if (prevList.length === 0) {
        return prevList;
      }
      const [, ...newList] = prevList;
      return newList;
    });
  }, []);

  const peek = useCallback(() => {
    if (list.length > 0) {
      return list[list.length - 1];
    }

    return undefined;
  }, [list]);

  const clear = () => setList([]);

  const isEmpty = useCallback(() => list.length === 0, [list]);

  const controls = {
    clear,
    isEmpty,
    length,
    peek,
    pop,
    push,
  };

  return [list, controls];
}
