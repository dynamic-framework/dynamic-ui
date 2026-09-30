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
  icon?: string | false;
  children?: ReactNode | ((openFileDialog: () => void) => ReactNode);
};

export default function DBoxFile(
  {
    icon: iconProp,
    iconFamilyClass,
    iconFamilyPrefix,
    iconMaterialStyle,
    children,
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
        className={classnames('df-dropzone-wrapper', className)}
        style={style}
        {...dataAttributes}
      >
        <div
          className="df-dropzone"
          // State as attributes rather than four class names, so the drag-over
          // state can be driven from JS without swapping classes.
          {...files.length > 0 && { 'data-selected': '' }}
          {...props.disabled && { 'data-disabled': '' }}
          {...isDragValid && { 'data-valid': '' }}
          {...isDragInvalid && { 'data-invalid': '' }}
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
          {icon && iconProp !== false && (
            <DIcon
              icon={icon}
              familyClass={iconFamilyClass}
              familyPrefix={iconFamilyPrefix}
              materialStyle={iconMaterialStyle}
            />
          )}
          <div className="df-dropzone-prompt">
            {typeof children === 'function'
              ? children(openFileDialog)
              : children || (
                <p className="df-dropzone-hint">
                  Drag and drop some files here, or click to select files
                </p>
              )}
          </div>
        </div>
      </section>
      {!!files.length && (
        <ul className="df-dropzone-files">
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
