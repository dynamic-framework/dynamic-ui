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
    /**
     * Pops the top item only if it still satisfies `predicate`.
     *
     * `pop` takes whatever is on top at the moment it runs, which is the wrong
     * answer when two things race to close the same entry — the second one pops
     * somebody else's. Checking inside the updater is the only place the check
     * sees the current list rather than the one captured when the callback was
     * created.
     */
    popIf: (predicate: (top: T) => boolean) => void;
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

  const popIf = useCallback((predicate: (top: T) => boolean) => (
    setList((prevList) => (
      prevList.length > 0 && predicate(prevList[prevList.length - 1])
        ? prevList.slice(0, prevList.length - 1)
        : prevList
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
    popIf,
    push,
  }), [
    clear,
    isEmpty,
    list.length,
    peek,
    pop,
    popIf,
    push,
  ]);

  return [list, controls];
}
