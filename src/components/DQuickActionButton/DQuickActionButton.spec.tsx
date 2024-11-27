import { render } from '@testing-library/react';
import DQuickActionButton from './DQuickActionButton';

it('should render my component', () => {
  const quick = {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
  };

  const { container } = render(
    <DQuickActionButton
      {...quick}
    />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        class="d-quick-action-button"
      >
        <img
          alt=""
          class="d-quick-action-button-representative-image"
          src="https://i.pravatar.cc/150?img=2"
        />
        <div
          class="d-quick-action-button-content"
        >
          <div
            class="d-quick-action-button-text"
          >
            <span
              class="d-quick-action-button-line1"
            >
              Jessica Rabit
            </span>
            <small
              class="d-quick-action-button-line2"
            >
              Toon Bank **** 721
            </small>
          </div>
        </div>
      </button>
    </div>
  `);
});
