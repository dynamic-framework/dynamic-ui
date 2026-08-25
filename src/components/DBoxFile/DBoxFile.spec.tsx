import { render } from '@testing-library/react';
import DBoxFile from './DBoxFile';
import { DContextProvider } from '../../contexts';

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

it('falls back to context icon configuration when no icon family props are provided', () => {
  const { container } = render(
    <DContextProvider
      icon={{
        familyClass: 'material-symbols-outlined',
        familyPrefix: '',
        materialStyle: true,
      }}
    >
      <DBoxFile
        icon="upload"
        accept={{
          'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
        }}
      />
    </DContextProvider>,
  );

  const icon = container.querySelector('.d-icon');
  expect(icon?.className).toContain('material-symbols-outlined');
  expect(icon?.tagName).toBe('I');
});

it('prioritizes local icon family props over context configuration', () => {
  const { container } = render(
    <DContextProvider
      icon={{
        familyClass: 'material-symbols-outlined',
        familyPrefix: '',
        materialStyle: true,
      }}
    >
      <DBoxFile
        icon="Upload"
        iconMaterialStyle={false}
        iconFamilyClass="bi"
        iconFamilyPrefix="bi-"
        accept={{
          'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
        }}
      />
    </DContextProvider>,
  );

  const icon = container.querySelector('.d-icon');
  expect(icon?.className).not.toContain('material-symbols-outlined');
  expect(icon?.querySelector('svg')).toBeInTheDocument();
});
