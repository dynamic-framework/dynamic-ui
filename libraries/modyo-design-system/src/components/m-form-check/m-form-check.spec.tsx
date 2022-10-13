import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MFormCheck } from './m-form-check';
import { FormCheckType } from './m-form-check-interface';

it('should render base checkbox', async () => {
  const props = {
    mId: 'checkTest',
    type: 'checkbox',
  };
  const page = await newSpecPage({
    components: [MFormCheck],
    template: () => (
      <m-form-check
        mId={props.mId}
        type={props.type as FormCheckType}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-form-check class="form-check-box">
      <input class="form-check-input" id="${props.mId}" type="${props.type}">
    </m-form-check>
  `);
});

it('should render base radio', async () => {
  const props = {
    mId: 'radioTest',
    type: 'radio',
  };
  const page = await newSpecPage({
    components: [MFormCheck],
    template: () => (
      <m-form-check
        mId={props.mId}
        type={props.type as FormCheckType}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-form-check class="form-check-box">
      <input class="form-check-input" id="${props.mId}" type="${props.type}">
    </m-form-check>
  `);
});
