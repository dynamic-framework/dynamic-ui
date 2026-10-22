import {
  act, fireEvent, render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';

import DToastContainer from './DToastContainer';
import useDToast from './useDToast';
import { toastStore } from '../DToast/toastStore';
import { DContextProvider } from '../../contexts';

/**
 * The toast surface, with no library behind it.
 *
 * The previous version of this file mocked `react-hot-toast` and asserted that
 * the wrapper called `toast.custom()` with the right arguments — which tested
 * the wiring to a third party and not one thing a reader would notice. These
 * assert what ends up on the page.
 *
 * `DToast/store.spec.ts` covers the queue and the timers, with an injected
 * clock. What is here is rendering, dismissal and the announcement.
 */

function Harness({ onReady }: { onReady: (api: ReturnType<typeof useDToast>) => void }) {
  const api = useDToast();
  onReady(api);
  return null;
}

type Api = ReturnType<typeof useDToast>;

function setup(props: React.ComponentProps<typeof DToastContainer> = {}) {
  let api!: Api;
  render(
    <DContextProvider>
      <Harness onReady={(value) => { api = value; }} />
      <DToastContainer portal={false} {...props} />
    </DContextProvider>,
  );
  return { api: () => api };
}

/** The regions that actually hold a toast; the other corners render empty. */
const occupied = () => [...document.querySelectorAll('.toast-container')]
  .filter((region) => region.childElementCount > 0);

afterEach(() => {
  act(() => toastStore.reset());
});

describe('rendering', () => {
  /*
   * The regions are there BEFORE anything arrives, and that is the point.
   *
   * Assistive technology has to be watching a live region before its content
   * changes; one that mounted together with its first toast would announce
   * nothing, which is the timing problem that moving the region off each toast
   * was meant to fix.
   */
  it('should mount every region empty before any toast exists', () => {
    setup();

    const regions = [...document.querySelectorAll('.toast-container')];
    expect(regions).toHaveLength(6);
    regions.forEach((region) => expect(region).toBeEmptyDOMElement());
  });

  it('should keep the regions mounted after the last toast goes', () => {
    const { api } = setup();
    let id = '';
    act(() => { id = api().toast({ title: 'Saved' }, { duration: 0 }); });
    act(() => { api().dismiss(id); });
    act(() => { toastStore.remove(id); });

    expect(document.querySelector('.toast-slot')).not.toBeInTheDocument();
    expect(document.querySelectorAll('.toast-container')).toHaveLength(6);
  });

  it('should show a toast', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }); });

    expect(screen.getByText('Saved')).toBeInTheDocument();
    expect(document.querySelector('.toast')).toBeInTheDocument();
  });

  /* No `description` means one compact row, not an empty header. */
  it('should put everything in the body when there is no description', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }); });

    expect(document.querySelector('.toast-header')).not.toBeInTheDocument();
    expect(document.querySelector('.toast-body')).toBeInTheDocument();
  });

  it('should render a header and a body as siblings when described', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved', description: 'Three files uploaded' }); });

    const header = document.querySelector('.toast-header')!;
    const body = document.querySelector('.toast-body')!;
    expect(header).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(header.contains(body)).toBe(false);
    expect(header.parentElement).toBe(body.parentElement);
  });

  it('should show the timestamp only with a description', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved', timestamp: 'just now' }); });
    expect(screen.queryByText('just now')).not.toBeInTheDocument();

    act(() => { api().toast({ title: 'Other', description: 'd', timestamp: 'just now' }); });
    expect(screen.getByText('just now')).toBeInTheDocument();
  });

  it('should render an icon only when one is asked for', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }); });
    expect(document.querySelector('.toast-icon')).not.toBeInTheDocument();

    act(() => { api().toast({ title: 'Other', icon: 'Star' }); });
    expect(document.querySelector('.toast-icon')).toBeInTheDocument();
  });

  it('should apply the colour as a modifier class', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved', color: 'danger' }); });
    expect(document.querySelector('.toast')).toHaveClass('toast-danger');
  });

  /* Anything React can render, for a toast the default layout cannot express. */
  it('should accept arbitrary content', () => {
    const { api } = setup();
    act(() => { api().toast(<p>Custom</p>); });
    expect(screen.getByText('Custom')).toBeInTheDocument();
  });
});

