import { paginationRange } from './paginationRange';
import type { PaginationItem } from './paginationRange';

/** Renders a range the way it reads on screen, so a failure is legible. */
const show = (items: PaginationItem[]) => items
  .map((item) => (typeof item === 'number' ? String(item) : '…'))
  .join(' ');

describe('paginationRange', () => {
  describe('Short lists', () => {
    it.each([
      [1, '1'],
      [2, '1 2'],
      [3, '1 2 3'],
      [5, '1 2 3 4 5'],
      [7, '1 2 3 4 5 6 7'],
    ])('should show every page when there are %i of them', (total, expected) => {
      expect(show(paginationRange({ total, current: 1 }))).toBe(expected);
    });

    it('should return nothing for an empty list', () => {
      expect(paginationRange({ total: 0, current: 1 })).toEqual([]);
    });
  });

  describe('Windowing', () => {
    it('should pin the first and last page and put a gap in between', () => {
      expect(show(paginationRange({ total: 20, current: 10 }))).toBe('1 … 9 10 11 … 20');
    });

    it('should slide the window rather than shrink it near the start', () => {
      expect(show(paginationRange({ total: 20, current: 1 }))).toBe('1 2 3 4 5 … 20');
      expect(show(paginationRange({ total: 20, current: 2 }))).toBe('1 2 3 4 5 … 20');
    });

    it('should slide the window rather than shrink it near the end', () => {
      expect(show(paginationRange({ total: 20, current: 20 }))).toBe('1 … 16 17 18 19 20');
      expect(show(paginationRange({ total: 20, current: 19 }))).toBe('1 … 16 17 18 19 20');
    });

    /**
     * The reason the clamps exist. A window that shrank at the ends would make
     * the control change width as you page through it, moving the button under
     * the pointer just as you go to press it again.
     */
    it('should render the same number of items for every page of a long list', () => {
      const widths = new Set<number>();
      for (let current = 1; current <= 20; current += 1) {
        widths.add(paginationRange({ total: 20, current }).length);
      }
      expect([...widths]).toEqual([7]);
    });

    it.each([0, 1, 2, 3])('should keep the count stable at siblings %i', (siblings) => {
      const widths = new Set<number>();
      for (let current = 1; current <= 40; current += 1) {
        widths.add(paginationRange({ total: 40, current, siblings }).length);
      }
      expect(widths.size).toBe(1);
    });
  });

  describe('Gaps', () => {
    /**
     * An ellipsis standing in for ONE page is worse than the page: it is wider
     * than the number it hides and you cannot click it.
     */
    it('should show a single skipped page rather than an ellipsis', () => {
      // The window starts at 3, so only page 2 sits between it and the
      // boundary — and page 2 is narrower and clickable, which an ellipsis is
      // not. Same at the other end.
      expect(show(paginationRange({ total: 20, current: 3 }))).toBe('1 2 3 4 5 … 20');
      expect(show(paginationRange({ total: 20, current: 18 }))).toBe('1 … 16 17 18 19 20');
    });

    it('should use an ellipsis once more than one page is hidden', () => {
      expect(show(paginationRange({ total: 9, current: 5 }))).toBe('1 … 4 5 6 … 9');
    });

    it('should distinguish the leading gap from the trailing one', () => {
      const items = paginationRange({ total: 20, current: 10 });
      expect(items).toContain('ellipsis-start');
      expect(items).toContain('ellipsis-end');
    });
  });

  describe('Settings', () => {
    it('should show only the current page between the boundaries at siblings 0', () => {
      expect(show(paginationRange({ total: 20, current: 10, siblings: 0 }))).toBe('1 … 10 … 20');
    });

    it('should widen the window as siblings grows', () => {
      expect(show(paginationRange({ total: 40, current: 20, siblings: 2 }))).toBe('1 … 18 19 20 21 22 … 40');
      expect(show(paginationRange({ total: 40, current: 20, siblings: 3 }))).toBe('1 … 17 18 19 20 21 22 23 … 40');
    });

    it('should pin more pages at each end as boundaries grows', () => {
      expect(show(paginationRange({ total: 40, current: 20, boundaries: 2 }))).toBe('1 2 … 19 20 21 … 39 40');
    });

    it('should cope with no boundaries at all', () => {
      expect(show(paginationRange({ total: 40, current: 20, boundaries: 0 }))).toBe('… 19 20 21 …');
    });
  });

  describe('Bad input', () => {
    it('should clamp a current page outside the list', () => {
      expect(show(paginationRange({ total: 5, current: 99 }))).toBe('1 2 3 4 5');
      expect(show(paginationRange({ total: 5, current: -3 }))).toBe('1 2 3 4 5');
    });

    it('should round fractional settings rather than producing a fractional page', () => {
      const items = paginationRange({ total: 20, current: 10.6, siblings: 1.4 });
      expect(items.filter((item) => typeof item === 'number')).toEqual(
        items.filter((item) => typeof item === 'number' && Number.isInteger(item)),
      );
    });
  });
});
