/**
 * Icons already reported, so the same unlabelled button only warns once per
 * page load however often it re-renders or however many instances exist.
 */
const warnedIcons = new Set<string>();

/**
 * Warns, once per icon and only outside production builds, that an icon-only
 * button has no accessible name.
 *
 * The control has no text to fall back on and its icon is hidden from the
 * accessibility tree, so the name has to be given explicitly. `aria-label` is
 * the direct way; on the button branch `aria-labelledby` and `title` count too,
 * since `rest` reaches the DOM there. The caller decides which sources apply.
 *
 * A legacy icon-font icon used to leak its ligature as the name by accident —
 * never a good one, being unlocalised and often meaningless ("more_vert") — and
 * no longer does, so the omission is now visible instead of silent.
 *
 * The `process.env.NODE_ENV` guard is what bundlers constant-fold, so the whole
 * call — and this module — drops out of a consumer's production bundle.
 */
export default function warnMissingAccessibleName(icon: string): void {
  if (warnedIcons.has(icon)) return;

  warnedIcons.add(icon);

  // eslint-disable-next-line no-console
  console.warn(
    `[Dynamic UI] DButtonIcon: the "${icon}" button has no accessible name. `
    + 'Pass aria-label, since an icon-only control has no text to fall back on '
    + 'and its icon is hidden from the accessibility tree. '
    + 'On a button, aria-labelledby or title work too. '
    + 'It never appears in production builds.',
  );
}
