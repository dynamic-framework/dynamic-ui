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
import {
  AcceptType,
  DEFAULT_PROPS,
  ErrorCodes,
  fileAcceptedType,
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

  const [files, setFiles] = useState<File[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isDragValid, setIsDragValid] = useState(false);
  const [isDragInvalid, setIsDragInvalid] = useState(false);

  const preventDropOnDocument = useCallback((event: globalThis.DragEvent) => {
    event.preventDefault(); // Avoid default behavior (open file on drop)
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
      const [isTypeValid, acceptError] = fileAcceptedType(file, accept);
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
    accept,
    files.length,
    maxFiles,
    maxSize,
    minSize,
    multiple,
    onDrop,
  ]);

  const handleDragEnter = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (disabled || noDrag) return;

    const draggedFiles = Array.from(event.dataTransfer.items)
      .filter((item) => item.kind === 'file')
      .map((item) => item.getAsFile())
      .filter((f): f is File => !!f && !!f.name && typeof f.size === 'number');

    if (!draggedFiles.length) {
      // No hay archivos válidos para analizar, no mostrar valid/invalid
      setIsDragValid(false);
      setIsDragInvalid(false);
      return;
    }

    const someInvalid = draggedFiles.some((file) => {
      const [isTypeValid] = fileAcceptedType(file, accept);
      const [isSizeValid] = fileMatchSize(file, minSize, maxSize);
      return !(isTypeValid && isSizeValid);
    });

    setIsDragValid(!someInvalid);
    setIsDragInvalid(someInvalid);
    onDragEnter?.(event);
  }, [
    accept,
    disabled,
    maxSize,
    minSize,
    noDrag,
    onDragEnter,
  ]);

  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
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
    setIsDragValid(false);
    setIsDragInvalid(false);
    onDragLeave?.(event);
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

  const acceptAttr = useMemo(() => {
    if (!accept) return undefined;
    return Object.entries(accept)
      .flatMap(([type, extensions]) => [type, ...extensions])
      .join(', ');
  }, [accept]);

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
