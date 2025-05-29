/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import DAvatar from './DAvatar';

describe('<DAvatar />', () => {
  it('Should render an avatar', () => {
    const { container } = render(
      <DAvatar
        image="https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png"
        name="John Doe"
      />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-avatar d-avatar-secondary"
        >
          <img
            alt="John Doe"
            class="d-avatar-img"
            src="https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png"
          />
        </div>
      </div>
    `);
  });

  it('Should render initials from name when image is not provided', () => {
    const { getByText } = render(
      <DAvatar
        name="Jane Doe"
      />,
    );

    expect(getByText('JD')).toBeInTheDocument();
  });

  it('Should render full name when useNameAsInitials is true', () => {
    const { getByText } = render(
      <DAvatar
        name="Jane Doe"
        useNameAsInitials
      />,
    );

    expect(getByText('Jane Doe')).toBeInTheDocument();
  });

  it('Should apply variant, theme and size classes', () => {
    const { container } = render(
      <DAvatar
        name="Jane"
        variant="dark"
        theme="info"
        size="lg"
      />,
    );

    const avatar = container.firstChild as HTMLElement;
    expect(avatar).toHaveClass('d-avatar-dark-info');
    expect(avatar).toHaveClass('d-avatar-lg');
  });

  it('Should render empty avatar with default classes when no props are provided', () => {
    const { container } = render(<DAvatar />);

    const avatar = container.firstChild as HTMLElement;
    expect(avatar).toHaveClass('d-avatar', 'd-avatar-secondary');
    expect(avatar).toHaveTextContent('');
  });

  it('Should apply id, style and data attributes', () => {
    const { container } = render(
      <DAvatar
        id="avatar-id"
        name="Jane"
        style={{ backgroundColor: 'red' }}
        dataAttributes={{ 'data-test': 'avatar' }}
      />,
    );

    const avatar = container.firstChild as HTMLElement;
    expect(avatar).toHaveAttribute('id', 'avatar-id');
    expect(avatar).toHaveAttribute('data-test', 'avatar');
    expect(avatar).toHaveStyle({ backgroundColor: 'red' });
  });
});
