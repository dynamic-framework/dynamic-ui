/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import { act } from 'react';

import useExitTransition, { EXIT_TIMEOUT } from '../useExitTransition';

/**
 * Waiting out an exit, without waiting when there is nothing to wait for.
 *
 * The bug it exists for: CSS animates a thing out, JavaScript unmounts it on
 * the same tick, and the transition never renders a frame. The panel vanishes
 * instantly and the stylesheet looks broken.
 *
 * jsdom runs no transitions, so what can be checked here is the decision —
 * when it waits, when it does not, and that it never leaves the continuation
 * unrun. The last one matters most: a missed call means a modal that can never
 * be closed again.
 */

type Run = (element: HTMLElement | null, done: () => void) => void;

function harness() {
  let run!: Run;
  function Probe() {
    run = useExitTransition();
    return null;
  }
  render(<Probe />);
  return () => run;
}

/** An element whose computed transition jsdom will report. */
function withTransition(duration: string, delay = '0s') {
  const element = document.createElement('div');
  element.style.transitionDuration = duration;
  element.style.transitionDelay = delay;
  document.body.appendChild(element);
  return element;
}

beforeEach(() => { jest.useFakeTimers(); });
afterEach(() => {
  jest.useRealTimers();
  document.body.innerHTML = '';
});

describe('when there is nothing to wait for', () => {
  it('should run at once for a null element', () => {
    const run = harness();
    const done = jest.fn();

    act(() => run()(null, done));
    expect(done).toHaveBeenCalledTimes(1);
  });

  /*
   * `prefers-reduced-motion` removes the transition, a consumer can set the
   * duration to 0, and a test environment has no stylesheet at all. Waiting
   * the full timeout in those cases would hold the element in the document for
   * a second with nothing happening — worse than the bug being fixed.
   */
  it.each(['0s', '0ms', ''])('should run at once for a duration of %p', (duration) => {
    const run = harness();
    const done = jest.fn();

    act(() => run()(withTransition(duration), done));
    expect(done).toHaveBeenCalledTimes(1);
  });

  /* A delay with no duration is still no animation. */
  it('should run at once when only a delay is set', () => {
    const run = harness();
    const done = jest.fn();

    act(() => run()(withTransition('0s', '0s'), done));
    expect(done).toHaveBeenCalledTimes(1);
  });

  /* A shorthand lists one duration per property; any non-zero one animates. */
  it('should wait when only one of several properties animates', () => {
    const run = harness();
    const done = jest.fn();

    act(() => run()(withTransition('0s, 200ms'), done));
    expect(done).not.toHaveBeenCalled();
  });
});

describe('when there is', () => {
  it('should wait for the transition to end', () => {
    const run = harness();
    const done = jest.fn();
    const element = withTransition('200ms');

    act(() => run()(element, done));
    expect(done).not.toHaveBeenCalled();

    act(() => {
      element.dispatchEvent(new Event('transitionend', { bubbles: true }));
    });
    expect(done).toHaveBeenCalledTimes(1);
  });

  /*
   * `transitionend` does not always arrive — a hidden tab, a property that did
   * not actually change. The timeout is not a fallback for slow machines; it
   * is the only thing between a missing event and a modal that can never be
   * closed again.
   */
  it('should run on the timeout when the event never comes', () => {
    const run = harness();
    const done = jest.fn();

    act(() => run()(withTransition('200ms'), done));
    expect(done).not.toHaveBeenCalled();

    act(() => { jest.advanceTimersByTime(EXIT_TIMEOUT + 1); });
    expect(done).toHaveBeenCalledTimes(1);
  });

  it('should run exactly once when both the event and the timeout fire', () => {
    const run = harness();
    const done = jest.fn();
    const element = withTransition('200ms');

    act(() => run()(element, done));
    act(() => {
      element.dispatchEvent(new Event('transitionend', { bubbles: true }));
      jest.advanceTimersByTime(EXIT_TIMEOUT + 1);
    });
    expect(done).toHaveBeenCalledTimes(1);
  });

  /*
   * `transitionend` bubbles. A button inside the panel finishing its hover
   * would otherwise end the exit early, and the panel would vanish
   * mid-animation for anyone whose pointer happened to be over a control.
   */
  it('should ignore a transition that ended on a child', () => {
    const run = harness();
    const done = jest.fn();
    const element = withTransition('200ms');
    const child = document.createElement('button');
    element.appendChild(child);

    act(() => run()(element, done));
    act(() => {
      child.dispatchEvent(new Event('transitionend', { bubbles: true }));
    });
    expect(done).not.toHaveBeenCalled();
  });

  /* Closing twice must not run the continuation twice. */
  it('should cancel a pending wait when called again', () => {
    const run = harness();
    const first = jest.fn();
    const second = jest.fn();
    const element = withTransition('200ms');

    act(() => run()(element, first));
    act(() => run()(element, second));
    act(() => { jest.advanceTimersByTime(EXIT_TIMEOUT + 1); });

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });
});

describe('reading the duration', () => {
  /*
   * Only zero versus non-zero, in either unit.
   *
   * The first version converted `ms` to `s` to compare the real length, and
   * nothing used the number — the wait ends on `transitionend`, not on a
   * computed deadline. A revert that read `200ms` as 200 SECONDS passed every
   * test here, which is how untested complexity announces itself.
   */
  it.each([
    ['200ms', false],
    ['0.2s', false],
    ['0ms', true],
    ['0s', true],
  ])('should treat %p as instant: %p', (duration, instant) => {
    const run = harness();
    const done = jest.fn();

    act(() => run()(withTransition(duration), done));
    expect(done.mock.calls.length > 0).toBe(instant);
  });
});
