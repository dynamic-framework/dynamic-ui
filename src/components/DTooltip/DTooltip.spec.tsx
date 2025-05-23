import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DTooltip from '.';

it('should render a tooltip', () => {
  const props: ComponentProps<typeof DTooltip> = {
    Component: <>Text to hover</>,
  };

  const { container } = render(
    <DTooltip {...props} />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        Text to hover
      </div>
    </div>
  `);
});
