import { render } from '@testing-library/react';

import DOffcanvas from './DOffcanvas';

it('should render my component with header, body, and footer slot', () => {
  const offcanvas = { name: 'myModal' };

  const { container } = render(
    <DOffcanvas
      {...offcanvas}
    >
      <DOffcanvas.Header>
        Test Header
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        Test Body
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        Test Footer
      </DOffcanvas.Footer>
    </DOffcanvas>,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      aria-hidden="false"
      aria-labelledby="myModalLabel"
      class="offcanvas portal show offcanvas-end"
      id="myModal"
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
