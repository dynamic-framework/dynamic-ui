import type { PropsWithChildren } from 'react';
import DModalHeader from './components/DModalHeader';
import DModalBody from './components/DModalBody';
import DModalFooter from './components/DModalFooter';
import type { BaseProps, ModalFullScreenFrom, ModalSize } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    name: string;
    staticBackdrop?: boolean;
    scrollable?: boolean;
    centered?: boolean;
    fullScreen?: boolean;
    fullScreenFrom?: ModalFullScreenFrom;
    size?: ModalSize;
}>;
declare function DModal({ name, className, style, staticBackdrop, scrollable, centered, fullScreen, fullScreenFrom, size, children, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof DModal & {
    Header: typeof DModalHeader;
    Body: typeof DModalBody;
    Footer: typeof DModalFooter;
};
export default _default;
