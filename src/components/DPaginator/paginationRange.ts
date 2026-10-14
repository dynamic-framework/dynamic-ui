/**
 * Which page numbers to show, and where the gaps go.
 *
 * This is the only part of a paginator with any thinking in it, so it is a pure
 * function with no React in it — given the same four numbers it returns the
 * same list, and it can be tested without rendering anything.
 *
 * ## Why not measure the container
 *
 * The library this replaces took a `maxWidth` in pixels and worked out how many
 * buttons would fit. That reads like the responsive answer and is the wrong
 * one: the count depends on a magic number the caller has to keep in step with
 * the font, the padding and the number of digits — a paginator at 400px shows a
 * different number of pages once the total passes 99 and the buttons get wider.
 *
 * `siblings` and `boundaries` say what you actually mean. "One page either side
 * of the current one, plus the first and last" is a design decision, not a
 * measurement, and it survives a font change.
 *
 * ## Why the width stays constant
 *
 * The naive window — `current ± siblings`, clipped at the ends — renders fewer
 * items near the ends than in the middle, so the control changes width as you
 * page through it and the button under the pointer moves. The clamps below pin
 * the window's size instead of its position: near an end it slides inward
 * rather than shrinking.
 */

export type PaginationItem = number | 'ellipsis-start' | 'ellipsis-end';

export type PaginationRangeOptions = {
  /** Total number of pages. */
  total: number;
  /** The current page, 1-based. */
  current: number;
  /** Pages shown either side of the current one. */
  siblings?: number;
  /** Pages pinned at each end, so the first and last are always reachable. */
  boundaries?: number;
};

/** Inclusive integer range. Returns empty when `end` is before `start`. */
function span(start: number, end: number): number[] {
  const length = end - start + 1;
  return length > 0 ? Array.from({ length }, (_, i) => start + i) : [];
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function paginationRange(
  {
    total,
    current,
    siblings = 1,
    boundaries = 1,
  }: PaginationRangeOptions,
): PaginationItem[] {
  if (!Number.isFinite(total) || total < 1) return [];

  const page = clamp(Math.round(current) || 1, 1, total);
  const sibs = Math.max(0, Math.round(siblings));
  const bounds = Math.max(0, Math.round(boundaries));

  const startPages = span(1, Math.min(bounds, total));
  const endPages = span(Math.max(total - bounds + 1, bounds + 1), total);

  // The window's start, pushed right so it never overlaps the leading boundary,
  // and pulled left so it never runs past the trailing one. The second clamp is
  // what keeps the item count the same at the end of the list as in the middle.
  const windowStart = Math.max(
    Math.min(page - sibs, total - bounds - sibs * 2 - 1),
    bounds + 2,
  );
  const windowEnd = Math.min(
    Math.max(page + sibs, bounds + sibs * 2 + 2),
    endPages.length > 0 ? endPages[0] - 2 : total - 1,
  );

  return [
    ...startPages,

    // A gap of exactly one page is rendered as that page rather than as an
    // ellipsis: "1 … 3 4 5" hides a single number behind a symbol that is wider
    // than the number would have been, and that you cannot click.
    ...(windowStart > bounds + 2
      ? ['ellipsis-start' as const]
      : span(bounds + 1, bounds + 1).filter((n) => n < total - bounds)),

    ...span(windowStart, windowEnd),

    ...(windowEnd < total - bounds - 1
      ? ['ellipsis-end' as const]
      : span(total - bounds, total - bounds).filter((n) => n > bounds)),

    ...endPages,
  ];
}

export default paginationRange;
