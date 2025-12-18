import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { RejectedFile } from '../../src/components/DBoxFile/utils';
import { ICONS } from '../config/constants';
import DBoxFile from '../../src/components/DBoxFile/DBoxFile';
import { DButton, DIcon } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

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

| Variable | Class | Type | Description |
| ------------------------------------------| -------------| -----------------| --------------------------|
| --${PREFIX_BS}box-file-gap | .d-box-file | css length unit | Space between elements |
| --${PREFIX_BS}box-file-bg | .d-box-file | css color unit | Background |
| --${PREFIX_BS}box-file-border | .d-box-file | css border | Border |
| --${PREFIX_BS}box-file-border-radius | .d-box-file | css length unit | Border radius |
| --${PREFIX_BS}box-file-content-max-width | .d-box-file | css length unit | Max width of the content |
| --${PREFIX_BS}box-file-padding | .d-box-file | css length unit | Padding |
| --${PREFIX_BS}box-file-icon-size | .d-box-file | css length unit | Icon size |
| --${PREFIX_BS}box-file-icon-color | .d-box-file | css color unit | Icon color |
| --${PREFIX_BS}box-file-hover-border | .d-box-file | css border | Hover Border |
| --${PREFIX_BS}box-file-hover-bg | .d-box-file | css color unit | Hover background |
| --${PREFIX_BS}box-file-selected-border | .d-box-file | css border | Selected border |
| --${PREFIX_BS}box-file-selected-bg | .d-box-file | css color unit | Selected background |
| --${PREFIX_BS}box-file-disabled-border | .d-box-file | css border | Disabled Border |
| --${PREFIX_BS}box-file-disabled-bg | .d-box-file | css color unit | Disabled background |
| --${PREFIX_BS}box-file-valid-border | .d-box-file | css border | Valid border |
| --${PREFIX_BS}box-file-invalid-border | .d-box-file | css color unit | Invalid border |
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
    },
    accept: {
      control: 'object',
    },
    multiple: {
      control: 'boolean',
      type: 'boolean',
    },
    minSize: {
      control: 'number',
      type: 'number',
    },
    maxSize: {
      control: 'number',
      type: 'number',
    },
    maxFiles: {
      control: 'number',
      type: 'number',
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'Array of file URLs to preload',
    },
    noClick: {
      control: 'boolean',
      type: 'boolean',
    },
    noKeyboard: {
      control: 'boolean',
      type: 'boolean',
    },
    noDrag: {
      control: 'boolean',
      type: 'boolean',
    },
    autoFocus: {
      control: 'boolean',
      type: 'boolean',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
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
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    iconMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
    },
    onDrop: {
      action: 'onDrop',
    },
    onDragEnter: {
      action: 'onDragEnter',
    },
    onDragLeave: {
      action: 'onDragLeave',
    },
    onError: {
      action: 'onError',
    },
    children: {
      control: 'text',
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
          <p className="m-0 text-center">
            Drop files here
            {' '}
            <span className="text-nowrap">(max 100 KB each)</span>
          </p>
        </DBoxFile>
        <div className="mt-3">
          {accepted.length > 0 && <h5>Accepted files:</h5>}
          <ul>
            {accepted.map((file) => (
              <li key={file.name} className="text-success">
                {file.name}
                {' '}
                -
                {Math.round(file.size / 1024)}
                {' '}
                KB
              </li>
            ))}
          </ul>
          {rejected.length > 0 && <h5 className="mt-2">Rejected files:</h5>}
          <ul>
            {rejected.map(({ file, errors }) => (
              <li key={file.name} className="text-danger">
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
        <p className="m-0 text-center">
          Drop files here
          {' '}
          <span className="text-nowrap">(max 100 KB each)</span>
        </p>
      </DBoxFile>
      <div className="mt-3">
        {accepted.length > 0 && <h5>Accepted files:</h5>}
        <ul>
          {accepted.map(file => (
            <li key={file.name} className="text-success">
              {file.name} - {Math.round(file.size / 1024)} KB
            </li>
          ))}
        </ul>
        {rejected.length > 0 && <h5 className="mt-2">Rejected files:</h5>}
        <ul>
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className="text-danger">
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
        <div className="mt-3">
          {loadedFiles.length > 0 ? (
            <>
              <h5>File Loaded from URL:</h5>
              <p className="text-success">{loadedFiles[0].name}</p>
            </>
          ) : (
            <p className="text-muted">Loading initial file...</p>
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
      <div className="mt-3">
        {loadedFiles.length > 0 ? (
          <>
            <h5>File Loaded from URL:</h5>
            <p className="text-success">{loadedFiles[0].name}</p>
          </>
        ) : (
          <p className="text-muted">Loading initial file...</p>
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
        <aside className="d-flex flex-wrap gap-2 mt-3">
          {files.map((file) => (
            <div key={file.name} className="text-center">
              <img
                src={file.preview}
                alt={file.name}
                className="img-thumbnail"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                }}
                onLoad={() => URL.revokeObjectURL(file.preview)}
              />
              <p
                className="small text-muted"
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
      <aside className="d-flex flex-wrap gap-2 mt-3">
        {files.map(file => (
          <div key={file.name} className="text-center">
            <img
              src={file.preview}
              alt={file.name}
              className="img-thumbnail"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              onLoad={() => URL.revokeObjectURL(file.preview)}
            />
            <p className="small text-muted" style={{ width: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
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
      <div className="text-center p-4">
        <DIcon icon="CloudUpload" strokeWidth={1} color="success" size="5rem" />
        <p className="mt-2 mb-0">Click or drag file to this area to upload.</p>
        <p className="small text-muted">
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
  <div className="text-center p-4">
    <DIcon icon="CloudUpload" strokeWidth={1} color="success" size="5rem" />
    <p className="mt-2 mb-0">Click or drag file to this area to upload.</p>
    <p className="small text-muted">
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
          <div className="text-center p-4 border border-2 border-dashed rounded-3">
            <p className="mb-2">This dropzone is not clickable.</p>
            <DButton
              size="sm"
              className="btn btn-primary"
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
    <div className="text-center p-4 border border-2 border-dashed rounded-3">
      <p className="mb-2">This dropzone is not clickable.</p>
      <DButton
        size="sm"
        className="btn btn-primary"
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