describe('stacking', () => {
  it('should stack several in one region', () => {
    const { api } = setup();
    act(() => {
      api().toast({ title: 'One' });
      api().toast({ title: 'Two' });
    });

    expect(document.querySelectorAll('.toast')).toHaveLength(2);
    expect(document.querySelectorAll('.toast-slot')).toHaveLength(2);
    expect(occupied()).toHaveLength(1);
  });

  it('should keep the order they arrived in', () => {
    const { api } = setup();
    act(() => {
      api().toast({ title: 'One' });
      api().toast({ title: 'Two' });
    });

    const titles = [...document.querySelectorAll('.toast-title')].map((n) => n.textContent);
    expect(titles).toEqual(['One', 'Two']);
  });

  it('should reverse the order when asked', () => {
    const { api } = setup({ reverseOrder: true });
    act(() => {
      api().toast({ title: 'One' });
      api().toast({ title: 'Two' });
    });

    const titles = [...document.querySelectorAll('.toast-title')].map((n) => n.textContent);
    expect(titles).toEqual(['Two', 'One']);
  });

  it('should put each toast in the corner it named, and leave the rest empty', () => {
    const { api } = setup();
    act(() => {
      api().toast({ title: 'Top' }, { placement: 'top-end' });
      api().toast({ title: 'Bottom' }, { placement: 'bottom-start' });
    });

    expect(occupied().map((r) => r.getAttribute('data-placement')).sort())
      .toEqual(['bottom-start', 'top-end']);
  });

  it('should send unplaced toasts to the container default', () => {
    const { api } = setup({ placement: 'top-start' });
    act(() => { api().toast({ title: 'Saved' }); });

    expect(occupied().map((r) => r.getAttribute('data-placement')))
      .toEqual(['top-start']);
  });

  /*
   * `toast()` can legitimately be called before the container mounts — from a
   * module-level error handler, or from an earlier sibling's mount effect.
   * The store therefore leaves the placement unset rather than stamping the
   * default that happened to be registered at that instant, and the container
   * resolves it when it renders.
   */
  it('should honour the container placement for a toast dispatched before it mounted', () => {
    act(() => { toastStore.show({ content: 'Early' }); });
    setup({ placement: 'top-end' });

    expect(occupied().map((r) => r.getAttribute('data-placement')))
      .toEqual(['top-end']);
  });
});

describe('dismissing', () => {
  it('should close on the dismiss button', async () => {
    const user = userEvent.setup();
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }, { duration: 0 }); });

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(document.querySelector('.toast-slot')).toHaveAttribute('data-leaving');
  });

  it('should name the dismiss button in the page language', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Guardado', closeLabel: 'Cerrar' }); });
    expect(screen.getByRole('button', { name: 'Cerrar' })).toBeInTheDocument();
  });

  it('should dismiss by id', () => {
    const { api } = setup();
    let id = '';
    act(() => { id = api().toast({ title: 'Saved' }, { duration: 0 }); });

    act(() => { api().dismiss(id); });
    expect(document.querySelector('.toast-slot')).toHaveAttribute('data-leaving');
  });

  it('should dismiss all of them', () => {
    const { api } = setup();
    act(() => {
      api().toast({ title: 'One' }, { duration: 0 });
      api().toast({ title: 'Two' }, { duration: 0, placement: 'top-end' });
    });

    act(() => { api().dismissAll(); });
    document.querySelectorAll('.toast-slot').forEach((slot) => {
      expect(slot).toHaveAttribute('data-leaving');
    });
  });
});

describe('updating in place', () => {
  it('should replace the content of a toast with the same id', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saving…' }, { id: 'save' }); });
    act(() => { api().toast({ title: 'Saved' }, { id: 'save' }); });

    expect(document.querySelectorAll('.toast')).toHaveLength(1);
    expect(screen.getByText('Saved')).toBeInTheDocument();
    expect(screen.queryByText('Saving…')).not.toBeInTheDocument();
  });

  /*
   * The dismiss button reads its toast from context, so an update has to carry
   * the id the caller gave rather than minting a new one — otherwise the
   * button in the replaced content points at a toast that does not exist.
   */
  it('should leave the dismiss button pointing at the same toast', async () => {
    const user = userEvent.setup();
    const { api } = setup();
    act(() => { api().toast({ title: 'Saving…' }, { id: 'save', duration: 0 }); });
    act(() => { api().toast({ title: 'Saved' }, { id: 'save', duration: 0 }); });

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(document.querySelector('.toast-slot')).toHaveAttribute('data-leaving');
  });
});

