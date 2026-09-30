import { render } from '@testing-library/react';
import DBoxFile from './DBoxFile';

it('should render base box file', () => {
  const props = {
    text: 'Upload your file here',
  };

  const { container } = render(
    <DBoxFile
      accept={{
        'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
      }}
    >
      {props.text}
    </DBoxFile>,
  );

  const boxFile = container.querySelector('.df-dropzone-wrapper');
  const dropzone = container.querySelector('.df-dropzone');
  const input = container.querySelector('input[type="file"]');
  const icon = container.querySelector('.df-icon');
  const content = container.querySelector('.df-dropzone-prompt');

  expect(boxFile).toBeInTheDocument();
  expect(dropzone).toBeInTheDocument();
  expect(input).toHaveAttribute('accept', 'image/*,.png,.jpg,.jpeg,.svg');
  expect(icon).toBeInTheDocument();
  expect(icon?.querySelector('svg')).toBeInTheDocument();
  expect(content).toHaveTextContent('Upload your file here');
});
