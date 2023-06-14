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
    }
];
