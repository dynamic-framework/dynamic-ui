import {
  activePlacements,
  createToastStore,
  DEFAULT_DURATION,
  DEFAULT_PLACEMENT,
  EXIT_GRACE,
  MAX_TOASTS,
  toastsAt,
} from './store';

import type { Clock } from './store';

/**
 * The toast queue, with a clock under test control.
 *
 * Every interesting property of a toast is about TIME — it leaves on its own,
 * it stops leaving while you read it, it animates out before it is gone — and
 * a real clock would mean either five-second tests or no tests. So the clock is
 * injected and driven by hand, which also makes the awkward cases reachable:
 * pausing twice, resuming after the time is already up, dismissing something
 * already dismissed.
 */

function fakeClock() {
  let time = 0;
  let next = 1;
  type Pending = { at: number; fn: () => void };
  const pending = new Map<number, Pending>();

  const clock: Clock = {
    now: () => time,
    setTimeout: (fn, ms) => {
      const handle = next;
      next += 1;
      pending.set(handle, { at: time + ms, fn });
      return handle;
    },
    clearTimeout: (handle) => { pending.delete(handle); },
  };

  /** Advances time, firing whatever comes due in order. */
  const advance = (ms: number) => {
    const target = time + ms;
    for (;;) {
      const due = [...pending.entries()]
        .filter(([, timer]) => timer.at <= target)
        .sort((a, b) => a[1].at - b[1].at);
      if (!due.length) break;
      const [handle, timer] = due[0];
      pending.delete(handle);
      time = timer.at;
      timer.fn();
    }
    time = target;
  };

  return { clock, advance, pendingCount: () => pending.size };
}

const setup = () => {
  const { clock, advance, pendingCount } = fakeClock();
  return { store: createToastStore<string>(clock), advance, pendingCount };
};

describe('showing', () => {
  it('should add a toast and return its id', () => {
    const { store } = setup();
    const id = store.show({ content: 'Saved' });

    expect(id).toBeTruthy();
    expect(store.getSnapshot().toasts).toHaveLength(1);
    expect(store.getSnapshot().toasts[0].content).toBe('Saved');
  });

  it('should default the placement and the duration', () => {
    const { store } = setup();
    store.show({ content: 'Saved' });

    const [entry] = store.getSnapshot().toasts;
    expect(entry.placement).toBe(DEFAULT_PLACEMENT);
    expect(entry.duration).toBe(DEFAULT_DURATION);
  });

  it('should stack several', () => {
    const { store } = setup();
    store.show({ content: 'One' });
    store.show({ content: 'Two' });
    store.show({ content: 'Three' });

    expect(store.getSnapshot().toasts.map((entry) => entry.content))
      .toEqual(['One', 'Two', 'Three']);
  });

  it('should give each a different id', () => {
    const { store } = setup();
    expect(store.show({ content: 'One' })).not.toBe(store.show({ content: 'Two' }));
  });
});

describe('updating in place', () => {
  it('should replace the content of a toast with the same id', () => {
    const { store } = setup();
    store.show({ id: 'save', content: 'Saving…' });
    store.show({ id: 'save', content: 'Saved' });

    expect(store.getSnapshot().toasts).toHaveLength(1);
    expect(store.getSnapshot().toasts[0].content).toBe('Saved');
  });

  /*
   * The sequence survives, so a toast that changes its message does not jump
   * to the end of the stack under the reader's eyes.
   */
  it('should keep its place in the stack', () => {
    const { store } = setup();
    store.show({ id: 'a', content: 'A' });
    store.show({ content: 'B' });
    store.show({ id: 'a', content: 'A updated' });

    expect(toastsAt(store.getSnapshot(), DEFAULT_PLACEMENT).map((e) => e.content))
      .toEqual(['A updated', 'B']);
  });

  it('should restart the timer, because new content deserves its reading time', () => {
    const { store, advance } = setup();
    store.show({ id: 'save', content: 'Saving…', duration: 1000 });
    advance(800);
    store.show({ id: 'save', content: 'Saved', duration: 1000 });

    advance(800);
    expect(store.getSnapshot().toasts).toHaveLength(1);
    advance(300);
    expect(store.getSnapshot().toasts[0].leaving).toBe(true);
  });

  /* A toast already leaving, told to show again, comes back. */
  it('should revive one that was on its way out', () => {
    const { store, advance } = setup();
    store.show({ id: 'save', content: 'Saving…', duration: 100 });
    advance(150);
    expect(store.getSnapshot().toasts[0].leaving).toBe(true);

    store.show({ id: 'save', content: 'Saved' });
    expect(store.getSnapshot().toasts[0].leaving).toBe(false);
  });
});