describe('the announcement', () => {
  /*
   * The live region is the REGION, not each toast.
   *
   * Every `DToast` used to carry `role="alert" aria-live="assertive"`. A live
   * region inserted at the same moment as its content is frequently not
   * announced at all — the technology has to be watching the element before
   * the change happens. The announcement came and went depending on timing.
   */
  it('should put the live region on the container, not the toast', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }); });

    const region = document.querySelector('.toast-container')!;
    expect(region).toHaveAttribute('aria-live', 'polite');
    expect(region).toHaveAttribute('role', 'status');
    expect(document.querySelector('.toast')).not.toHaveAttribute('aria-live');
  });

  /* `polite`, not `assertive`: a confirmation is not worth interrupting what a
     screen reader is in the middle of saying. A toast that must interrupt is a
     dialog. */
  it('should not interrupt', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }); });
    expect(document.querySelector('[aria-live="assertive"]')).not.toBeInTheDocument();
  });

  /* `false`, so an arriving toast is announced on its own rather than the
     region re-reading everything already in it. */
  it('should announce one toast rather than the whole stack', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }); });
    expect(document.querySelector('.toast-container'))
      .toHaveAttribute('aria-atomic', 'false');
  });

  it('should not move focus', () => {
    const { api } = setup();
    const before = document.activeElement;
    act(() => { api().toast({ title: 'Saved' }); });
    expect(document.activeElement).toBe(before);
  });
});

/**
 * Hover and focus are two reasons for ONE hold.
 *
 * They used to pause the store independently, and `pause` subtracts the time
 * since the countdown started — so a toast both hovered and focused had the
 * same stretch subtracted twice, and whichever hold ended first resumed a
 * timer that was already short. A toast could vanish while it still held the
 * keyboard focus.
 */
describe('holding the timer', () => {
  beforeEach(() => { jest.useFakeTimers(); });
  afterEach(() => { jest.useRealTimers(); });

  const slot = () => document.querySelector('.toast-slot');

  it('should keep holding when the pointer leaves but focus stays', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }, { duration: 1000 }); });
    const dismiss = screen.getByRole('button', { name: 'Close' });

    fireEvent.pointerEnter(slot()!);
    fireEvent.focusIn(dismiss);
    act(() => { jest.advanceTimersByTime(600); });
    fireEvent.pointerLeave(slot()!, { relatedTarget: null });

    act(() => { jest.advanceTimersByTime(10000); });
    expect(slot()).not.toHaveAttribute('data-leaving');
  });

  it('should keep holding when focus leaves but the pointer stays', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }, { duration: 1000 }); });
    const dismiss = screen.getByRole('button', { name: 'Close' });

    fireEvent.pointerEnter(slot()!);
    fireEvent.focusIn(dismiss);
    fireEvent.focusOut(dismiss, { relatedTarget: null });

    act(() => { jest.advanceTimersByTime(10000); });
    expect(slot()).not.toHaveAttribute('data-leaving');
  });

  /* `onFocus`/`onBlur` are focusin/focusout, so tabbing between a toast's own
     controls must not read as leaving it. */
  it('should keep holding while focus moves between its own controls', () => {
    const { api } = setup();
    act(() => {
      api().toast(
        <div>
          <button type="button">First</button>
          <button type="button">Second</button>
        </div>,
        { duration: 1000 },
      );
    });
    const first = screen.getByRole('button', { name: 'First' });
    const second = screen.getByRole('button', { name: 'Second' });

    fireEvent.focusIn(first);
    fireEvent.focusOut(first, { relatedTarget: second });
    fireEvent.focusIn(second);

    act(() => { jest.advanceTimersByTime(10000); });
    expect(slot()).not.toHaveAttribute('data-leaving');
  });

  it('should resume once nothing is holding it', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }, { duration: 1000 }); });
    const dismiss = screen.getByRole('button', { name: 'Close' });

    fireEvent.pointerEnter(slot()!);
    fireEvent.focusIn(dismiss);
    act(() => { jest.advanceTimersByTime(900); });
    fireEvent.focusOut(dismiss, { relatedTarget: null });
    fireEvent.pointerLeave(slot()!, { relatedTarget: null });

    act(() => { jest.advanceTimersByTime(999); });
    expect(slot()).not.toHaveAttribute('data-leaving');
    act(() => { jest.advanceTimersByTime(2); });
    expect(slot()).toHaveAttribute('data-leaving');
  });

  /*
   * An unmounting element emits no pointer-leave and no blur.
   *
   * Changing a toast's placement moves it to another region, which unmounts
   * the element holding it. Without releasing the hold on unmount the toast
   * would stay paused forever, and the replacement — which starts with nothing
   * hovered or focused — could never release it either.
   */
  it('should release its hold when its slot unmounts', () => {
    const { api } = setup();
    act(() => {
      api().toast({ title: 'Saved' }, { id: 'move', duration: 1000, placement: 'top-end' });
    });
    fireEvent.pointerEnter(slot()!);

    act(() => {
      api().toast({ title: 'Saved' }, { id: 'move', duration: 1000, placement: 'bottom-start' });
    });

    expect(slot()!.parentElement).toHaveAttribute('data-placement', 'bottom-start');
    act(() => { jest.advanceTimersByTime(1001); });
    expect(slot()).toHaveAttribute('data-leaving');
  });

  /* The slot stays mounted across an update, so no new enter event arrives to
     re-hold the replacement timer. */
  it('should keep holding across an update in place', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saving…' }, { id: 'save', duration: 1000 }); });
    fireEvent.pointerEnter(slot()!);
    act(() => { api().toast({ title: 'Saved' }, { id: 'save', duration: 1000 }); });

    act(() => { jest.advanceTimersByTime(10000); });
    expect(screen.getByText('Saved')).toBeInTheDocument();
    expect(slot()).not.toHaveAttribute('data-leaving');
  });
});

