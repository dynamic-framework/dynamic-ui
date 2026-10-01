/// <reference types="@testing-library/jest-dom" />

import userEvent from '@testing-library/user-event';

import {
  destroy, enhance, start, stop, toast,
} from './index';

/**
 * `<dialog>` is stubbed for the whole suite in `tests/setup.ts` — see the note
 * there on what a stub can and cannot stand in for.
 */

afterEach(() => {
  stop();
  document.body.innerHTML = '';
});

const html = (markup: string) => {
  document.body.innerHTML = markup;
  enhance(document);
};

describe('vanilla registry', () => {
  it('should enhance markup that is already on the page', () => {
    document.body.innerHTML = '<div class="df-collapse" data-df-collapse>'
      + '<button class="df-collapse-trigger"></button>'
      + '<div class="df-collapse-body"></div></div>';

    expect(enhance(document)).toBe(1);
  });

  /**
   * The one that matters on a real page. Modyo renders widgets after load, so
   * a layer that enhanced once would leave everything that arrived later inert
   * — and silently: the markup is there, the CSS is there, nothing happens.
   */
  it('should enhance markup that arrives later', async () => {
    start();

    const widget = document.createElement('div');
    widget.innerHTML = '<div class="df-collapse" data-df-collapse>'
      + '<button class="df-collapse-trigger"></button>'
      + '<div class="df-collapse-body"></div></div>';
    document.body.appendChild(widget);

    // The observer delivers on a microtask.
    await Promise.resolve();

    expect(widget.querySelector('.df-collapse-trigger')).toHaveAttribute('aria-expanded', 'false');
  });

  /** The observer fires for reparenting too; mounting twice doubles listeners. */
  it('should not enhance the same element twice', () => {
    html('<div class="df-collapse" data-df-collapse>'
      + '<button class="df-collapse-trigger"></button>'
      + '<div class="df-collapse-body"></div></div>');

    expect(enhance(document)).toBe(0);
  });

  it('should enhance the root element itself, not only its descendants', () => {
    const root = document.createElement('div');
    root.className = 'df-collapse';
    root.setAttribute('data-df-collapse', '');
    root.innerHTML = '<button class="df-collapse-trigger"></button><div class="df-collapse-body"></div>';
    document.body.appendChild(root);

    expect(enhance(root)).toBe(1);
  });

  it('should let a subtree be torn down and enhanced again', () => {
    html('<div class="df-collapse" data-df-collapse>'
      + '<button class="df-collapse-trigger"></button>'
      + '<div class="df-collapse-body"></div></div>');

    destroy(document);
    expect(enhance(document)).toBe(1);
  });

  /** One broken element must not stop the rest of the page working. */
  it('should survive a behaviour that throws', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    html('<div data-df-modal></div>'
      + '<div class="df-collapse" data-df-collapse>'
      + '<button class="df-collapse-trigger"></button>'
      + '<div class="df-collapse-body"></div></div>');

    expect(document.querySelector('.df-collapse-trigger')).toHaveAttribute('aria-expanded');
    spy.mockRestore();
  });
});

