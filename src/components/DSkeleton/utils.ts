export type SkeletonDimension = string | number;

export type SkeletonRounded = boolean | 0 | 1 | 2 | 3 | 4 | 5 | 'circle' | 'pill';

/** Numbers are treated as pixels; strings are passed as-is (`'50%'`, `'2rem'`). */
export function toCssSize(value?: SkeletonDimension): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
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
