import { define } from './registry';

import type { Behaviour, Teardown } from './registry';

/**
 * Dropzone.
 *
 * ```html
 * <section class="df-dropzone-wrapper" data-df-dropzone>
 *   <div class="df-dropzone" role="button" tabindex="0"
 *        aria-label="Choose files, or drop them here">
 *     <input type="file" accept="image/*" multiple hidden>
 *     <div class="df-dropzone-prompt">…</div>
 *   </div>
 *   <ul class="df-dropzone-files" aria-label="Selected files"></ul>
 * </section>
 * ```
 *
 * ## The native input does the work
 *
 * Opening a file dialog, filtering by `accept`, allowing more than one file —
 * all of it belongs to `<input type="file">`, so this does not reimplement
 * any of it. What is left is the part the input cannot do: dragging onto the
 * page, and reflecting that back as the state attributes the stylesheet reads.
 *
 * Keep the input in the markup rather than creating one. A form that posts
 * normally needs it to have a `name`, and an input this script invented would
 * not be in the form data.
 *
 * ## Dropping is a mouse gesture
 *
 * There is no keyboard equivalent, which makes the box itself the keyboard
 * path: `role="button"`, a tab stop and a name, with Enter and Space opening
 * the dialog. A dropzone that is only droppable is a dropzone most people
 * cannot use.
 */

/** Whether a dragged item would be accepted, read before it is dropped. */
function dragHasFiles(event: DragEvent): boolean {
  return Array.from(event.dataTransfer?.items ?? []).some((i) => i.kind === 'file');
}

function mount(root: HTMLElement): Teardown {
  const zone = root.querySelector<HTMLElement>('.df-dropzone');
  const input = root.querySelector<HTMLInputElement>('input[type="file"]');

  if (!zone || !input) {
    // eslint-disable-next-line no-console
    console.warn('[dynamic] data-df-dropzone needs a .df-dropzone and a file input', root);
    return () => {};
  }

  const list = root.querySelector<HTMLElement>('.df-dropzone-files');
  const disabled = () => input.disabled || zone.getAttribute('aria-disabled') === 'true';

  /*
   * A counter, not a boolean.
   *
   * `dragleave` fires every time the pointer crosses into a CHILD of the zone,
   * so a boolean flickers off the moment the cursor passes over the prompt
   * text. Counting enters and leaves is the standard fix and the reason the
   * highlight does not strobe.
   */
  let depth = 0;

  const setState = (valid: boolean | null) => {
    zone.toggleAttribute('data-valid', valid === true);
    zone.toggleAttribute('data-invalid', valid === false);
  };

  const onDragEnter = (event: DragEvent) => {
    if (disabled()) return;
    event.preventDefault();
    depth += 1;
    setState(dragHasFiles(event));
  };

  /* Without this the browser opens the file instead of letting it drop. */
  const onDragOver = (event: DragEvent) => {
    if (!disabled()) event.preventDefault();
  };

  const onDragLeave = () => {
    depth = Math.max(0, depth - 1);
    if (depth === 0) setState(null);
  };

  const onDrop = (event: DragEvent) => {
    if (disabled()) return;
    event.preventDefault();
    depth = 0;
    setState(null);

    const dropped = event.dataTransfer?.files;
    if (!dropped?.length) return;

    /*
     * Assigned to the input rather than tracked separately, so the files are
     * in the form data and `change` fires for whoever is listening. A dropzone
     * that kept its own list would be a control the surrounding form cannot
     * see.
     */
    input.files = dropped;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  };

  const onActivate = (event: Event) => {
    if (disabled()) return;
    if (event.target === input) return;
    input.click();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    if (disabled()) return;
    /* Space scrolls the page otherwise, which is not what a button does. */
    event.preventDefault();
    input.click();
  };

  const render = () => {
    zone.toggleAttribute('data-selected', input.files !== null && input.files.length > 0);

    if (!list) return;
    list.replaceChildren();

    Array.from(input.files ?? []).forEach((file) => {
      const item = document.createElement('li');
      /* The same class the React build puts here, so one stylesheet dresses both
         — and so `css:flow` can see the item's margin is decided. */
      item.className = 'df-dropzone-file';
      const name = document.createElement('span');
      /* `textContent`: a file name is user input and may contain markup. */
      name.textContent = file.name;
      item.appendChild(name);
      list.appendChild(item);
    });

    root.dispatchEvent(new CustomEvent('df:dropzone:change', {
      bubbles: true,
      detail: { files: Array.from(input.files ?? []) },
    }));
  };

  zone.addEventListener('dragenter', onDragEnter);
  zone.addEventListener('dragover', onDragOver);
  zone.addEventListener('dragleave', onDragLeave);
  zone.addEventListener('drop', onDrop);
  zone.addEventListener('click', onActivate);
  zone.addEventListener('keydown', onKeyDown);
  input.addEventListener('change', render);

  /* Settle from the markup, the way every other behaviour here does. */
  render();

  return () => {
    zone.removeEventListener('dragenter', onDragEnter);
    zone.removeEventListener('dragover', onDragOver);
    zone.removeEventListener('dragleave', onDragLeave);
    zone.removeEventListener('drop', onDrop);
    zone.removeEventListener('click', onActivate);
    zone.removeEventListener('keydown', onKeyDown);
    input.removeEventListener('change', render);
  };
}

/** Exported as well as registered — see the note in `tabs.ts`. */
export const dropzone: Behaviour = {
  name: 'dropzone',
  selector: '[data-df-dropzone]',
  mount,
};

define(dropzone);
