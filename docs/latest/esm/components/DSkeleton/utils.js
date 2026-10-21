/** Numbers are treated as pixels; strings are passed as-is (`'50%'`, `'2rem'`). */
function toCssSize(value) {
    if (value === undefined)
        return undefined;
    return typeof value === 'number' ? `${value}px` : value;
}
/**
 * Upper bound for `items` and `lines`. A skeleton only needs to fill the
 * viewport, and an unbounded count would let `Array.from` throw or exhaust
 * memory.
 */
const MAX_SKELETON_COUNT = 100;
/**
 * Normalizes a repetition count to an integer between 0 and
 * `MAX_SKELETON_COUNT` so it can size an array. Non-finite values (`NaN`,
 * `Infinity`) render nothing.
 */
function toCount(value) {
    if (!Number.isFinite(value))
        return 0;
    return Math.min(Math.max(Math.floor(value), 0), MAX_SKELETON_COUNT);
}
/**
 * Maps `rounded` to Bootstrap's `rounded-*` utilities. `undefined` keeps the
 * radius from `--bs-skeleton-border-radius`.
 */
function roundedClass(rounded) {
    if (rounded === undefined)
        return undefined;
    if (rounded === true)
        return 'rounded';
    if (rounded === false)
        return 'rounded-0';
    return `rounded-${rounded}`;
}

export { MAX_SKELETON_COUNT, roundedClass, toCount, toCssSize };
//# sourceMappingURL=utils.js.map
