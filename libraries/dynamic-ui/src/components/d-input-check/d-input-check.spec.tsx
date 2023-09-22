import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DInputCheck } from './d-input-check';
import { FormCheckType } from './d-input-check-interface';

it('should render base checkbox', async () => {
  const props = {
    innerId: 'checkTest',
    type: 'checkbox',
  };
  const page = await newSpecPage({
    components: [DInputCheck],
    template: () => (
      <d-input-check
        innerId={props.innerId}
        type={props.type as FormCheckType}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-input-check>
      <input class="form-check-input" id="checkTest" type="checkbox">
    </d-input-check>
  `);
});

it('should render base radio', async () => {
  const props = {
    id: 'radioTest',
    type: 'radio',
  };
  const page = await newSpecPage({
    components: [DInputCheck],
    template: () => (
      <d-input-check
        innerId={props.id}
        type={props.type as FormCheckType}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-input-check>
      <input class="form-check-input" id="radioTest" type="radio">
    </d-input-check>
  `);
});
