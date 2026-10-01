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
   * The body's attribute is the source of truth, not the trigger's.
   *
   * `data-expanded` is what the stylesheet reads, so if the two disagree in the
   * markup — easy to do by hand — the one that is actually painting wins, and
   * the trigger is corrected to match it.
   */
  apply(body.hasAttribute('data-expanded'));

  return () => trigger.removeEventListener('click', onClick);
}

/** Exported as well as registered — see the note in `tabs.ts`. */
export const collapse: Behaviour = { name: 'collapse', selector: '[data-df-collapse]', mount };

define(collapse);
