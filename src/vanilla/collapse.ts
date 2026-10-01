import { define } from './registry';

import type { Behaviour, Teardown } from './registry';

/**
 * Collapse.
 *
 * ```html
 * <div class="df-collapse" data-df-collapse>
 *   <button class="df-collapse-trigger" aria-expanded="false" aria-controls="c1">
 *     <span class="df-collapse-trigger-label">More</span>
 *   </button>
 *   <div class="df-collapse-body" id="c1">
 *     <div class="df-collapse-body-inner">…</div>
 *   </div>
 * </div>
 * ```
 *
 * ## There is no measuring here
 *
 * The usual way to animate a collapse is to read `scrollHeight`, set an
 * explicit pixel height, transition it, and clear it afterwards — which forces
 * a layout on every toggle and breaks the moment the content reflows mid-
 * animation.
 *
 * `collapse.css` uses `interpolate-size: allow-keywords`, so `height: auto`
 * animates on its own. All this has to do is toggle one attribute. A browser
 * without `interpolate-size` snaps open instead, which is the right failure:
 * the content is there either way.
 */

/**
 * Every mounted collapse, by the id of its body.
 *
 * An outside trigger names the body it controls — the same thing
 * `aria-controls` names — so this is the lookup that turns that id back into
 * the panel's own toggle. Keyed on the body rather than the wrapper because
 * the body is what `aria-controls` must point at for the disclosure to be
 * announced correctly, so it is the id an author has already written.
 */
type Apply = (expanded?: boolean) => void;
const panels = new Map<string, Apply>();

/** Opens, closes or toggles a collapse by the id of its body. */
export function toggle(id: string, expanded?: boolean): void {
  const apply = panels.get(id);
  if (!apply) {
    // eslint-disable-next-line no-console
    console.warn(`[dynamic] no collapse with a body id of "${id}"`);
    return;
  }
  apply(expanded);
}

function mount(root: HTMLElement): Teardown {
  const trigger = root.querySelector<HTMLElement>('.df-collapse-trigger');
  const body = root.querySelector<HTMLElement>('.df-collapse-body');
  if (!trigger || !body) return () => {};

  // Give the pair the wiring a screen reader needs if the author left it out.
  if (!body.id) body.id = `df-collapse-${Math.random().toString(36).slice(2, 9)}`;
  if (!trigger.getAttribute('aria-controls')) trigger.setAttribute('aria-controls', body.id);

  function apply(expanded: boolean) {
    body!.toggleAttribute('data-expanded', expanded);
    trigger!.setAttribute('aria-expanded', String(expanded));

    root.dispatchEvent(new CustomEvent('df:collapse:toggle', {
      bubbles: true,
      detail: { expanded },
    }));
  }

  const onClick = () => apply(trigger.getAttribute('aria-expanded') !== 'true');
  trigger.addEventListener('click', onClick);

  /*
   * Registered so something outside can reach it.
   *
   * `data-df-collapse-toggle="<body id>"` mirrors the modal's
   * `data-df-modal-open="<dialog id>"`, which is the precedent for a trigger
   * that lives somewhere else on the page. Neither has a React counterpart,
   * and neither needs one: a page-level trigger is page markup, not component
   * markup, so it does not break the rule that this layer only enhances the
   * DOM `src/components` renders.
   */
  panels.set(body.id, (next?: boolean) => {
    apply(next ?? trigger.getAttribute('aria-expanded') !== 'true');
  });

  /*
   * The body's attribute is the source of truth, not the trigger's.
   *
   * `data-expanded` is what the stylesheet reads, so if the two disagree in the
   * markup — easy to do by hand — the one that is actually painting wins, and
   * the trigger is corrected to match it.
   */
  apply(body.hasAttribute('data-expanded'));

  return () => {
    trigger.removeEventListener('click', onClick);
    panels.delete(body.id);
  };
}

/**
 * A trigger that lives outside the collapse it controls.
 *
 * `data-df-collapse-toggle` names the body id; `data-df-collapse-open` and
 * `-close` are the two one-way versions, for a trigger that should only ever
 * open or only ever close.
 */
function mountToggle(trigger: HTMLElement): Teardown {
  const onClick = () => {
    const id = trigger.getAttribute('data-df-collapse-toggle')
      ?? trigger.getAttribute('data-df-collapse-open')
      ?? trigger.getAttribute('data-df-collapse-close');
    if (!id) return;

    if (trigger.hasAttribute('data-df-collapse-open')) toggle(id, true);
    else if (trigger.hasAttribute('data-df-collapse-close')) toggle(id, false);
    else toggle(id);
  };

  trigger.addEventListener('click', onClick);
  return () => trigger.removeEventListener('click', onClick);
}

/** Exported as well as registered — see the note in `tabs.ts`. */
export const collapse: Behaviour = { name: 'collapse', selector: '[data-df-collapse]', mount };

export const collapseToggle: Behaviour = {
  name: 'collapse-toggle',
  selector: '[data-df-collapse-toggle], [data-df-collapse-open], [data-df-collapse-close]',
  mount: mountToggle,
};

define(collapse);
define(collapseToggle);
