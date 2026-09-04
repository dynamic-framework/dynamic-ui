import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
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

describe('<DModal /> a11y', () => {
  it('should have no violations with header, body, and footer', async () => {
    const { container } = render(
      <DModal name="myModal">
        <DModal.Header>
          <span id="myModalLabel">Test Header</span>
        </DModal.Header>
        <DModal.Body>Test Body</DModal.Body>
        <DModal.Footer>Test Footer</DModal.Footer>
      </DModal>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a close button', async () => {
    const { container } = render(
      <DModal name="myModal">
        <DModal.Header showCloseButton onClose={jest.fn()}>
          <span id="myModalLabel">Test Header</span>
        </DModal.Header>
        <DModal.Body>Test Body</DModal.Body>
      </DModal>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when centered, scrollable and sized', async () => {
    const { container } = render(
      <DModal name="myModal" centered scrollable size="lg">
        <DModal.Header>
          <span id="myModalLabel">Test Header</span>
        </DModal.Header>
        <DModal.Body>Test Body</DModal.Body>
      </DModal>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when fullscreen with a static backdrop', async () => {
    const { container } = render(
      <DModal name="myModal" fullScreen fullScreenFrom="md" staticBackdrop>
        <DModal.Header>
          <span id="myModalLabel">Test Header</span>
        </DModal.Header>
        <DModal.Body>Test Body</DModal.Body>
        <DModal.Footer actionPlacement="end">Test Footer</DModal.Footer>
      </DModal>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
