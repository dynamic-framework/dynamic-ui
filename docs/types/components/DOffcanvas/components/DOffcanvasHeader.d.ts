import type { PropsWithChildren } from 'react';
import type { BaseProps } from '../../interface';
type Props = BaseProps & PropsWithChildren<{
    showCloseButton?: boolean;
    onClose?: () => void;
}>;
export default function DOffcanvasHeader({ showCloseButton, onClose, children, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
