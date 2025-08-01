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
      xLg: { name: 'x-lg-icon', familyClass: 'bi', familyPrefix: 'bi' },
    },
    icon: {
      familyClass: 'bi',
      familyPrefix: 'bi',
    },
  }),
}));

describe('<DModal />', () => {
  it('should render my component with header, body, and footer', () => {
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
          class="modal portal fade show"
          id="myModal"
          tabindex="-1"
        >
          <div
            class="modal-dialog"
          >
            <div
              class="modal-content"
            >
              <div
                class="modal-header"
              >
                <div>
                  Test Header
                </div>
              </div>
              <div
                class="d-modal-separator"
              />
              <div
                class="modal-body"
              >
                Test Body
              </div>
              <div
                class="d-modal-separator"
              />
              <div
                class="modal-footer"
              >
                Test Footer
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });

  it('renders a centered and large modal', () => {
    // CORRECCIÓN 2: Usamos querySelector porque el rol "dialog" falta en el componente.
    const { container } = render(<DModal name="test" centered size="lg" />);

    const dialog = container.querySelector('.modal-dialog');
    expect(dialog).toHaveClass('modal-dialog-centered');
    expect(dialog).toHaveClass('modal-lg');
  });

  it('renders with a static backdrop', () => {
    // CORRECCIÓN 2: Usamos querySelector aquí también.
    const { container } = render(<DModal name="test" staticBackdrop />);

    const modal = container.querySelector('.modal');
    expect(modal).toHaveAttribute('data-bs-backdrop', 'static');
  });

  describe('<DModal.Header />', () => {
    it('renders a close button and calls onClose when clicked', async () => {
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
    it('renders children correctly', () => {
      render(<DModal.Body>Modal Body Content</DModal.Body>);
      expect(screen.getByText('Modal Body Content')).toBeInTheDocument();
    });
  });

  describe('<DModal.Footer />', () => {
    it('applies action placement class', () => {
      const { container } = render(
        <DModal.Footer actionPlacement="end">
          Footer Content
        </DModal.Footer>,
      );

      const footer = container.querySelector('.modal-footer');
      expect(footer).toHaveClass('d-modal-action-end');
    });
  });
});
