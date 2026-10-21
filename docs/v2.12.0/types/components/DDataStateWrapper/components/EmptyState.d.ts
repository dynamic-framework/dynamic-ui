/// <reference types="react" />
interface EmptyStateProps {
    message?: string;
    icon?: string;
    actionText?: string;
    onAction?: () => void;
}
export declare function EmptyState({ message, icon, actionText, onAction, }: EmptyStateProps): import("react").JSX.Element;
export {};
