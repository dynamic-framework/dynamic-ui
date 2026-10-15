export type SkeletonDimension = string | number;

export type SkeletonRounded = boolean | 0 | 1 | 2 | 3 | 4 | 5 | 'circle' | 'pill';

/** Numbers are treated as pixels; strings are passed as-is (`'50%'`, `'2rem'`). */
export function toCssSize(value?: SkeletonDimension): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
}

/**
 * Upper bound for `items` and `lines`. A skeleton only needs to fill the
 * viewport, and an unbounded count would let `Array.from` throw or exhaust
 * memory.
 */
export const MAX_SKELETON_COUNT = 100;

/**
 * Normalizes a repetition count to an integer between 0 and
 * `MAX_SKELETON_COUNT` so it can size an array. Non-finite values (`NaN`,
 * `Infinity`) render nothing.
 */
export function toCount(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(Math.max(Math.floor(value), 0), MAX_SKELETON_COUNT);
}

/**
 * Maps `rounded` to Bootstrap's `rounded-*` utilities. `undefined` keeps the
 * radius from `--bs-skeleton-border-radius`.
 */
export function roundedClass(rounded?: SkeletonRounded): string | undefined {
  if (rounded === undefined) return undefined;
  if (rounded === true) return 'rounded';
  if (rounded === false) return 'rounded-0';
  return `rounded-${rounded}`;
}
