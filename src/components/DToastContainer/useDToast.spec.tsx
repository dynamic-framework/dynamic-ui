/// <reference types="@testing-library/jest-dom" />

import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DToastContainer from './DToastContainer';
import useDToast from './useDToast';
import { toastStore } from '../DToast/toastStore';
import { DContextProvider } from '../../contexts';

/**
 * The toast surface, with no library behind it.
 *
 * The 2.x version of this file mocked `react-hot-toast` and asserted that the
 * wrapper called `toast.custom()` with the right arguments — which tested the
 * wiring to a third party and not one thing a reader would notice. These
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

afterEach(() => {
  act(() => toastStore.reset());
});

describe('rendering', () => {
  it('should render nothing until a toast exists', () => {
    setup();
    expect(document.querySelector('.df-toast-region')).not.toBeInTheDocument();
  });

  it('should show a toast', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }); });

    expect(screen.getByText('Saved')).toBeInTheDocument();
    expect(document.querySelector('.df-toast')).toBeInTheDocument();
  });

  /* No `description` means one compact row, not an empty header. */
  it('should put everything in the body when there is no description', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }); });

    expect(document.querySelector('.df-toast-header')).not.toBeInTheDocument();
    expect(document.querySelector('.df-toast-content')).toBeInTheDocument();
  });

  it('should render a header and a body as siblings when described', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved', description: 'Three files uploaded' }); });

    const header = document.querySelector('.df-toast-header')!;
    const body = document.querySelector('.df-toast-content')!;
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

  it('should render no icon when none is asked for', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }); });
    expect(document.querySelector('.df-toast-icon')).not.toBeInTheDocument();
  });

  it('should set the colour as a role attribute', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved', color: 'success' }); });
    expect(document.querySelector('.df-toast')).toHaveAttribute('data-color');
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

    expect(document.querySelectorAll('.df-toast')).toHaveLength(2);
    expect(document.querySelectorAll('.df-toast-region')).toHaveLength(1);
  });

  it('should keep the order they arrived in', () => {
    const { api } = setup();
    act(() => {
      api().toast({ title: 'One' });
      api().toast({ title: 'Two' });
    });

    const titles = [...document.querySelectorAll('.df-toast-title')].map((n) => n.textContent);
    expect(titles).toEqual(['One', 'Two']);
  });

  it('should reverse the order when asked', () => {
    const { api } = setup({ reverseOrder: true });
    act(() => {
      api().toast({ title: 'One' });
      api().toast({ title: 'Two' });
    });

    const titles = [...document.querySelectorAll('.df-toast-title')].map((n) => n.textContent);
    expect(titles).toEqual(['Two', 'One']);
  });

  it('should make one region per corner in use, and no more', () => {
    const { api } = setup();
    act(() => {
      api().toast({ title: 'Top' }, { placement: 'top-end' });
      api().toast({ title: 'Bottom' }, { placement: 'bottom-start' });
    });

    const regions = [...document.querySelectorAll('.df-toast-region')];
    expect(regions).toHaveLength(2);
    expect(regions.map((r) => r.getAttribute('data-placement')).sort())
      .toEqual(['bottom-start', 'top-end']);
  });

  it('should send unplaced toasts to the container default', () => {
    const { api } = setup({ placement: 'top-start' });
    act(() => { api().toast({ title: 'Saved' }); });

    expect(document.querySelector('.df-toast-region'))
      .toHaveAttribute('data-placement', 'top-start');
  });
});

describe('dismissing', () => {
  it('should close on the dismiss button', async () => {
    const user = userEvent.setup();
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }, { duration: 0 }); });

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(document.querySelector('.df-toast-slot')).toHaveAttribute('data-leaving');
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
    expect(document.querySelector('.df-toast-slot')).toHaveAttribute('data-leaving');
  });

  it('should dismiss all of them', () => {
    const { api } = setup();
    act(() => {
      api().toast({ title: 'One' }, { duration: 0 });
      api().toast({ title: 'Two' }, { duration: 0, placement: 'top-end' });
    });

    act(() => { api().dismissAll(); });
    document.querySelectorAll('.df-toast-slot').forEach((slot) => {
      expect(slot).toHaveAttribute('data-leaving');
    });
  });
});

describe('updating in place', () => {
  it('should replace the content of a toast with the same id', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saving…' }, { id: 'save' }); });
    act(() => { api().toast({ title: 'Saved' }, { id: 'save' }); });

    expect(document.querySelectorAll('.df-toast')).toHaveLength(1);
    expect(screen.getByText('Saved')).toBeInTheDocument();
    expect(screen.queryByText('Saving…')).not.toBeInTheDocument();
  });

  /*
   * The dismiss button closes over the id, so an update has to carry the id
   * the caller gave rather than minting a new one — otherwise the button in
   * the replaced content points at a toast that does not exist.
   */
  it('should leave the dismiss button pointing at the same toast', async () => {
    const user = userEvent.setup();
    const { api } = setup();
    act(() => { api().toast({ title: 'Saving…' }, { id: 'save', duration: 0 }); });
    act(() => { api().toast({ title: 'Saved' }, { id: 'save', duration: 0 }); });

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(document.querySelector('.df-toast-slot')).toHaveAttribute('data-leaving');
  });
});

describe('the announcement', () => {
  /*
   * The live region is the REGION, not each toast.
   *
   * 2.x put `role="alert" aria-live="assertive"` on every `DToast`. A live
   * region inserted at the same moment as its content is frequently not
   * announced at all — the technology has to be watching the element before
   * the change happens. The announcement came and went depending on timing.
   */
  it('should put the live region on the container, not the toast', () => {
    const { api } = setup();
    act(() => { api().toast({ title: 'Saved' }); });

    const region = document.querySelector('.df-toast-region')!;
    expect(region).toHaveAttribute('aria-live', 'polite');
    expect(region).toHaveAttribute('role', 'status');
    expect(document.querySelector('.df-toast')).not.toHaveAttribute('aria-live');
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
    expect(document.querySelector('.df-toast-region'))
      .toHaveAttribute('aria-atomic', 'false');
  });

  it('should not move focus', () => {
    const { api } = setup();
    const before = document.activeElement;
    act(() => { api().toast({ title: 'Saved' }); });
    expect(document.activeElement).toBe(before);
  });
});
