import { useRef, useMemo, useState, useCallback, useEffect } from 'react';
import { fromEvent } from 'file-selector';
import { DEFAULT_PROPS, acceptPropAsAcceptAttr, urlsToFiles, fileAccepted, fileMatchSize, ErrorCodes, isIeOrEdge } from './utils.js';

/* eslint-disable no-param-reassign */
function useDBoxFile(props) {
    const { accept, autoFocus, disabled, maxSize, minSize, multiple, maxFiles, value: preloadUrls, onDragEnter, onDragLeave, onDrop, onError, onLoad, noClick, noKeyboard, noDrag, } = Object.assign(Object.assign({}, DEFAULT_PROPS), props);
    const inputRef = useRef(null);
    const rootRef = useRef(null);
    const dragTargetsRef = useRef([]);
    const acceptAttr = useMemo(() => acceptPropAsAcceptAttr(accept), [accept]);
    const [files, setFiles] = useState([]);
    const [isDragValid, setIsDragValid] = useState(false);
    const [isDragInvalid, setIsDragInvalid] = useState(false);
    const preventDropOnDocument = useCallback((event) => {
        if (rootRef.current && rootRef.current.contains(event.target)) {
            // If we intercepted an event for our instance
            // let it propagate down to the instance's onDrop handler
            return;
        }
        event.preventDefault();
        dragTargetsRef.current = [];
    }, []);
    useEffect(() => {
        // Prevent drop over anywhere in the document
        document.addEventListener('dragover', preventDropOnDocument, false);
        document.addEventListener('drop', preventDropOnDocument, false);
        return () => {
            document.removeEventListener('dragover', preventDropOnDocument);
            document.removeEventListener('drop', preventDropOnDocument);
        };
    }, [preventDropOnDocument]);
    // Auto focus the root when autoFocus is true
    useEffect(() => {
        if (!disabled && autoFocus && rootRef.current) {
            rootRef.current.focus();
        }
    }, [rootRef, autoFocus, disabled]);
    useEffect(() => {
        if (!preloadUrls || !preloadUrls.length)
            return;
        // eslint-disable-next-line no-void
        void (async () => {
            const [accepted, errors] = await urlsToFiles(preloadUrls);
            if (accepted.length) {
                setFiles(accepted);
                onLoad === null || onLoad === void 0 ? void 0 : onLoad(accepted);
            }
            if (errors.length) {
                onError === null || onError === void 0 ? void 0 : onError(new Error(errors.map((e) => e.message).join(', ')));
            }
        })();
    }, [
        preloadUrls,
        onError,
        onLoad,
    ]);
    const processFiles = useCallback((inputFiles, event) => {
        let acceptedFiles = [];
        let rejectedFiles = [];
        // Handle size and type validation
        inputFiles.forEach((file) => {
            const [isTypeValid, acceptError] = fileAccepted(file, acceptAttr);
            const [isSizeValid, sizeError] = fileMatchSize(file, minSize, maxSize);
            const errors = [acceptError, sizeError].filter((e) => Boolean(e));
            if (isTypeValid && isSizeValid) {
                acceptedFiles = [...acceptedFiles, file];
            }
            else {
                rejectedFiles = [...rejectedFiles, { file, errors }];
            }
        });
        // Handle maxFiles overflow by trimming
        const total = files.length + acceptedFiles.length;
        if (total > maxFiles) {
            const allowed = Math.max(0, maxFiles - files.length);
            const accepted = acceptedFiles.slice(0, allowed);
            const rejected = acceptedFiles.slice(allowed).map((file) => ({
                file,
                errors: [
                    {
                        code: ErrorCodes.TooManyFiles,
                        message: `Exceeds maximum number of files (${maxFiles})`,
                    },
                ],
            }));
            acceptedFiles = [...accepted];
            rejectedFiles = [...rejectedFiles, ...rejected];
        }
        if (multiple) {
            setFiles((prev) => [...prev, ...acceptedFiles]);
        }
        else {
            setFiles(acceptedFiles.slice(0, 1));
        }
        if (onDrop) {
            onDrop(acceptedFiles, rejectedFiles, event);
        }
    }, [
        acceptAttr,
        files,
        maxFiles,
        maxSize,
        minSize,
        multiple,
        onDrop,
    ]);
    const handleDragEnter = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        if (disabled || noDrag)
            return;
        if (event.target instanceof HTMLElement) {
            dragTargetsRef.current = [...dragTargetsRef.current, event.target];
        }
        fromEvent(event).then((eventFiles) => {
            const fileCount = eventFiles.length;
            if (fileCount === 0) {
                setIsDragValid(false);
                setIsDragInvalid(true);
                return;
            }
            const isDragAccepted = eventFiles.every((file) => {
                const [typeValid] = fileAccepted(file, acceptAttr);
                const [sizeValid] = fileMatchSize(file, minSize, maxSize);
                return typeValid && sizeValid;
            });
            setIsDragValid(isDragAccepted);
            setIsDragInvalid(!isDragAccepted);
            onDragEnter === null || onDragEnter === void 0 ? void 0 : onDragEnter(event);
        }).catch((error) => {
            onError === null || onError === void 0 ? void 0 : onError(error);
        });
    }, [
        acceptAttr,
        disabled,
        maxSize,
        minSize,
        noDrag,
        onDragEnter,
        onError,
    ]);
    const handleDrop = useCallback((event) => {
        event.preventDefault();
        event.persist();
        event.stopPropagation();
        dragTargetsRef.current = [];
        setIsDragValid(false);
        setIsDragInvalid(false);
        if (disabled || noDrag)
            return;
        const droppedArray = Array.from(event.dataTransfer.files);
        processFiles(droppedArray, event.nativeEvent);
    }, [
        disabled,
        noDrag,
        processFiles,
    ]);
    const handleDragLeave = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        if (disabled || noDrag)
            return;
        // Only deactivate once the dropzone and all children have been left
        const targets = dragTargetsRef.current.filter((target) => rootRef.current && rootRef.current.contains(target));
        // Make sure to remove a target present multiple times only once
        // (Firefox may fire dragenter/dragleave multiple times on the same element)
        if (event.target instanceof HTMLElement) {
            const targetIdx = targets.indexOf(event.target);
            if (targetIdx !== -1) {
                targets.splice(targetIdx, 1);
            }
            dragTargetsRef.current = targets;
        }
        if (targets.length === 0) {
            setIsDragValid(false);
            setIsDragInvalid(false);
            onDragLeave === null || onDragLeave === void 0 ? void 0 : onDragLeave(event);
        }
    }, [disabled, noDrag, onDragLeave]);
    const handleFileSelect = useCallback((event) => {
        const targetFiles = event.target.files;
        if (!targetFiles)
            return;
        const selectedFiles = Array.from(targetFiles);
        processFiles(selectedFiles, event.nativeEvent);
        event.target.value = '';
    }, [processFiles]);
    const handleRemoveFile = useCallback((index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
        // Done twice to avoid mismatch between files and setFiles value
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(files.filter((_, i) => i !== index));
    }, [files, onLoad]);
    const openFileDialog = useCallback(() => {
        var _a;
        if (disabled)
            return;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    }, [disabled]);
    const handleClick = useCallback(() => {
        if (noClick) {
            return;
        }
        if (isIeOrEdge()) {
            setTimeout(openFileDialog, 0);
        }
        else {
            openFileDialog();
        }
    }, [noClick, openFileDialog]);
    const handleKeyDown = useCallback((event) => {
        if (!noKeyboard && (event.key === ' ' || event.key === 'Enter')) {
            event.preventDefault();
            openFileDialog();
        }
    }, [noKeyboard, openFileDialog]);
    return {
        inputRef,
        rootRef,
        files,
        isDragValid,
        isDragInvalid,
        acceptAttr,
        openFileDialog,
        handleFileSelect,
        handleDrop,
        handleDragEnter,
        handleDragLeave,
        handleRemoveFile,
        handleClick,
        handleKeyDown,
    };
}

export { useDBoxFile as default };
//# sourceMappingURL=useDBoxFile.js.map
