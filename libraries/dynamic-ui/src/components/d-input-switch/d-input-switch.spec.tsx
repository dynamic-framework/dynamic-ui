import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DInputSwitch } from './d-input-switch';

it('should render base switch', async () => {
  const props = {
    id: 'switchTest',
    label: 'toggle',
  };
  const page = await newSpecPage({
    components: [DInputSwitch],
    template: () => (
      <d-input-switch
        innerId={props.id}
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-input-switch id="switchTest">
      <div class="form-check form-switch">
        <input class="form-check-input" id="switchTest" role="switch" type="checkbox">
        <label class="form-check-label" htmlfor="switchTest">
          toggle
        </label>
      </div>
    </d-input-switch>
  `);
});
