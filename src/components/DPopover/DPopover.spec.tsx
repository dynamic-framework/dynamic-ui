/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import { ComponentProps } from 'react';
import userEvent from '@testing-library/user-event';
import DPopover from '.';

describe('<DPopover />', () => {
  describe('Rendering and Props', () => {
    it('should render the component wrapper', () => {
      const props: ComponentProps<typeof DPopover> = {
        open: false,
        renderComponent: () => <button type="button">Item 1</button>,
        children: <>Content of item 1</>,
      };

      const { container } = render(<DPopover {...props} />);

      expect(container.firstChild).toMatchInlineSnapshot(`
        <div
          class="d-popover"
        >
          <button
            aria-expanded="false"
            aria-haspopup="dialog"
            type="button"
          >
            Item 1
          </button>
        </div>
      `);
    });

    it('should apply correct classes when adjustContentToRender is true', () => {
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

  describe('Interaction and State Management', () => {
    it('should open and show content when the trigger is clicked', async () => {
      const user = userEvent.setup();

      render(
        <DPopover
          renderComponent={() => <button type="button">Open Popover</button>}
          setOpen={() => { }}
          open={false}
        >
          Popover content
        </DPopover>,
      );

      const trigger = screen.getByRole('button', { name: /open popover/i });

      await user.click(trigger);

      expect(await screen.findByText('Popover content')).toBeInTheDocument();
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('should close when clicking outside the popover', async () => {
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

    it('should act as a controlled component with open and setOpen props', async () => {
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
  });
});
