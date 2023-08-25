import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DOffcanvas } from './d-offcanvas';

it('should render my component', async () => {
  const offcanvas = { name: 'myModal' };

  const page = await newSpecPage({
    components: [DOffcanvas],
    template: () => (
      <d-offcanvas
        {...offcanvas}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-offcanvas>
      <div aria-hidden="false" aria-labelledby="myModalLabel" class="offcanvas offcanvas-end show" id="myModal" tabindex="-1"></div>
    </d-offcanvas>
  `);
});

it('should render my component with header, body and footer slot', async () => {
  const offcanvas = { name: 'myModal' };

  const page = await newSpecPage({
    components: [DOffcanvas],
    template: () => (
      <d-offcanvas
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
      </d-offcanvas>
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-offcanvas>
      <div aria-hidden="false" aria-labelledby="myModalLabel" class="offcanvas offcanvas-end show" id="myModal" tabindex="-1">
        <div class="offcanvas-header">
          <div class="d-offcanvas-slot">
            <div slot="header">
              Test Header
            </div>
          </div>
        </div>
        <div class="d-offcanvas-slot offcanvas-body">
          <div slot="body">
            Test Body
          </div>
        </div>
        <div class="d-offcanvas-action-fill d-offcanvas-footer d-offcanvas-slot">
          <div slot="footer">
            Test Footer
          </div>
        </div>
      </div>
    </d-offcanvas>
  `);
});
