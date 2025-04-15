/* eslint-disable no-param-reassign */
import {
  DragEvent,
  ChangeEvent,
  useCallback,
  useRef,
  useState,
  useEffect,
  useMemo,
} from 'react';
import type {
  KeyboardEvent,
} from 'react';
import { fromEvent } from 'file-selector';
import {
  acceptPropAsAcceptAttr,
  AcceptType,
  DEFAULT_PROPS,
  ErrorCodes,
  fileAccepted,
  fileMatchSize,
  isIeOrEdge,
  RejectedFile,
  RejectionError,
} from './utils';

export type DBoxFileProps = {
  // Config
  accept: AcceptType;
  multiple?: boolean;
  minSize?: number;
  maxSize?: number;
  maxFiles?: number;
  disabled?: boolean;
  // Behavior flags
  noClick?: boolean;
  noKeyboard?: boolean;
  noDrag?: boolean;
  autoFocus?: boolean;
  // Events
  onDrop?: (
    acceptedFiles: File[],
    rejectedFiles: RejectedFile[],
    event?: Event
  ) => void;
  onDragEnter?: (event: DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (event: DragEvent<HTMLDivElement>) => void;
  onFileDialogCancel?: () => void;
};

export default function useDBoxFile(props: DBoxFileProps) {
  const {
    accept,
    autoFocus,
    disabled,
    maxSize,
    minSize,
    multiple,
    maxFiles,
    onDragEnter,
    onDragLeave,
    onDrop,
    noClick,
    noKeyboard,
    noDrag,
  }: DBoxFileProps = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLInputElement>(null);
  const dragTargetsRef = useRef<HTMLElement[]>([]);

  const acceptAttr = useMemo(() => acceptPropAsAcceptAttr(accept), [accept]);

  const [files, setFiles] = useState<File[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isDragValid, setIsDragValid] = useState(false);
  const [isDragInvalid, setIsDragInvalid] = useState(false);

  const preventDropOnDocument = useCallback((event: globalThis.DragEvent) => {
    if (rootRef.current && rootRef.current.contains(event.target as Node)) {
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

  const processFiles = useCallback((inputFiles: File[], event?: Event) => {
    let acceptedFiles: File[] = [];
    let rejectedFiles: RejectedFile[] = [];

    // Handle size and type validation
    inputFiles.forEach((file) => {
      const [isTypeValid, acceptError] = fileAccepted(file, acceptAttr);
      const [isSizeValid, sizeError] = fileMatchSize(file, minSize, maxSize);

      const errors = [acceptError, sizeError].filter((e): e is RejectionError => Boolean(e));

      if (isTypeValid && isSizeValid) {
        acceptedFiles = [...acceptedFiles, file];
      } else {
        rejectedFiles = [...rejectedFiles, { file, errors }];
      }
    });

    // Handle maxFiles overflow
    const total = files.length + acceptedFiles.length;
    if (total > maxFiles) {
      // Rechazar los excedentes
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
    } else {
      setFiles(acceptedFiles.slice(0, 1));
    }

    if (onDrop) {
      onDrop(acceptedFiles, rejectedFiles, event);
    }
  }, [
    acceptAttr,
    files.length,
    maxFiles,
    maxSize,
    minSize,
    multiple,
    onDrop,
  ]);

  const handleDragEnter = useCallback(async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (disabled || noDrag) return;

    if (event.target instanceof HTMLElement) {
      dragTargetsRef.current = [...dragTargetsRef.current, event.target];
    }

    const eventFiles = await fromEvent(event);
    const fileCount = eventFiles.length;

    if (fileCount === 0) {
      setIsDragValid(false);
      setIsDragInvalid(true);
      return;
    }

    const isDragAccepted = eventFiles.every((file) => {
      const [typeValid] = fileAccepted(file as File, acceptAttr);
      const [sizeValid] = fileMatchSize(file as File, minSize, maxSize);
      return typeValid && sizeValid;
    });

    setIsDragValid(isDragAccepted);
    setIsDragInvalid(!isDragAccepted);
    onDragEnter?.(event);
  }, [
    acceptAttr,
    disabled,
    maxSize,
    minSize,
    noDrag,
    onDragEnter,
  ]);

  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.persist();
    event.stopPropagation();

    dragTargetsRef.current = [];
    setIsDragValid(false);
    setIsDragInvalid(false);

    if (disabled || noDrag) return;

    const droppedArray = Array.from(event.dataTransfer.files);
    processFiles(droppedArray, event.nativeEvent);
  }, [
    disabled,
    noDrag,
    processFiles,
  ]);

  const handleDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (disabled || noDrag) return;

    // Only deactivate once the dropzone and all children have been left
    const targets = dragTargetsRef.current.filter(
      (target) => rootRef.current && rootRef.current.contains(target),
    );
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
      onDragLeave?.(event);
    }
  }, [disabled, noDrag, onDragLeave]);

  const handleFileSelect = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const targetFiles = event.target.files;
    if (!targetFiles) return;
    const selectedFiles = Array.from(targetFiles);
    processFiles(selectedFiles, event.nativeEvent);
    event.target.value = '';
  }, [processFiles]);

  const handleRemoveFile = useCallback((index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }, []);

  const openFileDialog = useCallback(() => {
    if (disabled) return;
    inputRef.current?.click();
  }, [disabled]);

  const handleClick = useCallback(() => {
    if (noClick) {
      return;
    }
    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (!noKeyboard && (event.key === ' ' || event.key === 'Enter')) {
      event.preventDefault();
      openFileDialog();
    }
  }, [noKeyboard, openFileDialog]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return {
    inputRef,
    rootRef,
    files,
    isFocused,
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
    handleFocus,
    handleBlur,
  };
}
