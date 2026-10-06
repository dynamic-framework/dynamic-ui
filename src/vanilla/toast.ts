import { define } from './registry';

import type { Behaviour, Teardown } from './registry';

/**
 * Toast.
 *
 * The one component here that is created rather than enhanced — a toast
 * announces something that just happened, so there is nothing in the page for
 * it to attach to:
 *
 * ```js
 * DF.toast({ title: 'Saved', color: 'success' });
 * ```
 *
 * A toast already in the markup is still enhanced, so a server-rendered
 * confirmation gets the same dismiss button and timer:
 *
 * ```html
 * <div class="df-toast" data-df-toast data-duration="6000">…</div>
 * ```
 */

export type ToastPlacement =
  | 'top-end' | 'top-start' | 'top-center'
  | 'bottom-end' | 'bottom-start' | 'bottom-center';

export type ToastOptions = {
  title: string;
  description?: string;
  /** A role from the token layer: primary, success, danger, … */
  color?: string;
  /** Milliseconds before it leaves. `0` keeps it until dismissed. */
  duration?: number;
  placement?: ToastPlacement;
  dismissible?: boolean;
  /** Label for the dismiss button, for a page that is not in English. */
  dismissLabel?: string;
};

const DEFAULT_DURATION = 5000;
const regions = new Map<ToastPlacement, HTMLElement>();

function regionFor(placement: ToastPlacement): HTMLElement {
  const existing = regions.get(placement);
  if (existing?.isConnected) return existing;

  const region = document.createElement('div');
  region.className = 'df-toast-region';
  region.dataset.placement = placement;
  /*
   * The REGION is the live region, not each toast.
   *
   * Announcing from a container that is already in the document means a screen
   * reader reads the toast when it arrives. A live region inserted at the same
   * moment as its content is frequently not announced at all — the technology
   * has to be watching the element before the change happens.
   */
  region.setAttribute('role', 'status');
  region.setAttribute('aria-live', 'polite');
  region.setAttribute('aria-atomic', 'false');

  document.body.appendChild(region);
  regions.set(placement, region);
  return region;
}

/**
 * Removes a toast, letting its exit transition finish first.
 *
 * The state goes on the SLOT, not the toast: that is where the stylesheet puts
 * the motion, and it is the same place the React container puts it, so one
 * rule serves both. A toast enhanced in place has no slot — it is wrapped on
 * mount so there always is one.
 */
function remove(element: HTMLElement): void {
  const slot = element.closest<HTMLElement>('.df-toast-slot') ?? element;
  slot.setAttribute('data-leaving', '');
  const done = () => slot.remove();

  const { transitionDuration } = getComputedStyle(slot);
  const animates = parseFloat(transitionDuration) > 0;
  if (animates) slot.addEventListener('transitionend', done, { once: true });
  else done();

  // A transition that never starts — a hidden tab, a browser that ignores the
  // rule — would leave the node forever.
  window.setTimeout(done, 400);
}

/** The slot the stylesheet animates. Created if the toast has none. */
function slotFor(element: HTMLElement): HTMLElement {
  const existing = element.closest<HTMLElement>('.df-toast-slot');
  if (existing) return existing;

  const slot = document.createElement('div');
  slot.className = 'df-toast-slot';
  element.replaceWith(slot);
  slot.appendChild(element);
  return slot;
}

function wire(element: HTMLElement): Teardown {
  /*
   * A server-rendered toast is wrapped on mount.
   *
   * It arrives as a bare `.df-toast`, and the motion and the `data-leaving`
   * state live on the slot — so without this, an enhanced toast would dismiss
   * with no animation while a created one animated, from the same stylesheet.
   */
  slotFor(element);

  const timers: number[] = [];

  const onClick = (event: Event) => {
    if ((event.target as Element).closest('[data-df-toast-dismiss]')) remove(element);
  };
  element.addEventListener('click', onClick);

  const duration = Number(element.dataset.duration ?? DEFAULT_DURATION);
  if (duration > 0) {
    let remaining = duration;
    let startedAt = Date.now();

    const schedule = () => {
      startedAt = Date.now();
      timers.push(window.setTimeout(() => remove(element), remaining));
    };

    /*
     * Hovering holds the timer, and so does focus.
     *
     * A toast that vanishes while it is being read, or while someone is
     * tabbing to its action, is the complaint everyone has about toasts.
     * WCAG 2.2.1 asks for the same thing.
     */
    const pause = () => {
      timers.forEach(window.clearTimeout);
      timers.length = 0;
      remaining -= Date.now() - startedAt;
    };
    const resume = () => { if (remaining > 0) schedule(); };

    element.addEventListener('pointerenter', pause);
    element.addEventListener('pointerleave', resume);
    element.addEventListener('focusin', pause);
    element.addEventListener('focusout', resume);
    schedule();

    return () => {
      timers.forEach(window.clearTimeout);
      element.removeEventListener('click', onClick);
      element.removeEventListener('pointerenter', pause);
      element.removeEventListener('pointerleave', resume);
      element.removeEventListener('focusin', pause);
      element.removeEventListener('focusout', resume);
    };
  }

  return () => element.removeEventListener('click', onClick);
}

/** Shows a toast and returns a function that dismisses it early. */
export function toast(options: ToastOptions): () => void {
  const {
    title,
    description,
    color,
    duration = DEFAULT_DURATION,
    placement = 'top-end',
    dismissible = true,
    dismissLabel = 'Close',
  } = options;

  const element = document.createElement('div');
  element.className = 'df-toast';
  element.dataset.duration = String(duration);
  element.setAttribute('data-df-toast', '');
  if (color) element.dataset.color = color;

  // Built with the DOM rather than `innerHTML`: a title coming from a server
  // response is untrusted text, and this is the one place a vanilla build would
  // otherwise hand it to the HTML parser.
  const head = document.createElement('div');
  head.className = description ? 'df-toast-header' : 'df-toast-content';

  const heading = document.createElement('p');
  heading.className = 'df-toast-title';
  heading.textContent = title;
  head.appendChild(heading);

  if (dismissible) {
    const dismiss = document.createElement('button');
    dismiss.type = 'button';
    dismiss.className = 'df-button df-toast-dismiss';
    dismiss.dataset.variant = 'link';
    dismiss.dataset.color = 'neutral';
    dismiss.dataset.size = 'sm';
    dismiss.setAttribute('data-icon-only', '');
    dismiss.setAttribute('data-df-toast-dismiss', '');
    dismiss.setAttribute('aria-label', dismissLabel);
    dismiss.textContent = '×';
    head.appendChild(dismiss);
  }

  element.appendChild(head);

  if (description) {
    const body = document.createElement('div');
    body.className = 'df-toast-content';
    body.textContent = description;
    element.appendChild(body);
  }

  const slot = document.createElement('div');
  slot.className = 'df-toast-slot';
  slot.appendChild(element);
  regionFor(placement).appendChild(slot);
  // The registry's observer will also find it; mounting here means the timer
  // starts on the frame it appears rather than on the next microtask.
  const teardown = wire(element);

  return () => { teardown(); remove(element); };
}

/** Exported as well as registered — see the note in `tabs.ts`. */
export const toastBehaviour: Behaviour = {
  name: 'toast', selector: '[data-df-toast]', mount: wire,
};

define(toastBehaviour);
