/**
 * Dialogs already reported, keyed by component and `name`, so the same mistake
 * only warns once per page load however often the dialog re-opens. The id is
 * no good as a key: `useId` gives a fresh one on every mount.
 */
const warnedDialogs = new Set<string>();

type WarnDialogNameOptions = {
  /** Component name, used to key the warning and to address the developer. */
  component: 'DModal' | 'DOffcanvas';
  /** The dialog's `name` prop, its stable identity across mounts. */
  name: string;
  /**
   * Value of the dialog's `aria-labelledby`, or undefined when it uses
   * `aria-label`. May reference several ids, separated by whitespace.
   */
  labelledBy?: string;
  /** Whether the consumer passed an explicit `ariaLabelledby`. */
  hasAriaLabelledby: boolean;
};

/**
 * Text a descendant contributes to the name of the element being named.
 *
 * Descendants hidden from assistive technology contribute nothing, and one
 * carrying its own `aria-label` contributes that instead of its subtree.
 * Only `aria-hidden` and the `hidden` attribute are considered: CSS-hidden
 * content is deliberately not excluded, since the `visually-hidden` pattern —
 * off-screen but exposed to a screen reader — is a legitimate way to title a
 * dialog.
 */
function descendantText(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) return node.nodeValue ?? '';
  if (node.nodeType !== Node.ELEMENT_NODE) return '';

  const element = node as Element;
  if (element.getAttribute('aria-hidden') === 'true' || element.hasAttribute('hidden')) {
    return '';
  }

  const ariaLabel = element.getAttribute('aria-label')?.trim();
  if (ariaLabel) return ` ${ariaLabel} `;

  return Array.from(element.childNodes).map(descendantText).join('');
}

/**
 * Approximates the accessible name an element referenced by `aria-labelledby`
 * contributes.
 *
 * It is an approximation, enough for a development warning rather than a
 * reimplementation of the accessible name computation. It follows the parts
 * that decide whether a dialog ends up named at all:
 *
 * - `aria-label` on the element wins over its content.
 * - `aria-labelledby` on the element is *not* followed: the computation does
 *   not chain references, so a title that only carries one leaves the dialog
 *   unnamed, and warning is the right call.
 * - The element itself contributes even when hidden — a node referenced
 *   directly by `aria-labelledby` is exempt — while hidden descendants do not.
 */
function referencedName(element: Element): string {
  const ariaLabel = element.getAttribute('aria-label')?.trim();
  if (ariaLabel) return ariaLabel;

  return Array.from(element.childNodes).map(descendantText).join('').trim();
}

/**
 * Warns, only outside production builds, when a dialog ends up with no
 * accessible name.
 *
 * A dialog takes its name from the elements `aria-labelledby` points to. If
 * none of them resolves to any text, the name is the empty string: there is no
 * fallback to the dialog's own content. A screen reader then announces the
 * dialog without saying what it is, and the user is left inside a focus trap
 * they cannot identify. It fails WCAG 4.1.2 and axe reports it as
 * `aria-dialog-name`.
 *
 * Nothing the component can infer fixes this — the name has to come from the
 * consumer — so the warning names the ways out, and tells apart a header with
 * no title from an `ariaLabelledby` that points nowhere.
 *
 * `getElementById` rather than a selector: ids from `useId` and from consumers
 * are not guaranteed to be valid CSS selectors.
 *
 * This is a mount-time check: a title rendered later, after an async update,
 * warns even though it eventually arrives.
 *
 * The `process.env.NODE_ENV` guard belongs at the call site — that is what
 * bundlers constant-fold, dropping this module from a consumer's production
 * bundle.
 */
export default function warnDialogName({
  component,
  name,
  labelledBy,
  hasAriaLabelledby,
}: WarnDialogNameOptions): void {
  if (!labelledBy) return;

  // `aria-labelledby` takes a whitespace-separated list of ids, and the name is
  // what all of them contribute together: one with text is enough to name the
  // dialog. Ids that match nothing are skipped.
  const named = labelledBy
    .trim()
    .split(/\s+/)
    .some((id) => {
      const element = id && document.getElementById(id);
      return !!element && !!referencedName(element);
    });
  if (named) return;

  const key = `${component}:${name}`;
  if (warnedDialogs.has(key)) return;
  warnedDialogs.add(key);

  const advice = hasAriaLabelledby
    ? `its ariaLabelledby points to "${labelledBy}", and nothing with that id has an accessible name.`
    : 'give it a title in '
      + `${component}.Header, or pass ariaLabelledby with the id of a title elsewhere in the `
      + 'dialog, or pass ariaLabel with its plain-text name.';

  // eslint-disable-next-line no-console
  console.warn(
    `[Dynamic UI] ${component}: this dialog has no accessible name, so a screen reader `
    + `announces it without saying what it is — ${advice} `
    + 'It never appears in production builds.',
  );
}