/**
 * `transitionend` bubbles.
 *
 * The slot removes its entry when its exit transition ends, so a transition
 * finishing anywhere inside a custom toast — a spinner, a hover effect — used
 * to cut the slot's own exit short and make the toast disappear instantly.
 */
describe('the exit transition', () => {
  it('should ignore a transition that ends inside its content', () => {
    const { api } = setup();
    let id = '';
    act(() => {
      id = api().toast(<p data-testid="content">Custom</p>, { duration: 0 });
    });
    act(() => { api().dismiss(id); });

    act(() => { fireEvent.transitionEnd(screen.getByTestId('content')); });
    expect(document.querySelector('.toast-slot')).toBeInTheDocument();
  });

  it('should remove the toast when its own transition ends', () => {
    const { api } = setup();
    let id = '';
    act(() => { id = api().toast({ title: 'Saved' }, { duration: 0 }); });
    act(() => { api().dismiss(id); });

    act(() => { fireEvent.transitionEnd(document.querySelector('.toast-slot')!); });
    expect(document.querySelector('.toast-slot')).not.toBeInTheDocument();
  });
});

/**
 * Server rendering.
 *
 * The server has no `document`, so the regions render in place. The first
 * client render has to produce exactly that or React reports a mismatch and
 * throws the server's markup away — so the portal opens after mounting, and
 * the hydrating render reads an empty snapshot even when a toast is already
 * queued.
 */
describe('hydration', () => {
  const tree = () => (
    <DContextProvider>
      <DToastContainer />
    </DContextProvider>
  );

  let cleanUp: (() => void) | undefined;
  afterEach(() => {
    act(() => cleanUp?.());
    cleanUp = undefined;
  });

  const hydrateInto = (html: string) => {
    const host = document.createElement('div');
    host.innerHTML = html;
    document.body.appendChild(host);
    expect(host.querySelectorAll('.toast-container')).toHaveLength(6);

    const errors = jest.spyOn(console, 'error').mockImplementation(() => {});
    let root!: ReturnType<typeof hydrateRoot>;
    act(() => { root = hydrateRoot(host, tree()); });
    const calls = errors.mock.calls.map((args) => String(args[0]));
    errors.mockRestore();

    cleanUp = () => { root.unmount(); host.remove(); };
    return { host, calls };
  };

  it('should render the regions in place on the server', () => {
    const html = renderToString(tree());
    expect(html.match(/toast-container/g)).toHaveLength(6);
  });

  it('should hydrate an empty store without a mismatch', () => {
    const { host, calls } = hydrateInto(renderToString(tree()));

    expect(calls.filter((message) => /hydrat|did not match/i.test(message))).toEqual([]);
    /* Hydrated in place, then moved to the body once the effect opened the
       portal — so the host is empty and the regions are all still there. */
    expect(host).toBeEmptyDOMElement();
    expect(document.body.querySelectorAll('.toast-container')).toHaveLength(6);
  });

  /* The hard case: a toast dispatched before hydration finished. The live
     snapshot would disagree with the server's markup. */
  it('should hydrate without a mismatch when a toast is already queued', () => {
    const html = renderToString(tree());
    act(() => { toastStore.show({ content: 'Early' }); });

    const { calls } = hydrateInto(html);

    expect(calls.filter((message) => /hydrat|did not match/i.test(message))).toEqual([]);
    expect(screen.getByText('Early')).toBeInTheDocument();
  });
});

