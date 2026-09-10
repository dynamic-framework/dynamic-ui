/**
 * Warns, once per icon and only outside production builds, that an icon-only
 * button has no accessible name.
 *
 * The control has no text to fall back on and its icon is hidden from the
 * accessibility tree, so the name has to be given explicitly. `aria-label` is
 * the direct way; on a button `aria-labelledby` and `title` count too, since
 * `rest` reaches the DOM there, while an anchor drops them — hence `kind`, so
 * the advice matches what the element can actually receive.
 *
 * A legacy icon-font icon used to leak its ligature as the name by accident —
 * never a good one, being unlocalised and often meaningless ("more_vert") — and
 * no longer does, so the omission is now visible instead of silent.
 *
 * The `process.env.NODE_ENV` guard is what bundlers constant-fold, so the whole
 * call — and this module — drops out of a consumer's production bundle.
 */
export default function warnMissingAccessibleName(icon: string, kind: 'button' | 'link'): void;
