import { PropsWithChildren } from 'react';
import type { DropzoneOptions } from 'react-dropzone';
declare type Props = PropsWithChildren<Pick<DropzoneOptions, 'accept' | 'minSize' | 'maxSize' | 'maxFiles' | 'onDrop' | 'onDropAccepted' | 'onDropRejected' | 'onFileDialogCancel' | 'onFileDialogOpen'> & {
    icon?: string;
    iconFamilyClass?: string;
    iconFamilyPrefix?: string;
    isDisabled: DropzoneOptions['disabled'];
}>;
export default function MBoxFile({ icon, iconFamilyClass, iconFamilyPrefix, isDisabled, children, ...dropzoneOptions }: Props): JSX.Element;
export {};