describe('dismissing', () => {
  it('should mark it leaving before removing it', () => {
    const { store, advance } = setup();
    const id = store.show({ content: 'Saved', duration: 0 });

    store.dismiss(id);
    expect(store.getSnapshot().toasts[0].leaving).toBe(true);

    advance(EXIT_GRACE + 1);
    expect(store.getSnapshot().toasts).toHaveLength(0);
  });

  /*
   * The grace period is a ceiling, not a promise: a renderer whose transition
   * has finished calls `remove` and the entry goes at once.
   */
  it('should let a renderer remove it early', () => {
    const { store } = setup();
    const id = store.show({ content: 'Saved', duration: 0 });

    store.dismiss(id);
    store.remove(id);
    expect(store.getSnapshot().toasts).toHaveLength(0);
  });

  /* A transition that never starts — reduced motion, a hidden tab — must not
     leave the entry in the list forever. */
  it('should remove it even when nothing animates', () => {
    const { store, advance } = setup();
    store.dismiss(store.show({ content: 'Saved', duration: 0 }));

    advance(EXIT_GRACE);
    expect(store.getSnapshot().toasts).toHaveLength(0);
  });

  it('should ignore a second dismiss', () => {
    const { store, advance } = setup();
    const id = store.show({ content: 'Saved', duration: 0 });

    store.dismiss(id);
    store.dismiss(id);
    advance(EXIT_GRACE + 1);
    expect(store.getSnapshot().toasts).toHaveLength(0);
  });

  it('should ignore an id that is not there', () => {
    const { store } = setup();
    expect(() => store.dismiss('nonsense')).not.toThrow();
  });

  it('should dismiss every one', () => {
    const { store, advance } = setup();
    store.show({ content: 'One' });
    store.show({ content: 'Two' });

    store.dismissAll();
    advance(EXIT_GRACE + 1);
    expect(store.getSnapshot().toasts).toHaveLength(0);
  });
});

describe('the timer', () => {
  it('should dismiss itself after its duration', () => {
    const { store, advance } = setup();
    store.show({ content: 'Saved', duration: 1000 });

    advance(999);
    expect(store.getSnapshot().toasts[0].leaving).toBe(false);
    advance(2);
    expect(store.getSnapshot().toasts[0].leaving).toBe(true);
  });

  it('should stay until told when the duration is zero', () => {
    const { store, advance } = setup();
    store.show({ content: 'Saved', duration: 0 });

    advance(100000);
    expect(store.getSnapshot().toasts).toHaveLength(1);
    expect(store.getSnapshot().toasts[0].leaving).toBe(false);
  });

  /*
   * A toast that vanishes while it is being read is the complaint everyone has
   * about toasts, and WCAG 2.2.1 asks for the same thing.
   */
  it('should hold while paused', () => {
    const { store, advance } = setup();
    const id = store.show({ content: 'Saved', duration: 1000 });

    advance(500);
    store.pause(id);
    advance(100000);
    expect(store.getSnapshot().toasts[0].leaving).toBe(false);
  });

  /*
   * Resuming CONTINUES. Restarting means a toast hovered three times never
   * leaves, which is how a notification ends up pinned to a corner for a
   * minute.
   */
  it('should continue rather than restart on resume', () => {
    const { store, advance } = setup();
    const id = store.show({ content: 'Saved', duration: 1000 });

    advance(800);
    store.pause(id);
    advance(5000);
    store.resume(id);

    advance(199);
    expect(store.getSnapshot().toasts[0].leaving).toBe(false);
    advance(2);
    expect(store.getSnapshot().toasts[0].leaving).toBe(true);
  });

  it('should survive being paused and resumed repeatedly', () => {
    const { store, advance } = setup();
    const id = store.show({ content: 'Saved', duration: 900 });

    for (let i = 0; i < 3; i += 1) {
      advance(200);
      store.pause(id);
      advance(1000);
      store.resume(id);
    }

    /* 600ms of the 900 has run; 300 left, not a fresh 900. */
    advance(299);
    expect(store.getSnapshot().toasts[0].leaving).toBe(false);
    advance(2);
    expect(store.getSnapshot().toasts[0].leaving).toBe(true);
  });

  /* Paused past its own deadline, resuming must not schedule a negative wait. */
  it('should leave at once when resumed after its time was up', () => {
    const { store, advance } = setup();
    const id = store.show({ content: 'Saved', duration: 1000 });

    advance(1000 - 1);
    store.pause(id);
    advance(10);
    store.pause(id);
    store.resume(id);

    expect(store.getSnapshot().toasts[0].leaving).toBe(true);
  });

  it('should leave no timer running after a reset', () => {
    const { store, advance, pendingCount } = setup();
    store.show({ content: 'One' });
    store.show({ content: 'Two' });

    store.reset();
    advance(100000);
    expect(pendingCount()).toBe(0);
    expect(store.getSnapshot().toasts).toHaveLength(0);
  });
});

