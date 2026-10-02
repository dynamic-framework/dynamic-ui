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
  /**
   * What the drop target announces as.
   *
   * It needs one: the box is a focusable control, and without a name a screen
   * reader reaches it and says nothing at all.
   */
  ariaLabel?: string;
  /** Announced for the whole file list, so its purpose is clear in a form. */
  filesLabel?: string;
};

export default function DBoxFile(
  {
    icon: iconProp,
    ariaLabel = 'Choose files, or drop them here',
    filesLabel = 'Selected files',
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

  /**
   * The role, the name and the tab stop, decided together.
   *
   * They were not. The box carried `role="presentation"` on an element that is
   * focusable and has click and key handlers — ARIA ignores `presentation` on
   * anything focusable, so it fell back to a generic role with no name and a
   * screen reader user tabbed to it and heard nothing.
   *
   * `role="button"` alone was not the fix either: `tabIndex` was conditional,
   * so with `noKeyboard` or `disabled` the element claimed to be a button that
   * no keyboard could reach. The three have to move together —
   *
   * - **`noKeyboard`**: no role at all. It is then a drop surface for the
   *   mouse, and providing a control is the caller's job; claiming to be a
   *   button you cannot focus is worse than claiming nothing.
   * - **`disabled`**: still a button, still focusable, `aria-disabled`. A
   *   disabled control removed from the tab order is one a screen reader user
   *   cannot find to learn why it is unavailable.
   * - otherwise: a focusable, named button.
   *
   * Dropping a file is a mouse gesture with no keyboard equivalent, so this
   * control IS the keyboard path. It has to say what it does.
   */
  const control = useMemo(() => {
    if (props.noKeyboard) return { role: undefined };
    return {
      role: 'button' as const,
      tabIndex: 0,
      'aria-label': ariaLabel,
      ...props.disabled && { 'aria-disabled': true },
    };
  }, [ariaLabel, props.disabled, props.noKeyboard]);

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
        {/*
          * The role, the tab stop and the name come from `control` above,
          * computed together. The rule cannot see a spread, and the three
          * genuinely have to vary as one — see the comment there.
          */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
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
          {...control}
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
        /*
         * `<li>` around each row.
         *
         * The list rendered `DInput`s straight into the `<ul>`, and a `DInput`
         * is a `<div>` — so this was a list with no list items, which a screen
         * reader announces as "list, 0 items" while showing three files.
         */
        <ul className="df-dropzone-files" aria-label={filesLabel}>
          {files.map((file, index) => (
            <li key={`${file.name} ${index}`}>
              <DInput
                value={file.name}
                iconStart="Paperclip"
                iconEnd="Trash"
                readOnly
                onIconEndClick={() => handleRemoveFile(index)}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
