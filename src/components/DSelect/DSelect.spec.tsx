import { render } from '@testing-library/react';

import DSelect from './DSelect';

it('should render my component', () => {
  const input = {
    id: 'componentId1',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    style: {
      minWidth: '200px',
    },
  };

  const { container } = render(
    <DSelect {...input} />,
  );

  const selectContainer = container.querySelector('.d-select');
  const selectComponent = container.querySelector('.d-select-component');
  const inputElement = container.querySelector('#componentId1');

  expect(selectContainer).toBeInTheDocument();
  expect(selectComponent).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute('type', 'text');
});
