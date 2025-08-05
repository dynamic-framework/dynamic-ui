/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import { ComponentProps } from 'react';
import userEvent from '@testing-library/user-event';
import DPopover from '.';

describe('<DPopover />', () => {
  it('should render my component', () => {
    const props: ComponentProps<typeof DPopover> = {
      open: false,
      renderComponent: () => <>Item 1</>,
      children: <>Content of item 1</>,
    };

    const { container } = render(<DPopover {...props} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-popover"
        >
          <div
            aria-expanded="false"
            aria-haspopup="dialog"
          >
            Item 1
          </div>
        </div>
      </div>
    `);
  });

  it('opens and shows content when the trigger is clicked', async () => {
    const user = userEvent.setup();
    render(
      <DPopover
        renderComponent={() => <button type="button">Open Popover</button>}
        open={false}
      >
        Popover Content
      </DPopover>,
    );

    const triggerButton = screen.getByRole('button', { name: /Open Popover/i });
    const triggerWrapper = triggerButton.parentElement;

    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();

    await user.click(triggerButton);

    expect(screen.getByText('Popover Content')).toBeInTheDocument();
    expect(triggerWrapper).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes when clicking outside the popover', async () => {
    const user = userEvent.setup();
    render(
      <DPopover
        renderComponent={() => <button type="button">Open Popover</button>}
        open={false}
      >
        Popover Content
      </DPopover>,
    );

    await user.click(screen.getByRole('button', { name: /Open Popover/i }));
    expect(screen.getByText('Popover Content')).toBeInTheDocument();

    await user.click(document.body);
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();
  });

  it('acts as a controlled component with open and setOpen props', async () => {
    const user = userEvent.setup();
    const handleSetOpen = jest.fn();

    const { rerender } = render(
      <DPopover
        open={false}
        setOpen={handleSetOpen}
        renderComponent={() => <button type="button">Trigger</button>}
      >
        Controlled Content
      </DPopover>,
    );

    const trigger = screen.getByRole('button', { name: /Trigger/i });
    expect(screen.queryByText('Controlled Content')).not.toBeInTheDocument();

    await user.click(trigger);
    expect(handleSetOpen).toHaveBeenCalledWith(true);

    rerender(
      <DPopover
        open
        setOpen={handleSetOpen}
        renderComponent={() => <button type="button">Trigger</button>}
      >
        Controlled Content
      </DPopover>,
    );

    expect(screen.getByText('Controlled Content')).toBeInTheDocument();
  });

  it('applies correct classes when adjustContentToRender is true', () => {
    render(
      <DPopover
        open
        adjustContentToRender
        renderComponent={() => <button type="button">Trigger</button>}
      >
        Content
      </DPopover>,
    );

    const popoverContent = screen.getByText('Content');
    expect(popoverContent).toHaveClass('d-popover-content', 'w-100');
  });
});
