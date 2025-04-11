export const isIeOrEdge = (userAgent = window.navigator.userAgent) => (
  (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1)
    || userAgent.indexOf('Edge/') !== -1
);

export type AcceptType = Record<string, string[]>;

export const ErrorCodes = {
  FileInvalidType: 'file-invalid-type',
  FileTooLarge: 'file-too-large',
  FileTooSmall: 'file-too-small',
  TooManyFiles: 'too-many-files',
} as const;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];

export type RejectionError = {
  code: ErrorCode;
  message: string;
};

export type RejectedFile = {
  file: File;
  errors: RejectionError[];
};

export const fileMatchSize = (
  file: File,
  minSize: number,
  maxSize: number,
): [boolean, RejectionError | null] => {
  const { size } = file;

  if (typeof minSize === 'number' && size < minSize) {
    return [
      false,
      {
        code: ErrorCodes.FileTooSmall,
        message: `File "${file.name}" is too small. Minimum size is ${minSize} bytes.`,
      },
    ];
  }

  if (typeof maxSize === 'number' && size > maxSize) {
    return [
      false, {
        code: ErrorCodes.FileTooLarge,
        message: `File "${file.name}" is too large. Maximum size is ${maxSize} bytes.`,
      },
    ];
  }

  return [true, null];
};

export const fileAcceptedType = (
  file: File,
  accept: AcceptType,
): [boolean, RejectionError | null] => {
  const {
    type: mimeType,
    name: fileName,
  } = file;

  const isAccepted = Object.entries(accept).some(([
    acceptedType,
    extensions,
  ]) => {
    const matchesType = acceptedType === mimeType;
    const matchesExtension = extensions.some((ext) => fileName.endsWith(ext.toLowerCase()));
    return matchesType || matchesExtension;
  });

  if (!isAccepted) {
    return [
      false,
      {
        code: ErrorCodes.FileInvalidType,
        message: `File "${file.name}" has an unsupported file type.`,
      },
    ];
  }

  return [true, null];
};

export const DEFAULT_PROPS = {
  disabled: false,
  maxSize: Infinity,
  minSize: 0,
  multiple: false,
  maxFiles: Infinity,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  autoFocus: false,
};
