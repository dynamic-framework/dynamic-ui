import type { PropsWithChildren } from 'react';
import type { ModalFullScreenFrom, ModalSize } from './interface';
type Props = PropsWithChildren<{
    name: string;
    className?: string;
    isStatic?: boolean;
    isScrollable?: boolean;
    isCentered?: boolean;
    isFullScreen?: boolean;
    fullScreenFrom?: ModalFullScreenFrom;
    modalSize?: ModalSize;
}>;
export default function DModal({ name, className, isStatic, isScrollable, isCentered, isFullScreen, fullScreenFrom, modalSize, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
