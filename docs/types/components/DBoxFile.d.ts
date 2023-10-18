import type { PropsWithChildren } from 'react';
import type { DropzoneOptions } from 'react-dropzone';
import type { FamilyIcon } from './interface';
type Props = FamilyIcon & PropsWithChildren<Pick<DropzoneOptions, 'accept' | 'minSize' | 'maxSize' | 'maxFiles' | 'onDrop' | 'onDropAccepted' | 'onDropRejected' | 'onFileDialogCancel' | 'onFileDialogOpen'> & {
    icon?: string;
    isDisabled: DropzoneOptions['disabled'];
}>;
export default function DBoxFile({ icon, iconFamilyClass, iconFamilyPrefix, isDisabled, children, ...dropzoneOptions }: Props): import("react/jsx-runtime").JSX.Element;
export {};
