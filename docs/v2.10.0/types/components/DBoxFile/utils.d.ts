export declare const isIeOrEdge: (userAgent?: string) => boolean;
export type AcceptType = Record<string, string[]>;
export declare const ErrorCodes: {
    readonly FileInvalidType: "file-invalid-type";
    readonly FileTooLarge: "file-too-large";
    readonly FileTooSmall: "file-too-small";
    readonly TooManyFiles: "too-many-files";
    readonly FailedFetch: "failed-fetch-file";
};
export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
export type RejectionError = {
    code: ErrorCode;
    message: string;
};
export type RejectedFile = {
    file: File;
    errors: RejectionError[];
};
export declare function isMIMEType(v: string): boolean;
export declare function isExt(v: string): boolean;
export declare function acceptPropAsAcceptAttr(accept: AcceptType): string;
export declare function fileAccepted(file: File, accept: string): (boolean | null)[] | (boolean | {
    code: "file-invalid-type";
    message: string;
})[];
export declare function fileMatchSize(file: File, minSize: number, maxSize: number): [boolean, RejectionError | null];
export declare function urlToFile(url: string): Promise<[File | null, RejectionError | null]>;
export declare function urlsToFiles(urls: string[]): Promise<[File[], RejectionError[]]>;
export declare const DEFAULT_PROPS: {
    disabled: boolean;
    maxSize: number;
    minSize: number;
    multiple: boolean;
    maxFiles: number;
    noClick: boolean;
    noKeyboard: boolean;
    noDrag: boolean;
    autoFocus: boolean;
};
