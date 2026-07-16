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
export default function useItemSelection<T extends Identifiable>({ getItemIdentifier: getItemIdentifierProp, previousSelected, }?: Props<T>): ItemSelection<T>;
export {};
