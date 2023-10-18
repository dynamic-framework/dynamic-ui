import type { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    showCloseButton?: boolean;
    onClose?: () => void;
}>;
export default function DModalHeader({ showCloseButton, onClose, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