describe('the cap', () => {
  /*
   * A loop firing one toast per failed request fires hundreds. A stack taller
   * than the viewport is useless and the entries are a leak.
   */
  it('should keep at most MAX_TOASTS', () => {
    const { store } = setup();
    for (let i = 0; i < MAX_TOASTS + 5; i += 1) store.show({ content: `#${i}` });

    expect(store.getSnapshot().toasts).toHaveLength(MAX_TOASTS);
  });

  /* The OLDEST go: the latest message is the one that still matters. */
  it('should drop the oldest', () => {
    const { store } = setup();
    for (let i = 0; i < MAX_TOASTS + 1; i += 1) store.show({ content: `#${i}` });

    const contents = store.getSnapshot().toasts.map((entry) => entry.content);
    expect(contents).not.toContain('#0');
    expect(contents).toContain(`#${MAX_TOASTS}`);
  });

  it('should leave no timer behind for a dropped toast', () => {
    const { store, advance, pendingCount } = setup();
    for (let i = 0; i < MAX_TOASTS + 5; i += 1) store.show({ content: `#${i}`, duration: 1000 });

    expect(pendingCount()).toBe(MAX_TOASTS);
    advance(100000);
    expect(pendingCount()).toBe(0);
  });
});

describe('placements', () => {
  it('should group by placement', () => {
    const { store } = setup();
    store.show({ content: 'Top', placement: 'top-end' });
    store.show({ content: 'Bottom', placement: 'bottom-center' });

    expect(toastsAt(store.getSnapshot(), 'top-end').map((e) => e.content)).toEqual(['Top']);
    expect(toastsAt(store.getSnapshot(), 'bottom-center').map((e) => e.content)).toEqual(['Bottom']);
  });

  it('should report only the placements in use', () => {
    const { store } = setup();
    store.show({ content: 'Top', placement: 'top-end' });
    store.show({ content: 'Also top', placement: 'top-end' });

    expect(activePlacements(store.getSnapshot())).toEqual(['top-end']);
  });

  it('should reverse the order when asked', () => {
    const { store } = setup();
    store.show({ content: 'One' });
    store.show({ content: 'Two' });

    expect(toastsAt(store.getSnapshot(), DEFAULT_PLACEMENT, true).map((e) => e.content))
      .toEqual(['Two', 'One']);
  });
});

describe('subscribing', () => {
  it('should notify on a change', () => {
    const { store } = setup();
    const seen: number[] = [];
    store.subscribe((state) => seen.push(state.toasts.length));

    store.show({ content: 'One' });
    store.show({ content: 'Two' });
    expect(seen).toEqual([1, 2]);
  });

  it('should stop notifying after unsubscribe', () => {
    const { store } = setup();
    const seen: number[] = [];
    const off = store.subscribe((state) => seen.push(state.toasts.length));

    store.show({ content: 'One' });
    off();
    store.show({ content: 'Two' });
    expect(seen).toEqual([1]);
  });

  /*
   * `useSyncExternalStore` compares the snapshot by identity and loops forever
   * if it is a new object on every read. So it is built on change, not on read.
   */
  it('should return the same snapshot until something changes', () => {
    const { store } = setup();
    store.show({ content: 'One' });

    const first = store.getSnapshot();
    expect(store.getSnapshot()).toBe(first);

    store.show({ content: 'Two' });
    expect(store.getSnapshot()).not.toBe(first);
    /* And stable again afterwards, or the loop just moves. */
    expect(store.getSnapshot()).toBe(store.getSnapshot());
  });
});
