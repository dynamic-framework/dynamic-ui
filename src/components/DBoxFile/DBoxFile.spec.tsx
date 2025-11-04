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

  const boxFile = container.querySelector('.d-box-file');
  const dropzone = container.querySelector('.d-box-file-dropzone');
  const input = container.querySelector('input[type="file"]');
  const icon = container.querySelector('.d-icon');
  const content = container.querySelector('.d-box-content');

  expect(boxFile).toBeInTheDocument();
  expect(dropzone).toBeInTheDocument();
  expect(input).toHaveAttribute('accept', 'image/*,.png,.jpg,.jpeg,.svg');
  expect(icon).toBeInTheDocument();
  expect(icon?.querySelector('svg')).toBeInTheDocument();
  expect(content).toHaveTextContent('Upload your file here');
});