describe('vanilla tabs', () => {
  const TABS = `
    <div class="df-tabs" data-df-tabs>
      <div class="df-tablist" role="tablist">
        <button class="df-tab" role="tab" id="t1" aria-controls="p1" aria-selected="true">One</button>
        <button class="df-tab" role="tab" id="t2" aria-controls="p2">Two</button>
        <button class="df-tab" role="tab" id="t3" aria-controls="p3">Three</button>
      </div>
      <div class="df-tabpanel" id="p1">Panel one</div>
      <div class="df-tabpanel" id="p2">Panel two</div>
      <div class="df-tabpanel" id="p3">Panel three</div>
    </div>`;

  /**
   * The author marked one tab selected and left the panels alone. Completing
   * their intent is friendlier than requiring every attribute to be right, and
   * it makes the server-rendered state and the enhanced state agree.
   */
  it('should settle the initial state from the markup', () => {
    html(TABS);

    expect(document.getElementById('p1')).not.toHaveAttribute('hidden');
    expect(document.getElementById('p2')).toHaveAttribute('hidden');
    expect(document.getElementById('t1')).toHaveAttribute('tabindex', '0');
    expect(document.getElementById('t2')).toHaveAttribute('tabindex', '-1');
  });

  it('should select on click and move only the two attributes the CSS reads', async () => {
    const user = userEvent.setup();
    html(TABS);

    await user.click(document.getElementById('t2')!);

    expect(document.getElementById('t2')).toHaveAttribute('aria-selected', 'true');
    expect(document.getElementById('t1')).toHaveAttribute('aria-selected', 'false');
    expect(document.getElementById('p2')).not.toHaveAttribute('hidden');
    expect(document.getElementById('p1')).toHaveAttribute('hidden');
  });

  it('should move between tabs with the arrows and wrap round', async () => {
    const user = userEvent.setup();
    html(TABS);

    document.getElementById('t1')!.focus();
    await user.keyboard('{ArrowRight}');
    expect(document.getElementById('t2')).toHaveFocus();

    await user.keyboard('{ArrowRight}{ArrowRight}');
    expect(document.getElementById('t1')).toHaveFocus();

    await user.keyboard('{ArrowLeft}');
    expect(document.getElementById('t3')).toHaveFocus();
  });

  it('should jump to the ends with Home and End', async () => {
    const user = userEvent.setup();
    html(TABS);

    document.getElementById('t1')!.focus();
    await user.keyboard('{End}');
    expect(document.getElementById('t3')).toHaveFocus();

    await user.keyboard('{Home}');
    expect(document.getElementById('t1')).toHaveFocus();
  });

  /** A vertical list is laid out down the page, so the down arrow should move down it. */
  it('should use the up and down arrows when the list is vertical', async () => {
    const user = userEvent.setup();
    html(TABS.replace('role="tablist"', 'role="tablist" aria-orientation="vertical"'));

    document.getElementById('t1')!.focus();
    await user.keyboard('{ArrowDown}');
    expect(document.getElementById('t2')).toHaveFocus();

    await user.keyboard('{ArrowRight}');
    expect(document.getElementById('t2')).toHaveFocus();
  });

  it('should skip a disabled tab', async () => {
    const user = userEvent.setup();
    html(TABS.replace('id="t2"', 'id="t2" disabled'));

    document.getElementById('t1')!.focus();
    await user.keyboard('{ArrowRight}');
    expect(document.getElementById('t3')).toHaveFocus();
  });

  it('should announce the change', async () => {
    const user = userEvent.setup();
    html(TABS);

    const seen: string[] = [];
    document.addEventListener('df:tabs:change', (event) => {
      const { tab } = (event as CustomEvent<{ tab: HTMLElement }>).detail;
      seen.push(tab.id);
    });

    await user.click(document.getElementById('t3')!);
    expect(seen).toEqual(['t3']);
  });
});

describe('vanilla collapse', () => {
  const COLLAPSE = `
    <div class="df-collapse" data-df-collapse>
      <button class="df-collapse-trigger" id="trigger">More</button>
      <div class="df-collapse-body" id="body"><div class="df-collapse-body-inner">…</div></div>
    </div>`;

  it('should toggle the attribute the stylesheet reads', async () => {
    const user = userEvent.setup();
    html(COLLAPSE);

    expect(document.getElementById('body')).not.toHaveAttribute('data-expanded');

    await user.click(document.getElementById('trigger')!);
    expect(document.getElementById('body')).toHaveAttribute('data-expanded');
    expect(document.getElementById('trigger')).toHaveAttribute('aria-expanded', 'true');

    await user.click(document.getElementById('trigger')!);
    expect(document.getElementById('body')).not.toHaveAttribute('data-expanded');
  });

  /** The body's attribute is what paints, so it is what the trigger follows. */
  it('should take its starting state from the body, not the trigger', () => {
    html(COLLAPSE.replace('id="body"', 'id="body" data-expanded'));
    expect(document.getElementById('trigger')).toHaveAttribute('aria-expanded', 'true');
  });

  it('should wire the trigger to the body when the author did not', () => {
    html(COLLAPSE);
    expect(document.getElementById('trigger')).toHaveAttribute('aria-controls', 'body');
  });
});

