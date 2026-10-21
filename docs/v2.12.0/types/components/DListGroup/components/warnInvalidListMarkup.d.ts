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
export default function warnInvalidListMarkup(container: 'div', item: 'li'): void;
