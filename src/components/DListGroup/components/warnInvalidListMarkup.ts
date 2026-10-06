/**
 * Combinations already reported, keyed by container and item element, so the
 * same mismatch only warns once per page load however many items share it.
 */
const warnedCombinations = new Set<string>();

/**
 * Warns, once per combination and only outside production builds, that a
 * `DListGroupItem` renders an element its `DListGroup` container can't hold.
 *
 * Links and buttons inside a <ul>/<ol> are wrapped in an <li>, so the only
 * invalid pair left is a plain item (an <li>) inside `as="div"`: an <li>
 * outside of any list. It doesn't fail visibly, which is why it's reported.
 *
 * The `process.env.NODE_ENV` guard at the call site is what bundlers
 * constant-fold, so the whole call — and this module — drops out of a
 * consumer's production bundle.
 */
export default function warnInvalidListMarkup(
  container: 'div',
  item: 'li',
): void {
  const key = `${container}>${item}`;

  if (warnedCombinations.has(key)) return;

  warnedCombinations.add(key);

  // eslint-disable-next-line no-console
  console.warn(
    `[Dynamic UI] DListGroupItem: a <${item}> inside a <${container}> is invalid markup. `
    + 'Keep the container as a list (the default `as="ul"`, or `numbered`), or render the item '
    + 'as a link or button. It never appears in production builds.',
  );
}
