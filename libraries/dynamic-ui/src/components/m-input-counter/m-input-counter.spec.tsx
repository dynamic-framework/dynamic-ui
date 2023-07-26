import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MIcon } from '../m-icon/m-icon';

import { MInputCounter } from './m-input-counter';

it('should render base counter', async () => {
  const props = {
    mId: 'counter',
    minValue: 0,
    maxValue: 10,
    value: 0,
  };
  const page = await newSpecPage({
    components: [MInputCounter, MIcon],
    template: () => (
      <m-counter
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-counter maxvalue="10" mid="counter" minvalue="0" value="0"></m-counter>
  `);
});
