import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import DModal from '../DModal';
import DTooltip from '.';

jest.mock('../DIcon', () => ({ __esModule: true, default: () => null }));

/**
 * Where the tooltip MOUNTS, inside a panel that is in the top layer.
 *
 * `<FloatingPortal>` with no `root` mounts into `document.body`. A `DModal`
 * opens with `showModal()`, which puts the dialog in the browser's TOP LAYER,
 * and the top layer paints above the entire document whatever `z-index` says —
 * so a tooltip left on the body renders BEHIND the panel holding the control
 * that opened it. Verified in Chromium: `elementFromPoint` at the tooltip's own
 * centre returned the modal's paragraph. The tooltip was in the DOM, correctly
 * positioned, and completely invisible.
 *
 * This test pins the MECHANISM — the parent the tooltip mounts into. It cannot
 * see the symptom: the top layer and paint order are the browser's, and jsdom
 * has no layout at all. So it would not have caught the bug, but it is what
 * stops the fix being refactored away.
 */
describe('<DTooltip /> inside a panel', () => {
  it('portals into the open dialog rather than onto the body', async () => {
    const user = userEvent.setup();
    render(
      <DModal name="panel">
        <DModal.Body>
          <DTooltip Component={<button type="button">trigger</button>}>
            Tooltip copy
          </DTooltip>
        </DModal.Body>
      </DModal>,
    );

    await user.hover(screen.getByText('trigger'));

    const tip = await screen.findByText('Tooltip copy');
    expect(tip.closest('dialog')).toBe(document.getElementById('panel'));
  });

  /** On a page with no panel, the body is still the right answer. */
  it('portals onto the body when there is no panel', async () => {
    const user = userEvent.setup();
    render(
      <DTooltip Component={<button type="button">trigger</button>}>
        Tooltip copy
      </DTooltip>,
    );

    await user.hover(screen.getByText('trigger'));

    const tip = await screen.findByText('Tooltip copy');
    expect(tip.closest('dialog')).toBeNull();
  });
});
