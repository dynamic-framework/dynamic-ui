import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MOffcanvas } from './m-offcanvas';

it('should render my component', async () => {
  const offcanvas = { name: 'myModal' };

  const page = await newSpecPage({
    components: [MOffcanvas],
    template: () => (
      <m-offcanvas
        {...offcanvas}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
      <m-offcanvas>
      <div aria-hidden="false" aria-labelledby="myModalLabel" class="offcanvas offcanvas-end show" id="myModal" tabindex="-1"></div>
    </m-offcanvas>
  `);
});

it('should render my component with header, body and footer slot', async () => {
  const offcanvas = { name: 'myModal' };

  const page = await newSpecPage({
    components: [MOffcanvas],
    template: () => (
      <m-offcanvas
        {...offcanvas}
      >
        <div slot="header">
          Test Header
        </div>
        <div slot="body">
          Test Body
        </div>
        <div slot="footer">
          Test Footer
        </div>
      </m-offcanvas>
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-offcanvas>
      <div aria-hidden="false" aria-labelledby="myModalLabel" class="offcanvas offcanvas-end show" id="myModal" tabindex="-1">
        <div class="offcanvas-header">
          <div class="m-offcanvas-slot">
            <div slot="header">
              Test Header
            </div>
          </div>
        </div>
        <div class="m-offcanvas-slot offcanvas-body">
          <div slot="body">
            Test Body
          </div>
        </div>
        <div class="m-offcanvas-action-fill m-offcanvas-footer m-offcanvas-slot">
          <div slot="footer">
            Test Footer
          </div>
        </div>
      </div>
    </m-offcanvas>
  `);
});