/**
 * The portal lifecycle, with the default `portal` — which every test above
 * turns off.
 *
 * The regions cannot be portalled on the first render (the server has no
 * `document`, so hydration would disagree), which means they necessarily move
 * from the tree into `document.body`. React does not move a subtree across
 * hosts: it destroys the inline nodes and builds new ones. A toast queued
 * before the container mounted would therefore be inside those regions the
 * instant they appeared — a live region arriving with its own message
 * announces nothing, which is the bug this component exists to avoid.
 *
 * These assert the ORDER of the DOM mutations rather than the state of a node
 * after the fact, because the nodes are live: by the time a test reads one, it
 * holds the toast either way. A region that turned up with its toast already
 * inside produces NO "slot added to region" record at all, since the observer
 * only reports the outermost added node.
 */
describe('the portal lifecycle', () => {
  const isRegion = (node: Node) => node instanceof Element
    && node.classList.contains('toast-container');
  const isSlot = (node: Node) => node instanceof Element
    && node.classList.contains('toast-slot');

  const recordMutations = (run: () => void) => {
    const observer = new MutationObserver(() => {});
    observer.observe(document.body, { childList: true, subtree: true });
    run();
    const records = observer.takeRecords();
    observer.disconnect();

    return {
      /** When the regions reached their final home, `document.body`. */
      regionsPlaced: records.findIndex(
        (record) => record.target === document.body
          && [...record.addedNodes].some(isRegion),
      ),
      /** When a toast was inserted INTO one that was already there. */
      contentInserted: records.findIndex(
        (record) => isRegion(record.target)
          && [...record.addedNodes].some(isSlot),
      ),
    };
  };

  const tree = () => (
    <DContextProvider>
      <DToastContainer />
    </DContextProvider>
  );

  it('should portal the regions to the body', () => {
    render(tree());

    expect(document.body.querySelectorAll('.toast-container')).toHaveLength(6);
  });

  it('should place the regions empty before a queued toast goes into them', () => {
    act(() => { toastStore.show({ content: 'Early' }); });

    const { regionsPlaced, contentInserted } = recordMutations(() => { render(tree()); });

    expect(regionsPlaced).toBeGreaterThanOrEqual(0);
    expect(contentInserted).toBeGreaterThan(regionsPlaced);
    expect(screen.getByText('Early')).toBeInTheDocument();
  });

  it('should insert a later toast into regions that were already there', () => {
    render(tree());

    const { regionsPlaced, contentInserted } = recordMutations(() => {
      act(() => { toastStore.show({ content: 'Later' }); });
    });

    /* The regions never move again, so nothing placed them this time round. */
    expect(regionsPlaced).toBe(-1);
    expect(contentInserted).toBeGreaterThanOrEqual(0);
  });

  it('should place the regions empty before a toast queued ahead of hydration', () => {
    const html = renderToString(tree());
    const host = document.createElement('div');
    host.innerHTML = html;
    document.body.appendChild(host);
    act(() => { toastStore.show({ content: 'Early' }); });

    let root!: ReturnType<typeof hydrateRoot>;
    const { regionsPlaced, contentInserted } = recordMutations(() => {
      act(() => { root = hydrateRoot(host, tree()); });
    });

    expect(regionsPlaced).toBeGreaterThanOrEqual(0);
    expect(contentInserted).toBeGreaterThan(regionsPlaced);
    expect(screen.getByText('Early')).toBeInTheDocument();

    act(() => { root.unmount(); });
    host.remove();
  });
});
