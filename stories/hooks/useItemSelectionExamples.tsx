import {
  useItemSelection,
  DInputCheck,
  DButton,
  DCard,
  DContextProvider,
} from '../../src';

const ITEMS = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
];

export function ExampleOfUse() {
  const {
    isSelectedItem,
    toggleSelectedItem,
    setSelectedItems,
    resetSelectedItems,
  } = useItemSelection<typeof ITEMS[0]>();

  return (
    <DCard>
      <DCard.Header>
        Selection:
      </DCard.Header>
      <DCard.Body className="df-flex df-flex-col">
        {ITEMS.map((item) => (
          <DInputCheck
            key={item.id}
            type="checkbox"
            label={item.name}
            onClick={() => toggleSelectedItem(item)}
            checked={isSelectedItem(item)}
          />
        ))}
      </DCard.Body>
      <DCard.Footer className="df-flex df-justify-end df-gap-3">
        <DButton size="sm" onClick={() => setSelectedItems(ITEMS)} text="Select All" />
        <DButton size="sm" onClick={resetSelectedItems} text="Reset" />
      </DCard.Footer>
    </DCard>
  );
}

export function ExampleRoot() {
  return (
    <DContextProvider>
      <ExampleOfUse />
    </DContextProvider>
  );
}
