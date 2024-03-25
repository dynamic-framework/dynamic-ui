import { render } from '@testing-library/react';
import DAvatar from './DAvatar';

it('should render info alert', () => {
  const { container } = render(
    <DAvatar
      image="https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png"
    />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="avatar"
    >
      <img
        alt="avatar"
        class="avatar-img"
        src="https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png"
      />
    </div>
  </div>
  `);
});
