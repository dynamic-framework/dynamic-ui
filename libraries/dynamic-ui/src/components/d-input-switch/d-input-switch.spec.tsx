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
      <d-form-switch
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-form-switch label="toggle" id="switchTest"></d-form-switch>
  `);
});
