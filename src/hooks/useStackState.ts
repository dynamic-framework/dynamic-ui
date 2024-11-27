import { useCallback, useMemo, useState } from 'react';

/**
 * useStackState inspired from rooks
 * @see https://github.com/imbhargav5/rooks/blob/main/packages/rooks/src/hooks/useStackState.ts
 * @description Manages a stack with react hooks.
 * @param initialList Initial value of the list
 * @returns The list and controls to modify the stack
 * @see https://react-hooks.org/docs/useStackState
 */
export default function useStackState<T>(initialList: T[] = []): [
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

  const push = useCallback((item: T) => (
    setList((prevList) => [
      ...prevList,
      item,
    ])
  ), []);

  const pop = useCallback(() => (
    setList((prevList) => (
      prevList.slice(0, prevList.length - 1)
    ))
  ), []);

  const peek = useCallback(() => list.at(-1), [list]);

  const clear = useCallback(() => setList([]), []);

  const isEmpty = useCallback(() => list.length === 0, [list.length]);

  const controls = useMemo(() => ({
    clear,
    isEmpty,
    length: list.length,
    peek,
    pop,
    push,
  }), [
    clear,
    isEmpty,
    list.length,
    peek,
    pop,
    push,
  ]);

  return [list, controls];
}
