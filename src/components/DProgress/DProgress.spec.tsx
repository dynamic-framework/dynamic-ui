import { render } from '@testing-library/react';
import DProgress from './DProgress';

it('should render my component', () => {
  const progress = { currentValue: 33 };

  const { container } = render(
    <DProgress
      {...progress}
    />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="progress"
      >
        <div
          aria-label="Progress bar"
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow="33"
          class="progress-bar"
          role="progressbar"
          style="width: 33%;"
        >
          33%
        </div>
      </div>
    </div>
  `);
});
