import { render } from '@testing-library/react';

import DToast from './DToast';

it('should render my component with header and body slot', () => {
  const toast = { name: 'mytoast' };

  const { container } = render(
    <DToast
      {...toast}
    >
      <DToast.Header>
        Test Header
      </DToast.Header>
      <DToast.Body>
        Test Body
      </DToast.Body>
    </DToast>,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        aria-atomic="true"
        aria-live="assertive"
        class="toast"
        role="alert"
      >
        <div
          class="toast-header"
        >
          Test Header
        </div>
        <div
          class="toast-body"
        >
          Test Body
        </div>
      </div>
    </div>
  `);
});
