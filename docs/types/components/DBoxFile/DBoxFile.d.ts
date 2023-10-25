import type { PropsWithChildren } from 'react';
import type { DropzoneOptions } from 'react-dropzone';
import type { BaseProps, FamilyIconProps } from '../interface';
type Props = BaseProps & FamilyIconProps & PropsWithChildren<Pick<DropzoneOptions, 'accept' | 'minSize' | 'maxSize' | 'maxFiles' | 'onDrop' | 'onDropAccepted' | 'onDropRejected' | 'onFileDialogCancel' | 'onFileDialogOpen'> & {
    icon?: string;
    isDisabled: DropzoneOptions['disabled'];
}>;
export default function DBoxFile({ icon, iconFamilyClass, iconFamilyPrefix, isDisabled, children, className, style, ...dropzoneOptions }: Props): import("react/jsx-runtime").JSX.Element;
export {};
