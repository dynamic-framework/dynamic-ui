import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DAvatar from './DAvatar';

describe('<DAvatar /> a11y', () => {
  it('has no violations with image and name', async () => {
    const { container } = render(
      <DAvatar
        image="https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png"
        name="John Doe"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with initials from name', async () => {
    const { container } = render(<DAvatar name="Jane Doe" />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with full name as initials', async () => {
    const { container } = render(
      <DAvatar
        name="Jane Doe"
        useNameAsInitials
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with empty avatar and different size', async () => {
    const { container } = render(<DAvatar size="lg" />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
