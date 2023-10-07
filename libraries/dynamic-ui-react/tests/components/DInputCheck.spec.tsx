import { render } from '@testing-library/react';
import DInputCheck from '../../src/components/DInputCheck';
import { FormCheckType } from '../../src/interfaces/DInputCheckInterface';

it('should render base checkbox', () => {
  const props = {
    id: 'checkTest',
    type: 'checkbox',
  };

  const { container } = render(
    <DInputCheck
      id={props.id}
      type={props.type as FormCheckType}
    />
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class="form-check-input"
        id="checkTest"
        type="checkbox"
      />
    </div>
  `);
});

it('should render base radio', () => {
  const props = {
    id: 'radioTest',
    type: 'radio',
  };

  const { container } = render(
    <DInputCheck
      id={props.id}
      type={props.type as FormCheckType}
    />
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class="form-check-input"
        id="radioTest"
        type="radio"
      />
    </div>
  `);
});
