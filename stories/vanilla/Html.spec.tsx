/// <reference types="@testing-library/jest-dom" />

import { StrictMode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Html from './Html';

/**
 * One click, one effect — however many times React runs the hook.
 *
 * The host re-creates inline `<script>` elements so they execute; a script
 * inserted through `innerHTML` is parsed and deliberately not run. The
 * cleanup calls `destroy`, which removes the vanilla behaviours and knows
 * nothing about a script or the listeners it added.
 *
 * So when the effect ran twice — React 19 double-invokes under StrictMode, a
 * docs page can mount a story more than once, a markup change reruns it
 * outright — the second run found the already re-created script still in the
 * DOM and re-created it again. Two listeners on one button. One press, two
 * toasts.
 *
 * What is asserted is the CLICK, not the number of times the script ran.
 * Double execution is fine and unavoidable under StrictMode; what must not
 * double is the live result, and rewriting the host from `markup` at the top
 * of each run is what guarantees it — the previous run's listeners go with
 * the nodes they were attached to.
 */
declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var htmlSpecFires: number;
}

const MARKUP = `
<button type="button" id="go">Go</button>
<script>
  document.getElementById('go')
    .addEventListener('click', () => { globalThis.htmlSpecFires += 1; });
</script>`.trim();

describe('Html', () => {
  beforeEach(() => { globalThis.htmlSpecFires = 0; });

  it('should fire once on a plain mount', async () => {
    const user = userEvent.setup();
    render(<Html markup={MARKUP} />);

    await user.click(screen.getByRole('button', { name: 'Go' }));
    expect(globalThis.htmlSpecFires).toBe(1);
  });

  it('should fire once when the effect is double-invoked', async () => {
    const user = userEvent.setup();
    render(<StrictMode><Html markup={MARKUP} /></StrictMode>);

    await user.click(screen.getByRole('button', { name: 'Go' }));
    expect(globalThis.htmlSpecFires).toBe(1);
  });

  it('should fire once after the markup changes', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Html markup={MARKUP} />);
    rerender(<Html markup={`${MARKUP}<span></span>`} />);

    await user.click(screen.getByRole('button', { name: 'Go' }));
    expect(globalThis.htmlSpecFires).toBe(1);
  });
});

/**
 * The same snippet twice on one page must not cross-wire.
 *
 * Storybook's docs page renders the first story twice — once as the Primary
 * block, once in the story list — and a Modyo widget can appear twice on a
 * page for its own reasons. A script that reaches for
 * `document.getElementById('save')` then finds the SAME element from both
 * copies, because `getElementById` returns the first match in the document.
 * Two listeners on one button; one press, two toasts.
 *
 * `document.currentScript` is the script's own element, so a snippet can find
 * the markup it was written for instead of the first one that matches.
 *
 * NOTE: the failing case cannot be reproduced here. jsdom's `getElementById`
 * does not follow tree order, so two unscoped scripts happen to find
 * different buttons and the bug disappears. What this pins is the fix — that
 * each copy wires its OWN markup — which is the property the examples depend
 * on either way.
 */
declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var htmlSpecScoped: string[];
}

const SCOPED = `
<div><button type="button" data-which="A">Go</button></div>
<script>
  (() => {
    const root = document.currentScript.previousElementSibling;
    const button = root.querySelector('button');
    button.addEventListener('click', () => {
      globalThis.htmlSpecScoped.push(button.dataset.which);
    });
  })();
</script>`.trim();

describe('Html, a snippet included twice', () => {
  beforeEach(() => { globalThis.htmlSpecScoped = []; });

  it('should wire each copy to its own markup', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Html markup={SCOPED} />
        <Html markup={SCOPED.replace('data-which="A"', 'data-which="B"')} />
      </>,
    );

    const buttons = screen.getAllByRole('button', { name: 'Go' });
    await user.click(buttons[0]);
    await user.click(buttons[1]);

    expect(globalThis.htmlSpecScoped).toEqual(['A', 'B']);
  });

  it('should fire once per press, not once per copy', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Html markup={SCOPED} />
        <Html markup={SCOPED} />
      </>,
    );

    await user.click(screen.getAllByRole('button', { name: 'Go' })[0]);
    expect(globalThis.htmlSpecScoped).toHaveLength(1);
  });
});
