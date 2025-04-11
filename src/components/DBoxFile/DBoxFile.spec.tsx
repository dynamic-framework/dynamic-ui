import { render } from '@testing-library/react';
import DBoxFile from './DBoxFile';

it('should render base boxfile', () => {
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

  expect(container).toMatchInlineSnapshot(`
    <div>
      <section
        class="d-box-file"
      >
        <div
          class="d-box-file-dropzone"
          role="presentation"
          tabindex="0"
        >
          <input
            accept="image/*, .png, .jpg, .jpeg, .svg"
            style="display: none;"
            tabindex="-1"
            type="file"
          />
          <i
            class="d-icon bi bi-cloud-upload"
            style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
          />
          <div
            class="d-box-content"
          >
            Upload your file here
          </div>
        </div>
      </section>
    </div>
  `);
});
