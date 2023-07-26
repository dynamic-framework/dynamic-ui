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
      <div aria-hidden="false" aria-labelledby="myModalLabel" class="fade m-modal modal show" id="myModal" tabindex="-1">
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
      <div aria-hidden="false" aria-labelledby="myModalLabel" class="fade m-modal modal show" id="myModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="m-modal-slot">
                <div slot="header">
                  Test Header
                </div>
              </div>
            </div>
            <div class="m-modal-slot modal-body">
              <div slot="body">
                Test Body
              </div>
            </div>
            <div class="m-modal-separator"></div>
            <div class="m-modal-action-fill m-modal-slot modal-footer">
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
