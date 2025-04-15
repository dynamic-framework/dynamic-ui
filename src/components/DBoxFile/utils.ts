import attrAccept from '../../utils/attr-accept';

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

// Check if v is a MIME type string.
export function isMIMEType(v: string) {
  return (
    v === 'audio/*'
    || v === 'video/*'
    || v === 'image/*'
    || v === 'text/*'
    || v === 'application/*'
    || /\w+\/[-+.\w]+/g.test(v)
  );
}

// Check if v is a file extension.
export function isExt(v:string) {
  return /^.*\.[\w]+$/.test(v);
}

function isDefined(value: unknown) {
  return value !== undefined && value !== null;
}

// Convert the `{accept}` dropzone prop to an array of MIME types/extensions.
export function acceptPropAsAcceptAttr(accept: AcceptType) {
  return (
    Object.entries(accept)
      .reduce<string[]>((a, [mimeType, ext]) => [...a, mimeType, ...ext], [])
      .filter((v) => isMIMEType(v) || isExt(v))
      .join(',')
  );
}

export function fileAccepted(file: File, accept: string) {
  const isAcceptable = file.type === 'application/x-moz-file' || attrAccept(file, accept);
  if (!isAcceptable) {
    return [
      false,
      {
        code: ErrorCodes.FileInvalidType,
        message: 'File has an unsupported file type',
      },
    ];
  }
  return [true, null];
}

export const fileMatchSize = (
  file: File,
  minSize: number,
  maxSize: number,
): [boolean, RejectionError | null] => {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && file.size < minSize) {
      return [
        false,
        {
          code: ErrorCodes.FileTooSmall,
          message: `File "${file.name}" is too small. Minimum size is ${minSize} bytes.`,
        },
      ];
    }
    if (isDefined(maxSize) && file.size > maxSize) {
      return [
        false, {
          code: ErrorCodes.FileTooLarge,
          message: `File "${file.name}" is too large. Maximum size is ${maxSize} bytes.`,
        },
      ];
    }
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
