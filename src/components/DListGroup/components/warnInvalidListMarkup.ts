/**
 * Combinations already reported, keyed by container and item element, so the
 * same mismatch only warns once per page load however many items share it.
 */
const warnedCombinations = new Set<string>();

/**
 * Warns, once per combination and only outside production builds, that a
 * `DListGroupItem` renders an element its `DListGroup` container can't hold.
 *
 * `ul` and `ol` only accept `li` children: an item with `href` or `action`
 * renders an `a` or a `button`, so the list stops being announced as a list and
 * loses its item count. The reverse happens with `as="div"`: a plain item is an
 * `li` outside of any list. Neither case fails visibly, which is why it's
 * reported here.
 *
 * The `process.env.NODE_ENV` guard at the call site is what bundlers
 * constant-fold, so the whole call — and this module — drops out of a
 * consumer's production bundle.
 */
export default function warnInvalidListMarkup(
  container: 'ul' | 'ol' | 'div',
  item: 'li' | 'a' | 'button',
): void {
  const key = `${container}>${item}`;

  if (warnedCombinations.has(key)) return;

  warnedCombinations.add(key);

  let advice = 'Use `as="div"` on the DListGroup when its items are links or buttons.';
  if (container === 'div') {
    advice = 'Keep the container as a list (the default `as="ul"`, or `numbered`) or render the item as a link or button.';
  } else if (container === 'ol') {
    // `numbered` always renders an <ol>, whatever `as` says.
    advice = 'Remove `numbered` and use `as="div"` on the DListGroup when its items are links or buttons: `numbered` always renders an <ol>.';
  }

  // eslint-disable-next-line no-console
  console.warn(
    `[Dynamic UI] DListGroupItem: a <${item}> inside a <${container}> is invalid markup. `
    + `${advice} It never appears in production builds.`,
  );
}
