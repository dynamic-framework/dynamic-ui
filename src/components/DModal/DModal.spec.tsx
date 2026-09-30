/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DModal from '.';

jest.mock('../../contexts', () => ({
  useDContext: () => ({
    iconMap: {
      xLg: 'x-lg-icon',
    },
    icon: {
      familyClass: 'bi',
      familyPrefix: 'bi',
    },
  }),
}));

describe('<DModal />', () => {
  describe('Rendering and Props', () => {
    it('should render with header, body, and footer', () => {
      const { container } = render(
        <DModal name="myModal">
          <DModal.Header>Test Header</DModal.Header>
          <DModal.Body>Test Body</DModal.Body>
          <DModal.Footer>Test Footer</DModal.Footer>
        </DModal>,
      );

      expect(container).toMatchInlineSnapshot(`
<div>
  <div
    aria-hidden="false"
    aria-labelledby="myModalLabel"
    class="df-overlay"
    data-kind="modal"
    id="myModal"
    style="opacity: 0; transform: scale(0.95);"
    tabindex="-1"
  >
    <div
      class="df-overlay-header"
    >
      <div>
        Test Header
      </div>
    </div>
    <hr
      class="df-overlay-separator"
    />
    <div
      class="df-overlay-body"
    >
      Test Body
    </div>
    <hr
      class="df-overlay-separator"
    />
    <div
      class="df-overlay-footer"
    >
      Test Footer
    </div>
  </div>
</div>
`);
    });

    it('should render a centered and large modal', () => {
      const { container } = render(<DModal name="test" centered size="lg" />);

      const dialog = container.querySelector('.df-overlay');
      expect(dialog).toHaveAttribute('data-centered');
      expect(dialog).toHaveAttribute('data-size', 'lg');
    });

    it('should render with a static backdrop', () => {
      const { container } = render(<DModal name="test" staticBackdrop />);

      const modal = container.querySelector('.df-overlay');
      expect(modal).toHaveAttribute('data-static-backdrop');
    });

    it('should render a fullscreen modal', () => {
      const { container } = render(<DModal name="test" fullScreen />);

      const dialog = container.querySelector('.df-overlay');
      expect(dialog).toHaveAttribute('data-fullscreen');
    });

    it('should render a fullscreen modal from a specific breakpoint', () => {
      const { container } = render(<DModal name="test" fullScreen fullScreenFrom="md" />);

      const dialog = container.querySelector('.df-overlay');
      expect(dialog).toHaveAttribute('data-fullscreen', 'md');
    });
  });

  describe('<DModal.Header />', () => {
    it('should render a close button and call onClose when clicked', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();
      render(
        <DModal.Header showCloseButton onClose={handleClose}>
          Header
        </DModal.Header>,
      );

      const closeButton = screen.getByRole('button', { name: /Close/i });
      expect(closeButton).toBeInTheDocument();

      await user.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('<DModal.Body />', () => {
    it('should render children correctly', () => {
      render(<DModal.Body>Modal Body Content</DModal.Body>);
      expect(screen.getByText('Modal Body Content')).toBeInTheDocument();
    });
  });

  describe('<DModal.Footer />', () => {
    it('should apply an action placement class', () => {
      const { container } = render(
        <DModal.Footer actionPlacement="end">
          Footer Content
        </DModal.Footer>,
      );

      const footer = container.querySelector('.df-overlay-footer');
      expect(footer).toHaveAttribute('data-align', 'end');
    });
  });
});
