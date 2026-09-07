import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DBoxFile from './DBoxFile';

describe('<DBoxFile /> a11y', () => {
  it('has no violations with default props', async () => {
    const { container } = render(
      <DBoxFile
        accept={{
          'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
        }}
      >
        Drag and drop some files here, or click to select files
      </DBoxFile>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const { container } = render(
      <DBoxFile
        accept={{
          'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
        }}
        disabled
      >
        Upload your file here
      </DBoxFile>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with multiple files allowed', async () => {
    const { container } = render(
      <DBoxFile
        accept={{
          'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
        }}
        multiple
      >
        Upload your files here
      </DBoxFile>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
