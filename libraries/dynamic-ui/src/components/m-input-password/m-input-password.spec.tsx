import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MInputPassword } from './m-input-password';

it('should render my component', async () => {
  const search = {
    mId: 'passwordId',
    label: 'Label',
    value: 'Value',
    placeholder: 'Password',
  };

  const page = await newSpecPage({
    components: [MInputPassword],
    template: () => (
      <m-input-password
        {...search}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-input-password>
      <m-input iconend="eye-slash" label="Label" mid="passwordId" placeholder="Password" type="password" value="Value"></m-input>
    </m-input-passwrod>
  `);
});
