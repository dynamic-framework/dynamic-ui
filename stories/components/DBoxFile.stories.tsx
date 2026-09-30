import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { RejectedFile } from '../../src/components/DBoxFile/utils';
import { ICONS } from '../config/constants';
import DBoxFile from '../../src/components/DBoxFile/DBoxFile';
import { DButton, DIcon } from '../../src';

const config: Meta<typeof DBoxFile> = {
  title: 'Design System/Components/Box File',
  component: DBoxFile,
  parameters: {
    docs: {
      description: {
        component: `
The DBoxFile component is a drag-and-drop solution for file uploads. It supports preloading images from URLs and allows users to delete uploaded files.
The component's behavior is inspired by the [React Dropzone](https://react-dropzone.js.org/) library.

## Features

- **Drag-and-drop support**: Easily upload files by dragging them into the component.
- **Preloaded files**: Initialize the component with files from URLs.
- **File deletion**: Users can remove uploaded files directly from the interface.
- **Multiple file uploads**: Configurable to accept one or multiple files.
- **File validation**: Supports MIME type and file size validation.

## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/dropzone.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                               | Type       | Description          |
|----------------------------------------|------------|----------------------|
| \`--df-dropzone-padding\`              | css length | Padding              |
| \`--df-dropzone-gap\`                  | css length | Gap                  |
| \`--df-dropzone-radius\`               | css length | Radius               |
| \`--df-dropzone-border-width\`         | css length | Border width         |
| \`--df-dropzone-bg\`                   | css color  | Background           |
| \`--df-dropzone-fg\`                   | css color  | Foreground           |
| \`--df-dropzone-border-color\`         | css color  | Border color         |
| \`--df-dropzone-hover-bg\`             | css color  | Hover background     |
| \`--df-dropzone-hover-border-color\`   | css color  | Hover border color   |
| \`--df-dropzone-invalid-border-color\` | css color  | Invalid border color |
| \`--df-dropzone-valid-border-color\`   | css color  | Valid border color   |
| \`--df-dropzone-disabled-bg\`          | css color  | Disabled background  |
| \`--df-dropzone-disabled-fg\`          | css color  | Disabled foreground  |
| \`--df-dropzone-file-gap\`             | css length | File gap             |
| \`--df-dropzone-file-padding-block\`   | css length | File padding block   |

`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '480px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    accept: {
      control: 'object',
      table: { category: 'Behavior' },
    },
    multiple: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    minSize: {
      control: 'number',
      type: 'number',
      table: { category: 'Behavior' },
    },
    maxSize: {
      control: 'number',
      type: 'number',
      table: { category: 'Behavior' },
    },
    maxFiles: {
      control: 'number',
      type: 'number',
      table: { category: 'Behavior' },
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'Array of file URLs to preload',
      table: { category: 'Content' },
    },
    noClick: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    noKeyboard: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    noDrag: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    autoFocus: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    icon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
      table: { category: 'Icon' },
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Icon' },
    },
    onDrop: {
      action: 'onDrop',
      table: { category: 'Events' },
    },
    onDragEnter: {
      action: 'onDragEnter',
      table: { category: 'Events' },
    },
    onDragLeave: {
      action: 'onDragLeave',
      table: { category: 'Events' },
    },
    onError: {
      action: 'onError',
      table: { category: 'Events' },
    },
    children: {
      control: 'text',
      table: { category: 'Content' },
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof DBoxFile>;

export const Default: Story = {
  args: {
    accept: {},
  },
};

export const WithoutIcon: Story = {
  args: {
    accept: {},
    icon: false,
  },
  parameters: {
    docs: {
      source: {
        type: 'tsx',
        code: `
<DBoxFile
  accept={{}}
  icon={false}
/>
        `,
      },
    },
  },
};

export const WithCustomIcon: Story = {
  args: {
    accept: {},
    icon: 'Paperclip',
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: '<DBoxFile icon="Paperclip" />',
      },
    },
  },
};

export const AcceptingSpecificFiles: Story = {
  args: {
    accept: { 'application/pdf': ['.pdf'] },
    children: 'Drag and drop PDF files here',
  },
};

export const WithFileSizeLimits: Story = {
  render: function Render(args) {
    const [accepted, setAccepted] = useState<File[]>([]);
    const [rejected, setRejected] = useState<RejectedFile[]>([]);

    return (
      <>
        <DBoxFile
          {...args}
          onDrop={(acceptedFiles, rejectedFiles) => {
            setAccepted((prev) => [...prev, ...acceptedFiles]);
            setRejected((prev) => [...prev, ...rejectedFiles]);
          }}
          maxSize={100 * 1024} // 100 KB
          multiple
        >
          <p className="df-m-0 df-text-center">
            Drop files here
            {' '}
            <span className="df-text-nowrap">(max 100 KB each)</span>
          </p>
        </DBoxFile>
        <div className="df-mt-3">
          {accepted.length > 0 && <h5>Accepted files:</h5>}
          <ul>
            {accepted.map((file) => (
              <li key={file.name} className="df-text-success">
                {file.name}
                {' '}
                -
                {Math.round(file.size / 1024)}
                {' '}
                KB
              </li>
            ))}
          </ul>
          {rejected.length > 0 && <h5 className="df-mt-2">Rejected files:</h5>}
          <ul>
            {rejected.map(({ file, errors }) => (
              <li key={file.name} className="df-text-danger">
                {file.name}
                {' '}
                -
                {errors.map((e) => e.message).join(', ')}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  },
  args: {
    accept: {},
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
function FileSizeLimitExample() {
  const [accepted, setAccepted] = useState([]);
  const [rejected, setRejected] = useState([]);

  return (
    <>
      <DBoxFile
        onDrop={(acceptedFiles, rejectedFiles) => {
          setAccepted((prev) => [...prev, ...acceptedFiles]);
          setRejected((prev) => [...prev, ...rejectedFiles]);
        }}
        maxSize={100 * 1024} // 100 KB
        multiple
      >
        <p className="df-m-0 df-text-center">
          Drop files here
          {' '}
          <span className="df-text-nowrap">(max 100 KB each)</span>
        </p>
      </DBoxFile>
      <div className="df-mt-3">
        {accepted.length > 0 && <h5>Accepted files:</h5>}
        <ul>
          {accepted.map(file => (
            <li key={file.name} className="df-text-success">
              {file.name} - {Math.round(file.size / 1024)} KB
            </li>
          ))}
        </ul>
        {rejected.length > 0 && <h5 className="df-mt-2">Rejected files:</h5>}
        <ul>
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className="df-text-danger">
              {file.name} - {errors.map(e => e.message).join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'This drop zone is disabled',
    accept: {},
  },
};

export const WithInitialFile: Story = {
  render: function Render(args) {
    const [loadedFiles, setLoadedFiles] = useState<File[]>([]);
    return (
      <>
        <DBoxFile
          {...args}
          value={[
            'https://placehold.co/600x400',
          ]}
          onLoad={(files) => setLoadedFiles(files)}
        />
        <div className="df-mt-3">
          {loadedFiles.length > 0 ? (
            <>
              <h5>File Loaded from URL:</h5>
              <p className="df-text-success">{loadedFiles[0].name}</p>
            </>
          ) : (
            <p className="df-text-muted">Loading initial file...</p>
          )}
        </div>
      </>
    );
  },
  args: {
    accept: {},
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
function InitialFileExample() {
  const [loadedFiles, setLoadedFiles] = useState([]);

  return (
    <>
      <DBoxFile
        value={['https://placehold.co/600x400/EEE/333?text=Initial']}
        onLoad={(files) => setLoadedFiles(files)}
      />
      <div className="df-mt-3">
        {loadedFiles.length > 0 ? (
          <>
            <h5>File Loaded from URL:</h5>
            <p className="df-text-success">{loadedFiles[0].name}</p>
          </>
        ) : (
          <p className="df-text-muted">Loading initial file...</p>
        )}
      </div>
    </>
  );
}
`,
      },
    },
  },
};

export const WithPreviews: Story = {
  render: function Render(args) {
    const [files, setFiles] = useState<(File & { preview: string })[]>([]);

    const handleFilesChange = (newFiles: File[]) => {
      setFiles(newFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
      })));
    };

    return (
      <>
        <DBoxFile
          {...args}
          onDrop={handleFilesChange}
          onLoad={handleFilesChange}
          multiple
        >
          Drop files here to see previews
        </DBoxFile>
        <aside className="df-flex df-flex-wrap df-gap-2 df-mt-3">
          {files.map((file) => (
            <div key={file.name} className="df-text-center">
              <img
                src={file.preview}
                alt={file.name}
                className="df-w-full df-h-auto df-p-1 df-bg-surface df-border-1 df-border-default df-rounded-control"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                }}
                onLoad={() => URL.revokeObjectURL(file.preview)}
              />
              <p
                className="df-fs-body-sm df-text-muted"
                style={{
                  width: '100px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {file.name}
              </p>
            </div>
          ))}
        </aside>
      </>
    );
  },
  args: {
    accept: {},
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
function PreviewsExample() {
  const [files, setFiles] = useState([]);

  // This handler replaces the file list completely,
  // which handles both additions and deletions.
  const handleFilesChange = (newFiles) => {
    setFiles(newFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    ));
  };

  return (
    <>
      <DBoxFile
        onDrop={handleFilesChange}
        onLoad={handleFilesChange}
        multiple
      >
        Drop files here to see previews
      </DBoxFile>
      <aside className="df-flex df-flex-wrap df-gap-2 df-mt-3">
        {files.map(file => (
          <div key={file.name} className="df-text-center">
            <img
              src={file.preview}
              alt={file.name}
              className="df-w-full df-h-auto df-p-1 df-bg-surface df-border-1 df-border-default df-rounded-control"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              onLoad={() => URL.revokeObjectURL(file.preview)}
            />
            <p className="df-fs-body-sm df-text-muted" style={{ width: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {file.name}
            </p>
          </div>
        ))}
      </aside>
    </>
  );
}
`,
      },
    },
  },
};

export const CustomContent: Story = {
  args: {
    accept: {},
    icon: false,
    children: (
      <div className="df-text-center df-p-4">
        <DIcon icon="CloudUpload" strokeWidth={1} color="success" size="5rem" />
        <p className="df-mt-2 df-mb-0">Click or drag file to this area to upload.</p>
        <p className="df-fs-body-sm df-text-muted">
          Support for a single or bulk upload.
        </p>
      </div>
    ),
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<DBoxFile icon={false}>
  <div className="df-text-center df-p-4">
    <DIcon icon="CloudUpload" strokeWidth={1} color="success" size="5rem" />
    <p className="df-mt-2 df-mb-0">Click or drag file to this area to upload.</p>
    <p className="df-fs-body-sm df-text-muted">
      Support for a single or bulk upload.
    </p>
  </div>
</DBoxFile>
`,
      },
    },
  },
};

export const ChildrenAsFunction: Story = {
  render: function Render(args) {
    return (
      <DBoxFile {...args} noClick>
        {(openFileDialog) => (
          <div className="df-text-center df-p-4 df-border-1 df-border-2 df-border-dashed df-rounded-control">
            <p className="df-mb-2">This dropzone is not clickable.</p>
            <DButton
              size="sm"
              className="df-button"
              data-variant="solid"
              data-color="primary"
              onClick={openFileDialog}
            >
              Click here to select files
            </DButton>
          </div>
        )}
      </DBoxFile>
    );
  },
  args: {
    accept: {},
    icon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'The `children` prop can be a function (render prop) that receives utilities like `openFileDialog`. This allows you to create a custom UI and trigger the file dialog programmatically. We recommend using the `noClick` prop to disable the default click-to-open behavior when using this pattern.',
      },
      source: {
        language: 'tsx',
        code: `
<DBoxFile noClick icon={false}>
  {(openFileDialog) => (
    <div className="df-text-center df-p-4 df-border-1 df-border-2 df-border-dashed df-rounded-control">
      <p className="df-mb-2">This dropzone is not clickable.</p>
      <DButton
        size="sm"
        className="df-button" data-variant="solid" data-color="primary"
        onClick={openFileDialog}
      >
        Click here to select files
      </DButton>
    </div>
  )}
</DBoxFile>
`,
      },
    },
  },
};
