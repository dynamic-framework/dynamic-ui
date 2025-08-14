/* eslint-disable max-len */
import { act, renderHook } from '@testing-library/react';
import useItemSelection from '../useItemSelection';

type Item = { id: string | number; name: string };

const items: Item[] = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
];

describe('useItemSelection', () => {
  it('should initialize with no selected items by default', () => {
    const { result } = renderHook(() => useItemSelection<Item>());
    expect(result.current.selectedItems).toEqual([]);
  });

  it('should initialize with previousSelected items', () => {
    const { result } = renderHook(() => useItemSelection<Item>(
      {
        previousSelected: [
          items[0],
          items[2],
        ],
      },
    ));

    expect(result.current.selectedItems).toEqual([items[0], items[2]]);
    expect(result.current.isSelectedItem(items[0])).toBe(true);
    expect(result.current.isSelectedItem(items[1])).toBe(false);
  });

  it('should toggle item selection', () => {
    const { result } = renderHook(() => useItemSelection<Item>());

    act(() => {
      result.current.toggleSelectedItem(items[1]);
    });
    expect(result.current.selectedItems).toEqual([items[1]]);
    expect(result.current.isSelectedItem(items[1])).toBe(true);

    act(() => {
      result.current.toggleSelectedItem(items[1]);
    });
    expect(result.current.selectedItems).toEqual([]);
    expect(result.current.isSelectedItem(items[1])).toBe(false);
  });

  it('should set selected items', () => {
    const { result } = renderHook(() => useItemSelection<Item>());

    act(() => {
      result.current.setSelectedItems([items[0], items[2]]);
    });
    expect(result.current.selectedItems).toEqual([items[0], items[2]]);
  });

  it('should reset selected items', () => {
    const { result } = renderHook(() => useItemSelection<Item>(
      {
        previousSelected: [
          items[0],
          items[1],
        ],
      },
    ));

    act(() => {
      result.current.resetSelectedItems();
    });
    expect(result.current.selectedItems).toEqual([]);
  });

  it('should use custom getItemIdentifier', () => {
    const customItems = [
      { id: 1, name: 'A', key: 'x' },
      { id: 2, name: 'B', key: 'y' },
    ];

    const getItemIdentifier = (item: typeof customItems[0]) => item.key;
    const { result } = renderHook(() => useItemSelection<typeof customItems[0]>({ getItemIdentifier }));

    act(() => {
      result.current.toggleSelectedItem(customItems[1]);
    });
    expect(result.current.selectedItems).toEqual([customItems[1]]);
    expect(result.current.isSelectedItem(customItems[1])).toBe(true);
  });
});
