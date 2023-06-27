/* eslint-disable react/jsx-props-no-spreading */
import { PropsWithChildren } from 'react';
import { useDropzone } from 'react-dropzone';
import classnames from 'classnames';

import type { DropzoneOptions } from 'react-dropzone';

import { MIcon } from './proxies';

type Props = PropsWithChildren<
Pick<
DropzoneOptions,
| 'accept'
| 'minSize'
| 'maxSize'
| 'maxFiles'
| 'onDrop'
| 'onDropAccepted'
| 'onDropRejected'
| 'onFileDialogCancel'
| 'onFileDialogOpen'
> & {
  icon?: string;
  iconFamilyClass?: string;
  iconFamilyPrefix?: string;
  isDisabled: DropzoneOptions['disabled'];
}
>;

export default function MBoxFile(
  {
    icon = 'cloud-upload',
    iconFamilyClass,
    iconFamilyPrefix,
    isDisabled = false,
    children,
    ...dropzoneOptions
  }: Props,
) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({
    disabled: isDisabled,
    ...dropzoneOptions,
  });

  return (
    <section
      className={classnames(
        'm-box-file',
        {
          'm-box-file-selected': !!acceptedFiles.length,
        },
      )}
    >
      <div
        {...getRootProps({
          className: classnames(
            'm-box-file-dropzone',
            {
              disabled: isDisabled,
            },
          ),
        })}
      >
        <input {...getInputProps()} />
        <MIcon
          icon={icon}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
        />
        <div className="m-box-content">
          {children}
        </div>
      </div>
      {!!acceptedFiles.length && (
        <aside className="m-box-files">
          {acceptedFiles.map((file) => (
            <div key={file.name} className="m-box-files-text">
              {`${file.name} - ${file.size} bytes`}
            </div>
          ))}
        </aside>
      )}
    </section>
  );
}
