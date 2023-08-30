import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DInputPassword } from './d-input-password';

it('should render my component', async () => {
  const search = {
    innerId: 'passwordId',
    label: 'Label',
    value: 'Value',
    placeholder: 'Password',
  };

  const page = await newSpecPage({
    components: [DInputPassword],
    template: () => (
      <d-input-password
        {...search}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-input-password>
      <d-input iconend="eye-slash" label="Label" innerid="passwordId" placeholder="Password" type="password" value="Value"></d-input>
    </d-input-passwrod>
  `);
});
