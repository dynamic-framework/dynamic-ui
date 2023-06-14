import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MInputCheck } from './m-input-check';
import { FormCheckType } from './m-input-check-interface';

it('should render base checkbox', async () => {
  const props = {
    mId: 'checkTest',
    type: 'checkbox',
  };
  const page = await newSpecPage({
    components: [MInputCheck],
    template: () => (
      <m-input-check
        mId={props.mId}
        type={props.type as FormCheckType}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-input-check>
      <input class="form-check-input m-input-check" id="checkTest" type="checkbox">
    </m-input-check>
  `);
});

it('should render base radio', async () => {
  const props = {
    mId: 'radioTest',
    type: 'radio',
  };
  const page = await newSpecPage({
    components: [MInputCheck],
    template: () => (
      <m-input-check
        mId={props.mId}
        type={props.type as FormCheckType}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-input-check>
      <input class="form-check-input m-input-check" id="radioTest" type="radio">
    </m-input-check>
  `);
});
