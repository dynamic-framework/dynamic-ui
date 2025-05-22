import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DCurrencyText from '.';

it('should render a currency text', () => {
  const props: ComponentProps<typeof DCurrencyText> = {
    value: 1234,
  };

  const { container } = render(
    <DCurrencyText {...props} />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <span>
        $1,234.00
      </span>
    </div>
  `);
});
