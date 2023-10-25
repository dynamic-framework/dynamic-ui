import type { PropsWithChildren } from 'react';
import DModalHeader from './components/DModalHeader';
import DModalBody from './components/DModalBody';
import DModalFooter from './components/DModalFooter';
import type { BaseProps, ModalFullScreenFrom, ModalSize } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    name: string;
    isStatic?: boolean;
    isScrollable?: boolean;
    isCentered?: boolean;
    isFullScreen?: boolean;
    fullScreenFrom?: ModalFullScreenFrom;
    modalSize?: ModalSize;
}>;
declare function DModal({ name, className, style, isStatic, isScrollable, isCentered, isFullScreen, fullScreenFrom, modalSize, children, }: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof DModal & {
    Header: typeof DModalHeader;
    Body: typeof DModalBody;
    Footer: typeof DModalFooter;
};
export default _default;
