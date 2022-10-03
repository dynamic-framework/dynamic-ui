import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MModal } from './m-modal';

it('should render my component', async () => {
  const modal = { name: 'myModal' };

  const page = await newSpecPage({
    components: [MModal],
    template: () => (
      <m-modal
        {...modal}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-modal>
      <div 
        aria-hidden="false" 
        aria-labelledby="${modal.name}Label" 
        class="d-block fade modal show" 
        id="${modal.name}" 
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content"></div>
        </div>
      </div>
    </m-modal>
  `);
});

it('should render my component with header, body and footer slot', async () => {
  const modal = { name: 'myModal' };

  const page = await newSpecPage({
    components: [MModal],
    template: () => (
      <m-modal
        {...modal}
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
      </m-modal>
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-modal>
      <div 
        aria-hidden="false" 
        aria-labelledby="${modal.name}Label" 
        class="d-block fade modal show" 
        id="${modal.name}" 
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div slot="header">
                Test Header
              </div>
            </div>
            <div class="modal-body">
              <div slot="body">
                Test Body
              </div>
            </div>
            <div class="modal-footer">
              <div slot="footer">
                Test Footer
              </div>
            </div>
          </div>
        </div>
      </div>
    </m-modal>
  `);
});
