import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DModal } from './d-modal';

it('should render my component', async () => {
  const modal = { name: 'myModal' };

  const page = await newSpecPage({
    components: [DModal],
    template: () => (
      <d-modal
        {...modal}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-modal>
      <div aria-hidden="false" aria-labelledby="myModalLabel" class="fade modal show" id="myModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content"></div>
        </div>
      </div>
    </d-modal>
  `);
});

it('should render my component with header, body and footer slot', async () => {
  const modal = { name: 'myModal' };

  const page = await newSpecPage({
    components: [DModal],
    template: () => (
      <d-modal
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
      </d-modal>
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-modal>
      <div aria-hidden="false" aria-labelledby="myModalLabel" class="fade modal show" id="myModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="d-modal-slot">
                <div slot="header">
                  Test Header
                </div>
              </div>
            </div>
            <div class="d-modal-slot modal-body">
              <div slot="body">
                Test Body
              </div>
            </div>
            <div class="d-modal-separator"></div>
            <div class="d-modal-action-fill d-modal-slot modal-footer">
              <div slot="footer">
                Test Footer
              </div>
            </div>
          </div>
        </div>
      </div>
    </d-modal>
  `);
});
