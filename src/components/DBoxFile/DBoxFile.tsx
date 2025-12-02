/* eslint-disable react/no-array-index-key */
import classnames from 'classnames';

import { useMemo } from 'react';
import type { ReactNode } from 'react';

import DIcon from '../DIcon';

import type { BaseProps, FamilyIconProps } from '../interface';
import DInput from '../DInput';
import { useDContext } from '../../contexts';
import useDBoxFile, { DBoxFileProps } from './useDBoxFile';

type Props =
& BaseProps
& FamilyIconProps
& DBoxFileProps
& {
  icon?: string;
  children?: ReactNode | ((openFileDialog: () => void) => ReactNode);
};

export default function DBoxFile(
  {
    icon: iconProp,
    iconFamilyClass,
    iconFamilyPrefix,
    iconMaterialStyle,
    children = 'Drag and drop some files here, or click to select files',
    className,
    style,
    dataAttributes,
    ...props
  }: Props,
) {
  const { iconMap: { upload } } = useDContext();
  const icon = useMemo(() => iconProp || upload, [iconProp, upload]);

  const {
    inputRef,
    rootRef,
    isDragValid,
    isDragInvalid,
    acceptAttr,
    files,
    handleFileSelect,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleClick,
    handleKeyDown,
    handleRemoveFile,
    openFileDialog,
  } = useDBoxFile(props);

  return (
    <>
      <section
        className={classnames(
          'd-box-file',
          {
            'd-box-file-selected': files.length > 0,
            'd-box-file-disabled': props.disabled,
            'd-box-file-valid': isDragValid,
            'd-box-file-invalid': isDragInvalid,
          },
          className,
        )}
        style={style}
        {...dataAttributes}
      >
        <div
          className="d-box-file-dropzone"
          ref={rootRef}
          onDragEnter={handleDragEnter}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          {...(!props.disabled && !props.noKeyboard ? { tabIndex: 0 } : {})}
          role="presentation"
        >
          <input
            type="file"
            multiple={props.multiple}
            style={{ display: 'none' }}
            ref={inputRef}
            disabled={props.disabled}
            onChange={handleFileSelect}
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            accept={acceptAttr}
          />
          <DIcon
            icon={icon}
            familyClass={iconFamilyClass}
            familyPrefix={iconFamilyPrefix}
            materialStyle={iconMaterialStyle}
          />
          <div className="d-box-content">
            {typeof children === 'function'
              ? children(openFileDialog)
              : children}
          </div>
        </div>
      </section>
      {!!files.length && (
        <ul className="d-box-files">
          {files.map((file, index) => (
            <DInput
              key={`${file.name} ${index}`}
              value={file.name}
              iconStart="Paperclip"
              iconEnd="Trash"
              readOnly
              onIconEndClick={() => handleRemoveFile(index)}
            />
          ))}
        </ul>
      )}
    </>
  );
}
