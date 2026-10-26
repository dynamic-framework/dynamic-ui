import { useState, useCallback, useMemo } from 'react';

/**
 * useStackState inspired from rooks
 * @see https://github.com/imbhargav5/rooks/blob/main/packages/rooks/src/hooks/useStackState.ts
 * @description Manages a stack with react hooks.
 * @param initialList Initial value of the list
 * @returns The list and controls to modify the stack
 * @see https://react-hooks.org/docs/useStackState
 */
function useStackState(initialList = []) {
    const [list, setList] = useState(initialList);
    const push = useCallback((item) => (setList((prevList) => [
        ...prevList,
        item,
    ])), []);
    const pop = useCallback(() => (setList((prevList) => (prevList.slice(0, prevList.length - 1)))), []);
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

export { useStackState as default };
//# sourceMappingURL=useStackState.js.map
