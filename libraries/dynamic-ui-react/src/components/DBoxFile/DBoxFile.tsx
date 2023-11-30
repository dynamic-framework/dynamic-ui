import { useDropzone } from 'react-dropzone';
import classnames from 'classnames';

import type { PropsWithChildren } from 'react';
import type { DropzoneOptions } from 'react-dropzone';

import DIcon from '../DIcon';

import type { BaseProps, FamilyIconProps } from '../interface';

type Props =
& BaseProps
& FamilyIconProps
& PropsWithChildren<
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
| 'disabled'
> & {
  icon?: string;
}
>;

export default function DBoxFile(
  {
    icon = 'cloud-upload',
    iconFamilyClass,
    iconFamilyPrefix,
    disabled = false,
    children,
    className,
    style,
    ...dropzoneOptions
  }: Props,
) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({
    disabled,
    ...dropzoneOptions,
  });

  return (
    <section
      className={classnames(
        'd-box-file',
        {
          'd-box-file-selected': !!acceptedFiles.length,
        },
        className,
      )}
      style={style}
    >
      <div
        {...getRootProps({
          className: classnames(
            'd-box-file-dropzone',
            {
              disabled,
            },
          ),
        })}
      >
        <input {...getInputProps()} />
        <DIcon
          icon={icon}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
        />
        <div className="d-box-content">
          {children}
        </div>
      </div>
      {!!acceptedFiles.length && (
        <aside className="d-box-files">
          {acceptedFiles.map((file) => (
            <div key={file.name} className="d-box-files-text">
              {`${file.name} - ${file.size} bytes`}
            </div>
          ))}
        </aside>
      )}
    </section>
  );
}
