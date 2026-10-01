import { define } from './registry';

import type { Behaviour, Teardown } from './registry';

/**
 * Modal.
 *
 * ```html
 * <button data-df-modal-open="terms">Read the terms</button>
 *
 * <dialog class="df-overlay" data-placement="center" id="terms" data-df-modal>
 *   <div class="df-overlay-header">…<button data-df-modal-close>×</button></div>
 *   <div class="df-overlay-body">…</div>
 * </dialog>
 * ```
 *
 * ## It is a real `<dialog>`
 *
 * The React build renders the same `<dialog>` with the same attributes — this
 * is the same contract driven from markup instead of from props, and the
 * stylesheet does not care which one built it.
 *
 * `data-placement` is also what makes a drawer: `start`, `end`, `top` and
 * `bottom` anchor the panel to an edge, `center` is a dialog, `fill` covers
 * the viewport. There is no separate offcanvas behaviour to register, because
 * there is no separate component — the placement is an attribute.
 *
 * What the tag buys, all of it correct and none of it written here:
 *
 * - **Focus is trapped**, and restored to the opener on close.
 * - **The rest of the page is inert**, so a screen reader cannot wander out of
 *   the modal into the page behind it.
 * - **Escape closes it**, with a `cancel` event to veto.
 * - **The top layer**, so it is above everything regardless of `z-index` — the
 *   bug every hand-rolled modal eventually has.
 * - **`::backdrop`**, so there is no backdrop element to insert and remove.
 *
 * A hand-written focus trap is the single most common source of modal
 * accessibility bugs. Not writing one is the feature.
 *
 * ## The two things it does NOT give you
 *
 * - **A name.** A dialog with no accessible name is announced as just "dialog".
 *   This wires `aria-labelledby` to the panel's own header when the markup does
 *   not already say otherwise, so a template author gets it right by writing
 *   the header they were going to write anyway.
 * - **A locked page.** `<dialog>` makes the page inert but does not stop it
 *   scrolling, so a wheel over the backdrop still moves the page behind it.
 */

/**
 * Freezes the page behind the topmost dialog.
 *
 * Counted, not a boolean: two stacked dialogs closing in order would otherwise
 * have the first one restore scrolling while the second is still open.
 *
 * The scrollbar's width is added back as padding, or removing it shifts the
 * whole page sideways as the modal opens — the jump every Bootstrap modal used
 * to make.
 */
let lockCount = 0;
let restoreStyles: { overflow: string; paddingInlineEnd: string } | null = null;

function lockScroll() {
  lockCount += 1;
  if (lockCount > 1) return;

  const { body } = document;
  restoreStyles = {
    overflow: body.style.overflow,
    paddingInlineEnd: body.style.paddingInlineEnd,
  };

  const scrollbar = window.innerWidth - document.documentElement.clientWidth;
  body.style.overflow = 'hidden';
  if (scrollbar > 0) body.style.paddingInlineEnd = `${scrollbar}px`;
}

function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount > 0 || !restoreStyles) return;

  document.body.style.overflow = restoreStyles.overflow;
  document.body.style.paddingInlineEnd = restoreStyles.paddingInlineEnd;
  restoreStyles = null;
}

/**
 * Points the dialog at its own header, so it has a name to be announced by.
 *
 * Only when the author has not already said otherwise — an explicit
 * `aria-labelledby` or `aria-label` in the markup always wins, because they
 * know what the panel is called better than its first heading does.
 */
function label(dialog: HTMLElement) {
  if (dialog.hasAttribute('aria-labelledby') || dialog.hasAttribute('aria-label')) return;

  const header = dialog.querySelector<HTMLElement>('.df-overlay-header > :first-child');
  if (!header) return;

  if (!header.id) {
    header.id = `${dialog.id || 'df-overlay'}-label`;
  }
  dialog.setAttribute('aria-labelledby', header.id);
}

function dialogFor(id: string): HTMLDialogElement | null {
  const element = document.getElementById(id);
  return element instanceof HTMLDialogElement ? element : null;
}

/** Opens by id. Exposed on `DF` so a page can open one from its own code. */
export function open(id: string): void {
  const dialog = dialogFor(id);
  if (!dialog || dialog.open) return;
  dialog.showModal();
  lockScroll();
}

export function close(id: string): void {
  dialogFor(id)?.close();
}

function mountDialog(dialog: HTMLElement): Teardown {
  if (!(dialog instanceof HTMLDialogElement)) {
    // eslint-disable-next-line no-console
    console.warn('[dynamic] data-df-modal needs a <dialog> element', dialog);
    return () => {};
  }

  const onClick = (event: MouseEvent) => {
    const target = event.target as Element;

    if (target.closest('[data-df-modal-close]')) {
      dialog.close();
      return;
    }

    /*
     * A click on the backdrop closes it.
     *
     * `<dialog>` has no backdrop click event, but a click on the backdrop has
     * the dialog itself as its target — the panel's children are the targets
     * for clicks inside. So "target is the dialog" means "outside the panel".
     */
    if (target === dialog && !dialog.hasAttribute('data-static-backdrop')) {
      dialog.close();
    }
  };

  /* A static backdrop also refuses Escape: both are ways out, and a modal that
     must be answered should not have one of them. */
  const onCancel = (event: Event) => {
    if (dialog.hasAttribute('data-static-backdrop')) event.preventDefault();
  };

  const onClose = () => {
    unlockScroll();
    dialog.dispatchEvent(new CustomEvent('df:modal:close', { bubbles: true }));
  };

  label(dialog);

  dialog.addEventListener('click', onClick);
  dialog.addEventListener('cancel', onCancel);
  dialog.addEventListener('close', onClose);

  // Markup that arrived already open — server-rendered, or opened before this
  // ran — still needs the page frozen.
  if (dialog.open) lockScroll();

  return () => {
    if (dialog.open) unlockScroll();
    dialog.removeEventListener('click', onClick);
    dialog.removeEventListener('cancel', onCancel);
    dialog.removeEventListener('close', onClose);
  };
}

function mountOpener(trigger: HTMLElement): Teardown {
  const onClick = () => {
    const id = trigger.getAttribute('data-df-modal-open');
    if (!id) return;
    const dialog = dialogFor(id);
    if (!dialog) {
      // eslint-disable-next-line no-console
      console.warn(`[dynamic] no <dialog id="${id}"> to open`, trigger);
      return;
    }
    dialog.showModal();
    lockScroll();
    dialog.dispatchEvent(new CustomEvent('df:modal:open', { bubbles: true, detail: { trigger } }));
  };

  trigger.addEventListener('click', onClick);
  return () => trigger.removeEventListener('click', onClick);
}

/** Exported as well as registered — see the note in `tabs.ts`. */
export const modal: Behaviour = { name: 'modal', selector: '[data-df-modal]', mount: mountDialog };
export const modalOpener: Behaviour = {
  name: 'modal-open', selector: '[data-df-modal-open]', mount: mountOpener,
};

define(modal);
define(modalOpener);
