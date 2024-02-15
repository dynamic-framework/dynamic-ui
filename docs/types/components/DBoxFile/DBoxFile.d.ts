import { type PropsWithChildren } from 'react';
import type { DropzoneOptions } from 'react-dropzone';
import type { BaseProps, FamilyIconProps } from '../interface';
type Props = BaseProps & FamilyIconProps & PropsWithChildren<Pick<DropzoneOptions, 'accept' | 'minSize' | 'maxSize' | 'maxFiles' | 'onDrop' | 'onDropAccepted' | 'onDropRejected' | 'onFileDialogCancel' | 'onFileDialogOpen' | 'disabled'> & {
    icon?: string;
}>;
export default function DBoxFile({ icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, disabled, children, className, style, ...dropzoneOptions }: Props): import("react/jsx-runtime").JSX.Element;
export {};
