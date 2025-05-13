/* eslint-disable react/destructuring-assignment */
import { useCallback } from 'react';
import {
  DBoxFile,
  DButton,
  DContextProvider,
  DToastContainer,
  useDToast,
} from '../../src';
import { RejectedFile } from '../../src/components/DBoxFile/utils';
import { DBoxFileProps } from '../../src/components/DBoxFile/useDBoxFile';

type Props = Pick<DBoxFileProps,
| 'maxSize'
| 'multiple'
| 'disabled'
| 'value'
> & {
  className?: string;
};

function ExampleDBoxFile(props: Props) {
  const { toast } = useDToast();
  const onError = useCallback((error: unknown) => {
    toast({
      title: 'Error',
      description: error instanceof Error ? error.message : 'Unknown error',
      theme: 'danger',
    });
  }, [toast]);

  const handleDrop = useCallback((accepted: File[], rejected: RejectedFile[]) => {
    if (accepted.length > 0) {
      toast({
        title: 'Accepted file',
        theme: 'success',
      });
    }
    rejected.forEach(({ file, errors }) => {
      toast({
        title: `Error on ${file.name}`,
        description: errors.map(({ message }) => message).join(', '),
        theme: 'danger',
      });
    });
  }, [toast]);

  return (
    <DBoxFile
      accept={{
        'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
      }}
      onDrop={handleDrop}
      maxSize={1024 * 1024}
      onError={onError}
      {...props}
    >
      {(openFileDialog) => (
        <div className="d-flex flex-column gap-4 align-items-center">
          <p className="m-0">
            Drag and drop it here or
          </p>
          <DButton
            theme="primary"
            variant="outline"
            text="Select the file"
            onClick={openFileDialog}
            {...props.disabled && { disabled: true }}
          />
          <p className="text-gray m-0 small">
            Allowed formats: svg, png, jpg
          </p>
        </div>
      )}
    </DBoxFile>
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
            'https://placehold.co/600x400',
            '/../assets/1.png',
            '/../assets/2.png',
            '/../assets/3.png',
          ]}
        />
      </div>
      <DToastContainer position="top-right" />
    </DContextProvider>
  );
}
