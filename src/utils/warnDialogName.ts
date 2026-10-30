/**
 * Dialogs already reported, keyed by component and `name`, so the same mistake
 * only warns once per page load however often the dialog re-opens. The id is
 * no good as a key: `useId` gives a fresh one on every mount.
 */
const warnedDialogs = new Set<string>();

type WarnDialogNameOptions = {
  /** Component name, used to key the warning and to address the developer. */
  component: 'DOffcanvas';
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
 * Whether a descendant is hidden from assistive technology, and so contributes
 * nothing to the name.
 *
 * `display: none` and `visibility: hidden` take an element out of the
 * accessibility tree; the `visually-hidden` pattern uses neither — it clips an
 * absolutely positioned box — so an off-screen title still counts, which is a
 * legitimate way to name a dialog.
 */
function isHiddenFromAT(element: Element): boolean {
  if (element.getAttribute('aria-hidden') === 'true' || element.hasAttribute('hidden')) {
    return true;
  }
  const { display, visibility } = getComputedStyle(element);
  return display === 'none' || visibility === 'hidden';
}

/**
 * Text alternative of an element that has one of its own, such as an image's
 * `alt`. An explicit empty `alt` marks a decorative image and contributes
 * nothing, which is why the attribute's presence is what matters, not whether
 * it has content. Elements without the concept return undefined, so naming
 * falls through to their content.
 */
function textAlternative(element: Element): string | undefined {
  const { tagName } = element;
  const hasAlt = tagName === 'IMG'
    || tagName === 'AREA'
    || (tagName === 'INPUT' && element.getAttribute('type') === 'image');
  if (!hasAlt) return undefined;

  return element.getAttribute('alt')?.trim();
}

/**
 * Accessible name an element contributes, in the order a browser resolves it:
 * `aria-label`, then its own text alternative, then its content, and `title`
 * only as a last resort. Descendants hidden from assistive technology
 * contribute nothing to the content step.
 *
 * `aria-labelledby` is not followed. The computation does not chain
 * references, so a title that only carries one leaves the dialog unnamed, and
 * warning is the right call.
 */
function nameOf(element: Element): string {
  const ariaLabel = element.getAttribute('aria-label')?.trim();
  if (ariaLabel) return ariaLabel;

  const alternative = textAlternative(element);
  if (alternative !== undefined) return alternative;

  const fromContent = Array.from(element.childNodes)
    .map((node) => {
      if (node.nodeType === Node.TEXT_NODE) return node.nodeValue ?? '';
      if (node.nodeType !== Node.ELEMENT_NODE) return '';

      const child = node as Element;
      if (isHiddenFromAT(child)) return '';

      // El espaciado evita que se peguen palabras cuando un descendiente
      // aporta un atributo en lugar de su propio texto.
      const name = nameOf(child);
      return name ? ` ${name} ` : '';
    })
    .join('')
    .trim();
  if (fromContent) return fromContent;

  return element.getAttribute('title')?.trim() ?? '';
}

/**
 * First element in document order carrying `id`, the one a browser resolves an
 * `aria-labelledby` reference to when several share it. It is spelled out
 * rather than delegated to `getElementById`, because jsdom resolves duplicates
 * differently and would hide exactly the case worth reporting: the defect this
 * warning exists for produces two elements with the same id. The id is
 * compared, never interpolated into a selector — `name` is free text, so the
 * id it derives is not guaranteed to be a valid CSS selector.
 */
function firstById(id: string): Element | undefined {
  return Array.from(document.querySelectorAll('[id]')).find((element) => element.id === id);
}

/**
 * Approximates the accessible name an element referenced by `aria-labelledby`
 * contributes.
 *
 * It is an approximation, enough for a development warning rather than a
 * reimplementation of the accessible name computation. Beyond the order
 * `nameOf` follows, the part that matters here is the exemption: a node
 * referenced directly by `aria-labelledby` contributes even when hidden —
 * with `aria-hidden`, the `hidden` attribute or CSS — while hidden descendants
 * do not.
 */
function referencedName(element: Element): string {
  return nameOf(element);
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
      const element = id ? firstById(id) : undefined;
      return !!element && !!referencedName(element);
    });
  if (named) return;

  const key = `${component}:${name}`;
  if (warnedDialogs.has(key)) return;
  warnedDialogs.add(key);

  const advice = hasAriaLabelledby
    ? `its ariaLabelledby points to "${labelledBy}", and nothing with that id has an accessible name.`
    : `give it a title in ${component}.Header, or — for a title that lives elsewhere, such as `
      + 'hidden in the body — pass ariaLabelledby with its id, or pass ariaLabel with its '
      + 'plain-text name.';

  // eslint-disable-next-line no-console
  console.warn(
    `[Dynamic UI] ${component}: this dialog has no accessible name, so a screen reader `
    + `announces it without saying what it is — ${advice} `
    + 'It never appears in production builds.',
  );
}