describe('vanilla modal', () => {
  const MODAL = `
    <button data-df-modal-open="terms" id="opener">Open</button>
    <dialog class="df-overlay" data-placement="center" id="terms" data-df-modal>
      <div class="df-overlay-header">
        <button data-df-modal-close id="closer">×</button>
      </div>
    </dialog>`;

  it('should open from a trigger that names it', async () => {
    const user = userEvent.setup();
    html(MODAL);

    await user.click(document.getElementById('opener')!);
    expect(document.getElementById('terms')).toHaveAttribute('open');
  });

  it('should close from a dismiss control anywhere inside', async () => {
    const user = userEvent.setup();
    html(MODAL);

    await user.click(document.getElementById('opener')!);
    await user.click(document.getElementById('closer')!);
    expect(document.getElementById('terms')).not.toHaveAttribute('open');
  });

  /**
   * A click on the backdrop has the dialog itself as its target, because the
   * panel's own children are the targets for clicks inside it. That is the
   * only signal `<dialog>` gives for "outside".
   */
  it('should close on a click outside the panel', () => {
    html(MODAL);
    const dialog = document.getElementById('terms') as HTMLDialogElement;
    dialog.showModal();

    dialog.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(dialog).not.toHaveAttribute('open');
  });

  it('should refuse both ways out when the backdrop is static', () => {
    html(MODAL.replace('data-df-modal>', 'data-df-modal data-static-backdrop>'));
    const dialog = document.getElementById('terms') as HTMLDialogElement;
    dialog.showModal();

    dialog.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(dialog).toHaveAttribute('open');

    const cancel = new Event('cancel', { cancelable: true });
    dialog.dispatchEvent(cancel);
    expect(cancel.defaultPrevented).toBe(true);
  });

  /**
   * `<dialog>` gives a role but not a NAME, and a dialog with no name is
   * announced as just "dialog". The panel's own header is the obvious source.
   */
  it('should point the dialog at its own header for a name', () => {
    html(MODAL);
    const dialog = document.getElementById('terms')!;
    const labelId = dialog.getAttribute('aria-labelledby');

    expect(labelId).toBeTruthy();
    expect(document.getElementById(labelId!)).toBeInTheDocument();
  });

  /** The author knows what the panel is called better than its first heading. */
  it('should leave an explicit label alone', () => {
    html(MODAL.replace('data-df-modal>', 'data-df-modal aria-label="Terms of service">'));
    expect(document.getElementById('terms')).not.toHaveAttribute('aria-labelledby');
  });

  /**
   * `<dialog>` makes the page inert but does not stop it scrolling, so a wheel
   * over the backdrop still moves the page behind the modal.
   */
  it('should freeze the page while open and restore it after', async () => {
    const user = userEvent.setup();
    html(MODAL);

    await user.click(document.getElementById('opener')!);
    expect(document.body.style.overflow).toBe('hidden');

    await user.click(document.getElementById('closer')!);
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('should warn rather than fail silently when the markup is not a dialog', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    html('<div data-df-modal id="nope"></div>');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe('vanilla toast', () => {
  it('should stack toasts in a live region that is already on the page', () => {
    toast({ title: 'Saved' });

    const region = document.querySelector('.df-toast-region')!;
    expect(region).toHaveAttribute('aria-live', 'polite');
    expect(region.querySelector('.df-toast-title')).toHaveTextContent('Saved');
  });

  it('should put a placement on its own region', () => {
    toast({ title: 'A', placement: 'bottom-start' });
    expect(document.querySelector('.df-toast-region[data-placement="bottom-start"]')).toBeInTheDocument();
  });

  it('should carry a colour through as the attribute the stylesheet reads', () => {
    toast({ title: 'Done', color: 'success' });
    expect(document.querySelector('.df-toast')).toHaveAttribute('data-color', 'success');
  });

  /**
   * A toast title often comes straight from a server response. Built with the
   * DOM rather than `innerHTML`, so a response containing markup is shown as
   * text instead of parsed.
   */
  it('should treat the title as text, never as markup', () => {
    toast({ title: '<img src=x onerror="alert(1)">' });

    const title = document.querySelector('.df-toast-title')!;
    expect(title.querySelector('img')).toBeNull();
    expect(title.textContent).toContain('<img');
  });

  it('should dismiss when its own control is pressed', async () => {
    const user = userEvent.setup();
    toast({ title: 'Saved' });

    await user.click(document.querySelector('[data-df-toast-dismiss]')!);
    // With no transition to wait for — which is also the case under reduced
    // motion — it goes straight away rather than lingering invisibly.
    expect(document.querySelector('.df-toast')).toBeNull();
  });

  it('should keep a toast that was asked to stay', () => {
    jest.useFakeTimers();
    toast({ title: 'Permanent', duration: 0 });

    jest.advanceTimersByTime(60_000);
    expect(document.querySelector('.df-toast')).toBeInTheDocument();
    jest.useRealTimers();
  });

  it('should leave on its own once its time is up', () => {
    jest.useFakeTimers();
    toast({ title: 'Briefly', duration: 1000 });

    jest.advanceTimersByTime(1100);
    expect(document.querySelector('.df-toast')).toBeNull();
    jest.useRealTimers();
  });

  /**
   * A toast that vanishes while it is being read is the complaint everyone has
   * about toasts, and WCAG 2.2.1 asks for the same thing.
   */
  it('should hold its timer while the pointer is over it', () => {
    jest.useFakeTimers();
    toast({ title: 'Hovered', duration: 1000 });

    const element = document.querySelector('.df-toast')!;
    element.dispatchEvent(new Event('pointerenter'));
    jest.advanceTimersByTime(5000);
    expect(element).toBeInTheDocument();

    element.dispatchEvent(new Event('pointerleave'));
    jest.advanceTimersByTime(1100);
    expect(element).not.toBeInTheDocument();
    jest.useRealTimers();
  });
});
