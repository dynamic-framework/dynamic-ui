import { useCallback, useRef } from 'react';

/**
 * The keyboard half of a `tablist`.
 *
 * The dots carry `role="tab"` and a roving `tabIndex` — one Tab stop for the
 * group rather than one per page — and that half was implemented without this
 * one. The result was a trap: Tab reaches the selected dot, every other dot is
 * `tabIndex={-1}`, and there is no handler, so a keyboard user can reach the
 * pagination and then neither move within it nor activate anything else.
 *
 * Roving tabindex is not optional about this. Either the group answers the
 * arrow keys, or it must not take the roles and the roving index in the first
 * place.
 *
 * Implements the APG tablist pattern: Left/Right move and select, Home and End
 * jump to the ends. Selection follows focus, which is correct here because
 * activating a dot is cheap and has no side effect beyond scrolling.
 *
 * @param count - Number of stops.
 * @param select - Called with the index to move to.
 */
export default function usePaginationKeys(count: number, select: (page: number) => void) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const setRef = useCallback((index: number) => (element: HTMLButtonElement | null) => {
    refs.current[index] = element;
  }, []);

  const focusPage = useCallback((page: number) => {
    refs.current[page]?.focus();
    select(page);
  }, [select]);

  const onKeyDown = useCallback((index: number) => (event: React.KeyboardEvent) => {
    if (count <= 1) return;

    /*
     * Logical, not physical: `ArrowRight` is "the next stop" and the browser
     * has already mirrored the strip under RTL, so mapping the key to a
     * direction here would move the wrong way.
     */
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        focusPage((index + 1) % count);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        focusPage((index - 1 + count) % count);
        break;
      case 'Home':
        event.preventDefault();
        focusPage(0);
        break;
      case 'End':
        event.preventDefault();
        focusPage(count - 1);
        break;
      default:
    }
  }, [count, focusPage]);

  return { setRef, onKeyDown };
}
