import { define } from './registry';

import type { Behaviour, Teardown } from './registry';

/**
 * Tabs.
 *
 * Enhances the markup `DTabs` renders, so one stylesheet dresses both:
 *
 * ```html
 * <div class="df-tabs" data-df-tabs>
 *   <div class="df-tablist" role="tablist">
 *     <button class="df-tab" role="tab" aria-controls="p1" aria-selected="true">One</button>
 *     <button class="df-tab" role="tab" aria-controls="p2">Two</button>
 *   </div>
 *   <div class="df-tabpanel" id="p1">…</div>
 *   <div class="df-tabpanel" id="p2" hidden>…</div>
 * </div>
 * ```
 *
 * The CSS reads `aria-selected` on the tab and `hidden` on the panel, so this
 * sets exactly those two things and nothing of its own. Written without the
 * script, the markup is still a readable heading and its content.
 *
 * ## Roving tabindex
 *
 * Only the selected tab is reachable with Tab; the arrows move between them.
 * That is the APG tab pattern, and the reason for it is that a tab list is one
 * control — tabbing through fifteen tabs to reach the panel is not navigation,
 * it is an obstacle.
 */

function panelFor(tab: HTMLElement, root: HTMLElement): HTMLElement | null {
  const id = tab.getAttribute('aria-controls');
  if (!id) return null;
  // Scoped to the tab set first so two tab sets on a page cannot collide, then
  // falling back to the document for a panel rendered elsewhere.
  return root.querySelector<HTMLElement>(`#${CSS.escape(id)}`)
    ?? document.getElementById(id);
}

function mount(root: HTMLElement): Teardown {
  const list = root.querySelector<HTMLElement>('[role="tablist"]');
  if (!list) return () => {};

  const tabs = () => Array.from(list.querySelectorAll<HTMLElement>('[role="tab"]'))
    .filter((tab) => !tab.hasAttribute('disabled') && tab.getAttribute('aria-disabled') !== 'true');

  function select(tab: HTMLElement, moveFocus = true) {
    Array.from(list!.querySelectorAll<HTMLElement>('[role="tab"]')).forEach((other) => {
      const isTarget = other === tab;
      other.setAttribute('aria-selected', String(isTarget));
      // The attribute, not the property: the same write either way, and it
      // keeps the lint rule about reassigning a parameter's properties honest.
      other.setAttribute('tabindex', isTarget ? '0' : '-1');

      const panel = panelFor(other, root);
      if (panel) panel.toggleAttribute('hidden', !isTarget);
    });

    if (moveFocus) tab.focus();

    root.dispatchEvent(new CustomEvent('df:tabs:change', {
      bubbles: true,
      detail: { tab, panel: panelFor(tab, root) },
    }));
  }

  const onClick = (event: Event) => {
    const tab = (event.target as Element).closest<HTMLElement>('[role="tab"]');
    if (!tab || !list.contains(tab) || !tabs().includes(tab)) return;
    select(tab, false);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const current = (event.target as Element).closest<HTMLElement>('[role="tab"]');
    if (!current) return;

    const all = tabs();
    const index = all.indexOf(current);
    if (index < 0) return;

    // A vertical tab list swaps which arrows move between tabs, so the keys
    // match the direction the tabs are laid out in.
    const vertical = list.getAttribute('aria-orientation') === 'vertical';
    const previous = vertical ? 'ArrowUp' : 'ArrowLeft';
    const next = vertical ? 'ArrowDown' : 'ArrowRight';

    let target: HTMLElement | undefined;
    if (event.key === next) target = all[(index + 1) % all.length];
    else if (event.key === previous) target = all[(index - 1 + all.length) % all.length];
    else if (event.key === 'Home') [target] = all;
    else if (event.key === 'End') target = all[all.length - 1];
    else return;

    event.preventDefault();
    if (target) select(target);
  };

  list.addEventListener('click', onClick);
  list.addEventListener('keydown', onKeyDown);

  /*
   * Settle the initial state from the markup rather than assuming it.
   *
   * A template author writes `aria-selected="true"` on one tab and may well
   * forget `hidden` on the other panels, or the tabindex on the others. Reading
   * their intent and completing it is friendlier than requiring them to get
   * every attribute right, and it makes the server-rendered state and the
   * enhanced state agree.
   */
  const initial = list.querySelector<HTMLElement>('[role="tab"][aria-selected="true"]')
    ?? tabs()[0];
  if (initial) select(initial, false);

  return () => {
    list.removeEventListener('click', onClick);
    list.removeEventListener('keydown', onKeyDown);
  };
}

/**
 * Exported as well as registered.
 *
 * A bare `import './tabs'` in the entry point is a side-effect import, and
 * `package.json` declares that only `*.css` has side effects — so a bundler is
 * entitled to drop it, and esbuild did. The behaviour vanished from the bundle
 * with nothing to show for it. Importing a VALUE cannot be dropped.
 */
export const tabs: Behaviour = { name: 'tabs', selector: '[data-df-tabs]', mount };

define(tabs);
