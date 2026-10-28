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
  /** Id the dialog points to with `aria-labelledby`, or undefined when it uses `aria-label`. */
  labelledById?: string;
  /** Whether the consumer passed an explicit `ariaLabelledby`. */
  hasAriaLabelledby: boolean;
};

/**
 * Warns, only outside production builds, when a dialog ends up with no
 * accessible name.
 *
 * A dialog takes its name from the element `aria-labelledby` points to. If that
 * element is missing or has no text, the name is the empty string: there is no
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
  labelledById,
  hasAriaLabelledby,
}: WarnDialogNameOptions): void {
  if (!labelledById) return;
  if (document.getElementById(labelledById)?.textContent?.trim()) return;

  const key = `${component}:${name}`;
  if (warnedDialogs.has(key)) return;
  warnedDialogs.add(key);

  const advice = hasAriaLabelledby
    ? `its ariaLabelledby points to id="${labelledById}", and no element with that id has any text.`
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
