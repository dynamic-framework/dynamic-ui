import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
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

describe('<DOffcanvas /> a11y', () => {
  it('should have no violations with header, body, and footer', async () => {
    const { container } = render(
      <DOffcanvas name="myOffcanvas">
        <DOffcanvas.Header>
          <span id="myOffcanvasLabel">Test Header</span>
        </DOffcanvas.Header>
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
        <DOffcanvas.Footer>Test Footer</DOffcanvas.Footer>
      </DOffcanvas>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a close button', async () => {
    const { container } = render(
      <DOffcanvas name="myOffcanvas">
        <DOffcanvas.Header showCloseButton onClose={jest.fn()}>
          <span id="myOffcanvasLabel">Test Header</span>
        </DOffcanvas.Header>
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
      </DOffcanvas>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when opened from the top with a static backdrop', async () => {
    const { container } = render(
      <DOffcanvas name="myOffcanvas" openFrom="top" staticBackdrop>
        <DOffcanvas.Header>
          <span id="myOffcanvasLabel">Test Header</span>
        </DOffcanvas.Header>
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
      </DOffcanvas>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when scrollable with a custom width', async () => {
    const { container } = render(
      <DOffcanvas name="myOffcanvas" scrollable width="320px">
        <DOffcanvas.Header>
          <span id="myOffcanvasLabel">Test Header</span>
        </DOffcanvas.Header>
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
        <DOffcanvas.Footer actionPlacement="start">Test Footer</DOffcanvas.Footer>
      </DOffcanvas>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
