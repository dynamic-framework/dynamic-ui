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
  FailedFetch: 'failed-fetch-file',
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

export function fileMatchSize(
  file: File,
  minSize: number,
  maxSize: number,
): [boolean, RejectionError | null] {
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
}

export async function urlToFile(
  url: string,
): Promise<[File | null, RejectionError | null]> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return [
        null,
        {
          code: ErrorCodes.FailedFetch,
          message: `Failed to fetch file from ${url} (HTTP ${res.status})`,
        },
      ];
    }
    const blob = await res.blob();
    const filename = url.split('/').pop()?.split('?')[0] || 'file';
    const file = new File([blob], filename, { type: blob.type });
    return [file, null];
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const isCorsError = errorMessage.includes('CORS') || errorMessage.includes('Failed to fetch');
    return [
      null,
      {
        code: ErrorCodes.FailedFetch,
        message: `Failed to fetch file from ${url}${isCorsError ? ' (CORS error - file may not be accessible from this domain)' : ` (${errorMessage})`}`,
      },
    ];
  }
}

export async function urlsToFiles(
  urls: string[],
): Promise<[File[], RejectionError[]]> {
  const results = await Promise.all(urls.map(urlToFile));

  let acceptedFiles: File[] = [];
  let errors: RejectionError[] = [];
  results.forEach(([file, error]) => {
    if (file) {
      acceptedFiles = [...acceptedFiles, file];
    }
    if (error) {
      errors = [...errors, error];
    }
  });
  return [acceptedFiles, errors];
}

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
