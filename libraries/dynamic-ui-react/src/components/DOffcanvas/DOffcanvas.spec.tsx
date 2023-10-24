import { render } from '@testing-library/react';
import DOffcanvas from './DOffcanvas';
import DOffcanvasHeader from '../DOffcanvasHeader';
import DOffcanvasBody from '../DOffcanvasBody';
import DOffcanvasFooter from '../DOffcanvasFooter';

it('should render my component with header, body, and footer slot', () => {
  const offcanvas = { name: 'myModal' };

  const { container } = render(
    <DOffcanvas
      {...offcanvas}
    >
      <DOffcanvasHeader>
        Test Header
      </DOffcanvasHeader>
      <DOffcanvasBody>
        Test Body
      </DOffcanvasBody>
      <DOffcanvasFooter>
        Test Footer
      </DOffcanvasFooter>
    </DOffcanvas>,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      aria-hidden="false"
      aria-labelledby="myModalLabel"
      class="offcanvas show offcanvas-end"
      id="myModal"
      tabindex="-1"
    >
      <div
        class="offcanvas-header"
      >
        <div
          class="d-offcanvas-slot"
        >
          Test Header
        </div>
      </div>
      <div
        class="d-offcanvas-slot offcanvas-body"
      >
        Test Body
      </div>
      <div
        class="d-offcanvas-slot d-offcanvas-footer d-offcanvas-action-fill"
      >
        Test Footer
      </div>
    </div>
  </div>
  `);
});
