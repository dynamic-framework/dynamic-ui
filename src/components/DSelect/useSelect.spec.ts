/// <reference types="@testing-library/jest-dom" />

import { act, renderHook } from '@testing-library/react';

import { useSelect } from './useSelect';

import type { UseSelectOptions } from './useSelect';
import type { DSelectOption } from './types';

const OPTIONS: Array<DSelectOption> = [
  { value: 'es', label: 'Spain' },
  { value: 'cl', label: 'Chile' },
];

const BASE: UseSelectOptions<string> = {
  items: OPTIONS,
  multi: false,
  searchable: true,
  disabled: false,
  closeOnSelect: true,
};

/**
 * The engine on its own, for the guards the markup makes unreachable.
 *
 * `DSelect` dismisses the menu the moment the control is disabled and marks
 * every button `disabled`, so there is no way to reach `commit` or `clear`
 * through the DOM — which is the point, and also why the guards behind them
 * need testing from here. They answer an event already in flight.
 */
describe('useSelect', () => {
  describe('A disabled control', () => {
    it('should close a menu it had already opened', () => {
      const { result, rerender } = renderHook(
        (props: UseSelectOptions<string>) => useSelect(props),
        { initialProps: { ...BASE, defaultOpen: true } },
      );
      expect(result.current.open).toBe(true);

      rerender({ ...BASE, defaultOpen: true, disabled: true });
      expect(result.current.open).toBe(false);
    });

    it('should refuse to open', () => {
      const { result } = renderHook(() => useSelect({ ...BASE, disabled: true }));

      act(() => result.current.setOpen(true));

      expect(result.current.open).toBe(false);
    });

    /** Closing is never refused, or a menu open at the moment it is disabled
     * could not be dismissed and would sit over a dead control. */
    it('should let its menu be closed', () => {
      const { result, rerender } = renderHook(
        (props: UseSelectOptions<string>) => useSelect(props),
        { initialProps: { ...BASE, defaultOpen: true } },
      );

      rerender({ ...BASE, defaultOpen: true, disabled: true });
      act(() => result.current.setOpen(false));

      expect(result.current.open).toBe(false);
    });

    it('should refuse to change its value', () => {
      const onChange = jest.fn();
      const { result } = renderHook(() => useSelect({
        ...BASE,
        multi: true,
        disabled: true,
        defaultValue: ['es'],
        onChange,
      }));

      act(() => result.current.commit(OPTIONS[1]));
      act(() => result.current.remove('es'));
      act(() => result.current.clear());
      act(() => result.current.search('ch'));

      expect(onChange).not.toHaveBeenCalled();
      expect(result.current.query).toBe('');
      expect([...result.current.selectedValues]).toEqual(['es']);
    });
  });
});
