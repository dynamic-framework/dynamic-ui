/// <reference types="@testing-library/jest-dom" />

import { useEffect, useState } from 'react';

import { render } from '@testing-library/react';

import useRenderLoopWarning from '../useRenderLoopWarning';

/**
 * The thing that says which component is spinning.
 *
 * A runaway render is the worst failure React has: the tab stops responding,
 * devtools are too busy to open, and nothing is left to read afterwards. The
 * only chance to learn anything is to notice it while it is happening — so
 * this has to fire, once, with a name.
 */

let error: jest.SpyInstance;
beforeEach(() => { error = jest.spyOn(console, 'error').mockImplementation(() => {}); });
afterEach(() => { error.mockRestore(); });

/*
 * Only OUR messages.
 *
 * React logs its own "Maximum update depth exceeded" several times for the
 * same loop, so counting every `console.error` counts React's work as well as
 * this hook's — which is how a test asserting "once" saw eight.
 */
const ours = (): unknown[][] => (error.mock.calls as unknown[][])
  .filter((call) => String(call[0]).includes('[dynamic]'));

/**
 * Renders itself until it is told to stop.
 *
 * The missing dependency array is the point — it is what a real render loop
 * looks like, and the lint rule that forbids it is describing this exact bug.
 */
function Spinner({ times }: { times: number }) {
  const [count, setCount] = useState(0);
  useRenderLoopWarning('Spinner');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (count < times) setCount((value) => value + 1);
  });
  return null;
}

function Calm() {
  useRenderLoopWarning('Calm');
  return null;
}

it('should say nothing for a component that settles', () => {
  render(<Calm />);
  expect(ours()).toHaveLength(0);
});

it('should say nothing for a burst below the threshold', () => {
  render(<Spinner times={10} />);
  expect(ours()).toHaveLength(0);
});

it('should name the component that is looping', () => {
  render(<Spinner times={200} />);

  expect(ours()).toHaveLength(1);
  expect(String(ours()[0][0])).toContain('Spinner');
  expect(String(ours()[0][0])).toContain('render loop');
});

/*
 * Once. A warning that fires on every render of a looping component floods the
 * console with the one message that was supposed to be findable in it.
 */
it('should say it once, not on every render', () => {
  render(<Spinner times={400} />);
  expect(ours()).toHaveLength(1);
});

/* The stack is the point — it names the update that is driving it. */
it('should carry a stack', () => {
  render(<Spinner times={200} />);
  expect(String(ours()[0][1])).toMatch(/at /);
});
