import attrAccept from '../../utils/attr-accept.js';

const isIeOrEdge = (userAgent = window.navigator.userAgent) => ((userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1)
    || userAgent.indexOf('Edge/') !== -1);
const ErrorCodes = {
    FileInvalidType: 'file-invalid-type',
    FileTooLarge: 'file-too-large',
    FileTooSmall: 'file-too-small',
    TooManyFiles: 'too-many-files',
    FailedFetch: 'failed-fetch-file',
};
// Check if v is a MIME type string.
function isMIMEType(v) {
    return (v === 'audio/*'
        || v === 'video/*'
        || v === 'image/*'
        || v === 'text/*'
        || v === 'application/*'
        || /\w+\/[-+.\w]+/g.test(v));
}
// Check if v is a file extension.
function isExt(v) {
    return /^.*\.[\w]+$/.test(v);
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
// Convert the `{accept}` dropzone prop to an array of MIME types/extensions.
function acceptPropAsAcceptAttr(accept) {
    return (Object.entries(accept)
        .reduce((a, [mimeType, ext]) => [...a, mimeType, ...ext], [])
        .filter((v) => isMIMEType(v) || isExt(v))
        .join(','));
}
function fileAccepted(file, accept) {
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
function fileMatchSize(file, minSize, maxSize) {
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
async function urlToFile(url) {
    var _a;
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
        const filename = ((_a = url.split('/').pop()) === null || _a === void 0 ? void 0 : _a.split('?')[0]) || 'file';
        const file = new File([blob], filename, { type: blob.type });
        return [file, null];
    }
    catch (error) {
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
async function urlsToFiles(urls) {
    const results = await Promise.all(urls.map(urlToFile));
    let acceptedFiles = [];
    let errors = [];
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
const DEFAULT_PROPS = {
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

export { DEFAULT_PROPS, ErrorCodes, acceptPropAsAcceptAttr, fileAccepted, fileMatchSize, isExt, isIeOrEdge, isMIMEType, urlToFile, urlsToFiles };
//# sourceMappingURL=utils.js.map
