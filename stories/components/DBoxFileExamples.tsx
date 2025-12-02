/* eslint-disable react/destructuring-assignment */
import { useCallback, useState } from 'react';
import {
  DBoxFile,
  DContextProvider,
  DToastContainer,
  useDToast,
} from '../../src';
import { DBoxFileProps } from '../../src/components/DBoxFile/useDBoxFile';
import { RejectedFile } from '../../src/components/DBoxFile/utils';

type Props = Pick<DBoxFileProps,
| 'maxSize'
| 'multiple'
| 'disabled'
| 'value'
> & {
  className?: string;
  showPreview?: boolean;
};

function Thumbnail({ name, filePreview }: { name: string, filePreview: string }) {
  return (
    <img
      className="img-thumbnail"
      src={filePreview}
      alt={name}
      onLoad={() => URL.revokeObjectURL(filePreview)}
      style={{
        width: '120px',
      }}
    />
  );
}

function ExampleDBoxFile({ showPreview, ...props }: Props) {
  const { toast } = useDToast();
  const [previews, setPreviews] = useState<(File & { preview: string })[]>([]);
  const onError = useCallback((error: unknown) => {
    toast({
      title: 'Error',
      description: error instanceof Error ? error.message : 'Unknown error',
      color: 'danger',
    });
  }, [toast]);

  const setImagePreview = useCallback((files: File[]) => {
    setPreviews(files.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file),
    })));
  }, []);

  const handleDrop = useCallback((accepted: File[], rejected: RejectedFile[]) => {
    if (accepted.length > 0) {
      toast({
        title: 'Accepted file',
        color: 'success',
      });
      setImagePreview([...previews, ...accepted]);
    }
    rejected.forEach(({ file, errors }) => {
      toast({
        title: `Error on ${file.name}`,
        description: errors.map(({ message }) => message).join(', '),
        color: 'danger',
      });
    });
  }, [previews, setImagePreview, toast]);

  return (
    <>
      <DBoxFile
        accept={{
          'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
        }}
        onDrop={handleDrop}
        maxSize={1024 * 1024}
        onError={onError}
        onLoad={setImagePreview}
        {...props}
      />
      {showPreview && (
        <aside className="d-flex flex-wrap gap-4">
          {previews.map(({ name, preview }) => (
            <Thumbnail
              key={name}
              name={name}
              filePreview={preview}
            />
          ))}
        </aside>
      )}
    </>
  );
}

export function ExampleDBoxFileRoot() {
  return (
    <DContextProvider>
      <div
        style={{ width: '320px' }}
        className="d-flex flex-column justify-content-center gap-3"
      >
        <ExampleDBoxFile />
      </div>
      <DToastContainer position="top-right" />
    </DContextProvider>
  );
}

export function ExampleDBoxFileDisabled() {
  return (
    <DContextProvider>
      <div
        style={{ width: '320px' }}
        className="d-flex flex-column justify-content-center gap-3"
      >
        <ExampleDBoxFile disabled />
      </div>
      <DToastContainer position="top-right" />
    </DContextProvider>
  );
}

export function ExampleDBoxFileSelected() {
  return (
    <DContextProvider>
      <div
        style={{ width: '320px' }}
        className="d-flex flex-column justify-content-center gap-3"
      >
        <ExampleDBoxFile className="d-box-file-selected" />
      </div>
      <DToastContainer position="top-right" />
    </DContextProvider>
  );
}

export function ExampleDBoxFileUrlFiles() {
  return (
    <DContextProvider>
      <div
        style={{ width: '320px' }}
        className="d-flex flex-column justify-content-center gap-3"
      >
        <ExampleDBoxFile
          value={[
            'https://cdn.modyo.cloud/uploads/8c051a86-0d5b-4064-b5fd-76fb346e0fb0/original/dynamic_logo.svg',
          ]}
        />
      </div>
      <DToastContainer position="top-right" />
    </DContextProvider>
  );
}

export function ExampleDBoxPreviewFile() {
  return (
    <DContextProvider>
      <div
        style={{ width: '320px' }}
        className="d-flex flex-column justify-content-center gap-3"
      >
        <ExampleDBoxFile
          value={[
            'https://placehold.co/600x400',
            'https://cdn.modyo.cloud/uploads/8c051a86-0d5b-4064-b5fd-76fb346e0fb0/original/dynamic_logo.svg',
          ]}
          showPreview
          multiple
        />
      </div>
      <DToastContainer position="top-right" />
    </DContextProvider>
  );
}
