/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DOffcanvas from '.';

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

describe('<DOffcanvas />', () => {
  it('should render my component with header, body, and footer', () => {
    const { container } = render(
      <DOffcanvas name="myOffcanvas">
        <DOffcanvas.Header>Test Header</DOffcanvas.Header>
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
        <DOffcanvas.Footer>Test Footer</DOffcanvas.Footer>
      </DOffcanvas>,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          aria-hidden="false"
          aria-labelledby="myOffcanvasLabel"
          class="offcanvas portal show offcanvas-end"
          id="myOffcanvas"
          tabindex="-1"
        >
          <div
            class="offcanvas-header"
          >
            <div>
              Test Header
            </div>
          </div>
          <div
            class="d-offcanvas-separator"
          />
          <div
            class="offcanvas-body"
          >
            Test Body
          </div>
          <div
            class="d-offcanvas-separator"
          />
          <div
            class="d-offcanvas-footer"
          >
            Test Footer
          </div>
        </div>
      </div>
    `);
  });

  it.each([
    ['start', 'offcanvas-start'],
    ['top', 'offcanvas-top'],
    ['bottom', 'offcanvas-bottom'],
  ])('renders on position %s', (position, expectedClass) => {
    const { container } = render(<DOffcanvas name="test" openFrom={position as 'start' | 'top' | 'bottom'} />);
    expect(container.firstChild).toHaveClass(expectedClass);
  });

  it('renders with a static backdrop', () => {
    const { container } = render(<DOffcanvas name="test" staticBackdrop />);
    expect(container.firstChild).toHaveAttribute('data-bs-backdrop', 'static');
  });

  it('renders a scrollable offcanvas', () => {
    const { container } = render(<DOffcanvas name="test" scrollable />);
    expect(container.firstChild).toHaveAttribute('data-bs-scroll', 'true');
  });

  describe('<DOffcanvas.Header />', () => {
    it('renders a close button and calls onClose when clicked', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();
      render(
        <DOffcanvas.Header showCloseButton onClose={handleClose}>
          Header
        </DOffcanvas.Header>,
      );

      const closeButton = screen.getByRole('button', { name: /Close/i });
      expect(closeButton).toBeInTheDocument();

      await user.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('<DOffcanvas.Body />', () => {
    it('renders children correctly', () => {
      render(<DOffcanvas.Body>Offcanvas Body Content</DOffcanvas.Body>);
      expect(screen.getByText('Offcanvas Body Content')).toBeInTheDocument();
    });
  });

  describe('<DOffcanvas.Footer />', () => {
    it('applies action placement class', () => {
      const { container } = render(
        <DOffcanvas.Footer actionPlacement="start">
          Footer Content
        </DOffcanvas.Footer>,
      );

      const footer = container.querySelector('.d-offcanvas-footer');
      expect(footer).toHaveClass('d-offcanvas-action-start');
    });
  });
});
