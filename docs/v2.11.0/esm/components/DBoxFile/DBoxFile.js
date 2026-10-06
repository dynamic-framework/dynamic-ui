import { __rest } from 'tslib';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useMemo } from 'react';
import DIcon from '../DIcon/DIcon.js';
import ForwardedDInput from '../DInput/DInput.js';
import useDBoxFile from './useDBoxFile.js';
import { useDContext } from '../../contexts/DContext.js';

function DBoxFile(_a) {
    var { icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, children, className, style, dataAttributes } = _a, props = __rest(_a, ["icon", "iconFamilyClass", "iconFamilyPrefix", "iconMaterialStyle", "children", "className", "style", "dataAttributes"]);
    const { icon: { familyClass, familyPrefix, materialStyle, }, iconMap: { upload }, } = useDContext();
    const icon = useMemo(() => iconProp || upload, [iconProp, upload]);
    const { inputRef, rootRef, isDragValid, isDragInvalid, acceptAttr, files, handleFileSelect, handleDrop, handleDragEnter, handleDragLeave, handleClick, handleKeyDown, handleRemoveFile, openFileDialog, } = useDBoxFile(props);
    return (jsxs(Fragment, { children: [jsx("section", Object.assign({ className: classNames('d-box-file', {
                    'd-box-file-selected': files.length > 0,
                    'd-box-file-disabled': props.disabled,
                    'd-box-file-valid': isDragValid,
                    'd-box-file-invalid': isDragInvalid,
                }, className), style: style }, dataAttributes, { children: jsxs("div", Object.assign({ className: "d-box-file-dropzone", ref: rootRef, onDragEnter: handleDragEnter, onDragOver: (e) => e.preventDefault(), onDragLeave: handleDragLeave, onDrop: handleDrop, onClick: handleClick, onKeyDown: handleKeyDown }, (!props.disabled && !props.noKeyboard ? { tabIndex: 0 } : {}), { role: "presentation", children: [jsx("input", { type: "file", multiple: props.multiple, style: { display: 'none' }, ref: inputRef, disabled: props.disabled, onChange: handleFileSelect, onClick: (e) => e.stopPropagation(), tabIndex: -1, accept: acceptAttr }), icon && iconProp !== false && (jsx(DIcon, { icon: icon, familyClass: iconFamilyClass !== null && iconFamilyClass !== void 0 ? iconFamilyClass : familyClass, familyPrefix: iconFamilyPrefix !== null && iconFamilyPrefix !== void 0 ? iconFamilyPrefix : familyPrefix, materialStyle: iconMaterialStyle !== null && iconMaterialStyle !== void 0 ? iconMaterialStyle : materialStyle })), jsx("div", { className: "d-box-content", children: typeof children === 'function'
                                ? children(openFileDialog)
                                : children || (jsx("p", { className: "d-box-file-empty-text", children: "Drag and drop some files here, or click to select files" })) })] })) })), !!files.length && (jsx("ul", { className: "d-box-files", children: files.map((file, index) => (jsx(ForwardedDInput, { value: file.name, iconStart: "Paperclip", iconEnd: "Trash", readOnly: true, onIconEndClick: () => handleRemoveFile(index) }, `${file.name} ${index}`))) }))] }));
}

export { DBoxFile as default };
//# sourceMappingURL=DBoxFile.js.map
