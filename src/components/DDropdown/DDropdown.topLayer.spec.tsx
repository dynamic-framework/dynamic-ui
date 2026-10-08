import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import DModal from '../DModal';
import DDropdown from '.';

jest.mock('../DIcon', () => ({ __esModule: true, default: () => null }));

const ACTIONS = [{ label: 'Edit', onClick: () => {} }];

/**
 * The same rule as `DTooltip.topLayer.spec.tsx`, for the other component that
 * portals out of its own subtree. See there for why the body is the wrong
 * parent inside a panel, and for what this test can and cannot see.
 */
describe('<DDropdown asPortal /> inside a panel', () => {
  it('portals into the open dialog rather than onto the body', async () => {
    const user = userEvent.setup();
    render(
      <DModal name="panel">
        <DModal.Body>
          <DDropdown
            asPortal
            actions={ACTIONS}
            dropdownToggle={({ toggle }) => (
              <button type="button" onClick={toggle}>toggle</button>
            )}
          />
        </DModal.Body>
      </DModal>,
    );

    await user.click(screen.getByText('toggle'));

    const item = await screen.findByText('Edit');
    expect(item.closest('dialog')).toBe(document.getElementById('panel'));
  });

  it('portals onto the body when there is no panel', async () => {
    const user = userEvent.setup();
    render(
      <DDropdown
        asPortal
        actions={ACTIONS}
        dropdownToggle={({ toggle }) => (
          <button type="button" onClick={toggle}>toggle</button>
        )}
      />,
    );

    await user.click(screen.getByText('toggle'));

    const item = await screen.findByText('Edit');
    expect(item.closest('dialog')).toBeNull();
  });
});
