type ErrorStateProps = {
    message?: string;
    onRetry?: () => void;
    retryMessage?: string;
    color?: 'danger' | 'warning';
};
export declare function ErrorState({ message, onRetry, retryMessage, color, }: ErrorStateProps): import("react/jsx-runtime").JSX.Element;
export {};
